import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToOne
} from 'typeorm'
import User from '@modules/users/infra/typeorm/entities/User'
import Scholarship from './Scholarship'

@Entity('students')
export default class Student {
    @PrimaryGeneratedColumn('increment')
    id: string

    @OneToOne(() => User, user => user.id, {cascade: true, onDelete: 'CASCADE'})
    @JoinColumn()
    user: User

    @ManyToOne(() => Scholarship, scholarship => scholarship.student)
    scholarships: Scholarship[] 

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}  