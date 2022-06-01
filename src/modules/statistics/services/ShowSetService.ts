import { inject, injectable } from 'tsyringe';

import Set from '../infra/typeorm/entities/Set';
import ISetRepository from '../repositories/ISetRepository';

@injectable()
class ShowSetService {
    constructor(
        @inject('SetRepository')
        private setRepository: ISetRepository,
    ) {}

    async execute(): Promise<Set[]> {
        const set = await this.setRepository.findAll();

        return set;
    }
}

export default ShowSetService;
