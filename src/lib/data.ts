export const personalInfo = {
  name: "Yago Brum",
  location: "Toronto, Canada",
  email: "yago.brum@gmail.com",
  github: "https://github.com/Yago-Brum",
  linkedin: "https://www.linkedin.com/in/yago-brum/",
};

export const workExperience = [
  {
    company: "Alterdata Software",
    location: "Remote",
    position: "Software Developer",
    period: "Jan 2020 - Sep 2024",
    achievements: [
      "Restructured ERP workflows (inventory and billing) by automating critical tasks (invoicing, taxes, inventory via Delphi/MS-SQL) to eliminate operational bottlenecks, significantly reducing manual effort and the occurrence of errors.",
      "Developed an automated thread to autonomously manage the material purchasing and restocking process, streamlining the supply chain and achieving operational optimization and reduced response times.",
      "Created a diagnostic application to proactively validate inter-system dependencies, reducing deployment issues and enhancing user satisfaction. ",
      "Implemented Trello and utilized JIRA and Git to enhance workflow organization and internal communication, boosting overall productivity and project delivery efficiency.",
    ],
  },
  {
    company: "Alterdata Software",
    location: "Teresópolis, Brazil",
    position: "QA Analyst",
    period: "Apr 2011 - Dec 2019",
    achievements: [
      "Validated the invoice XML generation process to ensure regulatory compliance, preventing penalties and securing uninterrupted billing operations.",
      "Trained and mentored new team members to accelerate their learning curve and ensure adherence to quality standards, contributing to faster onboarding and consistent team performance.",
      "Applied BDD practices and utilized automated testing tools like DUnit and Selenium to ensure comprehensive quality coverage, increasing software reliability and expediting the detection of potential issues.",
      "Managed workflow and collaboration using JIRA, Trello, and GIT to enhance visibility into project progress, resulting in optimized team operations.",
    ],
  },
];

export const education = [
  {
    institution: "Centro Universitário Serra dos Órgãos -  UNIFESO",
    location: "Teresópolis, Brazil", 
    degree: "Bachelor of Business Administration",
    period: "Jan 2011 - Dec 2015",
  },
];
export const skills = {
  programmingLanguages: [
    "Python",
    "C#",
    "Delphi",
  ],
  frontendDevelopment: [
    "Reactjs",
  ],
  databaseAndStorage: ["PostgreSQL", "MS-SQL"],
  cloudAndDevOps: ["Google cloud"],
};

export const projects = [
  {
    title: "Appointment CRM",
    github: "https://github.com/Yago-Brum/appointment_crm",
    description: [
      "Project Objective: Development of a CRM system to efficiently monitor clients and manage appointments.",
      "Backend: Built with Python and Django, providing a secure and robust foundation for the application.",
      "Frontend: Modern and interactive interface utilizing React to deliver an excellent user experience.",
      "Key Features: Client registration, appointment scheduling system, and seamless integration between frontend and backend.",
      "Modular Structure: Architecture that separates backend and frontend, ensuring scalability and simplified maintenance",
      "Impact: Practical and scalable solution to enhance client management for various types of businesses.",
    ],
  },
  {
    title: "AI To-Do List",
    github: "https://github.com/Yago-Brum/ToDoApp",
    description: [
      "Project Objective: Development of a task management application with advanced features and a user-friendly interface.",
      "Key Features: Add, edit, validate, and prioritize tasks, with date and time picker options for better organization.",
      "Automation: Automatic generation of detailed task descriptions using the OpenAI API.",
      "Local Storage: Ensures data persistence with SQLite, even after application restarts.",
      "User Interface (UI): Simple, clean, and responsive layout built with WPF, adapting to various screen sizes and resolutions.",
      "Technologies Used: Developed with .NET 8.0, leveraging SQLite for database, OpenAI API for automation, and Newtonsoft.Json for JSON integration.",
    ],
  },
];

