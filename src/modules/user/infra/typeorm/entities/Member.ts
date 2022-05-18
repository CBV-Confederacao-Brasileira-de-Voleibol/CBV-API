import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Statistics from '@modules/statistics/infra/typeorm/entities/Statistics';
import Team from '@modules/team/infra/typeorm/entities/Team';

@Entity('member')
class Member {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type: string;

    @Column()
    name: string;

    @Column()
    age: Date;

    @Column()
    position: string;

    @Column()
    team_id: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

    @ManyToOne(() => Team, team => team.members)
    @JoinColumn({ name: 'team_id' })
    team: Team;

    @OneToMany(() => Statistics, statistics => statistics.member)
    statistics: Statistics;
}

export default Member;
