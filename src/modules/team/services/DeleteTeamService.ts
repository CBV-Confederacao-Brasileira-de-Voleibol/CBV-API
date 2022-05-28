import { inject, injectable } from 'tsyringe';
import { DeleteResult } from 'typeorm';

import AppError from '@shared/errors/AppError';

import ITeamRepository from '../repositories/ITeamRepository';

@injectable()
class DeleteTeamService {
    constructor(
        @inject('TeamRepository')
        private teamRepository: ITeamRepository,
    ) {}

    async execute(team_id: string): Promise<DeleteResult> {
        const team = await this.teamRepository.findById(team_id);

        if (!team) {
            throw new AppError('team id is not exists!', 401);
        }
        const result = await this.teamRepository.delete(team_id);

        return result;
    }
}

export default DeleteTeamService;
