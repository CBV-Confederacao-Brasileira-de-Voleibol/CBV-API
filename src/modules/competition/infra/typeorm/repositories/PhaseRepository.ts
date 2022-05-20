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
}

export default PhaseRepository;
