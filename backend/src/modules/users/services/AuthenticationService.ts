import { sign } from 'jsonwebtoken';
import User from '../infra/typeorm/entities/User';
import {InvalidPropertyError} from '@shared/errors/Error';
import IUsersRepository from '../repositories/IUserRepository';
import { inject, injectable } from 'tsyringe';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';
import authConfig from '@config/auth';
import { removeSensitiveData } from '@utils/utils';

interface Request {
  email: string;
  password: string;
}
  
@injectable()
class AuthenticateUserService { 
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider
  ) {}

  public async execute({
    email,
    password,
  }: Request): Promise<{ user: User; token: string }> {
    const user = await this.usersRepository.findByEmail(email);
      if (!user) {
        throw new InvalidPropertyError('User does not exist')
    }

    const passwordMatched = await this.hashProvider.compareHash(
      password,
      user.password
    );

      if (!passwordMatched) {
          throw new InvalidPropertyError('Incorrect email/password combination');
        
    }

    const token = sign({id: user.id, email: user.email}, authConfig.JWT.secret, {
      expiresIn: authConfig.JWT.expires,
    });
    
    // @ts-ignore
    return { user: removeSensitiveData(user), token };
  }
}

export default AuthenticateUserService;
