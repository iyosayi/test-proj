import UserType from '@modules/users/infra/typeorm/entities/User'
export default interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    type: UserType
}