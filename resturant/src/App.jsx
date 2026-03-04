/*import "./App.css";
import LandingPage from "./Components/landingPage/landingPage.jsx";
import {Toaster} from "react-hot-toast";
import Register from "./Components/Auth/Register.jsx";
//import Greeting from"./Components/Greeting.jsx";
//import Nextstep from "./Components/Nextstep.jsx";      
function App() {
 
//<LandingPage /> in return
  return (
    <>
    <Toaster position= "top-center"/>

     <Routes>

<Route path="/" element={<LandingPage />} />
<Route path="/register" element={<Register />} />
<Route path="/View-details" element={<ViewItem />} />


     </Routes>
    </>
  );
}

export default App;
//components based archetecture*/

import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Register from "./Components/Auth/Register.jsx";
import ViewItem from "./Components/Menu/ViewItem.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
function App() {
  return (
    <>
      <Toaster position="top-center" />
      {/* define routes only */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/view-details" element={<ViewItem />} />
      </Routes>
    </>
  );
}

export default App;