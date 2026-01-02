import { Download, FileText, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface Test {
  id: string;
  year: number;
  season: string;
  level: string;
  type: string;
  problem_url: string;
  solution_url: string;
}

export default function PastTests() {
  const { isDark } = useTheme();
  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const cardBgClass = isDark ? 'bg-gray-800' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const mutedTextClass = isDark ? 'text-gray-400' : 'text-gray-600';

  const tests: Test[] = [
    {
      id: '1',
      year: 2025,
      season: 'GPMC 10',
      level: 'AMC 10',
      type: 'Individual',
      problem_url: 'https://drive.google.com/file/d/1aOp5JqrBeooOI-7dBfJPoWLKMzVqgnZO/view?usp=sharing',
      solution_url: 'https://drive.google.com/drive/folders/1-IZ6E0SIRLGNyuTsIfRoTdmBAyZGEYNE'
    },
    {
      id: '2',
      year: 2025,
      season: 'GPMC 12',
      level: 'AMC 12',
      type: 'Individual',
      problem_url: 'https://drive.google.com/file/d/1jbY1aj3ieseqwaxJY8jgkLnKQ4qaAu8b/view?usp=sharing',
      solution_url: 'https://drive.google.com/file/d/1B2isLgSH2xyehQRLyGrHlE2cFj6i9LtJ/view?usp=sharing'
    },
  ];

  const groupedTests = tests.reduce((acc, test) => {
    if (!acc[test.year]) {
      acc[test.year] = [];
    }
    acc[test.year].push(test);
    return acc;
  }, {} as Record<number, Test[]>);

  return (
    <div className={`min-h-screen ${bgClass}`}>
      <section className="bg-gradient-to-br from-blue-600 to-pink-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Past Tests
          </h1>
          <p className="text-xl text-gray-100">
            Practice with previous competition problems and solutions
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`${isDark ? 'bg-blue-900/30 border-blue-500/30' : 'bg-blue-100/30 border-blue-300/30'} border rounded-lg p-6 mb-12`}>
            <h2 className={`text-2xl font-semibold ${textClass} mb-3`}>How to Use These Resources</h2>
            <p className={`${mutedTextClass} mb-4`}>
              All past tests are available for download in PDF format. Each test includes both the problem set and detailed solutions. Use these resources to:
            </p>
            <ul className={`list-disc list-inside ${mutedTextClass} space-y-2`}>
              <li>Practice solving competition-level problems</li>
              <li>Understand problem-solving strategies and techniques</li>
              <li>Prepare for upcoming competitions</li>
              <li>Review mathematical concepts in a competitive context</li>
            </ul>
          </div>

          {Object.keys(groupedTests)
            .sort((a, b) => Number(b) - Number(a))
            .map((year) => (
              <div key={year} className="mb-12">
                <h2 className={`text-3xl font-bold ${textClass} mb-6 flex items-center gap-3`}>
                  <Calendar className="text-pink-500" size={32} />
                  {year} Competitions
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {groupedTests[Number(year)].map((test) => (
                    <div
                      key={test.id}
                      className={`${cardBgClass} border ${isDark ? 'border-gray-700 hover:border-pink-500/50' : 'border-gray-300 hover:border-pink-400'} rounded-lg p-6 transition-colors`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className={`text-xl font-semibold ${textClass} mb-2`}>
                            {test.season}
                          </h3>
                          <div className="flex gap-3">
                            <span className={`text-sm px-3 py-1 ${isDark ? 'bg-pink-500/20 text-pink-400' : 'bg-pink-200 text-pink-700'} rounded-full`}>
                              {test.level}
                            </span>
                            <span className={`text-sm px-3 py-1 ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-200 text-blue-700'} rounded-full`}>
                              {test.type}
                            </span>
                          </div>
                        </div>
                        <FileText className={isDark ? 'text-gray-500' : 'text-gray-400'} size={32} />
                      </div>
                      <p className={`${mutedTextClass} mb-4`}>
                        Competition problems and solutions from the {test.season} {test.level} level {test.type.toLowerCase()} round.
                      </p>
                      <div className="flex gap-3">
                        <a
                          href={test.problem_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <Download size={18} />
                          Problems
                        </a>
                        <a
                          href={test.solution_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                          <Download size={18} />
                          Solutions
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          <div className={`bg-gradient-to-br ${isDark ? 'from-pink-900/30 to-blue-900/30 border-pink-500/30' : 'from-pink-100/30 to-blue-100/30 border-pink-300/30'} border rounded-lg p-8 text-center`}>
            <h3 className={`text-2xl font-bold ${textClass} mb-3`}>Looking for More?</h3>
            <p className={`${mutedTextClass} mb-6`}>
              Additional practice problems and resources are being added regularly. Check back often for new materials!
            </p>
            <p className="text-sm text-gray-400">
              For questions about past tests or to report any issues, please contact us at{' '}
              <a href="mailto:gentoopenguin35@gmail.com" className="text-pink-400 hover:text-pink-300">
                gentoopenguin35@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
