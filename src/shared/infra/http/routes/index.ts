import { Router } from 'express';

import teamRouter from '@modules/team/infra/http/routes/team.routes';

const routes = Router();

routes.use('/team', teamRouter);

export default routes;
