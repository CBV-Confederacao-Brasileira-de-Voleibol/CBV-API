/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
import { inject, injectable } from 'tsyringe';

import IMatchRepository from '@modules/competition/repositories/IMatchRepository';
import IMemberRepository from '@modules/team/repositories/IMemberRepository';
import AppError from '@shared/errors/AppError';

import Statistics from '../infra/typeorm/entities/Statistics';
import StatisticsBySet from '../infra/typeorm/entities/StatisticsBySet';
import IStatisticsBySetRepository from '../repositories/IStatisticsBySetRepository';
import IStatisticsRepository from '../repositories/IStatisticsRepository';

interface IBySet {
    spots: number;
    withdraw: number;
    block: number;
    set_id: string;
}
interface IRequest {
    spots: number;
    withdraw: number;
    block: number;
    right_attack: number;
    wrong_attack: number;
    match_id: string;
    member_id: string;
    bySet: IBySet[];
}

interface IResponse {
    statistics: Statistics;
    statisticsBySet: StatisticsBySet[];
}

@injectable()
class RegistryStatisticsService {
    constructor(
        @inject('StatisticsRepository')
        private statisticsRepository: IStatisticsRepository,
        @inject('StatisticsBySetRepository')
        private statisticsBySetRepository: IStatisticsBySetRepository,
        @inject('MemberRepository')
        private memberRepository: IMemberRepository,
        @inject('MatchRepository')
        private matchRepository: IMatchRepository,
    ) {}

    async execute({
        spots,
        withdraw,
        block,
        right_attack,
        wrong_attack,
        match_id,
        member_id,
        bySet,
    }: IRequest): Promise<IResponse> {
        const member = await this.memberRepository.findById(member_id);

        if (!member) {
            throw new AppError('member id is not exists!', 401);
        }

        const match = await this.matchRepository.findById(match_id);

        if (!match) {
            throw new AppError('match id is not exists!', 401);
        }

        const statistics = await this.statisticsRepository.create({
            spots,
            withdraw,
            block,
            right_attack,
            wrong_attack,
            match_id,
            member_id,
        });
        const statisticsBySet: StatisticsBySet[] = [];
        const { length } = bySet;

        for (let i = 0; i < length; i++) {
            const newStatisticsBySet =
                await this.statisticsBySetRepository.create({
                    spots: bySet[i].spots,
                    withdraw: bySet[i].spots,
                    block: bySet[i].block,
                    set_id: bySet[i].set_id,
                    member_id,
                    match_id,
                });
            statisticsBySet.push(newStatisticsBySet);
        }
        return {
            statistics,
            statisticsBySet,
        };
    }
}

export default RegistryStatisticsService;
