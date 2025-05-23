import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './views/Login';
import Home from './views/Home';
import About from './views/About';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import './App.css';

function AppLayout() {
  const location = useLocation();
  const showAppBar = location.pathname !== '/login';

  return (
    <div className="app-wrapper">
      {showAppBar && <AppBar />}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
