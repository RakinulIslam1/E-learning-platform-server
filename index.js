const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const allCourses = require('./data/course.json');

app.get('/', (req, res) =>{
    res.send('api running')
});

app.get('/courses', (req, res) =>{
    res.send(allCourses);
})

app.listen(port, () =>{
    console.log('server running on port', port);
})

