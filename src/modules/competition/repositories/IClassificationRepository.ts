import ICreateClassificationDTO from '../dtos/ICreateClassificationDTO';
import Classification from '../infra/typeorm/entities/Classification';

interface IClassificationRepository {
    create(data: ICreateClassificationDTO): Promise<Classification>;
    findById(classification_id: string): Promise<Classification | undefined>;
    findByTeamID(team_id: string): Promise<Classification | undefined>;
    save(classification: Classification): Promise<Classification>;
}

export default IClassificationRepository;
