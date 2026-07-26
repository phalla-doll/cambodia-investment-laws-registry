import { motion, AnimatePresence } from 'motion/react';
import { X, Download, FileText, Share2, Printer } from 'lucide-react';
import { LegalDocument } from '../types';

interface DocumentModalProps {
  document: LegalDocument | null;
  onClose: () => void;
}

export default function DocumentModal({ document, onClose }: DocumentModalProps) {
  return (
    <AnimatePresence>
      {document && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-oxford/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-2xl bg-white shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-surface/50">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold px-2 py-0.5 bg-gray-200 text-oxford uppercase tracking-widest">
                  {document.category}
                </span>
                <span className="text-xs text-gray-500 font-mono tracking-tight">{document.referenceNumber}</span>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-oxford transition-colors p-1"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto relative">
              <div className="absolute top-8 right-8 opacity-[0.02] pointer-events-none text-oxford">
                <FileText size={160} strokeWidth={1} />
              </div>

              <div className="relative z-10">
                <h3 className="font-serif text-3xl sm:text-4xl text-oxford leading-snug mb-3">
                  {document.titleEn}
                </h3>
                <h4 className="text-base text-gray-500 font-serif opacity-80 mb-8 pb-8 border-b border-gray-100">
                  {document.titleKh}
                </h4>

                <h5 className="text-[10px] font-bold text-gold uppercase tracking-widest mb-3">Executive Summary</h5>
                <p className="text-ink/80 text-sm sm:text-base leading-relaxed font-medium mb-10">
                  {document.abstract}
                </p>

                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
                  <div>
                    <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Promulgation Date</h5>
                    <p className="text-sm font-semibold text-oxford">{document.date}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Available Languages</h5>
                    <div className="flex items-center gap-2">
                      {document.languages.map(lang => (
                        <span key={lang} className="text-xs font-semibold px-2 py-1 bg-surface text-oxford border border-gray-200 rounded-sm">
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-surface/50 flex items-center justify-between gap-4 mt-auto">
              <div className="flex items-center gap-4">
                {document.languages.map(lang => (
                  <button 
                    key={lang}
                    className="flex items-center gap-2 text-xs font-semibold text-white bg-oxford border border-oxford px-5 py-2.5 hover:bg-gold hover:border-gold transition-colors shadow-sm"
                  >
                    <Download size={14} />
                    {lang === 'EN' ? 'English PDF' : 'Khmer PDF'}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button className="p-2.5 text-gray-400 hover:text-oxford border border-gray-200 hover:border-oxford bg-white transition-colors" title="Print">
                  <Printer size={16} />
                </button>
                <button className="p-2.5 text-gray-400 hover:text-oxford border border-gray-200 hover:border-oxford bg-white transition-colors" title="Share">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
