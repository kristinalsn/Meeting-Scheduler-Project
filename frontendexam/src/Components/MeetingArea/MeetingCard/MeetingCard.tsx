import { MeetingModel } from "../../../Models/MeetingModel";
import "./MeetingCard.css";

interface meetingCardProps {
	Meeting: MeetingModel;
}

function MeetingCard(props: meetingCardProps): JSX.Element {
    return (
        <div className="MeetingCard">
			Id: {props.Meeting.meetingId}
            <br />
            Room: {props.Meeting.meetingRoom}
            <br />
            Start: {new Date(props.Meeting.startTime).toLocaleString()}
            <br />
            End: {new Date(props.Meeting.endTime).toLocaleString()}
            <br />
            Description: {props.Meeting.description}
        </div>
    );
}

export default MeetingCard;
