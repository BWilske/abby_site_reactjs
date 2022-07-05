import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import GalleryDirectory from "./components/pages/GalleryDirectory";
import Baby from "./components/pages/gallery/Baby";
import Family from "./components/pages/gallery/Family";
import Senior from "./components/pages/gallery/Senior";
import Wedding from "./components/pages/gallery/Wedding";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GalleryProvider } from "./context/gallery/GalleryContext";

function App() {
  return (
    <div className="App min-w-min flex flex-col h-screen justify-between bg-test h-100vh w-100vw bg-opacity-50">
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
            <Route path="/gallery/wedding" element={<Wedding />}></Route>
            <Route path="/gallery/senior" element={<Senior />}></Route>
            <Route path="/gallery/baby" element={<Baby />}></Route>
            <Route path="/gallery/family" element={<Family />}></Route>
          </Routes>
          {/* </div> */}
          <Footer />
        </Router>
      </GalleryProvider>
    </div>
  );
}

export default App;
