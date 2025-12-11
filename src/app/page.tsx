export default function Home() {
  const financialLessons = [
    {
      title: "Assets Outpace Liabilities",
      summary:
        "Assets put money in your pocket and liabilities take it out. Build a portfolio that generates cash flow and appreciates over time.",
      bullets: [
        "Track every expense to expose silent liabilities.",
        "Prioritize buying assets that pay you monthly.",
        "Evaluate purchases based on cash-on-cash returns.",
      ],
    },
    {
      title: "Make Money Work for You",
      summary:
        "Leverage systems, businesses, and investments so income is not tied to hours worked. Develop financial IQ to recognize compounding opportunities.",
      bullets: [
        "Reinvest windfalls into scalable vehicles.",
        "Automate savings and investment contributions.",
        "Study tax advantages to keep more of what you earn.",
      ],
    },
    {
      title: "Mindset Shapes Wealth",
      summary:
        "Your beliefs about money dictate decisions. Replace fear-driven choices with curiosity, experimentation, and calculated risk.",
      bullets: [
        "Move from job security to financial freedom thinking.",
        "Treat mistakes as data for refinement, not failure.",
        "Surround yourself with financially fluent peers.",
      ],
    },
  ];

  const mindsetComparison = [
    {
      richDad: "Asks: How can I afford it?",
      poorDad: "Says: I can't afford it.",
    },
    {
      richDad: "Views the house as an expense unless it pays for itself.",
      poorDad: "Treats the house as the primary asset.",
    },
    {
      richDad: "Invests in assets first, then covers luxuries with cash flow.",
      poorDad: "Buys liabilities first and hopes salary rises later.",
    },
    {
      richDad: "Builds or buys systems that scale beyond his time.",
      poorDad: "Trades time for money and fears losing the paycheck.",
    },
    {
      richDad: "Learns accounting, investing, markets, and the law.",
      poorDad: "Specializes in one skill and avoids financial topics.",
    },
  ];

  const actionPlan = [
    {
      step: "Clarify your freedom number",
      detail:
        "Document monthly living costs, then calculate how much passive income would cover them. This target defines what financial freedom means for you.",
    },
    {
      step: "Rework your cash flow statement",
      detail:
        "List income sources, fixed costs, and liabilities. Redirect at least 10% of take-home pay into an asset acquisition fund before discretionary spending.",
    },
    {
      step: "Acquire your first cash-flowing asset",
      detail:
        "Start with a manageable investment—index funds, a micro-business, or income-producing digital product—that can be expanded after validation.",
    },
    {
      step: "Level up financial IQ weekly",
      detail:
        "Schedule a recurring block to read financial statements, study markets, or attend meetups. Apply one insight to your portfolio each month.",
    },
    {
      step: "Build a feedback council",
      detail:
        "Form a small circle of mentors, investors, or entrepreneurial peers who will review deals, offer accountability, and pressure-test your assumptions.",
    },
  ];

  const timeline = [
    {
      year: "1997",
      event: "Original publication. Kiyosaki introduces Rich Dad and Poor Dad archetypes.",
    },
    {
      year: "2000s",
      event: "Global bestseller status. Translated into more than 50 languages; sparks financial literacy movement.",
    },
    {
      year: "2010s",
      event: "Expansion into seminars, Cashflow board games, and Rich Dad Advisors series.",
    },
    {
      year: "Today",
      event: "Remains foundational reading for financial independence communities worldwide.",
    },
  ];

  const cornerstoneConcepts = [
    {
      heading: "The Rat Race",
      text: "Without assets, salary increases often lead to higher taxes and lifestyle inflation, keeping people trapped exchanging time for money.",
    },
    {
      heading: "Financial IQ",
      text: "Blend accounting, investing, market understanding, and taxation knowledge to spot opportunities others miss and protect wealth legally.",
    },
    {
      heading: "Corporations as Shields",
      text: "Rich Dad uses corporate entities to reduce taxes and protect assets, highlighting the legal gap between business owners and employees.",
    },
    {
      heading: "Learning by Doing",
      text: "The quickest path to financial mastery is experimenting in the real world—starting small business ventures, investing, and iterating.",
    },
  ];

  const quotes = [
    {
      line: "The primary difference between a rich person and a poor person is how they manage fear.",
      context: "Fear of losing money keeps many from ever taking calculated risks.",
    },
    {
      line: "It's not how much money you make. It's how much money you keep.",
      context: "Systems and financial literacy safeguard wealth better than higher salaries.",
    },
    {
      line: "Mind your own business. Financial struggle is often the result of people working all their lives for someone else.",
      context: "Build assets that you own outright so your labor compounds for you.",
    },
  ];

  const readingList = [
    {
      title: "Cashflow Quadrant",
      byline: "Robert T. Kiyosaki",
      note: "Explores the employee, self-employed, business, and investor personas introduced in Rich Dad Poor Dad.",
    },
    {
      title: "The Millionaire Next Door",
      byline: "Thomas J. Stanley and William D. Danko",
      note: "Research-backed look at how everyday households quietly accumulate wealth.",
    },
    {
      title: "Your Money or Your Life",
      byline: "Vicki Robin and Joe Dominguez",
      note: "Connects money decisions with life energy, reinforcing the pursuit of financial independence.",
    },
  ];

  return (
    <div className="min-h-screen w-full pb-24">
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-6 pt-16 sm:px-10 md:px-12 lg:px-16">
        <section className="rounded-3xl bg-white/80 p-10 shadow-lg shadow-purple-100/60 backdrop-blur">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-500">
              Book Summary
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Rich Dad Poor Dad
            </h1>
            <p className="text-lg leading-7 text-zinc-600 sm:text-xl">
              Robert T. Kiyosaki contrasts the mindsets of two father figures to
              reveal how wealthy families think about work, money, and freedom.
              This guide distills the core ideas and shows how to apply them in
              a modern context.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-purple-100 bg-purple-50/70 p-4">
                <p className="text-xs font-semibold uppercase text-purple-500">
                  Published
                </p>
                <p className="text-lg font-medium text-zinc-900">1997</p>
              </div>
              <div className="rounded-2xl border border-purple-100 bg-purple-50/70 p-4">
                <p className="text-xs font-semibold uppercase text-purple-500">
                  Focus
                </p>
                <p className="text-lg font-medium text-zinc-900">
                  Financial literacy & mindset
                </p>
              </div>
              <div className="rounded-2xl border border-purple-100 bg-purple-50/70 p-4">
                <p className="text-xs font-semibold uppercase text-purple-500">
                  Reading Time
                </p>
                <p className="text-lg font-medium text-zinc-900">
                  ~6 hours (book) · 10 minutes (summary)
                </p>
              </div>
              <div className="rounded-2xl border border-purple-100 bg-purple-50/70 p-4">
                <p className="text-xs font-semibold uppercase text-purple-500">
                  Why it matters
                </p>
                <p className="text-lg font-medium text-zinc-900">
                  Reframes wealth as a learnable skillset
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl bg-white/80 p-10 shadow-lg shadow-purple-100/60 backdrop-blur md:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold text-zinc-900">
              One-Page Synopsis
            </h2>
            <p className="text-base text-zinc-600">
              Kiyosaki recounts lessons learned from his biological father (the
              well-educated but financially struggling “Poor Dad”) and the
              entrepreneurial father of his best friend (the affluent “Rich Dad”).
              The juxtaposition exposes how conventional schooling trains people
              to become employees, while wealthy families teach their children to
              own assets, leverage businesses, and make money work for them.
            </p>
            <p className="text-base text-zinc-600">
              The heart of the book is a simple wealth equation: acquire assets
              that cash flow, minimize liabilities, and continuously upgrade your
              financial intelligence. Rich Dad urges readers to master accounting,
              investing, markets, and law so they can spot opportunities, shield
              wealth, and exit the rat race faster than those relying on wage
              increases alone.
            </p>
            <p className="text-base text-zinc-600">
              Rather than prescribing a single tactic, the book champions
              experimentation. Start small, learn from failure, and graduate into
              larger plays. Courage, curiosity, and deliberate practice transform
              average earners into financially free architects of their own lives.
            </p>
          </div>
          <aside className="flex flex-col gap-4 rounded-2xl border border-purple-100 bg-gradient-to-b from-purple-50 via-white to-purple-50 p-6">
            <h3 className="text-lg font-semibold text-purple-600">
              Fast Facts
            </h3>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li>
                <strong className="font-semibold text-zinc-900">
                  Genre:
                </strong>{" "}
                Personal finance, wealth mindset
              </li>
              <li>
                <strong className="font-semibold text-zinc-900">Audience:</strong>{" "}
                Aspiring investors, entrepreneurs, financially curious employees
              </li>
              <li>
                <strong className="font-semibold text-zinc-900">Core Message:</strong>{" "}
                Financial freedom is achieved by owning assets, not by earning
                higher wages.
              </li>
              <li>
                <strong className="font-semibold text-zinc-900">Narrative Device:</strong>{" "}
                Two father figures with opposing philosophies about money.
              </li>
            </ul>
          </aside>
        </section>

        <section className="rounded-3xl bg-white/85 p-10 shadow-lg shadow-purple-100/60 backdrop-blur">
          <h2 className="text-2xl font-semibold text-zinc-900">
            The Six Core Lessons
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-zinc-100 p-6 shadow-sm shadow-purple-50/40">
              <h3 className="text-lg font-semibold text-zinc-900">
                1. The rich don&apos;t work for money
              </h3>
              <p className="mt-3 text-sm text-zinc-600">
                Build systems and assets that generate income. Salaries reward
                labor; assets reward ownership and leverage.
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-100 p-6 shadow-sm shadow-purple-50/40">
              <h3 className="text-lg font-semibold text-zinc-900">
                2. Why teach financial literacy?
              </h3>
              <p className="mt-3 text-sm text-zinc-600">
                Understand financial statements, cash flow, and balance sheets so
                you can evaluate opportunities intelligently.
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-100 p-6 shadow-sm shadow-purple-50/40">
              <h3 className="text-lg font-semibold text-zinc-900">
                3. Mind your own business
              </h3>
              <p className="mt-3 text-sm text-zinc-600">
                Keep building assets even if you enjoy your job. Treat your asset
                column as the real business that sustains your future.
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-100 p-6 shadow-sm shadow-purple-50/40">
              <h3 className="text-lg font-semibold text-zinc-900">
                4. The history of taxes and corporations
              </h3>
              <p className="mt-3 text-sm text-zinc-600">
                Use legal entities, tax advantages, and deductions to retain more
                income, just as wealthy individuals do.
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-100 p-6 shadow-sm shadow-purple-50/40">
              <h3 className="text-lg font-semibold text-zinc-900">
                5. The rich invent money
              </h3>
              <p className="mt-3 text-sm text-zinc-600">
                Seek deals, investments, and creative financing rather than
                waiting for perfect opportunities to appear.
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-100 p-6 shadow-sm shadow-purple-50/40">
              <h3 className="text-lg font-semibold text-zinc-900">
                6. Work to learn, don&apos;t work for money
              </h3>
              <p className="mt-3 text-sm text-zinc-600">
                Rotate through roles that strengthen sales, communication,
                leadership, and investing skills so you can run assets
                effectively.
              </p>
            </article>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-white/80 p-10 shadow-lg shadow-purple-100/60 backdrop-blur lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900">
              How Rich Dad Thinks About Money
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              These principles anchor Rich Dad&apos;s philosophy. Study them like
              a playbook and test them against your financial decisions.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {financialLessons.map((lesson) => (
                <article
                  key={lesson.title}
                  className="flex flex-col gap-4 rounded-2xl border border-zinc-100 p-6 shadow-sm shadow-purple-50/50"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">
                      {lesson.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600">{lesson.summary}</p>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    {lesson.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 leading-relaxed"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <aside className="flex flex-col gap-5 rounded-2xl border border-purple-100 bg-gradient-to-b from-white via-purple-50 to-white p-6">
            <h3 className="text-lg font-semibold text-purple-600">
              Transformation Checklist
            </h3>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li>
                Track your net worth monthly and review asset vs. liability mix.
              </li>
              <li>Commit to a side venture that can scale beyond your labor.</li>
              <li>
                Study one new financial instrument each quarter and share the
                insights with peers for accountability.
              </li>
              <li>
                Build a runway: six months of expenses in a high-yield account to
                support calculated risk-taking.
              </li>
              <li>
                Document lessons learned from every investment—win or loss—to
                sharpen instinct.
              </li>
            </ul>
          </aside>
        </section>

        <section className="rounded-3xl bg-white/85 p-10 shadow-lg shadow-purple-100/60 backdrop-blur">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Rich Dad vs. Poor Dad Thinking
          </h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-100">
            <table className="min-w-full divide-y divide-purple-100 text-left text-sm text-zinc-600">
              <thead className="bg-purple-50/70 text-xs uppercase tracking-wide text-purple-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Rich Dad</th>
                  <th className="px-4 py-3 font-semibold">Poor Dad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 bg-white/70">
                {mindsetComparison.map((row) => (
                  <tr key={row.richDad}>
                    <td className="px-4 py-3 font-medium text-zinc-900">
                      {row.richDad}
                    </td>
                    <td className="px-4 py-3">{row.poorDad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl bg-white/80 p-10 shadow-lg shadow-purple-100/60 backdrop-blur md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900">
              From Insight to Action
            </h2>
            <ol className="mt-6 space-y-5">
              {actionPlan.map((item, index) => (
                <li
                  key={item.step}
                  className="rounded-2xl border border-zinc-100 bg-white/90 p-5 shadow-sm shadow-purple-50/50"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-500">
                    Step {index + 1}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-zinc-900">
                    {item.step}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">{item.detail}</p>
                </li>
              ))}
            </ol>
          </div>
          <aside className="flex flex-col gap-4 rounded-2xl border border-purple-100 bg-gradient-to-b from-purple-50 via-white to-purple-50 p-6">
            <h3 className="text-lg font-semibold text-purple-600">
              Cashflow Timeline
            </h3>
            <ul className="space-y-4 text-sm text-zinc-600">
              {timeline.map((entry) => (
                <li key={entry.year} className="flex gap-4">
                  <div className="min-w-[64px] font-semibold text-zinc-900">
                    {entry.year}
                  </div>
                  <p>{entry.event}</p>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="grid gap-8 rounded-3xl bg-white/80 p-10 shadow-lg shadow-purple-100/60 backdrop-blur lg:grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-zinc-900">
              Cornerstone Concepts
            </h2>
            <div className="space-y-5">
              {cornerstoneConcepts.map((concept) => (
                <article
                  key={concept.heading}
                  className="rounded-2xl border border-zinc-100 bg-white/90 p-5 shadow-sm shadow-purple-50/40"
                >
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {concept.heading}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600">{concept.text}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="flex flex-col gap-5 rounded-2xl border border-purple-100 bg-gradient-to-b from-white via-purple-50 to-white p-6">
            <h3 className="text-lg font-semibold text-purple-600">
              Quotable Insights
            </h3>
            <ul className="space-y-4 text-sm text-zinc-600">
              {quotes.map((quote) => (
                <li
                  key={quote.line}
                  className="rounded-2xl border border-zinc-100 bg-white/90 p-5 shadow-sm shadow-purple-50/40"
                >
                  <p className="text-base font-medium text-zinc-900">
                    “{quote.line}”
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-purple-500">
                    Why it matters
                  </p>
                  <p className="mt-1 text-sm text-zinc-600">{quote.context}</p>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="rounded-3xl bg-white/80 p-10 shadow-lg shadow-purple-100/60 backdrop-blur">
          <h2 className="text-2xl font-semibold text-zinc-900">
            Continue Your Financial Education
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            Reinforce Kiyosaki&apos;s ideas with complementary books that provide
            practical tactics, data, and lifestyle design frameworks.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {readingList.map((book) => (
              <article
                key={book.title}
                className="rounded-2xl border border-zinc-100 bg-white/90 p-5 shadow-sm shadow-purple-50/40"
              >
                <h3 className="text-lg font-semibold text-zinc-900">
                  {book.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-purple-600">
                  {book.byline}
                </p>
                <p className="mt-2 text-sm text-zinc-600">{book.note}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-2 pb-4 text-center text-xs text-zinc-500">
          <p>
            This summary is for educational purposes and encourages deeper study
            of the original book: <em>Rich Dad Poor Dad</em> by Robert T.
            Kiyosaki.
          </p>
          <p>Last updated {new Date().getFullYear()}.</p>
        </footer>
      </main>
    </div>
  );
}
