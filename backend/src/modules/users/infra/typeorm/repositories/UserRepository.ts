import {getRepository, Repository} from 'typeorm'
import User, { UserType } from '../entities/User'
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO'
import IUserRepository from '@modules/users/repositories/IUserRepository'

export default class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>

    constructor() {
        this.ormRepository = getRepository(User)
    }

    public async findAll(): Promise<User[]> {
        return this.ormRepository.find()
    }

    public async findById(id: string): Promise<User | undefined> {
        return this.ormRepository.findOne(id)
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        return this.ormRepository.findOne({where: {email}})
    }

    public async create(data: ICreateUserDTO): Promise<User> {
        // @ts-ignore
        const user = this.ormRepository.create(data)
        await this.ormRepository.save(user)
        return user
    }

    public async save(data: Partial<User>): Promise<User> {
        return this.ormRepository.save(data)
    }
}