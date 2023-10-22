import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Asidebar from "../component/asidebar";
import Table from "../component/table";
import '../css/style.css'

function A_employee () {
    return (
        <div className="container-fluid bg-secondary">
            <div className="row">
                <div className="col-2 bg-white vh-100">
                    <Asidebar/>
                </div>
                <div className="col d-flex justify-content-center align-items-center py-3">
                <div className="tabel-att w-100">
                    <Table/>
                </div>
                </div>
            </div>
        </div>
    )
}

export default A_employee;