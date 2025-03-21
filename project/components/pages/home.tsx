"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Brain,
  Database,
  Globe,
  Send
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management system using machine learning for task prioritization",
    image: "https://images.unsplash.com/photo-1661961110671-77b71b929d52?w=800&auto=format&fit=crop&q=60",
    tech: ["React", "Python", "TensorFlow", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "IoT Home Automation",
    description: "Complete home automation system with real-time monitoring and control",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60",
    tech: ["Arduino", "Node.js", "MQTT", "React"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Blockchain Supply Chain",
    description: "Decentralized supply chain management system using blockchain",
    image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=800&auto=format&fit=crop&q=60",
    tech: ["Solidity", "Web3.js", "React", "Node.js"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

const skills = [
  { name: "Frontend Development", progress: 90 },
  { name: "Backend Development", progress: 85 },
  { name: "Machine Learning", progress: 75 },
  { name: "DevOps", progress: 70 },
  { name: "UI/UX Design", progress: 80 }
];

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-background">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <nav className="fixed w-full top-0 z-40 backdrop-blur-sm bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            AS
          </motion.div>
          <div className="flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex gap-6"
            >
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </motion.div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm{" "}
                <span className="text-primary">
                  <TypeAnimation
                    sequence={[
                      "Avneesh Singh",
                      2000,
                      "an Engineer",
                      2000,
                      "a Developer",
                      2000,
                    ]}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Third-year engineering student passionate about building innovative solutions
                and exploring cutting-edge technologies.
              </p>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View Projects</Link>
                </Button>
              </div>
              <div className="flex gap-4 mt-8">
                <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60"
                  alt="Avneesh Singh"
                  className="rounded-full object-cover shadow-xl transition-transform hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground">
              I'm a third-year engineering student specializing in Computer Science. 
              With a passion for technology and innovation, I focus on creating 
              solutions that make a difference. My expertise spans web development, 
              machine learning, and IoT.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-2" />
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <Card className="p-6">
                <h4 className="font-semibold">Bachelor of Engineering</h4>
                <p className="text-muted-foreground">Computer Science</p>
                <p className="text-sm text-muted-foreground">2021 - Present</p>
              </Card>
              <Card className="p-6">
                <h4 className="font-semibold">High School</h4>
                <p className="text-muted-foreground">Science & Mathematics</p>
                <p className="text-sm text-muted-foreground">2019 - 2021</p>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Code2 className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">10+</h4>
              <p className="text-sm text-muted-foreground">Projects</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Brain className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">5+</h4>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Database className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">3+</h4>
              <p className="text-sm text-muted-foreground">Databases</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Globe className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold">2+</h4>
              <p className="text-sm text-muted-foreground">Languages</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here are some of my notable projects that showcase my skills and experience
              in different areas of software development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.github} target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                      <Button size="sm" asChild>
                        <Link href={project.demo} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto"
          >
            <Card className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Your message" className="min-h-[120px]" />
                </div>
                <Button className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Avneesh Singh. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}