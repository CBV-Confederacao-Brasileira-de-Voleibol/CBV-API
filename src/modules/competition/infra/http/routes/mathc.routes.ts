import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import MatchController from '../controllers/MatchController';

const matchController = new MatchController();

const matchRouter = Router();

matchRouter.get(
    '/',
    celebrate({
        [Segments.BODY]: {
            competition_id: Joi.string().required(),
        },
    }),
    matchController.show,
);

export default matchRouter;
