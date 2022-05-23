import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Manage from "./pages/Manage";
import Checking from "./pages/Cheking";
import ViewAll from "./pages/Viewall";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Confirm from "./pages/Confirm";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Unauthorized from "./pages/Unauthorized";
import Activation from "./pages/Activation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/cheking" element={<Checking />} />
        <Route path="/viewall" element={<ViewAll />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/activation" element={<Activation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
