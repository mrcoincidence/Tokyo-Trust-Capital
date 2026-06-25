import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Building2, 
  Landmark, 
  LineChart, 
  Search, 
  Globe, 
  FileText, 
  Layers, 
  ShieldCheck,
  TrendingUp,
  Coins
} from 'lucide-react';
import { translations } from '../data/translations';

interface ServicesViewProps {
  lang: 'EN' | 'JP';
  setCurrentView: (view: 'home' | 'advantage' | 'services' | 'team' | 'why-japan') => void;
  onContactClick: () => void;
}

export const ServicesView = ({ lang, setCurrentView, onContactClick }: ServicesViewProps) => {
  const t = translations[lang];

  return (
    <div className="overflow-x-hidden min-h-screen bg-paper/20">
      
      {/* SECTION 1: HERO HEADER (THE SOLUTION OVERVIEW) */}
      <header className="relative min-h-[75vh] flex items-center pt-32 overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000" 
            alt="Bicultural Advisory & Modern Architecture Blueprint Group" 
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
              {lang === 'EN' ? 'THE SOLUTION OVERVIEW' : '包括的ソリューション展開'}
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-[5rem] font-serif leading-[1.05] mb-10 text-white">
              {lang === 'EN' ? 'Full-Spectrum' : '一気通貫の'}<br />
              <span className="italic text-brand-gold">{lang === 'EN' ? 'Solutions.' : '不動産ソリューション。'}</span>
            </h1>
            
            <p className="text-lg sm:text-xl opacity-80 font-light leading-relaxed max-w-2xl mb-12">
              {t.servPageHeroSub}
            </p>
            
            <div className="h-[1px] w-32 bg-brand-gold mb-4"></div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/55">
              Tokyo Trust Capital • Institutional Asset Management
            </p>
          </motion.div>
        </div>
      </header>

      {/* SECTION 2: INBOUND INVESTMENT (FOCUSING ON JAPAN) */}
      <section id="inbound" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
                {lang === 'EN' ? 'INBOUND EXCELLENCE' : '日本不動産インバウンド投資'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif mb-8 text-brand-900 leading-tight">
                {t.servPageSec2Title}
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold/50 mb-8"></div>
              <p className="text-brand-900/60 font-light leading-relaxed text-sm">
                {lang === 'EN' 
                  ? "We provide foreign direct investment into Japanese real estate with unparalleled localized support, structuring specialized investment schemes appropriate for institutional global investors."
                  : "海外の機関投資家や大手不動産プレイヤーが求める、厳格な投資要件に対応可能。高度なTK-GKなどの税務スキーム設計と非公開案件の獲得を一元的にサポートします。"}
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-10">
              <p className="text-lg text-brand-900/80 leading-relaxed font-light mb-4">
                {t.servPageSec2Lead}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.servPageSec2Points.map((point, index) => {
                  const subIcons = [
                    <Search className="w-5 h-5 text-brand-gold mb-6" key="0" />,
                    <LineChart className="w-5 h-5 text-brand-gold mb-6" key="1" />,
                    <Layers className="w-5 h-5 text-brand-gold mb-6" key="2" />
                  ];
                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-8 bg-paper/20 border border-brand-900/[0.03] hover:border-brand-gold/25 transition-all group"
                    >
                      {subIcons[index]}
                      <h4 className="text-lg font-serif mb-4 text-brand-900">{point.title}</h4>
                      <p className="text-xs opacity-60 leading-relaxed font-light">{point.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6">
                <button 
                  onClick={onContactClick}
                  className="inline-flex items-center gap-2 group px-8 py-4 bg-brand-900 hover:bg-brand-gold text-white text-[10px] uppercase tracking-widest font-bold transition-all shadow-md"
                >
                  {t.servPageSec2Cta} <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE ASSET MANAGEMENT LIFECYCLE */}
      <section id="lifecycle" className="py-32 bg-paper/40 relative border-t border-b border-brand-900/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-24">
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
              {lang === 'EN' ? 'THE HELD LIFECYCLE' : 'フルサイクルを実行する'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-900 leading-tight mb-8">
              {t.servPageSec3Title}
            </h2>
            <p className="text-lg opacity-60 font-light leading-relaxed">
              {t.servPageSec3Lead}
            </p>
          </div>

          {/* Phase 1: Acquisition Support */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch mb-24 relative">
            <div className="lg:col-span-1 flex flex-col items-center">
              <span className="text-6xl font-serif text-brand-gold/30 font-bold">01</span>
              <div className="w-[1px] flex-grow bg-brand-gold/20 hidden lg:block my-6"></div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="text-xs text-brand-gold uppercase tracking-[0.3em] mb-3 font-semibold">
                {t.servPageSec3Phase1Sub}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-900 mb-6">
                {t.servPageSec3Phase1Title}
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-light">
                {lang === 'EN' 
                  ? "We carry out highly integrated technical assessment, physically verifying each property during Due Diligence to shield your capital against underlying market risk."
                  : "投資方針（マンデート）に合った物件取得を多角的にサポート。建築・都市規制分析、現地銀行交渉等、投資の初動を確実にコントロールします。"}
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.servPageSec3Phase1Points.map((point, index) => (
                <div key={index} className="bg-white p-8 border border-brand-900/[0.02] flex flex-col h-full hover:shadow-md hover:border-brand-gold/10 transition-all">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/5 flex items-center justify-center mb-6">
                    <span className="text-xs font-serif font-bold text-brand-gold">A{index + 1}</span>
                  </div>
                  <h4 className="text-base font-serif mb-3 text-brand-900 leading-tight">{point.title}</h4>
                  <p className="text-xs opacity-50 font-light leading-relaxed mt-auto">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 2: Operations & Asset Management */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch mb-24 relative">
            <div className="lg:col-span-1 flex flex-col items-center">
              <span className="text-6xl font-serif text-brand-gold/30 font-bold">02</span>
              <div className="w-[1px] flex-grow bg-brand-gold/20 hidden lg:block my-6"></div>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="text-xs text-brand-gold uppercase tracking-[0.3em] mb-3 font-semibold">
                {t.servPageSec3Phase2Sub}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-900 mb-6">
                {t.servPageSec3Phase2Title}
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-light">
                {lang === 'EN' 
                  ? "We act as your local fiduciary operator, administering and optimizing Cash Flow with robust billing analysis, active tenant management, and strict regulatory adherence."
                  : "特別目的会社（SPC）を通じ、期中の財務、送金処理、コベナンツ監視、リーシングマネジメントを全面的に担当するオペレーショナルエクセレンスの要。"}
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.servPageSec3Phase2Points.map((point, index) => (
                <div key={index} className="bg-white p-8 border border-brand-900/[0.02] flex flex-col h-full hover:shadow-md hover:border-brand-gold/10 transition-all">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/5 flex items-center justify-center mb-6">
                    <span className="text-xs font-serif font-bold text-brand-gold">O{index + 1}</span>
                  </div>
                  <h4 className="text-base font-serif mb-3 text-brand-900 leading-tight">{point.title}</h4>
                  <p className="text-xs opacity-50 font-light leading-relaxed mt-auto">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 3: Disposition & Exit Strategy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch relative">
            <div className="lg:col-span-1 flex flex-col items-center">
              <span className="text-6xl font-serif text-brand-gold/30 font-bold">03</span>
            </div>
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="text-xs text-brand-gold uppercase tracking-[0.3em] mb-3 font-semibold">
                {t.servPageSec3Phase3Sub}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-900 mb-6">
                {t.servPageSec3Phase3Title}
              </h3>
              <p className="text-sm opacity-60 leading-relaxed font-light">
                {lang === 'EN' 
                  ? "Exiting Japanese real estate cleanly requires highly managed trust processes, contract clarity, and clean corporate entity liquidation."
                  : "最高の結果をロックイン。入札による最適バイヤー選定からSPA取引調停、SPCの確実な清算・償還手続きまでをクリーンに実施します。"}
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.servPageSec3Phase3Points.map((point, index) => (
                <div key={index} className="bg-white p-8 border border-brand-900/[0.02] flex flex-col h-full hover:shadow-md hover:border-brand-gold/10 transition-all">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/5 flex items-center justify-center mb-6">
                    <span className="text-xs font-serif font-bold text-brand-gold">E{index + 1}</span>
                  </div>
                  <h4 className="text-base font-serif mb-3 text-brand-900 leading-tight">{point.title}</h4>
                  <p className="text-xs opacity-50 font-light leading-relaxed mt-auto">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: OUTBOUND INVESTMENT (GLOBAL REACH) */}
      <section id="outbound" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div>
              <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
                {lang === 'EN' ? 'GLOBAL DIVERSIFICATION' : '海外資産へのアウトバウンド投資'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-900 mb-8 leading-tight">
                {t.servPageSec4Title}
              </h2>
              <p className="text-base text-brand-900/70 font-light leading-relaxed mb-10">
                {t.servPageSec4Lead}
              </p>
              
              <div className="h-[1px] w-full bg-brand-900/10 mb-10"></div>
              
              <ul className="flex flex-col gap-6">
                {t.servPageSec4Points.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center mt-1 shrink-0">
                      <ChevronRight className="w-3.5 h-3.5 text-brand-gold" />
                    </div>
                    <div>
                      <h4 className="text-base font-serif text-brand-900 mb-2">{item.title}</h4>
                      <p className="text-xs opacity-60 leading-relaxed font-light">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-brand-900/5 overflow-hidden border border-brand-900/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=1200" 
                  alt="Golden Gate Bridge / Global Reach Outbound" 
                  className="w-full h-full object-cover opacity-80 grayscale contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: WHY OUR PROCESS WORKS (THE HUMAN TOUCH) */}
      <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-900/90"></div>
          <div className="technical-grid absolute inset-0 opacity-[0.03]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-brand-gold/30 mb-8">
            <Globe className="w-5 h-5 text-brand-gold" />
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-white mb-6">
            {t.servPageSec5Title}
          </h2>
          <div className="h-[1px] w-24 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-base sm:text-lg opacity-80 font-light leading-relaxed max-w-2xl mx-auto">
            {t.servPageSec5Lead}
          </p>
        </div>
      </section>

      {/* SECTION 6: THE FINAL CTA */}
      <section className="py-32 bg-white text-center border-t border-brand-900/[0.04]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
            {lang === 'EN' ? 'SECURE A PARTNERSHIP' : '東京トラストキャピタルと対話し、拓く'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-brand-900 mb-6 leading-tight">
            {t.servPageSec6Title}
          </h2>
          <p className="text-base opacity-60 leading-relaxed font-light mb-12 max-w-xl mx-auto">
            {t.servPageSec6Lead}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button 
              onClick={onContactClick}
              className="w-full sm:w-auto px-10 py-5 bg-brand-900 text-white text-[10px] uppercase font-bold tracking-widest hover:bg-brand-gold hover:shadow-lg transition-all"
            >
              {t.servPageSec6Cta1}
            </button>
            <button 
              onClick={() => setCurrentView('home')}
              className="w-full sm:w-auto px-10 py-5 border border-brand-900/30 text-brand-900 text-[10px] uppercase font-bold tracking-widest hover:bg-brand-900 hover:text-white transition-all"
            >
              {lang === 'EN' ? 'Return Home' : 'メインホームに戻る'}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
