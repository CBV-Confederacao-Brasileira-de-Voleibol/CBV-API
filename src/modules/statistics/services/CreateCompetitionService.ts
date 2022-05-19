import { inject, injectable } from 'tsyringe';

import Competition from '@modules/competition/infra/typeorm/entities/Competition';
import ICompetitiomRepository from '@modules/competition/repositories/ICompetitionRepository';

interface IRequest {
    name: string;
    year: number;
    date_start: Date;
    date_end: Date;
    type: string;
}
@injectable()
class CreateCompetitionService {
    constructor(
        @inject('CompetitionRepository')
        private competitionRepository: ICompetitiomRepository,
    ) {}

    public async execute({
        name,
        year,
        date_start,
        date_end,
        type,
    }: IRequest): Promise<Competition> {
        const competition = await this.competitionRepository.create({
            name,
            year,
            date_start,
            date_end,
            type,
        });

        return competition;
    }
}

export default CreateCompetitionService;
