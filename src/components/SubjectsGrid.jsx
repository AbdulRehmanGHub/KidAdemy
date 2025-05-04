import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function SubjectsGrid() {
  const subjects = [
    {
      title: "Math Magic",
      link: "math-magic",
      icon: "🧮",
      color: "bg-green-200",
      desc: "Numbers, shapes, and problem-solving",
      premium: false,
    },
    {
      title: "Language Fun",
      link: "language-fun",
      icon: "📖",
      color: "bg-yellow-200",
      desc: "Reading, writing, and storytelling",
      premium: false,
    },
    {
      title: "Science World",
      link: "pricing",
      icon: "🔬",
      color: "bg-blue-200",
      desc: "Experiments & nature exploration",
      premium: true,
    },
    {
      title: "Art Studio",
      link: "pricing",
      icon: "🎨",
      color: "bg-purple-200",
      desc: "Drawing, coloring, and crafts",
      premium: true,
    },
  ];

  return (
    <section name="learning" className="relative pt-8 pb-12 bg-white overflow-hidden">
      <div className="absolute top-20 -left-20 text-8xl opacity-10 animate-float">
        🌍
      </div>
      <div className="absolute bottom-32 -right-20 text-9xl opacity-10 animate-float-delay">
        📚
      </div>
      <div className="absolute top-1/4 right-1/4 text-7xl opacity-10 animate-bounce">
        🎨
      </div>
      <div className="absolute bottom-0 left-1/2 text-8xl opacity-10 animate-wiggle">
        🔬
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Learning Adventures 🚀
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover exciting worlds of knowledge through play and exploration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subjects.map((subject, idx) => {
            const baseClasses = `${subject.color} p-8 rounded-3xl transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-pointer`;

            if (subject.premium) {
              return (
                <ScrollLink
                  key={idx}
                  to={subject.link}
                  smooth
                  duration={1000}
                  className={`relative ${baseClasses}`}
                >
                  <span className="absolute top-4 right-4 bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Premium
                  </span>
                  <div className="flex items-center space-x-6">
                    <span className="text-6xl transform group-hover:scale-110 transition-transform">
                      {subject.icon}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {subject.title}
                      </h3>
                      <p className="text-slate-600">{subject.desc}</p>
                    </div>
                  </div>
                </ScrollLink>
              );
            }

            return (
              <RouterLink key={idx} to={subject.link} className={baseClasses}>
                <div className="flex items-center space-x-6">
                  <span className="text-6xl transform group-hover:scale-110 transition-transform">
                    {subject.icon}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {subject.title}
                    </h3>
                    <p className="text-slate-600">{subject.desc}</p>
                  </div>
                </div>
              </RouterLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
