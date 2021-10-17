import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUserRepository';
import { inject, injectable } from 'tsyringe';
import { InvalidPropertyError } from '@shared/errors/Error';

@injectable()
class GetUserByIdService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute(id: string): Promise<User | undefined> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new InvalidPropertyError('User does not exist')
    }
     return user;
  }
}

export default GetUserByIdService;
