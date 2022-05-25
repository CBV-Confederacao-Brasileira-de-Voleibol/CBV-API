import Phase from '../infra/typeorm/entities/Phase';

interface IPhaseRepository {
    create(name: string): Promise<Phase>;
    findById(phase_id: string): Promise<Phase | undefined>;
    findAll(): Promise<Phase[]>;
}

export default IPhaseRepository;
