import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, ChevronRight, FileText } from 'lucide-react';
import { LegalDocument } from '../types';

interface DocumentRowProps {
  document: LegalDocument;
}

export default function DocumentRow({ document }: DocumentRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-gray-200 group">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left py-8 px-2 hover:bg-surface/50 transition-colors flex items-start gap-6 cursor-pointer"
      >
        <div className="w-16 shrink-0 pt-1">
          <span className="text-xs font-bold text-gray-400 tracking-wider block">{document.year}</span>
        </div>
        
        <div className="flex-1 pr-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 text-gray-600 uppercase tracking-widest">
              {document.category}
            </span>
            <span className="text-xs text-gray-400 font-mono tracking-tight">{document.referenceNumber}</span>
          </div>
          <h3 className={`font-serif text-2xl sm:text-3xl text-oxford leading-snug transition-colors ${isExpanded ? 'text-gold' : 'group-hover:text-gold'}`}>
            {document.titleEn}
          </h3>
          <h4 className="text-sm text-gray-500 mt-2 font-serif opacity-80">{document.titleKh}</h4>
        </div>
        
        <div className={`pt-2 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-90 text-gold' : 'text-gray-300 group-hover:text-gold'}`}>
          <ChevronRight size={24} strokeWidth={1.5} />
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pl-24 pr-8 pb-8 pt-2">
              <div className="bg-surface p-8 rounded-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] pointer-events-none text-oxford">
                  <FileText size={200} strokeWidth={1} />
                </div>
                
                <h5 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Abstract</h5>
                <p className="text-ink/80 text-sm leading-relaxed max-w-3xl relative z-10 font-medium">
                  {document.abstract}
                </p>
                
                <div className="mt-8 flex items-center gap-4 relative z-10">
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mr-2">Download:</span>
                  {document.languages.map(lang => (
                    <button 
                      key={lang}
                      className="flex items-center gap-2 text-xs font-semibold text-oxford bg-white border border-gray-200 px-4 py-2.5 hover:border-gold hover:text-gold transition-colors shadow-sm"
                    >
                      <Download size={14} />
                      {lang === 'EN' ? 'English PDF' : 'Khmer PDF'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
