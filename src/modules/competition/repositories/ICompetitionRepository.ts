import { DeleteResult } from 'typeorm';

import ICreateCompetitionDTO from '../dtos/ICreateCompetitionDTO';
import Competition from '../infra/typeorm/entities/Competition';

interface ICompetitiomRepository {
    create(data: ICreateCompetitionDTO): Promise<Competition>;
    findById(competition_id: string): Promise<Competition | undefined>;
    findByAll(): Promise<Competition[]>;
    delete(competition_id: string): Promise<DeleteResult>;
}

export default ICompetitiomRepository;
