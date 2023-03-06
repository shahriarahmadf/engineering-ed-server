const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require('./data/courses.json');

app.get('/courses', (req,res) => {
    res.send(courses);
})

app.get('/course-details/:course_id', (req,res) => {
    const course_id = req.params.course_id;
    console.log(course_id);
    const selectedCourse = courses.find(course => course.course_id === course_id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('engineering ed server running on port: ',port);
})