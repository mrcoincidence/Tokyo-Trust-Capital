export interface TranslationSet {
  // Navigation
  navHome: string;
  navAdvantage: string;
  navTeam: string;
  navServices: string;
  navTrackRecord: string;
  navWhyJapan: string;
  contactUs: string;
  clientLogin: string;

  // Hero Section
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroTitle3: string;
  heroSub: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;

  // Advantage Section (Home Summary)
  advBadge: string;
  advTitle: string;
  advSub: string;
  advLink: string;
  advPillars: {
    title: string;
    description: string;
  }[];

  // Services Section
  servicesBadge: string;
  servicesTitle: string;
  servicesSub: string;
  servicesList: {
    title: string;
    description: string;
  }[];
  servicesCta: string;

  // Why Japan Section
  japanBadge: string;
  japanTitle: string;
  japanSub: string;
  japanPoints: {
    title: string;
    description: string;
  }[];
  japanCta: string;

  // Team Section
  teamBadge: string;
  teamTitle: string;
  teamTitleItalic: string;
  teamSub: string;
  teamQuote: string;
  teamCta: string;

  // Track Record Section
  trackBadge: string;
  trackTitle: string;
  trackSub: string;
  trackStats: {
    value: string;
    label: string;
  }[];
  trackCta: string;

  // Contact / CTA Section
  ctaTitle: string;
  ctaSub: string;
  ctaButton: string;

  // Advantage Subpage (New!)
  advPageHeroTitle1: string;
  advPageHeroTitle2: string;
  advPageHeroSub: string;
  
  advPageSec2Title: string;
  advPageSec2Lead: string;
  advPageSec2Points: {
    title: string;
    description: string;
  }[];

  advPageSec3Title: string;
  advPageSec3Lead: string;
  advPageSec3Points: {
    title: string;
    description: string;
  }[];

  advPageSec4Title: string;
  advPageSec4Lead: string;
  advPageSec4BoutiqueTitle: string;
  advPageSec4BoutiqueDesc: string;
  advPageSec4Cta: string;

  advPageSec5Title: string;
  advPageSec5Lead: string;
  advPageSec5Points: {
    title: string;
    description: string;
  }[];

  advPageSec6Title: string;
  advPageSec6Lead: string;
  advPageSec6Cta1: string;
  advPageSec6Cta2: string;

  // Footer
  footerDesc: string;
  footerLegalTitle: string;

  // Services Subpage (New!)
  servPageHeroTitle: string;
  servPageHeroSub: string;

  servPageSec2Title: string;
  servPageSec2Lead: string;
  servPageSec2Points: {
    title: string;
    description: string;
  }[];
  servPageSec2Cta: string;

  servPageSec3Title: string;
  servPageSec3Lead: string;
  servPageSec3Phase1Title: string;
  servPageSec3Phase1Sub: string;
  servPageSec3Phase1Points: {
    title: string;
    description: string;
  }[];
  servPageSec3Phase2Title: string;
  servPageSec3Phase2Sub: string;
  servPageSec3Phase2Points: {
    title: string;
    description: string;
  }[];
  servPageSec3Phase3Title: string;
  servPageSec3Phase3Sub: string;
  servPageSec3Phase3Points: {
    title: string;
    description: string;
  }[];

  servPageSec4Title: string;
  servPageSec4Lead: string;
  servPageSec4Points: {
    title: string;
    description: string;
  }[];

  servPageSec5Title: string;
  servPageSec5Lead: string;

  servPageSec6Title: string;
  servPageSec6Lead: string;
  servPageSec6Cta1: string;
  servPageSec6Cta2: string;

  // Team Subpage
  teamPageHeroTitle: string;
  teamPageHeroSub: string;

  teamPageSec2Title: string;
  teamPageSec2Lead: string;
  teamPageSec2Stats: {
    value: string;
    label: string;
    description: string;
  }[];

  teamPageSec3Title: string;
  teamPageSec3Lead: string;
  teamPageSec3ExecName: string;
  teamPageSec3ExecRole: string;
  teamPageSec3ExecBio: string;
  teamPageSec3ExecSpecTitle: string;
  teamPageSec3ExecSpec: string;
  teamPageSec3ExecCommitQuote: string;

  teamPageSec4Title: string;
  teamPageSec4Lead: string;
  teamPageSec4Members: {
    name: string;
    role: string;
    description: string;
  }[];

  teamPageSec5Title: string;
  teamPageSec5Lead: string;
  teamPageSec5Pillars: {
    title: string;
    description: string;
  }[];

  teamPageSec6Title: string;
  teamPageSec6Lead: string;
  teamPageSec6Cta1: string;
  teamPageSec6Cta2: string;

  // Why Japan Subpage (New!)
  whyJapanHeroTitle: string;
  whyJapanHeroSub: string;

  whyJapanSec2Title: string;
  whyJapanSec2Lead: string;
  whyJapanSec2Points: {
    title: string;
    description: string;
  }[];

  whyJapanSec3Title: string;
  whyJapanSec3Lead: string;
  whyJapanSec3Data1Title: string;
  whyJapanSec3Data1Text: string;
  whyJapanSec3Data1Ref: string;
  whyJapanSec3Data2Title: string;
  whyJapanSec3Data2Text: string;
  whyJapanSec3Data2Ref: string;

  whyJapanSec4Title: string;
  whyJapanSec4Lead: string;
  whyJapanSec4Sectors: {
    title: string;
    description: string;
    focus: string;
  }[];
  whyJapanSec4Ref: string;

  whyJapanSec5Title: string;
  whyJapanSec5Lead: string;
  whyJapanSec5Points: {
    title: string;
    description: string;
  }[];

  whyJapanSec6Title: string;
  whyJapanSec6Lead: string;
  whyJapanSec6Cta1: string;
  whyJapanSec6Cta2: string;
}

