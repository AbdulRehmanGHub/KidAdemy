import { Link } from "react-scroll";
import globe from "../assets/globe-earth.webp";
import solarsys from "../assets/solar system.webp";

const earthFacts = [
  { label: "Population", value: "8.2B", emoji: "👫" },
  { label: "Countries", value: "200", emoji: "🗺" },
  { label: "Total Area", value: "510M km²", emoji: "🌍" },
  { label: "Continents", value: "07", emoji: "⛰️" },
];

const planets = [
  { name: "Sun", emoji: "☀️" },
  { name: "Mercury", emoji: "🪐" },
  { name: "Venus", emoji: "✨" },
  { name: "Earth", emoji: "🌍" },
  { name: "Mars", emoji: "🔴" },
  { name: "Jupiter", emoji: "🪐" },
];

export default function WorldExplorer() {
  return (
    <section
      name="universe"
      className="pt-8 pb-12 bg-gradient-to-br from-sky-50 to-slate-50 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
          Our Universe 🪐
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all h-full flex flex-col">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-green-100 flex-1">
              <img
                className="w-full h-full object-cover"
                src={globe}
                alt="Earth globe"
              />
            </div>
            <div className="pt-6">
              <h3 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="bg-blue-100 p-2 rounded-xl">🗺️</span>
                Our Planet Earth
              </h3>
              <p className="text-slate-600 mb-6">
                Explore interactive maps showing continents, countries, and
                amazing natural wonders of our beautiful planet.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {earthFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="bg-slate-50 p-3 rounded-lg text-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-xl">{fact.emoji}</span>
                      <p className="font-semibold text-slate-900">
                        {fact.label}
                      </p>
                    </div>
                    <p className="text-blue-600 font-medium">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all h-full flex flex-col">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-slate-100 flex-1">
              <img
                className="w-full h-full object-contain"
                src={solarsys}
                alt="Solar system"
              />
            </div>
            <div className="pt-6">
              <h3 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="bg-purple-100 p-2 rounded-xl">🔭</span>
                Solar System Explorer
              </h3>
              <p className="text-slate-600 mb-6">
                Journey through our cosmic neighborhood - discover planets,
                moons, and fascinating celestial phenomena.
              </p>
              <div className="flex flex-wrap gap-3">
                {planets.map((planet) => (
                  <div
                    key={planet.name}
                    className="bg-slate-50 px-4 py-2 rounded-full flex items-center gap-2"
                  >
                    <span>{planet.emoji}</span>
                    <span className="text-slate-900">{planet.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="pricing"
            smooth
            duration={1000}
            className="bg-slate-600 cursor-pointer hover:bg-slate-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all transform hover:scale-105 relative"
          >
            🚀 Start Space Adventure
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 px-2 rounded-full text-xs font-bold">
              PREMIUM
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
