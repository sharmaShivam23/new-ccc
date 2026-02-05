import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from "react-router-dom";

import Splash from "./components/Splash";
import { Events } from "./components/Events";
import Home from "./components/Home";
import { TeamCards } from "./components/TeamCards";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { Edevclash } from "./components/Edevclash";
import { Enimbus } from "./components/Enimbus";
import { Techbuzz } from "./components/ETechbuzz";
import { Contact } from "./components/Contact";
import { Ereacticons } from "./components/Ereacticons";
import { ECloud } from "./components/ECloud";
import Register4 from "./components/Register4";
import SuccessPage from "./Resgistration/SuccessPage";

const ProtectedSuccessRoute = ({ children }) => {
  const location = useLocation();
  if (!location.state?.granted) {
    return <Navigate to="/Register" replace />;
  }
  return children;
};

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoaded ? (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/Team" element={<TeamCards />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Register" element={<Register4 />} />
            {/* <Route path="/Register" element={<Register />} /> */}
            <Route path="/Devclash" element={<Edevclash />} />
            <Route path="/Ereacticons" element={<Ereacticons />} />
            <Route path="/ECloud" element={<ECloud />} />
            <Route path="/Nimbus" element={<Enimbus />} />
            <Route path="/Techbuzz" element={<Techbuzz />} />
            
            <Route 
              path="/success" 
              element={
                <ProtectedSuccessRoute>
                  <SuccessPage />
                </ProtectedSuccessRoute>
              } 
            />
          </Routes>
          <Footer />
        </>
      ) : (
        <Splash />
      )}
    </Router>
  );
};

export default App;

// const RouteWithTitle = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === "/Register") {
//       document.title = "404 not found";
//     } else {
//       document.title = "Cloud Computing Cell - AKGEC";
//     }
//   }, [location]);

//   return null;
// };

// export default App;
// export default App;