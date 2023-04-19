import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EditCard from "./components/edit/EditCard";
import AdminRoute from "./components/AdminRoute";
import EmployeeCV from "./components/EmployeeCV";
import Narbarlayout from "./components/Narbarlayout";
import PrivateRoute from "./components/PrivateRoute";
import EmployeeProfile from "./components/profile/EmployeeProfile"
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<SignUpForm />} />

          <Route element={<Narbarlayout />}>
            <Route path="/" element={<AdminRoute />}>
              <Route path="/admin" element={<EmployeeCV />} />
              <Route path="/admin/employee/:_id" element={<EmployeeProfile />} />
              <Route path="/admin/employee/:_id/edit" element={<EditCard />} />
            </Route>

            <Route path="/" element={<PrivateRoute />}>
              <Route path="/employee/:_id" element={<EmployeeProfile />} />
              <Route path="/employee/:_id/edit" element={<EditCard />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
