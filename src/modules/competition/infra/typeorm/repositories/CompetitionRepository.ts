import { getRepository, Repository } from 'typeorm';

import ICreateCompetitionDTO from '@modules/competition/dtos/ICreateCompetitionDTO';
import ICompetitiomRepository from '@modules/competition/repositories/ICompetitionRepository';

import Competition from '../entities/Competition';

class CompetitionRepository implements ICompetitiomRepository {
    private ormRepository: Repository<Competition>;

    constructor() {
        this.ormRepository = getRepository(Competition);
    }

    public async create(data: ICreateCompetitionDTO): Promise<Competition> {
        const addCompetition = this.ormRepository.create(data);

        await this.ormRepository.save(addCompetition);

        return addCompetition;
    }
    public async findById(
        competition_id: string,
    ): Promise<Competition | undefined> {
        const findCompetition = await this.ormRepository.findOne({
            id: competition_id,
        });

        return findCompetition;
    }

    public async findByAll(): Promise<Competition[]> {
        const findAll = await this.ormRepository.find();

        return findAll;
    }
}

export default CompetitionRepository;
