import LeftBar from "./components/LeftBar";
import Login from "./components/Login";
import Register from "./components/Register";
import RightBar from "./components/RightBar";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
//import { useState } from "react";
import Protected from "./components/Protected";
import { AuthContext } from "./components/AuthContext";
import { useContext } from "react";

function App() {
  //const [isSignedIn, setIsSignedIn] = useState(null);

  const { currentUser } = useContext(AuthContext);

  //const isSignedIn = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div className="flex justify-between">
          <LeftBar />
          <Outlet />
          <RightBar />
        </div>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Protected isSignedIn={currentUser}>
              <Layout />
            </Protected>
          }
        >
          <Route index element={<Home />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
