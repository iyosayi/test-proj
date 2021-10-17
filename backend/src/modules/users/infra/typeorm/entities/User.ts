import Scholarship from '@modules/donors/infra/typeorm/entities/Scholarship'
import {Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm'

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
}