export const translations: Record<'EN' | 'JP', TranslationSet> = {
  EN: {
    navHome: "Home",
    navAdvantage: "Our Advantage",
    navTeam: "The Team",
    navServices: "Services",
    navTrackRecord: "Track Record",
    navWhyJapan: "Why Japan?",
    contactUs: "Contact Us",
    clientLogin: "Client Login",

    heroBadge: "Bilingual Investment Excellence",
    heroTitle1: "Bridging Global",
    heroTitle2: "Capital",
    heroTitle3: "to Japanese Real Estate.",
    heroSub: "Independent. Institutional-Grade. Bilingual. We provide sophisticated investment strategies and seamless asset management for global investors navigating the complexities of the Japanese market.",
    heroCtaPrimary: "Explore Our Advantage",
    heroCtaSecondary: "View Track Record",

    advBadge: "Why Tokyo Trust Capital?",
    advTitle: "In a market defined by local nuances, we act as your local partner.",
    advSub: "Entering the Japanese real estate market requires more than capital; it requires a navigator.",
    advLink: "Learn more about our Strategic Edge",
    advPillars: [
      {
        title: "True Independence",
        description: "As a standalone firm, we operate with zero conflicts of interest, ensuring our goals are 100% aligned with yours."
      },
      {
        title: "Exclusive Access",
        description: "Our deep local network provides consistent access to off-market deals that never reach the public domain."
      },
      {
        title: "Bilingual Execution",
        description: "We translate not just the language, but the business culture, providing transparent reporting and logical analysis."
      }
    ],

    servicesBadge: "Our Solutions",
    servicesTitle: "Unlocking the Japanese Market",
    servicesSub: "From sourcing to exit, we handle the technical and cultural hurdles that often stall international investors.",
    servicesList: [
      {
        title: "Strategic Sourcing",
        description: "Identifying high-yield opportunities across residential, commercial, and logistics sectors."
      },
      {
        title: "Full-Cycle Management",
        description: "Handling DD, SPC setup, banking, and tax compliance with institutional precision."
      },
      {
        title: "Maximizing Alpha",
        description: "Active, creative asset management designed to optimize occupancy and asset value."
      }
    ],
    servicesCta: "View Our Full Suite of Services",

    japanBadge: "Market Insight",
    japanTitle: "Stability in a Changing World",
    japanSub: "With its robust legal framework, attractive yield spreads, and world-class infrastructure, Japan remains a cornerstone for any diversified global portfolio.",
    japanPoints: [
      {
        title: "Safe-haven status in Asia-Pacific",
        description: "Recognized as the primary safe-haven market in Asia-Pacific with high stability."
      },
      {
        title: "Consistent liquidity in major areas",
        description: "Major metropolitan areas like Tokyo and Osaka offer massive, reliable liquidity."
      },
      {
        title: "Favorable financing environment",
        description: "Long-term low-interest rate environment creates attractive yield spreads for international players."
      }
    ],
    japanCta: "Read our Market Insights",

    teamBadge: "The Team",
    teamTitle: "Institutional Pedigree.",
    teamTitleItalic: "Boutique Agility.",
    teamSub: "Our leadership team draws from decades of experience at the world’s leading financial institutions and investment funds. We combine global standards with a local personal touch.",
    teamQuote: "Our mission is to eliminate the friction between global investors and Japanese opportunities.",
    teamCta: "Meet the Full Team",

    trackBadge: "Track Record",
    trackTitle: "A Proven Record of Performance",
    trackSub: "We have managed and sourced hundreds of transactions, ranging from boutique developments to some of the largest, highest-profile deals in the Japanese market.",
    trackStats: [
      { value: "25+", label: "Decades of Market Experience" },
      { value: "100%", label: "Bilingual Support Team" },
      { value: "05+", label: "Multi-Sector Expertise" }
    ],
    trackCta: "See Our Case Studies",

    ctaTitle: "Ready to Navigate the Japanese Market?",
    ctaSub: "Whether you are looking for your first Japanese acquisition or seeking to optimize an existing portfolio, our team is ready to assist.",
    ctaButton: "Contact an Advisor Today",

    // Advantage Subpage (New!)
    advPageHeroTitle1: "Strategic Alignment.",
    advPageHeroTitle2: "Unrivaled Local Access.",
    advPageHeroSub: "We bridge the gap between global investment standards and the unique intricacies of the Japanese real estate market. Our independence is your greatest asset.",
    
    advPageSec2Title: "Conflict-Free Investment Advice",
    advPageSec2Lead: "Unlike asset managers tied to major banks or brokerage houses, Tokyo Trust Capital is a fully independent firm. This means our loyalty is never divided.",
    advPageSec2Points: [
      {
        title: "Zero Conflict of Interest",
        description: "We have no internal pressure to push specific properties or prioritize parent company interests."
      },
      {
        title: "Total Transparency",
        description: "Our fees and decision-making processes are clear, ensuring that every recommendation is made solely to maximize your ROI."
      },
      {
        title: "Fiduciary Excellence",
        description: "We act as your true fiduciary partner, providing unbiased advice at every stage of the investment lifecycle."
      }
    ],

    advPageSec3Title: "Overcoming the Barriers of the Japanese Market",
    advPageSec3Lead: "Japan offers immense opportunities, but it remains a market built on deep-rooted relationships and complex local regulations. We navigate these 'invisible' hurdles for you.",
    advPageSec3Points: [
      {
        title: "Exclusive Off-Market Sourcing",
        description: "In Japan, the best deals often happen behind closed doors. Our decades-long relationships with local owners and trust banks give you access to high-quality, off-market opportunities."
      },
      {
        title: "Expert Compliance & Banking Support",
        description: "From Anti-Money Laundering (AML) checks to opening local bank accounts and navigating tax structures (TK-GK), we manage the technical complexities that often frustrate international investors."
      },
      {
        title: "Bicultural Professionalism",
        description: "We don't just translate words; we translate business logic. We ensure that local counterparties understand your requirements while providing you with reporting that meets global institutional standards."
      }
    ],

    advPageSec4Title: "Global Pedigree. Local Execution.",
    advPageSec4Lead: "We combine the rigorous analytical standards of global financial powerhouses with the speed, flexibility, and personal touch of a boutique firm.",
    advPageSec4BoutiqueTitle: "The Boutique Advantage",
    advPageSec4BoutiqueDesc: "You get direct access to our senior decision-makers. No bureaucratic layers — just fast, expert execution. Our leadership consists of veterans from major global banks and funds who have managed hundreds of transactions, including some of the most profile-heavy deals in Japanese history.",
    advPageSec4Cta: "Meet the Specialists behind your success",

    advPageSec5Title: "Comprehensive Asset Management",
    advPageSec5Lead: "We provide end-to-end support throughout the entire investment lifecycle. You are never alone in the process.",
    advPageSec5Points: [
      {
        title: "Acquisition",
        description: "Rigorous Due Diligence (DD), scheme structuring, and debt sourcing (NRL)."
      },
      {
        title: "Operations",
        description: "Active monitoring, cash management, and loan covenant compliance."
      },
      {
        title: "Disposition",
        description: "Strategic exit planning, buyer selection, and efficient entity liquidation."
      }
    ],

    advPageSec6Title: "Secure Your Foothold in Japan.",
    advPageSec6Lead: "Experience a partnership defined by transparency, expert insight, and a relentless focus on your returns.",
    advPageSec6Cta1: "Contact Our Advisory Team",
    advPageSec6Cta2: "View Our Track Record",

    footerDesc: "Tokyo Trust Capital is a dedicated investment management firm specializing in Japanese real estate, serving institutional investors worldwide with integrity and local expertise.",
    footerLegalTitle: "Legal Policies",

    // Services Subpage (New!)
    servPageHeroTitle: "Full-Spectrum Real Estate Solutions.",
    servPageHeroSub: "From identifying high-yield opportunities to sophisticated asset management and strategic exits, we provide end-to-end expertise across the Japanese and global markets.",

    servPageSec2Title: "Inbound Investment: Navigating the Japanese Market",
    servPageSec2Lead: "We act as your local eyes, ears, and hands in Japan. We specialize in sourcing and executing deals that meet the rigorous criteria of international institutional investors and family offices.",
    servPageSec2Points: [
      {
        title: "Strategic Sourcing",
        description: "Accessing high-quality, off-market opportunities across all asset classes—including residential, commercial, logistics, and hospitality."
      },
      {
        title: "Investment Analysis",
        description: "Providing deep-dive market research and financial modeling that aligns with global risk-return standards."
      },
      {
        title: "Structure Optimization",
        description: "Developing bespoke business plans and investment schemes (such as TK-GK structures) tailored to your tax and regulatory requirements."
      }
    ],
    servPageSec2Cta: "Inquire about Inbound Opportunities",

    servPageSec3Title: "Maximizing Value at Every Stage",
    servPageSec3Lead: "Our active management approach is designed to optimize asset performance and ensure smooth operations through the entire lifecycle of your investment.",
    servPageSec3Phase1Title: "Acquisition Support",
    servPageSec3Phase1Sub: "Establishing the Foundation",
    servPageSec3Phase1Points: [
      {
        title: "Sourcing & Proposal",
        description: "Identifying deals that fit your mandate."
      },
      {
        title: "Due Diligence (DD)",
        description: "Rigorous physical, legal, and financial inspection."
      },
      {
        title: "Debt Sourcing",
        description: "Coordinating Non-Recourse Loans (NRL) with local lenders."
      }
    ],
    servPageSec3Phase2Title: "Operations & Asset Management",
    servPageSec3Phase2Sub: "Maintaining Excellence (The 'Hold' Period)",
    servPageSec3Phase2Points: [
      {
        title: "Active Monitoring",
        description: "Continuous performance tracking and reporting."
      },
      {
        title: "Financial Stewardship",
        description: "SPC management, bank account administration, and dividend distributions."
      },
      {
        title: "Compliance Management",
        description: "Ensuring strict adherence to loan covenants and local regulations."
      }
    ],
    servPageSec3Phase3Title: "Disposition & Exit Strategy",
    servPageSec3Phase3Sub: "Securing the Return",
    servPageSec3Phase3Points: [
      {
        title: "Buyer Selection",
        description: "Leveraging our network to identify the right exit partner."
      },
      {
        title: "Closing Support",
        description: "Managing SPA (Sales and Purchase Agreement) negotiations and DD responses."
      },
      {
        title: "Efficient Liquidation",
        description: "Handling SPC dissolution and account closures to ensure a clean exit."
      }
    ],

    servPageSec4Title: "Outbound Investment: Expanding Your Horizon",
    servPageSec4Lead: "For clients looking to diversify beyond Japan, we leverage our global network to identify and manage prime real estate opportunities in North America and Europe.",
    servPageSec4Points: [
      {
        title: "Global Partner Network",
        description: "Working with trusted on-the-ground partners who understand local customs and market dynamics."
      },
      {
        title: "Cross-Border Expertise",
        description: "Providing Japanese and global investors with a gateway to international markets with the same level of institutional rigor."
      }
    ],

    servPageSec5Title: "Bespoke Service, Bilingual Execution",
    servPageSec5Lead: "No two mandates are the same. We take pride in our ability to provide tailor-made services that respect your unique investment philosophy, communicated with the clarity and transparency of a bilingual, global-standard team.",

    servPageSec6Title: "Partner with a Leader in Japanese Real Estate.",
    servPageSec6Lead: "Let us help you navigate the complexities of the Japanese market with confidence and precision.",
    servPageSec6Cta1: "Discuss Your Mandate with Us",
    servPageSec6Cta2: "View our Track Record",

    // Team Subpage (New!)
    teamPageHeroTitle: "Local Insight. Global Pedigree.",
    teamPageHeroSub: "Our team is comprised of seasoned professionals from world-class financial institutions. We combine decades of experience in the Japanese market with the standards of excellence expected by global investors.",

    teamPageSec2Title: "A Legacy of Performance",
    teamPageSec2Lead: "We don't just manage assets; we leverage a lifetime of market intelligence to protect and grow your capital.",
    teamPageSec2Stats: [
      {
        value: "25+ Years",
        label: "Combined Experience",
        description: "Direct active engagement in professional Japanese real estate investment."
      },
      {
        value: "120+ Deals",
        label: "Deals Executed",
        description: "Successfully sourced, restructured, and managed by our leadership."
      },
      {
        value: "100%",
        label: "Bilingual Capability",
        description: "Entire senior team operates seamlessly in both English and Japanese."
      },
      {
        value: "Institutional",
        label: "Financial Pedigree",
        description: "Alums of top-tier global investment banks and trust companies."
      }
    ],

    teamPageSec3Title: "Strategic Leadership",
    teamPageSec3Lead: "Our senior partners are directly involved in every mandate. You gain the benefit of institutional-grade wisdom with the speed and attention of a boutique firm.",
    teamPageSec3ExecName: "Kenji Tanaka",
    teamPageSec3ExecRole: "CEO / Managing Director",
    teamPageSec3ExecBio: "With over 25 years in the real estate and financial industry, Kenji founded Tokyo Trust Capital. He previously held senior leadership roles at world-class institutional funds and global banks. He has been a pivotal force in some of the Japanese market's most historic and complex asset transactions.",
    teamPageSec3ExecSpecTitle: "Specialization",
    teamPageSec3ExecSpec: "Strategic Sourcing, Portfolio Restructuring, and Cross-Border JVs.",
    teamPageSec3ExecCommitQuote: "We founded Tokyo Trust Capital to provide a level of conflict-free, high-touch service that larger institutions simply cannot match.",

    teamPageSec4Title: "Our People",
    teamPageSec4Lead: "A diverse group of specialists dedicated to every facet of the asset management lifecycle.",
    teamPageSec4Members: [
      {
        name: "Takeshi Sato",
        role: "Head of Asset Management",
        description: "Focuses on operational excellence, leasing strategy, and yield optimization. Formerly Vice President of asset management at Sumitomo Trust."
      },
      {
        name: "Sayuri Watanabe",
        role: "Director of Inbound Investment",
        description: "Focuses on off-market sourcing, local underwriting, and DD coordination. A bilingual veteran with deep local broker relationships."
      },
      {
        name: "Hiroshi Kato",
        role: "Compliance & Finance Manager",
        description: "Handles SPC administration, tax structuring, regulatory reporting, and loan covenant tracking. Formerly senior compliance officer."
      }
    ],

    teamPageSec5Title: "More Than Just Translation",
    teamPageSec5Lead: "Doing business in Japan requires navigating a unique set of cultural and social codes. Our team acts as your cultural interpreter, rendering local complexities understandable while delivering global standard reporting.",
    teamPageSec5Pillars: [
      {
        title: "Global Reporting Standards",
        description: "Clear, logical, and data-driven updates tailored for global investment committees."
      },
      {
        title: "Cultural Negotiation",
        description: "Managing local relationships with landlords and domestic banks to protect your advantage."
      },
      {
        title: "Direct Access",
        description: "No corporate gatekeepers. You speak directly with the executive specialists managing your assets."
      }
    ],

    teamPageSec6Title: "Meet Your Partners in Japan.",
    teamPageSec6Lead: "Put our boutique institutional expertise to work for your real estate portfolio.",
    teamPageSec6Cta1: "Schedule a Call with our Leadership",
    teamPageSec6Cta2: "View Our Services",

    // Why Japan Subpage (New!)
    whyJapanHeroTitle: "Japan: Stability and Opportunity in a Volatile World.",
    whyJapanHeroSub: "With attractive yield spreads, a transparent legal framework, and world-class liquidity, Japan remains the premier destination for risk-adjusted real estate returns in the Asia-Pacific region.",
    whyJapanSec2Title: "A Global Safe Haven",
    whyJapanSec2Lead: "Amidst global geopolitical shifts and economic uncertainty, Japan’s real estate market offers a rare combination of political stability and consistent performance.",
    whyJapanSec2Points: [
      {
        title: "Rule of Law",
        description: "A highly transparent legal and property rights system that aligns with Western institutional standards, offering absolute security of ownership."
      },
      {
        title: "Urbanization",
        description: "Continuous population inflow into the Greater Tokyo Area, supporting resilient demand and rental growth across both residential and office sectors."
      },
      {
        title: "Infrastructure",
        description: "Unmatched public transportation and digital infrastructure network, enhancing asset value and long-term liquidity."
      }
    ],
    whyJapanSec3Title: "Compelling Yield Spreads",
    whyJapanSec3Lead: "Despite global interest rate fluctuations, Japan continues to offer an attractive 'Spread' between property cap rates and the cost of debt, creating superior cash-on-cash returns.",
    whyJapanSec3Data1Title: "The Spread Advantage",
    whyJapanSec3Data1Text: "Japan maintains one of the widest spreads in the developed world, backed by a highly supportive and defensive monetary policy environment that keeps debt financing costs exceptionally competitive.",
    whyJapanSec3Data1Ref: "Source: CBRE Japan Real Estate Market Outlook",
    whyJapanSec3Data2Title: "Liquidity & Transaction Volume",
    whyJapanSec3Data2Text: "Tokyo consistently ranks among the top 3 most liquid metropolitan real estate markets globally, ensuring efficient entry and highly structured exit strategies for institutional capital.",
    whyJapanSec3Data2Ref: "Source: JLL Global Real Estate Perspective / MSCI Real Assets",
    whyJapanSec4Title: "Beyond the Core: Growth Sectors",
    whyJapanSec4Lead: "While office assets remain a cornerstone of core portfolios, we identify significant alpha in sectors driven by long-term structural shifts in the Japanese economy.",
    whyJapanSec4Sectors: [
      {
        title: "Multi-family Residential",
        description: "High occupancy resilience and steady rental growth in major metropolitan areas, making it an exceptionally stable defensive play.",
        focus: "Defensive Play"
      },
      {
        title: "Logistics & Industrial",
        description: "Driven by the continued expansion of e-commerce, third-party logistics integration, and national supply chain modernization.",
        focus: "Growth Play"
      },
      {
        title: "Hospitality",
        description: "Capitalizing on the historic post-pandemic resurgence of international inbound travel, placing Tokyo and Kyoto at the absolute peak of global tourism lists.",
        focus: "Inbound Play"
      }
    ],
    whyJapanSec4Ref: "Source: PwC/ULI Emerging Trends in Real Estate Asia Pacific",
    whyJapanSec5Title: "The Difference is Local Intelligence",
    whyJapanSec5Lead: "Understanding the data is one thing; executing on it is another. The Japanese market is notoriously opaque, with a significant portion of high-quality assets trading entirely 'Off-Market.'",
    whyJapanSec5Points: [
      {
        title: "Accessing the Invisible",
        description: "We leverage longstanding local broker and owner relationships to secure proprietary deals that never reach public listings."
      },
      {
        title: "Cultural Fluency",
        description: "We bridge the cultural understanding gap by navigating complex relationships with local banks, landlords, and regulators to your advantage."
      },
      {
        title: "Global Reporting Standards",
        description: "We translate off-market local complexities into professional, data-driven, and institutional-ready reports that fit your global committee mandates."
      }
    ],
    whyJapanSec6Title: "Deepen Your Portfolio with Japanese Assets.",
    whyJapanSec6Lead: "Contact our advisory team for a deep dive into current market trends and exclusive investment opportunities.",
    whyJapanSec6Cta1: "Request a Market Briefing",
    whyJapanSec6Cta2: "View Our Services",
  },
  JP: {
    navHome: "ホーム",
    navAdvantage: "当社の強み",
    navTeam: "チーム紹介",
    navServices: "サービス内容",
    navTrackRecord: "実績",
    navWhyJapan: "日本市場の魅力",
    contactUs: "お問い合わせ",
    clientLogin: "クライアントログイン",

    heroBadge: "2か国語対応の投資エクセレンス",
    heroTitle1: "グローバルな資金と",
    heroTitle2: "日本の卓越した不動産を",
    heroTitle3: "つなぐ架け橋。",
    heroSub: "完全な独立性。機関投資家基準。バイリンガル対応。日本市場という複雑な環境下において、グローバル投資家に洗練された投資戦略とシームレスなアセットマネジメントを提供します。",
    heroCtaPrimary: "当社の強みを見る",
    heroCtaSecondary: "実績を閲覧する",

    advBadge: "なぜ東京トラストキャピタルなのか？",
    advTitle: "特有のビジネス習慣がある日本市場で、グローバル視点を持つ真のパートナーとなります。",
    advSub: "日本の不動産市場への参入に必要なのは資金だけではありません。信頼できるナビゲーターです。",
    advLink: "当社の独自性と利点について詳しく",
    advPillars: [
      {
        title: "真の独立性",
        description: "大手銀行や証券会社の系列に属さない完全な独立系企業として、100%お客様と利益を共有するアライアンスを築きます。"
      },
      {
        title: "非公開案件へのアクセス",
        description: "ローカルな強力ネットワークにより、一般公開されない特別なオフマーケット案件へ継続的にアクセスできます。"
      },
      {
        title: "二言語での確実な実行力",
        description: "言葉を翻訳するだけではなく、ビジネス文化を深く理解し、透明性の高いグローバル基準の分析と報告を行います。"
      }
    ],

    servicesBadge: "提供ソリューション",
    servicesTitle: "日本市場の可能性を切り拓く",
    servicesSub: "投資案件の調達（ソーシング）からエグジットまで、海外投資家に立ちはだかる規制や文化的障壁を当社がスマートに解決します。",
    servicesList: [
      {
        title: "戦略的ソーシング",
        description: "住宅、オフィス、物流施設など、様々なセクターから高い利回りをもたらすポートフォリオを特定・調達します。"
      },
      {
        title: "フルサイクル・マネジメント",
        description: "デューデリジェンス（DD）、SPC設立、現地銀行との折衝、税務コンプライアンス等、あらゆる実務を高い専門性で構築します。"
      },
      {
        title: "アルファの最大化",
        description: "アクティブかつ創造的なリーシング＆管理運営を実践し、入居率の最適化と資産価値の上昇を実現します。"
      }
    ],
    servicesCta: "全サービスラインナップを見る",

    japanBadge: "市場洞察",
    japanTitle: "変革する世界における安定性",
    japanSub: "強固な法制度、魅力的なイールドスプレッド、そして世界有数の都市インフラを誇る日本は、グローバルポートフォリオに欠かせない要石です。",
    japanPoints: [
      {
        title: "アジア太平洋におけるセーフヘイブン",
        description: "トップクラスの経済的。政治的安定性を兼ね備えたアジア最大の安全資産市場として位置付けられています。"
      },
      {
        title: "大都市圏における高い流動性",
        description: "東京や大阪などの巨大都市圏は、信頼性が高くかつ極めて堅実な不動産流動性を提供し続けています。"
      },
      {
        title: "有利な資金調達環境",
        description: "日本の安定した超低金利環境は、グローバルプレイヤーにとって極めて有利なレバレッジ機会と大きなスプレッドをもたらします。"
      }
    ],
    japanCta: "マーケット分析レポートを読む",

    teamBadge: "チーム紹介",
    teamTitle: "大手金融機関の経験と規律。",
    teamTitleItalic: "ブティックの俊敏性。",
    teamSub: "当社のリーダーシップチームは、世界的な外資系金融機関や大手投資ファンドで数十年のキャリアを積んだスペシャリストです。高い組織規律と個人対応の俊敏さを両立します。",
    teamQuote: "私たちの使命は、海外投資家が日本市場で取引を行う際のあらゆる摩擦（摩擦係数）を限りなくゼロにすることです。",
    teamCta: "コアメンバーを詳しく見る",

    trackBadge: "投資実績",
    trackTitle: "確かな数字、比類なき成功体験",
    trackSub: "中小型の開発案件から、日本を代表する最高クラスの超大型プロジェクトまで、何百億もの取引を主導、管理してきた実績があります。",
    trackStats: [
      { value: "25年以上", label: "日本の不動産市場に関する経験" },
      { value: "100%", label: "日英バイリンガルによる専門サポート" },
      { value: "マルチ", label: "オフィス・レジデンス・物流の卓越知識" }
    ],
    trackCta: "事例研究を見る",

    ctaTitle: "日本市場への投資・管理をお考えですか？",
    ctaSub: "日本での初回の不動産取得から、既存のメガポートフォリオの運用・バリューアップまで、専門アドバイザーが迅速に対応します。",
    ctaButton: "アドバイザリーチームに連絡する",

    // Advantage Subpage (New!)
    advPageHeroTitle1: "利益の一致。",
    advPageHeroTitle2: "比類なき極上の現地アクセス空間。",
    advPageHeroSub: "私たちは、グローバルな運用の常識と、日本不動産市場のローカルルール・複雑な本質との間を繋ぐ架け橋です。私たちが誇る完全なる独立系というスタンスこそが、皆様の最大の利益です。",
    
    advPageSec2Title: "利益相反のない忠実な投資アドバイス",
    advPageSec2Lead: "大手銀行や証券会社の系列アセットマネジメント会社とは完全に一線を画し、東京トラストキャピタルは100%独立した組織として行動します。私たちの忠誠が乱れたり分裂したりすることはありません。",
    advPageSec2Points: [
      {
        title: "利益相反ゼロ",
        description: "系列会社の物件を押し付けられたり、親会社の利益目標を優先されるといった社内・外部圧力とは一切無縁です。"
      },
      {
        title: "完全なる透明性",
        description: "手数料構造や意思決定は極めて精緻に開示されます。全ての提案は専らお客様の投資収益（ROI）を最大化するためだけに行われます。"
      },
      {
        title: "優れた受託者責任の実践",
        description: "投資フェーズのあらゆる段階で、完全な客観性と偏りのない信託マインドを持ってお客様に寄り添う、真のパートナーです。"
      }
    ],

    advPageSec3Title: "「日本固有の商習慣のギャップ」を超える",
    advPageSec3Lead: "日本には莫大な資産拡大のポテンシャルがありますが、今でも深い信頼関係（オフマーケット）と極めて複雑な現地規制によって守られた市場です。私たちはこれらの見えない障壁を得意のノウハウで解消します。",
    advPageSec3Points: [
      {
        title: "極上のオフマーケットソーシング",
        description: "日本の最上級ディールは決して表（公開市場）には出ません。長年にわたる独自の日本オーナーや信託銀行との絆が、優位性の高い不動産アクセスを保証します。"
      },
      {
        title: "コンプライアンス＆銀行交渉の全面支援",
        description: "AML（マネーロンダリング防止対策）や日本の銀行の複雑な口座開設、TK-GK（匿名組合・合同会社）スキームなど、外国人投資家にとって困難な事務・法務処理を一元的に掌握します。"
      },
      {
        title: "二つのビジネス文化のシームレスな融合",
        description: "単なる言語翻訳者ではありません。「ビジネスロジック」を翻訳します。現地の開発会社や銀行側へ確実に取引要件を通しつつ、皆様へは世界的機関投資家レベルのレポーティングを提供します。"
      }
    ],

    advPageSec4Title: "グローバル基準の分析力。ブティックならではの即応力。",
    advPageSec4Lead: "私たちは一流グローバル銀行が誇る緻密で高度な分析規格と、身軽で何事にもスピード対応可能なブティックの柔軟性を完全に融合しています。",
    advPageSec4BoutiqueTitle: "ブティックであることの絶大なるアドバンテージ",
    advPageSec4BoutiqueDesc: "シニアの主要意思決定者（執行役・役員）へ直接コンタクトできます。余計な内部の意志決定稟議や障害はありません。迅速かつ確固たる実質的実務経験を誇るプロフェッショナルが自ら案件に付き添います。私たちのボードメンバーは、最大級の歴史的取引に関与してきた伝説的ファンド出身者です。",
    advPageSec4Cta: "皆様の最高の結果を託すスペシャリストと会う",

    advPageSec5Title: "揺るぎないフルサイクル支援",
    advPageSec5Lead: "案件の選定からエグジット（売却・清算）まで、一気通貫で全力のサポートを実行します。途中で案件から離脱することはありません。",
    advPageSec5Points: [
      {
        title: "アクイジション (新規取得)",
        description: "綿密な調査（DD）、節税や流動性を最適化するスキーム設計、最適な現地ノンリコースローンの組成調達。"
      },
      {
        title: "オペレーション (期中運営)",
        description: "高度な実績推移の追跡、財務管理、コベナンツ対策など、日本法人の役割とアセットマネジメントを完全受託。"
      },
      {
        title: "ディスポジション (物件売却)",
        description: "エグジット戦略の設定、適正な買い手の入札比較、迅速なエンティティ（SPC）の清算処理に至るまで対応。"
      }
    ],

    advPageSec6Title: "日本における不動産投資の礎を共に築く。",
    advPageSec6Lead: "透明性、確かな実績、そして卓越したリターン。このすべてをお届けするハイエンド・アライアンスを築きませんか。",
    advPageSec6Cta1: "アドバイザリーチームと面談する",
    advPageSec6Cta2: "これまでの実績・ケーススタディを見る",

    footerDesc: "東京トラストキャピタルは日本国内の不動産投資・アセットマネジメントを専門とし、機関投資家の皆様へ確固たる倫理観と高いチーム力でフルサポートを提供する、独立系不動産アドバイザリー会社です。",
    footerLegalTitle: "法的指針・規約",
    
    // Services Subpage (New!)
    servPageHeroTitle: "包括的かつ多角的な不動産ソリューション",
    servPageHeroSub: "高利回り案件・非公開不動産のソーシングから、精緻な期中アセットマネジメント、戦略的なエグジット（売却・清算）まで、日本及びグローバル市場を見据えた一気通貫の専門知識を提供します。",

    servPageSec2Title: "インバウンド投資：日本市場を自在にナビゲートする",
    servPageSec2Lead: "私たちはお客様の日本現地における「目、耳、手」です。世界の機関投資家やファミリーオフィスが求める厳格な要件（クライテリア）を充たす良質デイールを調達・構築します。",
    servPageSec2Points: [
      {
        title: "戦略的ソーシング",
        description: "住宅（レジデンス）、オフィス、物流施設、ホテルなど、すべてのセクターにわたり、一般市場には出回らない特級の非公開案件にアクセスします。"
      },
      {
        title: "投資分析・デューデリジェンス",
        description: "グローバルなリスク・リターン基準に完全に合致する、高度な市場調査と精緻なキャッシュフロー（財務）モデリングを提供します。"
      },
      {
        title: "投資スキームの最適化",
        description: "税務および規制要件に合わせてカスタマイズしたTK-GK（匿名組合・合同会社）スキームなど、最適な事業計画とファンド構造を設計します。"
      }
    ],
    servPageSec2Cta: "インバウンド非公開案件の相談をする",

    servPageSec3Title: "すべての投資フェーズでお客様の収益価値を最大化",
    servPageSec3Lead: "当社のアクティブかつ高付加価値な管理運営アプローチは、物件ポートフォリオのパフォーマンスを極限まで高め、フルサイクルを通じて確固たる運用を実践します。",
    servPageSec3Phase1Title: "アクイジション（新規取得）サポート",
    servPageSec3Phase1Sub: "強固な投資基盤を築く",
    servPageSec3Phase1Points: [
      {
        title: "ソーシング ＆ 投資提案",
        description: "お客様の具体的な投資方針（マンデート）に完璧に合致する厳選したディールを提供します。"
      },
      {
        title: "デューデリジェンス (DD)",
        description: "建築調査、環境デューデリ、法務・財務面の精査に至るまで徹底的な検査を行います。"
      },
      {
        title: "デット・ファイナンス調達",
        description: "ローカルの大手金融機関との折衝を経て、優位なローコスト・レバレッジを企図するノンリコースローン（NRL）の組成を担います。"
      }
    ],
    servPageSec3Phase2Title: "期中アセットマネジメント運営（ホールド期）",
    servPageSec3Phase2Sub: "抜群のオペレーショナル・エクセレンス（期中運営）",
    servPageSec3Phase2Points: [
      {
        title: "アクティブ・モニタリング",
        description: "稼働率、賃料水準、修繕計画などの推移を継続的に追跡し、日英バイリンガルによる精緻なレポーティングを行います。"
      },
      {
        title: "精緻な財務管理",
        description: "SPC（特別目的会社）の資金運営、銀行口座の厳格な管理、配当金の支払処理等をスマートに代行・一括統括します。"
      },
      {
        title: "コンプライアンス管理",
        description: "財務コベナンツや法律・地域規制の遵守状況を徹底監視し、期中のローン違反などの信用リスクを防ぎます。"
      }
    ],
    servPageSec3Phase3Title: "ディスポジション ＆ エグジット戦略",
    servPageSec3Phase3Sub: "投資収益の確実な回収・刈り取り",
    servPageSec3Phase3Points: [
      {
        title: "買い手の選定・入札",
        description: "国内、アジア、欧米を含む当社の豊富なネットワークを駆使し、最も利益をもたらす売却先（エグジットパートナー）を選定します。"
      },
      {
        title: "クロージング包括支援",
        description: "売買予約（SPA）交渉や買主側のデューデリジェンス（DD）対応・質問回答、精算処理を全面サポートします。"
      },
      {
        title: "精緻かつクリーンな清算",
        description: "SPCの迅速な解散手続き、現地銀行口座の閉鎖等、すべての手続をクリーンに締め括り、お客様の純投資利益を回収します。"
      }
    ],

    servPageSec4Title: "アウトバウンド投資（世界への挑戦）",
    servPageSec4Lead: "日本国外への分散投資をお考えのクライアント企業・投資家の皆様に対し、北米・欧米の提携ネットワークを通じて最高品質の不動産投資・アセットマネジメントを提供します。",
    servPageSec4Points: [
      {
        title: "強固なグローバルパートナー網",
        description: "現地の法令や商慣習、市場動向を熟知した一線のローカルチームと連携し、投資の安全性を保証します。"
      },
      {
        title: "クロスボーダーの卓越性",
        description: "国内外の投資家の皆様に対し、日本の信託制度と同等レベルの洗練された機関投資家グレード基準。透明性の高い投資ルートをお届けします。"
      }
    ],

    servPageSec5Title: "オーダーメイドの戦略。バイリンガルでの実務実行力。",
    servPageSec5Lead: "私たちの提供する価値に一律のひな形はありません。お客様独自の哲学や指針を重んじる「完全カスタムメイド（オーダーメイド）」の手厚い支援を、日英バイリンガルのグローバル水準で、極めて透明性高く実行し続けます。",

    servPageSec6Title: "日本の不動産投資の真のリーダーとアライアンスを築く",
    servPageSec6Lead: "複雑極まりない日本不動産市場の深部を、確かな自信と完璧な精度をもって攻略しましょう。",
    servPageSec6Cta1: "投資方針（マンデート）について面談する",
    servPageSec6Cta2: "これまでのプロジェクト実例を見る",

    // Team Subpage (New!)
    teamPageHeroTitle: "ローカルの知見。グローバルの実績。",
    teamPageHeroSub: "当社のチームは、世界トップクラスの金融機関で実績を積んだ、経験豊富な専門家集団です。日本市場における数十年の知見と、世界の投資家が求める最高水準の卓越性を融合しています。",

    teamPageSec2Title: "卓越した実績の遺産",
    teamPageSec2Lead: "私たちは単にアセットを管理するだけではありません。生涯にわたる市場知性を活用し、お客様の資本を守り、成長させます。",
    teamPageSec2Stats: [
      {
        value: "25年以上",
        label: "業界経験",
        description: "日本のプロフェッショナルな不動産投資および運用における、第一線の累計実務年数。"
      },
      {
        value: "120件超",
        label: "執行ディール実績",
        description: "経営陣がこれまでに調達、再構築、アセットマネジメントを主導してきた取引総数。"
      },
      {
        value: "100%",
        label: "語学・実務対応力",
        description: "経営陣から実務チームに至るまで、完全に英語・日本語の２カ国語で業務を遂行。"
      },
      {
        value: "機関投資家基準",
        label: "金融のエリート出身",
        description: "世界最大手クラスの投資銀行、信託銀行、外資プライベートエクイティファンド等出身の少数精鋭。"
      }
    ],

    teamPageSec3Title: "戦略的リーダーシップ",
    teamPageSec3Lead: "当社のシニアパートナーは、すべてのご相談（マンデート）に直接関与いたします。ブティック型ならではの機動力と細やかなケアを維持しつつ、最高品質の機関投資家レベルの知見をお約束します。",
    teamPageSec3ExecName: "田中 賢二",
    teamPageSec3ExecRole: "代表取締役・最高経営責任者 (CEO)",
    teamPageSec3ExecBio: "不動産および金融業界において25年以上の卓越キャリアを誇り、東京トラストキャピタルを創業。それ以前は、世界最高峰の不動産機関投資ファンドや多国籍投資銀行のマネジメントを歴任。日本における最大規模かつ歴史的に複雑な巨額トランザクションを数多く完遂してきました。",
    teamPageSec3ExecSpecTitle: "専門領域",
    teamPageSec3ExecSpec: "戦略的ソーシング、ファンド・ポートフォリオ再構築、クロスボーダー共同投資（JV）設計",
    teamPageSec3ExecCommitQuote: "私たちは、大手金融機関では成し得ない、いかなる利益相反（コンフリクト）をも排除し、お客様の利益のみに100％密着した徹底サポートを提供するアドバイザリー会社を希求し、当社を設立しました。",

    teamPageSec4Title: "各部門のプロフェッショナル",
    teamPageSec4Lead: "アセットマネジメントの全ライフサイクルにおいて、揺るぎない専門性を発揮する精鋭スペシャリスト集団。",
    teamPageSec4Members: [
      {
        name: "佐藤 剛",
        role: "アセットマネジメント部長",
        description: "期中アセットマネジメント、リーシング戦略、物件稼働率の引き上げを徹底統率。前職は国内最大手信託銀行の資産運用オフィサー。"
      },
      {
        name: "渡辺 小百合",
        role: "インバウンド投資 統括ディレクター",
        description: "非公開案件の精緻なプライベート調達、現地アンダーライティング、DDを統括。有力仲介会社と深い信頼関係を誇るバイリンガルプロフェッショナル。"
      },
      {
        name: "加藤 裕",
        role: "コンプライアンス ＆ ファイナンスマネージャー",
        description: "SPC一括管理、税務最適スキーム、当局報告、金融機関とのローン制限監視を掌握。元外資系金融機関のシニアアライアンスマネージャー。"
      }
    ],

    teamPageSec5Title: "単なる翻訳対応を超えて",
    teamPageSec5Lead: "日本でのビジネスは、文化や商習慣、独自のルールが複雑に織りなされています。私たちは、単なる言葉の通訳ではなく「文化のインテリジェント通訳者」として立ち回り、現地パートナーや国内銀行と強気の交渉をしつつ、グローバルな投資委員会が納得する高品質な運用報告書をお届けします。",
    teamPageSec5Pillars: [
      {
        title: "グローバルな報告書基準",
        description: "海外のコンプライアンスや投資委員会にそのままパスできる、極めて明瞭でロジカル、英語でのデータ報告。"
      },
      {
        title: "文化慣習を見据えた交渉調停",
        description: "地主、プロパティマネージャー、国内金融機関との折衝を優位に進め、資本価値を護持します。"
      },
      {
        title: "実務スペシャリストへのダイレクトアクセス",
        description: "仲介業者や窓口社員により対話が阻害されることはありません。資産を直接管理しているパートナーと対話いただけます。"
      }
    ],

    teamPageSec6Title: "日本の不動産で、本当の信頼関係を育む。",
    teamPageSec6Lead: "私たちの磨き抜かれた知見と執行力を、貴社資産の最高価値実現にお役立てください。",
    teamPageSec6Cta1: "経営シニアメンバーとの個別相談を予約する",
    teamPageSec6Cta2: "当社のサービスメニューを見る",

    // Why Japan Subpage (New!)
    whyJapanHeroTitle: "日本：激動の世界経済において際立つ安定性と投資魅力。",
    whyJapanHeroSub: "魅力的なイールドスプレッド、透明性の高い法制度、そして世界最高水準の流動性を備えた日本は、アジア太平洋地域においてリスク調整後のリターンを最大化する最良の投資先であり続けています。",
    whyJapanSec2Title: "グローバルなセーフヘブン（安全な避難先）",
    whyJapanSec2Lead: "深刻さを増す世界的地政学リスクや経済の不確実性の渦中において、日本の不動産市場は極めて堅牢な政治的安定性と、裏打ちされた一貫したパフォーマンスの稀有な融合を提供しています。",
    whyJapanSec2Points: [
      {
        title: "法治と透明性",
        description: "欧米のトップ機関投資家基準に完全準拠した、透明性の極めて高い法制度と不動産所有権システムが構築されており、絶対的な所有権安全性を確保。"
      },
      {
        title: "加速する大都市集中",
        description: "首都圏（東京エリア）への人口流入は絶え間なく続いており、レジデンシャル（賃貸住宅）およびオフィスセクターにおいて、盤石な需要と安定した賃料成長を支えています。"
      },
      {
        title: "世界屈指のインフラ",
        description: "精確無比な交通利便性と最先端のデジタルインフラネットワークは、アセットの持続的な資産価値と、長期の売却流動性を恒久的に高めています。"
      }
    ],
    whyJapanSec3Title: "魅力的なイールドスプレッド",
    whyJapanSec3Lead: "海外中央銀行の金利引き上げ局面にあっても、日本は依然として不動産のキャップレートと借入コストの間に魅力的な「スプレッド（利回り差）」を安定提供。高いキャッシュオンキャッシュ・リターンをもたらします。",
    whyJapanSec3Data1Title: "スプレッドにおける絶対的優位性",
    whyJapanSec3Data1Text: "日本市場は、低金利環境を堅持する防衛的かつ好意的な金融政策環境に支えられ、世界でも有数の厚いイールドスプレッドを維持。驚異的な借入調達コストの優位性があります。",
    whyJapanSec3Data1Ref: "出典: CBRE日本不動産市場アウトルック",
    whyJapanSec3Data2Title: "流動性と取引ボリューム",
    whyJapanSec3Data2Text: "東京は世界で最も取引流動性の高いメガシティ不動産市場トップ3に常にランクイン。海外機関投資家の機動的な資金配分（エントリーとクリーンなエグジット）を完璧に担保します。",
    whyJapanSec3Data2Ref: "出典: JLLグローバル不動産パースペクティブ / MSCIリアルアセット",
    whyJapanSec4Title: "コアを超えて：構造変化を捉える成長セクター",
    whyJapanSec4Lead: "オフィスビルは依然としてポートフォリオの強固な礎石ですが、私たちは日本の構造変化から生じる、以下のような大きなアルファ（追加収益機会）セクターを特定しています。",
    whyJapanSec4Sectors: [
      {
        title: "マルチファミリー（賃貸マンション）",
        description: "主要大都市圏における、非常に揺るぎない稼働率の回復力と賃料成長性。ボラティリティに対する屈指のディフェンシブ・プレイ。",
        focus: "安定の防御策"
      },
      {
        title: "先進的ロジスティクス＆インダストリアル",
        description: "電子商取引（EC）の持続的な市場拡張と3PL（サードパーティロジスティクス）供給網、国内サプライチェーンの大規模近代化に連動した急成長プレイ。",
        focus: "成長を捉える一手"
      },
      {
        title: "ホスピタリティ・ホテル",
        description: "世界中の渡航バケットリストで最上位を誇る京都や東京のインバウンド旺盛な旅行ブームを全力で取り込み、驚異の売上単価（ADR）成長をロックオン。",
        focus: "観光インバウンド獲得"
      }
    ],
    whyJapanSec4Ref: "出典: PwC/ULIアジア太平洋不動産トレンドレポート",
    whyJapanSec5Title: "結果を分かつものは、地元の知性（ローカルインテリジェンス）",
    whyJapanSec5Lead: "公開データを網羅するだけでは成功は不十分です。日本不動産市場は極めて排他的かつ非公開的（オパーク）であり、最高優良アセットの多くは「オフマーケット（非公開案件）」で取引されています。",
    whyJapanSec5Points: [
      {
        title: "見えないものを掴むソーシング",
        description: "何世代にもわたる現地オーナー、開発ファーム、大手仲介との排他的パイプを活用し、一般市場に露出しない優良取引案件を独占調達。"
      },
      {
        title: "文化コードへの精通と交渉力",
        description: "現地の信託銀行、大手地主、開発業者、規制当局との関係を熟知したプロが集い、貴社側の優位性を徹底して守るネゴシエーションを展開します。"
      },
      {
        title: "グローバル基準の報告・コンプラ",
        description: "現地固有の複雑怪奇なオフマーケット取引実務を、海外のリスク委員会や投資委員会にそのまま承認決裁可能な洗練されたグローバル形式で明瞭報告。"
      }
    ],
    whyJapanSec6Title: "高品質な日本アセットで、ポートフォリオを強化しましょう。",
    whyJapanSec6Lead: "現状の市況レポートのブリーフィング、および非公開のエクスクルーシブ案件の詳細は、当社の専門アドバイザリーチームにお問い合わせください。",
    whyJapanSec6Cta1: "マーケット・ブリーフィングを要求する",
    whyJapanSec6Cta2: "当社のサービス一覧を見る",
  }
};
