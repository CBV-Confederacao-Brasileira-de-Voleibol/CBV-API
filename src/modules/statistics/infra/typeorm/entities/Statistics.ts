import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Member from '@modules/user/infra/typeorm/entities/Member';

@Entity('statistics')
class Statistics {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    spots: number;

    @Column()
    withdraw: number;

    @Column()
    block: number;

    @Column()
    member_id: string;

    @Column()
    right_attack: number;

    @Column()
    wrong_attack: number;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

    @ManyToOne(() => Member, member => member.statistics)
    @JoinColumn({ name: 'member_id' })
    member: Member;
}

export default Statistics;
