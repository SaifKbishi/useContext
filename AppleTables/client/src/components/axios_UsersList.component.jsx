import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TableData from './TableData.component';

const useStyles = makeStyles((theme)=>({
 root: {
   width: '100%', 
   '& > *': {
     marginTop: theme.spacing(2),
   },
 },
 container: {
   maxHeight: 700,
 },
 theader:{
   fontWeight: 'fontWeightBold' ,
 },
}));

const UsersList = () => {
 const classes = useStyles(); 
 const [page, setPage] = React.useState(0);
 const [rowsPerPage, setRowsPerPage] = React.useState(5);
 const [users, setUsers]  = useState([]);
 const [loading, setLoading]  = useState(true);
 const [pagecount, setPagecount]  = useState(null);
 const [count, setCount]  = useState(0);

 const columnsData = [
  {
    id: 'email',
    label: 'אימייל',
    minWidth: 170,
    align: 'right',
  } ,
  {
    id: 'religion',
    label: 'מגזר',
    minWidth: 170,
    align: 'right',
  } ,
  {
    id: 'gender',
    label: 'מגדר',
    minWidth: 170,
    align: 'right',
  } ,
  {
    id: 'bdate',
    label: 'תאריך לידה',
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
    id: 'cellphone',
    label: 'טלפון',
    minWidth: 100,
    align: 'right',
  } ,
  {
    id: 'lastname',
    label: 'שם משפחה',
    minWidth: 170,
    align: 'right',
  } ,
  {
    id: 'firstname',
    label: 'שם',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'ID',
    label: 'ת.ז.',
    minWidth: 170,
    align: 'right',
  },

  { id: 'code', label: 'userid', minWidth: 90, align: 'right', },  
  
];

 useEffect(()=>{
  fetchUsers()
 },[]);


 const fetchUsers = async()=>{  
   console.log('hello world'); 
  const req=await axios.get(`http://localhost:3009/v1/allusers/`);
  console.log('101 users',req.data);
  setUsers(req.data);  
  setCount(req.data.length);
 }
 let usersData = {columnsData, users}
 return (
  console.log('hello world2'),
  <div>
    <h3>Users Table</h3>
    <TableData {...usersData} />
   </div>
 )
}

export default UsersList
