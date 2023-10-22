import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Permi2() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [date, setDate] = useState('')
    const [reason, setReason] = useState('')

    useEffect(()=> {
        axios.get('http://localhost:3000/permissions')
        .then(res => setData(res.data))
        .catch(er => console.log(er));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        const id = data.length + 1;
        axios.post('http://localhost:3000/permissions', { name: name, position: position, date: date, reason: reason})
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
                <input type="text" placeholder="masukkan jabatan" onChange={e => setPosition(e.target.value)} />
                <input type="date" placeholder="masukkan tanggal" onChange={e => setDate(e.target.value)} />
                <input type="text" placeholder="masukkan alasan" onChange={e => setReason(e.target.value)} />
                <button>add Permission</button>
            </form>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Date</th>
                    <th>Reason</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.position}</td>
                            <td>{user.date}</td>
                            <td>{user.reason}</td>
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

export default Permi2