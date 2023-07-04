// import axios from "axios";
// import { useEffect, useState } from "react";
// import { MeetingModel } from "../../../Models/MeetingModel";
// import { TeamModel } from "../../../Models/TeamModel";
// import MeetingCard from "../MeetingCard/MeetingCard";
// import "./TeamsMeeting.css";

// function TeamsMeeting(): JSX.Element {
//     const [teams, setTeams] = useState<TeamModel[]>([]);
//     const [meetings,setMeetings] = useState<MeetingModel[]>([]);

//     useEffect(() => {
//         axios.get<TeamModel[]>("http://localhost:3001/api/teams")
//             .then(response => setTeams(response.data))
//             .catch(err => alert(err.message));
//     });

//     const onSelectChange = async (event: any) =>  {  
//         await axios.get<MeetingModel[]>(`http://localhost:3001/api/teams/${event.target.value}`)
//             .then(response => setMeetings(response.data))
//             .catch(err => alert(err.message));
//     };

//     return (
//         <div className="TeamsMeeting">
// 			<label>Team: </label>
//                 <select onChange={onSelectChange}>
//                     <option disabled selected value="0">Select A Team </option>
//                     {teams.map(t => <option key={t.teamId} value={t.teamId}>{t.name}</option>)}
//                 </select>
//                 <h2>meetings List</h2>
//                 {meetings.map(m => <MeetingCard key={m.meetingId} Meeting={m} />)}
//         </div>
//     );
// }

// export default TeamsMeeting;

import axios from "axios";
import { useEffect, useState } from "react";
import { MeetingModel } from "../../../Models/MeetingModel";
import { TeamModel } from "../../../Models/TeamModel";
import MeetingCard from "../MeetingCard/MeetingCard";
import "./TeamsMeeting.css";

function TeamsMeeting(): JSX.Element {
    const [teams, setTeams] = useState<TeamModel[]>([]);
    const [meetings,setMeetings] = useState<MeetingModel[]>([]);

    useEffect(() => {
        axios.get<TeamModel[]>("http://localhost:3001/api/teams")
            .then(response => setTeams(response.data))
            .catch(err => alert(err.message));
    }, []); // added dependency array

    const onSelectChange = async (event: any) =>  {  
        await axios.get<MeetingModel[]>(`http://localhost:3001/api/TeamsMeeting/${event.target.value}`)
            .then(response => setMeetings(response.data))
            .catch(err => alert(err.message));
    };

    return (
        <div className="TeamsMeeting">
			<label>Team: </label>
                <select onChange={onSelectChange} defaultValue="0">
                    <option disabled value="0">Select A Team </option>
                    {teams.map(t => <option key={t.teamId} value={t.teamId}>{t.name}</option>)}
                </select>
                <h2>Meetings List</h2>
                {meetings.map(m => <MeetingCard key={m.meetingId} Meeting={m} />)}
        </div>
    );
}

export default TeamsMeeting;
