import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-sky-100 to-purple-100 relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Oops - 404 Page Not Found!
            </h1>

            <Link
              to="/"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl"
            >
              👈 Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoPage;
