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
}

export default MatchRepository;
