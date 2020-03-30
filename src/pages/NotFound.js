import React from "react";
import './styles/NotFound.css';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className="not-found">
            <div className="container">
                <div className="row">
                    <div className="not-found-col col-md-12">
                        <h1>404</h1>
                        <h2>Página no encontrada</h2>
                        <Link className="btn btn-primary" to="/badges">
                            Inicio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound