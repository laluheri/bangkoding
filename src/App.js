import { Routes, Route, Navigate } from "react-router-dom";
import Navigasi from "./components/Navigasi";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Projects from "./page/Projects";
import "./App.css";
import Login from "./page/Login";
import Landing from "./page/Landing";
import NotFound from "./page/NotFound";
import { useEffect, useState } from "react";
import PrivateRoute from "./router/PrivateRoute";
import Dashboard from "./page/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  const [user, steUser] = useState(localStorage.getItem("auth"));
  const [input, setName] = useState("");
  const handleChange = (e) => setName(e.target.value);
  const handleLogout = () => {
    steUser();
    localStorage.clear();
  };
  const handleLogin = () => {
    steUser({ id: "1", name: input });
    <Navigate replace to="home" />;
  };
  return (
    <>
      {user ? (
        <Dashboard />
      ) : (
        <div>
          <form onSubmit={handleLogin} hidden>
            <label>name</label>
            <input type="text" name="name" id="name" onChange={handleChange} />
            <button>Sign In</button>
          </form>
        </div>
      )}
      <Navbar />
      {/* <Navigasi /> */}
      <Routes>
        <Route index element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="project"
          element={
            <PrivateRoute user={user}>
              <Projects user={user} />
            </PrivateRoute>
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login user={user} />} />
        <Route
          path="dashboard"
          element={
            <PrivateRoute user={user}>
              <Dashboard user={true} />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;
