import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    OneToOne,
    JoinColumn,
    ManyToMany
} from 'typeorm'
import User from '@modules/users/infra/typeorm/entities/User'
import Scholarship from './Scholarship'


@Entity('donors')
export default class Donor {
    @PrimaryGeneratedColumn('increment')
    id: string

    @OneToOne(() => User, user => user.id, {cascade: true, onDelete: 'CASCADE'})
    @JoinColumn()
    user: User

    @OneToMany(() => Scholarship, scholarship => scholarship.donor)
    scholarships: Scholarship[]
    
    @ManyToMany(() => Scholarship, sch => sch.donors)
    scholarship: Scholarship[]

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}  