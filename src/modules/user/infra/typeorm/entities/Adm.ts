import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('adm')
class Adm {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    login: string;

    @Column()
    password: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default Adm;
