require('dotenv').config()
const express = require('express'),
      ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const massive = require("massive");
const app = express();
app.use(express.json());



massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("db connected");
  
});

app.get('/auth/session-user', ctrl.getSessionUser)

app.get('/api/events/', ctrl.getCalEvents)
app.put('/api/search', ctrl.searchEvent)
app.post('/api/submit/:user-id', ctrl.addEvents)
app.delete('/api/event/:event_id', ctrl.deleteEvent)

app.listen(SERVER_PORT, () => console.log(`running on port ${SERVER_PORT}`));