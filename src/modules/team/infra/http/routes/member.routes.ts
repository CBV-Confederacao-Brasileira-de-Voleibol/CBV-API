import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import MemberController from '../controllers/MemberController';

const memberRouter = Router();

const memberController = new MemberController();

memberRouter.get('/:team_id', memberController.show);

memberRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            type: Joi.string().required(),
            age: Joi.date().required(),
            position: Joi.string(),
            team_id: Joi.string().required(),
        },
    }),
    memberController.create,
);

export default memberRouter;
