import { getRepository, Repository } from 'typeorm';

import IPhaseRepository from '@modules/competition/repositories/IPhaseRepository';

import Phase from '../entities/Phase';

class PhaseRepository implements IPhaseRepository {
    private ormRepository: Repository<Phase>;

    constructor() {
        this.ormRepository = getRepository(Phase);
    }

    public async create(name: string): Promise<Phase> {
        const newPhase = this.ormRepository.create({ name });
        await this.ormRepository.save(newPhase);
        return newPhase;
    }

    public async findById(phase_id: string): Promise<Phase | undefined> {
        const findPhase = await this.ormRepository.findOne(phase_id);

        return findPhase;
    }

    public async findAll(): Promise<Phase[]> {
        const allPhase = await this.ormRepository.find();
        return allPhase;
    }
}

export default PhaseRepository;
