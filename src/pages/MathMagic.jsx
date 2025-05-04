import { useState } from "react";

export default function MathMagic() {
  const [count, setCount] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(generateQuestion());

  function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    return {
      num1,
      num2,
      operator: "+",
      answer: num1 + num2,
    };
  }

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    if (parseInt(quizAnswer) === currentQuestion.answer) {
      setScore(score + 1);
      setCurrentQuestion(generateQuestion());
      setQuizAnswer("");
    }
  };

  return (
    <section className="min-h-screen bg-sky-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 text-center mb-12">
          Math Magic! ✨
        </h1>

        {/* Counting Game */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Counting Fun
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={() => setCount(Math.max(0, count - 1))}
              className="bg-green-500 cursor-pointer text-white w-12 h-12 rounded-full text-2xl hover:bg-green-600 transition-all"
            >
              -
            </button>
            <div className="text-4xl font-bold text-slate-900 w-20 text-center">
              {count}
            </div>
            <button
              onClick={() => setCount(count + 1)}
              className="bg-green-500 cursor-pointer text-white w-12 h-12 rounded-full text-2xl hover:bg-green-600 transition-all"
            >
              +
            </button>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {Array.from({ length: count }).map((ball, i) => (
              <div
                key={i}
                className="w-8 h-8 bg-yellow-400 rounded-full animate-bounce"
              ></div>
            ))}
          </div>
        </div>

        {/* Math Quiz */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Math Quiz</h2>
          <div className="mb-6 text-3xl font-bold text-slate-900 text-center">
            {currentQuestion.num1} + {currentQuestion.num2} = ?
          </div>
          <form onSubmit={handleQuizSubmit} className="max-w-xs mx-auto">
            <input
              type="number"
              value={quizAnswer}
              onChange={(e) => setQuizAnswer(e.target.value)}
              className="w-full p-3 text-2xl border-2 border-slate-200 rounded-xl mb-4 text-center"
              placeholder="Your answer"
            />
            <button
              type="submit"
              className="w-full cursor-pointer bg-slate-600 text-white py-3 rounded-xl hover:bg-slate-700 transition-all"
            >
              Check Answer
            </button>
          </form>
          <div className="mt-6 text-center text-lg text-slate-900">
            Score: {score} 🏆
          </div>
        </div>

        <h2 className="text-2xl mt-8 font-bold text-slate-900 text-center">
          More Coming Soon...
        </h2>
      </div>
    </section>
  );
}
