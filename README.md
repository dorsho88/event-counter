# event-counter
"The application collects events sent to it, and has a user interface which shows a tally of the events" (as described in task sheet).
This application was created using nodejs and Angular.

### Requirements
- nodejs
- mongoDB

### App Instalation
- Clone the repo from branch `master`.
- Be sure to be in the project folder `cd event-counter`.
- Inside the `event-counter` folder, install api & frontend modules with a single `npm install`command.
  (a postinstall script will do the work and init the app).
- The app is running and accessable at `localhost:4000`;

### MongoDB
- node's mongoose is set to connect to 'mongodb://localhost/remarkety'
- TODO

### event-counter endpoints

The event-counter collects the events at:
POST `localhost:4000/api/events`  

example for post request body,
note the `event_name` is optional:

`{
  "event_type": "event_type_a",
  "event_id": "abcd1234",
  "event_name": "some event" 
}`



for future consideration, PUT and DELETE methods are also implemented, and their endpoints are:

PUT `localhost:4000/api/events/[MONGODB_ID]`

DELETE `localhost:4000/api/events/[MONGODB_ID]` 


