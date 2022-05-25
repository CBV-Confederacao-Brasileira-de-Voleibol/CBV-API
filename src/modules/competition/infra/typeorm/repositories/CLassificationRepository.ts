import { getRepository, Repository } from 'typeorm';

import ICreateClassificationDTO from '@modules/competition/dtos/ICreateClassificationDTO';
import IClassificationRepository from '@modules/competition/repositories/IClassificationRepository';

import Classification from '../entities/Classification';

class CLassificationRepository implements IClassificationRepository {
    private ormRepository: Repository<Classification>;

    constructor() {
        this.ormRepository = getRepository(Classification);
    }

    public async create(
        data: ICreateClassificationDTO,
    ): Promise<Classification> {
        const createClassification = this.ormRepository.create(data);
        await this.ormRepository.save(createClassification);
        return createClassification;
    }
    public async findById(
        classification_id: string,
    ): Promise<Classification | undefined> {
        const findClassification = await this.ormRepository.findOne({
            id: classification_id,
        });

        return findClassification;
    }
    public async findByTeamID(
        team_id: string,
    ): Promise<Classification | undefined> {
        const findClassification = await this.ormRepository.findOne({
            team_id,
        });

        return findClassification;
    }

    public async save(classification: Classification): Promise<Classification> {
        const saveClassification = await this.ormRepository.save(
            classification,
        );

        return saveClassification;
    }
}

export default CLassificationRepository;
