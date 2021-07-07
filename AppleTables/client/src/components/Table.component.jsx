/**Saif K. and Foad A. */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import courses from '../courses'
import Pagination from '@material-ui/lab/Pagination';
import SearchAppBar from './SearchAppBar.component'

const columns = [
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
    id: 'name',
    label: 'שם קורס מלא',
    minWidth: 170,
    align: 'right',
  },

  { id: 'code', label: 'קוד קורס', minWidth: 90, align: 'right', },  
  
];

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

export default function CoursesList2() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Paper className={classes.root}>
   <SearchAppBar/>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth}}
                  className={classes.theader}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {            
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>    
      <div className={classes.root}>
        <Pagination count={7} page={page} onChange={handleChange} />      
      </div>
    </Paper>
  );
}
