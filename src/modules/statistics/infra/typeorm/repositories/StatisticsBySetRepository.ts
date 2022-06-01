import { getRepository, Repository } from 'typeorm';

import ICreateStatisticsBySetDTO from '@modules/statistics/dtos/ICreateStatisticsBySetDTO';
import IStatisticsBySetRepository from '@modules/statistics/repositories/IStatisticsBySetRepository';

import StatisticsBySet from '../entities/StatisticsBySet';

class StatisticsBySetRepository implements IStatisticsBySetRepository {
    private ormRepository: Repository<StatisticsBySet>;

    constructor() {
        this.ormRepository = getRepository(StatisticsBySet);
    }

    public async create(
        data: ICreateStatisticsBySetDTO,
    ): Promise<StatisticsBySet> {
        const createStatistics = this.ormRepository.create(data);

        await this.ormRepository.save(createStatistics);
        return createStatistics;
    }
    public async findMemberAndMatchID(
        member_id: string,
        match_id: string,
    ): Promise<StatisticsBySet | undefined> {
        const findStatistics = await this.ormRepository.findOne({
            where: { member_id, match_id },
        });

        return findStatistics;
    }
}

export default StatisticsBySetRepository;
