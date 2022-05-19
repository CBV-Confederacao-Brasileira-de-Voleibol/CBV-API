import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Member from '../infra/typeorm/entities/Member';
import IMemberRepository from '../repositories/IMemberRepository';
import ITeamRepository from '../repositories/ITeamRepository';

interface IResposne {
    type: string;
    name: string;
    age: Date;
    position: string;
    team_id: string;
}

@injectable()
class CreateMemberService {
    constructor(
        @inject('MemberRepository')
        private memberRepository: IMemberRepository,
        @inject('TeamRepository')
        private teamRepository: ITeamRepository,
    ) {}

    async execute({
        type,
        name,
        age,
        position,
        team_id,
    }: IResposne): Promise<Member> {
        const team = await this.teamRepository.findById(team_id);

        if (!team) {
            throw new AppError('team id is not exists!', 401);
        }

        const member = await this.memberRepository.create({
            type,
            name,
            age,
            position,
            team_id,
        });

        return member;
    }
}

export default CreateMemberService;
