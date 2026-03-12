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
      fr: "Développeusee fullstack avec 15 ans d’expérience, dont 3 ans sur React et TypeScript. À l’aise en équipe agile comme en autonomie, je mets mon savoir-faire au service de projets innovants, en concevant des applications performantes, scalables et centrées utilisateur.",
      en: "Fullstack developer with 15 years of experience, including 3 years in React and TypeScript. Comfortable in agile teams as well as working autonomously, I bring my know-how to innovative projects, designing performant, scalable, and user-centered applications.",
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
    { type: "phone", label: "+33 6  78 84 28 95" },
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
      period: { en: "Août 2024 - Fév 2025", fr: "Août 2024 - Fév 2025" },
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
    {
      id: "company-b",
      company: {
        fr: "Good Angel, Paris - A distance",
        en: "Good Angel, Paris - Remote",
      },
      role: { en: "Frontend Developer", fr: "Développeuse Frontend" },
      type: { en: "Permanent", fr: "CDI" },
      period: { en: "Juin 2021 - Mars 2023", fr: "Juin 2021 - Mars 2023" },
      description: {
        en: "",
        fr: "Développement d'applications web pour divers projets",
      },
      techs: [
        "React",
        "TypeScript",
        "Redux",
        "Material UI",
        "Symfony",
        "Selenium",
        "Git",
        "Docker",
      ],
      details: {
        context: {
          en: "",
          fr: "Agence digitale dans différents secteurs. Équipe de 5 développeurs, travaillant sur plusieurs projets simultanément.",
        },
        tasks: {
          en: [],
          fr: [
            "Evolution de produit : Optimisation et développement sur une plateforme de gestion d'élèves d'auto école (JS, Selenium)",
            "Création de produit : Mise en place d'une plateforme de génération de menus à la semaine. (React, Redux, Typescript, Docker, Symfony)",
            "Refactorisation : Refonte d'une plateforme de gestion d'une auto école en React (React, Redux, TypeScript, Docker)",
          ],
        },
        training: {},
        env: {
          en: "React / Redux / TypeScript / Material UI / Symfony / Selenium / Git / Docker",
          fr: "React / Redux / TypeScript / Material UI / Symfony / Selenium / Git / Docker",
        },
      },
    },
    {
      id: "company-c",
      company: { en: "ABLSA, Luxembourg", fr: "ABLSA, Luxembourg - Sur site" },
      role: {
        en: "Fullstack Developer",
        fr: "Développeuse Fullstack",
      },
      type: { en: "Permanent", fr: "CDI" },
      period: { en: "Août 2010 - Mai 2021", fr: "Août 2010 - Mai 2021" },
      description: {
        en: ".",
        fr: "Contribution au développement d'une plateforme d'aide à la décision clinique.",
      },
      techs: [
        "PHP",
        "Zend Framework",
        "MySQL",
        "JavaScript",
        "Git",
        "SCSS",
        "PHPUnit",
        "Perl",
        "XML",
        "Vagrant",
        "GitLab CI",
        "Agile/Scrum",
      ],
      details: {
        context: {
          en: "",
          fr: "Société de logiciels de diagnostic et médicaux. Equipes de 5 développeurs. Méthodologie Agile/Scrum avec sprints de 2 semaines, pipeline CI/CD avec GitLab CI, code review sur chaque PR. Tâches : 40% développement, 60% support technique",
        },
        tasks: {
          en: [],
          fr: [
            "Conception et préparation des bases de données: Modélisation, requêtes SQL, optimisation.",
            "Développement de modules en architecture MVC (PHP/Zend Framework).",
            "Implémentation d’algorithmes d’interprétation clinique (ASI2, règles métiers, validation fonctionnelle).",
            "Gestion et résolution des tickets utilisateurs (Odoo): Analyse, débogage, tests et validation des correctifs",
          ],
        },
        env: {
          en: "PHP / Zend Framework / MySQL / JavaScript / Git/ SCSS / PHPUnit / Perl / XML / Vagrant / GitLab CI / Agile/Scrum",
          fr: "PHP / Zend Framework / MySQL / JavaScript / Git/ SCSS / PHPUnit / Perl / XML / Vagrant / GitLab CI / Agile/Scrum",
        },
      },
    },
    {
      id: "company-d",
      company: {
        en: "NewMadiaLux, Luxembourg - On site",
        fr: "NewMadiaLux, Luxembourg - Sur site",
      },
      role: {
        en: "Fullstack Developer",
        fr: "Développeuse Fullstack",
      },
      type: { en: "Permanent", fr: "CDI" },
      period: { en: "Fév 2010 - Août 2010", fr: "Fév 2010 - Août 2010" },
      description: {
        en: ".",
        fr: "Maintenance des sites internet média de la société.",
      },
      techs: ["PHP", "CSS", "MySQL", "JavaScript", "SVN "],
      details: {
        context: {
          en: "",
          fr: "Société de médias web dans plusieurs langues.",
        },
        tasks: {
          en: [],
          fr: [
            "Améliorations et ajouts de fonctionnalités:",
            "Gestions des utilisateurs pour la newsletter",
          ],
        },
        env: {
          en: "PHP / CSS / MySQL / JavaScript / SVN",
          fr: "PHP / CSS / MySQL / JavaScript / SVN",
        },
      },
    },
    {
      id: "company-e",
      company: {
        en: "Alibi Communication, Luxembourg - On site",
        fr: "Alibi Communication, Luxembourg - Sur site",
      },
      role: {
        en: "Fullstack Developer",
        fr: "Leader technique / Développeuse Fullstack",
      },
      type: { en: "Permanent", fr: "CDI" },
      period: { en: "Jan 2008 - Nov 2009", fr: "Jan 2008 - Nov 2009" },
      description: {
        en: ".",
        fr: "Développement de sites vitrines / Chef de projet web / Suivi clients.",
      },
      techs: ["PHP", "CSS", "MySQL", "JavaScript", "SVN "],
      details: {
        context: {
          en: "",
          fr: "Agence web avec une clientèle variée. Rôle de leader technique sur les projets : coordination de l'équipe de développement, suivi des délais et de la qualité du code, communication avec les clients pour comprendre leurs besoins et assurer leur satisfaction.",
        },
        tasks: {
          en: [],
          fr: [
            "Assistant technique de projet : Évaluer la faisabilité d’un projet, encadrement du projet avec les différents acteurs ( graphiste, développeur), suivi clients.",
            "Maintenance serveur web (IIS) et mails : gestion des incidents, configuration de nouveaux sites et adresses mails",
            "Développement et maintenance des sites vitrine",
          ],
        },
        env: {
          en: "PHP / CSS / MySQL / JavaScript / SVN",
          fr: "PHP / CSS / MySQL / JavaScript / SVN",
        },
      },
    },
    {
      id: "company-f",
      company: {
        en: "Intech , Schifflange - Luxembourg - On site",
        fr: "Intech , Schifflange - Luxembourg - Sur site",
      },
      role: {
        en: "Web Developer",
        fr: "Développeuse Web",
      },
      type: { en: "CDD", fr: "Stage / CDD" },
      period: { en: "Mai 2007 - Nov 2007", fr: "Mai 2007 - Nov 2007" },
      description: {
        en: ".",
        fr: "Participation au développement d’un portail de recouvrement de créances.",
      },
      techs: ["PHP", "MySQL", "JavaScript", "HTML / CSS"],
      details: {
        context: {
          en: "",
          fr: "Société de services informatiques. Projet de développement d’un portail de recouvrement de créances pour une grande banque luxembourgeoise.",
        },
        tasks: {
          en: [],
          fr: [
            "Réalisation des parties d’administration du portail en PHP (QCodo) /MySQL",
            "Intégration HTML/CSS/JS des maquettes graphiques",
          ],
        },
        env: {
          en: "PHP / MySQL / JavaScript / HTML / CSS",
          fr: "PHP / MySQL / JavaScript / HTML / CSS",
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    {
      id: "project-a",
      title: { en: "WattBudget ", fr: "WattBudget" },
      description: {
        en: "Under development - A web app to calculate the cost charging for electric cars.",
        fr: "En cours de construction - Calcul du prix de revient de la charge pour voitures électriques.",
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
      github: "https://github.com/JennyDev57/wattBudget",
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
      logo: "/images/université_de_Metz.svg",
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
      period: "2004 - 2006",
      logo: "/images/université_de_Metz.svg",
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
      logo: "/images/lycee_robert_schuman_metz.png",
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
