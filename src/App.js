import{BrowserRouter,Routes,Route}from "react-router-dom"
import Homepage from './components/pages/Homepage';
import MainNavbar from "./components/commen/MainNavbar"
import Contact from "./components/pages/Contact";
import Diet from "./components/pages/Diet";
import Footer from "./components/commen/Footer";
import About from "./components/pages/About";
import Workout from "./components/pages/Workout"

function App() {
  return (
   <div className="app">
    <MainNavbar/>
     <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/Contact"element={<Contact/>}/>
    <Route path="/Diet"element={<Diet/>}/>
    <Route path="/About"element={<About/>}/>
    <Route path="/Workout"element={<Workout/>}/>
     </Routes>
    </BrowserRouter>
    <Footer/>
  </div>
);
}
export default App;
