import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from "../component/sidebar";
import Permission from '../component/permission';
import Nav from '../component/navbar'
import '../css/style.css'

function P_permission (Toggle) {
    return (
        <div className=""> 
        <Nav style={{ position: 'fixed'}} Toggle={Toggle}/>
        <div className="container-fluid bg-secondary">
            <div className="row">
                <div className="col-2 bg-white vh-100">
                    <Sidebar/>
                </div>
                <div className="col d-flex justify-content-center align-items-center py-3">
                <div className="tabel-att w-100">
                    <Permission/>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default P_permission;