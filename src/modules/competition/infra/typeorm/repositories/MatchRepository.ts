import { getRepository, Repository } from 'typeorm';

import ICreateMatchDTO from '@modules/competition/dtos/ICreateMatchDTO';
import IMatchRepository from '@modules/competition/repositories/IMatchRepository';

import Match from '../entities/Match';

class MatchRepository implements IMatchRepository {
    private ormRepository: Repository<Match>;

    constructor() {
        this.ormRepository = getRepository(Match);
    }

    public async create(data: ICreateMatchDTO): Promise<Match> {
        const newMatch = this.ormRepository.create(data);
        await this.ormRepository.save(newMatch);

        return newMatch;
    }

    public async findById(match_id: string): Promise<Match | undefined> {
        const findMatch = await this.ormRepository.findOne({ id: match_id });

        return findMatch;
    }
    public async save(match: Match): Promise<Match> {
        return this.ormRepository.save(match);
    }

    public async findAllMatchOfCompetition(
        competition_id: string,
        phase_id: string,
    ): Promise<Match[]> {
        const findMatchs = await this.ormRepository.find({
            relations: ['team11', 'team22'],
            where: { competition_id, phase_id },
        });
        return findMatchs;
    }
}

export default MatchRepository;
