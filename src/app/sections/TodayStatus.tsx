"use client";

import { motion } from "framer-motion";
import { Coffee, Brain, Moon, Sparkles, Target, Terminal as LogIcon } from "lucide-react";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import type { AnimatedProps } from "@/types/motion";

export function TodayStatus({ id }: AnimatedProps) {
  // Funny DevOps mock system logs
  const systemLogs = [
    { type: "SUCCESS", time: "08:30:00", text: "咖啡因摄入完毕，基本生命特征开始上线。" },
    { type: "INFO", time: "10:15:32", text: "发现 K8s 容器崩溃，执行终极治愈方案：重启。" },
    { type: "WARNING", time: "13:45:12", text: "捕获到潜在的开会企图，已自动装作写代码拦截。" },
    { type: "ERROR", time: "15:20:05", text: "Nginx 再次抛出 404，完全在我的预料之中。" },
  ];

  return (
    <section id={id} className="py-20 relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 mx-auto mb-6"
          >
            <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
          >
            我的{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
              今日状态
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            这是一个动态的数据仪表盘。除了下方的常规系统参数，你还可以在右侧向我发送模拟的 curl 请求。
          </motion.p>
        </div>

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Status widgets */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Dashboard Card Wrapper */}
            <div className="flex-1 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800/80 shadow-md flex flex-col justify-between gap-6">
              
              {/* Header section with live status badge */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <span className="font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-500" />
                  系统运行状态
                </span>
                
                {/* Slacking Indicator */}
                <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 border border-emerald-500/20">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    正常摸鱼中
                  </span>
                </div>
              </div>

              {/* Core DevOps gauge indices */}
              <div className="space-y-5">
                {/* Index 1: Coffee Level */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <Coffee className="w-4 h-4 text-amber-500" />
                      ☕ 咖啡续航 (Coffee Fuel)
                    </span>
                    <span className="text-amber-500">85% (高能就绪)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800/50">
                    <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" style={{ width: "85%" }} />
                  </div>
                </div>

                {/* Index 2: Brain CPU activity */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <Brain className="w-4 h-4 text-cyan-500" />
                      🧠 脑电波状态 (Brain CPU)
                    </span>
                    <span className="text-cyan-500">12% (低频维持生命)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800/50">
                    <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" style={{ width: "12%" }} />
                  </div>
                </div>

                {/* Index 3: Sleep level */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <Moon className="w-4 h-4 text-purple-500" />
                      💤 睡眠负债 (Sleep Debt)
                    </span>
                    <span className="text-purple-500">99% (严重欠费)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800/50">
                    <div className="h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full" style={{ width: "99%" }} />
                  </div>
                </div>
              </div>

              {/* Current primary mission card */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-900">
                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 flex items-center gap-1.5 mb-2.5">
                  <Target className="w-4 h-4 text-cyan-500" />
                  🎯 今日核心使命
                </span>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed pl-1 border-l-2 border-cyan-500">
                  正在全力修复“系统和我只有一个能跑路”的关键业务逻辑缺陷。
                </p>
              </div>

              {/* Simulated system console log snippet */}
              <div className="rounded-xl border border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-slate-950/60 overflow-hidden font-mono text-xs flex flex-col">
                <div className="bg-slate-200/50 dark:bg-slate-900 px-3 py-2 border-b border-slate-200 dark:border-slate-900 flex items-center gap-1.5 text-slate-500 select-none">
                  <LogIcon className="w-3.5 h-3.5 text-slate-400" />
                  <span>system_daemon.log</span>
                </div>
                <div className="p-3 space-y-1.5 text-slate-600 dark:text-slate-400 text-left select-all max-h-[110px] overflow-y-auto">
                  {systemLogs.map((log, idx) => {
                    const colorMap = {
                      SUCCESS: "text-emerald-500",
                      INFO: "text-cyan-500",
                      WARNING: "text-amber-500",
                      ERROR: "text-rose-500",
                    };
                    return (
                      <div key={idx} className="leading-relaxed">
                        <span className="text-slate-400">[{log.time}]</span>{" "}
                        <span className={colorMap[log.type as keyof typeof colorMap] + " font-bold"}>
                          {log.type}
                        </span>{" "}
                        <span>{log.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive terminal (strictly fixed at 380px) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <InteractiveTerminal />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
