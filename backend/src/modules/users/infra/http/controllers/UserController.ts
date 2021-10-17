import { Request, Response } from 'express';

import GetUsersService from '@modules/users/services/GetUsersService';
import CreateUserService from '@modules/users/services/CreateUserService';
import AuthenticationService from '@modules/users/services/AuthenticationService'
import GetUserById from '@modules/users/services/GetUserByIdService'
import { container } from 'tsyringe';
import { handleSuccess, handleError } from '@utils/utils'
import {StatusCodes} from 'http-status-codes'
import UpdateProfileService from '@modules/users/services/UpdateProfileService';

class UsersController {

  public async all(request: Request, response: Response): Promise<Response> {
    try {
      const showUsers = container.resolve(GetUsersService);
      const users = await showUsers.execute();
      return handleSuccess(response, StatusCodes.OK, users, 'User retrieved successfully')
    } catch (error: any) {
      return handleError(response, error.statusCode, error.message);
    }
  }

  public async updateProfile(request: Request, response: Response): Promise<Response> {
    try {
      const {id} = request.params;
      const {profile,} = request.body;
      const profileService = container.resolve(UpdateProfileService);
      const users = await profileService.execute({id, profile});
      return handleSuccess(response, StatusCodes.OK, users, 'Profile updated successfully')
    } catch (error: any) {
      return handleError(response, error.statusCode, error.message);
    }
  }

  public async me(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const showUser = container.resolve(GetUserById);
      const user = await showUser.execute(id);
      return handleSuccess(response, StatusCodes.OK, user, 'User retrieved successfully');
    } catch (error: any) {
      return handleError(response, error.statusCode, error.message)
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password, type } = request.body;
      const createUser = container.resolve(CreateUserService);
      const user = await createUser.execute({
        type,
        name,
        email,
        password,
      });
      return handleSuccess(response, StatusCodes.CREATED, user, 'User created successfully');
    } catch (error: any) {
      return handleError(response, error.statusCode, error.message)
    }
  }
    public async login(request: Request, response: Response): Promise<Response> {
        try {
            const {email, password} = request.body
            const loggedInUser = container.resolve(AuthenticationService)
            const user = await loggedInUser.execute({email, password});
            return handleSuccess(response, StatusCodes.OK, user, 'User logged in successfully');
            
        } catch (error) {
           return handleError(response, StatusCodes.INTERNAL_SERVER_ERROR, 'An error occured')
        }
    }
}

export default UsersController;
