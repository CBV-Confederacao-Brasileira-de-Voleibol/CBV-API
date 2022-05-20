import { container } from 'tsyringe';

import CompetitionRepository from '@modules/competition/infra/typeorm/repositories/CompetitionRepository';
import MatchRepository from '@modules/competition/infra/typeorm/repositories/MatchRepository';
import PhaseRepository from '@modules/competition/infra/typeorm/repositories/PhaseRepository';
import ICompetitiomRepository from '@modules/competition/repositories/ICompetitionRepository';
import IMatchRepository from '@modules/competition/repositories/IMatchRepository';
import IPhaseRepository from '@modules/competition/repositories/IPhaseRepository';
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
