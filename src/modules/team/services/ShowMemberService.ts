import { inject, injectable } from 'tsyringe';

import ICompetitiomRepository from '@modules/competition/repositories/ICompetitionRepository';
import AppError from '@shared/errors/AppError';

import Member from '../infra/typeorm/entities/Member';
import Team from '../infra/typeorm/entities/Team';
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
