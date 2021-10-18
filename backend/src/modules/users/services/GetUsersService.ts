import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUserRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class GetUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute(): Promise<User[]> {
    const users = await this.usersRepository.findAll();

    return users;
  }
}


