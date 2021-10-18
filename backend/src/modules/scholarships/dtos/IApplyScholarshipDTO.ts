import User from "@modules/users/infra/typeorm/entities/User";
import Scholarship from "../infra/typeorm/entities/Scholarship";

export default interface IApplyScholarshipDTO {
    studentId: User
    scholarshipId: Scholarship
}