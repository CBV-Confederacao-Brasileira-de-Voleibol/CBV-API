import { inject, injectable } from 'tsyringe';
import { DeleteResult } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Member from '../infra/typeorm/entities/Member';
import IMemberRepository from '../repositories/IMemberRepository';
import ITeamRepository from '../repositories/ITeamRepository';

@injectable()
class DeleteMemberService {
    constructor(
        @inject('MemberRepository')
        private memberRepository: IMemberRepository,
    ) {}

    async execute(member_id: string): Promise<DeleteResult> {
        const member = await this.memberRepository.findById(member_id);

        if (!member) {
            throw new AppError('member id is not exists!', 401);
        }

        const result = await this.memberRepository.delete(member_id);
        return result;
    }
}

export default DeleteMemberService;
