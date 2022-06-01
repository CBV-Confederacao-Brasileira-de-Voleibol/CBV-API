import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Match from '@modules/competition/infra/typeorm/entities/Match';
import Member from '@modules/team/infra/typeorm/entities/Member';

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

    @Column()
    match_id: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

    @ManyToOne(() => Member, member => member.statistics)
    @JoinColumn({ name: 'member_id' })
    member: Member;

    @ManyToOne(() => Match, match => match.statistics)
    @JoinColumn({ name: 'match_id' })
    match: Match;
}

export default Statistics;
