import axios from 'axios';
import React, {useEffect, useState} from 'react'


const CoursesList = () => {
 const [courses, setCourses]  = useState([]);
 const [loading, setLoading]  = useState(true);
 const [pagecount, setPagecount]  = useState(null);

 useEffect(()=>{
  fetchCourses()
 },[])

 const fetchCourses = async()=>{
  const reqData = {
   "coursestatus": 1,
   "desc": true,
   "page": "0",
   "search": "",
   "sorting": "courseid",
   "token": '21114f8a02bd61338b9d1a77945abfbaeba9d',
   "v": 2.4
   }
   
  const req=await axios.get(`http://54.93.207.96/server/datagate.php?type=SearchCourses`,  
  {
   "coursestatus": 1,
   "desc": true,
   "page": "0",
   "search": "",
   "sorting": "courseid",
   "token": '2111413e1cd4c97bf0786b559831a53668d1a',
   "v": 2.4 
  } 
  )
  console.log(req);
  console.log(req.data);
 }
 return (
  <div>

  </div>
 )
}

export default CoursesList
