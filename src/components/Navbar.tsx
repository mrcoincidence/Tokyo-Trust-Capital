import { Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { translations } from '../data/translations';

interface NavbarProps {
  currentView: 'home' | 'advantage' | 'services' | 'team' | 'why-japan';
  setCurrentView: (view: 'home' | 'advantage' | 'services' | 'team' | 'why-japan') => void;
  lang: 'EN' | 'JP';
  setLang: (lang: 'EN' | 'JP') => void;
  onContactClick: () => void;
}

export const Navbar = ({ currentView, setCurrentView, lang, setLang, onContactClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: 'home' | 'advantage' | 'services' | 'team' | 'why-japan', sectionId?: string) => {
    setIsMobileMenuOpen(false);
    setCurrentView(view);
    
    if (view === 'home') {
      if (sectionId) {
        // If we are already on home, scroll to section. Otherwise toggle view first then scroll.
        if (currentView === 'home') {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 150);
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-9 h-9 bg-brand-900 flex items-center justify-center transition-transform group-hover:rotate-6">
                <span className="text-white font-serif font-bold italic text-base">T</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-serif font-bold tracking-tight uppercase text-brand-900">Tokyo Trust</span>
                <span className="text-[9px] tracking-[0.3em] font-bold opacity-60 uppercase text-brand-900">Capital</span>
              </div>
            </div>
            
            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-900">
              <button 
                onClick={() => handleNavClick('home')} 
                className={`hover:text-brand-gold transition-colors ${currentView === 'home' ? 'text-brand-gold border-b border-brand-gold/30 pb-1' : ''}`}
              >
                {t.navHome}
              </button>
              <button 
                onClick={() => handleNavClick('advantage')} 
                className={`hover:text-brand-gold transition-colors ${currentView === 'advantage' ? 'text-brand-gold border-b border-brand-gold/30 pb-1' : ''}`}
              >
                {t.navAdvantage}
              </button>
              <button 
                onClick={() => handleNavClick('services')} 
                className={`hover:text-brand-gold transition-colors ${currentView === 'services' ? 'text-brand-gold border-b border-brand-gold/30 pb-1' : ''}`}
              >
                {t.navServices}
              </button>
              <button 
                onClick={() => handleNavClick('team')} 
                className={`hover:text-brand-gold transition-colors ${currentView === 'team' ? 'text-brand-gold border-b border-brand-gold/30 pb-1' : ''}`}
              >
                {t.navTeam}
              </button>
              <button 
                onClick={() => handleNavClick('home', 'track-record')} 
                className="hover:text-brand-gold transition-colors"
              >
                {t.navTrackRecord}
              </button>
              <button 
                onClick={() => handleNavClick('why-japan')} 
                className={`hover:text-brand-gold transition-colors ${currentView === 'why-japan' ? 'text-brand-gold border-b border-brand-gold/30 pb-1' : ''}`}
              >
                {t.navWhyJapan}
              </button>
            </div>
          </div>

          {/* Right menu tools */}
          <div className="flex items-center gap-6">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest border-r border-brand-900/10 pr-6 text-brand-900">
               <button 
                 onClick={() => setLang(lang === 'EN' ? 'JP' : 'EN')}
                 className="flex items-center gap-2 hover:text-brand-gold transition-colors"
               >
                 <Globe className="w-3.5 h-3.5" />
                 {lang === 'EN' ? 'EN / 日本語' : '日本語 / EN'}
               </button>
            </div>

            {/* Contact Button */}
            <button 
              onClick={onContactClick}
              className="hidden sm:flex items-center px-6 py-2.5 bg-brand-900 text-white text-[10px] uppercase font-bold tracking-widest hover:bg-brand-gold hover:shadow-lg hover:shadow-brand-900/15 transition-all outline-none"
            >
              {t.contactUs}
            </button>

            {/* Mobile Menu Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-brand-900"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col justify-between pb-10 shadow-2xl transition-all duration-300">
          <div className="flex flex-col gap-6 text-sm font-bold uppercase tracking-[0.2em] text-center pt-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className="py-3 hover:text-brand-gold border-b border-gray-100"
            >
              {t.navHome}
            </button>
            <button 
              onClick={() => handleNavClick('advantage')} 
              className="py-3 hover:text-brand-gold border-b border-gray-100"
            >
              {t.navAdvantage}
            </button>
            <button 
              onClick={() => handleNavClick('services')} 
              className="py-3 hover:text-brand-gold border-b border-gray-100"
            >
              {t.navServices}
            </button>
            <button 
              onClick={() => handleNavClick('team')} 
              className={`py-3 hover:text-brand-gold border-b border-gray-100 ${currentView === 'team' ? 'text-brand-gold' : ''}`}
            >
              {t.navTeam}
            </button>
            <button 
              onClick={() => handleNavClick('home', 'track-record')} 
              className="py-3 hover:text-brand-gold border-b border-gray-100"
            >
              {t.navTrackRecord}
            </button>
            <button 
              onClick={() => handleNavClick('why-japan')} 
              className={`py-3 hover:text-brand-gold border-b border-gray-100 ${currentView === 'why-japan' ? 'text-brand-gold' : ''}`}
            >
              {t.navWhyJapan}
            </button>
          </div>

          <div className="flex flex-col gap-4 items-center">
            {/* Language Selection for mobile */}
            <button 
              onClick={() => {
                setLang(lang === 'EN' ? 'JP' : 'EN');
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-900 mb-2"
            >
              <Globe className="w-4 h-4 text-brand-gold" />
              {lang === 'EN' ? 'Switch to 日本語' : 'Switch to English'}
            </button>

            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-4 bg-brand-900 text-white text-[11px] uppercase font-bold tracking-[0.2em] text-center"
            >
              {t.contactUs}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
