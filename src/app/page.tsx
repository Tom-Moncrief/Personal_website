import Image from "next/image";
import type { ReactNode } from "react";

import { getProfileContent } from "@/lib/get-profile-content";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-teal-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </a>
  );
}

export default async function Home() {
  const {
    profile,
    interests,
    achievements,
    publications,
    awards,
    talks,
    usingFallback,
  } = await getProfileContent();

  return (
    <main className="min-h-screen overflow-hidden bg-stone-50 text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(20,184,166,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(120,113,108,0.18),transparent_30%),linear-gradient(135deg,#faf7f0_0%,#eef4ef_52%,#f8fafc_100%)]" />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 pb-20 pt-8 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between rounded-full border border-stone-200/80 bg-white/70 px-5 py-3 text-sm font-medium text-slate-700 shadow-sm shadow-stone-200/70 backdrop-blur">
          <a className="tracking-[-0.02em]" href="#top">
            Research Profile
          </a>
          <div className="hidden items-center gap-6 sm:flex">
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <a href="#recognition">Recognition</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {usingFallback ? (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-950">
            Placeholder content is currently displayed. Configure Sanity and
            replace the sample entries in Studio to publish the real profile.
          </div>
        ) : null}

        <div
          id="top"
          className="grid items-center gap-12 py-8 lg:grid-cols-[1.08fr_0.92fr]"
        >
          <div>
            <p className="mb-5 inline-flex rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-800">
              Researcher profile and selected achievements
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] text-slate-950 sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-2xl text-2xl font-medium leading-9 tracking-[-0.03em] text-slate-700">
              {profile.title}
            </p>
            <p className="mt-3 text-lg text-teal-800">{profile.affiliation}</p>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-650">
              {profile.shortBio}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {profile.email ? (
                <a
                  className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-teal-900"
                  href={`mailto:${profile.email}`}
                >
                  Email me
                </a>
              ) : null}
              {profile.links.map((link) => (
                <ExternalLink
                  key={link.href}
                  className="rounded-full border border-stone-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-800"
                  href={link.href}
                >
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[3rem] bg-teal-200/30 blur-3xl" />
            <div className="relative rounded-[2.5rem] border border-white/80 bg-white/75 p-4 shadow-2xl shadow-slate-900/10 backdrop-blur">
              <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-teal-900 to-stone-700">
                {profile.portraitUrl ? (
                  <Image
                    src={profile.portraitUrl}
                    alt={`Portrait of ${profile.name}`}
                    width={720}
                    height={860}
                    className="aspect-[4/5] h-full w-full object-cover"
                    priority
                  />
                ) : (
                  <div className="flex aspect-[4/5] flex-col justify-between p-8 text-white">
                    <div className="h-24 w-24 rounded-full border border-white/30 bg-white/10" />
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-teal-100">
                        Portrait
                      </p>
                      <p className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                        Add your profile image in Sanity Studio.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <SectionHeading
          eyebrow="About"
          title="Research narrative"
          description="A concise space for the work behind the metrics: methods, collaborators, and impact."
        />
        <div className="rounded-[2rem] border border-stone-200 bg-white/75 p-8 text-lg leading-9 text-slate-650 shadow-sm shadow-stone-200/60">
          {profile.longBio}
        </div>
      </section>

      <section
        id="research"
        className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
      >
        <SectionHeading
          eyebrow="Research"
          title="Areas of focus"
          description="CMS-editable research themes designed for both specialist and public-facing audiences."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {interests.map((interest) => (
            <article
              key={interest.title}
              className="rounded-[2rem] border border-stone-200 bg-white/80 p-7 shadow-sm shadow-stone-200/60 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/10"
            >
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                {interest.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {interest.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {interest.keywords?.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-800"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Achievements"
          title="Selected milestones"
          description="Use this section for grants, discoveries, collaborations, datasets, tools, or public impact."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {achievements.map((achievement) => (
            <article
              key={achievement.title}
              className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-xl shadow-slate-900/10"
            >
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-200">
                  {achievement.category}
                </p>
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm">
                  {achievement.year}
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em]">
                {achievement.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                {achievement.summary}
              </p>
              {achievement.link ? (
                <ExternalLink
                  className="mt-6 inline-block text-sm font-semibold text-teal-200"
                  href={achievement.link}
                >
                  View detail
                </ExternalLink>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section
        id="publications"
        className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 lg:px-12"
      >
        <SectionHeading
          eyebrow="Publications"
          title="Selected publications"
          description="Featured outputs with enough context for readers outside the immediate field."
        />
        <div className="mt-10 divide-y divide-stone-200 rounded-[2rem] border border-stone-200 bg-white/80 shadow-sm shadow-stone-200/60">
          {publications.map((publication) => (
            <article
              key={publication.title}
              className="grid gap-6 p-7 md:grid-cols-[0.18fr_0.82fr]"
            >
              <div className="text-lg font-semibold text-teal-800">
                {publication.year}
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-slate-950">
                  {publication.title}
                </h3>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                  {publication.venue}
                </p>
                <p className="mt-4 text-slate-600">{publication.authors}</p>
                <p className="mt-4 leading-7 text-slate-650">
                  {publication.summary}
                </p>
                {publication.link ? (
                  <ExternalLink
                    className="mt-5 inline-block text-sm font-semibold text-teal-800"
                    href={publication.link}
                  >
                    Read publication
                  </ExternalLink>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="recognition"
        className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:px-12"
      >
        <div>
          <SectionHeading eyebrow="Recognition" title="Awards" />
          <div className="mt-8 space-y-4">
            {awards.map((award) => (
              <article
                key={award.title}
                className="rounded-3xl border border-stone-200 bg-white/80 p-6"
              >
                <p className="text-sm font-semibold text-teal-800">
                  {award.year} · {award.issuer}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                  {award.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {award.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="Speaking" title="Talks" />
          <div className="mt-8 space-y-4">
            {talks.map((talk) => (
              <article
                key={talk.title}
                className="rounded-3xl border border-stone-200 bg-white/80 p-6"
              >
                <p className="text-sm font-semibold text-teal-800">
                  {talk.date} · {talk.location}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em]">
                  {talk.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{talk.venue}</p>
                {talk.link ? (
                  <ExternalLink
                    className="mt-4 inline-block text-sm font-semibold text-teal-800"
                    href={talk.link}
                  >
                    Event detail
                  </ExternalLink>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="mx-auto w-full max-w-7xl px-6 pb-10 pt-16 sm:px-8 lg:px-12"
      >
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-200">
            Contact
          </p>
          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                Open to research conversations, collaborations, and speaking.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Replace this closing note in Sanity with the specific kinds of
                opportunities you want people to contact you about.
              </p>
            </div>
            {profile.email ? (
              <a
                className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-teal-100"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            ) : null}
          </div>
        </div>
      </footer>
    </main>
  );
}
