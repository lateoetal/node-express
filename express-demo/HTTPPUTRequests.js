const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
]

app.get('/', (req, res) => {
    res.send('Hello Ramsey-Fechner!');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req, body); // Instead of 'adress.error'
    if (error) {
        res.status(400).send(error.details[0].message); // 400 Bad Request
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found'); // Look up the course -> If not existing, return 404

    const { error } = validateCourse(req.body); // Instead of 'result.error'
    if (error) {
        res.status(400).send(error.details[0].message); // 400 Bad Request
        return;
    } // Validate -> If invalid, return 400 - Bad request

    course.name = req.body.name;
    res.send(course); // Update course -> Return the updated course
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));