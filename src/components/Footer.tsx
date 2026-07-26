import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-oxford text-white/70 border-t-4 border-gold pt-20 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="max-w-md">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-10 h-10 bg-white/5 text-gold flex items-center justify-center font-serif font-bold text-xl rounded-sm border border-white/10">
                 C
               </div>
               <div>
                 <h2 className="font-serif font-semibold text-white leading-tight text-lg">Council for the Development</h2>
                 <h3 className="text-[10px] text-white/50 font-sans tracking-widest uppercase">Of Cambodia</h3>
               </div>
             </div>
             <p className="text-sm leading-relaxed mb-8">
               The highest decision-making level of the Royal Government for private and public sector investment. Guiding Cambodia's economic development through transparent legal frameworks.
             </p>
             <div className="flex flex-col gap-4 text-sm font-medium">
               <div className="flex items-center gap-3">
                 <MapPin size={16} className="text-gold" />
                 <span>Government Palace, Sisowath Quay, Wat Phnom</span>
               </div>
               <div className="flex items-center gap-3">
                 <Phone size={16} className="text-gold" />
                 <span>(+855) 23 981 154</span>
               </div>
               <div className="flex items-center gap-3">
                 <Mail size={16} className="text-gold" />
                 <span>info@cdc.gov.kh</span>
               </div>
             </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20">
            <div>
              <h4 className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-6">Organization</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About the Council</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Departments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-6">Legal Registry</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Laws & Acts</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sub-Decrees</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Royal Decrees</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Prakas (Declarations)</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Circulars</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-6">Newsletter</h4>
              <p className="text-xs leading-relaxed mb-4">Subscribe to receive updates on new investment laws and regulatory changes.</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/5 border border-white/10 text-white px-4 py-2.5 text-sm w-full focus:outline-none focus:border-gold transition-colors placeholder:text-white/30 rounded-none"
                />
                <button type="button" className="bg-gold text-oxford px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} CDC Cambodia. All Rights Reserved.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
