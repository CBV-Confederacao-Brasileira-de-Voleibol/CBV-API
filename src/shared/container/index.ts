import { container } from 'tsyringe';

import CompetitionRepository from '@modules/competition/infra/typeorm/repositories/CompetitionRepository';
import MatchRepository from '@modules/competition/infra/typeorm/repositories/MatchRepository';
import PhaseRepository from '@modules/competition/infra/typeorm/repositories/PhaseRepository';
import ICompetitiomRepository from '@modules/competition/repositories/ICompetitionRepository';
import IMatchRepository from '@modules/competition/repositories/IMatchRepository';
import IPhaseRepository from '@modules/competition/repositories/IPhaseRepository';
import SetRepository from '@modules/statistics/infra/typeorm/repositories/SetRepository';
import StatisticsBySetRepository from '@modules/statistics/infra/typeorm/repositories/StatisticsBySetRepository';
import StatisticsRepository from '@modules/statistics/infra/typeorm/repositories/StatisticsRepository';
import ISetRepository from '@modules/statistics/repositories/ISetRepository';
import IStatisticsBySetRepository from '@modules/statistics/repositories/IStatisticsBySetRepository';
import IStatisticsRepository from '@modules/statistics/repositories/IStatisticsRepository';
import MemberRepository from '@modules/team/infra/typeorm/repositories/MemberRepository';
import TeamRepository from '@modules/team/infra/typeorm/repositories/TeamRepository';
import IMemberRepository from '@modules/team/repositories/IMemberRepository';
import ITeamRepository from '@modules/team/repositories/ITeamRepository';

container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepository);

container.registerSingleton<ICompetitiomRepository>(
    'CompetitionRepository',
    CompetitionRepository,
);

container.registerSingleton<IMemberRepository>(
    'MemberRepository',
    MemberRepository,
);

container.registerSingleton<IMatchRepository>(
    'MatchRepository',
    MatchRepository,
);

container.registerSingleton<IPhaseRepository>(
    'PhaseRepository',
    PhaseRepository,
);

container.registerSingleton<IStatisticsBySetRepository>(
    'StatisticsBySetRepository',
    StatisticsBySetRepository,
);

container.registerSingleton<IStatisticsRepository>(
    'StatisticsRepository',
    StatisticsRepository,
);

container.registerSingleton<ISetRepository>('SetRepository', SetRepository);
