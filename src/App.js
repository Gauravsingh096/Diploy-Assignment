import './App.css';
import MyNavbar from './components/navbar';
import Footer from './components/footer';
import Layout from './components/Layout';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function AppWrapper() {
  const location = useLocation(); // Get the current route

  // Check if the current path is either '/login' or '/signup' (authentication pages)
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="App">
      {/* Conditionally render the Navbar and Footer only if it's not an auth page */}
      {!isAuthPage && <MyNavbar />}

      <Routes>
        {/* Home page that shows the layout */}
        <Route path="/" element={<Layout />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />

        {/* Signup page */}
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {/* Conditionally render the Footer only if it's not an auth page */}
      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
