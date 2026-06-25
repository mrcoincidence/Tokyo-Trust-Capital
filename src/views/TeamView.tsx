import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Linkedin, 
  Award, 
  Users, 
  Shield, 
  Globe, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { translations } from '../data/translations';

interface TeamViewProps {
  lang: 'EN' | 'JP';
  setCurrentView: (view: 'home' | 'advantage' | 'services' | 'team' | 'why-japan') => void;
  onContactClick: () => void;
}

export const TeamView = ({ lang, setCurrentView, onContactClick }: TeamViewProps) => {
  const t = translations[lang];

  return (
    <div className="overflow-x-hidden min-h-screen bg-paper/20">
      
      {/* SECTION 1: HERO HEADER (THE HUMAN EDGE) */}
      <header className="relative min-h-[75vh] flex items-center pt-32 overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e0ee26da7bb?q=80&w=2000" 
            alt="Bicultural Tokyo Team in Professional Collaborative Metting Room" 
            className="w-full h-full object-cover opacity-15 grayscale contrast-125 scale-100"
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
              {lang === 'EN' ? 'THE HUMAN EDGE' : '卓越したチーム・アイデンティティ'}
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-[5rem] font-serif leading-[1.05] mb-10 text-white">
              {lang === 'EN' ? 'Local Insight.' : 'ローカルの知見。'}<br />
              <span className="italic text-brand-gold">{lang === 'EN' ? 'Global Pedigree.' : 'グローバルの実績。'}</span>
            </h1>
            
            <p className="text-lg sm:text-xl opacity-80 font-light leading-relaxed max-w-2xl mb-12">
              {t.teamPageHeroSub}
            </p>
            
            <div className="h-[1px] w-32 bg-brand-gold mb-4"></div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/55 font-semibold">
              Tokyo Trust Capital • Conflict-Free Advisory Team
            </p>
          </motion.div>
        </div>
      </header>

      {/* SECTION 2: STRENGTH IN NUMBERS (COLLECTIVE TRACK RECORD) */}
      <section className="py-24 bg-white relative border-b border-brand-900/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
              {lang === 'EN' ? 'NUMERICAL STRENGTH' : '強みを証明する組織実績'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-900 leading-tight mb-6">
              {t.teamPageSec2Title}
            </h2>
            <div className="h-[2px] w-20 bg-brand-gold/50 mb-6"></div>
            <p className="text-lg text-brand-900/70 font-light leading-relaxed">
              {t.teamPageSec2Lead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.teamPageSec2Stats.map((stat, idx) => {
              const statIcons = [
                <Award className="w-5 h-5 text-brand-gold" key="0" />,
                <Users className="w-5 h-5 text-brand-gold" key="1" />,
                <Globe className="w-5 h-5 text-brand-gold" key="2" />,
                <Shield className="w-5 h-5 text-brand-gold" key="3" />
              ];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-paper/10 p-8 border border-brand-900/[0.03] flex flex-col hover:border-brand-gold/20 transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-gold/5 flex items-center justify-center mb-6">
                    {statIcons[idx]}
                  </div>
                  <div className="text-3xl sm:text-4xl font-serif text-brand-900 font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-brand-900 opacity-60 mb-3">
                    {stat.label}
                  </div>
                  <p className="text-xs opacity-50 leading-relaxed font-light mt-auto">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: LEADERSHIP SPOTLIGHT (THE CORE ADVANTAGE) */}
      <section className="py-32 bg-paper/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Spotlight Intro */}
            <div className="lg:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
                {lang === 'EN' ? 'THE CORE ADVANTAGE' : '核となる優位性の象徴'}
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-brand-900 leading-tight mb-8">
                {t.teamPageSec3Title}
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold/50 mb-8"></div>
              <p className="text-brand-900/60 font-light leading-relaxed text-sm">
                {t.teamPageSec3Lead}
              </p>
            </div>

            {/* CEO Profile Card */}
            <div className="lg:col-span-8 bg-white border border-brand-900/[0.03] shadow-lg p-8 sm:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-[0.015] pointer-events-none">
                <Sparkles className="w-48 h-48 text-brand-gold" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                {/* Left side: Avatar */}
                <div className="md:col-span-4 flex flex-col items-center">
                  <div className="aspect-[3/4] w-full bg-brand-900/5 relative overflow-hidden group border border-brand-900/5">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" 
                      alt="Kenji Tanaka - Tokyo Trust Capital CEO" 
                      className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                  
                  {/* LinkedIn Icon */}
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-6 flex items-center gap-2 group text-[10px] uppercase font-bold tracking-widest text-[#0077B5] hover:text-[#005582] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 fill-current" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>

                {/* Right side: Bio & Details */}
                <div className="md:col-span-8 flex flex-col h-full">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                      {t.teamPageSec3ExecRole}
                    </span>
                    <h3 className="text-3xl font-serif text-brand-900 mt-2 mb-6">
                      {t.teamPageSec3ExecName}
                    </h3>
                    <div className="h-[1px] w-16 bg-brand-gold/40 mb-6"></div>
                    <p className="text-brand-900/70 font-light leading-relaxed text-sm mb-6">
                      {t.teamPageSec3ExecBio}
                    </p>
                  </div>

                  <div className="bg-paper/40 p-6 border border-brand-900/[0.02] mb-8">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-900 opacity-60 block mb-2">
                      {t.teamPageSec3ExecSpecTitle}
                    </span>
                    <p className="text-xs font-serif text-brand-900 italic font-semibold">
                      {t.teamPageSec3ExecSpec}
                    </p>
                  </div>

                  {/* Personal Commitment */}
                  <div className="mt-auto border-t border-brand-900/5 pt-8">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-bold opacity-30 block mb-3">
                      {lang === 'EN' ? 'PERSONAL STATEMENT' : '創業者よりメッセージ'}
                    </span>
                    <blockquote className="text-xs sm:text-sm font-serif italic text-brand-900 opacity-80 border-l border-brand-gold pl-4 py-1 leading-relaxed">
                      “{t.teamPageSec3ExecCommitQuote}”
                    </blockquote>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: OUR TEAM (THE SPECIALISTS) */}
      <section className="py-32 bg-white border-t border-b border-brand-900/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="max-w-3xl mb-20">
            <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
              {lang === 'EN' ? 'THE TEAM' : '実務を先導するプロフェッショナル'}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-brand-900 leading-tight mb-6">
              {t.teamPageSec4Title}
            </h2>
            <p className="text-lg opacity-60 font-light leading-relaxed">
              {t.teamPageSec4Lead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {t.teamPageSec4Members.map((member, index) => {
              const avatars = [
                "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600"
              ];
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-brand-900/[0.03] p-8 flex flex-col h-full hover:shadow-lg hover:border-brand-gold/15 transition-all group"
                >
                  {/* Portrait */}
                  <div className="aspect-[4/5] w-full bg-brand-900/5 overflow-hidden border border-brand-900/5 mb-8 relative">
                    <img 
                      src={avatars[index]} 
                      alt={`${member.name} - ${member.role}`} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 via-transparent to-transparent"></div>
                  </div>

                  <span className="text-[9px] uppercase tracking-widest font-bold text-brand-gold">
                    {member.role}
                  </span>
                  
                  <h4 className="text-xl font-serif text-brand-900 mt-2 mb-4 group-hover:text-brand-gold transition-colors">
                    {member.name}
                  </h4>
                  
                  <p className="text-xs opacity-60 font-light leading-relaxed mb-8">
                    {member.description}
                  </p>

                  <div className="mt-auto border-t border-brand-900/5 pt-6 flex justify-between items-center bg-transparent">
                    <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">
                      Bicultural Expert
                    </span>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#0077B5] hover:opacity-80 transition-opacity"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-4 h-4 fill-current" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: THE BRIDGE PHILOSOPHY (BICULTURAL EXPERTISE) */}
      <section className="py-32 bg-brand-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-900/95"></div>
          <div className="technical-grid absolute inset-0 opacity-[0.04]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-4">
              <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
                {lang === 'EN' ? 'OUR CULTURAL ADAPTATION' : '単なる言語翻訳を超えた「文化調整者」'}
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-white leading-tight mb-8">
                {t.teamPageSec5Title}
              </h2>
              <div className="h-[2px] w-20 bg-brand-gold mb-8"></div>
              <p className="text-white/70 font-light leading-relaxed text-sm">
                {t.teamPageSec5Lead}
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.teamPageSec5Pillars.map((pillar, i) => {
                const subIcons = [
                  <Globe className="w-5 h-5 text-brand-gold mb-6" key="0" />,
                  <MessageSquare className="w-5 h-5 text-brand-gold mb-6" key="1" />,
                  <Award className="w-5 h-5 text-brand-gold mb-6" key="2" />
                ];
                return (
                  <div key={i} className="bg-white/5 border border-white/10 p-8 flex flex-col h-full hover:border-brand-gold/30 transition-all">
                    {subIcons[i]}
                    <h4 className="text-base font-serif mb-4 text-white font-medium">{pillar.title}</h4>
                    <p className="text-xs opacity-60 leading-relaxed font-light mt-auto">{pillar.description}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-32 bg-white text-center border-t border-brand-900/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6">
            {lang === 'EN' ? 'BILINGUAL TRUST PARTNERSHIP' : '東京で共に歩む'}
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-brand-900 mb-6 leading-tight">
            {t.teamPageSec6Title}
          </h2>
          <p className="text-base opacity-60 leading-relaxed font-light mb-12 max-w-xl mx-auto">
            {t.teamPageSec6Lead}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button 
              onClick={onContactClick}
              className="w-full sm:w-auto px-10 py-5 bg-brand-900 text-white text-[10px] uppercase font-bold tracking-widest hover:bg-brand-gold hover:shadow-lg transition-all"
            >
              {t.teamPageSec6Cta1}
            </button>
            <button 
              onClick={() => setCurrentView('services')}
              className="w-full sm:w-auto px-10 py-5 border border-brand-900/30 text-brand-900 text-[10px] uppercase font-bold tracking-widest hover:bg-brand-900 hover:text-white transition-all"
            >
              {t.teamPageSec6Cta2}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
