import ICreateMatchDTO from '../dtos/ICreateMatchDTO';
import Match from '../infra/typeorm/entities/Match';

interface IMatchRepository {
    create(data: ICreateMatchDTO): Promise<Match>;
}

export default IMatchRepository;
