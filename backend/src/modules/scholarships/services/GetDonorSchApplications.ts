import IScholarShipRepository from '../repositories/IScholarRepository';
import { inject, injectable } from 'tsyringe';
import {InvalidPropertyError} from '@shared/errors/Error';
import ScholarshipApplications from '../infra/typeorm/entities/Applications';
import Scholarship from '../infra/typeorm/entities/Scholarship';

@injectable()
export default class GetDonorSchApplicationService {
  constructor(
    @inject('ScholarshipRepository')
    private scholarshipRepository: IScholarShipRepository
  ) {}

  public async execute(id: Scholarship): Promise<ScholarshipApplications[]> {
    if (!id) {
      throw new InvalidPropertyError('Id is required');
    }
    return this.scholarshipRepository.getDonorApplications(id)
  }
}


