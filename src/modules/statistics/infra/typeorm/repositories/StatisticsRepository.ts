import { getRepository, Repository } from 'typeorm';

import ICreateStatisticsDTO from '@modules/statistics/dtos/ICreateStatisticsDTO';
import IStatisticsRepository from '@modules/statistics/repositories/IStatisticsRepository';

import Statistics from '../entities/Statistics';

class StatisticsRepository implements IStatisticsRepository {
    private ormRepository: Repository<Statistics>;

    constructor() {
        this.ormRepository = getRepository(Statistics);
    }

    public async create(data: ICreateStatisticsDTO): Promise<Statistics> {
        const createStatistics = this.ormRepository.create(data);

        await this.ormRepository.save(createStatistics);
        return createStatistics;
    }
    public async findMemberAndMatchID(
        member_id: string,
        match_id: string,
    ): Promise<Statistics | undefined> {
        const findStatistics = await this.ormRepository.findOne({
            where: { member_id, match_id },
        });

        return findStatistics;
    }
}

export default StatisticsRepository;
