import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GenerateMatchService from '@modules/competition/services/GenerateMatchService';

class GenerateMatchController {
    async create(request: Request, response: Response): Promise<Response> {
        const { competition_id } = request.body;

        const generateMatchService = container.resolve(GenerateMatchService);

        const generateMatch = await generateMatchService.execute({
            competition_id,
        });

        return response.json({ generateMatch: classToClass(generateMatch) });
    }
}

export default GenerateMatchController;
