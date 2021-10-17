import User from '../infra/typeorm/entities/User'
import IUserRepository from '../repositories/IUserRepository'
import IHashProvider from '../providers/HashProvider/models/IHashProvider'
import { inject, injectable } from 'tsyringe'
import authConfig from '@config/auth'
import { sign } from 'jsonwebtoken'
import { UniqueConstraintError } from '@shared/errors/Error'
import {removeSensitiveData} from '@utils/utils'

interface Request {
    name: string
    email: string
    password: string
    type: any
}

@injectable()
export default class CreateUserService {
    constructor(@inject('UsersRepository') private usersRepository: IUserRepository,
        @inject('HashProvider')
        private hashProvider: IHashProvider) { }
    
    public async execute({email, name, password, type}: Request): Promise<{user: User, token: string}> {
        const emailExists = await this.usersRepository.findByEmail(email)
        if (emailExists) {
            throw new UniqueConstraintError('Email address already exists.')
        }
        const hashedpassword = await this.hashProvider.generateHash(password)
        const user = await this.usersRepository.create({name, email, type, password: hashedpassword})
        const token = sign({ id: user.id, email: user.email }, authConfig.JWT.secret, {
            expiresIn: authConfig.JWT.expires
        })
        // @ts-ignore
        return {user: removeSensitiveData(user), token}
    }
}