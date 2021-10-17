import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUserRepository';
import { inject, injectable } from 'tsyringe';
import { InvalidPropertyError } from '@shared/errors/Error';
import { removeSensitiveData } from '@utils/utils';

interface Request {
    id: string
    profile: string
}
@injectable()
class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute({id, profile}: Request): Promise<User | undefined> {
      const user = await this.usersRepository.findById(id);
      if (!user) {
          throw new InvalidPropertyError('User does not exist');
      }
      user.profile = profile
    await this.usersRepository.save(user);
    // @ts-ignore
    return removeSensitiveData(user)
  }
}

export default UpdateProfileService;
