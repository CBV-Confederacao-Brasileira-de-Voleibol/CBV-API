import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import { JoinColumn } from 'typeorm';

import CompetitionContoller from '../controllers/CompetitionContoller';

const competitionController = new CompetitionContoller();

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

export default competitionRouter;
