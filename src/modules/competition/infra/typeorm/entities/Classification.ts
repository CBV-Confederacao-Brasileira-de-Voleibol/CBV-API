import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Team from '@modules/team/infra/typeorm/entities/Team';

@Entity('classification')
class Classification {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    spots: number;

    @Column()
    defeat: number;

    @Column()
    victory: number;

    @Column()
    matches: number;

    @Column()
    sets_won: number;

    @Column()
    lost_sets: number;

    @Column()
    team_id: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

    @ManyToOne(() => Team, team => team.classification)
    @JoinColumn({ name: 'team_id' })
    teams: Team[];
}

export default Classification;
