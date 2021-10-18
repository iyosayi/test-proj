import Scholarship from '@modules/scholarships/infra/typeorm/entities/Scholarship'
import AwardedScholarships from '@modules/scholarships/infra/typeorm/entities/AwardedScholarships'
import {Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    OneToOne,
    ManyToOne
} from 'typeorm'
import ScholarshipApplications from '@modules/scholarships/infra/typeorm/entities/Applications'


export enum UserType {
    DONOR = 'donor',
    STUDENT = 'student'
}

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    password: string

    @Column()
    email: string

    @Column({
        nullable: true
    })
    profile: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Column({
        type: 'enum',
        enum: UserType,
    })
    type: UserType

    @OneToMany(() => Scholarship, scholarship => scholarship.donor)
    scholarships: Scholarship[]

    @OneToOne(() => AwardedScholarships, a => a.student)
    student: AwardedScholarships

    @OneToMany(() => ScholarshipApplications, user => user.student)
    application: ScholarshipApplications[]
}