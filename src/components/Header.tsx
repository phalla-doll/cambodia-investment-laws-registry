import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-oxford text-gold flex items-center justify-center font-serif font-bold text-xl rounded-sm">
            C
          </div>
          <div>
            <h1 className="font-serif font-semibold text-ink leading-tight text-lg">Council for the Development</h1>
            <h2 className="text-[10px] text-gray-500 font-sans tracking-widest uppercase">Of Cambodia</h2>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ink">
          <a href="#" className="hover:text-gold transition-colors">Home</a>
          <a href="#" className="hover:text-gold transition-colors">About Us</a>
          <a href="#" className="hover:text-gold transition-colors">Why Cambodia</a>
          <a href="#" className="text-gold border-b border-gold pb-1">Laws & Regulations</a>
          <a href="#" className="hover:text-gold transition-colors">Services</a>
        </nav>
        
        <div className="flex items-center gap-4">
           <button className="text-ink hover:text-gold transition-colors flex items-center gap-2 text-sm font-medium">
             <span className="hidden sm:inline">Search</span>
             <Search size={18} />
           </button>
        </div>
      </div>
    </header>
  );
}
