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
        .find({ isPublished: true, tags: { $in: ['frontend', 'backend'] } })
     // .or([ { tags: 'frontend' }, { tags: 'backend' }])
        .sort({ price: -1})
        .select({ name: 1, author: 1, price: 1})
}

async function run() {
    const courses = await getCourses();
    console.log(courses);
}

run();