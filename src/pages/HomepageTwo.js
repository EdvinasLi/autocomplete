import React, { useState } from 'react'
import Search from '../components/Search'
const HomepageTwo = (props) => {
    const [fields, setFields] = useState();

    return (
        <div className='container'>

            <Search label="name" fields={fields} setFields={setFields} />
            <Search label="code" fields={fields} setFields={setFields} />
            <Search label="vat" fields={fields} setFields={setFields} />
            <Search label="address" fields={fields} setFields={setFields} />






        </div >
    )
}

export default HomepageTwo