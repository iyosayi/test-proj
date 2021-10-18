import Scholarship from '../infra/typeorm/entities/Scholarship'
import IScholarShipRepository from '../repositories/IScholarRepository'
import { inject, injectable } from 'tsyringe'
import IUserRepository from '@modules/users/repositories/IUserRepository'
import { InvalidPropertyError } from '@shared/errors/Error'

interface Request {
    studentId: string
    scholarshipId: string
}

@injectable()
export default class ApplyToScholarshipService {
    constructor(@inject('ScholarshipRepository') private scholarshipRepository: IScholarShipRepository, @inject('UsersRepository') private usersRepository: IUserRepository){ }
    public async execute({ studentId, scholarshipId }: Request): Promise<Scholarship> {
        const user = await this.usersRepository.findById(studentId)
        if (!user) {
            throw new InvalidPropertyError('User does not exist')
        }
        // @ts-ignore
        return this.scholarshipRepository.apply({studentId: user, scholarshipId})
    }
} 