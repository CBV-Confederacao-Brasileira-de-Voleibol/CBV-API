import { inject, injectable } from 'tsyringe';

import ITeamRepository from '@modules/team/repositories/ITeamRepository';
import AppError from '@shared/errors/AppError';

import ICompetitiomRepository from '../repositories/ICompetitionRepository';
import IMatchRepository from '../repositories/IMatchRepository';
import IPhaseRepository from '../repositories/IPhaseRepository';

interface IRequest {
    competition_id: string;
}
@injectable()
class GenerateMatchService {
    constructor(
        @inject('TeamRepository')
        private teamRepository: ITeamRepository,
        @inject('MatchRepository')
        private matchRepository: IMatchRepository,
        @inject('PhaseRepository')
        private phaseRepository: IPhaseRepository,
        @inject('CompetitionRepository')
        private competitionRepository: ICompetitiomRepository,
    ) {}

    async execute({ competition_id }: IRequest): Promise<true> {
        const competition = await this.competitionRepository.findById(
            competition_id,
        );

        if (!competition) {
            throw new AppError('Competition id is not exists!', 401);
        }

        const allTeams = await this.teamRepository.findByCompetitionId(
            competition_id,
        );
        const allTeamsLength = allTeams.length;
        if (allTeamsLength !== 12) {
            throw new AppError(
                'the number of teams registered in the competition must be 12!',
                401,
            );
        }
        // gerar a fase Classificatória.
        const pahse = await this.phaseRepository.create('Fase Classificatória');
        // gerando as partidas

        let team1;
        let team2;

        const allTeamsLength2 = allTeamsLength - 1;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i <= allTeamsLength; i++) {
            // eslint-disable-next-line no-plusplus
            for (let j = i + 1; j <= allTeamsLength2; j++) {
                team1 = allTeams[i].name;
                team2 = allTeams[j].name;

                console.log(team1, 'X', team2, ': Rodada ', i);
            }
        }

        return true;
    }
}

export default GenerateMatchService;
