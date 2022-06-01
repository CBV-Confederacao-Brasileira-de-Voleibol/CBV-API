import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import StatisticsController from '../controllers/StatisticsController';

const statisticsController = new StatisticsController();

const statisticsRouter = Router();

statisticsRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            spots: Joi.number().required(),
            withdraw: Joi.number().required(),
            block: Joi.number().required(),
            right_attack: Joi.number().required(),
            wrong_attack: Joi.number().required(),
            match_id: Joi.string().required(),
            member_id: Joi.string().required(),
            bySet: Joi.array().required(),
        },
    }),
    statisticsController.create,
);

export default statisticsRouter;
