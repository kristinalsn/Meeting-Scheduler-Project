// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { MeetingModel } from "../../../Models/MeetingModel";
// import { TeamModel } from "../../../Models/TeamModel";
// import "./AddMeeting.css";

// function AddMeeting(): JSX.Element {
    
//     const [teams, setTeams] = useState<TeamModel[]>([]);
//     const { register, handleSubmit, formState } = useForm<MeetingModel>();

//     useEffect(() => {
//         axios.get<TeamModel[]>("http://localhost:3001/api/teams")
//             .then(response => setTeams(response.data))
//             .catch(err => alert(err.message));
//     });

//     async function send(meeting: MeetingModel) {
//         try {
//             const response = await axios.post<MeetingModel>("http://localhost:3001/api/meetings", meeting);
//             alert("Added Successfully. ID: " + response.data.meetingId);
//         }
//         catch(err) {
//         }
//     }

//     return (
//         <div className="AddMeeting">
//             <form onSubmit={handleSubmit(send)}>
// 			<label>Team Name: </label>
//                 <select  {...register("teamId" , { required: true, min: 1 })}>
//                     <option disabled selected value="0">Select A Team </option>
//                     {teams.map(t => <option key={t.teamId} value={t.teamId}>{t.name}</option>)}
//                 </select>
//                 {formState.errors.teamId?.type === "min" && <span>Missing Team name</span>}

//             <label>Start Time: </label>
//             <input type="datetime-local"  {...register("startTime", { required: true })} />
//             {formState.errors.startTime?.type === "required" && <span>Missing Start Time</span>}
            
//             <label>End Time: </label>
//             <input type="datetime-local"  {...register("endTime", { required: true })}/>
//             {formState.errors.endTime?.type === "required" && <span>Missing End Time</span>}
            
//             <label>description: </label>
//             <input type="text"  {...register("description", { required: true })}/>
//             {formState.errors.description?.type === "required" && <span>Missing description</span>}
            
//             <label>Meeting Room: </label>
//             <input type="text" {...register("meetingRoom", { required: true })} />
//             {formState.errors.meetingRoom?.type === "required" && <span>Missing Meeting Room</span>}

//             <button>Add Meeting</button>
//             </form>
//         </div>
//     );
// }

// export default AddMeeting;

import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MeetingModel } from "../../../Models/MeetingModel";
import { TeamModel } from "../../../Models/TeamModel";
import "./AddMeeting.css";

function AddMeeting(): JSX.Element {
    
    const [teams, setTeams] = useState<TeamModel[]>([]);
    const { register, handleSubmit, formState } = useForm<MeetingModel>();

    useEffect(() => {
        axios.get<TeamModel[]>("http://localhost:3001/api/teams")
            .then(response => setTeams(response.data))
            .catch(err => alert(err.message));
    }, []); // Added empty dependency array here

    async function send(meeting: MeetingModel) {
        try {
            const response = await axios.post<MeetingModel>("http://localhost:3001/api/meetings", meeting);
            alert("Added Successfully. ID: " + response.data.meetingId);
        }
        catch(err) {
            if (err instanceof Error) {
                alert(err.message);
            }
            else {
                // Handle case when err is not an Error instance
            }
        }
            }

    return (
        <div className="AddMeeting">
            <form onSubmit={handleSubmit(send)}>
                <label>Team Name: </label>
                <select defaultValue="0" {...register("teamId" , { required: true, min: 1 })}>
                    <option disabled value="0">Select A Team </option>
                    {teams.map(t => <option key={t.teamId} value={t.teamId}>{t.name}</option>)}
                </select>
                {formState.errors.teamId?.type === "min" && <span>Missing Team name</span>}

                <label>Start Time: </label>
                <input type="datetime-local"  {...register("startTime", { required: true })} />
                {formState.errors.startTime?.type === "required" && <span>Missing Start Time</span>}
                
                <label>End Time: </label>
                <input type="datetime-local"  {...register("endTime", { required: true })}/>
                {formState.errors.endTime?.type === "required" && <span>Missing End Time</span>}
                
                <label>Description: </label>
                <input type="text"  {...register("description", { required: true })}/>
                {formState.errors.description?.type === "required" && <span>Missing description</span>}
                
                <label>Meeting Room: </label>
                <input type="text" {...register("meetingRoom", { required: true })} />
                {formState.errors.meetingRoom?.type === "required" && <span>Missing Meeting Room</span>}

                <button>Add Meeting</button>
            </form>
        </div>
    );
}

export default AddMeeting;
