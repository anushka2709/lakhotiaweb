import { MessageCircle, MapPin, Menu } from "lucide-react";

export default function Index() {
  return (
    <div className="bg-amber-50 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-slate-900 border-b border-orange-500/30 flex items-stretch">
        <a href="#" className="flex items-center gap-3 px-6 border-r border-white/10 min-w-max cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-orange-500 rounded-sm flex items-center justify-center font-serif text-lg font-bold text-white">
            L
          </div>
          <div className="flex flex-col leading-tight">
            <strong className="text-xs font-bold uppercase tracking-wide text-white">Lakhotia Group</strong>
            <span className="text-xs text-white/40 uppercase tracking-widest">Industrial Complex</span>
          </div>
        </a>

        <ul className="hidden md:flex items-stretch list-none flex-1 justify-center">
          {["Home", "The Project", "Site Gallery", "Knowledge Centre", "Contact"].map((item) => (
            <li key={item}>
              <a href="#" className="flex items-center px-5 text-xs font-bold uppercase tracking-widest text-white/50 border-b-4 border-transparent hover:text-white/85 hover:border-orange-500 transition-colors cursor-pointer">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2 px-4 border-l border-white/10 ml-auto">
          <button className="px-4 h-10 text-xs font-bold uppercase tracking-wide text-white/75 border border-white/30 rounded hover:bg-white/10 hover:text-white transition-all cursor-pointer">
            Free Consultation
          </button>
          <button className="px-4 h-10 text-xs font-bold uppercase tracking-wide bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors cursor-pointer">
            Book Site Visit
          </button>
        </div>

        <button className="md:hidden flex items-center justify-center w-12 h-16 ml-auto cursor-pointer">
          <Menu className="text-white" size={24} />
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="w-screen h-screen mt-16 relative overflow-hidden bg-gradient-to-b from-amber-50 to-white">
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F0dbc69b068b64c00b4c07d347b4c29ef%2F5f491e66f5b5422d8d4bd4ee9e803483?format=webp&width=1200&height=1600"
            alt="Lakhotia Industrial Complex"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-50/95 from-0% via-amber-50/75 via-40% to-amber-50/15 to-100%"></div>

        <div className="relative h-full flex items-center pl-8 sm:pl-16 md:pl-20 max-w-2xl">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/35 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Now Open for Early-Stage Enquiries</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-black leading-tight text-slate-900 mb-2">
              Viksit Bengal
            </h1>

            <span className="font-serif text-lg sm:text-2xl md:text-4xl font-normal italic block mb-6" style={{ color: "rgb(204, 85, 20)" }}>
              Dawn of a new Industrial Era.
            </span>

            <p className="text-sm sm:text-base text-slate-700 max-w-md leading-relaxed mb-6">
              Industrial momentum is building on the Ranihati–Amta Road corridor in Howrah. We're developing a new industrial campus to serve emerging manufacturers and logistics operators across the region.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["SME Manufacturing", "Warehousing", "Logistics", "Freehold"].map((tag) => (
                <span key={tag} className="text-xs font-semibold px-3 py-1.5 border border-slate-900/20 text-slate-700 bg-white/60">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center justify-center gap-2 px-6 h-12 bg-orange-500 text-white font-bold text-sm uppercase tracking-wide rounded hover:bg-orange-600 transition-colors cursor-pointer">
                <MessageCircle size={16} /> Free Consultation
              </button>
              <button className="flex items-center justify-center gap-2 px-6 h-12 bg-slate-900 text-white font-bold text-sm uppercase tracking-wide rounded hover:bg-slate-800 transition-colors cursor-pointer">
                <MapPin size={16} /> Book a Site Visit
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-700/60">
          <div className="w-0.5 h-10 bg-orange-500 animate-pulse"></div>
        </div>
      </section>

      {/* Benefits Strip */}
      <div className="bg-orange-500 h-11 flex items-center overflow-hidden">
        <div className="flex gap-6 whitespace-nowrap animate-scroll text-white text-xs font-bold uppercase tracking-widest">
          {["Freehold Ownership", "60 ft Main Roads", "40 ft Internal Roads", "360° Business Solutions", "NH-6 Corridor ~8 km", "Phase 1 Active"].map((benefit, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/50"></span>
              {benefit}
            </div>
          ))}
          {["Freehold Ownership", "60 ft Main Roads", "40 ft Internal Roads", "360° Business Solutions", "NH-6 Corridor ~8 km", "Phase 1 Active"].map((benefit, i) => (
            <div key={`repeat-${i}`} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/50"></span>
              {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Project Section */}
      <section id="project" className="bg-amber-50/50 border-t border-amber-900/20 py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">The Eastern India Opportunity</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-900">
                Bengal is ready. <em className="italic text-orange-500">Are you?</em>
              </h2>
              <div className="h-1 w-9 bg-orange-500 mb-6"></div>

              <p className="text-base leading-relaxed text-slate-700 mb-6">
                Industrial momentum is building across Eastern India. Manufacturing footprints are expanding, logistics networks are being redrawn, and supply chains are shifting eastward.
              </p>

              <p className="text-sm leading-relaxed text-slate-600 mb-12">
                Major investment is flowing into FMCG, packaging, engineering, pharma, and logistics. Infrastructure is expanding. The time to establish your footprint in the region is now.
              </p>

              <div className="grid grid-cols-3 gap-0.5 bg-slate-900/10 p-0.5">
                {[
                  { value: "41.8M", label: "Sq ft industrial stock, Kolkata belt" },
                  { value: "~8 km", label: "From NH-6, primary freight corridor" },
                  { value: "360°", label: "Support — from plot to production" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6">
                    <div className="font-serif text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-xs text-slate-600 mt-3">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div>
              <div className="space-y-0 bg-slate-900/10 p-0.5 mb-8">
                {[
                  { title: "Industrial momentum building", desc: "A new wave of manufacturing is moving eastward, especially in logistics, FMCG, and light engineering.", icon: "⚡" },
                  { title: "Logistics and warehousing surge", desc: "E-commerce, FMCG consolidation, and pharma distribution are driving demand for modern warehouse space.", icon: "🚚" },
                  { title: "SME sector expansion", desc: "Smaller manufacturers are moving out of congested areas and into organized industrial parks.", icon: "🏭" },
                  { title: "Corridor connectivity advantage", desc: "Proximity to NH-6, rail, and port access makes Howrah a strategic logistics hub.", icon: "💡" },
                ].map((feature, i) => (
                  <div key={i} className="bg-white p-6 flex gap-4 border-b border-slate-900/10 last:border-b-0">
                    <div className="w-11 h-11 flex-shrink-0 bg-orange-100 border border-orange-500/20 flex items-center justify-center text-orange-600 text-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs leading-relaxed text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-gradient-to-br from-orange-50 to-orange-100/50 border-l-4 border-orange-500">
                <p className="font-serif text-xl italic leading-relaxed text-slate-900 mb-3">
                  "The eastern region is moving faster than people expect. If you're planning an industrial footprint in India, you need to be here now."
                </p>
                <div className="text-xs text-slate-600">
                  <strong className="text-slate-900">Aditya Lakhotia</strong> · Founder, Lakhotia Group
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="gallery" className="bg-white border-t border-slate-900/10 py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Industries Growing in Bengal</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6 text-slate-900">
              What's moving here. <em className="italic text-orange-500">What could move you.</em>
            </h2>
            <p className="text-base leading-relaxed text-slate-700 max-w-2xl">
              A wide range of industries are actively expanding operations in the region. Find yours and explore how Lakhotia Industrial Complex can support your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-slate-900/10 p-0.5 mb-8">
            {[
              { title: "FMCG & Consumer Goods", desc: "Fast-moving consumer goods manufacturing and distribution" },
              { title: "Plastics & Packaging", desc: "Plastic extrusion and packaging solutions" },
              { title: "Light Engineering", desc: "Small-scale engineering and fabrication" },
              { title: "Pharmaceuticals", desc: "Pharma manufacturing and API production" },
              { title: "Logistics & 3PL", desc: "Warehousing and third-party logistics" },
              { title: "Agro-Processing", desc: "Agricultural product processing" },
              { title: "Electrical & Electronics", desc: "Electronics assembly and manufacturing" },
              { title: "Textiles & Garments", desc: "Textile manufacturing and garment production" },
            ].map((industry, i) => (
              <div key={i} className="bg-white p-6 hover:shadow-lg hover:border-t-4 hover:border-orange-500 transition-all cursor-default">
                <h4 className="font-semibold text-slate-900 mb-2 text-sm">{industry.title}</h4>
                <p className="text-xs leading-relaxed text-slate-600">{industry.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <h3 className="font-serif text-2xl font-bold text-white max-w-md">
              Not sure which industrial use is right for your business?
            </h3>
            <em className="italic text-orange-50 text-sm">Let's figure it out together.</em>
            <button className="px-6 h-12 bg-white text-orange-600 font-bold text-sm uppercase tracking-wide rounded hover:bg-amber-50 transition-colors cursor-pointer whitespace-nowrap">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Knowledge Section */}
      <section id="knowledge" className="bg-orange-50 border-t border-orange-900/20 py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">What Makes Us Different</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-900">
              Not just land. <em className="italic text-orange-500">360° of everything you need.</em>
            </h2>
            <p className="text-base leading-relaxed text-slate-700 max-w-2xl">
              Most industrial parks sell you a plot and leave you to figure out the rest. We support you at every stage — from choosing the right plot size to navigating approvals, connecting with technical partners, and managing utilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-orange-500/20 p-0.5">
            {[
              { num: "01", title: "Customised Plot Solutions", desc: "Plots from 1 bigha to 6+ bigha; customized to your footprint needs.", label: "1–6+ Bigha" },
              { num: "02", title: "Free Business Advisory", desc: "Determine your ideal plot size and next steps. No consulting fees.", label: "No charge" },
              { num: "03", title: "Technical Consultancy", desc: "Connect with technical specialists and build-out partners post-purchase.", label: "Post-purchase" },
              { num: "04", title: "Liaison & Approval Support", desc: "We manage approvals, licenses, utilities connections, and regulatory requirements.", label: "End-to-end" },
              { num: "05", title: "State-of-the-Art Infrastructure", desc: "Planned 60 ft main roads, 40 ft internal roads, drainage, power, and water.", label: "Phase 1" },
              { num: "06", title: "Complete Ecosystem", desc: "Phase 2: Fuel station, EV charging, canteen, weighbridge, ATM, medical access.", label: "Planned" },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 hover:border-t-4 hover:border-orange-500 hover:shadow-lg transition-all cursor-default">
                <div className="font-serif text-5xl font-black text-orange-500 opacity-15 mb-4 leading-none">{feature.num}</div>
                <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-sm leading-relaxed text-slate-600 mb-4">{feature.desc}</p>
                <span className="text-xs font-bold uppercase tracking-wide text-orange-600 border-b-2 border-orange-600">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plot Options Section */}
      <section className="bg-amber-50 border-t border-amber-900/20 py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Plot Options</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-900">
              Find the footprint your operation needs.
            </h2>
            <div className="h-1 w-9 bg-orange-500 mb-6"></div>
            <p className="text-base leading-relaxed text-slate-700">
              Choose from our range of plot sizes designed to fit different industrial operations — from single-unit SME workshops to large-scale manufacturing and logistics hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-slate-900/10 p-0.5 mb-12">
            {[
              { title: "Standard Industrial", size: "1–3", unit: "Bigha", bullets: ["SME factory unit", "Fabrication workshop", "Packaging production", "Light engineering"] },
              { title: "Large Industrial", size: "3–6", unit: "Bigha", bullets: ["Warehouse & distribution", "Large manufacturing", "3PL logistics", "Multi-bay operations"], featured: true },
              { title: "Corner Plot", size: "2–4", unit: "Bigha", bullets: ["High-visibility factory", "Dual road frontage", "Showroom + production"] },
              { title: "Custom / Combined", size: "6+", unit: "Bigha on request", bullets: ["Campus-style development", "Multi-unit complex", "Large-scale manufacturing"] },
            ].map((plot, i) => (
              <div
                key={i}
                className={`bg-white p-6 relative transition-all hover:border-t-4 hover:border-orange-500 ${plot.featured ? "shadow-lg border-t-4 border-orange-500" : ""}`}
              >
                {plot.featured && (
                  <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Most Requested
                  </div>
                )}
                <div className="text-xs font-bold uppercase tracking-wide text-orange-600 mb-3">{plot.title}</div>
                <div className="font-serif text-5xl font-black text-slate-900 leading-none">{plot.size}</div>
                <div className="text-xs text-slate-600 mt-1 mb-4">{plot.unit}</div>
                <div className="border-t border-slate-200 pt-4 space-y-2">
                  {plot.bullets.map((bullet, j) => (
                    <div key={j} className="text-xs text-slate-700">› {bullet}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-slate-700 mb-6">
              Not sure what size you need? Book a free consultation with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 h-12 bg-orange-500 text-white font-bold text-sm uppercase tracking-wide rounded hover:bg-orange-600 transition-colors cursor-pointer">
                Free Consultation
              </button>
              <button className="px-6 h-12 border-2 border-orange-500 text-orange-600 font-bold text-sm uppercase tracking-wide rounded hover:bg-orange-500 hover:text-white transition-colors cursor-pointer">
                Request Plot Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-amber-50/50 border-t border-amber-900/20 py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Lakhotia Group</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-900">
                Who we are and what we're<em className="italic text-orange-500"> building.</em>
              </h2>
              <div className="h-1 w-9 bg-orange-500 mb-6"></div>

              <p className="text-base leading-relaxed text-slate-700 mb-6">
                Lakhotia Group was incorporated in 2017 with a mission to create an organized, professionally managed industrial campus in Howrah, serving manufacturers and logistics operators across Eastern India.
              </p>

              <p className="text-sm leading-relaxed text-slate-600 mb-6">
                Our approach is to plan properly, build in phases based on market feedback, be honest about readiness, and support our residents through every step of their journey.
              </p>

              <p className="text-xs text-slate-600 font-semibold">
                <strong>Lakhotia Industrial Complex</strong> is a registered company in Howrah, West Bengal.<br />
                <strong>CIN: U68200WB2017PTC219104</strong><br />
                Project site is in active <strong>Phase 1 development</strong>.
              </p>

              <div className="grid grid-cols-2 gap-0.5 bg-slate-900/10 p-0.5 mt-12">
                {[
                  { value: "2017", label: "Incorporated · Howrah, WB" },
                  { value: "Ph.1", label: "Active development now" },
                  { value: "360°", label: "End-to-end buyer support" },
                  { value: "Free", label: "Industrial consultation" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6">
                    <div className="font-serif text-2xl font-bold text-orange-600">{stat.value}</div>
                    <div className="text-xs text-slate-600 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-900/20 aspect-square rounded-sm flex items-center justify-center">
              <div className="text-center">
                <div className="text-amber-900/30 mb-4 text-6xl">🏭</div>
                <p className="text-sm text-amber-900/40">Lakhotia Industrial Complex</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-white border-t border-slate-900/10 py-24">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Location & Connectivity</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-900">
                Strategically placed.<em className="italic text-orange-500"> Right in the corridor.</em>
              </h2>
              <div className="h-1 w-9 bg-orange-500 mb-6"></div>

              <p className="text-base leading-relaxed text-slate-700 mb-8">
                Located on the Ranihati–Amta Road in Howrah, Lakhotia Industrial Complex sits at the heart of a rapidly emerging industrial and logistics corridor. Our location provides direct access to national freight corridors, Kolkata Metro rail connectivity, and the port.
              </p>

              <div className="space-y-0 bg-slate-900/10 p-0.5">
                {[
                  { title: "NH-6", km: "~8", min: "~15", icon: "🛣️" },
                  { title: "NH-16", km: "~12", min: "~20", icon: "🛣️" },
                  { title: "Howrah Railway Station", km: "~18", min: "~35", icon: "🚂" },
                  { title: "Kolkata Port Trust", km: "~22", min: "~40", icon: "⚓" },
                  { title: "Uluberia Hub", km: "~6", min: "~12", icon: "📍" },
                ].map((location, i) => (
                  <div key={i} className="bg-white p-4 flex items-center gap-4 border-b border-slate-900/10 last:border-b-0">
                    <div className="w-10 h-10 flex-shrink-0 bg-orange-100 border border-orange-500/20 flex items-center justify-center text-orange-600 text-lg">
                      {location.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 text-sm">{location.title}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-serif font-bold text-orange-600">{location.km} km</div>
                      <div className="text-xs text-slate-600">{location.min} min</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="rounded-sm overflow-hidden mb-4 shadow-lg aspect-square bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.0246532546246!2d88.13049632346046!3d22.590306979999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02e7b5b5b5b5b5%3A0x5a5a5a5a5a5a5a5a!2sRanihati-Amta%20Road%2C%20Howrah!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lakhotia Industrial Complex Location"
                ></iframe>
              </div>

              <div className="bg-amber-50 border-l-4 border-orange-500 p-4">
                <p className="text-sm font-semibold text-slate-900">Lakhotia Industrial Complex</p>
                <p className="text-xs text-slate-700 leading-relaxed mt-2">
                  Ranihati–Amta Road,<br />
                  Mouza Jalabishwanathpur,<br />
                  Howrah, West Bengal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-white/5"></div>

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-white/80">Take the Next Step</span>

          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-4 text-white">
            Start with a conversation.<em className="italic text-amber-100"> Not a commitment.</em>
          </h2>

          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12">
            Visit our site, talk to our team, review the documents, bring your advisor. We want you to make an informed decision. And we're here to answer every question.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            {[
              { title: "Book a Free Consultation", desc: "Tell us about your industry, space requirements, and plot type preference.", btn: "Start Here" },
              { title: "Book a Site Visit", desc: "Come see our construction progress: filling, boundary wall, and infrastructure development.", btn: "Schedule a Visit" },
            ].map((card, i) => (
              <div key={i} className="bg-white/15 backdrop-blur-sm p-8 rounded text-left">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-sm text-white/80 mb-6">{card.desc}</p>
                <button className="w-full px-6 h-12 bg-white text-orange-600 font-bold text-sm uppercase tracking-wide rounded hover:bg-amber-50 transition-colors cursor-pointer">
                  {card.btn}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-orange-500 rounded flex items-center justify-center font-serif font-bold text-white text-sm">
                  L
                </div>
                <span className="font-bold text-white text-sm uppercase tracking-wide">Lakhotia Group</span>
              </div>
              <p className="text-xs text-white/40 leading-relaxed">
                An organised industrial campus serving manufacturers, logistics operators, and supply chain businesses. Located on Ranihati–Amta Road, Howrah, West Bengal.
              </p>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">Navigate</h5>
              <ul className="space-y-2 text-xs text-white/40">
                {["Home", "The Project", "Site Gallery", "Knowledge Centre", "Contact"].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">Contact</h5>
              <ul className="space-y-2 text-xs text-white/40">
                <li><a href="tel:+919836000000" className="hover:text-white transition-colors">+91 98360 XXXXX</a></li>
                <li><a href="mailto:info@lakhotia.in" className="hover:text-white transition-colors">info@lakhotia.in</a></li>
                <li><a href="#" className="hover:text-white transition-colors">www.lakhotia.in</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-4">Site Address</h5>
              <p className="text-xs text-white/40 leading-relaxed">
                Lakhotia Industrial Complex<br />
                Ranihati–Amta Road<br />
                Mouza Jalabishwanathpur<br />
                Howrah, West Bengal
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between gap-4">
            <p className="text-xs text-white/20">© 2026 Lakhotia Industrial Complex Private Limited · CIN: U68200WB2017PTC219104</p>
            <p className="text-xs text-white/20">Phase 1 development currently active.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
