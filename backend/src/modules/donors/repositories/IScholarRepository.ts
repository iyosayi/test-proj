import IAwardScholarshipDTO from "../dtos/IAwardScholarshipDTO";
import IScholarShipDTO from "../dtos/ICreateScholarShipDTO";
import Scholarship from "../infra/typeorm/entities/Scholarship";

export default interface IScholarShipRepository {
    create(data: IScholarShipDTO): Promise<Scholarship>
    findAll(): Promise<Scholarship[]>
    findById(id: string): Promise<Scholarship | undefined>
    award(data: IAwardScholarshipDTO): Promise<Scholarship>
    save(data: Scholarship): Promise<Scholarship>
}