import { inject, injectable } from 'tsyringe';

import Phase from '../infra/typeorm/entities/Phase';
import IPhaseRepository from '../repositories/IPhaseRepository';

interface IRequest {
    competition_id: string;
    phase_id: string;
}

@injectable()
class ShowPhaseService {
    constructor(
        @inject('PhaseRepository')
        private phaseRepository: IPhaseRepository,
    ) {}

    async execute(): Promise<Phase[]> {
        const phases = await this.phaseRepository.findAll();

        return phases;
    }
}

export default ShowPhaseService;
