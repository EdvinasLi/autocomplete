import React from 'react'
import './Homepage.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Homepage() {

    const [clients, setClients] = useState([])

    const [value, setValue] = useState('')
    const token = localStorage.getItem('Bearer_token')

    useEffect(() => {
        axios.get('https://invoice-api.c8.lt/api/v1/clients', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(resp => setClients(resp.data))
            .catch(error => {
                console.log(error)

            })
    }, [])

    const onChange = (e) => {

        setValue(e.target.value);
    }

    const onSearch = (searchTerm, event) => {

        setValue(searchTerm)
        console.log('search', searchTerm)
    }


    /*
    Suggestions
    */

    return (<><div className="currentClients">
        <ul>
            {clients.map((client, index) => <li key={index}>{client.name} </li>
            )}
        </ul>

    </div>
        <div className='formMain'>
            <form >
                <div>
                    <label className="mb-1">Vardas:</label><br />
                    <input type="text" name="first_name" placeholder="Jūsų vardas" value={value} onChange={onChange} />

                    <div className="dropdown">
                        {clients.filter(item => {
                            const searchTerm = value.toLocaleLowerCase();
                            const name = item.name.toLocaleLowerCase()
                            return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;
                        })
                            .map((item, index) => <div key={index} onClick={() => onSearch(item.name)}>
                                {item.name}</div>)}
                    </div>
                </div>
                <div>
                    <label className="mb-1">Pavardė:</label><br />
                    <input type="text" name="last_name" placeholder="Jūsų pavardė" />
                </div>
                <div >
                    <label className="mb-1">El. pašto adresas:</label><br />
                    <input type="text" name="company_name" placeholder="Įmonės pavadinimas" />
                </div>
                <div >
                    <label className="mb-1">Slaptažodis:</label><br />
                    <input type="text" name="company_number" placeholder="Įmonės numeris" />
                </div>
                <button >Išrašyti SF</button>
            </form>
        </div>
    </>
    )
}
