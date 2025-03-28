import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

const bioText = `🚀 With over 10 years of experience in software development, I have always been driven by curiosity and a deep desire to understand how things work. My journey began as a QA Analyst, where I refined my skills in process optimization and quality assurance to ensure high-standard software products.

  As my career evolved, I discovered that my true passion was programming—transforming complex challenges into impactful solutions. Motivated by this realization, I taught myself to code and successfully transitioned from QA Analyst to Developer after passing a competitive recruitment process at Alterdata.

  My professional experience includes automating tax invoice processing, developing advanced tax calculation systems, and creating an automated solution that managed end-to-end procurement and replenishment of raw materials and supplies.

  Additionally, I stay up to date with Canadian tax regulations, ensuring that my solutions comply with current standards and requirements. I am also continuously expanding my expertise in Python, focusing on Django, API development, and cloud technologies to build scalable and efficient solutions.

  I excel at solving complex problems and delivering innovative, results-driven solutions. I am always eager to connect with forward-thinking professionals, collaborate on challenging projects, and drive impactful results. Let’s create something great together!`;


  export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold mb-2"
              variants={childVariants}
            >
              {personalInfo.name}{" "}
              <span className="inline-block animate-pulse">✨</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-6"
              variants={childVariants}
            >
              Software Developer 👨‍💻
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center text-sm text-muted-foreground"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                📍 {personalInfo.location}
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Mail className="h-4 w-4 mr-2" />
                ✉️ {personalInfo.email}
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Github className="h-4 w-4 mr-2" />
                🌟 GitHub
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                🔗 LinkedIn
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-48 md:w-60 rounded-full relative ring-2 ring-purple-500/50"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm">
          {/* Mantenha a classe whitespace-pre-wrap aqui */}
          <p className="text-muted-foreground pl-4 py-2 mb-4 relative whitespace-pre-wrap">
            <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
            {/* Renderize a variável bioText aqui */}
            {bioText}
          </p>
        </div>
      </MotionWrapper>
      </div>
    </section>
  );
}
