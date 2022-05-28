import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Classification from '@modules/competition/infra/typeorm/entities/Classification';
import Competition from '@modules/competition/infra/typeorm/entities/Competition';
import Member from '@modules/team/infra/typeorm/entities/Member';

@Entity()
class Team {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    img: string;

    @Column()
    competition_id: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
    // relação

    @ManyToOne(() => Competition, competition => competition.teams)
    @JoinColumn({ name: 'competition_id' })
    competition: Competition;

    @OneToMany(() => Classification, classification => classification.teams)
    classification: Classification;

    @OneToMany(() => Member, member => member.team)
    members: Member[];
}

export default Team;
