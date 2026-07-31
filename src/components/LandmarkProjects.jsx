import React from 'react';
import { PROJECTS_DATA } from '../data/catalogData';
import { Building2, MapPin, CheckCircle } from 'lucide-react';

export default function LandmarkProjects() {
  return (
    <section id="projects" className="py-24 bg-zenaura-base relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-zenaura-teal px-3.5 py-1 rounded-full bg-zenaura-teal/10 border border-zenaura-teal/30 inline-flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" />
            <span>Proven Regional Trust</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-zenaura-obsidian font-light">
            Regional Landmark Projects
          </h2>
          <p className="text-sm sm:text-base text-zenaura-obsidian-muted font-normal">
            Trusted by the region's leading developers, architects, and luxury hospitality groups across the UAE and GCC.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden border border-white shadow-sm glass-card-hover flex flex-col justify-between group"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zenaura-frost">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-zenaura-obsidian bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-zenaura-teal/30 shadow-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zenaura-teal" />
                    <span>{project.location}</span>
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zenaura-teal">
                    {project.type}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-zenaura-obsidian group-hover:text-zenaura-teal transition-colors mt-1">
                    {project.name}
                  </h3>
                  <p className="text-xs text-zenaura-obsidian-muted leading-relaxed mt-2">
                    {project.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-zenaura-frost flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>MEA 2026 BAGNODESIGN Specified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
