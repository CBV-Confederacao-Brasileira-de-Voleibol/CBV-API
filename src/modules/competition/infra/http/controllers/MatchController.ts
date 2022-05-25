import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GenerateMatchService from '@modules/competition/services/GenerateMatchService';
import ShowMatchService from '@modules/competition/services/ShowMatchService';

class MatchController {
    async create(request: Request, response: Response): Promise<Response> {
        const { competition_id } = request.body;

        const generateMatchService = container.resolve(GenerateMatchService);

        const generateMatch = await generateMatchService.execute({
            competition_id,
        });

        return response.json({ generateMatch: classToClass(generateMatch) });
    }
    async show(request: Request, response: Response): Promise<Response> {
        const { competition_id, phase_id } = request.body;

        const showMatchService = container.resolve(ShowMatchService);

        const showMatch = await showMatchService.execute({
            competition_id,
            phase_id,
        });

        return response.json({ Match: classToClass(showMatch) });
    }
}

export default MatchController;
