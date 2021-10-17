import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToMany
} from 'typeorm'
import User from '@modules/users/infra/typeorm/entities/User'
import Scholarship from './Scholarship'
import Donor from './Donor'

@Entity('contributions')
export default class ScholarshipContribution {
    @PrimaryGeneratedColumn('increment')
    id: string

    @ManyToMany(() => Donor, donor => donor.user, )
    @JoinColumn()
    donor: Donor[]

    @ManyToMany(() => Scholarship, scholarship => scholarship.donors)
    scholarships: Scholarship[] 

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}  