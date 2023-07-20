import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Orders from './pages/orders'

function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/orders" element={<Orders/>}/>
            </Routes>
        </Router>
    )
}

export default MyRoutes;