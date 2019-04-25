const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
    tags: [ String ],
    date: Date,
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});

const Course = new mongoose.model('Course', courseSchema);

async function getCourses() {
    return await Course
        .find({ isPublished: true})
        .or([
            { price: { $gte: 15} },
            { name: /.*by.*/i }
        ])
        .sort('-price')
        .select('name author price')
}

async function run() {
    const courses = await getCourses();
    console.log(courses);
}

run();