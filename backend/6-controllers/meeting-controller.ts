import { Router } from "express";
import { createNewMeeting, getAllMeetingsByTeamId,  } from "../5-logic/meeting-logic";



export const meetingRouter = Router();

meetingRouter.get('/meetings/:id([0-9]+)', async (req, res, next) => {
    const meeting = await getAllMeetingsByTeamId(+req.params.id);
    if (!meeting) {
      res.sendStatus(404);
      return;
    }
    res.json(meeting);
})



meetingRouter.post('/meetings', async (req, res, next) => {
    const meeting = await createNewMeeting(req.body.teamId, req.body.startTime, req.body.endTime, req.body.description, req.body.meetingRoom);
    res.json(meeting);
})







