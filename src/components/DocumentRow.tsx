import { useState } from 'react';
import { ChevronRight, Link2, Check } from 'lucide-react';
import { LegalDocument } from '../types';

interface DocumentRowProps {
  document: LegalDocument;
  onSelect: (document: LegalDocument) => void;
}

export default function DocumentRow({ document, onSelect }: DocumentRowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/?doc=${document.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      onClick={() => onSelect(document)}
      className="border-b border-gray-200 group w-full text-left py-8 px-2 hover:bg-surface/50 transition-colors flex items-start gap-4 sm:gap-6 cursor-pointer"
    >
      <div className="w-16 shrink-0 pt-1">
        <span className="text-xs font-bold text-gray-400 tracking-wider block">{document.year}</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-start sm:items-center justify-between mb-3 gap-4 flex-col sm:flex-row">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 text-gray-600 uppercase tracking-widest">
              {document.category}
            </span>
            <span className="text-xs text-gray-400 font-mono tracking-tight">{document.referenceNumber}</span>
          </div>

          <button 
            onClick={handleCopyLink}
            className={`shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-all md:opacity-0 group-hover:opacity-100 ${
              copied ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-white text-gray-500 border border-gray-200 hover:text-gold hover:border-gold shadow-sm'
            }`}
            title="Copy Link"
          >
            {copied ? <Check size={12} strokeWidth={2.5} /> : <Link2 size={12} strokeWidth={2.5} />}
            <span>{copied ? 'Copied' : 'Share'}</span>
          </button>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-oxford leading-snug transition-colors group-hover:text-gold pr-4 sm:pr-8">
          {document.titleEn}
        </h3>
        <h4 className="text-sm text-gray-500 mt-2 font-serif opacity-80">{document.titleKh}</h4>
      </div>
      
      <div className="pt-2 shrink-0 transition-transform duration-300 text-gray-300 group-hover:text-gold">
        <ChevronRight size={24} strokeWidth={1.5} />
      </div>
    </div>
  );
}
