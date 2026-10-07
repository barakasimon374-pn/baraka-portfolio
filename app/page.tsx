"use client";
import { useState } from "react";
import { useForm } from "@formspree/react";

const projects = [
  {
    title: "Accounts Receivable & Collections",
    description:
      "An interactive Power BI dashboard designed to monitor invoicing, payments, outstanding receivables, collection performance, and customer aging.",
    tools: ["Power BI", "Excel", "DAX"],
    link: "https://github.com/barakasimon374-pn/accounts-receivable-dashboard",
  },
  {
    title: "Accounts Payable Dashboard",
    description:
      "An interactive Power BI dashboard designed to monitor outstanding invoices, payment status, payable aging, and vendor exposure to support better cash-flow and payment decisions.",
    tools: ["Power BI", "Excel", "DAX"],
    link: "https://github.com/barakasimon374-pn/accounts-payable-powerbi-dashboard",
  },
  {
    title: "Departmental Performance Dashboard",
    description:
      "An interactive Power BI dashboard designed to evaluate departmental financial performance, budget utilization, employee productivity, and operational efficiency.",
    tools: ["Power BI", "Excel", "DAX"],
    link: "https://github.com/barakasimon374-pn/departmental-performance-dashboard",
  },
  
  {
  title: "Excel Order Page & CRM Automation",
  description:
    "A web-based Excel order upload page that validates sales-order files and launches an automated CRM workflow for product selection, inventory allocation, order posting, payment processing, and Excel reporting.",
  tools: ["Python", "FastAPI", "Playwright", "Excel"],
  link: "https://github.com/barakasimon374-pn/crm-order-automation",
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
  href="https://github.com/barakasimon374-pn/accounts-receivable-dashboard"
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

<a
  href="https://github.com/barakasimon374-pn/accounts-receivable-dashboard"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
>
  View on GitHub
</a>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4">
                <p className="text-sm text-slate-400">
                  Dashboard focus
                </p>

                <p className="mt-1 font-semibold">
                  Receivables & Collections
                </p>
              </div>
{/* Key Analysis */}
<div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

  <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-5">
    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
      Financial Performance
    </p>
    <h4 className="mt-2 font-semibold">
      Revenue vs Target
    </h4>
    <p className="mt-2 text-sm leading-6 text-slate-400">
      Compares departmental revenue against targets to identify
      departments exceeding expectations and areas requiring attention.
    </p>
  </div>

  <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-5">
    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
      Budget Management
    </p>
    <h4 className="mt-2 font-semibold">
      Budget vs Actual Expenses
    </h4>
    <p className="mt-2 text-sm leading-6 text-slate-400">
      Highlights spending patterns across departments and helps identify
      potential budget overruns or areas of efficient resource utilization.
    </p>
  </div>

  <div className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-5">
    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
      Employee Performance
    </p>
    <h4 className="mt-2 font-semibold">
      Productivity & Performance
    </h4>
    <p className="mt-2 text-sm leading-6 text-slate-400">
      Evaluates employee performance across departments using performance
      scores, completed tasks, and overall performance trends.
    </p>
  </div>

</div>
<div className="mt-3 rounded-xl border border-slate-800 bg-slate-900 px-5 py-5">
  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
    Business Value
  </p>

  <p className="mt-2 text-sm leading-6 text-slate-400">
    Provides management with a consolidated view of financial and workforce
    performance, supporting better budgeting, resource allocation, and
    departmental decision-making.
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
<a
  href="https://github.com/barakasimon374-pn/accounts-payable-powerbi-dashboard"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
>
  View on GitHub
</a>
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
        {/* Departmental Performance Dashboard */}
        <div className="mt-16 group rounded-2xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg">

          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
  Featured Project
</p>

<h3 className="mt-2 text-2xl font-bold">
  Departmental Performance Dashboard
</h3>

          <div className="mt-6 flex flex-col gap-6">

            <div>
              <a
                href="https://github.com/barakasimon374-pn/departmental-performance-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="/departmental-performance-dashboard.png"
                  alt="Departmental Performance Power BI Dashboard"
                  className="w-full rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10 transition duration-300 hover:scale-[1.01] hover:border-cyan-400"
                />
              </a>
            </div>

            <div className="max-w-3xl">

              <p className="leading-7 text-slate-300">
                An interactive Power BI dashboard designed to evaluate
                departmental financial performance, budget utilization,
                employee productivity, and operational efficiency.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Power BI", "Excel", "DAX"].map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/barakasimon374-pn/departmental-performance-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                View on GitHub
              </a>

            </div>

          </div>

          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 px-5 py-4">
            <p className="text-sm text-slate-400">
              Dashboard focus
            </p>

            <p className="mt-1 font-semibold">
              Departmental Financial & Employee Performance
            </p>
          </div>
          {/* The Challenge */}
<div className="mt-10 grid gap-6 md:grid-cols-2">

  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
    <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
      The Challenge
    </p>

    <h4 className="mt-3 text-xl font-bold">
      Turning departmental data into actionable insights
    </h4>
    <p className="mt-4 text-base leading-7 text-slate-400">
      Management needed a clear view of departmental revenue, budgets,
      expenses, and employee performance. Data was difficult to compare
      across departments, making it challenging to identify performance
      gaps, budget variances, and areas requiring attention.
    </p>
  </div>

  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
    <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
      The Solution
    </p>

    <h4 className="mt-3 text-xl font-bold">
      An interactive departmental performance dashboard
    </h4>

    <p className="mt-4 text-base leading-7 text-slate-400">
      I developed an interactive Power BI dashboard that consolidates
      departmental financial and workforce data into one analytical view.
      The dashboard enables users to compare revenue against targets,
      evaluate budget performance, and monitor employee productivity and
      performance ratings.
    </p>
  </div>

</div>
          {/* Key Analysis */}
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Key Analysis
            </p>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <p className="font-semibold">
                  Revenue vs Target
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Compares departmental revenue against targets to identify
                  departments exceeding expectations and areas requiring attention.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <p className="font-semibold">
                  Budget vs Actual
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Highlights spending patterns across departments and identifies
                  potential budget overruns or efficient resource utilization.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <p className="font-semibold">
                  Employee Performance
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Evaluates employee performance across departments using
                  performance scores and overall productivity trends.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <p className="font-semibold">
                  Performance Ratings
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Examines the distribution of employee performance ratings
                  to provide a broader view of workforce effectiveness.
                </p>
              </div>

            </div>
          </div>
         {/* Business Value */}
    <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
        Business Value
      </p>

      <p className="mt-2 text-base leading-7 text-slate-300">
        Provides management with a consolidated view of financial and
        workforce performance, supporting better budgeting, resource
        allocation, and departmental decision-making.
      </p>
    </div> 
        </div>

          {/* CRM Order Automation Project */}
          <div className="group mt-16 rounded-2xl border border-slate-800 bg-slate-950 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20">

            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Featured Project
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Excel Order Upload &amp; CRM Automation
            </h3>

            <div className="mt-6 flex flex-col gap-6">
              <a
                href={projects[3].link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src="/crm-order-automation.png"
                  alt="CRM Order Automation Dashboard"
                  className="w-full rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10 transition duration-300 hover:scale-[1.01] hover:border-cyan-400"
                />
              </a>
            </div>

            <div className="mt-6 max-w-3xl">
              <p className="leading-7 text-slate-300">
                {projects[3].description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {projects[3].tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href={projects[3].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
              >
                View on GitHub
              </a>
            </div>

            <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 px-5 py-4">
              <p className="text-sm text-slate-400">Project focus</p>
              <p className="mt-1 font-semibold">
                Workflow Automation &amp; Reporting
              </p>
            </div>

            {/* Key Analysis */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm font-semibold text-cyan-400">
                  Order Validation
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Validates Excel sales-order files before any CRM interaction, catching errors early.
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm font-semibold text-cyan-400">
                  Inventory Allocation
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Checks live CRM warehouse inventory and allocates available stock across order lines.
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm font-semibold text-cyan-400">
                  Automated CRM Posting
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Drives product selection, quantity setting, pricing, and payment submission end-to-end.
                </p>
              </div>

              <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                <p className="text-sm font-semibold text-cyan-400">
                  Posting Report
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Generates a colour-coded Excel posting report with inventory status for every order line.
                </p>
              </div>
            </div>

            {/* Case Study */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  The Challenge
                </p>
                <h4 className="mt-3 text-xl font-bold">
                  Manual CRM order entry was slow and error-prone
                </h4>
                <p className="mt-4 text-base leading-7 text-slate-400">
                  Sales orders arrived as Excel files that had to be keyed
                  into the CRM one line at a time, with no automated inventory
                  check or structured posting record.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  The Solution
                </p>
                <h4 className="mt-3 text-xl font-bold">
                  A fully automated upload and posting pipeline
                </h4>
                <p className="mt-4 text-base leading-7 text-slate-400">
                  I built a web-based upload page paired with a Playwright
                  automation script that reads each order line, searches the
                  CRM, checks inventory, sets prices, and posts payments
                  without manual intervention.
                </p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  Business Value
                </p>
                <h4 className="mt-3 text-xl font-bold">
                  Faster order processing with a full audit trail
                </h4>
                <p className="mt-4 text-base leading-7 text-slate-400">
                  Orders that previously took hours to enter manually are now
                  processed automatically. Every run produces a colour-coded
                  Excel report showing inventory status and allocated quantities
                  for each line.
                </p>
              </div>
            </div>

            {/* Feature tags */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Excel Order Upload",
                "Live Inventory Check",
                "Automated CRM Entry",
                "Payment Processing",
                "Posting Report",
                "Zero-Inventory Handling",
                "Paired Product Logic",
                "Multi-Order Batch Run",
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

            </section>

      {/* Skills */}
<section id="skills" className="border-t border-slate-800">
  
 <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
    <h3 className="text-lg font-semibold text-cyan-400">
      Power BI
    </h3>
    <p className="mt-2 text-sm leading-6 text-slate-400">
      Building interactive dashboards, KPI reports, slicers, and business intelligence solutions for decision-making.
    </p>
  </div>

  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
    <h3 className="text-lg font-semibold text-cyan-400">
      DAX
    </h3>
    <p className="mt-2 text-sm leading-6 text-slate-400">
      Creating calculated measures, KPIs, and analytical calculations to evaluate performance, trends, and business metrics.
    </p>
  </div>

  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
    <h3 className="text-lg font-semibold text-cyan-400">
      Microsoft Excel
    </h3>
    <p className="mt-2 text-sm leading-6 text-slate-400">
      Cleaning, organizing, analyzing, and preparing structured data for reporting and business analysis.
    </p>
  </div>

  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
    <h3 className="text-lg font-semibold text-cyan-400">
      Data Analysis
    </h3>
    <p className="mt-2 text-sm leading-6 text-slate-400">
      Analyzing data to identify patterns, trends, performance gaps, and opportunities that support informed decisions.
    </p>
  </div>

  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
    <h3 className="text-lg font-semibold text-cyan-400">
      Data Visualization
    </h3>
    <p className="mt-2 text-sm leading-6 text-slate-400">
      Designing clear and meaningful visualizations that communicate complex business data effectively.
    </p>
  </div>

  <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400">
    <h3 className="text-lg font-semibold text-cyan-400">
      Business Intelligence
    </h3>
    <p className="mt-2 text-sm leading-6 text-slate-400">
      Transforming raw business data into actionable insights for financial reporting, performance monitoring, and decision-making.
    </p>
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

<div className="mt-6 flex flex-wrap gap-4">
  <a
    href="https://github.com/barakasimon374-pn"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-400"
  >
    GitHub
  </a>
</div>

<form onSubmit={handleSubmit} className="mt-8 max-w-xl space-y-4"></form>
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