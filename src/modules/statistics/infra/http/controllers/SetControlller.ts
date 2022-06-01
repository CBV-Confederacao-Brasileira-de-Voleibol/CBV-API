import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSetService from '@modules/statistics/services/CreateSetService';
import ShowSetService from '@modules/statistics/services/ShowSetService';

class SetController {
    async create(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const createSetService = container.resolve(CreateSetService);

        const set = await createSetService.execute(name);

        return response.json({ set: classToClass(set) });
    }
    async show(request: Request, response: Response): Promise<Response> {
        const showSetService = container.resolve(ShowSetService);

        const set = await showSetService.execute();

        return response.json({ set: classToClass(set) });
    }
}

export default SetController;
