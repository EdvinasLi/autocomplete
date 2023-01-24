// import React from 'react'
// import './Homepage.css'
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// export default function Homepage() {

//     const [clients, setClients] = useState([])

//     const [value, setValue] = useState('')
//     const token = localStorage.getItem('Bearer_token')
//     const [result, setResult] = useState([])

//     useEffect(() => {
//         axios.get('https://invoice-api.c8.lt/api/v1/clients', {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//             .then(resp => setClients(resp.data))
//             .catch(error => {
//                 console.log(error)

//             })
//     }, [])

//     const onChange = (e) => {

//         setValue(e.target.value);
//         // console.log(value)
//     }

//     const onSearch = (searchTerm, event) => {
//         console.log(event)
//         setValue(searchTerm)
//         // console.log('search', searchTerm)
//     }

//     console.log(value)
//     /*
//     Suggestions
//     */

//     return (<><div className="currentClients">
//         <ul>    
//             {clients.map((client, index) => <li key={index}>{client.code} </li>
//             )}
//         </ul>

//     </div>
//         <div className='formMain'>
//             <form >
//                 <div>
//                     <label className="mb-1">Vardas:</label><br />
//                     <input type="text" name="first_name" placeholder="Jūsų vardas" value={value} onChange={onChange} />

//                     <div className="dropdown">
//                                         {clients.filter(item => {
//                                             const searchTerm = value.toLocaleLowerCase();
//                                             const name = item.name.toLocaleLowerCase()
//                                             console.log(item)

//                                             return searchTerm && name.startsWith(searchTerm) && name !== searchTerm;

//                                         })
//                                             .map((item, index) => < div key={index} onClick={() => onSearch(item.name)}>
//                                                 {item.name}</div>)}
//                     </div>
//                 </div>
//                 <div>
//                     <label className="mb-1">Pavardė:</label><br />
//                     <input type="text" name="last_name" placeholder="Jūsų pavardė" value={value.code} />
//                 </div>
//                 <div >
//                     <label className="mb-1">El. pašto adresas:</label><br />
//                     <input type="text" name="company_name" placeholder="Įmonės pavadinimas" value={value.vat} />
//                 </div>
//                 <div >
//                     <label className="mb-1">Slaptažodis:</label><br />
//                     <input type="text" name="company_number" placeholder="Įmonės numeris" value={value.address} />
//                 </div>

//                 <button >Išrašyti SF</button>

//             </form>

//         </div >

//     </>
//     )
// }
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Homepage() {
    const persons = [
        { name: "Paulius", lastName: "Asd", code: "123", phone: "123456789" },
        { name: "Kestas", lastName: "cvxc", code: "456", phone: "987654321" },
        { name: "Edvis", lastName: "fghfgh", code: "789", phone: "123456789" },
        { name: "Mykolas", lastName: "ghgf", code: "012", phone: "987654321" },
        { name: "Janina", lastName: "ertretre", code: "345", phone: "123456789" },
    ];
    const [search, setSearch] = useState("");
    const [filteredPersons, setFilteredPersons] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFilteredPersons(
            persons.filter((person) =>
                person.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    };

    const handleAutofill = (e) => {
        setSearch(e.target.value);
        setFilteredPersons(
            persons.filter((person) =>
                person.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    };

    return (
        <div>
            <h1>Homepage</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={handleChange}
                />
                <button type="submit">Search</button>

            </form>
            <ul>
                {filteredPersons.map((person) => (
                    <li key={person.code}>
                        <input
                            type="text"
                            value={person.name}
                            onChange={handleAutofill}
                        ></input>
                        <input
                            type="text"
                            value={person.lastName}
                            onChange={handleAutofill}
                        ></input>
                        <input
                            type="text"
                            value={person.code}
                            onChange={handleAutofill}
                        ></input>
                        <input
                            type="text"
                            value={person.phone}
                            onChange={handleAutofill}
                        ></input>
                    </li>
                ))}
            </ul>
        </div>
    );
}
