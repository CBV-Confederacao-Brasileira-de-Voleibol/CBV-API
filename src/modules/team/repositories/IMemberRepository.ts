import { DeleteResult } from 'typeorm';

import ICreateMemberDTO from '../dtos/ICreateMemberDTO';
import Member from '../infra/typeorm/entities/Member';

export default interface IMemberRepository {
    create(data: ICreateMemberDTO): Promise<Member>;
    findById(member_id: string): Promise<Member | undefined>;
    findByTeamId(team_id: string): Promise<Member[]>;
    findByTeamIdAndType(team_id: string, type: string): Promise<Member[]>;
    delete(member_id: string): Promise<DeleteResult>;
}
