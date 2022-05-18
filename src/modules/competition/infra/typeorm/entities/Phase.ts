import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('phase')
class Phase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default Phase;
