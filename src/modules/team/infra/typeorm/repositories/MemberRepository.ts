import { DeleteResult, getRepository, Repository } from 'typeorm';

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

    public async findByTeamId(team_id: string): Promise<Member[]> {
        const members = await this.ormRepository.find({ team_id });

        return members;
    }
    public async findByTeamIdAndType(
        team_id: string,
        type: string,
    ): Promise<Member[]> {
        const members = await this.ormRepository.find({
            where: { team_id, type },
        });

        return members;
    }
    public async delete(member_id: string): Promise<DeleteResult> {
        const result = await this.ormRepository.delete({ id: member_id });

        return result;
    }
}

export default MemberRepository;
