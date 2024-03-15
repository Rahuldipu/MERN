import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import ProjectDetails from "../project/ProjectDetails";
import Login from "../auth/Login";
import Register from "../auth/Register";
import ProtectedRoute from "../auth/ProtectedRoute";
import Profile from "../user/Profile";
import UpdateProfile from "../user/UpdateProfile";

const userRoutes = () => {
    return (
        <>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="/me/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/me/update_profile"
                element={
                    <ProtectedRoute>
                        <UpdateProfile />
                    </ProtectedRoute>
                }
            />
        </>
    );
};

export default userRoutes;
