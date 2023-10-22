import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Asidebar from "../component/asidebar";
import Home from "../component/Home";

function DashboardA() {
    return (
        <div className="container-fluid bg-secondary">
            <div className="row">
                <div className="col-2 bg-white vh-100">
                    <Asidebar/>
                </div>
                <div className="col">
                    <Home/>
                </div>
            </div>
        </div>
    )
}

export default DashboardA