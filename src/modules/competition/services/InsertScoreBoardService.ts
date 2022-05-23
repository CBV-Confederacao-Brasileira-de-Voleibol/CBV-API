import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Match from '../infra/typeorm/entities/Match';
import IMatchRepository from '../repositories/IMatchRepository';

interface IRequest {
    scoreboard_team1: number;
    scoreboard_team2: number;
    match_id: string;
}

@injectable()
class InsertScoreBoardService {
    constructor(
        @inject('MatchRepository')
        private matchRepository: IMatchRepository,
    ) {}

    async execute({
        scoreboard_team1,
        scoreboard_team2,
        match_id,
    }: IRequest): Promise<Match> {
        const match = await this.matchRepository.findById(match_id);

        if (!match) {
            throw new AppError('Match id is not exists!', 401);
        }

        match.scoreboard_team1 = scoreboard_team1;
        match.scoreboard_team2 = scoreboard_team2;

        const matchResult = await this.matchRepository.save(match);

        return matchResult;
    }
}

export default InsertScoreBoardService;
