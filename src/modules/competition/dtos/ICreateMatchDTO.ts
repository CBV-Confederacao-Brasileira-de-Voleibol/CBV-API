export default interface ICreateMatchDTO {
    date: Date;
    time: string;
    team1: string;
    team2: string;
    round: number;
    phase_id: string;
    competition_id: string;
}
