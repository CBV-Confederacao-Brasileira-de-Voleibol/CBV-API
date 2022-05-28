import { inject, injectable } from 'tsyringe';

import ICompetitiomRepository from '@modules/competition/repositories/ICompetitionRepository';
import AppError from '@shared/errors/AppError';

import Team from '../infra/typeorm/entities/Team';
import ITeamRepository from '../repositories/ITeamRepository';

interface IRequest {
    name: string;
    img: string;
    competition_id: string;
}

@injectable()
class CreateTeamService {
    constructor(
        @inject('TeamRepository')
        private teamRepository: ITeamRepository,
        @inject('CompetitionRepository')
        private competitionRepository: ICompetitiomRepository,
    ) {}

    public async execute({
        name,
        img,
        competition_id,
    }: IRequest): Promise<Team> {
        const findCompetition = await this.competitionRepository.findById(
            competition_id,
        );

        if (!findCompetition) {
            throw new AppError('Competition id is not exists!', 401);
        }
        const team = await this.teamRepository.create({
            name,
            img,
            competition_id,
        });

        return team;
    }
}

export default CreateTeamService;
