import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCompetitionService from '@modules/competition/services/CreateCompetitionService';
import DeleteCompetitionService from '@modules/competition/services/DeleteCompetitionService';
import ShowCompetitionService from '@modules/competition/services/ShowCompetitionService';

class CompetitionContoller {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, description, date_start, date_end, type } = request.body;

        const createCompetitionService = container.resolve(
            CreateCompetitionService,
        );

        const competition = await createCompetitionService.execute({
            name,
            description,
            date_start,
            date_end,
            type,
        });

        return response.json({ competition: classToClass(competition) });
    }

    async show(request: Request, response: Response): Promise<Response> {
        const showCompetitionService = container.resolve(
            ShowCompetitionService,
        );

        const competitions = await showCompetitionService.execute();

        return response.json({ competitions: classToClass(competitions) });
    }

    async delete(request: Request, response: Response): Promise<Response> {
        const { competition_id } = request.params;

        const deleteCompetitionService = container.resolve(
            DeleteCompetitionService,
        );

        const result = await deleteCompetitionService.execute(competition_id);

        return response.json({ result: classToClass(result) });
    }
}

export default CompetitionContoller;
