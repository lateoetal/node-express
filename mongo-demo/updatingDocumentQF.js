const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Angular',
        author: 'Mosh',
        tags: ['angular', 'frontend'],
        isPublished: true
    });
    
    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const pageNumber = 2;
    const pageSize = 10;

    const courses = await Course
        .find({ author: 'Mosh', isPublished: true })
        .skip((pageNumber - 1) * pageSize)
        .limit(pageSize)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
}

// Approach: Query first (QF)
// `findById()`
// Modify its properties
// save()

async function updateCourse(id) {
    const course1 = await Course.findById(id);
    if (!course1) return;
    /*course.set({
        isPublished = true,
        author = 'Another Author'
    });
    */
    course1.isPublished = true;
    course1.author = 'Edward Snowden';

    const result = await course1.save();
    console.log(result);
}

updateCourse('5c0fb6d974ef9c35188d4f9b');