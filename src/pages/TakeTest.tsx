import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { supabase } from '../lib/supabase';
import { Clock, AlertCircle, Check } from 'lucide-react';

interface Question {
  id: string;
  question_number: number;
  question_text: string;
  options: string[];
  correct_answer: number;
}

interface TestData {
  id: string;
  title: string;
  duration_minutes: number;
  questions_count: number;
}

export default function TakeTest() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isDark } = useTheme();
  const [test, setTest] = useState<TestData | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchTest = async () => {
      if (!testId) return;

      const { data: testData } = await supabase
        .from('tests')
        .select('*')
        .eq('id', testId)
        .maybeSingle();

      if (testData) {
        setTest(testData);
        setTimeLeft(testData.duration_minutes * 60);

        const { data: questionsData } = await supabase
          .from('test_questions')
          .select('*')
          .eq('test_id', testId)
          .order('question_number');

        if (questionsData) {
          setQuestions(questionsData);
        }
      }
      setLoading(false);
    };

    fetchTest();
  }, [testId, user, navigate]);

  useEffect(() => {
    if (timeLeft <= 0 || !test) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, test]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSelectAnswer = (questionId: string, optionIndex: number) => {
    if (!submitted) {
      setAnswers((prev) => ({
        ...prev,
        [questionId]: optionIndex,
      }));
    }
  };

  const handleSubmit = async () => {
    setSubmitted(true);

    if (!user || !test) return;

    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct_answer) {
        score += 1;
      }
    });

    const { data: attempt } = await supabase
      .from('test_attempts')
      .insert({
        user_id: user.id,
        test_id: test.id,
        answers,
        score,
        status: 'completed',
        end_time: new Date().toISOString(),
      })
      .select()
      .maybeSingle();

    if (attempt) {
      setTimeout(() => {
        navigate('/past-tests');
      }, 2000);
    }
  };

  if (loading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
            Loading test...
          </p>
        </div>
      </div>
    );
  }

  if (!test || questions.length === 0) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}
      >
        <div className="text-center">
          <AlertCircle
            size={48}
            className={`mx-auto mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
          />
          <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
            Test not found
          </p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isTimeRunningOut = timeLeft < 300;
  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-100';
  const cardBgClass = isDark ? 'bg-gray-800' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-gray-900';
  const mutedTextClass = isDark ? 'text-gray-400' : 'text-gray-600';

  if (submitted) {
    return (
      <div className={`min-h-screen ${bgClass} flex items-center justify-center px-4`}>
        <div
          className={`${cardBgClass} rounded-lg shadow-lg p-8 text-center max-w-md`}
        >
          <Check size={48} className="text-green-500 mx-auto mb-4" />
          <h2 className={`${textClass} text-2xl font-bold mb-4`}>
            Test Submitted!
          </h2>
          <p className={`${mutedTextClass} mb-2`}>
            You answered {Object.keys(answers).length} of {questions.length}{' '}
            questions
          </p>
          <p className={`${mutedTextClass}`}>Redirecting to past tests...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${bgClass} py-8 px-4`}>
      <div className="max-w-4xl mx-auto">
        <div
          className={`${cardBgClass} rounded-lg shadow-lg p-6 mb-6 flex items-center justify-between`}
        >
          <h1 className={`${textClass} text-2xl font-bold`}>{test.title}</h1>
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isTimeRunningOut ? 'bg-red-500/20' : 'bg-blue-500/20'}`}
          >
            <Clock
              size={20}
              className={isTimeRunningOut ? 'text-red-500' : 'text-blue-500'}
            />
            <span
              className={`font-bold text-lg ${isTimeRunningOut ? 'text-red-500' : textClass}`}
            >
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <div className={`${cardBgClass} rounded-lg shadow-lg p-8 mb-6`}>
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className={`${textClass} text-xl font-semibold`}>
                Question {currentQuestion.question_number} of {questions.length}
              </h2>
              <div className="w-32 h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pink-500 to-blue-500 transition-all"
                  style={{
                    width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
            <p className={`${textClass} text-lg mb-6`}>
              {currentQuestion.question_text}
            </p>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(currentQuestion.id, index)}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    answers[currentQuestion.id] === index
                      ? 'border-pink-500 bg-pink-500/10'
                      : isDark
                        ? 'border-gray-600 hover:border-gray-500 bg-gray-700'
                        : 'border-gray-300 hover:border-gray-400 bg-gray-50'
                  }`}
                >
                  <span className={`font-medium ${textClass}`}>{option}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
            disabled={currentQuestionIndex === 0}
            className="flex-1 px-6 py-3 bg-gray-500 hover:bg-gray-600 disabled:bg-gray-700 disabled:text-gray-500 text-white rounded-lg font-medium transition-colors"
          >
            Previous
          </button>

          {currentQuestionIndex < questions.length - 1 ? (
            <button
              onClick={() =>
                setCurrentQuestionIndex(Math.min(questions.length - 1, currentQuestionIndex + 1))
              }
              className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex-1 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
            >
              Submit Test
            </button>
          )}
        </div>

        <div className="mt-6 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-10 gap-2">
          {questions.map((q, index) => (
            <button
              key={q.id}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`w-full aspect-square rounded-lg font-bold transition-all ${
                index === currentQuestionIndex
                  ? 'bg-pink-500 text-white scale-105'
                  : answers[q.id] !== undefined
                    ? 'bg-green-500 text-white'
                    : isDark
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
