import { useState } from "react";

export default function LanguageFun() {
  const [activeTab, setActiveTab] = useState("english");
  const [storyIndex, setStoryIndex] = useState(0);

  const stories = [
    {
      title: "The Friendly Lion",
      content: "Once upon a time, a kind lion made friends with rabbits...",
      urdu: "ایک دفعہ کا ذکر ہے، ایک مہربان شیر نے خرگوشوں سے دوستی کی...",
    },
    {
      title: "The Magic Pencil",
      content:
        "A pencil that could draw real things appeared in Sara's room...",
      urdu: "ایک جادو والی پینسل سارہ کے کمرے میں ظاہر ہوئی جو حقیقی چیزیں بنا سکتی تھی...",
    },
  ];

  const flashcards = [
    { english: "Hello", urdu: "سلام", emoji: "👋" },
    { english: "Book", urdu: "کتاب", emoji: "📖" },
    { english: "Friend", urdu: "دوست", emoji: "👫" },
  ];

  return (
    <section name="language-fun" className="min-h-screen bg-zinc-50 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-8">
          Language Fun! 🌍
        </h1>
        <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto">
          <p className="text-lg text-zinc-800 mb-4">
            Learn English, Urdu, and more through stories and games!
          </p>
          <p className="text-xl text-zinc-900 font-semibold" dir="rtl">
            اردو سیکھیں مزے کے ساتھ!
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mb-12 flex justify-center gap-4">
        <button
          onClick={() => setActiveTab("english")}
          className={`px-6 py-2 rounded-full cursor-pointer ${
            activeTab === "english" ? "bg-zinc-600 text-white" : "bg-zinc-100"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setActiveTab("urdu")}
          className={`px-6 py-2 rounded-full cursor-pointer ${
            activeTab === "urdu" ? "bg-zinc-600 text-white" : "bg-zinc-100"
          }`}
          dir="rtl"
        >
          اردو
        </button>
      </div>

      <div className="max-w-4xl mx-auto mb-16 bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
          {activeTab === "english" ? "Story Time" : "کہانی کا وقت"}
        </h2>

        <div className="mb-8 p-4 bg-zinc-50 rounded-lg min-h-48">
          <p
            className="text-lg text-zinc-800"
            dir={activeTab === "urdu" ? "rtl" : "ltr"}
          >
            {activeTab === "english"
              ? stories[storyIndex].content
              : stories[storyIndex].urdu}
          </p>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setStoryIndex((prev) => (prev > 0 ? prev - 1 : 0))}
            className="bg-zinc-500 text-white cursor-pointer px-6 py-2 rounded-lg hover:bg-zinc-600"
          >
            ← Previous
          </button>
          <button
            onClick={() =>
              setStoryIndex((prev) =>
                prev < stories.length - 1 ? prev + 1 : prev
              )
            }
            className="bg-zinc-500 cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-zinc-600"
          >
            Next →
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">
          Learn Words
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {flashcards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-4 text-center">{card.emoji}</div>
              <div className="text-center space-y-4">
                <p className="text-2xl font-bold text-zinc-900">
                  {card.english}
                </p>
                <p className="text-3xl font-semibold" dir="rtl">
                  {card.urdu}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
