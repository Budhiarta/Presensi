import React from 'react';
import 'bootstrap/js/dist/dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function Nav({Toggle}) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent ">
        <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                <li className="nav-item dropdown">
  
                    <Dropdown className="dropDown" as={ButtonGroup}>
                        <Button variant="light" className="bi bi-power">Logout</Button>

                        <Dropdown.Toggle split variant="light" id="dropdown-split-basic"/>

                        <Dropdown.Menu>
                            <Dropdown.Item className="bi bi-power" href="/">  Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav