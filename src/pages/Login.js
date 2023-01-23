import React from 'react'
import './Login.css'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {


    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('https://invoice-api.c8.lt/login', form)
            .then(resp => {
                localStorage.setItem('Bearer_token', resp.data.token)
                console.log(resp.data.token)

                setTimeout(() => {


                    navigate('/home')
                }, 1000)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <h1>Prisijungimas</h1>
            <form onSubmit={handleSubmit}>
                <div >
                    <label >Prisijungimo vardas:</label>
                    <input type="username" name="username" onChange={handleForm} placeholder="Prisijungimo vardas" />
                </div>
                <div className="form-group mb-3">
                    <label >Slaptažodis:</label>
                    <input type="password" name="password" onChange={handleForm} placeholder="Jūsų slaptažodis" />
                </div>
                <button>Prisijungti</button>
            </form>
        </>
    )
}

export default Login