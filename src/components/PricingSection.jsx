export default function PricingSection() {
  return (
    <section
      name="pricing"
      className="pt-8 pb-12 bg-gradient-to-br from-sky-50 to-slate-50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-100 rounded-full opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-12">
          Pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Basic Plan
              </h3>
              <p className="text-slate-600">Perfect for starters</p>
            </div>
            <div className="text-center mb-8">
              <span className="text-4xl font-bold text-slate-900">Free</span>
            </div>
            <ul className="space-y-4 mb-8 text-slate-700">
              <li>Basic games & cartoons</li>
              <li>3 activities/week</li>
              <li>Parental controls</li>
              <li>Progress tracking</li>
            </ul>
            <button className="cursor-pointer w-full bg-slate-100 text-slate-700 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-colors">
              Get Started
            </button>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-gray-600 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-white">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
              <p className="opacity-90">All-inclusive access</p>
            </div>
            <div className="text-center mb-8">
              <span className="text-4xl font-bold">$9.99</span>
              <span className="opacity-80">/month</span>
            </div>
            <ul className="space-y-4 mb-8 opacity-90">
              <li>Access to all features</li>
              <li>Premium games & tutorials</li>
              <li>Exclusive content & learning</li>
              <li>Ad-free experience</li>
            </ul>
            <button className="cursor-pointer w-full bg-white text-green-600 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
              Go Premium
            </button>
          </div>
        </div>

        <p className="text-center text-slate-600 mt-8 text-sm">
          💰 7-day money back • Cancel anytime
        </p>
      </div>
    </section>
  );
}
