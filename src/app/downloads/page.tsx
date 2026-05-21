"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Download,
  Monitor,
  Terminal,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  ArrowLeft,
  ChevronsDown,
  X,
  Database,
  Code2,
  GitBranch,
  Server,
  Cpu,
  Sparkles,
  Info,
  Check,
  Globe,
  Share2,
  Copy,
} from "lucide-react";
import Link from "next/link";

interface SoftwareConfig {
  name: string;
  icon: React.ReactNode;
  description: string;
  category: string;
  latestVersion: string;
  color: string; // Tailwind bg gradient class
  glowClass: string; // Tailwind glow class on hover
  textColor: string; // Tailwind color class for text highlights
  badgeColor: string; // Background highlight for icons
  versions: string[];
  formats: { ext: string; platform: "linux" | "windows" | "macos"; label?: string }[];
  urlTemplate: (version: string, ext: string, label?: string) => string;
}

const softwareConfigs: SoftwareConfig[] = [
  {
    name: "Nginx",
    icon: <Terminal className="w-6 h-6" />,
    description: "高性能 HTTP 和反向代理 Web 服务器，以超高的并发性能著称。",
    category: "Web 服务",
    latestVersion: "1.31.0",
    color: "from-emerald-500 to-teal-600",
    glowClass: "group-hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.35)]",
    textColor: "text-emerald-500 dark:text-emerald-400",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    versions: [
      "1.31.0", "1.30.1", "1.30.0",
      "1.29.8", "1.29.7", "1.29.6", "1.29.5", "1.29.4", "1.29.3", "1.29.2", "1.29.1", "1.29.0",
      "1.27.5", "1.27.4", "1.27.3", "1.27.2", "1.27.1", "1.27.0",
      "1.26.3", "1.26.2", "1.26.1", "1.26.0",
      "1.24.0", "1.22.1", "1.20.2"
    ],
    formats: [
      { ext: "tar.gz", platform: "linux" },
      { ext: "zip", platform: "windows" },
    ],
    urlTemplate: (v, ext) => `https://nginx.org/download/nginx-${v}.${ext}`,
  },
  {
    name: "Redis",
    icon: <Database className="w-6 h-6" />,
    description: "极致快速的开源 Key-Value 内存数据库，广泛用于缓存、消息队列与会话存储。",
    category: "数据库",
    latestVersion: "7.2.4",
    color: "from-rose-500 to-red-600",
    glowClass: "group-hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.35)]",
    textColor: "text-rose-500 dark:text-rose-400",
    badgeColor: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    versions: [
      "7.2.4", "7.2.3", "7.2.2", "7.2.1", "7.2.0",
      "7.0.15", "7.0.14", "7.0.13", "7.0.12",
      "6.2.14", "6.2.13", "6.2.12", "6.2.11",
      "6.0.20", "5.0.14"
    ],
    formats: [
      { ext: "tar.gz", platform: "linux" },
    ],
    urlTemplate: (v, ext) => `https://download.redis.io/releases/redis-${v}.${ext}`,
  },
  {
    name: "Node.js",
    icon: <Code2 className="w-6 h-6" />,
    description: "基于 Chrome V8 引擎的高效 JavaScript 运行时，助力全栈与云原生开发。",
    category: "开发环境",
    latestVersion: "21.7.1",
    color: "from-green-500 to-emerald-600",
    glowClass: "group-hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.35)]",
    textColor: "text-green-500 dark:text-green-400",
    badgeColor: "bg-green-500/10 text-green-500 border-green-500/20",
    versions: [
      "21.7.1", "21.7.0",
      "20.11.1", "20.11.0", "20.10.0",
      "18.19.1", "18.19.0", "18.18.2",
      "16.20.2", "16.20.1", "14.21.3"
    ],
    formats: [
      { ext: "msi", platform: "windows" },
      { ext: "pkg", platform: "macos" },
      { ext: "tar.gz", platform: "linux" },
    ],
    urlTemplate: (v, ext) =>
      `https://nodejs.org/dist/v${v}/node-v${v}-${ext === "tar.gz" ? "linux-x64.tar.gz" : ext === "msi" ? "x64.msi" : "x64.pkg"}`,
  },
  {
    name: "Git",
    icon: <GitBranch className="w-6 h-6" />,
    description: "开源的分布式版本控制系统，敏捷高效地处理从极小到极大的项目版本管理。",
    category: "版本控制",
    latestVersion: "2.44.0",
    color: "from-orange-500 to-red-500",
    glowClass: "group-hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.35)]",
    textColor: "text-orange-500 dark:text-orange-400",
    badgeColor: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    versions: [
      "2.44.0", "2.43.0", "2.42.1", "2.42.0",
      "2.41.0", "2.40.1", "2.39.3", "2.38.2",
      "2.37.3", "2.36.2", "2.35.5"
    ],
    formats: [
      { ext: "exe", platform: "windows" },
      { ext: "tar.gz", platform: "linux" },
    ],
    urlTemplate: (v, ext) =>
      ext === "exe"
        ? `https://github.com/git-for-windows/git/releases/download/v${v}.windows.1/Git-${v}-64-bit.exe`
        : `https://mirrors.edge.kernel.org/pub/software/scm/git/git-${v}.tar.gz`,
  },
  {
    name: "MySQL",
    icon: <Server className="w-6 h-6" />,
    description: "全球最受欢迎的开源关系型数据库管理系统，卓越的性能与高可靠性之选。",
    category: "数据库",
    latestVersion: "8.0.45",
    color: "from-blue-500 to-indigo-600",
    glowClass: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.35)]",
    textColor: "text-blue-500 dark:text-blue-400",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    versions: [
      "8.0.45", "8.0.44", "8.0.43", "8.0.42", "8.0.41",
      "8.0.40", "8.0.39", "8.0.37", "8.0.36", "8.0.35"
    ],
    formats: [
      { ext: "tar.xz", platform: "linux", label: "glibc 2.17" },
      { ext: "tar.xz", platform: "linux", label: "glibc 2.28" },
    ],
    urlTemplate: (v, ext, label) => {
      const glibc = label && label.includes("2.17") ? "2.17" : "2.28";
      return `https://downloads.mysql.com/archives/get/p/23/file/mysql-${v}-linux-glibc${glibc}-x86_64.tar.xz`;
    },
  },
  {
    name: "Python",
    icon: <Cpu className="w-6 h-6" />,
    description: "优雅强大的面向对象解释型高级编程语言，人工智能与数据科学的基石。",
    category: "开发环境",
    latestVersion: "3.12.2",
    color: "from-yellow-500 to-blue-500",
    glowClass: "group-hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.35)]",
    textColor: "text-amber-500 dark:text-amber-400",
    badgeColor: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    versions: [
      "3.12.2", "3.12.1", "3.12.0",
      "3.11.8", "3.11.7", "3.11.6",
      "3.10.13", "3.10.12",
      "3.9.18", "3.8.18"
    ],
    formats: [
      { ext: "exe", platform: "windows" },
      { ext: "tgz", platform: "linux" },
    ],
    urlTemplate: (v, ext) =>
      ext === "exe"
        ? `https://www.python.org/ftp/python/${v}/python-${v}-amd64.exe`
        : `https://www.python.org/ftp/python/${v}/Python-${v}.tgz`,
  },
];

