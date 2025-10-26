import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building, Grid as GridIcon } from 'lucide-react';
import ProjectModal from './ProjectModal';

const PROJECTS = [
  {
    id: 'res-01',
    title: 'Courtyard Residence',
    category: 'Residential',
    location: 'Alibaug, India',
    year: '2024',
    cover:
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1680&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1680&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c54a?q=80&w=1680&auto=format&fit=crop',
    ],
    description:
      'A serene home organized around a central courtyard. Natural stone and timber define a calm material palette with diffused daylight throughout.',
  },
  {
    id: 'com-01',
    title: 'Atrium Office',
    category: 'Commercial',
    location: 'Bengaluru, India',
    year: '2023',
    cover:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1680&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1680&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1680&auto=format&fit=crop',
    ],
    description:
      'A flexible workplace organized along a tall atrium. Exposed structure, matte black steel, and textured concrete balance openness and focus.',
  },
  {
    id: 'res-02',
    title: 'Hillside Villa',
    category: 'Residential',
    location: 'Pune, India',
    year: '2025',
    cover:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1680&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1680&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1680&auto=format&fit=crop',
    ],
    description:
      'A layered retreat with deep overhangs, textured concrete, and long views. Interiors use warm veneers and brushed metal accents.',
  },
  {
    id: 'com-02',
    title: 'Retail Pavilion',
    category: 'Commercial',
    location: 'Mumbai, India',
    year: '2022',
    cover:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1680&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1680&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1680&auto=format&fit=crop',
    ],
    description:
      'A sculptural volume with a strong grid facade. Inside, a restrained palette highlights products with precise lighting.',
  },
];

const FILTERS = [
  { label: 'All', value: 'All', icon: GridIcon },
  { label: 'Residential', value: 'Residential', icon: Home },
  { label: 'Commercial', value: 'Commercial', icon: Building },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);

  const items = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="work" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Selected Work</h2>
          <div className="flex items-center gap-2">
            {FILTERS.map(({ label, value, icon: Icon }) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all ${
                  filter === value
                    ? 'border-emerald-400/60 text-white bg-emerald-500/10'
                    : 'border-white/10 text-neutral-300 hover:text-white hover:border-white/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {items.map((p) => (
              <motion.button
                key={p.id}
                layout
                onClick={() => setActive(p)}
                className="group relative rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="h-full w-full object-cover scale-100 transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                  <div>
                    <h3 className="text-lg md:text-xl font-medium">{p.title}</h3>
                    <p className="text-xs md:text-sm text-neutral-300">{p.category} • {p.location}</p>
                  </div>
                  <motion.span
                    className="rounded-full px-3 py-1 text-xs border border-white/20 bg-white/5 backdrop-blur"
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    View
                  </motion.span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />

      <div id="studio" className="max-w-7xl mx-auto px-6 mt-20 md:mt-28 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">Studio</h3>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            Axiom is a multi-disciplinary practice shaping architecture and interiors with clarity and restraint. We believe in precise detailing, robust materials, and proportion-driven planning that elevates everyday experience.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">Concept to Completion</div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">Context-Driven Design</div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">Sustainable Materials</div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">Engineering Precision</div>
        </div>
      </div>

      <div id="contact" className="max-w-7xl mx-auto px-6 mt-20 md:mt-28">
        <div className="rounded-2xl border border-white/10 p-8 md:p-12 bg-gradient-to-br from-white/[0.04] to-transparent">
          <h3 className="text-2xl md:text-4xl font-semibold tracking-tight">Let’s build something exceptional</h3>
          <p className="mt-3 text-neutral-300">Write to studio@axiom.design or call +91 90000 00000</p>
        </div>
      </div>
    </section>
  );
}
