import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { Navbar } from "./components/Navbar";
import Contact from "./pages/Contact";
import Course from "./pages/Course";
import Homepage from "./pages/Homepage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ParallaxProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ParallaxProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
