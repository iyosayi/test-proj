import User from "@modules/users/infra/typeorm/entities/User";
export default interface IAwardScholarshipDTO {
    studentId: User;
    scholarshipId: string;
    isActive: boolean
}