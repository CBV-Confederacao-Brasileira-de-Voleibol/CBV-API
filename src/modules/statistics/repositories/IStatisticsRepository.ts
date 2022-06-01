import ICreateStatisticsDTO from '../dtos/ICreateStatisticsDTO';
import Statistics from '../infra/typeorm/entities/Statistics';

interface IStatisticsRepository {
    create(data: ICreateStatisticsDTO): Promise<Statistics>;
    findMemberAndMatchID(
        member_id: string,
        match_id: string,
    ): Promise<Statistics | undefined>;
}

export default IStatisticsRepository;
