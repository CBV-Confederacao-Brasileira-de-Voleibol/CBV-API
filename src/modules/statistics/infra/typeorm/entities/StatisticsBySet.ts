import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Member from '@modules/user/infra/typeorm/entities/Member';

import Set from './Set';

@Entity('statistics_by_set')
class StatisticsBySet {
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
    set_id: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

    @ManyToOne(() => Member, member => member.statistics)
    @JoinColumn({ name: 'member_id' })
    member: Member;

    @ManyToMany(() => Set, set => set.statistics_by_set)
    @JoinColumn({ name: 'member_id' })
    sets: Set[];
}

export default StatisticsBySet;
