import { Router } from 'express';

import competitionRouter from '@modules/statistics/infra/http/routes/competition.routes';
import memberRouter from '@modules/team/infra/http/routes/member.routes';
import teamRouter from '@modules/team/infra/http/routes/team.routes';

const routes = Router();

routes.use('/team', teamRouter);
routes.use('/competition', competitionRouter);
routes.use('/member', memberRouter);

export default routes;
