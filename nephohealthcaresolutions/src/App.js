import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Companyoverview from "./pages/companyoverview";
import Ourservices from "./pages/ourservices";
import Jobopenings from "./pages/jobopenings";
import Login from "./pages/login";
import Contactus from "./pages/contactus";

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company" element={<Companyoverview />} />
        <Route path="/services" element={<Ourservices />} />
        <Route path="/jobs" element={<Jobopenings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contactus />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
