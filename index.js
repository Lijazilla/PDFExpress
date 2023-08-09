import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"; // Importa tu componente principal
import MainRouter from "./mainRouter"; // Importa tu componente de enrutador personalizado

ReactDOM.render(
    <Router>
        <MainRouter />
    </Router>,
    document.getElementById("root")
);
