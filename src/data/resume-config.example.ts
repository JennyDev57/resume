import type { ResumeConfig } from "./types";

/**
 * This is an example configuration file.
 * Copy this file to `resume-config.ts` and fill in your own information.
 *
 * All text fields that support multiple languages use the `LocalizedString` format:
 * { en: "English text", fr: "Texte français" }
 *
 * Add as many languages as you need — just make sure to list them in `languages.available`.
 */
export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: "Jennifer Durthaler",
    // Auto-detected: just drop your photo or profile image in public/images/ (any .jpg, .png, .webp)
    // You can also set a specific path here to override auto-detection:
    photo: "/images/photo.jpg",
    photoBackEmoji: "👩‍💻", // Shown when clicking the photo (3D flip)
    title: {
      en: "Fullstack Developer",
      fr: "Développeuse Fullstack",
    },
    subtitle: {
      fr: "15 ans d'expérience | React, TypeScript | Remote",
      en: "15 years experience | React, TypeScript | Remote",
    },
    summary: {
      fr: "Avec plus de 15 ans d'expérience dans le développement web dont 3 ans sur les technologies modernes telle que React et Typescript, je suis actuellement disponible pour débuter une nouvelle opportunité à temps partiel (80%), en full remote.",
      en: "With more than 15 years of experience in web development, including 3 years in modern technologies such as ReactJs and TypeScript, I am currently available to start a new opportunity part-time (80%), fully remote.",
    },
    location: "Vinzier, France",
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: "Jennifer Durthaler — Fullstack Developer",
    description:
      "Interactive resume of Jane Doe, Fullstack Developer specializing in React and TypeScript.",
  },

  // ===== LANGUAGES =====
  languages: {
    default: "en",
    available: ["en", "fr"],
    labels: {
      en: "EN",
      fr: "FR",
    },
  },

  // ===== CONTACT =====
  contact: [
    {
      type: "github",
      label: "jennyDev57",
      href: "https://github.com/JennyDev57",
    },
    {
      type: "linkedin",
      label: "Jennifer Durthaler",
      href: "www.linkedin.com/in/jennifer-durthaler-05249322",
    },
    { type: "email", label: "jennifer.durthaler@gmail.com" },
    { type: "phone", label: "+33 6  78 84 25 95" },
    { type: "location", label: "Vinzier, France" },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: "Languages", fr: "Langues" },
      type: "languages",
      items: [
        {
          name: { en: "French", fr: "Français" },
          level: { en: "Native", fr: "Natif" },
        },
        {
          name: { en: "English", fr: "Anglais" },
          level: { en: "B1", fr: "B1" },
          details: "",
        },
      ],
    },
    {
      title: { en: "Frontend", fr: "Frontend" },
      type: "badges",
      items: [
        { name: "React" },
        { name: "TypeScript" },
        { name: "Redux" },
        { name: "Material UI" },
      ],
    },
    {
      title: { en: "Backend", fr: "Backend" },
      type: "badges",
      items: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "API Rest / GraphQL" },
        { name: "PHP" },
        { name: "Zend" },
        { name: "Symfony" },
      ],
    },
    {
      title: { en: "Database", fr: "Base de données" },
      type: "badges",
      items: [{ name: "PostgreSQL" }, { name: "MongoDB" }, { name: "MySQL" }],
    },
    {
      title: { en: "DevOps", fr: "DevOps" },
      type: "badges",
      items: [{ name: "Docker" }],
    },
    {
      title: { en: "Testing", fr: "Testing" },
      type: "badges",
      items: [{ name: "PHPUnit" }, { name: "Selenium" }],
    },
    {
      title: {
        en: "Methodologies",
        fr: "Méthodologies",
      },
      type: "text",
      items: [
        {
          name: {
            en: "Agile/Scrum, TDD, Code Review, CI/CD",
            fr: "Agile/Scrum, TDD, Code Review, CI/CD",
          },
        },
      ],
    },
    {
      title: {
        en: "Organization & Collaboration",
        fr: "Organisation & Collaboration",
      },
      type: "badges",
      items: [{ name: "Jira" }, { name: "Figma" }],
    },
    {
      title: {
        fr: "Formation Continue (en cours / en projet)",
        en: "Continuous Learning",
      },
      type: "badges",
      items: [
        { name: "Mocha" },
        { name: "Cypress" },
        { name: "Tailwind CSS" },
        { name: "Next.js" },
        { name: "Angular" },
        { name: "Laravel" },
      ],
    },
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: "company-a",
      company: {
        en: "TokTokDoc - Strasbourg - A distance",
        fr: "TokTokDoc - Strasbourg - À distance",
      },
      role: {
        en: "Middle Fullstack Developer",
        fr: "Développeuse Confirmée",
      },
      type: { en: "Permanent", fr: "CDI" },
      period: { en: "2022 - Present", fr: "Août 2024 - Fév 2025" },
      description: {
        en: "Contributing to the development of a telemedicine platform used by 700 healthcare facilities in France.",
        fr: "Participation au développement d'une plateforme de télémédecine utilisée par 700 établissements en France.",
      },
      techs: [
        "React",
        "Vue.js",
        "TypeScript",
        "Nx",
        "GraphQL",
        "Parse",
        "PostgreSQL",
        "MongoDB",
        "Git / GitLab CI",
        "Docker",
        "Jira",
        "Figma",
      ],
      isHighlighted: true,
      details: {
        context: {
          en: "",
          fr: "Équipe de 10 personnes (6 développeurs, 1 UI/UX, 1 PO, 1 PM, 1 CTO) au sein d'une société de 100 personnes. Méthodologie Agile/Scrum avec sprints de 2 semaines, pipeline CI/CD avec GitLab CI, code review sur chaque PR.",
        },
        tasks: {
          en: [],
          fr: [
            "Collaboration avec les équipes : alignement des fonctionnalités avec les besoins utilisateurs",
            "Évolution du produit : ajout de fonctionnalités pour accroitre la valeur ajoutée pour les clients",
            "Optimisation des performances : chargement 2x plus rapide",
            "Maintenances et Support : Résolution d'anomalies assurant un niveau de satisfaction client élevée",
          ],
        },
        training: {},
        env: {
          en: "React / Vue.js / TypeScript / Nx / PostgreSQL / MongoDB / GraphQL / Parse / Docker  / GitLab CI / Jira / Figma",
          fr: "React / Vue.js / TypeScript / Nx / PostgreSQL / MongoDB / GraphQL / Parse / Docker  / GitLab CI / Jira / Figma",
        },
      },
    },
    // {
    //   id: "company-b",
    //   company: { en: "WebAgency", fr: "WebAgency" },
    //   role: { en: "Frontend Developer", fr: "Développeuse Frontend" },
    //   type: { en: "Permanent", fr: "CDI" },
    //   period: { en: "2019 - 2022", fr: "2019 - 2022" },
    //   description: {
    //     en: "Developed responsive web applications for various clients. Specialized in React and Angular projects.",
    //     fr: "Développement d'applications web responsives pour divers clients. Spécialisée en projets React et Angular.",
    //   },
    //   techs: ["React", "Angular", "TypeScript", "SCSS"],
    //   details: {
    //     context: {
    //       en: "Digital agency with 20+ clients across various industries (retail, finance, healthcare). Team of 12 developers, working on 3-4 projects simultaneously.",
    //       fr: "Agence digitale avec 20+ clients dans différents secteurs (retail, finance, santé). Équipe de 12 développeurs, travaillant sur 3-4 projets simultanément.",
    //     },
    //     tasks: {
    //       en: [
    //         "Built 15+ client-facing web applications from scratch",
    //         "Created and maintained a shared design system used across all agency projects",
    //         "Implemented complex form workflows with multi-step validation",
    //         "Optimized web performance achieving 90+ scores on Core Web Vitals",
    //         "Integrated third-party APIs (payment, CRM, analytics)",
    //         "Set up Storybook documentation for reusable components",
    //         "Collaborated closely with UX designers to translate Figma mockups into pixel-perfect UIs",
    //       ],
    //       fr: [
    //         "Développement de 15+ applications web clients from scratch",
    //         "Création et maintenance d'un design system partagé utilisé sur tous les projets de l'agence",
    //         "Implémentation de workflows de formulaires complexes avec validation multi-étapes",
    //         "Optimisation des performances web avec scores 90+ sur les Core Web Vitals",
    //         "Intégration d'APIs tierces (paiement, CRM, analytics)",
    //         "Mise en place de la documentation Storybook pour les composants réutilisables",
    //         "Collaboration étroite avec les designers UX pour traduire les maquettes Figma en interfaces pixel-perfect",
    //       ],
    //     },
    //     training: {
    //       en: [
    //         "Angular Advanced workshop (2 days)",
    //         "Accessibility (WCAG 2.1) certification",
    //       ],
    //       fr: [
    //         "Workshop Angular Avancé (2 jours)",
    //         "Certification Accessibilité (WCAG 2.1)",
    //       ],
    //     },
    //     env: {
    //       en: "React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI",
    //       fr: "React / Angular / TypeScript / SCSS / Tailwind CSS / Storybook / Figma / GitLab CI",
    //     },
    //   },
    // },
    // {
    //   id: "internship",
    //   company: { en: "StartupXYZ", fr: "StartupXYZ" },
    //   role: {
    //     en: "Fullstack Developer Intern",
    //     fr: "Stagiaire Développeuse Fullstack",
    //   },
    //   type: { en: "Internship", fr: "Stage" },
    //   period: { en: "2018 - 2019", fr: "2018 - 2019" },
    //   description: {
    //     en: "Contributed to the development of an e-commerce platform. Gained experience in fullstack development.",
    //     fr: "Contribution au développement d'une plateforme e-commerce. Acquisition d'expérience en développement fullstack.",
    //   },
    //   techs: ["React", "Node.js", "MongoDB", "Machine Learning"],
    //   details: {
    //     context: {
    //       en: "Early-stage startup (seed round), small team of 5 developers building an e-commerce platform from the ground up. Fast-paced environment with weekly releases.",
    //       fr: "Startup en phase de démarrage (seed round), petite équipe de 5 développeurs construisant une plateforme e-commerce from scratch. Environnement rapide avec des releases hebdomadaires.",
    //     },
    //     tasks: {
    //       en: [
    //         "Developed the product catalog with advanced filtering and search",
    //         "Built the shopping cart with real-time inventory checking",
    //         "Integrated Stripe payment gateway with 3D Secure support",
    //         "Implemented user authentication with JWT and OAuth (Google, Facebook)",
    //         "Created an admin dashboard for order management and analytics",
    //         "Wrote API documentation with Swagger/OpenAPI",
    //       ],
    //       fr: [
    //         "Développement du catalogue produits avec filtrage avancé et recherche",
    //         "Création du panier d'achat avec vérification de stock en temps réel",
    //         "Intégration de la passerelle de paiement Stripe avec support 3D Secure",
    //         "Implémentation de l'authentification utilisateur avec JWT et OAuth (Google, Facebook)",
    //         "Création d'un tableau de bord admin pour la gestion des commandes et les analytics",
    //         "Rédaction de la documentation API avec Swagger/OpenAPI",
    //       ],
    //     },
    //     env: {
    //       en: "React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku",
    //       fr: "React / Node.js / Express / MongoDB / Stripe / JWT / Docker / Heroku",
    //     },
    //   },
    // },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: "project-a",
      title: { en: "WattBudget ", fr: "WattBudget" },
      description: {
        en: "A web app to calculate the cost charging for electric cars.",
        fr: "Calcul du prix de revient de la charge pour voitures électriques.",
      },
      techs: [
        "React",
        "TypeScript",
        "MongoDB",
        "Express.js",
        "BetterAuth",
        "Astro",
        "ShadCN/UI",
        "Tailwind CSS",
      ],
      url: "",
      github: "https://github.com/JennyDev57/carCharging",
    },
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: {
        en: "IUT Paul Verlaine - Metz",
        fr: "IUT Paul Verlaine - Metz",
      },
      degree: {
        en: "Professional Bachelor's Degree in Computer Science",
        fr: "Licence Professionnelle - Systèmes Informatiques et Logiciels",
      },
      specialty: {
        en: "Web and E-commerce Professions",
        fr: "Métier du Web et du Commerce Électronique",
      },
      period: "2006 - 2007",
    },
    {
      school: {
        en: "IUT Paul Verlaine - Metz",
        fr: "IUT Paul Verlaine - Metz",
      },
      degree: {
        en: "DUT in Computer Science",
        fr: "DUT Informatique",
      },
      specialty: {
        en: "Computer Engineering",
        fr: "Génie Informatique",
      },
      period: "2005 - 2006",
    },
    {
      school: {
        en: "Lycée Robert Schuman, Metz",
        fr: "Lycée Robert Schuman, Metz",
      },
      degree: {
        en: "Baccalaureate in Science and Technology for Tertiary",
        fr: "Baccalauréat Sciences et Technologies Tertiaires",
      },
      specialty: {
        en: "Computer Science and Management",
        fr: "Informatique et Gestion",
      },
      period: " 2004",
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { fr: "Loisirs créatifs", en: "Creative hobbies" },
    },
    {
      title: { en: "Hiking", fr: "Randonnée" },
      details: [{ en: "Mountain trails", fr: "Sentiers de montagne" }],
    },
  ],

  // ===== PDF (optional) =====
  // Auto-detected: just drop your PDF files in public/cv/fr/ and public/cv/en/
  // The download button will appear automatically — no config needed!
  // Uncomment below only if you need to override the auto-detection:
  pdf: {
    label: { en: "Download PDF", fr: "Télécharger le PDF" },
    path: {
      //en: "/cv/en/CV_Durthaler_Jennifer-en.pdf",
      fr: "/cv/fr/CV_Durthaler_Jennifer-fr.pdf",
    },
  },

  // ===== THEME =====
  theme: {
    preset: "ocean", // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: "CONTACT", fr: "CONTACT" },
      skills: { en: "SKILLS", fr: "COMPÉTENCES" },
      experience: {
        en: "PROFESSIONAL EXPERIENCE",
        fr: "EXPÉRIENCES PROFESSIONNELLES",
      },
      education: { en: "EDUCATION", fr: "FORMATION" },
      projects: { en: "PROJECTS", fr: "PROJETS" },
      hobbies: { en: "HOBBIES", fr: "LOISIRS" },
    },
    experience: {
      mainTasks: { en: "Main tasks:", fr: "Tâches principales :" },
      moreTasks: { en: "more tasks...", fr: "autres tâches..." },
      training: { en: "Training:", fr: "Formations :" },
      techEnv: { en: "Tech environment:", fr: "Env. technique :" },
      technologies: { en: "Technologies", fr: "Technologies" },
    },
    actions: {
      clickHint: {
        en: "Click on experiences to see more details",
        fr: "Cliquez sur les expériences pour voir plus de détails",
      },
      switchTheme: { en: "Toggle dark mode", fr: "Changer le thème" },
      downloadPdf: { en: "Download PDF", fr: "Télécharger le PDF" },
      exportPdf: { en: "Export as PDF", fr: "Exporter en PDF" },
      loading: { en: "Loading...", fr: "Chargement..." },
    },
  },
};
