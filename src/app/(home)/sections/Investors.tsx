"use client";

import type { AnimatedProps } from "@/types/motion";
import { motion } from "framer-motion";

const techStack = [
  { name: "Linux", slug: "linux", color: "#FCC624" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "Kubernetes", slug: "kubernetes", color: "#326CE5" },
  { name: "Python", slug: "python", color: "#3776AB" },
  { name: "Ansible", slug: "ansible", color: "#EE0000" },
  { name: "Shell", slug: "gnubash", color: "#4EAA25" },
  { name: "Prometheus", slug: "prometheus", color: "#E6522C" },
  { name: "Nginx", slug: "nginx", color: "#009639" },
  { name: "Git", slug: "git", color: "#F05032" },
  { name: "MySQL", slug: "mysql", color: "#4479A1" },
  { name: "Redis", slug: "redis", color: "#DC382D" },
  { name: "Jenkins", slug: "jenkins", color: "#D24939" },
  { name: "Grafana", slug: "grafana", color: "#F46800" },
  { name: "Terraform", slug: "terraform", color: "#844FBA" },
];

export function Sponsors({ id }: AnimatedProps) {
  const duplicated = [...techStack, ...techStack];

  return (
    <section
      id={id}
      className="w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground py-16"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-center text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-pink-600 dark:from-cyan-600 dark:to-cyan-700">
            我的技术栈（虽然都不太熟）
          </span>
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative w-full overflow-hidden"
      >
        <div
          className="flex animate-infinite-scroll"
          style={{ width: "max-content" }}
        >
          {duplicated.map((tech, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <div className="flex flex-col items-center gap-3 px-8 py-5 rounded-xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-sm hover:bg-white/10 dark:hover:bg-white/10 transition-colors duration-300 cursor-default">
                {/* SVG 图标 */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color.replace("#", "")}`}
                  alt={tech.name}
                  className="w-10 h-10"
                  loading="lazy"
                />
                {/* 名称 + 光点 */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: tech.color,
                      boxShadow: `0 0 8px ${tech.color}60`,
                    }}
                  />
                  <span className="text-sm font-medium whitespace-nowrap opacity-90">
                    {tech.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 两侧渐变遮罩 */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      </motion.div>
    </section>
  );
}
