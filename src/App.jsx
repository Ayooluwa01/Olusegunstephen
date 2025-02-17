import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Skills from "./Pages/Skills";
import Designs from "./Pages/Designs";
import PreloaderImage from "./assets/Preloader/load.gif";
import Projects from "./Pages/Projects";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen w-screen  fixed top-0 left-0 z-50">
          <img src={PreloaderImage} alt="Loading..." className="w-24" />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="designs" element={<Designs />} />
            <Route path="projects" element={<Projects />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
