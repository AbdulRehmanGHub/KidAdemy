import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Artiverse from "./Interactions/Artiverse";
import PuzzleGame from "./Interactions/PuzzleZone";
import StoryTime from "./Interactions/StoryTime";

export default function InteractiveActivities() {
  const activities = [
    {
      title: "Puzzle Zone",
      description: "Brain-teasing challenges that spark thinking",
      icon: "🧩",
      component: <PuzzleGame />,
      containerStyles: "bg-gradient-to-br from-purple-100 to-blue-100",
      link: "#",
      premium: false,
    },
    {
      title: "Story Time",
      description: "Interactive animated books with magical tales",
      icon: "📖",
      component: <StoryTime />,
      containerStyles: "bg-gradient-to-br from-green-100 to-orange-100",
      link: "pricing",
      premium: true,
    },
    {
      title: "Artiverse",
      description: "Digital art & creative expression hub",
      icon: "🎨",
      component: <Artiverse />,
      containerStyles: "bg-gradient-to-br from-yellow-100 to-green-100",
      link: "pricing",
      premium: true,
    },
  ];

  return (
    <section
      name="activities"
      className="pt-8 pb-12 bg-gradient-to-br from-slate-50 to-green-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-green-200 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
          🎪 Interactive Learning Zones
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((act, idx) => {
            const cardContent = (
              <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 relative">
                <div
                  className={`${act.containerStyles} w-full h-52 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden`}
                >
                  <span className="text-8xl animate-float">{act.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="bg-gray-100 p-2 rounded-lg">{act.icon}</span>
                  {act.title}
                </h3>
                <p className="text-slate-600 mb-6">{act.description}</p>
                <div className="py-3 px-2 bg-slate-50 rounded-xl">
                  {act.component}
                </div>
              </div>
            );

            return act.premium ? (
              <ScrollLink
                key={idx}
                to={act.link}
                smooth
                duration={1000}
                className="block relative"
              >
                <span className="absolute top-4 right-4 z-50 bg-slate-700 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Premium
                </span>
                {cardContent}
              </ScrollLink>
            ) : (
              <RouterLink key={idx} to={act.link} className="block relative">
                {cardContent}
              </RouterLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
