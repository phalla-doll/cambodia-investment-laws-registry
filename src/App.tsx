import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DocumentRow from './components/DocumentRow';
import Footer from './components/Footer';
import { documents } from './data';
import { Category } from './types';

export type MainTab = 'Overview' | 'Investment Guide' | 'Laws & Regulations' | 'Services';
export type SortOrder = 'newest' | 'oldest';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainTab>('Laws & Regulations');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredDocs = useMemo(() => {
    return documents.filter(doc => {
      const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        doc.titleEn.toLowerCase().includes(searchLower) ||
        doc.titleKh.toLowerCase().includes(searchLower) ||
        doc.referenceNumber.toLowerCase().includes(searchLower);
      
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortOrder === 'newest') {
        return b.year - a.year;
      } else {
        return a.year - b.year;
      }
    });
  }, [selectedCategory, searchQuery, sortOrder]);

  return (
    <div className="min-h-screen bg-white text-ink font-sans selection:bg-gold/30 selection:text-oxford">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col lg:flex-row gap-16 lg:gap-32 relative items-start">
        {activeTab === 'Laws & Regulations' ? (
          <>
            <Sidebar 
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            
            <div className="flex-1 w-full min-w-0 lg:pt-2">
              <nav className="flex items-center flex-wrap gap-2.5 text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-10">
                <a href="#" className="hover:text-gold transition-colors">Home</a>
                <span className="text-gray-300 font-normal">/</span>
                <a href="#" className="hover:text-gold transition-colors">Registry</a>
                <span className="text-gray-300 font-normal">/</span>
                <span className="text-oxford">{selectedCategory === 'All' ? 'All Documents' : selectedCategory}</span>
              </nav>

              <div className="flex items-end justify-between border-b-2 border-oxford pb-3 mb-4">
                 <h2 className="text-[10px] font-bold text-oxford uppercase tracking-widest">Document Ledger</h2>
                 <div className="flex items-center gap-6">
                   <div className="flex items-center gap-2">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Sort by:</span>
                     <select 
                       value={sortOrder}
                       onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                       className="text-xs font-semibold text-oxford bg-transparent border-none outline-none cursor-pointer focus:ring-0 p-0"
                     >
                       <option value="newest">Newest First</option>
                       <option value="oldest">Oldest First</option>
                     </select>
                   </div>
                   <span className="text-xs font-semibold text-gray-500">{filteredDocs.length} Results</span>
                 </div>
              </div>
              
              <div className="flex flex-col">
                {filteredDocs.length > 0 ? (
                  filteredDocs.map(doc => (
                    <DocumentRow key={doc.id} document={doc} />
                  ))
                ) : (
                  <div className="py-32 text-center bg-surface/50 border border-gray-100 mt-4 rounded-sm">
                    <p className="text-gray-500 font-serif text-2xl">No documents found matching your criteria.</p>
                    <button 
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('All');
                      }}
                      className="mt-6 text-oxford border-b border-gold hover:text-gold pb-0.5 text-sm font-semibold transition-colors"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 py-32 flex flex-col items-center justify-center text-center">
            <h2 className="font-serif text-4xl text-oxford mb-4">{activeTab}</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              This section is currently under development. Please check back later for updates regarding the {activeTab.toLowerCase()}.
            </p>
          </div>
        )}
      </main>
      
      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-oxford text-white shadow-lg flex items-center justify-center hover:bg-gold transition-colors z-50 rounded-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
