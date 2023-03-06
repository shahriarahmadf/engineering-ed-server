const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require('./data/courses.json');

app.get('/', (req,res) => {
    res.send('Courses API running');
    console.log(res.courses);
})

app.get('/courses', (req,res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('engineering ed server running on port: ',port);
})