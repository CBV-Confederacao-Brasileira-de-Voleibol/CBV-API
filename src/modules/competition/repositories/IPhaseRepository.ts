import Phase from '../infra/typeorm/entities/Phase';

interface IPhaseRepository {
    create(name: string): Promise<Phase>;
}

export default IPhaseRepository;
