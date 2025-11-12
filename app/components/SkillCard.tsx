"use client";
import React from 'react';

interface SkillCardProps {
  icon: React.ElementType;
  name: string;
  colorClass?: string; // Add optional colorClass prop
}

export default function SkillCard({ icon: Icon, name, colorClass }: SkillCardProps) {
  return (
    <div className="relative group w-36 h-36 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-4 overflow-hidden
                    transform transition-transform duration-300 hover:rotate-6 hover:scale-105">
      {/* Moving gradient border */}
      <div className="absolute inset-0 rounded-lg p-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-light-grey via-medium-grey to-dark-grey rounded-lg
                        animate-spin-slow-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className={`relative z-10 ${colorClass || 'text-dark-grey'} group-hover:text-charcoal transition-colors duration-300`}>
        <Icon size={60} />
      </div>
      <p className="relative z-10 mt-2 text-sm font-semibold text-charcoal group-hover:text-dark-grey transition-colors duration-300">
        {name}
      </p>
    </div>
  );
}
