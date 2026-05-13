export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-10 inline-block">
            <div className="text-6xl md:text-7xl font-bold text-slate-900 mb-2 leading-tight">
              LAKHOTIA
            </div>
            <div className="text-lg md:text-2xl font-semibold text-slate-600 tracking-widest">
              INDUSTRIAL COMPLEX
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
            Building Industrial Excellence
          </h1>
          <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            A state-of-the-art industrial complex designed for modern logistics and manufacturing with world-class infrastructure and sustainable development.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-lg transition-colors inline-block">
            Explore Now
          </button>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Who We Are & What We're Building
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
              The Lakhotia Industrial Complex represents a new standard in industrial development, combining strategic location, modern infrastructure, and sustainable practices to create an ecosystem for business growth.
            </p>
          </div>

          {/* Full-width Image */}
          <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0dbc69b068b64c00b4c07d347b4c29ef%2F5f491e66f5b5422d8d4bd4ee9e803483?format=webp&width=1200&height=1800"
              alt="Lakhotia Industrial Complex Overview"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-16 text-center leading-tight">
            Key Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Wide Roads
              </h3>
              <p className="text-slate-600 leading-relaxed">
                60 FT wide internal roads for seamless logistics and smooth traffic flow
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Power Infrastructure
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Reliable electrical supply with backup systems for uninterrupted operations
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10l-7 6h10V3m5 13v-5h-10v12h7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Drainage & Sewage
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Comprehensive water management systems ensuring sustainable operations
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Premium Facilities
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Hotels, restaurants, and office spaces within the complex premises
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                EV Infrastructure
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Modern electric vehicle charging stations throughout the complex
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Strategic Location
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Connected via highways with easy access to major transportation networks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to Invest in Excellence?
          </h2>
          <p className="text-lg md:text-xl mb-12 text-blue-100 leading-relaxed">
            Join leading industries and logistics companies at Lakhotia Industrial Complex
          </p>
          <button className="bg-white hover:bg-blue-50 text-blue-600 font-semibold py-3 px-10 rounded-lg transition-colors inline-block">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">LAKHOTIA</h3>
              <p className="text-slate-400 leading-relaxed">Industrial excellence meets sustainable growth</p>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Facilities</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Wide Roads</a></li>
                <li><a href="#" className="hover:text-white transition">Power Supply</a></li>
                <li><a href="#" className="hover:text-white transition">EV Charging</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Services</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition">Office Space</a></li>
                <li><a href="#" className="hover:text-white transition">Hotels</a></li>
                <li><a href="#" className="hover:text-white transition">Restaurants</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-5">Contact</h4>
              <p className="text-slate-400 leading-relaxed">
                <span className="block mb-3">Sanginhat Road</span>
                <span className="block">AMTA, West Bengal</span>
              </p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-12 text-center text-slate-400">
            <p>&copy; 2024 Lakhotia Industrial Complex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
