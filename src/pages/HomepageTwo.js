import React, { useState } from 'react'
import Search from '../components/Search'
import './Homepage.css'
const HomepageTwo = (props) => {
    const [fields, setFields] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(fields)
    }

    return (
        <div className='container1'>
            <Search />



        </div >
    )
}

export default HomepageTwo