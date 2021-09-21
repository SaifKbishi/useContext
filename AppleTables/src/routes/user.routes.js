const router = require('express').Router();
const users = require('../controllers/user.controller');

console.log('4 from user routes')

//create a new course
router.post('/createuser', users.createUser);

//add many users
router.post('/addManyUsers/', (req,res)=>{
 cousersurses.addManyCourses(req,res);
});

//retrieve all users
router.get('/allusers/', (req, res)=>{
 users.findAll(req,res);
});


module.exports = router;