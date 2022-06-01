import { getRepository, Repository } from 'typeorm';

import ISetRepository from '@modules/statistics/repositories/ISetRepository';

import Set from '../entities/Set';

class SetRepository implements ISetRepository {
    private ormRepository: Repository<Set>;

    constructor() {
        this.ormRepository = getRepository(Set);
    }

    public async create(name: string): Promise<Set> {
        const createSet = this.ormRepository.create({ name });
        await this.ormRepository.save(createSet);

        return createSet;
    }
    public async findById(set_id: string): Promise<Set | undefined> {
        const findSet = await this.ormRepository.findOne({ id: set_id });

        return findSet;
    }

    public async findByName(name: string): Promise<Set | undefined> {
        const findSet = await this.ormRepository.findOne({ name });

        return findSet;
    }

    public async findAll(): Promise<Set[]> {
        const findSet = await this.ormRepository.find();

        return findSet;
    }
}

export default SetRepository;
