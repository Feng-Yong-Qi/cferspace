import type { ProjectProps } from "@/types";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({
  icon,
  title,
  description,
  href,
  tags,
  className,
}: ProjectProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 z-0 hidden rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100 sm:block"></div>
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative block p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 h-full group/card"
      >
        <div className="flex justify-between items-start mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <ExternalLink className="w-5 h-5 text-slate-400 group-hover/card:text-cyan-500 transition-colors" />
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover/card:text-cyan-600 dark:group-hover/card:text-cyan-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-slate-100/50 dark:bg-slate-800/50 text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </a>
    </motion.div>
  );
}
