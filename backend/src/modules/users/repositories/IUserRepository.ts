import User from '../infra/typeorm/entities/User'
import ICreateUserDto from '../dtos/ICreateUserDTO'

export default interface IUserRepository {
    create(data: ICreateUserDto): Promise<User>
    findAll(): Promise<User[]>
    findById(id: string): Promise<User | undefined>
    findByEmail(email: string): Promise<User | undefined>
    save(user: User): Promise<User>
}