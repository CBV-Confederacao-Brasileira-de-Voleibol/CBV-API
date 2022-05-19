import { container } from 'tsyringe';

import CompetitionRepository from '@modules/competition/infra/typeorm/repositories/CompetitionRepository';
import ICompetitiomRepository from '@modules/competition/repositories/ICompetitionRepository';
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
