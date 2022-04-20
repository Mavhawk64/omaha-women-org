import * as React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Footer from "./Components/footer";
import Header from "./Components/header";
import Events from "./routes/events";
import RegistrationContainer from "./routes/registrationContainer";
import AdminDashboard from "./routes/dashboard";
import "./Styles/index.css";
import "./Styles/bootstrap.css";
import LoginPage from "./Components/loginForm";
import Home from "./routes/Home";
import useSessionStorage from "./hooks/useSessionStorage";

export default function App() {
  const [isAuthenticated, toggleAuthenticationFlag] = useSessionStorage(false);
  const [user, setUser] = useSessionStorage(null);
 

  const handleLogout = e => {
    e.preventDefault();
    toggleAuthenticationFlag(false);
    setUser(null);
    window.location = window.location.origin + '/login';
  }

  if (isAuthenticated && user) {
    return (
      <div className="app-container">
        <BrowserRouter>
          <Header user={user} handleLogout={handleLogout}>
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/events" className="nav-link">
                Events
              </Link>
            </li>
          </Header>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="events" element={<Events />} />
            <Route path="dashboard" element={<AdminDashboard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }

  return (
    <div className="app-container">
      <BrowserRouter>
        <Header>
          <li className="nav-item">
            <Link to="/home" defaultChecked className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/events" className="nav-link">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Sign In
            </Link>
          </li>
        </Header>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="home" element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route
            path="login"
            element={
              <LoginPage
                toggleAuthenticationFlag={toggleAuthenticationFlag}
                setUser={setUser}
              />
            }
          />
          <Route path="register" element={<RegistrationContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
