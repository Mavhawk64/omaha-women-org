
const express = require('express');
const config = require('./config/dbConfig');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const eventsRouter = require('./routes/events')

// dependencies 
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

// middleware
app.use(express.static('view'));
app.use(cors());
app.use(express.json());

// create mysql connection
const db = mysql.createConnection(config)

// connect to mysql
db.connect(err =>{
   if(err) {
      throw err;
   }
   console.log('db connection established!');
})



// routes(APIs)
app.use('/api', indexRouter);
app.use('/api/events', eventsRouter);
app.use('/api/users', usersRouter);


// Start Server 
app.listen(8080, () => {
   console.log('Server is running on port 8080!');
});