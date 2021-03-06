/**Saif K. and Foad A. */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import coursesHeader from '../tableHeads/coursesHeader';
import TableData from './TableData.component';
import SearchAppBar from './SearchAppBar.component';

const columnsData = [
  {
    id: 'studentnum',
    label: 'מס סטודנטים',
    minWidth: 170,
    align: 'right',
  } ,
  {
    id: 'teachers',
    label: 'מדריך',
    minWidth: 170,
    align: 'right',
  } ,
  {
    id: 'cityname',
    label: 'עיר',
    minWidth: 100,
    align: 'right',
  } ,
  {
    id: 'year',
    label: 'שנת תקציב',
    minWidth: 100,
    align: 'right',
  } ,
  {
    id: 'project',
    label: 'פרויקט',
    minWidth: 170,
    align: 'right',
  } ,
  {
    id: 'name',
    label: 'שם מקוצר',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'name2',
    label: 'שם קורס מלא',
    minWidth: 170,
    align: 'right',
  },

  { id: 'code', label: 'קוד קורס', minWidth: 90, align: 'right', },  
  
];

const CoursesList=()=> {
 const [courses, setCourses]  = useState([]);
 const [count, setCount]  = useState(0);

useEffect(()=>{
 fetchCourses();
},[]);

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
 const req=await axios.get(`http://localhost:3009/v1/allcourses/`);
 console.log('77 ',req.data);
 setCourses(req.data); 
 setCount(req.data.length);
}

  let courseData = {columnsData , courses}
  return (
   <div>
    <SearchAppBar/>
    <h3>Courses Table</h3>    
    <TableData {...courseData} />
   </div>
   
  );
}

export default CoursesList;