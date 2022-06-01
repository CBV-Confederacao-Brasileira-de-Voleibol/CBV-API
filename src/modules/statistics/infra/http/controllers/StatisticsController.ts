import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import RegistryStatisticsService from '@modules/statistics/services/RegistryStatisticsService';

class StatisticsController {
    async create(request: Request, response: Response): Promise<Response> {
        const {
            spots,
            withdraw,
            block,
            right_attack,
            wrong_attack,
            match_id,
            member_id,
            bySet,
        } = request.body;

        const registryStatisticsService = container.resolve(
            RegistryStatisticsService,
        );

        const statistics = await registryStatisticsService.execute({
            spots,
            withdraw,
            block,
            right_attack,
            wrong_attack,
            match_id,
            member_id,
            bySet,
        });

        return response.json({ statistics: classToClass(statistics) });
    }
}

export default StatisticsController;
