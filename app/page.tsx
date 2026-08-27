const projects = [
  {
    title: "Accounts Receivable & Collections",
    description:
      "An interactive Power BI dashboard designed to monitor invoicing, payments, outstanding receivables, collection performance, and customer aging.",
    tools: ["Power BI", "Excel", "DAX"],
  },
];

export default function Home() {
  return (
   <main className="min-h-screen scroll-smooth bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-xl font-bold">Baraka</div>

          <div className="flex flex-wrap justify-end gap-3 text-sm text-slate-300 sm:gap-6">
            <a href="#about" className="hover:text-white">
              About
            </a>

            <a href="#projects" className="hover:text-white">
              Projects
            </a>

            <a href="#skills" className="hover:text-white">
              Skills
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[75vh] max-w-6xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Data Analyst Portfolio
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Turning data into
            <span className="block text-cyan-400">
              clear business insights.
            </span>
          </h1>
<p className="mt-4 text-sm font-medium tracking-wide text-cyan-400">
  Data Analyst <span className="text-slate-600">|</span> Power BI <span className="text-slate-600">|</span> Excel <span className="text-slate-600">|</span> Data Visualization
</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I build interactive dashboards and analytical solutions that help
            businesses understand performance, identify trends, and make better
            decisions.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
  href="#projects"
  className="group rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
>
  <span>View My Projects</span>
  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>

            <a
  href="#contact"
  className="group rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
>
  <span>Get In Touch</span>
  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>
          </div>
        </div>
      </section>

     {/* About */}
<section id="about" className="border-t border-slate-800">
  <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
    <div>
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        About Me
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Analytical thinking. Visual storytelling.
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-300">
        I am building my skills in data analysis, business intelligence, and
        data visualization. I enjoy transforming raw data into clear,
        interactive dashboards that help people understand performance and
        make informed decisions.
      </p>

      <p className="mt-4 leading-7 text-slate-400">
        My focus is on creating practical analytical solutions using tools
        such as Power BI, DAX, and Microsoft Excel.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-3xl font-bold text-cyan-400">01</p>
        <p className="mt-2 font-semibold">Analyze</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Explore data to identify patterns and trends.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-3xl font-bold text-cyan-400">02</p>
        <p className="mt-2 font-semibold">Visualize</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Turn complex data into clear visual stories.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-3xl font-bold text-cyan-400">03</p>
        <p className="mt-2 font-semibold">Inform</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Create insights that support better decisions.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-3xl font-bold text-cyan-400">04</p>
        <p className="mt-2 font-semibold">Improve</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Focus on practical solutions and continuous learning.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Projects */}
      <section id="projects" className="bg-slate-900/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Featured Project
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Accounts Receivable & Collections Dashboard
          </h2>

        <div className="group mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">
           <img
  src="/accounts-receivable-banner.png"
  alt="Accounts Receivable and Collections Dashboard Overview"
 className="mb-6 w-full rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10 transition duration-300 hover:scale-[1.02] hover:shadow-cyan-500/20"
/>
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-3xl">
                <img
                  src="/accounts-receivable-dashboard.png"
                  alt="Accounts Receivable & Collections Power BI Dashboard"
                  className="mb-6 w-full rounded-xl border border-slate-700"
                />

                <h3 className="text-2xl font-bold">
                  {projects[0].title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {projects[0].description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {projects[0].tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4">
                <p className="text-sm text-slate-400">
                  Dashboard focus
                </p>

                <p className="mt-1 font-semibold">
                  Receivables & Collections
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm font-semibold text-cyan-400">
                  Outstanding Balances
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Which customers have the highest outstanding receivables?
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm font-semibold text-cyan-400">
                  Collection Performance
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  How effectively are outstanding invoices being collected?
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm font-semibold text-cyan-400">
                  Aging Analysis
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  How are receivables distributed across aging periods?
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm font-semibold text-cyan-400">
                  Payment Trends
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  How do invoicing and payment patterns change over time?
                </p>
              </div>
            </div>
{/* Project Case Study */}
<div className="mt-10 grid gap-6 md:grid-cols-3">
  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
    <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
      The Challenge
    </p>

    <h3 className="mt-3 text-xl font-bold">
      Understanding outstanding receivables
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-400">
      Businesses need a clear view of unpaid invoices, customer balances,
      payment activity, and aging periods in order to manage cash flow and
      improve collection performance.
    </p>
  </div>

  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
    <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
      The Solution
    </p>

    <h3 className="mt-3 text-xl font-bold">
      An interactive Power BI dashboard
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-400">
      I designed a dashboard that brings invoicing, payments, outstanding
      balances, customer performance, and receivables aging into one clear
      analytical view.
    </p>
  </div>

  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
    <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
      Key Insights
    </p>

    <h3 className="mt-3 text-xl font-bold">
      Supporting better decisions
    </h3>

    <p className="mt-4 text-sm leading-7 text-slate-400">
      The dashboard helps identify customers with high outstanding balances,
      monitor collection performance, analyze aging patterns, and track
      invoicing and payment trends over time.
    </p>
  </div>
</div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Total Invoiced",
                "Payments Received",
                "Outstanding Receivables",
                "Collection Rate",
                "Invoice Trend",
                "Receivables by Customer",
                "Payments by Method",
                "Receivables Aging",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-4"
                >
                  <p className="text-sm text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
<section id="skills" className="border-t border-slate-800">
  <div className="mx-auto max-w-6xl px-6 py-20">
    <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
      Skills
    </p>

    <h2 className="mt-3 text-3xl font-bold">
      Skills & Expertise
    </h2>

    <p className="mt-4 max-w-2xl text-slate-300">
      I use data analysis and visualization to transform raw information into clear insights and interactive business reports.
    </p>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
        <h3 className="text-lg font-semibold text-cyan-400">
          Power BI
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
         Building interactive dashboards that turn business data into actionable insights.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
        <h3 className="text-lg font-semibold text-cyan-400">
          DAX
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
         Creating measures and calculations to analyze performance and support decision-making.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
        <h3 className="text-lg font-semibold text-cyan-400">
          Microsoft Excel
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Organizing, analyzing, and preparing data for reporting and business analysis.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
        <h3 className="text-lg font-semibold text-cyan-400">
          Data Visualization
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Transforming complex data into clear, meaningful, and easy-to-understand visuals.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
        <h3 className="text-lg font-semibold text-cyan-400">
          Data Analysis
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          <p className="mt-2 text-sm leading-6 text-slate-400">
  Analyzing data to uncover patterns, trends, and actionable insights that support informed business decisions.
</p>
        </p>
      </div>
    </div>
  </div>
</section>

     {/* Contact */}
<section id="contact" className="border-t border-slate-800">
  <div className="mx-auto max-w-6xl px-6 py-20">
    <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
      Contact
    </p>

    <h2 className="mt-3 text-3xl font-bold">
      Let&apos;s connect.
    </h2>

    <p className="mt-4 max-w-xl text-slate-300">
      I'm open to opportunities in data analysis and business intelligence, where I can transform data into meaningful insights that support better decision-making.
    </p>

    <div className="mt-8">
      <a
  href="mailto:simonngota3@gmail.com"
  className="inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
>
  Get in Touch →
</a>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">
          © 2026 Baraka Ngota. All rights reserved.
        </div>
      </footer>
    </main>
  );
}