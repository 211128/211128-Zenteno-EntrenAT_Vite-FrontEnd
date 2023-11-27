import { Route, Routes} from "react-router-dom";
import Register from "../pages/registro";
import Login from "../components/login";
import React from 'react'
import Exercises from "../pages/exercises";
import AvisoPrivacidad from "../pages/policy";
import Profile from "../pages/profile";



export default function Routers() {
  return (
   
      <Routes>
        <Route path="/policy" element={<AvisoPrivacidad />} />

        <Route path="/login" element={<Login />} />
        <Route path="/muscles" element={<Exercises />} />
        <Route path="/perfil" element={<Profile></Profile>} />
        <Route path="/registro" element={<Register />} />
      </Routes>
   
  );
}
