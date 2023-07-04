import { OkPacket } from "mysql2";
import { execute } from "../2-utils/dal";
import { MeetingModel } from "../4-models/MeetingModel";



// export async function getMeetingById(teamId: number): Promise<MeetingModel> {
//     const query = `SELECT * FROM teamdb.meetings WHERE teamId = ?`;
//     const [rows] = await execute<MeetingModel[]>(query, [teamId]);
//     if (rows.length === 0) return null;
//     return rows[0];
// }

export async function getAllMeetingsByTeamId(teamId: number): Promise<MeetingModel[]> {
    const query = "SELECT * FROM teamdb.meetings WHERE teamId = ?";
    const [rows] = await execute<MeetingModel[]>(query, [teamId]);
    return rows;
}




export async function createNewMeeting(teamId: number, startTime: string, endTime: string, description:string, meetingRoom:string): Promise<MeetingModel> {
    const insertQuery = `INSERT INTO teamdb.meetings(teamId, startTime, endTime, description, meetingRoom) VALUES(?, ?, ?, ?, ?)`;
    const result = await execute<OkPacket>(insertQuery, [teamId, startTime, endTime, description, meetingRoom]);

    const insertId = result[0].insertId;

    const selectQuery = `SELECT * FROM teamdb.meetings WHERE meetingId = ?`;
    const [rows] = await execute<MeetingModel[]>(selectQuery, [insertId]);
    
    return rows[0];
}
