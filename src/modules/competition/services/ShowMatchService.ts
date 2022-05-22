import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Match from '../infra/typeorm/entities/Match';
import ICompetitiomRepository from '../repositories/ICompetitionRepository';
import IMatchRepository from '../repositories/IMatchRepository';
import IPhaseRepository from '../repositories/IPhaseRepository';

interface IRequest {
    competition_id: string;
    phase_id: string;
}

@injectable()
class ShowMatchService {
    constructor(
        @inject('MatchRepository')
        private matchRepository: IMatchRepository,
        @inject('CompetitionRepository')
        private competitionRepository: ICompetitiomRepository,
        @inject('PhaseRepository')
        private phaseRepository: IPhaseRepository,
    ) {}

    async execute({ competition_id, phase_id }: IRequest): Promise<Match[]> {
        const competition = await this.competitionRepository.findById(
            competition_id,
        );

        if (!competition) {
            throw new AppError('Competition id is not exists!', 401);
        }

        const phase = await this.phaseRepository.findById(phase_id);

        if (!phase) {
            throw new AppError('phase  id is not exists!', 401);
        }

        const matchs = await this.matchRepository.findAllMatchOfCompetition(
            competition_id,
            phase_id,
        );

        return matchs;
    }
}

export default ShowMatchService;
