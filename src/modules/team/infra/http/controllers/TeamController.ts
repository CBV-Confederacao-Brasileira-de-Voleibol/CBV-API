import { classToClass, classToClassFromExist } from 'class-transformer';
import { request, Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTeamService from '@modules/team/services/CreateTeamService';
import DeleteTeamService from '@modules/team/services/DeleteTeamService';
import ShowAllTeamCompetitionService from '@modules/team/services/ShowAllTeamCompetitionServices';
import ShowTeamService from '@modules/team/services/ShowTeamService';

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
        const { competition_id } = request.params;

        const showAllTeamCompetitionServices = container.resolve(
            ShowAllTeamCompetitionService,
        );

        const teams = await showAllTeamCompetitionServices.execute(
            competition_id,
        );

        return response.json({ teams: classToClass(teams) });
    }

    public async read(request: Request, response: Response): Promise<Response> {
        const { team_id } = request.params;

        const showTeamServices = container.resolve(ShowTeamService);

        const teams = await showTeamServices.execute(team_id);

        return response.json({ teams: classToClass(teams) });
    }
    public async delete(
        request: Request,
        response: Response,
    ): Promise<Response> {
        const { team_id } = request.params;

        const deleteTeamServices = container.resolve(DeleteTeamService);

        const result = await deleteTeamServices.execute(team_id);

        return response.json({ result: classToClass(result) });
    }
}
