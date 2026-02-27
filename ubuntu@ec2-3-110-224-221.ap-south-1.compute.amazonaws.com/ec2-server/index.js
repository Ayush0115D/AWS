const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.json({ message: 'Hello from AWS EC2!' });
});
app.listen(process.env.PORT || 3000, () => {    
    console.log('Server started on port 3000');
});