function groupByMinor(versions: string[]): Record<string, string[]> {
  const groups: Record<string, string[]> = {};
  for (const v of versions) {
    const parts = v.split(".");
    const key = `${parts[0]}.${parts[1]}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(v);
  }
  return groups;
}

function PlatformBadge({
  platform,
  showLabel = true,
  className = "",
  customLabel,
}: {
  platform: "linux" | "windows" | "macos";
  showLabel?: boolean;
  className?: string;
  customLabel?: string;
}) {
  const configs = {
    windows: {
      label: "Windows",
      icon: <Monitor className="w-3.5 h-3.5" />,
      style:
        "bg-blue-500/10 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 border-blue-500/25 hover:border-blue-500/40",
    },
    linux: {
      label: "Linux",
      icon: <Terminal className="w-3.5 h-3.5" />,
      style:
        "bg-amber-500/10 dark:bg-amber-500/5 text-amber-600 dark:text-amber-400 border-amber-500/25 hover:border-amber-500/40",
    },
    macos: {
      label: "macOS",
      icon: <Cpu className="w-3.5 h-3.5" />,
      style:
        "bg-purple-500/10 dark:bg-purple-500/5 text-purple-600 dark:text-purple-400 border-purple-500/25 hover:border-purple-500/40",
    },
  };

  const cfg = configs[platform];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide transition-all border select-none ${cfg.style} ${className}`}
    >
      {cfg.icon}
      {showLabel && <span className="hidden sm:inline-block">{customLabel || cfg.label}</span>}
    </span>
  );
}

