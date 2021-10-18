import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToOne,
} from 'typeorm'
import User from '@modules/users/infra/typeorm/entities/User'
import Scholarship from './Scholarship'

@Entity('awarded_scholarships')
export default class AwardedScholarships {
    @PrimaryGeneratedColumn('increment')
    id: string

    @OneToOne(() => User, user => user.id, {cascade: true, onDelete: 'CASCADE'})
    @JoinColumn()
    student: User

    @ManyToOne(() => Scholarship, scholarship => scholarship.student)
    scholarships: Scholarship[] 

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}  