const router = require('express').Router();
const courses = require('../controllers/course.controller');

console.log('4 from course routes')

//create a new course
router.post('/', courses.createCourse);

//add many courses
router.post('/addManyCourses/', (req,res)=>{
 courses.addManyCourses(req,res);
});

//retrieve all courses
router.get('/allcourses/', (req, res)=>{
 courses.findAll(req,res);
});


module.exports = router;