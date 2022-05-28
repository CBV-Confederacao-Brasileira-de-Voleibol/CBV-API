import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Team from '../infra/typeorm/entities/Team';
import ITeamRepository from '../repositories/ITeamRepository';

@injectable()
class ShowTeamService {
    constructor(
        @inject('TeamRepository')
        private teamRepository: ITeamRepository,
    ) {}

    async execute(team_id: string): Promise<Team> {
        const team = await this.teamRepository.findById(team_id);

        if (!team) {
            throw new AppError('team id is not exists!', 401);
        }
        return team;
    }
}

export default ShowTeamService;
