import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import PastTests from './pages/PastTests';
import Login from './pages/Login';
import TakeTest from './pages/TakeTest';

function AppContent() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/past-tests" element={<PastTests />} />
        <Route path="/login" element={<Login />} />
        <Route path="/take-test/:testId" element={<TakeTest />} />
      </Routes>
      <footer className="bg-black py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Gentoo Penguin Math Organization. All rights reserved.
          </p>
        </div>
      </footer>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
