import { Category } from '../types';
import { motion } from 'motion/react';

interface SidebarProps {
  selectedCategory: Category | 'All';
  setSelectedCategory: (cat: Category | 'All') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

const CATEGORIES: (Category | 'All')[] = ['All', 'Law', 'Sub-Decree', 'Royal Decree', 'Prakas'];

export default function Sidebar({ selectedCategory, setSelectedCategory, searchQuery, setSearchQuery }: SidebarProps) {
  return (
    <aside className="w-full lg:w-72 shrink-0 flex flex-col gap-10 sticky top-32">
      <div>
        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Registry</h2>
        <h1 className="font-serif text-5xl text-oxford leading-[1.1] mb-6">Laws &<br/>Regulations</h1>
        <p className="text-gray-600 text-sm leading-relaxed border-l-2 border-gold pl-4">
          The definitive archive of legal frameworks governing investment, development, and commerce in the Kingdom of Cambodia.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search by title or ref..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface border-none rounded-none py-3 px-4 text-sm text-ink placeholder:text-gray-500 focus:ring-1 focus:ring-gold outline-none transition-all"
          />
        </div>

        <div>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Filter by Type</h3>
          <ul className="flex flex-col gap-1">
            {CATEGORIES.map(cat => (
              <li key={cat} className="relative">
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-oxford shadow-sm"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <button 
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative w-full text-left py-2.5 px-3 text-sm transition-colors flex items-center justify-between group z-10 ${
                    selectedCategory === cat 
                      ? 'text-white font-medium' 
                      : 'text-gray-600 hover:bg-surface hover:text-ink'
                  }`}
                >
                  <span>{cat}</span>
                  {selectedCategory === cat && (
                    <motion.span 
                      layoutId="activeCategoryDot"
                      className="w-1.5 h-1.5 rounded-full bg-gold"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
