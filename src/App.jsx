import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const primaryServices = [
  "All types of online forms",
  "Income, Caste, Residence Certificate",
  "Old age, widow, disability pension",
  "Birth and Death Certificates",
  "Ration Card and Passport Assistance",
  "PAN Card and Aadhaar Correction",
  "Ayushman Card and Insurance Services",
  "Scholarships and Online Applications",
];

const serviceGroups = [
  {
    title: "Documents and Certificates",
    description:
      "Online applications and print assistance for essential government certificates and official documents.",
    items: [
      "Income Certificate",
      "Caste Certificate",
      "Residence Certificate",
      "Birth Certificate",
      "Death Certificate",
    ],
  },
  {
    title: "Government Schemes",
    description:
      "Application support, form review, and status help for welfare and social security schemes.",
    items: [
      "Old Age Pension",
      "Widow Pension",
      "Disability Pension",
      "PM Maandhan Yojana",
      "Scholarship Forms",
    ],
  },
  {
    title: "Card and Identity Services",
    description: "Help with ID cards, health cards, and family benefit cards.",
    items: [
      "PAN Card",
      "Aadhaar Correction",
      "Ayushman Card",
      "Ration Card",
      "Passport Assistance",
    ],
  },
  {
    title: "Bills, Insurance and Digital Help",
    description: "Daily-use online services available at one convenient counter.",
    items: [
      "LIC Premium",
      "Electricity Bill",
      "Crop Insurance",
      "Online Applications",
      "Form Print and Scan",
    ],
  },
];

const highlights = [
  { value: "100+", label: "Popular Services" },
  { value: "Fast", label: "Online Assistance" },
  { value: "CSC", label: "Service Experience" },
  { value: "Easy", label: "Simple Guidance" },
];

const processSteps = [
  {
    title: "Submit Documents",
    text: "Bring the required documents to our center or send them on WhatsApp.",
  },
  {
    title: "Form and Verification",
    text: "We fill out your application and submit it with correct information.",
  },
  {
    title: "Receipt and Updates",
    text: "You receive status updates and the next steps until the work is completed.",
  },
];

const contactInfo = {
  owner: "Amit Vishwakarma",
  phone: "9794972789",
  whatsapp: "919794972789",
  location: "Kaptanganj Road, Pakariyar Bazar, District Kushinagar",
  hours: "9 a.m. to 7 p.m.",
};

function WhatsAppBadge({ label = "WhatsApp" }) {
  return (
    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition hover:scale-105">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2C6.62 2 2.2 6.4 2.2 11.82c0 1.74.45 3.44 1.32 4.95L2 22l5.38-1.49a9.86 9.86 0 0 0 4.65 1.18h.01c5.41 0 9.83-4.4 9.83-9.82a9.74 9.74 0 0 0-2.82-6.96Zm-7.02 15.12h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.19.88.85-3.11-.2-.32a8.14 8.14 0 0 1-1.25-4.34c0-4.5 3.67-8.17 8.2-8.17 2.18 0 4.22.85 5.76 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.68 8.17-8.07 8.17Zm4.48-6.11c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.01-1.25-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.39 1.02 2.55.12.17 1.75 2.67 4.23 3.74.59.25 1.05.4 1.41.51.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.17-.48-.29Z" />
      </svg>
      <span className="sr-only">{label}</span>
    </span>
  );
}

