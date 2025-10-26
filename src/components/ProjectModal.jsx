import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (project) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-black/70"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative z-10 max-w-5xl mx-auto my-8 md:my-16"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-neutral-950">
              <div className="aspect-[16/9] bg-black">
                <img
                  src={project.images?.[0] || project.cover}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="text-neutral-300 mt-1">
                      {project.category} • {project.location} • {project.year}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="self-start rounded-full border border-white/20 hover:border-white/40 px-3 py-1 text-sm"
                  >
                    Close
                  </button>
                </div>
                <p className="mt-6 text-neutral-200 leading-relaxed max-w-3xl">
                  {project.description}
                </p>
                {project.images && project.images.length > 1 && (
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.images.slice(1).map((src, idx) => (
                      <div key={idx} className="aspect-[4/3] overflow-hidden rounded-lg">
                        <img src={src} alt={`${project.title} ${idx + 2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
