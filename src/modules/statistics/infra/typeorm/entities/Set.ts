import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import StatisticsBySet from './StatisticsBySet';

@Entity('set')
class Set {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }

    @ManyToMany(() => StatisticsBySet, statisticsBySet => statisticsBySet.sets)
    statistics_by_set: StatisticsBySet;
}

export default Set;
