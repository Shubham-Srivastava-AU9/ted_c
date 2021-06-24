const express = require('express');
const connectDB = require('./config/db.js');
const path = require('path');


const app = express();



connectDB();

// Init Middleware
app.use(express.json({ extended: false }));


// Define Routes

app.use('/api', require('./routes/product'))
app.use('/api', require('./routes/category'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    );
  }





const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));