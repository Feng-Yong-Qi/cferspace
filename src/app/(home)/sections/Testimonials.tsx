"use client";

import type { AnimatedProps } from "@/types/motion";
import { motion } from "framer-motion";
import { BarChart3, Code, Flame, Coffee } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  description: string;
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  stats: StatItem[];
  glowColor: string;
}

const statCards: StatCardProps[] = [
  {
    icon: <Code className="w-6 h-6 text-blue-500" />,
    title: "代码水平",
    subtitle: "自学成才 | 面向搜索引擎编程",
    glowColor: "from-blue-500/20 via-blue-400/20 to-blue-500/20",
    stats: [
      { value: "10万+", label: "写过的代码行数", description: "能跑的不到一半" },
      { value: "3,721", label: "修复的 Bug", description: "其中 3,720 个是自己写的" },
      { value: "99,999+", label: "Stack Overflow 复制次数", description: "Ctrl+C 才是核心竞争力" },
    ],
  },
  {
    icon: <Flame className="w-6 h-6 text-orange-500" />,
    title: "运维战绩",
    subtitle: "身经百战 | 越修越崩",
    glowColor: "from-orange-500/20 via-orange-400/20 to-orange-500/20",
    stats: [
      { value: "47", label: "搞崩服务器次数", description: "仅限今年，往年不敢统计" },
      { value: "∞", label: "Prometheus 告警数", description: "已读不回，告警随缘" },
      { value: "0", label: "线上事故", description: "因为还没上过线" },
    ],
  },
  {
    icon: <Coffee className="w-6 h-6 text-amber-500" />,
    title: "生存数据",
    subtitle: "打工人 | 用咖啡续命",
    glowColor: "from-amber-500/20 via-amber-400/20 to-amber-500/20",
    stats: [
      { value: "1,024", label: "咖啡消耗量（杯）", description: "主要靠它续命" },
      { value: "996", label: "年度加班时长（h）", description: "工资没涨，头发没了" },
      { value: "3", label: "写过的文档", description: "有 2 篇是 README" },
    ],
  },
];

function StatCard({ icon, title, subtitle, stats, glowColor }: StatCardProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl bg-gradient-to-r ${glowColor} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 sm:block`}></div>
      <div className="relative z-10 flex flex-col h-full p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200 dark:border-slate-700">
        {/* 头部：图标 + 标题 */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center justify-center w-14 h-14 rounded-full ring-2 ring-slate-100 dark:ring-slate-700 bg-white dark:bg-slate-700">
            {icon}
          </div>
          <div>
            <p className="font-semibold text-lg text-slate-900 dark:text-slate-100">
              {title}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {subtitle}
            </p>
          </div>
        </div>

        {/* 统计数据列表 */}
        <div className="flex flex-col gap-5 flex-grow">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 min-w-[80px] shrink-0">
                {stat.value}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {stat.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials({ id }: AnimatedProps) {
  return (
    <motion.section
      className="py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div id={id} className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 mx-auto mb-6"
          >
            <BarChart3 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
          >
            职业生涯{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-pink-600 dark:from-cyan-600 dark:to-cyan-700">
              数据统计
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            数据不会骗人，但我会
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {statCards.map((card, index) => (
            <StatCard key={index} {...card} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
