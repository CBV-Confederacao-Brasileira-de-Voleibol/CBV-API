import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Member from '../infra/typeorm/entities/Member';
import IMemberRepository from '../repositories/IMemberRepository';
import ITeamRepository from '../repositories/ITeamRepository';

@injectable()
class ShowMemberService {
    constructor(
        @inject('TeamRepository')
        private teamRepository: ITeamRepository,
        @inject('MemberRepository')
        private memberRepository: IMemberRepository,
    ) {}

    async execute(team_id: string): Promise<Member[]> {
        const team = await this.teamRepository.findById(team_id);

        if (!team) {
            throw new AppError('Team id is not exists!', 401);
        }

        const members = await this.memberRepository.findByTeamId(team_id);
        return members;
    }
}

export default ShowMemberService;
