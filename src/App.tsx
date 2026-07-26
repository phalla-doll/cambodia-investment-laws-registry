import { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DocumentRow from './components/DocumentRow';
import { documents } from './data';
import { Category } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocs = useMemo(() => {
    return documents.filter(doc => {
      const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        doc.titleEn.toLowerCase().includes(searchLower) ||
        doc.titleKh.toLowerCase().includes(searchLower) ||
        doc.referenceNumber.toLowerCase().includes(searchLower);
      
      return matchesCategory && matchesSearch;
    }).sort((a, b) => b.year - a.year); // Sort newest first
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-ink font-sans selection:bg-gold/30 selection:text-oxford">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col lg:flex-row gap-16 lg:gap-32 relative items-start">
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
             <span className="text-xs font-semibold text-gray-500">{filteredDocs.length} Results</span>
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
      </main>
    </div>
  );
}
