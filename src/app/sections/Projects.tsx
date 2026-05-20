"use client";

import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import type { ProjectProps } from "@/types";
import type { AnimatedProps } from "@/types/motion";
import { motion } from "framer-motion";
import { Activity, Code, Server, Shield, Sparkles } from "lucide-react";

const projects: ProjectProps[] = [
  {
    icon: <Server className="w-6 h-6 text-blue-500" />,
    title: "K8s 自动化部署平台",
    description: "基于 Jenkins、GitLab CI 和 Helm 构建的自动化发布流水线，实现业务容器化秒级交付。",
    href: "#",
    tags: ["Kubernetes", "CI/CD", "Helm"],
    className: "md:col-span-2",
  },
  {
    icon: <Activity className="w-6 h-6 text-purple-500" />,
    title: "立体化监控系统",
    description: "深度定制 Prometheus 与 Grafana，涵盖从硬件、OS 到业务指标的全链路实时监控与告警。",
    href: "#",
    tags: ["Prometheus", "Grafana"],
    className: "md:col-span-1",
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-500" />,
    title: "堡垒机与安全审计",
    description: "构建基于 JumpServer 的统一接入平台，实现对大规模服务器集群的安全访问控制与行为审计。",
    href: "#",
    tags: ["JumpServer", "Security"],
    className: "md:col-span-1",
  },
  {
    icon: <Code className="w-6 h-6 text-orange-500" />,
    title: "运维自动化工具箱",
    description: "自研 Shell/Python 脚本集，包含自动巡检、日志分析及数据库备份等多种日常运维利器。",
    href: "https://script.merma.cn/",
    tags: ["Python", "Shell", "Ansible"],
    className: "md:col-span-2",
  },
];

export function Projects({ id }: AnimatedProps) {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 mx-auto mb-6"
          >
            <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
          >
            我的{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-purple-600">
              数字生态
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            这里是我在互联网各处的足迹，包含了我的博客、工具以及实验性项目。
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
