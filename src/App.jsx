import React from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About"
import Home from "./Pages/Home"
import Careers from "./Pages/careers"
import Events from "./Pages/Events";
import Products from "./Pages/Products";
import Support from "./Pages/Support";
import NotFound from "./Pages/NotFound";
import See from "./Pages/See";

const App = () => {
  return (
    <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/careers" element={<Careers />}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/support" element={<Support />}/>
          <Route path="/more" element={<See />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>


    </div>
  );
};

export default App;
