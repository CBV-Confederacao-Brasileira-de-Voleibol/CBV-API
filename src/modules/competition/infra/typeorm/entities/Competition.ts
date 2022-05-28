import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Team from '@modules/team/infra/typeorm/entities/Team';

import Match from './Match';

@Entity('competition')
class Competition {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: number;

    @Column()
    date_start: Date;

    @Column()
    date_end: Date;

    @Column()
    type: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

    // relação

    @ManyToOne(() => Team, team => team.competition)
    @JoinColumn({ name: 'id' })
    teams: Team[];

    @OneToMany(() => Match, match => match.competition)
    matchs: Match[];
}

export default Competition;
