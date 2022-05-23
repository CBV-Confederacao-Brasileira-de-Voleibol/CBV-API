import { getRepository, Repository } from 'typeorm';

import ICreateTeamDTO from '@modules/team/dtos/ICreateTeamDTO';
import ITeamRepository from '@modules/team/repositories/ITeamRepository';

import Team from '../entities/Team';

class TeamRepository implements ITeamRepository {
    private ormRepository: Repository<Team>;
    constructor() {
        this.ormRepository = getRepository(Team);
    }

    public async findByName(name_team: string): Promise<Team | undefined> {
        const findTeamByName = await this.ormRepository.findOne({
            name: name_team,
        });

        return findTeamByName;
    }
    public async create(data: ICreateTeamDTO): Promise<Team> {
        const addteam = this.ormRepository.create(data);
        await this.ormRepository.save(addteam);

        return addteam;
    }
    public async findById(team_id: string): Promise<Team | undefined> {
        const findTeam = await this.ormRepository.findOne({ id: team_id });

        return findTeam;
    }

    public async findAllByCompetitionId(
        competition_id: string,
    ): Promise<Team[]> {
        const findAllTeam = await this.ormRepository.find({ competition_id });

        return findAllTeam;
    }
}

export default TeamRepository;
