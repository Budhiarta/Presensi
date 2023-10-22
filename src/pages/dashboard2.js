import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from '../component/sidebar';
import Uhome from '../component/uhome';

function DashboardU() {
    return (
        <div className="container-fluid bg-secondary">
            <div className="row">
                <div className="col-2 bg-white vh-100">
                    <Sidebar/>
                </div>
                <div className="col">
                    <Uhome/>
                </div>
            </div>
        </div>
    )
}

export default DashboardU