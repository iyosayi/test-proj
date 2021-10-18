import IScholarShipRepository from '../repositories/IScholarRepository';
import { inject, injectable } from 'tsyringe';
import {InvalidPropertyError} from '@shared/errors/Error';
import User from '@modules/users/infra/typeorm/entities/User';
import ScholarshipApplications from '../infra/typeorm/entities/Applications';

@injectable()
export default class GetApplicationListService {
  constructor(
    @inject('ScholarshipRepository')
    private scholarshipRepository: IScholarShipRepository
  ) {}

  public async execute(id: User): Promise<ScholarshipApplications[]> {
    if (!id) {
      throw new InvalidPropertyError('Id is required');
    }
    return this.scholarshipRepository.getApplications(id)
  }
}


