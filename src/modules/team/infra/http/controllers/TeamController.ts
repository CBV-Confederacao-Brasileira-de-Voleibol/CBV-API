import { classToClass, classToClassFromExist } from 'class-transformer';
import { request, Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTeamService from '@modules/team/services/CreateTeamService';
import ShowTeamServices from '@modules/team/services/ShowTeamServices';

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

    public async show(request: Request, response: Response): Promise<Response> {
        const { competition_id } = request.body;

        const showTeamServices = container.resolve(ShowTeamServices);

        const teams = await showTeamServices.execute(competition_id);

        return response.json({ teams: classToClass(teams) });
    }
}
