import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-black shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              GPMO
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-pink-400'
                  : 'text-gray-300 hover:text-pink-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about')
                  ? 'text-pink-400'
                  : 'text-gray-300 hover:text-pink-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/past-tests"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/past-tests')
                  ? 'text-pink-400'
                  : 'text-gray-300 hover:text-pink-400'
              }`}
            >
              Past Tests
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-pink-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/')
                  ? 'text-pink-400 bg-gray-800'
                  : 'text-gray-300 hover:text-pink-400 hover:bg-gray-800'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about')
                  ? 'text-pink-400 bg-gray-800'
                  : 'text-gray-300 hover:text-pink-400 hover:bg-gray-800'
              }`}
            >
              About
            </Link>
            <Link
              to="/past-tests"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/past-tests')
                  ? 'text-pink-400 bg-gray-800'
                  : 'text-gray-300 hover:text-pink-400 hover:bg-gray-800'
              }`}
            >
              Past Tests
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
