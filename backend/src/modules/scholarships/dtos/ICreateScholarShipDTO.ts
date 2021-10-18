import User from '@modules/users/infra/typeorm/entities/User'
export default interface IScholarShipDTO {
    description: string;
    amount: number;
    donor: any;
    name: string;
}