import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import CompetitionContoller from '../controllers/CompetitionContoller';
import MatchController from '../controllers/MatchController';
import PhaseController from '../controllers/PhaseController';

const competitionController = new CompetitionContoller();
const matchController = new MatchController();
const phaseController = new PhaseController();

const competitionRouter = Router();

competitionRouter.get('/phase', phaseController.show);

competitionRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            year: Joi.number().required(),
            date_start: Joi.date().required(),
            date_end: Joi.date().required(),
            type: Joi.string().required(),
        },
    }),
    competitionController.create,
);

competitionRouter.post(
    '/generatematchs',
    celebrate({
        [Segments.BODY]: {
            competition_id: Joi.string().required(),
        },
    }),
    matchController.create,
);
export default competitionRouter;
