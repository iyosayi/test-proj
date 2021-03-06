import {container} from 'tsyringe'

import '@modules/users/providers'
import IUserRepository from '@modules/users/repositories/IUserRepository'
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository'

import IScholarRepository from '@modules/scholarships/repositories/IScholarRepository'
import ScholarshipRepository from '@modules/scholarships/infra/typeorm/repositories/ScholarShipRepo'

container.registerSingleton<IUserRepository>('UsersRepository', UserRepository)
container.registerSingleton<IScholarRepository>('ScholarshipRepository',ScholarshipRepository)