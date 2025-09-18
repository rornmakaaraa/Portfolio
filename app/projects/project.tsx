'use client';

import { useState } from 'react';
import Image from 'next/image';

type Project = {
    id: number;
    category: 'UI' | 'UX' | 'Web Design';
    title: string;
    img: string;
    alt: string;
};

const projects: Project[] = [
    { id: 1, category: 'UI', title: 'Learn UI/UX Design', img: '/food.jpg', alt: 'UI project' },
    { id: 2, category: 'Web Design', title: 'Laptop Mockups', img: '/food.jpg', alt: 'Web design project' },
    { id: 3, category: 'UX', title: 'Mobile App Dark UI', img: '/food.jpg', alt: 'UX project' },
];

const categories = ['All', 'UI', 'UX', 'Web Design'] as const;

export default function ProjectsSection() {
    const [active, setActive] = useState<'All' | Project['category']>('All');

    const filtered =
        active === 'All' ? projects : projects.filter(p => p.category === active);

    return (
        <section className="pt-24 py-20">
        <div className="max-w-6xl">
            <header className="mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                My recent <span className="text-cyan-400">works</span>
            </h2>
            <p className="text-gray-300 mt-2">Some of my latest projects</p>
            </header>

            {/* Category Filters */}
            <div className="flex gap-3 items-center mb-8">
            {categories.map(cat => (
                <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition
                    ${active === cat
                    ? 'bg-cyan-400 text-slate-900 shadow'
                    : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                    }`}
                >
                {cat}
                </button>
            ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(p => (
                <article
                key={p.id}
                className="group overflow-hidden rounded-xl shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                <div className="relative aspect-[16/9] w-full">
                    <Image src={p.img} alt={p.alt} fill
                        className=" w-80 h-80 md:w-96 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white">
                    {p.category}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-semibold">{p.title}</h3>
                    </div>
                </div>
                </article>
            ))}
            </div>
        </div>
        </section>
    );
}