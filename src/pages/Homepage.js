import React from 'react'
import './Homepage.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
export default function Homepage() {
    const [refresh, setRefresh] = useState(false)
    const [clients, setClients] = useState([])
    const [form, setForm] = useState({})
    const [keyword, setKeyword] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzQ0MTM5MjgsImlkIjoiYWRtaW4iLCJvcmlnX2lhdCI6MTY3NDQxMDMyOH0.ScyUMetZEHeZPpnWWxaQKGTpnvQTnLOic52RvN6CsHA'
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
    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()




        axios.post('/api/users/register/', form)
            .then(resp => {


                window.scrollTo(0, 0)


            })
            .catch(error => {
                console.log(error)
            })
    }
    /*
    Suggestions
    */
    const handleSuggestion = (e) => {
        e.preventDefault()

        if (keyword === '')
            return setRefresh(!refresh)

        axios.get('https://invoice-api.c8.lt/api/v1/clients?code=' + keyword, {
            headers: {
                'Authorization': `Bearer ${token}`
            }

        })
            .then(resp => {
                setSuggestions(resp.data)
            })
            .catch(error => {
                console.log(error)


            })
    }

    return (<><div className="currentClients">
        <ul>
            {clients.map((client, index) => <li>{client.name} </li>
            )}
        </ul>

    </div>
        <div className='formMain'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="mb-1">Vardas:</label><br />
                    <input type="text" name="first_name" placeholder="Jūsų vardas" onChange={(e) => setKeyword(e.target.value)} />
                </div>
                <div>
                    <label className="mb-1">Pavardė:</label><br />
                    <input type="text" name="last_name" onChange={handleForm} placeholder="Jūsų pavardė" />
                </div>
                <div >
                    <label className="mb-1">El. pašto adresas:</label><br />
                    <input type="text" name="company_name" onChange={handleForm} placeholder="Įmonės pavadinimas" />
                </div>
                <div >
                    <label className="mb-1">Slaptažodis:</label><br />
                    <input type="text" name="company_number" onChange={handleForm} placeholder="Įmonės numeris" />
                </div>
                <button >Išrašyti SF</button>
            </form>
        </div>
    </>
    )
}
