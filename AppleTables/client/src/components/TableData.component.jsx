/**Saif K. and Foad A. 
 * this component is the display for each table sent via props.
 * two parameters are important: columns & dataList
 * columns includes the table header
 * dataList includes the data of the entity we are calling (courses, users etc.)
*/
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';
import SearchAppBar from './SearchAppBar.component';

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

export default function TableData(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [count, setCount]  = useState(0);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const columns = props.columnsData;
  const dataList = props.courses;

  return (
  <Paper className={classes.root}>
   {/* <SearchAppBar/> */}
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
            {dataList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {            
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
        <Pagination count={Math.floor((dataList.length)/rowsPerPage)} page={page} onChange={handleChange} />      
      </div>
    </Paper>
  );
}
