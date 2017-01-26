// Bring in our dependencies
const express = require('express');
const app = express();
const imageSearch = require('./api/image_search');
const holidays = require('./api/holidays');
const cors = require('cors');

//  Connect all our routes to our application
app.use(cors());

// Host static files
app.use(express.static('public'))

app.use('/imageSearch', imageSearch);
app.use('/holidays', holidays);

// Turn on that server!
app.listen(80, () => {
  console.log('App listening on port 80');
});
