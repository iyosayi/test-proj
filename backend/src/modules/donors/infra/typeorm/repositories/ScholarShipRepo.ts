import {getRepository, Repository} from 'typeorm'
import IScholarShipRepository from '@modules/donors/repositories/IScholarRepository'
import Scholarship, {ScholarshipStatus} from '../entities/Scholarship'
import IScholarShipDTO from '@modules/donors/dtos/ICreateScholarShipDTO'
import IAwardScholarshipDTO from '@modules/donors/dtos/IAwardScholarshipDTO'
import User from '@modules/users/infra/typeorm/entities/User'
import Donor from '../entities/Donor'

export default class ScholarshipRepository implements IScholarShipRepository {
    private ormRepository: Repository<Scholarship>
    private userRepository: Repository<User>
    private donorRepository: Repository<Donor>

    constructor() {
        this.ormRepository = getRepository(Scholarship)
        this.userRepository = getRepository(User)
    }

    public async findAll(): Promise<Scholarship[]> {
        return this.ormRepository.find({ relations: ['createdBy']})
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
    public async award({scholarshipId, studentId}: IAwardScholarshipDTO): Promise<Scholarship> {
        const sch = await this.ormRepository.findOne(scholarshipId)
        const user = await this.userRepository.findOne(studentId)
        const response = await this.ormRepository.createQueryBuilder().update(Scholarship).set({status: ScholarshipStatus.AWARDED}).where("id = :scholarshipId", {scholarshipId}).returning('*').execute()
        if (sch && user) {
            sch.studentId = [user.id]
            
        }
        return response.raw[0]
    }

    public async save(sch: Partial<Scholarship>): Promise<Scholarship> {
        return this.ormRepository.save(sch)
    }
}