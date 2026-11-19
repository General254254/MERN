const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout');


//express app
const app = express();



// Middleware

app.use(express.json());

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

//routes
app.use('/api/workouts', workoutRoutes);

//connect to db
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Connected to DB & Listening for requests on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to DB:', error);
    });
