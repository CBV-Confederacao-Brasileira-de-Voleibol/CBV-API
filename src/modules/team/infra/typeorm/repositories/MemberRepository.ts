import { getRepository, Repository } from 'typeorm';

import ICreateMemberDTO from '@modules/team/dtos/ICreateMemberDTO';
import IMemberRepository from '@modules/team/repositories/IMemberRepository';

import Member from '../entities/Member';

class MemberRepository implements IMemberRepository {
    private ormRepository: Repository<Member>;

    constructor() {
        this.ormRepository = getRepository(Member);
    }

    public async create(data: ICreateMemberDTO): Promise<Member> {
        const createMember = this.ormRepository.create(data);
        await this.ormRepository.save(createMember);

        return createMember;
    }
    public async findById(member_id: string): Promise<Member | undefined> {
        const findMember = await this.ormRepository.findOne({ id: member_id });

        return findMember;
    }
}

export default MemberRepository;
