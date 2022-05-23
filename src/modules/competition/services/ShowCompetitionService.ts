import { inject, injectable } from 'tsyringe';

import Competition from '../infra/typeorm/entities/Competition';
import ICompetitiomRepository from '../repositories/ICompetitionRepository';

@injectable()
class ShowCompetitionService {
    constructor(
        @inject('CompetitionRepository')
        private competitionRepository: ICompetitiomRepository,
    ) {}

    async execute(): Promise<Competition[]> {
        const competitions = await this.competitionRepository.findByAll();

        return competitions;
    }
}

export default ShowCompetitionService;
