import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {



    const token = localStorage.getItem('Bearer_token')
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        vat: '',
        address: ''
    });
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://iapi2.c8.lt/api/v1/clients?name=${formData.name}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            });
            const data = await response.json();
            console.log(data)
            setSuggestions(Array.from(data))
            console.log(data)
        }
        if (formData.name) {
            fetchData();
        }
    }, [formData.name]);


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Autocomplete
                freeSolo
                options={suggestions}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label="SearchBYNAme" />}
                onChange={(event, newValue) => {
                    setFormData({ ...formData, name: newValue.name, code: newValue.code, vat: newValue.vat, address: newValue.address });
                }}
            />
            <TextField
                label="Code"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
            />
            <TextField
                label="VAT"
                value={formData.vat}
                onChange={(e) => setFormData({ ...formData, vat: e.target.value })}
            />
            <TextField
                label="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
            <button>Pateikti</button>
        </form>
    );
}

export default Search