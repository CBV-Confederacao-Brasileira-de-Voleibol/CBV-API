import { container } from 'tsyringe';

import CompetitionRepository from '@modules/competition/infra/typeorm/repositories/CompetitionRepository';
import ICompetitiomRepository from '@modules/competition/repositories/ICompetitionRepository';
import TeamRepository from '@modules/team/infra/typeorm/repositories/TeamRepository';
import ITeamRepository from '@modules/team/repositories/ITeamRepository';

container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepository);

container.registerSingleton<ICompetitiomRepository>(
    'CompetitionRepository',
    CompetitionRepository,
);
