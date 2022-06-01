import ICreateStatisticsBySetDTO from '../dtos/ICreateStatisticsBySetDTO';
import StatisticsBySet from '../infra/typeorm/entities/StatisticsBySet';

interface IStatisticsBySetRepository {
    create(data: ICreateStatisticsBySetDTO): Promise<StatisticsBySet>;
    findMemberAndMatchID(
        member_id: string,
        match_id: string,
    ): Promise<StatisticsBySet | undefined>;
}

export default IStatisticsBySetRepository;
