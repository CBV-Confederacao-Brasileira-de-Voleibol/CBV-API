import { inject, injectable } from 'tsyringe';
import { DeleteResult } from 'typeorm';

import Competition from '../infra/typeorm/entities/Competition';
import ICompetitiomRepository from '../repositories/ICompetitionRepository';

@injectable()
class DeleteCompetitionService {
    constructor(
        @inject('CompetitionRepository')
        private competitionRepository: ICompetitiomRepository,
    ) {}

    async execute(competition_id: string): Promise<DeleteResult> {
        const deleteResult = await this.competitionRepository.delete(
            competition_id,
        );

        return deleteResult;
    }
}

export default DeleteCompetitionService;
