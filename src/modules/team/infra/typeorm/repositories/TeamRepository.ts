import ICreateTeamDTO from '@modules/team/dtos/ICreateTeamDTO';
import ITeamRepository from '@modules/team/repositories/ITeamRepository';

import Team from '../entities/Team';

class TeamRepository implements ITeamRepository {
    public async create(data: ICreateTeamDTO): Promise<Team> {
        throw new Error('Method not implemented.');
    }
    public async findById(team_id: string): Promise<Team> {
        throw new Error('Method not implemented.');
    }
}

export default TeamRepository;
