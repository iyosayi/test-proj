import Scholarship from '../infra/typeorm/entities/Scholarship'
import IScholarShipRepository from '../repositories/IScholarRepository'
import { inject, injectable } from 'tsyringe'

interface Request {
    description: string
    amount: number
    donor: string
    name: string
}

@injectable()
export default class CreateScholarShipService {
    constructor(@inject('ScholarshipRepository') private scholarshipRepository: IScholarShipRepository){ }
    public async execute({description, name, amount,donor}: Request): Promise<Scholarship> {
        return this.scholarshipRepository.create({description, name, amount,donor})
    }
} 