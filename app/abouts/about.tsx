"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiNuxtdotjs, SiSpringboot } from "react-icons/si";
import { useTheme } from "../components/ThemeProvider/theme";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
};

const item = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8 } },
};

export default function AboutMe() {
    const { theme } = useTheme();
    const iconColor = theme === "dark" ? "#fff" : "#000";

    const skills = [
        { icon: <FaReact size={30} color={iconColor} />, name: "React" },
        { icon: <SiTypescript size={30} color={iconColor} />, name: "TypeScript" },
        { icon: <FaNodeJs size={30} color={iconColor} />, name: "Node.js" },
        { icon: <SiHtml5 size={30} color={iconColor} />, name: "HTML5" },
        { icon: <SiCss3 size={30} color={iconColor} />, name: "CSS3" },
        { icon: <SiJavascript size={30} color={iconColor} />, name: "JavaScript" },
        { icon: <SiNextdotjs size={30} color={iconColor} />, name: "Next.js" },
        { icon: <SiNuxtdotjs size={30} color={iconColor} />, name: "Nuxt.js" },
        {icon:  <SiSpringboot size={30} color={iconColor}/>, name: "SpringBoot" },
    ];

    return (
        <motion.div
        id="about"
        className="pt-24 py-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        >
        <motion.h2 className="text-2xl font-bold mb-4 text-accent" variants={item}>
            About me
        </motion.h2>
        <motion.p className="text-gray leading-relaxed mb-4" variants={item}>
            Hi there! I&apos;m Makara, a website developer with a passion for creating custom online experiences. With a skill set including HTML, CSS, JavaScript, Nuxt, Next and React. And I&apos;ve been intership about Spring Boot also.
        </motion.p>
        <motion.p className="text-gray leading-relaxed mb-4" variants={item}>
            So if you&apos;re in need of a new website or just looking to revamp your current online presence, I&apos;d love to chat and see how I can help. Let&apos;s bring your website dreams to reality together!
        </motion.p>
        <motion.p className="text-gray leading-relaxed mb-6" variants={item}>
            Here are my main skills:
        </motion.p>

        <div className="grid grid-cols-3 md:grid-cols-9 gap-1">
            {skills.map((skill, index) => (
            <motion.div
                key={skill.name}
                className="flex justify-center items-center"
                variants={item}
                transition={{ delay: index * 0.1 }}
            >
                {skill.icon}
            </motion.div>
            ))}
        </div>
        </motion.div>
    );
}