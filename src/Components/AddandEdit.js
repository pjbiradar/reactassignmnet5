import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CreateCont } from './CreateContext'

export default function AddandEdit() {
    const [name, setName] = useState({
        Id: '',
        Name: '',
        Age: '',
        Batch: '',
        Course: ''
    });
    const { id } = useParams();
    const [data, setData] = useContext(CreateCont);


    useEffect(() => {
        data.filter((val) => val.Id === id).map((vall) => setName(vall))




    }, [data,id])
    

    const k = useNavigate();

    const first = (e) => {
        const start = e.target.name;
        const start1 = e.target.value;
        setName({ ...name, [start]: start1 })


    }
    const handle = (e) => {
        if (name.Name ===''|| name.Age === ''|| name.Batch=== '' || name.Course === '') {
            alert("pls fill the data")
        }
        else {
            
            if (id!== undefined) {
                setData((prev) => prev.map((nam) => (nam.Id === id) ? {
                    'Id': id,
                    "Name": name.Name,
                    "Age": name.Age,
                    "Course": name.Course,
                    "Batch": name.Batch
                } : nam
                ))
            }
            else {
                const newinfo = { ...name, Id: `${data.length + 1}` }
                setData([...data, newinfo])

            }

        }
        k('/students')



    }


    return (
        <div className='forms'>
            <form >
                <label className='one'><h3>NAME</h3></label>
                <input id='name' type={'text'} className='onea' onChange={first} name='Name' value={name.Name} /> <br></br>
                <label className='two'><h3>AGE</h3></label>
                <input id='age' type={'number'} className='twoa' onChange={first} name='Age' value={name.Age} /> <br></br>
                <label className='three'><h3>BATCH</h3></label>
                <input id='batch' type={'text'} className='threea' onChange={first} name='Batch' value={name.Batch} /> <br></br>
                <label className='four'><h3>COURSE</h3></label>
                <input id='course' type={'text'} className='foura' onChange={first} name='Course' value={name.Course} /> <br></br>
                <input type={'button'} id='button' className='sub' value= { id===undefined?'submit':'update'} 
                 onClick={handle} name='button' />
                <input type={'button'} className='can' id='button' value={'cancel'} onClick={() => k('/students')} name='button' />






            </form>
        </div>
    )
}
