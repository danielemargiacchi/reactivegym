import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import Home from "./routes/Home";
import Bookings from "./routes/Bookings";
import './App.css';
import Book from "./routes/Book";
import Equipment from "./routes/Equipment";
import Login from "./routes/Login";
import Registration from "./routes/Registration";
import Account from "./routes/Account";
import MyBookings from "./routes/MyBookings";
import { AuthProvider } from "./context/AuthProvider";

const App = () => {

  return <AuthProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} ></Route>
      <Route path="/equipment/:id" element={<Equipment />} ></Route>
      <Route path="/equipment/:id/book" element={<Book />} ></Route>
      <Route path="/bookings" element={<Bookings />} ></Route>
      <Route path="/login/:firstaccess?" element={<Login />} ></Route>
      <Route path="/registration" element={<Registration />} ></Route>
      <Route path="/account/:username" element={<Account/>} ></Route>
      <Route path="/account/:username/bookings" element={<MyBookings/>} ></Route>
      <Route path={"*"} element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
  </AuthProvider>
}
export default App;