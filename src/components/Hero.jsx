import heroImg from "../assets/home/kids play.webp";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section
      name="home"
      className="bg-gradient-to-br from-sky-100 to-purple-100 md:min-h-screen relative overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-green-200 rounded-full opacity-20 animate-float mix-blend-multiply"></div>
      <div className="absolute top-1/3 -right-20 w-48 h-48 bg-purple-200 rounded-full opacity-20 animate-float-delay mix-blend-multiply"></div>

      <div className="container mx-auto px-4 py-16 md:py-0 md:min-h-screen flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2 text-center md:text-left space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in-up">
            Welcome to KidAdemy!
          </h1>
          <p className="text-lg md:max-w-[70%] md:text-xl text-slate-600 animate-fade-in-up delay-100">
            Where Learning Meets Fun! Explore Games, Books, Cartoons & More!
          </p>
          <Link
            to="feature"
            smooth
            duration={1000}
            className="bg-green-400 cursor-pointer hover:bg-green-500 text-white px-8 py-3 rounded-full text-lg shadow-lg transition-all transform hover:scale-105 animate-fade-in-up delay-200"
          >
            Start Learning!
          </Link>
        </div>

        <div className="md:w-1/2 relative">
          <div className="bg-gradient-to-br cursor-pointer from-sky-200 to-purple-200 w-full h-96 md:h-[500px] rounded-3xl shadow-2xl overflow-hidden">
            <img className="w-full h-full" src={heroImg} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}
