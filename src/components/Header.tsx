import { Search, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white relative shrink-0">
      {/* State Motto Bar */}
      <div className="w-full border-b border-gray-100 bg-surface">
        <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between text-[9px] uppercase tracking-[0.2em] font-bold text-gray-400">
          <span>Kingdom of Cambodia</span>
          <span className="hidden sm:inline">Nation • Religion • King</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Masthead */}
        <div className="py-10 md:py-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-gray-200">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Official Portal</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-oxford leading-[0.95] tracking-tight">
              Council for the Development<br />
              <span className="text-gray-400 italic font-normal text-3xl md:text-4xl lg:text-5xl leading-[0.95]">of</span> Cambodia
            </h1>
          </div>
          
          <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-400">
             <div className="flex flex-col gap-1.5">
                <span className="text-oxford">Established</span>
                <span>1994</span>
             </div>
             <div className="flex flex-col gap-1.5">
                <span className="text-oxford">Registry</span>
                <span>Vol. XXVI</span>
             </div>
          </div>
        </div>

        {/* Navigation row */}
        <div className="h-14 flex items-center justify-between border-b border-gray-200">
          <nav className="hidden md:flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.15em]">
            <a href="#" className="text-gray-500 hover:text-oxford transition-colors">Overview</a>
            <a href="#" className="text-gray-500 hover:text-oxford transition-colors">Investment Guide</a>
            <a href="#" className="text-gold border-b-2 border-gold h-14 flex items-center">Laws & Regulations</a>
            <a href="#" className="text-gray-500 hover:text-oxford transition-colors">Services</a>
          </nav>
          
          <button className="md:hidden text-oxford p-2 -ml-2">
            <Menu size={20} />
          </button>

          <button className="text-gray-400 hover:text-oxford transition-colors flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.15em] group">
            <span className="hidden sm:inline group-hover:text-gold transition-colors">Global Search</span>
            <Search size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </header>
  );
}
