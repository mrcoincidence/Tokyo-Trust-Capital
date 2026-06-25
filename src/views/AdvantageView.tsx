import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, ShieldCheck, CheckCircle2, User, HelpCircle, Layers, FileText, Search, Globe } from 'lucide-react';
import { translations } from '../data/translations';

interface AdvantageViewProps {
  lang: 'EN' | 'JP';
  setCurrentView: (view: 'home' | 'advantage' | 'services' | 'team' | 'why-japan') => void;
  onContactClick: () => void;
}

export const AdvantageView = ({ lang, setCurrentView, onContactClick }: AdvantageViewProps) => {
  const t = translations[lang];

  return (
    <div className="overflow-x-hidden min-h-screen bg-paper/20">
      
      {/* SECTION 1: HERO HEADER (THE STATEMENT) */}
      <header className="relative min-h-[75vh] flex items-center pt-32 overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" 
            alt="Modern Geometric Architecture Detail" 
            className="w-full h-full object-cover opacity-15 grayscale scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/90 to-transparent"></div>
          <div className="technical-grid absolute inset-0 opacity-[0.05]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-8 text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold bg-white/5 px-4 py-1.5 border border-white/10 rounded-full">
              {lang === 'EN' ? 'THE STATEMENT' : '投資家に向けた宣言'}
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-[5rem] font-serif leading-[1.05] mb-10 text-white">
              {t.advPageHeroTitle1} <br />
              <span className="italic text-brand-gold">{t.advPageHeroTitle2}</span>
            </h1>
            
            <p className="text-lg sm:text-xl opacity-80 font-light leading-relaxed max-w-2xl mb-12">
              {t.advPageHeroSub}
            </p>
            
            <div className="h-[1px] w-32 bg-brand-gold mb-4"></div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/55">
              Tokyo Trust Capital • Conflict-Free Strategy
            </p>
          </motion.div>
        </div>
      </header>

      {/* SECTION 2: TRUE INDEPENDENCE (THE CONFLICT-FREE EDGE) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
                {lang === 'EN' ? 'THE CONFLICT-FREE EDGE' : '徹底的な独立系アライアンス'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif mb-8 text-brand-900 leading-tight">
                {t.advPageSec2Title}
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold/50 mb-8"></div>
              <p className="text-brand-900/60 font-light leading-relaxed">
                {lang === 'EN' 
                  ? "Tokyo Trust Capital was founded to solve a unique failure in the local market: the structural conflicts arising from traditional conglomerate systems."
                  : "東京トラストキャピタルは、従来の系列 conglomerate システムから生じる構造的な利益相反という独特の課題をクリアするために創業されました。"}
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-10">
              <p className="text-lg text-brand-900/80 leading-relaxed font-light mb-4">
                {t.advPageSec2Lead}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.advPageSec2Points.map((point, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 bg-paper/20 border border-brand-900/[0.03] hover:border-brand-gold/25 transition-all"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-gold mb-6" />
                    <h4 className="text-lg font-serif mb-4 text-brand-900">{point.title}</h4>
                    <p className="text-xs opacity-60 leading-relaxed font-light">{point.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: NAVIGATING THE "JAPAN GAP" (THE CULTURAL BRIDGE) */}
      <section className="py-32 bg-paper/40 border-y border-brand-900/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
              {lang === 'EN' ? 'THE CULTURAL BRIDGE' : '見えない障壁を超えるノウハウ'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif mb-8 leading-tight text-brand-900">
              {t.advPageSec3Title}
            </h2>
            <p className="text-lg opacity-70 font-light leading-relaxed">
              {t.advPageSec3Lead}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {t.advPageSec3Points.map((sol, idx) => {
              const icons = [
                <Search className="w-5 h-5" key="0" />,
                <ShieldCheck className="w-5 h-5" key="1" />,
                <Globe className="w-5 h-5" key="2" />
              ];
              return (
                <div key={idx} className="bg-white p-10 shadow-sm border border-brand-900/[0.04] flex flex-col justify-between group">
                  <div>
                    <div className="w-10 h-10 bg-paper flex items-center justify-center text-brand-gold rounded-sm mb-8">
                      {icons[idx]}
                    </div>
                    <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest block mb-3">Solution 0{idx+1}</span>
                    <h3 className="text-xl sm:text-2xl font-serif mb-6 text-brand-900 group-hover:text-brand-gold transition-colors">{sol.title}</h3>
                    <p className="text-sm opacity-60 font-light leading-relaxed mb-6">{sol.description}</p>
                  </div>
                  <div className="h-[1px] w-full bg-brand-900/5 mt-6 group-hover:bg-brand-gold/30 transition-colors"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: INSTITUTIONAL EXPERTISE WITH BOUTIQUE AGILITY (THE TEAM) */}
      <section id="adv-team-bridge" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7">
              <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
                {lang === 'EN' ? 'THE BOUTIQUE ADVANTAGE' : '専任のスペシャリスト集団'}
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif mb-8 text-brand-900 leading-tight">
                {t.advPageSec4Title}
              </h2>
              <p className="text-lg text-brand-900/70 font-light leading-relaxed mb-10">
                {t.advPageSec4Lead}
              </p>

              <div className="p-8 sm:p-12 bg-paper/30 border border-brand-900/[0.03] mb-8">
                <h3 className="text-2xl font-serif mb-4 text-brand-900">{t.advPageSec4BoutiqueTitle}</h3>
                <p className="text-sm opacity-70 font-light leading-relaxed">{t.advPageSec4BoutiqueDesc}</p>
              </div>

              <button 
                onClick={() => handleNavigateToHomeSection('team')}
                className="group inline-flex items-center gap-3 text-xs uppercase font-bold tracking-[0.25em] pb-2 border-b-2 border-brand-900 hover:border-brand-gold hover:text-brand-gold transition-colors"
              >
                {t.advPageSec4Cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="technical-grid absolute inset-0 opacity-10"></div>
              <div className="relative z-10 p-4 border border-brand-900/10">
                <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                  <img 
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800" 
                    alt="Kenji Tanaka, CEO Tokyo Trust Capital" 
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[1200ms]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-1">
                    {lang === 'EN' ? 'CEO & Founder Spotlight' : 'CEO 創業者スポットライト'}
                  </div>
                  <h4 className="text-lg font-serif text-brand-900 mb-2">
                    {lang === 'EN' ? 'Kenji Tanaka' : '田中 賢二'}
                  </h4>
                  <p className="text-xs opacity-50 font-light leading-relaxed">
                    {lang === 'EN' 
                      ? "Over 25 years in institutional funds, managing massive core office portfolio assets across primary metropolitan areas in Japan."
                      : "25年以上にわたり外資系金融機関不動産部門を主導。一等地オフィスクラスの大型ポートフォリオ運用における第一人者。"}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: THE FULL-CYCLE SUPPORT (RELIABILITY) */}
      <section className="py-32 bg-brand-900 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-900 via-brand-900 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
              {lang === 'EN' ? 'THE COMPREHENSIVE PROCESS' : '一気通貫のフルサイクル支援力'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif mb-8 text-white leading-tight">
              {t.advPageSec5Title}
            </h2>
            <p className="text-lg opacity-65 font-light leading-relaxed">
              {t.advPageSec5Lead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.advPageSec5Points.map((step, idx) => {
              const label = ["01/ ACQUISITION", "02/ OPERATIONS", "03/ DISPOSITION"];
              const icons = [
                <Layers className="w-5 h-5 text-brand-gold" key="0" />,
                <CheckCircle2 className="w-5 h-5 text-brand-gold" key="1" />,
                <FileText className="w-5 h-5 text-brand-gold" key="2" />
              ];
              return (
                <div key={idx} className="bg-white/5 border border-white/10 p-10 flex flex-col justify-between hover:bg-white/10 transition-colors">
                  <div>
                    <div className="flex justify-between items-center mb-10">
                      <span className="text-[10px] font-mono tracking-widest text-brand-gold font-bold">{label[idx]}</span>
                      {icons[idx]}
                    </div>
                    <h3 className="text-2xl font-serif mb-6 text-white">{step.title}</h3>
                    <p className="text-xs opacity-60 leading-relaxed font-light">{step.description}</p>
                  </div>
                  <div className="h-[1px] w-20 bg-brand-gold mt-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA (THE INVITATION) */}
      <section className="py-32 bg-paper relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square technical-grid opacity-[0.03] scale-150 rotate-45"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-8">
            {lang === 'EN' ? 'A HIGH-STANDARD PARTNERSHIP' : '極上のアライアンス'}
          </div>
          <h2 className="text-4xl sm:text-6xl font-serif mb-10 leading-tight text-brand-900">
            {t.advPageSec6Title}
          </h2>
          <p className="text-base sm:text-xl opacity-60 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            {t.advPageSec6Lead}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button 
              onClick={onContactClick}
              className="px-12 py-5 bg-brand-900 text-white text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-brand-gold transition-all shadow-xl shadow-brand-900/10 w-full sm:w-auto outline-none"
            >
              {t.advPageSec6Cta1}
            </button>
            <button 
              onClick={() => handleNavigateToHomeSection('track-record')}
              className="px-12 py-5 border border-brand-900/20 text-brand-900 text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-brand-900/5 transition-all w-full sm:w-auto"
            >
              {t.advPageSec6Cta2}
            </button>
          </div>
        </div>
      </section>

    </div>
  );

  function handleNavigateToHomeSection(sectionId: string) {
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  }
};
