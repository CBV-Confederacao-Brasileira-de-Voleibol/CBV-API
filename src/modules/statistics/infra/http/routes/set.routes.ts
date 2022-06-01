import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import SetController from '../controllers/SetControlller';

const setController = new SetController();

const setRouter = Router();

setRouter.get('/', setController.show);

setRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
        },
    }),
    setController.create,
);

export default setRouter;
