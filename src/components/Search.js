import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Search = (props) => {
    const [clients, setClients] = useState([])
    const token = localStorage.getItem('Bearer_token')
    const [data, setData] = useState([]);
    const [param, setParam] = useState('')
    const [selectedValue, setSelectedValue] = useState('awdawd');
    const { fields, setFields } = props;



    async function fetchData(term) {
        const response = await fetch(`https://invoice-api.c8.lt/api/v1/clients?name=${term}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const json = await response.json();
        console.log(json);
        setData(json);
    }

    // useEffect(() => {
    //     setSelectedValue('Labas');
    // }, []);

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch(`https://invoice-api.c8.lt/api/v1/clients?name=Client`, {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         });
    //         const json = await response.json();
    //         setData(json);

    //     }
    //     fetchData();
    // }, []);

    // if (!data) {
    //     return <div>Loading...</div>;
    // }

    //console.log(data)

    const onChange = (e) => {

        // setParam(e.target.value);
        // console.log(param)

        if (e.target.value != '')
            fetchData(e.target.value);

    }

    //console.log(param)

    return (

        <Autocomplete
            getOptionLabel={(option) => option.name}
            disablePortal
            id="combo-box-demo"
            options={data}
            sx={{ width: 300 }}
            onChange={(e, value) => setFields(value)}
            // value={fields[props]}
            renderInput={(params) =>

                <TextField
                    value={selectedValue}
                    onChange={(event, newValue) => onChange(event)} label={props.label} {...params} />}

        />
    )
}

export default Search
