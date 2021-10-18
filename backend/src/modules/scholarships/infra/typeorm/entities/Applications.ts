import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    ManyToOne,
} from 'typeorm'
import User from '@modules/users/infra/typeorm/entities/User'
import Scholarship from './Scholarship'

@Entity('scholarship_applications')
export default class ScholarshipApplications {
    @PrimaryGeneratedColumn('increment')
    id: string

    @ManyToOne(() => User, user => user.id)
    @JoinColumn()
    student: User

    @ManyToOne(() => Scholarship, scholarship => scholarship.id)
    @JoinColumn()
    scholarship: Scholarship

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}  