import express, { json } from 'express';
import { meetingRouter } from './6-controllers/meeting-controller';
import { teamRouter } from './6-controllers/team-controller';
import cors from "cors";

const server = express();

server.use(json());

server.use(cors());

server.use('/api', teamRouter);
server.use('/api', meetingRouter);

server.listen(3001, () => {
    console.log('Listening on port 3001...');
})