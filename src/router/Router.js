import React from "react";
import UpdateProfileForm from "../components/Auth/UpdateProfileForm";
import { Navigate, Route, Routes } from "react-router";
import Home from "../components/home/Home";
import FindPartner from "../components/Partner/FindPartner";
import { getUserFromLocalStorage } from "../services/service";
import ProfilePreferenceForm from "../components/Auth/ProfilePreferenceForm";

function Router() {
  const currentUser = getUserFromLocalStorage();
  return (
    <Routes>
      <Route path="/" element={currentUser ? <Navigate to="/find" /> : <Home />} />
      <Route path="/find" element={<FindPartner />} />
      <Route path="/profile-update" element={<UpdateProfileForm />} />
      <Route path="/profile-preference" element={<ProfilePreferenceForm />} />
    </Routes>
  );
}

export default Router;
