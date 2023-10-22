import React from 'react'
import Nav from "./navbar"


function Home({Toggle}) {
  return (
    <div className=''>
        <Nav Toggle={Toggle}/>
        <div className='container-fluid'>
            <div className='row g-3 my-2'>
                <div className='gambar1 col-md-4 p-1'>
                    <div className=' p-4 bg-white shadow-sm d-flex justify-content-around align-item-center rounded'>
                        <div>
                            <h3 className='fs-2'>09.00</h3>
                            <p className='fs-5'>WITA</p>
                        </div>
                        <i className='bi bi-clock-fill p-3 fs-1'></i>
                    </div>
                </div>
                <div className='col-md-4 p-1'>
                    <div className='p-4 bg-white shadow-sm d-flex justify-content-around align-item-center rounded'>
                        <div>
                            <h3 className='fs-2'>18.00</h3>
                            <p className='fs-5'>WITA</p>
                        </div>
                        <i className='bi bi-clock-history p-3 fs-1'></i>
                    </div>
                </div>
            </div>
                <div className='row g-3 my-2'>
                <div className='col-md-4 p-1'>
                    <div className='p-4 bg-white shadow-sm d-flex justify-content-around align-item-center rounded'>
                        <div>
                            <h3 className='fs-2'>TodoList</h3>
                            <p className='fs-5'>1 fix bug at dashboard seles</p>
                            <p className='fs-5'>2 fix bug sales order menu</p>
                        </div>
                        <i className='bi bi-person-lines-fill p-3 fs-1'></i>
                    </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Home