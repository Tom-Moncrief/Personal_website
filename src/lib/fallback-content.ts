import type { ResearcherProfileContent } from "./content-types";

export const fallbackContent: ResearcherProfileContent = {
  usingFallback: true,
  profile: {
    name: "Your Name",
    title: "Researcher in Your Field",
    affiliation: "Your Department, Your Institution",
    shortBio:
      "A concise placeholder bio for a researcher profile. Replace this with your research focus, methods, and the problem your work helps solve.",
    longBio:
      "This CMS-ready profile is using placeholder content until Sanity is configured and populated. Use this area for a more personal research narrative: the questions you study, the communities your work serves, and the evidence of your scholarly contribution.",
    email: "you@example.com",
    links: [
      { label: "Google Scholar", href: "https://scholar.google.com" },
      { label: "ORCID", href: "https://orcid.org" },
      { label: "LinkedIn", href: "https://www.linkedin.com" },
    ],
  },
  interests: [
    {
      title: "Research Theme One",
      description:
        "Describe a primary research theme, the methods you use, and why the work matters.",
      keywords: ["Methods", "Impact", "Collaboration"],
    },
    {
      title: "Research Theme Two",
      description:
        "Summarize a second research area with language that is accessible to non-specialists.",
      keywords: ["Data", "Policy", "Practice"],
    },
    {
      title: "Research Theme Three",
      description:
        "Use this card for emerging work, interdisciplinary projects, or future directions.",
      keywords: ["Innovation", "Systems", "Evaluation"],
    },
  ],
  achievements: [
    {
      title: "Featured Research Achievement",
      summary:
        "Replace with a concrete outcome, grant, collaboration, dataset, tool, or discovery.",
      year: "2026",
      category: "Achievement",
      featured: true,
    },
    {
      title: "Collaborative Project Milestone",
      summary:
        "Use this to highlight leadership, cross-institutional work, or public impact.",
      year: "2025",
      category: "Project",
      featured: true,
    },
  ],
  publications: [
    {
      title: "Representative Publication Title",
      authors: "Your Name, Co-author Name, Co-author Name",
      venue: "Journal or Conference Name",
      year: "2026",
      summary:
        "A short plain-language summary of the publication and its contribution.",
      featured: true,
    },
    {
      title: "Second Selected Publication",
      authors: "Your Name and Collaborators",
      venue: "Journal or Conference Name",
      year: "2025",
      summary:
        "Use featured publications to show quality, relevance, and research trajectory.",
      featured: true,
    },
  ],
  awards: [
    {
      title: "Research Award or Fellowship",
      issuer: "Awarding Body",
      year: "2025",
      summary:
        "Briefly explain the recognition and what it says about your work.",
    },
  ],
  talks: [
    {
      title: "Invited Talk or Conference Presentation",
      venue: "Event or Seminar Series",
      date: "2026",
      location: "City, Country",
    },
  ],
};
