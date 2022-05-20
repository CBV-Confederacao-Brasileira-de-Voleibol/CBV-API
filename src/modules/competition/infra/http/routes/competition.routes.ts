import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { JoinColumn } from 'typeorm';

import CompetitionContoller from '../controllers/CompetitionContoller';
import GenerateMatchController from '../controllers/GenerateMatchController';

const competitionController = new CompetitionContoller();
const generateMatchController = new GenerateMatchController();

const competitionRouter = Router();

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
    generateMatchController.create,
);
export default competitionRouter;
