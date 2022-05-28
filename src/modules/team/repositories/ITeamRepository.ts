import { DeleteResult } from 'typeorm';

import ICreateTeamDTO from '../dtos/ICreateTeamDTO';
import Team from '../infra/typeorm/entities/Team';

export default interface ITeamRepository {
    create(data: ICreateTeamDTO): Promise<Team>;
    findById(team_id: string): Promise<Team | undefined>;
    findByName(name_team: string): Promise<Team | undefined>;
    findByCompetitionId(competition_id: string): Promise<Team[]>;
    delete(team_id: string): Promise<DeleteResult>;
}
