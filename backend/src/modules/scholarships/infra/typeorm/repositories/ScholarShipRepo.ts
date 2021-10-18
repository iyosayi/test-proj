import {getRepository, Repository} from 'typeorm'
import IScholarShipRepository from '@modules/scholarships/repositories/IScholarRepository'
import Scholarship, {ScholarshipStatus} from '../entities/Scholarship'
import IScholarShipDTO from '@modules/scholarships/dtos/ICreateScholarShipDTO'
import IAwardScholarshipDTO from '@modules/scholarships/dtos/IAwardScholarshipDTO'
import User from '@modules/users/infra/typeorm/entities/User'
import AwardedScholarships from '../entities/AwardedScholarships'
import IApplyScholarshipDTO from '@modules/scholarships/dtos/IApplyScholarshipDTO'
import ScholarshipApplications from '../entities/Applications'

export default class ScholarshipRepository implements IScholarShipRepository {
    private ormRepository: Repository<Scholarship>
    private userRepository: Repository<User>
    private awardedScholarshipRepository: Repository<AwardedScholarships>
    private scholarshipApplications: Repository<ScholarshipApplications>

    constructor() {
        this.ormRepository = getRepository(Scholarship)
        this.userRepository = getRepository(User)
        this.awardedScholarshipRepository = getRepository(AwardedScholarships)
        this.scholarshipApplications = getRepository(ScholarshipApplications)
    }

    public async findAll(): Promise<Scholarship[]> {
        return this.ormRepository.find({ relations: ['donor']})
    }

    public async findById(id: string): Promise<Scholarship | undefined> {
        return this.ormRepository.findOne(id)
    }

    public async create(data: IScholarShipDTO): Promise<Scholarship> {
        // @ts-ignore
        const user = await this.userRepository.findOne(data.donor)
        const scholarship = this.ormRepository.create(data)
        if (user) {
            scholarship.donor = user
        }
        await this.ormRepository.save(scholarship)
        return scholarship
    }

    // @ts-ignore
    public async award({ scholarshipId, studentId }: IAwardScholarshipDTO): Promise<Scholarship> {
            const scholarship = await this.ormRepository.findOne(scholarshipId)
            const newStudent = this.awardedScholarshipRepository.create()
            const response = await this.ormRepository.createQueryBuilder().update(Scholarship).set({status: ScholarshipStatus.AWARDED}).where("id = :scholarshipId", {scholarshipId}).returning('*').execute()
            newStudent.student = studentId
        // @ts-ignore
        newStudent.scholarships = scholarship
        await this.awardedScholarshipRepository.save(newStudent)
        return response.raw[0]
        
    }

    public async save(sch: Partial<Scholarship>): Promise<Scholarship> {
        return this.ormRepository.save(sch)
    }

    public async apply({ studentId, scholarshipId }: IApplyScholarshipDTO): Promise<ScholarshipApplications> {
        const application = this.scholarshipApplications.create()
        application.student = studentId
        application.scholarship = scholarshipId
        await this.scholarshipApplications.save(application)
        return application
    }

    public async getApplications(id: User): Promise<ScholarshipApplications[]> {
        const applications = await this.scholarshipApplications.find({
            relations: ['scholarship'],
            where: {student: {id}}
        })
        return applications
    }
}