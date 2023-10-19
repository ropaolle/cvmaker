import React from "react";

const experience = new Map();

experience.set("frontend", {
  title: "Frontend",
  priority: 0,
  skills: [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "REACT",
    "NextJS",
    "Vite",
    "Astro",
    "KeystoneJS",
    "Drupal",
    "Wordpress",
    "Tailwind",
    "Zustand",
    "React-hook-form",
  ],
});

experience.set("backend", {
  title: "Backend",
  priority: 0,
  skills: [
    "NodeJS",
    "Deno",
    "MongoDB",
    "SQL",
    "MySQL",
    "MariaDB",
    "PostgreSQL",
    "Supabase",
    "Firebase",
    "Loopback",
  ],
});

experience.set("devops", {
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
    "GitLab CD/CI",
    "GitHub Actions",
    "Graylog",
    "Splunk",
    "Caddy",
    "Apache",
    "IIS",
    "Nginx",
  ],
});

experience.set("sysops", {
  title: "SysOps",
  priority: 0,
  skills: [
    "Ubuntu",
    "Debian",
    "CentOS",
    "RHEL",
    "CoreOS",
    "Windows",
    "Azure",
    "Google Cloud",
    "pfSense",
  ],
});

experience.set("network", {
  title: "Nätverk/kommunikation",
  priority: 0,
  skills: [
    "TCP/IP",
    "LAN",
    "WAN",
    "PSTN,ISDN",
    "SIP",
    "WireShark",
    "IPtelefoni",
    "MEX",
    "H.323",
    "WiFi",
    "DECT",
  ],
});

export default function Skills() {
  const entries = [...experience.entries()];

  const skills = entries.map(([key, { title, skills }]) => (
    <React.Fragment key={key}>
      <div className="mt-4 font-semibold text-sky-500">{title}</div>
      <div>{skills.join(", ")}</div>
    </React.Fragment>
  ));

  return (
    <>
      <div className="font-semibold uppercase text-sky-500">Kompetenser</div>
      {skills}
    </>
  );
}
