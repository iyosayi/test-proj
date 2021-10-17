import Scholarship from '../infra/typeorm/entities/Scholarship'
import IScholarShipRepository from '../repositories/IScholarRepository'
import { inject, injectable } from 'tsyringe'

interface Request {
    studentId: string
    scholarshipId: string
}

@injectable()
export default class AwardScholarShipService {
    constructor(@inject('ScholarshipRepository') private scholarshipRepository: IScholarShipRepository){ }
    public async execute({ studentId, scholarshipId }: Request): Promise<Scholarship> {
        // @ts-ignore
        return this.scholarshipRepository.award({studentId, scholarshipId})

    }
}