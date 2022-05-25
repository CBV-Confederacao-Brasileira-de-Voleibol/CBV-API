import { inject, injectable } from 'tsyringe';

import Classification from '../infra/typeorm/entities/Classification';
import IClassificationRepository from '../repositories/IClassificationRepository';

interface IRequest {
    spots: number;
    defeat: number;
    victory: number;
    matches: number;
    sets_won: number;
    lost_sets: number;
    team_id: string;
}

@injectable()
class UpdateClassification {
    constructor(
        @inject('ClassificationRepository')
        private classificationRepository: IClassificationRepository,
    ) {}

    async execute({
        spots,
        defeat,
        victory,
        matches,
        sets_won,
        lost_sets,
        team_id,
    }: IRequest): Promise<Classification> {
        const classification = await this.classificationRepository.findByTeamID(
            team_id,
        );

        if (!classification) {
            const newClassification =
                await this.classificationRepository.create({
                    spots,
                    defeat,
                    victory,
                    matches,
                    sets_won,
                    lost_sets,
                    team_id,
                });

            return newClassification;
        }

        // caso exista , atuliza a classificação

        classification.defeat += defeat;
        classification.lost_sets += lost_sets;
        classification.matches += matches;
        classification.sets_won += sets_won;
        classification.spots += spots;
        classification.victory += victory;

        const saveClassification = await this.classificationRepository.save(
            classification,
        );

        return saveClassification;
    }
}

export default UpdateClassification;