export default function Downloads() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [selectedSoftware, setSelectedSoftware] = useState<SoftwareConfig | null>(null);
  const [modalSearch, setModalSearch] = useState("");
  const [modalPlatformFilter, setModalPlatformFilter] = useState<string>("all");
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
 
  // 当 Modal 开启时，禁用 body 滚动，防止多重滚动带来体验下降
  useEffect(() => {
    if (selectedSoftware) {
      document.body.style.overflow = "hidden";
      // 重置 Modal 内部的子平台筛选
      setModalPlatformFilter("all");
      setModalSearch("");
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedSoftware]);
 
  // ESC 键自动关闭 Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedSoftware(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
 
  // 监控子平台筛选与搜索变化，瞬时归零滚动位置
  // 不使用 behavior:"smooth" —— smooth 会让旧内容以动画形式可见地滑出视口，留下痕迹
  // 直接赋值 scrollTop = 0，在同一帧内完成归位，视觉上零感知
  useEffect(() => {
    const scrollContainer = document.getElementById("modal-versions-scroll");
    if (scrollContainer) {
      scrollContainer.scrollTop = 0;
    }
  }, [modalPlatformFilter, modalSearch]);
 
  const filteredConfigs = softwareConfigs.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || s.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopySuccess(id);
      setTimeout(() => setCopySuccess(null), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden text-foreground selection:bg-cyan-500/30 selection:text-cyan-400">
      {/* 首页同款氛围背景光斑 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] max-w-[800px] bg-gradient-to-br from-blue-500/15 via-cyan-500/15 to-emerald-500/5 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-emerald-500/5 rounded-full blur-[120px] opacity-70 animate-pulse"
          style={{ animationDuration: "12s" }}
        />
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] max-w-[800px] bg-gradient-to-tr from-purple-500/15 via-blue-500/15 to-cyan-500/5 dark:from-purple-500/10 dark:via-blue-500/10 dark:to-cyan-500/5 rounded-full blur-[120px] opacity-70 animate-pulse"
          style={{ animationDuration: "15s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        {/* 顶部标题区 */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 text-muted-foreground hover:text-foreground backdrop-blur-sm transition-all hover:scale-105 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              返回主页
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-4 tracking-tight"
          >
            常用软件{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500">
              下载中心
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 max-w-xl text-base md:text-lg"
          >
            精心整理的高效开发与系统部署工具包，无广告、极速官方直链，助力你的开发与运维体验。
          </motion.p>
        </div>

        {/* 搜索与过滤栏 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-4 mb-12 max-w-3xl mx-auto"
        >
          <div className="relative flex-1 group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
            <input
              type="text"
              placeholder="搜索软件名称或描述信息..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all text-sm shadow-inner"
            />
          </div>
          <div className="flex gap-2 p-1 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/30 dark:bg-slate-900/30 backdrop-blur-md overflow-x-auto">
            {([
              { id: "all", label: "全部软件" },
              { id: "数据库", label: "数据库" },
              { id: "Web 服务", label: "Web 服务" },
              { id: "开发环境", label: "开发环境" },
              { id: "版本控制", label: "版本控制" },
            ] as const).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  categoryFilter === cat.id
                    ? "bg-slate-900 text-white dark:bg-white dark:text-black shadow-sm"
                    : "text-slate-500 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 软件网格列表 - 不使用 AnimatePresence exit 动画以避免旧卡片可见地滑出/缩小消失 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConfigs.map((software, index) => (
            <motion.div
              key={software.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              className="group relative"
            >
              {/* 卡片实体 */}
              <div
                onClick={() => setSelectedSoftware(software)}
                className={`cursor-pointer h-full flex flex-col justify-between p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white/45 dark:bg-slate-950/45 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-2xl ${software.glowClass}`}
              >
                <div>
                  {/* 卡片头部 */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl ${software.badgeColor} border`}>
                      {software.icon}
                    </div>
                    <Badge variant="outline" className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase border-cyan-500/20 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400">
                      Stable {software.latestVersion}
                    </Badge>
                  </div>

                  {/* 卡片文案 */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {software.name}
                  </h3>
                  <span className="text-[10px] font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase block mb-3">
                    {software.category}
                  </span>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                    {software.description}
                  </p>
                </div>

                {/* 卡片底部操作与平台 */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {software.formats.map((f, idx) => (
                      <PlatformBadge key={idx} platform={f.platform} showLabel={false} className="px-2 py-0.5" />
                    ))}
                  </div>
                  <button className="flex items-center gap-0.5 text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors shrink-0">
                    获取版本
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 无结果展示 */}
        {filteredConfigs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white/20 dark:bg-slate-900/20 backdrop-blur-md border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl"
          >
            <Info className="w-12 h-12 text-slate-400 mx-auto mb-4 animate-bounce" />
            <h3 className="text-lg font-bold mb-1">未找到匹配软件</h3>
            <p className="text-sm text-slate-400">试试其他关键词，或者清除平台过滤限制。</p>
          </motion.div>
        )}
      </div>

      {/* 历史版本 Modal (固定大小) */}
      <AnimatePresence>
        {selectedSoftware && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* 遮罩层 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSoftware(null)}
              className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md"
            />

            {/* 弹窗主体 - 完美锁定固定尺寸 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl h-[85vh] max-h-[680px] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl border border-slate-200 dark:border-slate-800/80 z-10"
            >

              {/* 左侧分栏：软件详情与一键稳定版下载推荐 (38% 宽度) */}
              <div className="w-full md:w-[38%] p-5 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 shrink-0">
                <div className="space-y-4 md:space-y-6">
                  {/* 发光彩色图标 */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${selectedSoftware.color} text-white shadow-lg shrink-0`}>
                      {selectedSoftware.icon}
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-black tracking-tight">{selectedSoftware.name}</h2>
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                        {selectedSoftware.category}
                      </span>
                    </div>
                  </div>
 
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 md:line-clamp-none">
                    {selectedSoftware.description}
                  </p>
                </div>
 
                {/* 推荐稳定版快速下载通道 */}
                <div className="mt-4 md:mt-8 p-3 md:p-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 dark:bg-cyan-500/5 shadow-sm space-y-3 md:space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-500 animate-spin" style={{ animationDuration: "4s" }} />
                    <span className="text-[10px] md:text-xs font-bold text-cyan-600 dark:text-cyan-400">最新稳定版推荐</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-1 gap-2 md:space-y-2">
                    {selectedSoftware.formats.map((fmt, idx) => {
                      const isMySQL = selectedSoftware.name === "MySQL";
                      const customLabel = isMySQL
                        ? `Linux (${fmt.label || "glibc 2.28"})`
                        : undefined;
                      return (
                        <a
                          key={idx}
                          href={selectedSoftware.urlTemplate(selectedSoftware.latestVersion, fmt.ext, fmt.label)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-2.5 py-2 md:px-3 md:py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-cyan-500 dark:hover:border-cyan-400 text-[10px] md:text-xs font-bold text-foreground transition-all hover:scale-[1.02] group"
                        >
                          <span className="flex items-center gap-1.5 md:gap-2">
                            <PlatformBadge
                              platform={fmt.platform}
                              showLabel={isMySQL ? true : false}
                              customLabel={customLabel}
                              className="px-1 py-0.5 border"
                            />
                            <span className="font-mono">{selectedSoftware.latestVersion}</span>
                          </span>
                          <span className="flex items-center gap-1.5 text-[9px] text-slate-400 dark:text-slate-500 group-hover:text-cyan-500 transition-colors uppercase font-mono">
                            <span className="hidden xs:inline">.{fmt.ext}</span>
                            <span className="p-1 rounded-md bg-slate-100 dark:bg-slate-900 group-hover:bg-cyan-500/10 transition-colors">
                              <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
                            </span>
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 右侧分栏：版本归档列表与搜索 (62% 宽度) */}
              <div className="flex-1 p-4 md:p-8 flex flex-col justify-between overflow-hidden">
                {/* 顶部过滤控制台：检索输入框 + 关闭按钮 + 平台分类瞬时子过滤按钮组 */}
                <div className="mb-4 md:mb-6 space-y-3 shrink-0">
                  {/* 搜索框和关闭按钮同行排列，彻底杜绝重叠 */}
                  <div className="flex items-center gap-2">
                    <div className="relative group flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
                      <input
                        type="text"
                        placeholder="搜索版本 (如 1.30)..."
                        value={modalSearch}
                        onChange={(e) => setModalSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all shadow-inner"
                      />
                    </div>
                    <button
                      onClick={() => setSelectedSoftware(null)}
                      title="关闭 (ESC)"
                      className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-red-50 dark:hover:bg-red-950/30 text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-all active:scale-90 shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 弹窗内部子平台筛选按钮：一目了然区分环境并支持极速过滤 */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 mr-1.5 uppercase tracking-wide">
                      过滤环境:
                    </span>
                    <button
                      onClick={() => setModalPlatformFilter("all")}
                      className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all border ${
                        modalPlatformFilter === "all"
                          ? "bg-slate-900 text-white dark:bg-white dark:text-black border-slate-900 dark:border-white shadow-sm"
                          : "text-slate-500 hover:text-foreground border-slate-200/60 dark:border-slate-800/80 bg-slate-100/30 dark:bg-slate-900/10"
                      }`}
                    >
                      全部系统
                    </button>
                    {(() => {
                      // 动态收集当前软件所有的唯一子过滤类型 (label 或 platform)
                      const uniqueFilters = new Set<string>();
                      selectedSoftware.formats.forEach((f) => {
                        uniqueFilters.add(f.label || f.platform);
                      });

                      return Array.from(uniqueFilters).map((filterId) => {
                        let filterLabel = filterId;
                        if (filterId === "windows") filterLabel = "Windows";
                        if (filterId === "linux") filterLabel = "Linux";
                        if (filterId === "macos") filterLabel = "macOS";

                        return (
                          <button
                            key={filterId}
                            onClick={() => setModalPlatformFilter(filterId)}
                            className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all border ${
                              modalPlatformFilter === filterId
                                ? "bg-slate-900 text-white dark:bg-white dark:text-black border-slate-900 dark:border-white shadow-sm"
                                : "text-slate-500 hover:text-foreground border-slate-200/60 dark:border-slate-800/80 bg-slate-100/30 dark:bg-slate-900/10"
                            }`}
                          >
                            {filterLabel}
                          </button>
                        );
                      });
                    })()}
                  </div>
                </div>
 
                {/* 历史版本滚动区 - overflow-y: auto + scrollbar-gutter: stable */}
                <div
                  id="modal-versions-scroll"
                  className="flex-1 overflow-y-auto space-y-6"
                  style={{ scrollbarGutter: "stable" }}
                >
                  {(() => {
                    const filteredVersions = selectedSoftware.versions.filter((v) =>
                      v.toLowerCase().includes(modalSearch.toLowerCase())
                    );
 
                    // 在 Modal 内智能过滤格式：匹配自定义 label 或 platform
                    const activeFormats = selectedSoftware.formats.filter(
                      (f) =>
                        modalPlatformFilter === "all" ||
                        f.platform === modalPlatformFilter ||
                        f.label === modalPlatformFilter
                    );

                    if (filteredVersions.length === 0 || activeFormats.length === 0) {
                      return (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400 py-16">
                          <Info className="w-8 h-8 mb-2 opacity-50" />
                          <p className="text-xs">未找到符合条件的版本包</p>
                        </div>
                      );
                    }

                    const groups = groupByMinor(filteredVersions);
                    let hasVisibleItems = false;

                    const renderedGroups = Object.keys(groups).map((minor) => {
                      const minorVersions = groups[minor];

                      // 渲染该小版本下的所有匹配平台下载项
                      const itemsToRender = minorVersions.flatMap((version) =>
                        activeFormats.map((fmt) => {
                          const downloadUrl = selectedSoftware.urlTemplate(version, fmt.ext, fmt.label);
                          const itemUniqueId = `${version}-${fmt.ext}-${fmt.label || fmt.platform}`;
                          const isCopied = copySuccess === itemUniqueId;

                          const isMySQL = selectedSoftware.name === "MySQL";
                          const customLabel = isMySQL
                            ? `Linux (${fmt.label || "glibc 2.28"})`
                            : undefined;

                          return (
                            <div
                              key={itemUniqueId}
                              className="flex items-center justify-between p-2.5 rounded-xl border border-slate-100 dark:border-slate-900 hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-all group"
                            >
                              <div className="flex items-center gap-3">
                                {/* 升级为清晰的彩色带图标系统药丸徽章，一目了然区分环境 */}
                                <PlatformBadge
                                  platform={fmt.platform}
                                  showLabel={true}
                                  customLabel={customLabel}
                                  className="px-2 py-0.5 border"
                                />
                                <div>
                                  <span className="text-xs font-bold font-mono">{version}</span>
                                  <span className="text-[9px] ml-2 text-slate-400 dark:text-slate-500 uppercase">
                                    .{fmt.ext}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-1.5 opacity-85 group-hover:opacity-100 transition-opacity">
                                {/* 复制链接 */}
                                <button
                                  onClick={() => handleCopyLink(downloadUrl, itemUniqueId)}
                                  title="复制直链"
                                  className={`w-8 h-8 rounded-lg border transition-all flex items-center justify-center active:scale-95 shrink-0 ${
                                    isCopied
                                      ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/5"
                                      : "border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400"
                                  }`}
                                >
                                  {isCopied ? (
                                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                                  ) : (
                                    <Copy className="w-3.5 h-3.5" />
                                  )}
                                </button>

                                {/* 下载按钮 */}
                                <a
                                  href={downloadUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-white dark:hover:text-black transition-all active:scale-95"
                                >
                                  <Download className="w-3 h-3" />
                                </a>
                              </div>
                            </div>
                          );
                        })
                      );

                      if (itemsToRender.length > 0) {
                        hasVisibleItems = true;
                        return (
                          <div key={minor} className="space-y-2">
                            <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest pl-1">
                              {selectedSoftware.name} {minor}.x 分支
                            </h4>
                            <div className="space-y-1.5">{itemsToRender}</div>
                          </div>
                        );
                      }
                      return null;
                    });

                    if (!hasVisibleItems) {
                      return (
                        <div className="h-full flex flex-col items-center justify-center text-slate-400 py-16">
                          <Info className="w-8 h-8 mb-2 opacity-50" />
                          <p className="text-xs">该分支下没有匹配所选系统环境的包</p>
                        </div>
                      );
                    }

                    return renderedGroups;
                  })()}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px] text-slate-400 flex items-center justify-between shrink-0">
                  <span>共收录 {selectedSoftware.versions.length} 个版本档案</span>
                  <span>点击复制直链，支持多线程工具下载</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
