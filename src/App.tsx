import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { AdvantageView } from './views/AdvantageView';
import { ServicesView } from './views/ServicesView';
import { TeamView } from './views/TeamView';
import { WhyJapanView } from './views/WhyJapanView';
import { X, Check, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'advantage' | 'services' | 'team' | 'why-japan'>('home');
  const [lang, setLang] = useState<'EN' | 'JP'>('EN');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    sector: 'Residential',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Simulate submission & close modal after showing success
      setTimeout(() => {
        setIsContactOpen(false);
        setFormSubmitted(false);
        setFormState({ name: '', email: '', company: '', sector: 'Residential', message: '' });
      }, 2500);
    }, 400);
  };

  return (
    <div className="selection:bg-brand-gold selection:text-white scroll-smooth relative min-h-screen flex flex-col justify-between bg-paper/20">
      
      {/* Dynamic Navigation */}
      <Navbar 
        currentView={currentView}
        setCurrentView={setCurrentView}
        lang={lang}
        setLang={setLang}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Primary Content View with smooth fade-in transitions */}
      <main className="flex-grow pt-4">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HomeView 
                lang={lang}
                setCurrentView={setCurrentView}
                onContactClick={() => setIsContactOpen(true)}
              />
            </motion.div>
          )}
          {currentView === 'advantage' && (
            <motion.div
              key="advantage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AdvantageView 
                lang={lang}
                setCurrentView={setCurrentView}
                onContactClick={() => setIsContactOpen(true)}
              />
            </motion.div>
          )}
          {currentView === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ServicesView 
                lang={lang}
                setCurrentView={setCurrentView}
                onContactClick={() => setIsContactOpen(true)}
              />
            </motion.div>
          )}
          {currentView === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TeamView 
                lang={lang}
                setCurrentView={setCurrentView}
                onContactClick={() => setIsContactOpen(true)}
              />
            </motion.div>
          )}
          {currentView === 'why-japan' && (
            <motion.div
              key="why-japan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <WhyJapanView 
                lang={lang}
                setCurrentView={setCurrentView}
                onContactClick={() => setIsContactOpen(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Dynamic Persistent Footer */}
      <Footer 
        lang={lang}
        setCurrentView={setCurrentView}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Premium Interactive Contact Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-900/40 backdrop-blur-md"
              onClick={() => setIsContactOpen(false)}
            />

            {/* Modal Body */}
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-[#FAF8F5] max-w-4xl w-full shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
            >
              {/* Left Column: Stylized info */}
              <div className="md:col-span-4 bg-brand-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="technical-grid absolute inset-0 opacity-[0.06] pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white flex items-center justify-center mb-10">
                    <span className="text-brand-900 font-serif font-bold italic text-lg">T</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-6 text-white leading-tight">
                    {lang === 'EN' ? 'Join Us in Tokyo' : '東京で共に歩む'}
                  </h3>
                  <p className="text-xs opacity-60 font-light leading-relaxed mb-8">
                    {lang === 'EN' 
                      ? 'Discuss off-market allocations, development JV schemes, and asset customization with our team of billingual advisors.'
                      : 'お探しの非公開案件情報、共同開発スキーム、税務コンプライアンス等についてお気軽にご相談ください。'}
                  </p>
                </div>

                <div className="relative z-10 flex flex-col gap-6 text-[10px] uppercase tracking-widest font-bold">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                    <span className="opacity-70 font-mono">advisor@tokyotrustcap.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                    <span className="opacity-70 font-mono">+81 3-5123-XXXX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                    <span className="opacity-70">Marunouchi, Chiyoda-ku, Tokyo</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="md:col-span-8 p-8 sm:p-12 relative overflow-y-auto max-h-[90vh]">
                <button 
                  onClick={() => setIsContactOpen(false)}
                  className="absolute top-6 right-6 text-brand-900 hover:text-brand-gold transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>

                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h4 className="text-2xl font-serif mb-8 text-brand-900">
                        {lang === 'EN' ? 'Send an Inquiry' : 'お問い合わせの送信'}
                      </h4>

                      <form onSubmit={handleContactSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-[9px] uppercase tracking-widest font-bold text-brand-900 opacity-60 mb-2">
                              {lang === 'EN' ? 'Full Name' : 'ご氏名'}
                            </label>
                            <input 
                              type="text" 
                              required
                              value={formState.name}
                              onChange={(e) => setFormState({...formState, name: e.target.value})}
                              placeholder="e.g. Kenji Sato"
                              className="w-full bg-white border border-brand-900/10 px-4 py-3.5 text-sm focus:outline-none focus:border-brand-gold font-light rounded-none transition-colors"
                            />
                          </div>

                          <div>
                            <label className="block text-[9px] uppercase tracking-widest font-bold text-brand-900 opacity-60 mb-2">
                              {lang === 'EN' ? 'Corporate Email' : '会社メールアドレス'}
                            </label>
                            <input 
                              type="email" 
                              required
                              value={formState.email}
                              onChange={(e) => setFormState({...formState, email: e.target.value})}
                              placeholder="you@company.com"
                              className="w-full bg-white border border-brand-900/10 px-4 py-3.5 text-sm focus:outline-none focus:border-brand-gold font-light rounded-none transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[9px] uppercase tracking-widest font-bold text-brand-900 opacity-60 mb-2">
                            {lang === 'EN' ? 'Company Name' : '貴社名'}
                          </label>
                          <input 
                            type="text" 
                            required
                            value={formState.company}
                            onChange={(e) => setFormState({...formState, company: e.target.value})}
                            placeholder="e.g. Global Properties Inc."
                            className="w-full bg-white border border-brand-900/10 px-4 py-3.5 text-sm focus:outline-none focus:border-brand-gold font-light rounded-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] uppercase tracking-widest font-bold text-brand-900 opacity-60 mb-2">
                            {lang === 'EN' ? 'Sector Interest' : '検討されている特定のセクター'}
                          </label>
                          <select 
                            value={formState.sector}
                            onChange={(e) => setFormState({...formState, sector: e.target.value})}
                            className="w-full bg-white border border-brand-900/10 px-4 py-3.5 text-sm focus:outline-none focus:border-brand-gold font-light rounded-none transition-colors"
                          >
                            <option value="Residential">{lang === 'EN' ? 'Residential Portfolio' : 'レジデンシャル・ポートフォリオ'}</option>
                            <option value="Commercial">{lang === 'EN' ? 'Commercial Office' : '商業ビル / オフィス'}</option>
                            <option value="Logistics">{lang === 'EN' ? 'Logistics / Infrastructure' : '物流不動産 / インフラ'}</option>
                            <option value="Outbound">{lang === 'EN' ? 'Outbound Capital Setup' : 'アウトバウンド投資のご相談'}</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[9px] uppercase tracking-widest font-bold text-brand-900 opacity-60 mb-2">
                            {lang === 'EN' ? 'Message' : 'メッセージ内容'}
                          </label>
                          <textarea 
                            rows={4}
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                            placeholder={lang === 'EN' ? 'Describe your allocation requirements...' : 'ご要望や関心項目をご記入ください...'}
                            className="w-full bg-white border border-brand-900/10 p-4 text-sm focus:outline-none focus:border-brand-gold font-light rounded-none transition-colors resize-none"
                          />
                        </div>

                        <button 
                          type="submit"
                          className="w-full py-4 bg-brand-900 text-white text-[10px] uppercase font-bold tracking-[0.25em] hover:bg-brand-gold hover:shadow-lg transition-all flex items-center justify-center gap-3 outline-none"
                        >
                          {lang === 'EN' ? 'Send Allocation Inquiry' : 'お問い合わせ内容を送信'}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center"
                    >
                      <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
                        <Check className="w-8 h-8 text-brand-gold" />
                      </div>
                      
                      <h4 className="text-3xl font-serif text-brand-900 mb-4">
                        {lang === 'EN' ? 'Inquiry Submitted' : '送信完了いたしました'}
                      </h4>
                      
                      <p className="text-sm opacity-60 leading-relaxed max-w-md mx-auto font-light">
                        {lang === 'EN'
                          ? 'Thank you for your inquiry. A Tokyo Trust Capital representative will contact you via your corporate email within 24 business hours.'
                          : 'お問い合わせいただき誠にありがとうございます。24営業時間以内に、担当者よりご連絡をさせていただきます。'}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .italic {
          font-family: var(--font-serif);
          font-style: italic;
        }
        .technical-grid {
          background-image: radial-gradient(circle, var(--color-brand-900) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .glass-card {
           background: rgba(255, 255, 255, 0.4);
           backdrop-filter: blur(12px);
           border: 1px solid rgba(255, 255, 255, 0.2);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
