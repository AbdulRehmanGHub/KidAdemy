import { Link } from "react-scroll";
import logo from "../assets/kids1.webp";

const learningLinks = [
  {
    id: 1,
    name: "Activities",
  },
  {
    id: 2,
    name: "Learning",
  },
  {
    id: 3,
    name: "Activities",
  },
  {
    id: 4,
    name: "Pricing",
  },
  {
    id: 5,
    name: "More",
  },
];

const socials = [
  {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png",
    link: "",
  },
  {
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    link: "",
  },
  {
    id: 3,
    img: "https://www.freeiconspng.com/uploads/website-icon-8.png",
    link: "",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-purple-50 pt-8 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center md:text-left">
            <Link
              to="home"
              smooth
              duration={1000}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-500 rounded-full flex items-center justify-center text-white">
                <img src={logo} alt="logo" />
              </div>
              <span className="text-2xl font-bold text-slate-600">
                KidAdemy
              </span>
            </Link>
            <p className="text-slate-600 text-sm max-w-xs mx-auto md:mx-0">
              Making learning magical for curious young minds
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold text-slate-900 mb-4">
              Explore Learning
            </h4>
            <ul className="space-y-2">
              {learningLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    className="text-slate-600 hover:text-slate-800 text-sm transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h4 className="text-lg font-semibold text-slate-900 mb-4">
              Connect With Us
            </h4>
            <div className="flex justify-center space-x-4">
              {socials.map((item) => (
                <div
                  key={item.id}
                  className="md:w-10 md:h-10 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center cursor-pointer"
                >
                  <img
                    className="w-full h-full object-contain"
                    src={item.img}
                    alt="social"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center">
          <span className="text-slate-500 text-sm">
            ©{new Date().getFullYear()} KidAdemy
            <p>
              Crafted with ❤️ by{" "}
              <a target="_blank" href="https://www.techabdul.com/">
                Abdul Rehman
              </a>
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
}
