import Scholarship from '../infra/typeorm/entities/Scholarship'
import IScholarShipRepository from '../repositories/IScholarRepository'
import { inject, injectable } from 'tsyringe'
import { InvalidPropertyError } from '@shared/errors/Error'

interface Request {
    amount: number
    scholarshipId: string
    donorId: any
}

@injectable()
export default class ContributeToScholarShipService {
    constructor(@inject('ScholarshipRepository') private scholarshipRepository: IScholarShipRepository){ }
    public async execute({ amount, donorId, scholarshipId }: Request): Promise<Scholarship> {
        const scholarship = await this.scholarshipRepository.findById(scholarshipId)
        if (!scholarship) {
            throw new InvalidPropertyError('Scholarship with this id does not exist')
        }
        scholarship.amount = amount
        scholarship.donor = [donorId]
        await this.scholarshipRepository.save(scholarship)
        return scholarship
    }
}