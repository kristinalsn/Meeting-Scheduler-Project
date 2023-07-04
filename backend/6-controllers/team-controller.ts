import { Router } from "express";
import { getAllMeetingsByTeamId } from "../5-logic/meeting-logic";
import { getAllTeams } from "../5-logic/team-logic";



export const teamRouter = Router();

// teamRouter.get('/teams', async (req, res, next) => {
//     const team = await getAllTeams();
//     res.json(team);
// })
teamRouter.get('/teams', async (req, res, next) => {
    const team = await getAllTeams();
    res.json(team);
});

teamRouter.get('/TeamsMeeting/:teamId', async (req, res, next) => {
    const teamId = Number(req.params.teamId);
    const meetings = await getAllMeetingsByTeamId(teamId);
    res.json(meetings);
});



