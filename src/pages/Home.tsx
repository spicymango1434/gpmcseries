import { Calendar, Trophy, Users, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const { isDark } = useTheme();
  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const cardBgClass = isDark ? 'bg-gray-800' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const mutedTextClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderClass = isDark ? 'border-pink-500/20' : 'border-pink-200';
  const borderHoverClass = isDark ? 'hover:border-pink-500/50' : 'hover:border-pink-400';

  return (
    <div className={`min-h-screen ${bgClass}`}>
      <section className="relative bg-gradient-to-br from-pink-600 via-blue-600 to-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Gentoo Penguin Math Organization
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Inspiring mathematical excellence through challenging competitions and collaborative problem solving
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/past-tests"
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                View Past Tests
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 px-4 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`${cardBgClass} p-6 rounded-lg border ${borderClass} ${borderHoverClass} transition-colors`}>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="text-white" size={24} />
              </div>
              <h3 className={`text-xl font-semibold ${textClass} mb-2`}>Competitions</h3>
              <p className={mutedTextClass}>
                Challenging math competitions designed to test problem-solving skills and mathematical thinking
              </p>
            </div>

            <div className={`${cardBgClass} p-6 rounded-lg border ${isDark ? 'border-blue-500/20' : 'border-blue-200'} ${isDark ? 'hover:border-blue-500/50' : 'hover:border-blue-400'} transition-colors`}>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className={`text-xl font-semibold ${textClass} mb-2`}>Community</h3>
              <p className={mutedTextClass}>
                Join a vibrant community of math enthusiasts and competitors from around the world
              </p>
            </div>

<div className={`${cardBgClass} p-6 rounded-lg border ${isDark ? 'border-blue-500/20' : 'border-blue-200'} ${isDark ? 'hover:border-blue-500/50' : 'hover:border-blue-400'} transition-colors`}>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className={`text-xl font-semibold ${textClass} mb-2`}>Events</h3>
              <p className={mutedTextClass}>
                Regular competitions and events throughout the year for all skill levels
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 px-4 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              Why Participate?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-500 mb-3">300+</div>
              <div className={`text-xl ${textClass} mb-2`}>Participants</div>
              <p className={mutedTextClass}>Students competing annually</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-3">300+</div>
              <div className={`text-xl ${textClass} mb-2`}>Schools</div>
              <p className={mutedTextClass}>Educational institutions involved</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-500 mb-3">1+</div>
              <div className={`text-xl ${textClass} mb-2`}>Years</div>
              <p className={mutedTextClass}>Of mathematical excellence</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 px-4 ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold ${textClass} mb-6`}>
            Ready to Challenge Yourself?
          </h2>
          <p className={`text-xl ${mutedTextClass} mb-8`}>
            Join the Gentoo Penguin Math Organization and discover the joy of mathematical problem solving
          </p>
          <Link
            to="/past-tests"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
