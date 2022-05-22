import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { v4 as uuid } from 'uuid';

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
    phase_id: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default Match;
