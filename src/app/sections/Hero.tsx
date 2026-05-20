"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { AnimatedProps } from "@/types/motion";
import { motion } from "framer-motion";

export function Hero({ id }: AnimatedProps) {
  const techStack = [
    "Linux 不会", 
    "Docker 没装", 
    "Kubernetes 卸载精通", 
    "Ansible 还没过一遍", 
    "Python 仅限 Hello World", 
    "Shell 经常写错", 
    "Prometheus 告警全屏", 
    "Nginx 只会 404"
  ];

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-emerald-500/30 dark:from-blue-500/20 dark:via-cyan-500/20 dark:to-emerald-500/20 rounded-full blur-3xl animate-slow-spin"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[1000px] h-[1000px] bg-gradient-to-l from-emerald-500/30 via-blue-500/30 to-cyan-500/30 dark:from-emerald-500/20 dark:via-blue-500/20 dark:to-cyan-500/20 rounded-full blur-3xl animate-slow-spin-reverse"></div>
        <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/20 via-cyan-500/20 to-transparent dark:from-blue-500/10 dark:via-cyan-500/10 rounded-full blur-3xl animate-slow-spin-reverse delay-75"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-bl from-emerald-500/20 via-cyan-500/20 to-transparent dark:from-emerald-500/10 dark:via-cyan-500/10 rounded-full blur-3xl animate-slow-spin delay-75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background"></div>
        <div className="absolute inset-0 opacity-30 mix-blend-overlay"></div>
      </div>
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Badge variant="outline" className="px-2.5 py-0.5 border-cyan-500/30 text-cyan-600 dark:text-cyan-400 rounded-full bg-cyan-500/5 backdrop-blur-sm text-xs md:text-sm" style={{ fontFamily: 'CartoonFont' }}>
            👋 你好，我是 Yongqi
          </Badge>
        </motion.div>
        
        <div className="relative mb-12">
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 pb-2 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            互联网废物，系统和我，有一个能跑路
          </motion.h1>
        </div>

        <motion.p
          className="text-lg md:text-xl text-foreground/60 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          我是公司的砖，哪里需要哪里搬；我也是公司的草，风吹两边倒。
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="px-3 py-1 bg-white/5 dark:bg-white/5 border border-white/10 text-foreground/80">
              {tech}
            </Badge>
          ))}
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-6 text-lg rounded-2xl transition-all duration-300 shadow-lg shadow-cyan-500/20 flex items-center gap-2 group">
              我的项目
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              className="border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm px-8 py-6 text-lg rounded-2xl transition-all duration-300 flex items-center gap-2"
            >
              技术文档
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

  );
}
