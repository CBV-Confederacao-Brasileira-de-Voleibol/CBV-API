import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import InsertScoreBoardService from '@modules/competition/services/InsertScoreBoardService';

class InsertScoreBoardController {
    async create(request: Request, response: Response): Promise<Response> {
        const { scoreboard_team1, scoreboard_team2, match_id } = request.body;

        const insertScoreBoardService = container.resolve(
            InsertScoreBoardService,
        );

        const match = await insertScoreBoardService.execute({
            scoreboard_team1,
            scoreboard_team2,
            match_id,
        });

        return response.json({ match: classToClass(match) });
    }
}

export default InsertScoreBoardController;
