"use client";

import { FAQItem } from "@/components/sections/faq/FaqItem";
import type { FAQItemProps } from "@/types";
import type { AnimatedProps } from "@/types/motion";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState } from "react";

const faqs: FAQItemProps[] = [
  {
    category: "日常",
    question: "你一天的工作流程是什么？",
    answer:
      "早上开机 → 打开终端假装在忙 → 摸鱼到中午 → 午饭后困到不行 → 下午三点喝咖啡续命 → 五点开始真正干活 → 六点发现干不完 → 加班到九点 → 回家继续焦虑。周而复始，生生不息。",
  },
  {
    category: "技术",
    question: "你真的会 Kubernetes 吗？",
    answer:
      "会，会拼写。kubectl get pods 之后的事情就交给运气了。偶尔 Pod 起不来我就反复 delete 再 apply，业内称之为'重启大法'。据说这已经解决了我 90% 的问题，剩下 10% 靠重装系统。",
  },
  {
    category: "技术",
    question: "遇到线上故障你怎么处理？",
    answer:
      "第一步：慌。第二步：非常慌。第三步：打开 Google 搜报错信息。第四步：把 Stack Overflow 上的方案全试一遍。第五步：发现是自己改了个不该改的配置。第六步：偷偷改回去，然后在群里说'已修复，根因是网络抖动'。",
  },
  {
    category: "生存",
    question: "你的薪资和能力匹配吗？",
    answer:
      "完全匹配。我的能力对不起这份工资，这份工资也对不起我的加班时长。双方互相伤害，达成了一种微妙的平衡。经济学上称之为'纳什均衡'，我称之为'活着就好'。",
  },
  {
    category: "生存",
    question: "你有什么职业规划？",
    answer:
      "短期目标：活过试用期。中期目标：不被裁员。长期目标：攒够钱开一家奶茶店，彻底告别 IT 行业。备选方案：中彩票。",
  },
  {
    category: "哲学",
    question: "你觉得运维的意义是什么？",
    answer:
      "运维的最高境界是让别人觉得你什么都没做，但一切都在正常运行。然而现实是：你做了很多，一切还是会崩。所以运维的真正意义大概是——让你学会在崩溃中保持微笑。",
  },
  {
    category: "摸鱼",
    question: "上班摸鱼有什么技巧？",
    answer:
      "保持终端永远开着一个 htop，屏幕看起来很忙的样子。开会时疯狂点头并说'这个方案可以，但我们需要评估一下风险'。遇到不会的问题就说'我研究一下'，然后研究到下班。核心技能：表情管理。",
  },
  {
    category: "日常",
    question: "你写的代码有注释吗？",
    answer:
      "有的。比如 '// TODO: 以后再改' 和 '// 不要动这里，会崩' 和 '// 我也不知道为什么能跑，但别改'。这些注释已经成为了团队的精神支柱和重要文化遗产。",
  },
];

const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

export function FAQ({ id }: AnimatedProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("全部");

  const filteredFaqs =
    selectedCategory === "全部"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <section id={id} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 opacity-10 dark:opacity-20" />
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-cyan-800/30 mx-auto mb-4"
              initial={{ rotate: -15 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            你可能想问{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-pink-600 dark:from-cyan-600 dark:to-cyan-700">
              （但最好别问）
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            以下回答均为真实搬砖经历，如有雷同，说明你也是苦逼的同行 🤡
          </motion.p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delayChildren: 0.2 }}
        >
          <motion.button
            onClick={() => setSelectedCategory("全部")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === "全部"
                ? "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            全部
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div layout className="max-w-3xl mx-auto space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
