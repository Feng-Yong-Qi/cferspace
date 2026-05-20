"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Copy, Check, Play, RotateCcw, Loader2 } from "lucide-react";

export function InteractiveTerminal() {
  const [origin, setOrigin] = useState("");
  const [copied, setCopied] = useState(false);
  const [terminalState, setTerminalState] = useState<"idle" | "running" | "done">("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const curlCommand = `curl -s ${origin || "https://cfer.space"}/api/status`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(curlCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy command", err);
    }
  };

  const handleRun = () => {
    if (terminalState === "running") return;
    setTerminalState("running");
    setProgress(0);

    // Simulate standard connection and download progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTerminalState("done");
          return 100;
        }
        // Increment progress by randomized chunks
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 150);
  };

  const handleReset = () => {
    setTerminalState("idle");
    setProgress(0);
  };

  return (
    <div className="relative w-full h-[480px] rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/30 flex flex-col">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900/60 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            {/* macOS window control buttons */}
            <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors inline-block cursor-pointer" onClick={handleReset}></span>
            <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors inline-block cursor-pointer"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors inline-block cursor-pointer" onClick={handleRun}></span>
            
            {/* Terminal Title */}
            <span className="ml-3 font-mono text-xs text-slate-400 select-none flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-cyan-500" />
              yongqi@cferspace: ~
            </span>
          </div>
          
          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/5 active:scale-95 transition-all"
              title="复制命令"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-6 font-mono text-sm leading-relaxed text-slate-300 overflow-y-auto text-left select-text scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
          {/* Active Command Line */}
          <div className="flex flex-wrap items-center gap-x-2 mb-4">
            <span className="text-emerald-500">guest@cferspace</span>
            <span className="text-slate-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-slate-400">$</span>
            <span className="text-slate-100 font-medium select-all break-all">{curlCommand}</span>
            {terminalState === "idle" && (
              <span className="w-2.5 h-4 bg-emerald-400 animate-pulse ml-0.5 inline-block"></span>
            )}
          </div>

          {/* Prompt to run when Idle */}
          {terminalState === "idle" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 flex flex-col items-center justify-center py-8 text-center"
            >
              <p className="text-slate-500 text-xs mb-4">点击下方的 Run 按钮向系统发送 curl 请求以读取当前状态</p>
              <button
                onClick={handleRun}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600/20 hover:bg-cyan-600 text-cyan-400 hover:text-white border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 shadow-md hover:shadow-cyan-500/20 font-medium text-xs active:scale-95"
              >
                <Play className="w-4 h-4 text-cyan-400 group-hover:text-white" />
                Run curl Command
              </button>
            </motion.div>
          )}

          {/* Running State */}
          {terminalState === "running" && (
            <div className="space-y-2 mt-4 text-xs md:text-sm text-cyan-400/90 select-none">
              <div className="flex items-center gap-2">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                <span>Connecting to {origin.replace(/^https?:\/\//, "")}:443...</span>
              </div>
              {progress > 30 && (
                <div className="text-emerald-500">✔ HTTP/2 200 OK | application/json</div>
              )}
              {progress > 60 && (
                <div className="text-amber-500">⚡ Fetching system status payload...</div>
              )}
              
              {/* DevOps Progress Bar */}
              <div className="mt-4">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Downloading payload</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Finished State - Showing JSON Response */}
          <AnimatePresence>
            {terminalState === "done" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-6 space-y-4"
              >
                {/* Simulated curl response metadata */}
                <div className="text-xs text-slate-500 select-none border-b border-slate-900 pb-2 mb-2 flex items-center justify-between">
                  <span>Response Headers: application/json; charset=utf-8</span>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" /> Clear
                  </button>
                </div>

                {/* Hand-styled JSON syntax highliting */}
                <div className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto select-all">
                  <span className="text-slate-400">{"{"}</span>
                  <div className="pl-4 border-l border-slate-900 ml-1">
                    <div>
                      <span className="text-cyan-400">{"\"status\""}</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-400">{"\"online\""}</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">{"\"uptime\""}</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-400">{"\"946,720,000s (~26 years)\""}</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">{"\"cpu_usage\""}</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-400">{"\"2.5% (mainly coffee digesting)\""}</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">{"\"memory_usage\""}</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-400">{"\"98% (trying to remember config file locations)\""}</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">{"\"coffee_fuel\""}</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-400">{"\"85% (high-performance mode)\""}</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">{"\"sleep_quality\""}</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-rose-400">{"\"404 Not Found\""}</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">{"\"bugs_created\""}</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-amber-400">1403</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">{"\"bugs_fixed\""}</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-amber-400">2</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">{"\"pack_bags_ready\""}</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-rose-400">true</span>
                      <span className="text-slate-400">,</span>
                    </div>
                    <div>
                      <span className="text-cyan-400">{"\"message\""}</span>
                      <span className="text-slate-400">: </span>
                      <span className="text-emerald-400">{"\"System running smoothly. If it breaks, I'm already packing my bags.\""}</span>
                    </div>
                  </div>
                  <span className="text-slate-400">{"}"}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    </div>
  );
}
