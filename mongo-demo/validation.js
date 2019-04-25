const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        // name: 'Angular',
        author: 'Mosh',
        tags: ['angular', 'frontend'],
        isPublished: true
    });
    
    try {
        await course.validate();
        // const result = await course.save();
        // console.log(result);
    }
    catch (ex) {
        console.log(ex.message);
    }
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

async function updateCourse(id) {
    const course = await Course.findByIdAndUpdate(id, {
        $set: {
            author: 'Ramsey',
            isPublished: true
        }
    }, { new: true});
    console.log(course);
}

async function removeCourse(id) {
    // const result = await Course.deleteOne({ _id: id })
    const course = await Course.findByIdAndRemove(id);
    console.log(course);
}

createCourse();