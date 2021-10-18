import Scholarship from '../infra/typeorm/entities/Scholarship';
import IScholarShipRepository from '../repositories/IScholarRepository';
import { inject, injectable } from 'tsyringe';
import {InvalidPropertyError} from '@shared/errors/Error';

@injectable()
export default class GetScholoarshipByIdService {
  constructor(
    @inject('ScholarshipRepository')
    private scholarshipRepository: IScholarShipRepository
  ) {}

  public async execute(id: string): Promise<Scholarship | undefined> {
    if (!id) {
      throw new InvalidPropertyError('Id is required');
    }
    return this.scholarshipRepository.findById(id)
  }
}


