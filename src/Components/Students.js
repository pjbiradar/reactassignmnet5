import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import {CreateCont} from './CreateContext'
import React, {useContext } from 'react'


export default function Students() {
const [data] = useContext(CreateCont);

    const assign=useNavigate();

    const addstud=()=>{
        assign('/addandedit')
    }
        return (
            <div>
                <div>
                    <button className='button' onClick={addstud}>Add Student</button>
                </div>
                <div>
                    <h1 className='mainhead'>StudentsCompo</h1>
                </div>
                <div className='container'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} className='table' aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><h4>Name</h4></TableCell>
                                    <TableCell align="right"><h4>Age</h4></TableCell>
                                    <TableCell align="right"><h4>Course</h4></TableCell>
                                    <TableCell align="right"><h4>Batch</h4></TableCell>
                                    <TableCell align="right"><h4 className='change'>Change</h4></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow
                                        key={row.Id}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.Name}
                                        </TableCell>
                                        <TableCell align="right">{row.Age}</TableCell>
                                        <TableCell align="right">{row.Course}</TableCell>
                                        <TableCell align="right">{row.Batch}</TableCell>
                                        <TableCell align="right" ><h4 className="changecolor"  onClick={()=>assign(`/addandedit/${row.Id}`)} > <i>Edit</i> </h4></TableCell>


                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

            </div>
        )
    }


