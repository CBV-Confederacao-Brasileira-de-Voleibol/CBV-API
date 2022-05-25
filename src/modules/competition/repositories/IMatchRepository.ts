import ICreateMatchDTO from '../dtos/ICreateMatchDTO';
import Match from '../infra/typeorm/entities/Match';

interface IMatchRepository {
    create(data: ICreateMatchDTO): Promise<Match>;
    findById(match_id: string): Promise<Match | undefined>;
    save(match: Match): Promise<Match>;
    findAllMatchOfCompetition(
        competition_id: string,
        phase_id: string,
    ): Promise<Match[]>;
}

export default IMatchRepository;
