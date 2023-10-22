import React from 'react'
import Logo from "../images/logo.png"
import '../css/style.css'

const Asidebar = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-auto bg-white vh-100'>
    <div className='bg-white sidebar p-3'>
        <div>
            <img className="Logo d-block mx-auto" src={Logo} alt='logo' ></img>
            <span classname='checklist fs-4'></span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
          <a href='/dashboard' className='list-group-item py-2 my-1'>
            <i className='bi bi-speedometer2 fs-5 me-2'></i>
            <span className='fs-5'>Dashboard</span>
          </a>
          <a href='/em' className='list-group-item py-2 my-1'>
            <i className='bi bi-calendar-check fs-4 me-2'></i>
            <span className='fs-5'>Employee</span>
          </a>
        </div>
    </div>
    </div>
      </div>
    </div>
  )
}

export default Asidebar

