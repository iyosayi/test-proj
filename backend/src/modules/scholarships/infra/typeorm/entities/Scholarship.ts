import User from '@modules/users/infra/typeorm/entities/User'
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    JoinColumn,
    ManyToOne,
    ManyToMany
} from 'typeorm'
// import Donor from './Donor'
import Student from './AwardedScholarships'
import ScholarshipApplications from './Applications'


export enum ScholarshipStatus {
    AWARDED = 'awarded',
    IN_PROGRESS = 'in-progress'
}

@Entity('scholarships')
export default class Scholarship {
    @PrimaryGeneratedColumn('increment')
    id: string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    amount: number

    @Column({ nullable: true })
    isApplied: true

    @Column({
        type: 'boolean',
        default: true
    })
    isActive: boolean

    @Column({
        type: 'enum',
        enum: ScholarshipStatus,
        default: ScholarshipStatus.IN_PROGRESS
    })
    status: ScholarshipStatus

    @ManyToOne(() => User, user => user.scholarships, {onDelete: 'SET NULL'})
    donor: User

    @OneToMany(() => Student, student => student.scholarships, { onDelete: 'SET NULL' })
    student: Student

    @OneToMany(() => ScholarshipApplications, sch => sch.scholarship)
    application: ScholarshipApplications

    // @ManyToMany(() => Donor, con => con.scholarship)
    // @JoinColumn({name: 'contribution_table'})
    // donors: Donor[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}