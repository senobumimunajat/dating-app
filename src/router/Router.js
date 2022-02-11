import React from "react";
import UpdateProfileForm from "../components/Auth/UpdateProfileForm";
import { Navigate, Route, Routes } from "react-router";
import Home from "../components/home/Home";
import FindPartner from "../components/Partner/FindPartner";
import { getUserFromLocalStorage } from "../services/service";

function Router() {
  const currentUser = getUserFromLocalStorage();
  return (
    <Routes>
      <Route path="/" element={currentUser ? <Navigate to="/find" /> : <Home />} />
      <Route path="/find" element={<FindPartner />} />
      <Route path="/profile-update" element={<UpdateProfileForm />} />
    </Routes>
  );
}

export default Router;
