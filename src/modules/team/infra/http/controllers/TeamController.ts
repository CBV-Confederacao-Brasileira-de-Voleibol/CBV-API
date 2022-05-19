import { classToClass, classToClassFromExist } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTeamService from '@modules/team/services/CreateTeamService';

export default class TeamController {
    public async create(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { name, img, competition_id } = request.body;

        const createTeamService = container.resolve(CreateTeamService);

        const team = await createTeamService.execute({
            name,
            img,
            competition_id,
        });

        return response.json({ team: classToClass(team) });
    }
}
