import { Link, Route, RouterProvider, Routes, Navigate } from "react-router-dom";
import Register from "../pages/registro";
import Login from "../components/login";
import React from 'react'
import Exercises from "../pages/exercises";
import AvisoPrivacidad from "../pages/policy";
import { AuthProvider, useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ element, ...props }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/" />
  );
};

export default function Routers() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/policy" element={<AvisoPrivacidad />} />

        <Route path="/" element={<Login />} />

        {/* Utiliza <PrivateRoute> dentro de <Route> */}
        <Route
          path="/muscles"
          element={<PrivateRoute element={<Exercises />} />}
        />

        <Route path="/registro" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}
