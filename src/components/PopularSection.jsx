// books
import AliceInWonderland from "../assets/popular/books/Alice in Wonderland.webp";
import JungleBook from "../assets/popular/books/junglebook.webp";
import CharlieAndChocolateFactory from "../assets/popular/books/Charlie and the Chocolate Factory.webp";
import PeterPan from "../assets/popular/books/Peter Pan.webp";
import WinnieThePooh from "../assets/popular/books/Winnie the Pooh.webp";

// cartoons
import Bluey from "../assets/popular/cartoons/Bluey.webp";
import Dora from "../assets/popular/cartoons/Dora the Explorer.webp";
import MickeyMouse from "../assets/popular/cartoons/Mickey Mouse Clubhouse.webp";
import PawPatrol from "../assets/popular/cartoons/Paw Patrol.webp";
import PeppaPig from "../assets/popular/cartoons/Peppa Pig.webp";

export default function PopularSection() {
  const categories = [
    {
      title: "Popular Kids Books",
      items: [
        { title: "The Jungle Book", type: "Adventure", img: JungleBook },
        {
          title: "Alice in Wonderland",
          type: "Fantasy",
          img: AliceInWonderland,
        },
        {
          title: "Charlie and the Chocolate Factory",
          type: "Magic",
          img: CharlieAndChocolateFactory,
        },
        { title: "Winnie the Pooh", type: "Friendship", img: WinnieThePooh },
        { title: "Peter Pan", type: "Adventure", img: PeterPan },
      ],
    },
    {
      title: "Popular Cartoons",
      items: [
        { title: "Peppa Pig", type: "Family Fun", img: PeppaPig },
        { title: "Paw Patrol", type: "Adventure", img: PawPatrol },
        { title: "Dora the Explorer", type: "Educational", img: Dora },
        { title: "Mickey Mouse Clubhouse", type: "Classic", img: MickeyMouse },
        { title: "Bluey", type: "Family Values", img: Bluey },
      ],
    },
  ];

  return (
    <section
      name="PopularSection"
      className="min-h-screen bg-slate-50 pt-8 pb-12 px-4"
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 text-center">
          Kids Popular
        </h2>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 px-4">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4">
                {category.items.map(({ title, type, img }, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="aspect-square w-full bg-slate-100 rounded-lg mb-4 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={img}
                        alt={title}
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      {title}
                    </h4>
                    <p className="text-sm text-slate-500">{type}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-slate-600 cursor-pointer hover:bg-slate-700 text-white px-8 py-3 rounded-full text-lg shadow-lg transition-all">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}
