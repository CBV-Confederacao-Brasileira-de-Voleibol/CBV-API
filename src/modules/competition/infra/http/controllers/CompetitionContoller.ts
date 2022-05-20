import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCompetitionService from '@modules/competition/services/CreateCompetitionService';

class CompetitionContoller {
    async create(request: Request, response: Response): Promise<Response> {
        const { name, year, date_start, date_end, type } = request.body;

        const createCompetitionService = container.resolve(
            CreateCompetitionService,
        );

        const competition = await createCompetitionService.execute({
            name,
            year,
            date_start,
            date_end,
            type,
        });

        return response.json({ competition: classToClass(competition) });
    }
}

export default CompetitionContoller;
