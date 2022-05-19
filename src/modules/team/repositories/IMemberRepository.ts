import ICreateMemberDTO from '../dtos/ICreateMemberDTO';
import Member from '../infra/typeorm/entities/Member';

export default interface IMemberRepository {
    create(data: ICreateMemberDTO): Promise<Member>;
    findById(member_id: string): Promise<Member | undefined>;
}
