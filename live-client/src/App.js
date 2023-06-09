import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Login from "./components/auth/Login.jsx";
import Home from "./components/Home.jsx";
import Register from "./components/auth/Register.jsx";
import Ad from "./components/item/Ad.jsx";
import AdForm from "./components/item/AdForm.jsx";
import Nav from "./components/config/Nav.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
// Actions
import { loadUser } from "./actions/auth";
// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  // Load user
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ads/:adId" element={<Ad />} />
          <Route path="/postad" element={<AdForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
