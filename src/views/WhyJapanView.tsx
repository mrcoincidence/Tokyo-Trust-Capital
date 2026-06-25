import { motion } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  MapPin, 
  Compass, 
  Building2, 
  Hotel, 
  Truck, 
  Eye, 
  Award, 
  ChevronRight, 
  ArrowRight,
  Sparkles,
  BarChart3,
  Globe,
  Database
} from 'lucide-react';
import { translations } from '../data/translations';

interface WhyJapanViewProps {
  lang: 'EN' | 'JP';
  setCurrentView: (view: 'home' | 'advantage' | 'services' | 'team' | 'why-japan') => void;
  onContactClick: () => void;
}

export const WhyJapanView = ({ lang, setCurrentView, onContactClick }: WhyJapanViewProps) => {
  const t = translations[lang];

  // Raw data for the Yield Spread visual comparison
  const yieldSpreads = [
    { city: lang === 'EN' ? 'Tokyo' : '東京', spread: 2.3, capRate: 3.4, debtCost: 1.1, highlight: true },
    { city: lang === 'EN' ? 'Singapore' : 'シンガポール', spread: 0.9, capRate: 3.8, debtCost: 2.9, highlight: false },
    { city: lang === 'EN' ? 'London' : 'ロンドン', spread: 1.1, capRate: 5.2, debtCost: 4.1, highlight: false },
    { city: lang === 'EN' ? 'New York' : 'ニューヨーク', spread: 1.2, capRate: 5.5, debtCost: 4.3, highlight: false },
  ];

  // Raw data for transactional volume
  const liquidityRanks = [
    { rank: "01", city: lang === 'EN' ? 'Tokyo' : '東京', volume: "$18.2B", status: "Top Tier Global" },
    { rank: "02", city: lang === 'EN' ? 'New York' : 'ニューヨーク', volume: "$17.4B", status: "Highly Liquid" },
    { rank: "03", city: lang === 'EN' ? 'London' : 'ロンドン', volume: "$15.9B", status: "European Hub" },
    { rank: "04", city: lang === 'EN' ? 'Singapore' : 'シンガポール', volume: "$10.5B", status: "Regional Peak" }
  ];

  return (
    <div className="overflow-x-hidden min-h-screen bg-paper/20 animate-fade-in">
      
      {/* SECTION 1: HERO HEADER (THE INVESTMENT THESIS) */}
      <header className="relative min-h-[75vh] flex items-center pt-32 overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?q=80&w=2000" 
            alt="Magnificent High Resolution Tokyo Skyline with Downtown Marunouchi" 
            className="w-full h-full object-cover opacity-20 grayscale scale-100"
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
              {lang === 'EN' ? 'THE INVESTMENT THESIS' : '日本不動産の投資テーゼ'}
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-[5rem] font-serif leading-[1.05] mb-10 text-white">
              {lang === 'EN' ? 'Stability & Opportunity.' : '際立つ安定性と。'}<br />
              <span className="italic text-brand-gold">{lang === 'EN' ? 'In a Volatile World.' : '不確実性における投資魅力。'}</span>
            </h1>
            
            <p className="text-lg sm:text-xl opacity-80 font-light leading-relaxed max-w-2xl mb-12">
              {t.whyJapanHeroSub}
            </p>
            
            <div className="h-[1px] w-32 bg-brand-gold mb-4"></div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/55 font-semibold">
              Tokyo Trust Capital • APAC Institutional Hub
            </p>
          </motion.div>
        </div>
      </header>

      {/* SECTION 2: THE MACRO CASE (WHY NOW?) */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Title Block */}
            <div className="lg:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
                {lang === 'EN' ? 'THE MACRO CASE' : '日本市場の強固なマクロ構造'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-900 leading-tight mb-8">
                {t.whyJapanSec2Title}
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold/50 mb-8"></div>
              <p className="text-brand-900/60 font-light leading-relaxed text-sm">
                {lang === 'EN' 
                  ? "At a time of synchronized geopolitical reorganization, Tokyo stands out as an safe-haven market offering consistent legal protections and world-class rule of law."
                  : "世界秩序が再編成されゆく現代において、東京は高度な所有権保護、透明な司法執行、そして他のアジア市場にはない究極の安全弁を提供します。"}
              </p>
            </div>

            {/* List Case */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              <p className="text-xl text-brand-900/80 leading-relaxed font-light mb-4">
                {t.whyJapanSec2Lead}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.whyJapanSec2Points.map((point, index) => {
                  const macroIcons = [
                    <ShieldCheck className="w-5 h-5 text-brand-gold mb-6" key="0" />,
                    <Compass className="w-5 h-5 text-brand-gold mb-6" key="1" />,
                    <MapPin className="w-5 h-5 text-brand-gold mb-6" key="2" />
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
                      {macroIcons[index]}
                      <h4 className="text-lg font-serif mb-4 text-brand-900">{point.title}</h4>
                      <p className="text-xs opacity-60 leading-relaxed font-light">{point.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE FINANCIAL EDGE (DATA-DRIVEN INSIGHTS) */}
      <section className="py-32 bg-paper/40 relative border-t border-b border-brand-900/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-24">
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
              {lang === 'EN' ? 'DATA-DRIVEN INSIGHTS' : 'イールドスプレッドの視覚データ分析'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-900 leading-tight mb-8">
              {t.whyJapanSec3Title}
            </h2>
            <p className="text-lg opacity-60 font-light leading-relaxed">
              {t.whyJapanSec3Lead}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            
            {/* Highlight Card 1: Yield Spread Bar Chart */}
            <div className="bg-white p-8 sm:p-12 border border-brand-900/[0.03] shadow-md flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                    {t.whyJapanSec3Data1Title}
                  </span>
                  <BarChart3 className="w-5 h-5 text-brand-gold" />
                </div>
                
                <p className="text-sm opacity-60 leading-relaxed font-light mb-10">
                  {t.whyJapanSec3Data1Text}
                </p>

                {/* Simulated Chart */}
                <div className="flex flex-col gap-6 mb-8">
                  {yieldSpreads.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className={item.highlight ? 'font-bold text-brand-900' : 'text-brand-900/60'}>
                          {item.city} {item.highlight && <span className="text-brand-gold font-sans font-bold">(Wide Spread)</span>}
                        </span>
                        <span className="font-bold text-brand-900">{item.spread}% {lang === 'EN' ? 'spread' : '差益'}</span>
                      </div>
                      <div className="w-full bg-paper/50 h-3 rounded-full overflow-hidden relative border border-brand-900/[0.03]">
                        {/* Cap Rate segment & Debt Cost visualization */}
                        <div 
                          className={`h-full ring-1 ring-white/10 ${item.highlight ? 'bg-gradient-to-r from-brand-900 to-brand-gold' : 'bg-brand-900/30'}`}
                          style={{ width: `${(item.spread / 3) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-[10px] opacity-40">
                        <span>{lang === 'EN' ? 'Debt Cost:' : 'ローン金利:'} {item.debtCost}%</span>
                        <span>{lang === 'EN' ? 'Property Yield:' : 'プロパティ利回り:'} {item.capRate}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-brand-900/5 pt-6 text-[10px] font-mono opacity-40 text-left">
                {t.whyJapanSec3Data1Ref}
              </div>
            </div>

            {/* Highlight Card 2: Liquidity Analysis */}
            <div className="bg-white p-8 sm:p-12 border border-brand-900/[0.03] shadow-md flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-10">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                    {t.whyJapanSec3Data2Title}
                  </span>
                  <Database className="w-5 h-5 text-brand-gold" />
                </div>

                <p className="text-sm opacity-60 leading-relaxed font-light mb-10">
                  {t.whyJapanSec3Data2Text}
                </p>

                {/* List Ranking of Liquid Markets */}
                <div className="flex flex-col divide-y divide-brand-900/5 mb-8">
                  {liquidityRanks.map((item, i) => (
                    <div key={i} className="py-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-serif font-bold ${i === 0 ? 'text-brand-gold' : 'text-brand-900/40'}`}>
                          {item.rank}
                        </span>
                        <div>
                          <h4 className="text-xs font-serif text-brand-900 font-bold">{item.city}</h4>
                          <span className="text-[9px] font-sans opacity-45">{item.status}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-brand-900">
                        {item.volume}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-brand-900/5 pt-6 text-[10px] font-mono opacity-40 text-left">
                {t.whyJapanSec3Data2Ref}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: SECTOR-SPECIFIC OPPORTUNITIES */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-24">
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
              {lang === 'EN' ? 'BEYOND CORE OFFICE' : 'アルファを獲得する投資機会セクター'}
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-brand-900 leading-tight mb-8">
              {t.whyJapanSec4Title}
            </h2>
            <p className="text-lg opacity-60 font-light leading-relaxed">
              {t.whyJapanSec4Lead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {t.whyJapanSec4Sectors.map((sector, index) => {
              const sectorIcons = [
                <Building2 className="w-5 h-5 text-brand-gold" key="0" />,
                <Truck className="w-5 h-5 text-brand-gold" key="1" />,
                <Hotel className="w-5 h-5 text-brand-gold" key="2" />
              ];
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-paper/10 border border-brand-900/[0.03] p-10 flex flex-col h-full hover:border-brand-gold/25 hover:shadow-lg transition-all"
                >
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/5 flex items-center justify-center">
                      {sectorIcons[index]}
                    </div>
                    <span className="text-[9px] font-mono tracking-wider text-brand-gold bg-brand-gold/5 border border-brand-gold/15 rounded-full px-3 py-1 font-bold">
                      {sector.focus}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-brand-900 mb-4">{sector.title}</h3>
                  <p className="text-xs opacity-65 leading-relaxed font-light mt-2 mb-10">
                    {sector.description}
                  </p>
                  
                  <div className="h-[1px] w-full bg-brand-900/5 mt-auto"></div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-[10px] font-mono opacity-40 text-right">
            {t.whyJapanSec4Ref}
          </p>

        </div>
      </section>

      {/* SECTION 5: NAVIGATING THE "JAPAN GAP" (THE TTC AUTHORITY) */}
      <section className="py-32 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-900/95"></div>
          <div className="technical-grid absolute inset-0 opacity-[0.03]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
                {lang === 'EN' ? 'THE TTC INTERPRETATION' : '見えない情報のギャップを埋める'}
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight mb-8">
                {t.whyJapanSec5Title}
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold mb-8"></div>
              <p className="text-white/70 font-light leading-relaxed text-sm">
                {t.whyJapanSec5Lead}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.whyJapanSec5Points.map((point, index) => {
                const solutionIcons = [
                  <Eye className="w-5 h-5 text-brand-gold" key="0" />,
                  <Globe className="w-5 h-5 text-brand-gold" key="1" />,
                  <Award className="w-5 h-5 text-brand-gold" key="2" />
                ];
                return (
                  <div key={index} className="bg-white/5 border border-white/10 p-8 flex flex-col h-full hover:border-brand-gold/30 transition-all">
                    {solutionIcons[index]}
                    <h4 className="text-base font-serif mb-4 text-white mt-6">{point.title}</h4>
                    <p className="text-xs opacity-60 leading-relaxed font-light mt-auto">{point.description}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: THE FINAL CTA */}
      <section className="py-32 bg-white text-center border-t border-brand-900/[0.04]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
            {lang === 'EN' ? 'SECURE THE SAFE-HAVEN EDGE' : '東京トラストキャピタルと安全対面へ'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-brand-900 mb-6 leading-tight">
            {t.whyJapanSec6Title}
          </h2>
          <p className="text-base opacity-60 leading-relaxed font-light mb-12 max-w-xl mx-auto">
            {t.whyJapanSec6Lead}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button 
              onClick={onContactClick}
              className="w-full sm:w-auto px-10 py-5 bg-brand-900 text-white text-[10px] uppercase font-bold tracking-widest hover:bg-brand-gold hover:shadow-lg transition-all"
            >
              {t.whyJapanSec6Cta1}
            </button>
            <button 
              onClick={() => setCurrentView('services')}
              className="w-full sm:w-auto px-10 py-5 border border-brand-900/30 text-brand-900 text-[10px] uppercase font-bold tracking-widest hover:bg-brand-900 hover:text-white transition-all"
            >
              {t.whyJapanSec6Cta2}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
