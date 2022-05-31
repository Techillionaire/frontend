import './App.css';
import Navbar from './components/navbar/Navbar';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Settings from './pages/settings/Settings';
import SinglePage from './pages/singlePage/SinglePage';
import Write from './pages/write/Write';
import HomePage from './pages/homepage/HomePage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={user ? <HomePage /> : <Register />} />
      <Route path="/login" element={user ? <HomePage /> : <Login />} />
      <Route path="/write" element={user ? <Write /> : <Register />} />
      <Route path="/settings" element={user ? <Settings /> : <Register />} />
      <Route path="/post/:postId" element={<SinglePage />} />
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
