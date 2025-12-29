import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { Chrome } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const { user, loading, signInWithGoogle } = useAuth();
  const { isDark } = useTheme();

  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const bgClass = isDark ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-black' : 'bg-gradient-to-br from-gray-100 via-blue-100 to-white';
  const cardBgClass = isDark ? 'bg-gray-800' : 'bg-white';
  const borderClass = isDark ? 'border-pink-500/20' : 'border-pink-300/30';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const mutedTextClass = isDark ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`min-h-screen ${bgClass} flex items-center justify-center px-4`}>
      <div className="w-full max-w-md">
        <div className={`${cardBgClass} rounded-lg shadow-2xl p-8 border ${borderClass}`}>
          <div className="text-center mb-8">
            <h1 className={`${textClass} text-4xl font-bold mb-2`}>
              Gentoo Penguin Math Organization
            </h1>
            <p className={mutedTextClass}>Sign in to take tests and compete</p>
          </div>

          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full bg-white hover:bg-gray-100 disabled:bg-gray-300 text-gray-900 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-3 mb-6"
          >
            <Chrome size={20} />
            {loading ? 'Signing in...' : 'Sign in with Google'}
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className={`w-full border-t ${isDark ? 'border-gray-600' : 'border-gray-300'}`}></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-2 ${cardBgClass} ${mutedTextClass}`}>Or continue as guest</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className={`w-full ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'} ${textClass} font-semibold py-3 px-4 rounded-lg transition-colors`}
          >
            Continue as Guest
          </button>

          <p className={`text-center ${mutedTextClass} text-sm mt-6`}>
            Sign in to save your test progress and track scores. Create an account or sign in with your Google account.
          </p>
        </div>
      </div>
    </div>
  );
}
