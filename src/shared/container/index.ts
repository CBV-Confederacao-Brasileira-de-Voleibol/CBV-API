import { container } from 'tsyringe';

import TeamRepository from '@modules/team/infra/typeorm/repositories/TeamRepository';
import ITeamRepository from '@modules/team/repositories/ITeamRepository';

container.registerSingleton<ITeamRepository>('TeamRepository', TeamRepository);
