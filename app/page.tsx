"use client";
import { useState } from "react";
import { useForm } from "@formspree/react";

const projects = [
  {
    title: "Accounts Receivable & Collections",
    description:
      "An interactive Power BI dashboard designed to monitor invoicing, payments, outstanding receivables, collection performance, and customer aging.",
    tools: ["Power BI", "Excel", "DAX"],
    link: "https://github.com/barakasimon374-pn/accounts-receivable-dashboard.",
  },
  {
    title: "Accounts Payable Dashboard",
    description:
      "An interactive Power BI dashboard designed to monitor outstanding invoices, payment status, payable aging, and vendor exposure to support better cash-flow and payment decisions.",
    tools: ["Power BI", "Excel", "DAX"],
    link: "https://github.com/barakasimon374-pn/accounts-payable-powerbi-dashboard",
  },
];


export default function Home() {
const [state, handleSubmit] = useForm("xyeyglbo");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
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
            Featured Projects
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Data Analytics & Business Intelligence
          </h2>

          {/* Accounts Receivable Project */}
          <div className="group mt-10 rounded-2xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">

            <a
  href="https://github.com/barakasimon374-pn/accounts-receivable-dashboard."
  target="_blank"
  rel="noopener noreferrer"
  className="text-2xl font-bold hover:text-cyan-400 transition"
>
  Accounts Receivable & Collections
</a>

            <img
              src="/accounts-receivable-banner.png"
              alt="Accounts Receivable and Collections Dashboard Overview"
              className="mt-6 mb-6 w-full rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10"
            />

            <div className="flex flex-wrap items-start justify-between gap-6">

              <div className="max-w-3xl">

                <a
  href={projects[0].link}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <img
    src="/accounts-receivable-dashboard.png"
    alt="Accounts Receivable Power BI Dashboard"
    className="mt-6 w-full rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10 transition duration-300 hover:scale-[1.01] hover:border-cyan-400"
  />
</a>

                <p className="leading-7 text-slate-300">
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

            <div className="mt-10 grid gap-6 md:grid-cols-3">

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  The Challenge
                </p>

                <h4 className="mt-3 text-xl font-bold">
                  Understanding outstanding receivables
                </h4>

                <p className="mt-4 text-base leading-7 text-slate-400">
  Businesses need a clear view of unpaid invoices, customer
  balances, payment activity, and aging periods in order to
  manage cash flow and improve collection performance.
</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  The Solution
                </p>

                <h4 className="mt-3 text-xl font-bold">
                  An interactive Power BI dashboard
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  I designed a dashboard that brings invoicing, payments,
                  outstanding balances, customer performance, and receivables
                  aging into one clear analytical view.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
  Business Value
</p>

<h4 className="mt-3 text-xl font-bold">
  Supporting better collection decisions
</h4>

<p className="mt-4 text-base leading-7 text-slate-400">
  The dashboard brings receivables, payment activity, customer
  balances, and aging analysis into one view, helping users
  prioritize collections and monitor cash-flow exposure.
</p>
              </div>

            </div>

          </div>

        {/* Accounts Payable Project */}
<div className="group mt-16 rounded-2xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">

  <a
  href="https://github.com/barakasimon374-pn/accounts-payable-powerbi-dashboard"
  target="_blank"
  rel="noopener noreferrer"
  className="text-2xl font-bold hover:text-cyan-400 transition"
>
  Accounts Payable Dashboard
</a>

  <div className="mt-6 flex flex-wrap items-start justify-between gap-6">

    <div className="max-w-3xl">

      <a
  href={projects[1].link}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <img
    src="/accounts-payable-dashboard.png"
    alt="Accounts Payable Power BI Dashboard"
    className="mt-6 w-full rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10 transition duration-300 hover:scale-[1.01] hover:border-cyan-400"
  />
</a>

      <p className="leading-7 text-slate-300">
        {projects[1].description}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {projects[1].tools.map((tool) => (
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
        Payables & Aging
      </p>
    </div>

  </div>

  {/* Key Analysis */}
  <div className="mt-8 grid gap-3 sm:grid-cols-2">

    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
      <p className="text-sm font-semibold text-cyan-400">
        Outstanding Payables
      </p>

      <p className="mt-2 text-sm text-slate-400">
        Monitor unpaid invoices and the total amount currently outstanding.
      </p>
    </div>

    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
      <p className="text-sm font-semibold text-cyan-400">
        Payment Status
      </p>

      <p className="mt-2 text-sm text-slate-400">
        Understand the distribution of paid and unpaid invoices.
      </p>
    </div>

    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
      <p className="text-sm font-semibold text-cyan-400">
        Aging Analysis
      </p>

      <p className="mt-2 text-sm text-slate-400">
        Identify how outstanding payables are distributed across aging periods.
      </p>
    </div>

    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
      <p className="text-sm font-semibold text-cyan-400">
        Vendor Exposure
      </p>

      <p className="mt-2 text-sm text-slate-400">
        Analyze outstanding obligations across vendors.
      </p>
    </div>

  </div>

  {/* AP Case Study */}
  <div className="mt-10 grid gap-6 md:grid-cols-3">

    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        The Challenge
      </p>

      <h4 className="mt-3 text-xl font-bold">
        Understanding outstanding payables
      </h4>

      <p className="mt-4 text-base leading-7 text-slate-400">
        Finance teams need a clear view of outstanding invoices,
        payment obligations, and aging periods to manage cash flow
        and prioritize payments effectively.
      </p>
    </div>

    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
        The Solution
      </p>

      <h4 className="mt-3 text-xl font-bold">
        An interactive Power BI dashboard
      </h4>

      <p className="mt-4 text-base leading-7 text-slate-400">
        I designed an interactive dashboard that brings invoice
        status, outstanding balances, aging analysis, and vendor
        information into one analytical view.
      </p>
    </div>

    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
  Business Value
</p>

<h4 className="mt-3 text-xl font-bold">
  Supporting better payment decisions
</h4>

<p className="mt-4 text-base leading-7 text-slate-400">
  The dashboard brings outstanding payables, payment status, aging,
  and vendor exposure into one view, helping users prioritize
  payment obligations and monitor cash-flow requirements.
</p>
    </div>

  </div>

  {/* Dashboard Features */}
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      "Total Payables",
                      "Outstanding Payables",
                      "Payment Status",
                      "Payables Aging",
                      "Vendor Analysis",
                      "Invoice Monitoring",
                      "Overdue Obligations",
                      "Interactive Slicers",
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
      I combine data analysis, visualization, and business intelligence tools to turn raw data into clear, decision-ready insights.
    </p>

    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
        <h3 className="text-lg font-semibold text-cyan-400">
          Power BI
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Building interactive dashboards, KPI cards, slicers, and business reports that turn data into actionable insights.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
        <h3 className="text-lg font-semibold text-cyan-400">
          DAX
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
         Creating measures and calculations to analyze performance, trends, and business metrics.
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
          Designing clear and meaningful visuals that make business data easier to understand and explore.
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
        <h3 className="text-lg font-semibold text-cyan-400">
          Data Analysis
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">
Analyzing data to identify patterns, trends, and opportunities that support informed decisions.
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

   <form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-4">
  <input
    type="text"
    name="name"
    placeholder="Your name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
  />

  <input
    type="email"
    name="email"
    placeholder="Your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
  />

  <textarea
    name="message"
    placeholder="Your message"
    rows={5}
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white"
  />

  {state.succeeded && (
    <p className="text-green-400">Message sent successfully!</p>
  )}

  {state.errors && (
    <p className="text-red-400">Something went wrong. Please try again.</p>
  )}

  <button
    type="submit"
    disabled={state.submitting}
    className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 disabled:opacity-50"
  >
    {state.submitting ? "Sending..." : "Send Message →"}
  </button>
</form>   
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