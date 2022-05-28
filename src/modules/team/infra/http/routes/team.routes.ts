import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import TeamController from '../controllers/TeamController';

const teamRouter = Router();

const teamController = new TeamController();

teamRouter.get('/competition/:competition_id', teamController.show);
teamRouter.get('/:team_id', teamController.read);

teamRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            img: Joi.string().required(),
            competition_id: Joi.string().required(),
        },
    }),
    teamController.create,
);

export default teamRouter;
