import { Router } from 'express';

import competitionRouter from '@modules/competition/infra/http/routes/competition.routes';
import matchRouter from '@modules/competition/infra/http/routes/mathc.routes';
import setRouter from '@modules/statistics/infra/http/routes/set.routes';
import statisticsRouter from '@modules/statistics/infra/http/routes/statistics.routes';
import memberRouter from '@modules/team/infra/http/routes/member.routes';
import teamRouter from '@modules/team/infra/http/routes/team.routes';

const routes = Router();

routes.use('/team', teamRouter);
routes.use('/competition', competitionRouter);
routes.use('/member', memberRouter);
routes.use('/match', matchRouter);
routes.use('/statistics', statisticsRouter);
routes.use('/set', setRouter);

export default routes;
