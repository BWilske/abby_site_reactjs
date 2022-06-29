import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import GalleryDirectory from "./components/pages/GalleryDirectory";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GalleryProvider } from "./context/gallery/GalleryContext";

function App() {
  return (
    <div className="App min-w-min flex flex-col h-screen justify-between">
      <GalleryProvider>
        <Router>
          <Header />
          {/* <div className="mb-auto"> */}
          <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery_directory" element={<GalleryDirectory />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* </div> */}
          <Footer />
        </Router>
      </GalleryProvider>
    </div>
  );
}

export default App;
