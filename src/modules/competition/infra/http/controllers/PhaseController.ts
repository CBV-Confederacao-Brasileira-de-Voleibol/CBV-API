import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCompetitionService from '@modules/competition/services/CreateCompetitionService';
import ShowPhaseService from '@modules/competition/services/ShowPhaseService';

class PhaseController {
    async show(request: Request, response: Response): Promise<Response> {
        const showPhaseService = container.resolve(ShowPhaseService);

        const phases = await showPhaseService.execute();

        return response.json({ phases: classToClass(phases) });
    }
}

export default PhaseController;
