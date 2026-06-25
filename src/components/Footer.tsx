import { Linkedin } from 'lucide-react';
import { translations } from '../data/translations';

interface FooterProps {
  lang: 'EN' | 'JP';
  setCurrentView: (view: 'home' | 'advantage' | 'services' | 'team' | 'why-japan') => void;
  onContactClick: () => void;
}

export const Footer = ({ lang, setCurrentView, onContactClick }: FooterProps) => {
  const t = translations[lang];

  const handleNav = (view: 'home' | 'advantage' | 'services' | 'team' | 'why-japan', sectionId?: string) => {
    setCurrentView(view);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-900 text-white pt-24 pb-12 relative overflow-hidden">
      {/* Visual Accent */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-brand-800/20 translate-x-1/3 translate-y-1/3 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          
          {/* Company Brief */}
          <div className="flex flex-col gap-8">
            <div 
              onClick={() => handleNav('home')}
              className="flex items-center gap-2 group cursor-pointer w-fit"
            >
              <div className="w-9 h-9 bg-white flex items-center justify-center transition-transform group-hover:rotate-6">
                <span className="text-brand-900 font-serif font-bold italic text-base">T</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-serif font-bold tracking-tight uppercase">Tokyo Trust</span>
                <span className="text-[10px] tracking-[0.3em] font-bold opacity-60 uppercase">Capital</span>
              </div>
            </div>
            
            <p className="opacity-50 text-xs leading-relaxed max-w-xs font-light">
              {t.footerDesc}
            </p>

            {/* LinkedIn social connection */}
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 opacity-70 hover:opacity-100" />
              </a>
            </div>
          </div>

          {/* Services Menu */}
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] mb-8 text-brand-gold">{lang === 'EN' ? 'Services' : 'サービスメニュー'}</h4>
            <ul className="flex flex-col gap-4 text-xs font-medium uppercase tracking-widest opacity-60">
              <li>
                <button onClick={() => handleNav('services', 'inbound')} className="hover:text-brand-gold transition-colors text-left">
                  {lang === 'EN' ? 'Inbound Investment' : 'インバウンド投資'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services', 'lifecycle')} className="hover:text-brand-gold transition-colors text-left">
                  {lang === 'EN' ? 'Asset Management' : 'アセットマネジメント'}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services', 'outbound')} className="hover:text-brand-gold transition-colors text-left">
                  {lang === 'EN' ? 'Outbound Investment' : 'アウトバウンド投資'}
                </button>
              </li>
            </ul>
          </div>

          {/* The Company Menu */}
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] mb-8 text-brand-gold">{lang === 'EN' ? 'The Company' : '会社情報'}</h4>
            <ul className="flex flex-col gap-4 text-xs font-medium uppercase tracking-widest opacity-60">
              <li>
                <button onClick={() => handleNav('advantage')} className="hover:text-brand-gold transition-colors">
                  {t.navAdvantage}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('team')} className="hover:text-brand-gold transition-colors text-left outline-none">
                  {t.navTeam}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('why-japan')} className="hover:text-brand-gold transition-colors text-left outline-none">
                  {t.navWhyJapan}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('home', 'track-record')} className="hover:text-brand-gold transition-colors">
                  {t.navTrackRecord}
                </button>
              </li>
              <li>
                <button onClick={onContactClick} className="hover:text-brand-gold transition-colors">
                  {lang === 'EN' ? 'Contact' : 'お問い合わせ窓口'}
                </button>
              </li>
            </ul>
          </div>

          {/* Policy Menu */}
          <div>
            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] mb-8 text-brand-gold">{t.footerLegalTitle}</h4>
            <ul className="flex flex-col gap-4 text-xs font-medium uppercase tracking-widest opacity-60">
              <li>
                <a href="#privacy" className="hover:text-brand-gold transition-colors">
                  {lang === 'EN' ? 'Privacy Policy' : '個人情報保護方針'}
                </a>
              </li>
              <li>
                <a href="#cookie" className="hover:text-brand-gold transition-colors">
                  {lang === 'EN' ? 'Cookie Policy' : 'クッキーポリシー'}
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-brand-gold transition-colors">
                  {lang === 'EN' ? 'Terms of Service' : '利用規約'}
                </a>
              </li>
              <li>
                <a href="#antisocial" className="hover:text-brand-gold transition-colors">
                  {lang === 'EN' ? 'Against Anti-Social Forces' : '反社会的勢力に対する基本方針'}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 opacity-45 text-[9px] uppercase tracking-[0.3em] font-bold">
          <div>© {new Date().getFullYear()} Tokyo Trust Capital. All rights reserved.</div>
          <div className="flex gap-8">
            <span>Tokyo</span>
            <span>•</span>
            <span>Osaka</span>
            <span>•</span>
            <span>Nagoya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
