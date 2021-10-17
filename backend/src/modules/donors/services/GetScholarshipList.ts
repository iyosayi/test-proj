import Scholarship from '../infra/typeorm/entities/Scholarship';
import IScholarShipRepository from '../repositories/IScholarRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class GetScholoarshipListService {
  constructor(
    @inject('ScholarshipRepository')
    private scholarshipRepository: IScholarShipRepository
  ) {}

  public async execute(): Promise<Scholarship[]> {
    return this.scholarshipRepository.findAll()
  }
}


