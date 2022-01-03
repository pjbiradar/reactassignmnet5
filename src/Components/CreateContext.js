import React, { createContext, useState } from 'react'


export const CreateCont = createContext();

export const Studentprovide = (props) => {
    const [data, setData] = useState([{

        "Id": "1",
        "Name": "namrutha",
        "Age": "19",
        "Course": "MERN",
        "Batch": "July"



    },
    {
        "Id": "2",
        "Name": "neha",
        "Age": "18",
        "Course": "MERN",
        "Batch": "July"

    },
    {
        "Id": "3",
        "Name": "divya",
        "Age": "20",
        "Course": "MERN",
        "Batch": "July"

    },
    {
        "Id": "4",
        "Name": "palak",
        "Age": "21",
        "Course": "MERN",
        "Batch": "July"

    },
    {
        "Id": "5",
        "Name": "vaishnavi",
        "Age": "22",
        "Course": "MERN",
        "Batch": "July"
    },
    {
        "Id": "6",
        "Name": "nandini",
        "Age": "24",
        "Course": "MERN",
        "Batch": "July"

    }

    ])


    return (
        <CreateCont.Provider value={[data, setData]}>
            {props.children}
        </CreateCont.Provider>
    )
}



