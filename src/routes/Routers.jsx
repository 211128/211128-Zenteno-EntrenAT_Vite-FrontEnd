import { Link, Route, RouterProvider, Routes } from "react-router-dom";
import Register from "../pages/registro";
import Login from "../components/login";
import React from 'react'
import Exercises from "../pages/exercises";

export default function Routers() {
  return (
    
       <Routes>

            <Route path="/" element={<Login />} />
            
            <Route path="/muscles" element={<Exercises /> } />

            <Route path="/registro" element={<Register />} />
        </Routes>
    
  )
}


