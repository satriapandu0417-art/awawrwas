/**
 * PORTFOLIO UPDATE GUIDE:
 * 1. Certifications: Add a new object inside the 'certifications' array.
 *    Available icons: 'shield', 'med', 'eye', 'flame', 'award', 'anchor'.
 * 2. Experience: Add a new object inside 'experience'.
 *    'tags' is an array of strings (unlimited).
 * 3. Skills: Adjust the 'level' value (0-100) to control the progress bar length.
 */

export const portfolioData = {
  hero: {
    name: "PANDU WIJAYA S.W.",
    role: "Maritime Deck Cadet",
    bio: "Fresh Graduate Deck Cadet from SMK Pelayaran Jakarta with a strong focus on Navigation and Maritime Safety. Fully certified and prepared to contribute to international fleet operations with discipline, precision, and professional integrity."
  },

  about: {
    paragraphs: [
      "I am a highly motivated Maritime Cadet from SMK Pelayaran Jakarta with a strong foundation in Deck Operations and Nautical Science.",
      "My core competencies include Maritime Safety Management and Watchkeeping. I have been thoroughly trained in operating modern navigational equipment and bridge procedures.",
      "I excel in structured and disciplined environments that demand high levels of coordination, responsibility, and leadership."
    ],
    stats: [
      { label: "Years of Training", value: "4+" },
      { label: "Major Certifications", value: "4" },
      { label: "Simulator Hours", value: "100+" },
      { label: "Academic Achievement", value: "5+" }
    ]
  },

  certifications: [
    {
      id: "CERT-001",
      title: "Basic Safety Training (BST)",
      icon: "shield",
      desc: "Mandatory safety training covering sea survival techniques, fire prevention and firefighting, and elementary first aid.",
      year: "2024"
    },
    {
      id: "CERT-002",
      title: "Medical First Aid (MFA)",
      icon: "med",
      desc: "Comprehensive training in providing immediate medical care and emergency response onboard.",
      year: "2024"
    },
    {
      id: "CERT-003",
      title: "Security Awareness Training (SAT)",
      icon: "eye",
      desc: "Maritime security protocols and awareness in compliance with the ISPS Code.",
      year: "2024"
    },
    {
      id: "CERT-004",
      title: "Advanced Fire Fighting (AFF)",
      icon: "flame",
      desc: "Advanced-level training in managing and leading onboard firefighting operations.",
      year: "2024"
    }
    // ADD MORE CERTIFICATIONS HERE IF NEEDED
  ],

  experience: [
    {
      period: "2020 — 2024",
      title: "Onboard Study Program",
      org: "PT. PELNI",
      desc: "Completed a one-week onboard study program aboard KM Kelud, gaining practical exposure to deck operations and shipboard routines.",
      tags: ["Navigation", "Ship Stability", "MARPOL", "Celestial Navigation"]
    }
    // ADD MORE EXPERIENCE HERE
  ],

  skills: {
    technical: [
      { name: "Celestial Navigation", level: 90 },
      { name: "Watchkeeping", level: 95 },
      { name: "Ship Stability", level: 85 },
      { name: "Cargo Handling", level: 80 }
    ],
    discipline: [
      { name: "Leadership", level: 90 },
      { name: "Teamwork", level: 100 },
      { name: "Stress Management", level: 95 },
      { name: "Punctuality", level: 100 }
    ]
  },

  contact: {
    email: "panduwijayasatria1@gmail.com",
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { platform: "Instagram", url: "https://www.instagram.com/nothpands/", icon: "instagram" },
      { platform: "GitHub", url: "https://github.com", icon: "github" }
    ],
    emailjs: {
      serviceId: "service_i1srt6i",
      templateId: "template_666hzkx",
      publicKey: "lp_9gWDYHQBjQ3RdG"
    }
  }
};
