import { Download, FileText, Calendar } from 'lucide-react';

interface Test {
  id: string;
  year: number;
  season: string;
  level: string;
  type: string;
}

export default function PastTests() {
  const tests: Test[] = [
    { id: '1', year: 2025, season: 'GPMC 10', level: 'AMC 10', type: 'Individual' },
    { id: '2', year: 2025, season: 'GPMC 12', level: 'AMC 12', type: 'Individual' },
  ];

  const groupedTests = tests.reduce((acc, test) => {
    if (!acc[test.year]) {
      acc[test.year] = [];
    }
    acc[test.year].push(test);
    return acc;
  }, {} as Record<number, Test[]>);

  return (
    <div className="min-h-screen bg-gray-900">
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
          <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-3">How to Use These Resources</h2>
            <p className="text-gray-300 mb-4">
              All past tests are available for download in PDF format. Each test includes both the problem set and detailed solutions. Use these resources to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
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
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <Calendar className="text-pink-500" size={32} />
                  {year} Competitions
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {groupedTests[Number(year)].map((test) => (
                    <div
                      key={test.id}
                      className="bg-gray-800 border border-gray-700 hover:border-pink-500/50 rounded-lg p-6 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {test.season} {test.year}
                          </h3>
                          <div className="flex gap-3">
                            <span className="text-sm px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full">
                              {test.level}
                            </span>
                            <span className="text-sm px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full">
                              {test.type}
                            </span>
                          </div>
                        </div>
                        <FileText className="text-gray-500" size={32} />
                      </div>
                      <p className="text-gray-400 mb-4">
                        Competition problems and solutions from the {test.season} {test.year} {test.level} level {test.type.toLowerCase()} round.
                      </p>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                          <Download size={18} />
                          Problems
                        </button>
                        <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                          <Download size={18} />
                          Solutions
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          <div className="bg-gradient-to-br from-pink-900/30 to-blue-900/30 border border-pink-500/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Looking for More?</h3>
            <p className="text-gray-300 mb-6">
              Additional practice problems and resources are being added regularly. Check back often for new materials!
            </p>
            <p className="text-sm text-gray-400">
              For questions about past tests or to report any issues, please contact us at{' '}
              <a href="mailto:info@gpmo.org" className="text-pink-400 hover:text-pink-300">
                info@gpmo.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
