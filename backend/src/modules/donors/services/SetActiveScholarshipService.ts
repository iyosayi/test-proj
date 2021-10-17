import Scholarship from '../infra/typeorm/entities/Scholarship'
import IScholarShipRepository from '../repositories/IScholarRepository'
import { inject, injectable } from 'tsyringe'
import { InvalidPropertyError } from '@shared/errors/Error'

interface Request {
    scholarshipId: string
  isActive: boolean
}

@injectable()
export default class SetScholarShipActiveService {
    constructor(@inject('ScholarshipRepository') private scholarshipRepository: IScholarShipRepository){ }
    public async execute({ isActive, scholarshipId }: Request): Promise<Scholarship> {
        const scholarship = await this.scholarshipRepository.findById(scholarshipId)
        if (!scholarship) {
            throw new InvalidPropertyError('Scholarship details not found')
        }
        if (scholarship) {
            scholarship.isActive = isActive
            
        }
        await this.scholarshipRepository.save(scholarship)
        return scholarship
    }
}