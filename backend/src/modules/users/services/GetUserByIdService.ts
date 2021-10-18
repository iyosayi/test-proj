import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUserRepository';
import { inject, injectable } from 'tsyringe';
import { InvalidPropertyError } from '@shared/errors/Error';
import { removeSensitiveData } from '@utils/utils';

@injectable()
class GetUserByIdService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute(id: string): Promise<User | undefined> {
    if (!id) {
      throw new InvalidPropertyError('Id is required');
    }
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new InvalidPropertyError('User does not exist')
    }

    // @ts-ignore
     return removeSensitiveData(user);
  }
}

export default GetUserByIdService;
