import { useTheme } from '../context/ThemeContext';

export default function Writers() {
  const { isDark } = useTheme();
  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const cardBgClass = isDark ? 'bg-gray-800' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const mutedTextClass = isDark ? 'text-gray-400' : 'text-gray-600';

  const teamMembers = [
    {
      name: 'mathkiddus',
      bio: 'A passionate mathematician dedicated to creating challenging problems that inspire critical thinking. Brings creativity and innovation to every competition.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Inferno2332',
      bio: 'Expert in mathematical pedagogy with a focus on making complex concepts accessible. Leads the development of educational resources for all skill levels.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Kempu33334',
      bio: 'Strategic problem solver and competition organizer. Ensures every event runs smoothly while maintaining the highest standards of mathematical rigor.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'NamelyOrange',
      bio: 'Creative thinker who brings fresh perspectives to competition design. Passionate about engaging students and fostering a love for mathematics.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'lele0305',
      bio: 'Community builder focused on creating an inclusive environment for all mathematicians. Works tirelessly to support student growth and achievement.',
      image: 'https://images.pexels.com/photos/1181270/pexels-photo-1181270.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <div className={`min-h-screen ${bgClass}`}>
      <section className="bg-gradient-to-br from-pink-600 to-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-100">
            The passionate mathematicians and educators behind GPMO
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="mb-6 flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-pink-500"
                  />
                </div>
                <h3 className={`text-2xl font-bold ${textClass} mb-3`}>
                  {member.name}
                </h3>
                <p className={`${mutedTextClass} text-sm leading-relaxed`}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
