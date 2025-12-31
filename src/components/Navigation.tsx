import { Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();

  const isActive = (path: string) => location.pathname === path;
  const bgClass = isDark ? 'bg-gray-900' : 'bg-white';
  const textClass = isDark ? 'text-gray-300' : 'text-gray-700';
  const activeClass = isDark ? 'text-pink-400' : 'text-pink-600';

  return (
    <nav className={`${bgClass} shadow-lg sticky top-0 z-50 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              GPMO
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') ? activeClass : `${textClass} hover:${activeClass}`
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') ? activeClass : `${textClass} hover:${activeClass}`
              }`}
            >
              About
            </Link>
            <Link
              to="/past-tests"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/past-tests') ? activeClass : `${textClass} hover:${activeClass}`
              }`}
            >
              Past Tests
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {user ? (
              <div className="flex items-center gap-4">
                <span className={`text-sm ${textClass}`}>{user.email}</span>
                <button
                  onClick={signOut}
                  className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={textClass}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/')
                  ? `${activeClass} ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`
                  : `${textClass} hover:${activeClass} ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/about')
                  ? `${activeClass} ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`
                  : `${textClass} hover:${activeClass} ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`
              }`}
            >
              About
            </Link>
            <Link
              to="/past-tests"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/past-tests')
                  ? `${activeClass} ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`
                  : `${textClass} hover:${activeClass} ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`
              }`}
            >
              Past Tests
            </Link>
            <div className="px-3 py-4 border-t border-gray-600">
              {user ? (
                <div className="space-y-3">
                  <div className={`text-sm ${textClass}`}>{user.email}</div>
                  <button
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg text-sm font-medium transition-colors text-center"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
