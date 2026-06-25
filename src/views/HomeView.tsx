import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, ShieldCheck, Search, Globe, Building2, Landmark, LineChart } from 'lucide-react';
import { translations } from '../data/translations';

interface HomeViewProps {
  lang: 'EN' | 'JP';
  setCurrentView: (view: 'home' | 'advantage' | 'services' | 'team' | 'why-japan') => void;
  onContactClick: () => void;
}

export const HomeView = ({ lang, setCurrentView, onContactClick }: HomeViewProps) => {
  const handleServiceClick = (sectionId?: string) => {
    setCurrentView('services');
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const t = translations[lang];

  return (
    <div className="overflow-x-hidden min-h-screen">
      
      {/* SECTION 1: HERO HEADER (THE HOOK) */}
      <header id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540959733332-e94e7bf0bd40?q=80&w=2000&auto=format&fit=crop" 
            alt="Tokyo Skyline at Night" 
            className="w-full h-full object-cover opacity-20 grayscale scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/90 to-transparent"></div>
          <div className="technical-grid absolute inset-0 opacity-10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-brand-900/10 rounded-full mb-8 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold bg-white/50 backdrop-blur-sm">
               <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
               {t.heroBadge}
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-[5.5rem] leading-[1.05] mb-8 select-none">
              {t.heroTitle1} <br />
              <span className="italic">{t.heroTitle2}</span> {t.heroTitle3}
            </h1>
            
            <p className="text-base sm:text-xl text-brand-900/80 mb-12 leading-relaxed font-light max-w-2xl">
              {t.heroSub}
            </p>
            
            <div className="flex flex-wrap gap-5">
              <button 
                onClick={() => {
                  setCurrentView('advantage');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-10 py-5 bg-brand-900 text-white text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-brand-gold hover:shadow-xl hover:shadow-brand-900/10 transform hover:-translate-y-0.5 transition-all flex items-center gap-3"
              >
                {t.heroCtaPrimary}
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button 
                onClick={() => {
                  const el = document.getElementById('track-record');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-10 py-5 border border-brand-900/20 text-brand-900 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-brand-900/5 transition-all"
              >
                {t.heroCtaSecondary}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 right-6 hidden xl:block">
          <div className="flex gap-4">
            <div className="h-[1px] w-24 bg-brand-900/20 mt-3"></div>
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-900/40">
              Tokyo • Osaka • Nagoya
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2: OUR ADVANTAGE (THE VALUE PROPOSITION) */}
      <section id="advantage" className="py-32 bg-white relative overflow-hidden border-t border-brand-900/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
            <div className="lg:sticky lg:top-32 max-w-md">
              <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-6">
                {t.advBadge}
              </div>
              <h2 className="text-3xl sm:text-4xl leading-tight mb-8 font-serif">
                {t.advTitle}
              </h2>
              <p className="text-base opacity-60 font-light leading-relaxed mb-10">
                {t.advSub}
              </p>
              <button 
                onClick={() => {
                  setCurrentView('advantage');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.2em] pb-3 border-b border-brand-900/10 hover:border-brand-gold transition-all"
              >
                {t.advLink}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {t.advPillars.map((pillar, idx) => {
                const icons = [
                  <ShieldCheck className="w-8 h-8" key="0" />,
                  <Search className="w-8 h-8" key="1" />,
                  <Globe className="w-8 h-8" key="2" />
                ];
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-10 border border-brand-900/5 hover:border-brand-gold/20 transition-all bg-paper/30 backdrop-blur-sm group cursor-pointer ${
                      idx === 2 ? 'md:col-span-2' : ''
                    }`}
                    onClick={() => {
                      setCurrentView('advantage');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform origin-left">
                      {icons[idx]}
                    </div>
                    <h3 className="text-xl sm:text-2xl mb-6 font-serif text-brand-900">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-brand-900/70 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: INBOUND INVESTMENT & ASSET MANAGEMENT (SOLUTIONS) */}
      <section id="services" className="py-32 bg-paper border-y border-brand-900/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-6">
              {t.servicesBadge}
            </div>
            <h2 className="text-3xl sm:text-5xl mb-8 font-serif leading-tight">
              {t.servicesTitle}
            </h2>
            <p className="text-base sm:text-lg opacity-60 font-light leading-relaxed">
              {t.servicesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {t.servicesList.map((service, idx) => {
              const icons = [
                <Building2 className="w-6 h-6" key="0" />,
                <Landmark className="w-6 h-6" key="1" />,
                <LineChart className="w-6 h-6" key="2" />
              ];
              return (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-white p-12 shadow-sm border border-brand-900/5 flex flex-col gap-8 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    {icons[idx]}
                  </div>
                  <div className="w-12 h-12 bg-paper flex items-center justify-center text-brand-gold rounded-full">
                    {icons[idx]}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl mb-4 font-serif text-brand-900">
                      {service.title}
                    </h3>
                    <p className="text-sm opacity-60 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleServiceClick(idx === 0 ? 'inbound' : 'lifecycle')} 
                    className="mt-auto pt-6 text-[10px] uppercase font-bold tracking-widest text-brand-gold flex items-center gap-2 group-hover:gap-3 transition-all text-left outline-none"
                  >
                    {lang === 'EN' ? 'Learn More' : '詳細はこちら'} <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-20 text-center">
            <button 
              onClick={() => handleServiceClick()}
              className="px-10 py-5 bg-brand-900 text-white text-[10px] uppercase font-bold tracking-widest hover:bg-brand-800 transition-all shadow-lg"
            >
              {t.servicesCta}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY JAPAN? (MARKET INSIGHT) */}
      <section id="why-japan" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-opacity duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200" 
                alt="Tokyo Imperial Palace / Garden" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2000ms]"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-8 -left-8 glass-card p-10 z-10 hidden sm:block">
              <div className="text-4xl mb-1 font-serif tracking-tighter">¥800B+</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">
                {lang === 'EN' ? 'Total Deal Flow Handled' : 'これまでの取扱取引総額'}
              </div>
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-6">
              {t.japanBadge}
            </div>
            <h2 className="text-3xl sm:text-5xl mb-8 font-serif leading-tight">
              {t.japanTitle}
            </h2>
            <p className="text-base sm:text-lg opacity-60 font-light leading-relaxed mb-12">
              {t.japanSub}
            </p>
            
            <div className="space-y-10">
              {t.japanPoints.map((point, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="text-brand-gold text-sm font-mono mt-1 opacity-40 group-hover:opacity-100 transition-opacity">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-2 text-brand-900 group-hover:text-brand-gold transition-colors">
                      {point.title}
                    </h4>
                    <p className="text-sm opacity-55 font-light leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => {
                  setCurrentView('why-japan');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-5 bg-brand-900 text-white text-[10px] uppercase font-bold tracking-widest hover:bg-brand-gold hover:shadow-lg transition-all duration-300 outline-none"
              >
                {lang === 'EN' ? "Explore Detailed Market Case" : "詳細な市場データを見る"}
              </button>
              <button 
                onClick={onContactClick}
                className="px-8 py-5 border border-brand-900/20 text-brand-900 text-[10px] uppercase font-bold tracking-widest hover:bg-brand-900/5 transition-all outline-none"
              >
                {t.japanCta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: MEET THE TEAM (THE TRUST FACTOR) */}
      <section id="team" className="py-32 bg-brand-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-800/20 translate-x-1/2 -skew-x-12"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            <div className="lg:w-1/2">
              <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-8">
                {t.teamBadge}
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-[4rem] leading-tight mb-10 font-serif">
                {t.teamTitle} <br />
                <span className="italic font-light text-brand-gold">{t.teamTitleItalic}</span>
              </h2>
              <p className="text-base sm:text-xl opacity-60 font-light leading-relaxed mb-12 max-w-lg">
                {t.teamSub}
              </p>
              
              <div className="bg-white/5 backdrop-blur-sm p-10 border border-white/10 max-w-lg">
                 <div className="text-xl sm:text-2xl font-serif italic mb-6">
                   “{t.teamQuote}”
                 </div>
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-[1px] bg-brand-gold"></div>
                   <div>
                     <div className="text-xs font-bold uppercase tracking-widest">
                       {lang === 'EN' ? 'Kenji Tanaka' : '田中 賢二'}
                     </div>
                     <div className="text-[9px] opacity-40 uppercase tracking-widest">
                       {lang === 'EN' ? 'Chief Executive Officer' : '代表取締役・最高経営責任者'}
                     </div>
                   </div>
                 </div>
              </div>
              
              <button 
                onClick={() => {
                  setCurrentView('team');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="mt-16 group flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.3em] hover:text-brand-gold transition-colors outline-none"
              >
                {t.teamCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <div className="aspect-[3/4] bg-white/5 border border-white/10 flex items-end overflow-hidden group relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" 
                    alt="Corporate Executive Developer" 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute bottom-4 left-4 z-10 p-3 bg-brand-900/80 backdrop-blur-md border border-white/10">
                     <p className="text-[9px] font-bold uppercase tracking-widest text-brand-gold">
                       {lang === 'EN' ? 'K. Tanaka' : '田中 賢二 CEO'}
                     </p>
                  </div>
               </div>
               
               <div className="aspect-[3/4] bg-white/5 border border-white/10 mt-12 flex items-end overflow-hidden group relative">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800" 
                    alt="Institutional Fund Specialist" 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute bottom-4 left-4 z-10 p-3 bg-brand-900/80 backdrop-blur-md border border-white/10">
                     <p className="text-[9px] font-bold uppercase tracking-widest text-brand-gold">
                       {lang === 'EN' ? 'M. Sato' : '佐藤 美穂 COO'}
                     </p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: TRACK RECORD (PROOF) */}
      <section id="track-record" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-2xl">
              <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-6">
                {t.trackBadge}
              </div>
              <h2 className="text-3xl sm:text-5xl mb-8 font-serif leading-tight">
                {t.trackTitle}
              </h2>
              <p className="text-base sm:text-lg opacity-60 font-light leading-relaxed">
                {t.trackSub}
              </p>
            </div>
            
            <button 
              onClick={onContactClick}
              className="px-10 py-5 border-2 border-brand-900 text-brand-900 text-[10px] uppercase font-bold tracking-widest hover:bg-brand-900 hover:text-white transition-all outline-none animate-shimmer"
            >
              {t.trackCta}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-y border-brand-900/10 py-16 gap-8">
            {t.trackStats.map((stat, i) => (
              <div key={i} className="text-center px-6 md:border-r last:border-r-0 border-brand-900/10 mb-8 md:mb-0">
                <div className="text-5xl sm:text-6xl font-serif text-brand-900 mb-4">
                  {stat.value}
                </div>
                <div className="text-[9px] uppercase tracking-[0.4em] font-bold opacity-45">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-900/5 border border-brand-900/5">
             {[1, 2, 3, 4].map((i) => (
               <div 
                 key={i} 
                 className="bg-white p-10 flex flex-col items-center justify-center hover:bg-paper transition-colors grayscale opacity-45 hover:opacity-100 cursor-pointer aspect-video border border-brand-900/5 group text-center"
                 onClick={onContactClick}
               >
                  <span className="text-xs font-serif font-bold tracking-[0.22em] text-brand-900 group-hover:text-brand-gold uppercase transition-colors">
                    {lang === 'EN' ? `Institutional Partner _0${i}` : `機関投資ファンド 0${i}`}
                  </span>
                  <span className="text-[8px] tracking-widest opacity-40 uppercase font-mono mt-2">
                    {lang === 'EN' ? 'Residential / Office Portfolio' : 'レジデンシャル / オフィス投資'}
                  </span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CALL TO ACTION */}
      <section className="py-32 bg-paper relative overflow-hidden border-t border-brand-900/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square technical-grid opacity-[0.03] scale-150 rotate-12"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-6xl mb-10 leading-snug">
            {t.ctaTitle}
          </h2>
          <p className="text-base sm:text-xl opacity-60 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            {t.ctaSub}
          </p>
          <button 
            onClick={onContactClick}
            className="px-14 py-6 bg-brand-900 text-white text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-brand-gold transition-all shadow-2xl shadow-brand-900/20 active:scale-95 outline-none font-sans"
          >
            {t.ctaButton}
          </button>
        </div>
      </section>

    </div>
  );
};
