export default interface ICreateMemberDTO {
    type: string;
    name: string;
    age: Date;
    position?: string;
    team_id: string;
}
