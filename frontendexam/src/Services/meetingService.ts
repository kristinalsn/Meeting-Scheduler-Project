
import axios from "axios";
import { MeetingModel } from "../Models/MeetingModel";
import { TeamModel } from "../Models/TeamModel";

// class MeetingService {
//   public async getAllTeams(): Promise<TeamModel[]> {
//     const response = await axios.get<TeamModel[]>("http://localhost:3001/api/teams");
//     const teams= response.data;
//     return teams;
//   }

//   public async createMeeting(meeting: MeetingModel): Promise<MeetingModel> {
//     const response = await axios.post<MeetingModel>("http://localhost:3001/api/meetings", meeting);
//     const newMeeting = response.data;
//     return newMeeting;
//   }
// }
class MeetingService {
    public async getAllTeams(): Promise<TeamModel[]> {
      const response = await axios.get<TeamModel[]>("http://localhost:3001/api/teams");
      const teams = response.data;
      return teams;
    }
  
    public async createMeeting(meeting: MeetingModel): Promise<MeetingModel> {
      const response = await axios.post<MeetingModel>("http://localhost:3001/api/meetings", meeting);
      const newMeeting = response.data;
      return newMeeting;
    }
  
    public async getAllMeetingsByTeamId(teamId: number): Promise<MeetingModel[]> {
      const response = await axios.get<MeetingModel[]>(`http://localhost:3001/api/TeamsMeeting/${teamId}`);
      const meetings = response.data;
      return meetings;
    }
  }
  

export const meetingService = new MeetingService();
export default meetingService;

