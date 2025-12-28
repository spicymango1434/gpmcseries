import { Target, Heart, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <section className="bg-gradient-to-br from-pink-600 to-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About GPMO
          </h1>
          <p className="text-xl text-gray-100">
            Fostering a love for mathematics through competition and collaboration
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 mb-12 border border-pink-500/20">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-300 text-lg mb-4">
              The Gentoo Penguin Math Organization was founded with a simple yet powerful mission: to make advanced mathematics accessible, engaging, and rewarding for students of all backgrounds.
            </p>
            <p className="text-gray-300 text-lg mb-4">
              Named after the resilient and collaborative Gentoo penguin, our organization embodies the spirit of determination, teamwork, and excellence. Just as Gentoo penguins work together to thrive in challenging environments, our participants support each other in tackling complex mathematical problems.
            </p>
            <p className="text-gray-300 text-lg">
              Through our competitions, we aim to inspire the next generation of mathematicians, scientists, and problem solvers who will shape our future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/20">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Our Mission</h3>
              <p className="text-gray-400">
                To challenge and inspire students through rigorous mathematical competitions that develop critical thinking and problem-solving skills.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-pink-500/20">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Our Values</h3>
              <p className="text-gray-400">
                Excellence, integrity, collaboration, and inclusivity guide everything we do, creating a supportive environment for all participants.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-blue-500/20">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Our Vision</h3>
              <p className="text-gray-400">
                A world where every student has the opportunity to discover their mathematical potential and pursue their passion for problem-solving.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-gray-800 rounded-lg p-8 border border-blue-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">What We Offer</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Annual Competitions</h3>
                  <p className="text-gray-300">
                    Multiple competition levels designed for different age groups and skill levels, ensuring everyone can participate and be challenged.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Practice Resources</h3>
                  <p className="text-gray-300">
                    Access to past tests, detailed solutions, and practice problems to help students prepare and improve their skills.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Recognition & Awards</h3>
                  <p className="text-gray-300">
                    Top performers receive certificates, awards, and recognition for their outstanding mathematical achievements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Community Support</h3>
                  <p className="text-gray-300">
                    Connect with fellow math enthusiasts, share strategies, and learn from each other in a supportive community environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
