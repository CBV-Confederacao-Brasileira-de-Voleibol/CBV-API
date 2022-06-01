import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    Timestamp,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Statistics from '@modules/statistics/infra/typeorm/entities/Statistics';
import StatisticsBySet from '@modules/statistics/infra/typeorm/entities/StatisticsBySet';
import teamRouter from '@modules/team/infra/http/routes/team.routes';
import Team from '@modules/team/infra/typeorm/entities/Team';

import Competition from './Competition';

@Entity('match')
class Match {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    date: Date;

    @Column()
    time: string;

    @Column()
    team1: string;

    @Column()
    team2: string;

    @Column()
    round: number;

    @Column()
    scoreboard_team1: number;

    @Column()
    scoreboard_team2: number;

    @Column()
    phase_id: string;

    @Column()
    competition_id: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

    @ManyToOne(() => Competition, competition => competition.matchs)
    @JoinColumn({ name: 'competition_id' })
    competition: Competition;

    @OneToOne(() => Team, team => team)
    @JoinColumn({ name: 'team1' })
    team11: Team;

    @OneToOne(() => Team, team => team)
    @JoinColumn({ name: 'team2' })
    team22: Team;

    @OneToMany(() => Statistics, statistics => statistics.match)
    statistics: Statistics;

    @OneToMany(() => StatisticsBySet, statisticsBySet => statisticsBySet.match)
    statisticsBySet: StatisticsBySet;
}

export default Match;
