const roles = {
  fullstackDeveloper: {
    name: "Olof Sjögren",
    position: "Fullstackutvecklare",
    language: "sv",
    version: "V.20230220",
    profileTitle: "Profil",
    profile: (
      <>
        Jag är en erfaren DevOps/utvecklare som älskar problemlösning och ny
        teknik. Automatisera och bygga CI/CD pipelines har alltid varit något
        jag försökt driva i projekt jag arbetat med. Lätt att anpassa mig och
        arbeta i team, gärna agilt. Lösningsorienterad och van att ta ansvar.
      </>
    ),
    education: {
      title: "Utbildning",
      items: [
        "Armens tekniska skola, systemdesign och telekommunikation, 1993",
        "Elektroingenjör 80p, Mittuniversitetet, 1990-1992",
      ],
    },
    other: {
      title: "Övriga meriter",
      items: ["Körkort B"],
    },
    references: {
      title: "Referenser",
      items: ["På begäran"],
    },
  },
};

const experiences = [
  {
    title: "Utveckling/DevOps",
    company: "Frilans",
    location: "Sollentuna",
    start: "2022",
    end: "nu",
    description: (
      <>
        Design och installation av en virtuell miljö för att köra applikationer
        i Docker. Två XenServer hypervisors i master/slav-läge med Docker på
        CoreOS. Allt ligger bakom pfSence med HAProxy för domänaccess och
        SSL-cert.
      </>
    ),
  },
  {
    title: "Team Swift Maintainer (konsult)",
    company: "Skandinaviska Enskilda Banken AB",
    location: "Solna",
    start: "2020",
    end: "2021",
    description: (
      <>
        Underhåll, implementation, test och support av SWIFT och Anti-Money
        Laundering. Ett tight team med medarbetare i Sverige och Lettland.
        Internt användes engelska. Scrum används som metodik. Merparten av
        applikationerna kom från IBM, Oracle och Swift.
      </>
    ),
  },
  {
    title: "Projektledare/Utvecklare (konsult)",
    company: "Systembolaget AB",
    location: "Sollentuna",
    start: "2016",
    end: "2017",
    description: (
      <>
        Ansvarig för systemdesign och utrullning av en 3CX IP-telefonilösning
        till Systembolagets 450 butiker och distributionsanläggningar. I
        projektet satt vi upp lösningen på Windows och RHEL-maskiner som hyrdes
        av Evry. Jag byggde även ett kundanpassat system för projekthantering
        och distribution av hårdvara som kördes i Azure och användes av vår
        installationspartner.
      </>
    ),
  },
  {
    title: "Full-stack Web Developer",
    company: "Teleoffice Viewcom AB",
    location: "Solna",
    start: "2018",
    end: "2019",
    description: (
      <>
        Utveckling av en webbportal för administration av mobiltelefoner. Jag
        arbetade främst med frontend, men även med api och att bygga ci/cd
        pipeline och docker-infrastrukturen. Portalen riktade sig både till
        administratörer och slutanvändare. Utveckling och design av ett
        webbaserat tid- och projektrapporteringssystem, med integration mot
        ärendehanteringssystemet osTicket.
      </>
    ),
  },
  {
    title: "Teknisk chef/Produktägare/VD",
    company: "Licencia Telecom AB",
    location: "Solna",
    start: "2011",
    end: "2016",
    description: (
      <>
        Sverigeansvarig för utveckling och anpassning av Ericsson-LG
        företagstelefoni. Säkerställa att systemen var typgodkända och uppfyllde
        EU:s normer. Ansvarig för release, utbildning, dokumentation och
        marknadsföring till våra återförsäljares tekniker och säljare. Arbetade
        nära Ericsson-LG:s R&D i Seoul och ansvarade för att få in tjänster och
        produkter som efterfrågades på den svenska marknaden. Jag höll
        föreläsningar och presentationer på event och mässor. Slutligen var jag
        VD i tolv månader med primär fokus på affärsutveckling och försöka styra
        om verksamheten från kundplacerade lösningar till kommunikation som
        tjänst, eller molnplacerade löningar som vi säger idag.
      </>
    ),
  },
  {
    title: "Nätverksspecialist/systemspecialist",
    company: "Licencia Telecom AB",
    location: "Solna",
    start: "1994",
    end: "2010",
    description: (
      <>
        Nätverkstekniker specialiserad på ljud och video över ISDN, H.323 och
        SIP. Systemspecialist och sverigeansvarig för Ericsson-LG
        kommunikationssystem. Ansvar för test och godkännande av nya produkter
        och tjänster.
      </>
    ),
  },
];

const skills = [
  {
    title: "Frontend",
    priority: 1,
    skills: [
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "REACT", level: 5 },
      { name: "HTML/CSS", level: 4 },
      "Next JS",
      "Vite",
      "Astro",
      "Keystone JS",
      "Drupal",
      "Wordpress",
      "Tailwindcss",
      "Zustand",
      "React-hook-form",
    ],
  },
  {
    title: "Backend",
    priority: 0,
    skills: [
      { name: "Node.js", level: 5 },
      { name: "SQL", level: 5 },
      "Deno",
      "MySQL",
      "MariaDB",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "Loopback",
    ],
  },
  {
    title: "DevOps",
    priority: 0,
    skills: [
      "PHP",
      "Python",
      "Bash",
      "Docker",
      "Compose",
      "Swarn",
      "Portainer",
      "Git",
      "GitLab CI/CD",
      "GitHub Actions",
      "Graylog",
      "Splunk",
      "Caddy",
      "Apache",
      "IIS",
      "Nginx",
    ],
  },
  {
    title: "SysOps",
    priority: 0,
    skills: [
      "Windows",
      "Ubuntu",
      "Debian",
      "CentOS",
      "RHEL",
      "CoreOS",
      "Azure",
      "Google Cloud",
      "pfSense",
    ],
  },
  {
    title: "Nätverk/kommunikation",
    priority: 0,
    skills: [
      "TCP/IP",
      "LAN",
      "WAN",
      "PSTN",
      "SIP",
      "WiFi",
      "ISDN",
      "WireShark",
      "MEX",
      "H.323",
      "DECT",
    ],
  },
];

export { roles, experiences, skills };
