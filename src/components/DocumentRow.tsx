import { ChevronRight } from 'lucide-react';
import { LegalDocument } from '../types';

interface DocumentRowProps {
  document: LegalDocument;
  onSelect: (document: LegalDocument) => void;
}

export default function DocumentRow({ document, onSelect }: DocumentRowProps) {
  return (
    <div className="border-b border-gray-200 group">
      <button 
        onClick={() => onSelect(document)}
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
          <h3 className="font-serif text-2xl sm:text-3xl text-oxford leading-snug transition-colors group-hover:text-gold">
            {document.titleEn}
          </h3>
          <h4 className="text-sm text-gray-500 mt-2 font-serif opacity-80">{document.titleKh}</h4>
        </div>
        
        <div className="pt-2 shrink-0 transition-transform duration-300 text-gray-300 group-hover:text-gold">
          <ChevronRight size={24} strokeWidth={1.5} />
        </div>
      </button>
    </div>
  );
}
