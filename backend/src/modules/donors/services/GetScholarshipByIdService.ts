import Scholarship from '../infra/typeorm/entities/Scholarship';
import IScholarShipRepository from '../repositories/IScholarRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class GetScholoarshipByIdService {
  constructor(
    @inject('ScholarshipRepository')
    private scholarshipRepository: IScholarShipRepository
  ) {}

  public async execute(id: string): Promise<Scholarship | undefined> {
    return this.scholarshipRepository.findById(id)
  }
}


