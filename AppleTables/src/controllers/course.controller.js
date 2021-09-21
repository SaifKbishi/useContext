const Course = require('../models/course.model');

const findAll = async (req, res)=>{
 console.log('37 findAll, course controllers')
 try{
  const allCourses = await Course.find({});
  res.status(200).send(allCourses);
 }catch(error){
  console.log('could not fetch all courses');
  res.status(400).send(error);
 }
};

const createCourse = async (req, res)=>{
 if(!req.body.name){
  res.status(400).send({ message: "Content can not be empty!" });
    return;
 }
 console.log('10 req.body: ',req.body);
 const course = await Course(req.body);
 try{
  await course.save();
  res.status(201).send(course);
 }catch(error){
  console.log('could not create new Course');
  res.status(400).send(error);
 }

};

const addManyCourses = async (req, res)=>{
 if(!req.body){
  res.status(400).send({ message: "Content can not be empty!" });
    return;
 }
 console.log('36 insert many courses');
 // const couses = await Course(req, res)
 try{
  const manyCourses = await Course.insertMany(
   [
    {
        "courseid": "2216",
        "code": "Y3ZR",
        "name": "test 1",
        "subname": "itay",
        "subnameinarabic": "aaa",
        "cityname": "אבו קוידר",
        "year": "2020",
        "project": "UP - pro",
        "studentnum": "0",
        "teachers": null
    },
    {
        "courseid": "2215",
        "code": "Y3ZR2",
        "name": "test 2",
        "subname": "itay",
        "subnameinarabic": "aaa",
        "cityname": "אבו קוידר",
        "year": "2020",
        "project": "UP - pro",
        "studentnum": "0",
        "teachers": null
    },
    {
        "courseid": "2214",
        "code": "RE4Y",
        "name": "asaddaf 3",
        "subname": "asffddf",
        "subnameinarabic": "assddda",
        "cityname": "אבו קוידר",
        "year": "2020",
        "project": "UP - pro",
        "studentnum": "0",
        "teachers": "אוריה משפחת תפוח-720"
    },
    {
        "courseid": "2213",
        "code": "8ZWW",
        "name": "asaddaf 4",
        "subname": "asffddf",
        "subnameinarabic": "assddda",
        "cityname": "אבו קוידר",
        "year": "2020",
        "project": "UP - pro",
        "studentnum": "0",
        "teachers": "אוריה משפחת תפוח-720"
    },
    {
        "courseid": "2212",
        "code": "7KH8",
        "name": "asaddaf 5",
        "subname": "asddf",
        "subnameinarabic": "assddda",
        "cityname": "אבו קוידר",
        "year": "2020",
        "project": "UP - pro",
        "studentnum": "0",
        "teachers": "אוריה משפחת תפוח-720"
    },
    {
        "courseid": "2211",
        "code": "XJOI",
        "name": "asaaf 6",
        "subname": "asf",
        "subnameinarabic": "asssaa",
        "cityname": "אבו קוידר",
        "year": "2020",
        "project": "UP - pro",
        "studentnum": "0",
        "teachers": "אוריה משפחת תפוח-720"
    },
    {
        "courseid": "2210",
        "code": "NO1S",
        "name": "asfaaaaaf 7",
        "subname": "asfaaasf",
        "subnameinarabic": "aaaa",
        "cityname": "אבו קוידר",
        "year": "2020",
        "project": "UP - pro",
        "studentnum": "0",
        "teachers": "אוריה משפחת תפוח-720"
    },
    {
        "courseid": "2209",
        "code": "AWWT",
        "name": "asfasf 8",
        "subname": "asfasf",
        "subnameinarabic": "asfasf",
        "cityname": "אבו קוידר",
        "year": "2020",
        "project": "UP - pro",
        "studentnum": "0",
        "teachers": "אוריה משפחת תפוח-720"
    },
    {
        "courseid": "2208",
        "code": "RQPJ",
        "name": "NodeJS 9",
        "subname": "שדכשדכ",
        "subnameinarabic": "שדכשדכ",
        "cityname": "גבעת אלה",
        "year": "2021",
        "project": "ס'לה - נבחרות נוער",
        "studentnum": "0",
        "teachers": "סימה משפחת תפוח-639"
    },
    {
        "courseid": "2207",
        "code": "7YZV",
        "name": "בלה בלה 10",
        "subname": "בלה",
        "subnameinarabic": "aksaf",
        "cityname": "אלי על",
        "year": "2021",
        "project": "פנימי",
        "studentnum": "0",
        "teachers": "סימה משפחת תפוח-639"
    },
    {
        "courseid": "2206",
        "code": "R7BW",
        "name": "בדיקה 11",
        "subname": "בדיקה",
        "subnameinarabic": "בדיקה",
        "cityname": "אבו קוידר",
        "year": "2021",
        "project": "פנימי",
        "studentnum": "0",
        "teachers": "ניר משפחת תפוח-693"
    },
    {
        "courseid": "2205",
        "code": "RB37",
        "name": "Fullstack 12",
        "subname": "פולסטאק",
        "subnameinarabic": "פולסטאק",
        "cityname": "לוד",
        "year": "2021",
        "project": "BOOTCAMP",
        "studentnum": "0",
        "teachers": "איתי עמוס משפחת תפוח-18633"
    },
    {
        "courseid": "2204",
        "code": "8OAJ",
        "name": "Tech Support מחזור יוני 2021 13",
        "subname": "טק ספורט יוני 21",
        "subnameinarabic": "טק ספורט יוני 21",
        "cityname": "ארצי",
        "year": "2021",
        "project": "Tech support",
        "studentnum": "0",
        "teachers": "מיכאל משפחת תפוח-19653"
    },
    {
        "courseid": "2203",
        "code": "K7YI",
        "name": "פרוגרס טבריה - מלכי - יוני 2021 14",
        "subname": "פרוגרס טבריה - יוני",
        "subnameinarabic": "פרוגרס טבריה - יוני",
        "cityname": "טבריה",
        "year": "2021",
        "project": "UP - progress",
        "studentnum": "0",
        "teachers": "ליאת משפחת תפוח-21061, מלכה משפחת תפוח-21013"
    },
    {
        "courseid": "2202",
        "code": "LVK7",
        "name": "ברק 6: סדנת פיננסים ברשת 15",
        "subname": "ברק 6: סדנת פיננסים ברשת",
        "subnameinarabic": "ברק 6: סדנת פיננסים ברשת",
        "cityname": "רמלה",
        "year": "2021",
        "project": "קהילה דיגיטלית ברמלה",
        "studentnum": "0",
        "teachers": "ברק משפחת תפוח-20659"
    },
    {
       "courseid" : "2186",
       "code" : "KN8X",
       "name" : "IT&Linux- ריימונד- יוני- 2021 16",
       "subname" : "IT&Linux- ריימונד- יולי",
       "subnameinarabic" : "IT&Linux- ריימונד- יולי",
       "cityname" : "ארצי",
       "year" : "2021",
       "project" : "UP - advance",
       "studentnum" : "22",
       "teachers" : "מדריך תעסוקה משפחת תפוח-1638, ריימונד משפחת תפוח-20748, שי משפחת תפוח-15713",
    }
   ]
  );
 }catch(error){
  console.log('could not create MANY new Courses');
  res.status(400).send(error);
 }

}


exports.findOne = (req, res)=>{};

exports.update= (req, res)=>{};

exports.delete= (req, res)=>{};

exports.deleteAll= (req, res)=>{};

exports.findAllPublished= (req, res)=>{};

module.exports = {
 createCourse,
 findAll,
 addManyCourses,
 // findOne,
 // update,
}