function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/process", label: "Process" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffef9_0%,#f6fbff_48%,#ffffff_100%)] text-brand-ink">
      <header className="sticky top-0 z-30 border-b border-white/40 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-8 lg:px-10">
          <div className="rounded-[28px] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(239,249,255,0.88))] px-5 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:px-7">
            <div className="md:flex md:items-center md:justify-between md:gap-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-coral shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Smart CSC Hub
                  </div>
                  <Link to="/" className="mt-3 block font-display text-2xl text-brand-coral md:text-4xl">
                    Vishwakarma Computers & Travels
                  </Link>
                  <p className="mt-2 max-w-xl text-sm font-medium text-slate-600 md:text-base">
                    Public Service Center | Digital Help Center
                  </p>
                </div>

                <button
                  type="button"
                  onMouseEnter={() => setMobileMenuOpen(true)}
                  onClick={() => setMobileMenuOpen((value) => !value)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm md:hidden"
                  aria-label="Open navigation menu"
                  aria-expanded={mobileMenuOpen}
                >
                  <span className="space-y-1.5">
                    <span className="block h-0.5 w-5 bg-current" />
                    <span className="block h-0.5 w-5 bg-current" />
                    <span className="block h-0.5 w-5 bg-current" />
                  </span>
                </button>
              </div>

              <nav className="mt-4 hidden flex-wrap gap-3 text-sm font-semibold text-slate-700 md:mt-0 md:flex md:justify-end">
                {navItems.map((item) => (
                  <NavPill key={item.to} to={item.to}>
                    {item.label}
                  </NavPill>
                ))}
              </nav>
            </div>

            {mobileMenuOpen ? (
              <div
                className="mt-4 rounded-[24px] border border-slate-200 bg-white p-3 shadow-lg md:hidden"
                onMouseLeave={() => setMobileMenuOpen(false)}
              >
                <nav className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                  {navItems.map((item) => (
                    <MobileNavLink key={item.to} to={item.to} onNavigate={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </MobileNavLink>
                  ))}
                </nav>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-16 bg-brand-ink px-6 py-12 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl text-brand-gold">Vishwakarma Computers & Travels</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              A reliable center for CSC services, online forms, certificates, pensions, card services,
              and bill support.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">Quick Links</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              <Link to="/about">About Us</Link>
              <Link to="/services">All Services</Link>
              <Link to="/process">How We Work</Link>
              <Link to="/contact">Contact Page</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p>Owner: {contactInfo.owner}</p>
              <p>Mobile: {contactInfo.phone}</p>
              <p>Location: {contactInfo.location}</p>
              <p>Timings: {contactInfo.hours}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavPill({ to, children }) {
  return (
    <Link
      to={to}
      className="rounded-full border border-white/70 bg-white/80 px-5 py-2.5 text-[15px] font-semibold shadow-sm transition hover:-translate-y-0.5 hover:border-brand-blue hover:bg-brand-ink hover:text-white"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onNavigate }) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-brand-blue hover:text-brand-blue"
    >
      {children}
    </Link>
  );
}

function HomePage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-grid" />
      <div className="absolute -left-16 top-20 h-40 w-40 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-12 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24">
        <div>
          <span className="inline-flex rounded-full border border-brand-blue/20 bg-white px-4 py-2 text-sm font-semibold text-brand-blue shadow-sm">
            Trusted digital assistance for your nearby CSC service center
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Every essential <span className="text-brand-coral">online service</span> at one counter
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 md:text-lg">
            At Vishwakarma Computers & Travels, form filling, certificates, pensions, ration card,
            PAN card, Ayushman card, and many essential services are available in a simple and reliable way.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="rounded-full bg-brand-coral px-7 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
            >
              View Services
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-blue hover:text-brand-blue"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-3xl border border-white/80 bg-white/80 p-4 shadow-sm backdrop-blur">
                <p className="text-2xl font-extrabold text-brand-blue">{item.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-8 top-6 h-full rounded-[32px] bg-brand-blue/10 blur-2xl" />
          <div className="relative rounded-[36px] border border-white/70 bg-white/90 p-6 shadow-glow backdrop-blur">
            <div className="rounded-[28px] bg-brand-ink p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">CSC Center Services</p>
              <h2 className="mt-3 font-display text-3xl leading-snug">Fast, accurate and reliable online assistance</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                The services available at your center are now presented clearly and professionally on the website.
              </p>
            </div>

            <div className="mt-5 grid gap-3">
              {primaryServices.map((service, index) => (
                <div key={service} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-sky font-bold text-brand-blue">
                    {index + 1}
                  </span>
                  <p className="min-w-0 flex-1 text-sm font-semibold text-slate-700">{service}</p>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(
                      `Hello, I want information about the "${service}" service.`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0"
                    aria-label={`WhatsApp contact for ${service}`}
                    title="Ask on WhatsApp"
                  >
                    <WhatsAppBadge label={`WhatsApp contact for ${service}`} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-coral">About Us</p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl">About Our CSC Center</h1>
          <p className="mt-6 text-base leading-8 text-slate-700">
            Vishwakarma Computers & Travels is a public service center where people from villages and
            small towns get essential digital services with clear guidance and reliable support.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700">
            Documents, government schemes, card services, form filling, bill payment, and application
            support are all available at one place.
          </p>
        </div>

        <div className="rounded-[32px] bg-[linear-gradient(135deg,#eff9ff_0%,#ffffff_100%)] p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">Our Strengths</p>
          <div className="mt-6 grid gap-4">
            {[
              "Easy and clear guidance",
              "Careful document checking",
              "On-time status updates",
              "Multiple services at one center",
            ].map((point) => (
              <div key={point} className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                <p className="font-semibold text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-coral">All Services</p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">Detailed Information for Every Service</h1>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {serviceGroups.map((group, index) => (
          <article
            key={group.title}
            className={`rounded-[30px] p-7 shadow-sm ${
              index % 2 === 0
                ? "border border-sky-100 bg-[linear-gradient(135deg,#ffffff_0%,#eff9ff_100%)]"
                : "border border-amber-100 bg-[linear-gradient(135deg,#fff8ee_0%,#ffffff_100%)]"
            }`}
          >
            <h2 className="font-display text-2xl">{group.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{group.description}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {group.items.map((item) => (
                <div key={item} className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                  <p className="text-sm font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-coral">Process</p>
      <h1 className="mt-4 font-display text-4xl md:text-5xl">How We Work</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {processSteps.map((step, index) => (
          <div key={step.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-coral text-lg font-bold text-white">
              {index + 1}
            </span>
            <h2 className="mt-5 font-display text-2xl">{step.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[32px] bg-[linear-gradient(135deg,#f97316_0%,#fb923c_45%,#fdba74_100%)] p-8 text-white shadow-glow">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-100">Contact</p>
          <h1 className="mt-4 font-display text-4xl">Contact Us</h1>
          <div className="mt-6 space-y-4 text-sm leading-8 md:text-base">
            <p>
              <span className="font-bold">Owner:</span> {contactInfo.owner}
            </p>
            <p>
              <span className="font-bold">Mobile:</span> {contactInfo.phone}
            </p>
            <p>
              <span className="font-bold">Venue:</span> {contactInfo.location}
            </p>
            <p>
              <span className="font-bold">Timings:</span> {contactInfo.hours}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${contactInfo.phone}`} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-coral">
              Call Now
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">Available Help</p>
          <h2 className="mt-4 font-display text-3xl">Services Available Here</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {primaryServices.map((service) => (
              <div key={service} className="rounded-2xl bg-slate-50 px-4 py-4">
                <p className="text-sm font-semibold text-slate-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
