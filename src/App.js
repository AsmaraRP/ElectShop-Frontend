import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Manage from "./pages/Manage";
import Checking from "./pages/Cheking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="manage" element={<Manage />} />
        <Route path="cheking" element={<Checking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
