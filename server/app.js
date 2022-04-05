import express from 'express';
 
const app = express();
const path = require('path')
// Use your dependencies here
// use all controllers(APIs) here

app.use(express.static('view'))

app.get('/api', (req, res) => {
   res.status(200).json({
      status: 'Server Run successfully'
   })
});


// Start Server here
app.listen(8080, () => {
   console.log('Server is running on port 8080!');
});