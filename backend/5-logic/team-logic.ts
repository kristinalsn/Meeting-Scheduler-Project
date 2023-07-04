import { execute } from "../2-utils/dal";
import { MeetingModel } from "../4-models/MeetingModel";
import { TeamModel } from "../4-models/TeamModel";



export async function getAllTeams(): Promise<TeamModel[]> {
    const query = "SELECT * FROM teamdb.teams";
    const [rows] = await execute<TeamModel[]>(query);
    return rows;
}
export async function getAllMeetingsByTeamId(teamId: number): Promise<MeetingModel[]> {
    const query = "SELECT * FROM teamdb.meetings WHERE teamId = ?";
    const [rows] = await execute<MeetingModel[]>(query, [teamId]);
    return rows;
}


