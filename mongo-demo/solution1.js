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

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    return await Course
        .find({ tags: 'backend', isPublished: true})
        .sort('name') // { name: 1 }
        .select({ name: 1, author: 1}); // ('name author')
}

async function run() {
    const courses = await getCourses();
    console.log(courses);
}

run();