import { inject, injectable } from 'tsyringe';

import ICompetitiomRepository from '@modules/competition/repositories/ICompetitionRepository';
import AppError from '@shared/errors/AppError';

import Team from '../infra/typeorm/entities/Team';
import ITeamRepository from '../repositories/ITeamRepository';

@injectable()
class ShowAllTeamCompetitionService {
    constructor(
        @inject('TeamRepository')
        private teamRepository: ITeamRepository,
        @inject('CompetitionRepository')
        private competitionRepository: ICompetitiomRepository,
    ) {}

    async execute(competition_id: string): Promise<Team[]> {
        const competition = await this.competitionRepository.findById(
            competition_id,
        );

        if (!competition) {
            throw new AppError('Competition id is not exists!', 401);
        }

        const teams = await this.teamRepository.findByCompetitionId(
            competition_id,
        );

        return teams;
    }
}

export default ShowAllTeamCompetitionService;
