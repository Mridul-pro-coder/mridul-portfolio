"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectFilter, { type Filter } from "@/components/projects/ProjectFilter";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/lib/data";

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const rest = projects.filter((p) => !p.featured);
  const list = filter === "All" ? rest : rest.filter((p) => p.category === filter);

  return (
    <div className="mt-8">
      <ProjectFilter value={filter} onChange={setFilter} />

      <AnimatePresence mode="wait">
        <motion.ul
          key={filter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-5 grid list-none grid-cols-1 gap-4 md:grid-cols-2"
        >
          {list.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </motion.ul>
      </AnimatePresence>

      {list.length === 0 && (
        <p className="mt-6 text-center text-sm text-muted">Nothing in this category yet.</p>
      )}
    </div>
  );
}
