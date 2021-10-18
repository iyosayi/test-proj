import User from "@modules/users/infra/typeorm/entities/User";
import IApplyScholarshipDTO from "../dtos/IApplyScholarshipDTO";
import IAwardScholarshipDTO from "../dtos/IAwardScholarshipDTO";
import IScholarShipDTO from "../dtos/ICreateScholarShipDTO";
import ScholarshipApplications from "../infra/typeorm/entities/Applications";
import Scholarship from "../infra/typeorm/entities/Scholarship";

export default interface IScholarShipRepository {
    create(data: IScholarShipDTO): Promise<Scholarship>
    findAll(): Promise<Scholarship[]>
    findById(id: string): Promise<Scholarship | undefined>
    award(data: IAwardScholarshipDTO): Promise<Scholarship>
    save(data: Scholarship): Promise<Scholarship>
    apply(data: IApplyScholarshipDTO): Promise<ScholarshipApplications>
    getApplications(id: User): Promise<ScholarshipApplications[]>
    getDonorApplications(id: Scholarship): Promise<ScholarshipApplications[]>
}