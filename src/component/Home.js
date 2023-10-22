import React from 'react'
import Nav from "./navbar"
import Chart from './chart'

function Home({Toggle}) {
  return (
    <div className=''>
        <Nav Toggle={Toggle}/>
        <div className='container-fluid'>
            <div className='row g-3 my-2'>
                <div className='gambar1 col-md-4 p-1'>
                    <div className=' p-4 bg-white shadow-sm d-flex justify-content-around align-item-center rounded'>
                        <div>
                            <h3 className='fs-2'>230</h3>
                            <p className='fs-5'>Employees</p>
                        </div>
                        <i className='bi bi-person-workspace p-3 fs-1'></i>
                    </div>
                </div>
                <div className='col-md-4 p-1'>
                    <div className='p-4 bg-white shadow-sm d-flex justify-content-around align-item-center rounded'>
                        <div>
                            <h3 className='fs-2'>10</h3>
                            <p className='fs-5'>Project</p>
                        </div>
                        <i className='bi bi-check2-square p-3 fs-1'></i>
                    </div>
                </div>
                <div className='col-md-4 p-1'>
                    <div className='p-4 bg-white shadow-sm d-flex justify-content-around align-item-center rounded'>
                        <div>
                            <h3 className='fs-2'>10</h3>
                            <p className='fs-5'>Client</p>
                        </div>
                        <i className='bi bi-person-lines-fill p-3 fs-1'></i>
                    </div>
                </div>
            </div>
                <div className='row g-3 my-2'>
                    <Chart className="chart"/>
                </div>
        </div>
    </div>
  )
}

export default Home