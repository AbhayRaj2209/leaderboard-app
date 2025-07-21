require('dotenv').config(); // .env file connect

const express = require('express'); // all these are methods of requiring express mongoose cors and dot env.
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// mongoose connection code :-

mongoose.connect(process.env.MONGO_URI, {

    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => console.log('MongoDB connected'))
 .catch(err => console.error('MongoDB connection error:', err));// if any error come display this message.


app.use('/api/users', userRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));// server will run on port 5000.
