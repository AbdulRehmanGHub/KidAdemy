export default function FeaturesGrid() {
  const features = [
    {
      title: "Educational Games",
      icon: "🎮",
      bg: "bg-purple-100",
      desc: "Fun games that teach math, science & logic",
    },
    {
      title: "Animated Stories",
      icon: "📚",
      bg: "bg-sky-100",
      desc: "Interactive books with animated characters",
    },
    {
      title: "Cartoon World",
      icon: "🎬",
      bg: "bg-green-100",
      desc: "Safe & educational cartoon series",
    },
    {
      title: "Language Learning",
      icon: "🌍",
      bg: "bg-teal-100",
      desc: "Learn new languages through play",
    },
    {
      title: "Creative Arts",
      icon: "🎨",
      bg: "bg-amber-100",
      desc: "Drawing, music, and craft activities",
    },
    {
      title: "Math Challenges",
      icon: "🧩",
      bg: "bg-emerald-100",
      desc: "Brain-boosting math games for all ages",
    },
  ];

  return (
    <section name="feature" className="pt-8 pb-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          KidAdemy is all about
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} p-6 rounded-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-lg mt-8 text-slate-900">
          Much more interesting features...
        </p>
      </div>
    </section>
  );
}
