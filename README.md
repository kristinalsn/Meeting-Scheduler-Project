# Meeting-Scheduler-Project
This web app, built with React.js and Express.js in TypeScript, enables users to schedule and manage meetings. Features include creating new meetings, viewing team meetings, and selecting meeting rooms. Server-side logic interacts with a MySQL database.

## Features
- Schedule a new meeting
- View all meetings by teams
- Select meeting rooms

## Tech Stack
- Frontend: React.js with TypeScript
- Backend: Express.js with TypeScript
- Database: MySQL

## Installation and Setup
1. Clone the repository: `git clone https://github.com/kristinalsn/Meeting-Scheduler-Project.git`
2. Navigate into the directory:
3. Install dependencies:
   - For backend, navigate into backend directory and run `npm install`
   - For frontend, navigate into frontend directory and run `npm install`
4. Create a MySQL database and update the configuration details in `config/db.config.js`
5. Start the server:
   - For backend, run `npm start` in the backend directory
   - For frontend, run `npm start` in the frontend directory
6. Visit `http://localhost:3000` in your browser to access the application

## Usage
- To add a meeting, click on the "Add Meeting" button, fill out the form and submit
- To view meetings for a team, select the team from the dropdown menu in "Teams Meeting" section

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
