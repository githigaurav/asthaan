import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Property from "./pages/Property";
import Why from "./pages/Why";
import Footer from "./pages/Footer";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Profile from "./pages/Profile";
import {AuthRoutes} from "./routes/PrivateRoutes";
import NoInternet from "./utils/NoInternet";
import Dashboard from "./pages/Dashboard";
import AddProperty from "./pages/AddProperty";
import Test from "./pages/Test";

const App = () => {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // just a cleaner function
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };

  }, []);

  if (!online) {
    return <NoInternet/>
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeComp />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/test" element={<Test/>}/>

          <Route element={<AuthRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/addproperty" element={<AddProperty/>}/>

          </Route>

        </Routes>
      </Router>
    </>
  );
};

export default App;

const HomeComp = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Property />
      <Why />
      <Footer />
    </>
  );
};
