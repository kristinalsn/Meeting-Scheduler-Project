import AddMeeting from "../MeetingArea/AddMeeting/AddMeeting";
import TeamsMeeting from "../MeetingArea/TeamsMeeting/TeamsMeeting";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<h1>Meeting Calendar</h1>
            <AddMeeting />
            <TeamsMeeting/>
        </div>
    );
}

export default Layout;
