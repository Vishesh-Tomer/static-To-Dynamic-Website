// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Classes from "./Components/Classes";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Home from "./Components/Home";
import Single from "./Components/Single";
import Teachers from "./Components/Teachers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/classes" exact element={<Classes/>} />
          <Route path="/teachers" element={<Teachers/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/single" element={<Single/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
