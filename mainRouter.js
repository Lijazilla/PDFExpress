import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./index-Landing";
import App from "./App";

function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/app" element={<App />} />
        </Routes>
    );
}

export default MainRouter;
