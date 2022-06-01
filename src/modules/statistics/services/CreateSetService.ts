import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Set from '../infra/typeorm/entities/Set';
import ISetRepository from '../repositories/ISetRepository';

@injectable()
class CreateSetService {
    constructor(
        @inject('SetRepository')
        private setRepository: ISetRepository,
    ) {}

    async execute(name: string): Promise<Set> {
        const findSet = await this.setRepository.findByName(name);

        if (findSet) {
            throw new AppError('set  already exists!', 402);
        }

        const set = await this.setRepository.create(name);

        return set;
    }
}

export default CreateSetService;
