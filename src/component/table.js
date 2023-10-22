import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/style.css'

function Table() {
    const [data, setData] = useState([
        {
            "id": 1,
            "name": "Fauzan Resa",
            "username": "Fauzan",
            "email": "fauzanresa@gmail.com"
          },
          {
            "id": 2,
            "name": "Rheza Subekti",
            "username": "Rheza",
            "email": "rhezasubekti@gmail.com"
          },
          {
            "id": 3,
            "name": "Dhika Pamungkas",
            "username": "Dhika",
            "email": "dhikapamungkas@gmail.com"
          },
          {
            "id": 4,
            "name": "Akbar Rohani",
            "username": "Akbar",
            "email": "akbarrohani@gmail.com"
          },
          {
            "id": 5,
            "name": "Jeremiah Julianto",
            "username": "Jeremiah",
            "email": "jeremiahjulianto@gmail.com"
          },
          {
            "id": 6,
            "name": "budhi",
            "email": "budhi@gmail.com"
          }
    ])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(()=> {
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(er => console.log(er));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = data.length + 1;
        axios.post('http://localhost:3000/users', {id: id, name: name, email: email})
        .then(res => {
            // eslint-disable-next-line no-restricted-globals
            location.reload()
        })
    
    }
  return (
    <div className='container'>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="masukkan nama" onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="masukkan email" onChange={e => setEmail(e.target.value)} />
                <button>add</button>
            </form>
        </div>
        <table className='em-table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button>edit</button>
                                <button>delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table