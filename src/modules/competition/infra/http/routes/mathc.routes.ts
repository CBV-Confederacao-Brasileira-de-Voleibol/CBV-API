import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import InsertScoreBoardController from '../controllers/InsertScoreBoardController';
import MatchController from '../controllers/MatchController';

const matchController = new MatchController();
const insertscoreboardController = new InsertScoreBoardController();

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

matchRouter.post(
    '/insertscoreboard',
    celebrate({
        [Segments.BODY]: {
            match_id: Joi.string().required(),
            scoreboard_team1: Joi.number().required(),
            scoreboard_team2: Joi.number().required(),
        },
    }),
    insertscoreboardController.create,
);

export default matchRouter;
