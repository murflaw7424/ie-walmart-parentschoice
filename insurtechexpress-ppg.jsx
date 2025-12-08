import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, Users, TrendingUp, Shield, Heart, Plane, DollarSign, CheckCircle, XCircle, Building, Award, Zap, ArrowRight, MapPin, Star, Target, AlertCircle, Calculator, ExternalLink, Phone } from 'lucide-react';

const COLORS = {
  primary: '#0891B2',
  primaryDark: '#0E7490',
  primaryLight: '#22D3EE',
  navy: '#1E3A5F',
  navyDark: '#0F172A',
  accent: '#F59E0B',
  success: '#10B981',
  moo: '#003366',
  ppg: '#8B4513',
};

const CollapsibleSection = ({ id, title, icon: Icon, children, defaultOpen = false, color = COLORS.primary }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <section id={id} className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-6 rounded-2xl bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all"
      >
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
            <Icon size={20} style={{ color }} />
          </div>
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 text-left">{title}</h2>
        </div>
        <div className="transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          <ChevronDown size={24} style={{ color }} />
        </div>
      </button>
      {isOpen && <div className="pt-6 px-2">{children}</div>}
    </section>
  );
};

const Flywheel = () => {
  const [activeSegment, setActiveSegment] = useState(null);
  const segments = [
    { id: 'capital', label: 'Capital', icon: DollarSign, color: COLORS.primary, description: 'Connect startups with investors and funding opportunities' },
    { id: 'talent', label: 'Talent', icon: Users, color: COLORS.primaryDark, description: 'Match companies with skilled insurance technology professionals' },
    { id: 'marketing', label: 'Marketing', icon: TrendingUp, color: COLORS.navy, description: 'Amplify reach through 250,000+ industry network' },
    { id: 'technology', label: 'Technology', icon: Zap, color: COLORS.navyDark, description: 'Build and deploy cutting-edge insurance solutions' },
  ];

  return (
    <div className="relative w-full max-w-xs mx-auto aspect-square mb-16">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.navy})` }}>
          <span className="text-white font-bold text-xs text-center leading-tight">Insurtech<br/>Express</span>
        </div>
      </div>
      {segments.map((segment, index) => {
        const angle = (index * 90) - 45;
        const x = Math.cos((angle * Math.PI) / 180) * 90;
        const y = Math.sin((angle * Math.PI) / 180) * 90;
        return (
          <div
            key={segment.id}
            className="absolute top-1/2 left-1/2 cursor-pointer transform transition-transform hover:scale-110"
            style={{ marginLeft: x - 28, marginTop: y - 28 }}
            onMouseEnter={() => setActiveSegment(segment.id)}
            onMouseLeave={() => setActiveSegment(null)}
          >
            <div className="w-14 h-14 p-2 rounded-xl flex flex-col items-center justify-center text-white shadow-lg" style={{ backgroundColor: segment.color }}>
              <segment.icon size={18} />
              <span className="text-[10px] font-semibold mt-0.5">{segment.label}</span>
            </div>
          </div>
        );
      })}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <circle cx="50%" cy="50%" r="90" fill="none" stroke={COLORS.primary} strokeWidth="2" strokeDasharray="8,4" opacity="0.4" />
      </svg>
      {activeSegment && (
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-2 w-48 text-center z-30 border border-gray-200">
          <p className="text-gray-700 text-xs">{segments.find(s => s.id === activeSegment)?.description}</p>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ icon: Icon, value, label, color = COLORS.primary }) => (
  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-2" style={{ backgroundColor: `${color}15` }}>
      <Icon size={16} style={{ color }} />
    </div>
    <div className="text-xl font-bold text-gray-900">{value}</div>
    <div className="text-gray-600 text-xs">{label}</div>
  </div>
);

const ComparisonTable = () => {
  const causes = [
    { cause: 'Heart Attack', termLife: true, travel: false, add: false },
    { cause: 'Cancer', termLife: true, travel: false, add: false },
    { cause: 'Stroke', termLife: true, travel: false, add: false },
    { cause: 'Car Accident', termLife: true, travel: false, add: true },
    { cause: 'Plane Crash', termLife: true, travel: true, add: true },
    { cause: 'COVID / Illness', termLife: true, travel: false, add: false },
    { cause: 'Pre-existing Condition', termLife: true, travel: false, add: false },
  ];

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-200 bg-gray-50">
            <th className="text-left py-2 px-3 font-semibold text-gray-800 text-xs">Cause of Death</th>
            <th className="text-center py-2 px-3">
              <div className="inline-flex items-center gap-1 text-green-700 px-2 py-1 rounded-full font-semibold text-[10px] bg-green-100">
                <Shield size={12} />Term
              </div>
            </th>
            <th className="text-center py-2 px-3">
              <div className="inline-flex items-center gap-1 text-orange-700 px-2 py-1 rounded-full font-semibold text-[10px] bg-orange-100">
                <Plane size={12} />Travel
              </div>
            </th>
            <th className="text-center py-2 px-3">
              <div className="inline-flex items-center gap-1 text-red-700 px-2 py-1 rounded-full font-semibold text-[10px] bg-red-100">
                <AlertCircle size={12} />AD&D
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {causes.map((row) => (
            <tr key={row.cause} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-2 px-3 font-medium text-gray-800 text-xs">{row.cause}</td>
              <td className="text-center py-2 px-3">
                {row.termLife ? <CheckCircle className="inline text-green-600" size={16} /> : <XCircle className="inline text-gray-300" size={16} />}
              </td>
              <td className="text-center py-2 px-3">
                {row.travel ? <CheckCircle className="inline text-orange-500" size={16} /> : <XCircle className="inline text-gray-300" size={16} />}
              </td>
              <td className="text-center py-2 px-3">
                {row.add ? <CheckCircle className="inline text-red-400" size={16} /> : <XCircle className="inline text-gray-300" size={16} />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const RevenueCalculator = () => {
  const [travelers, setTravelers] = useState(200000);
  const [conversionRate, setConversionRate] = useState(3);
  const [referralFee, setReferralFee] = useState(15);

  const conversions = Math.round(travelers * (conversionRate / 100));
  const annualRevenue = conversions * referralFee;

  return (
    <div className="rounded-2xl p-5 text-white" style={{ background: `linear-gradient(135deg, ${COLORS.navyDark}, ${COLORS.navy})` }}>
      <div className="flex items-center gap-2 mb-4">
        <Calculator size={20} />
        <h3 className="text-lg font-bold">PPG Revenue Calculator</h3>
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-white/10 rounded-xl p-3">
          <label className="block text-white/80 text-[10px] mb-1 font-medium">US Travelers</label>
          <input type="range" min="50000" max="500000" step="10000" value={travelers} onChange={(e) => setTravelers(Number(e.target.value))} className="w-full accent-cyan-400 h-1.5 rounded-lg cursor-pointer" />
          <div className="text-base font-bold mt-1" style={{ color: COLORS.primaryLight }}>{(travelers/1000)}K</div>
        </div>
        <div className="bg-white/10 rounded-xl p-3">
          <label className="block text-white/80 text-[10px] mb-1 font-medium">Conversion</label>
          <input type="range" min="0.5" max="5" step="0.5" value={conversionRate} onChange={(e) => setConversionRate(parseFloat(e.target.value))} className="w-full accent-cyan-400 h-1.5 rounded-lg cursor-pointer" />
          <div className="text-base font-bold mt-1" style={{ color: COLORS.primaryLight }}>{conversionRate.toFixed(1)}%</div>
        </div>
        <div className="bg-white/10 rounded-xl p-3">
          <label className="block text-white/80 text-[10px] mb-1 font-medium">Fee</label>
          <input type="range" min="5" max="25" step="1" value={referralFee} onChange={(e) => setReferralFee(Number(e.target.value))} className="w-full accent-cyan-400 h-1.5 rounded-lg cursor-pointer" />
          <div className="text-base font-bold mt-1" style={{ color: COLORS.primaryLight }}>${referralFee}</div>
        </div>
      </div>

      <div className="rounded-xl p-4 text-center" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}>
        <div className="text-white/80 text-xs font-medium">PPG Annual Revenue</div>
        <div className="text-2xl font-bold text-white">
          ${annualRevenue >= 1000000 ? (annualRevenue / 1000000).toFixed(2) + 'M' : annualRevenue.toLocaleString()}
        </div>
        <div className="text-white/60 text-[10px] mt-1">{conversions.toLocaleString()} signups × ${referralFee} fee</div>
      </div>

      <div className="mt-3 bg-cyan-900/30 rounded-lg p-2 border border-cyan-500/30">
        <div className="flex items-start gap-1.5">
          <ExternalLink size={10} className="text-cyan-400 mt-0.5 flex-shrink-0" />
          <div className="text-[10px]">
            <span className="text-white/80">Sources: </span>
            <a href="https://www.bcg.com/publications/2025/embedded-insurance-success-get-your-tech-stack-right" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">BCG</a>
            <span className="text-white/60"> | </span>
            <a href="https://www.swissre.com/dam/jcr:0a92d176-548a-4b2a-9b27-6f83548987b9/Embedded%20Insurance%202.0%20-%20Incumbent%20Strategy%20-%20International%20Peer%20Group%20Report%20-%20June%202022.pdf" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Swiss Re EI 2.0</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoungeMap = () => {
  const regions = [
    { name: 'Americas', lounges: 42, color: COLORS.primary },
    { name: 'Europe', lounges: 28, color: COLORS.primaryDark },
    { name: 'Asia Pacific', lounges: 95, color: COLORS.navy },
    { name: 'China/HK', lounges: 55, color: COLORS.navyDark },
    { name: 'ME/Africa', lounges: 38, color: COLORS.success },
  ];

  return (
    <div className="grid grid-cols-5 gap-2">
      {regions.map((region) => (
        <div key={region.name} className="bg-white rounded-lg p-2 shadow-sm text-center border border-gray-100">
          <div className="text-lg font-bold" style={{ color: region.color }}>{region.lounges}+</div>
          <div className="text-gray-600 text-[10px]">{region.name}</div>
        </div>
      ))}
    </div>
  );
};

const KenLeibowBio = () => (
  <div className="rounded-2xl p-5 text-white" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}>
    <div className="flex flex-col md:flex-row items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-24 h-24 rounded-xl bg-white/20 overflow-hidden shadow-xl flex items-center justify-center">
          <span className="text-white/60 text-xs text-center px-2">Ken Leibow<br/>Photo</span>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-1">Ken Leibow</h3>
        <p className="text-white/70 text-xs mb-2">Founder & CEO</p>
        <p className="text-white/90 text-xs leading-relaxed mb-3">
          <strong>38+ years</strong> insurance industry experience. Prior roles at <strong>Mutual of Omaha</strong>, <strong>Genworth Financial</strong>, and VP at <strong>Diversified Underwriters</strong>. Built the <strong>largest life insurance data exchange hub</strong> processing 1M+ policies/year.
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">ACORD Leadership 2022</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">NAILBA ID20 Trailblazer</span>
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px]">LIDMA Innovation 2022</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <a href="tel:402-740-7356" className="flex items-center gap-1 text-white/80 hover:text-white">
            <Phone size={12} /> 402-740-7356
          </a>
          <a href="https://www.insurtechexpress.com/leadership/ken-leibow/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white/80 hover:text-white">
            <ExternalLink size={12} /> Full Bio
          </a>
        </div>
      </div>
    </div>
  </div>
);

const MarketingCreativeGallery = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const creatives = [
    { id: 'safari', title: 'Safari Campaign', description: 'Travel-themed creative featuring the Mutual of Omaha safari family' },
    { id: 'kiosk-digital', title: 'Digital Kiosk', description: 'Interactive kiosk mockup for Vino Volo lounges' },
    { id: 'kiosk-interactive', title: 'Spin Wheel', description: 'Gamified engagement with prize wheel activation' }
  ];

  const SafariImage = () => (
    <div className="aspect-[3/4] bg-gradient-to-b from-amber-100 via-amber-50 to-gray-100 rounded-xl relative overflow-hidden">
      <div className="absolute top-4 left-4 right-4">
        <p className="text-sm font-serif italic leading-snug" style={{ color: COLORS.moo }}>
          "Whether you're going on safari, or going to visit family for the holidays."
        </p>
      </div>
      <div className="absolute top-1/4 bottom-1/4 left-0 right-0 flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center gap-2 mb-2">
            <span className="text-3xl">🦁</span>
            <span className="text-4xl">🐘</span>
            <span className="text-3xl">🐍</span>
          </div>
          <p className="text-[10px] text-gray-500">Safari family in explorer gear</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gray-100 p-3 text-center">
        <p className="text-sm font-bold mb-1" style={{ color: COLORS.moo }}>Travel safe knowing your family is covered.</p>
        <div className="flex items-center justify-center gap-1">
          <span className="font-bold text-xs" style={{ color: COLORS.moo }}>MUTUAL<span className="font-normal text-[10px]">of</span>OMAHA</span>
        </div>
      </div>
    </div>
  );

  const KioskImage = () => (
    <div className="aspect-[4/3] bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl relative overflow-hidden flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg p-4 w-32 shadow-xl">
        <div className="text-[8px] text-center text-amber-200 mb-1">VINO VOLO</div>
        <div className="bg-white rounded p-2">
          <div className="text-[8px] font-bold mb-1" style={{ color: COLORS.moo }}>Mutual of Omaha</div>
          <div className="flex justify-center gap-1 mb-1">
            <span className="text-xs">🦁</span>
            <span className="text-sm">🐘</span>
          </div>
          <div className="bg-blue-900 text-white text-[6px] py-0.5 px-1 rounded text-center">LEARN MORE</div>
        </div>
      </div>
      <div className="absolute bottom-2 text-[10px] text-gray-600">Airport lounge kiosk display</div>
    </div>
  );

  const SpinWheelImage = () => (
    <div className="aspect-[4/3] bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl relative overflow-hidden flex items-center justify-center gap-4 p-4">
      <div className="bg-gray-800 rounded-lg p-3 w-28 shadow-xl">
        <div className="text-[8px] text-white font-bold mb-1">MUTUAL OF OMAHA</div>
        <div className="text-[6px] text-white/80 mb-1">Give the wheel a spin!</div>
        <div className="bg-amber-100 rounded p-1">
          <div className="flex justify-center gap-1">
            <span className="text-xs">🐘</span>
            <span className="text-xs">🦁</span>
          </div>
        </div>
      </div>
      <div className="w-20 h-20 rounded-full border-4 border-red-600 bg-gradient-to-br from-red-500 to-amber-100 flex items-center justify-center shadow-lg">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
          <span className="text-[10px]">🦁</span>
        </div>
      </div>
      <div className="absolute bottom-2 text-[10px] text-gray-600">Interactive spin wheel engagement</div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
      <h3 className="text-base font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
        <Star style={{ color: COLORS.accent }} size={18} />
        Example Marketing Creative
      </h3>
      
      <div className="flex justify-center gap-1.5 mb-4">
        {creatives.map((creative, index) => (
          <button
            key={creative.id}
            onClick={() => setActiveImage(index)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeImage === index ? 'text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            style={activeImage === index ? { background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` } : {}}
          >
            {creative.title}
          </button>
        ))}
      </div>

      <div className="max-w-sm mx-auto">
        {activeImage === 0 && <SafariImage />}
        {activeImage === 1 && <KioskImage />}
        {activeImage === 2 && <SpinWheelImage />}
        <p className="text-center text-gray-600 text-xs mt-2">{creatives[activeImage].description}</p>
      </div>

      <p className="text-center text-gray-500 text-[10px] mt-3">Creative for airport lounge displays • Digital marketing • App integration</p>
    </div>
  );
};

const NAICTable = () => {
  const rankings = [
    { rank: 1, name: 'Northwestern Mutual', premiums: '$17,929' },
    { rank: 2, name: 'New York Life', premiums: '$10,880' },
    { rank: 3, name: 'Massachusetts Mutual', premiums: '$9,476' },
    { rank: 17, name: 'Mutual of Omaha', premiums: '$2,436', highlight: true },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
      <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
        <TrendingUp style={{ color: COLORS.primary }} size={16} />
        Largest Life Insurers, 2024 (millions)
      </h3>
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b-2 border-gray-200 bg-gray-50">
            <th className="text-left py-1.5 px-2 font-semibold text-gray-700">Rank</th>
            <th className="text-left py-1.5 px-2 font-semibold text-gray-700">Company</th>
            <th className="text-right py-1.5 px-2 font-semibold text-gray-700">Premiums</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((row) => (
            <tr key={row.rank} className={`border-b border-gray-100 ${row.highlight ? '' : 'hover:bg-gray-50'}`} style={row.highlight ? { backgroundColor: `${COLORS.primary}15` } : {}}>
              <td className="py-1.5 px-2 font-medium text-gray-800">#{row.rank}</td>
              <td className={`py-1.5 px-2 ${row.highlight ? 'font-bold' : ''}`} style={row.highlight ? { color: COLORS.moo } : { color: '#374151' }}>{row.name}</td>
              <td className="py-1.5 px-2 text-right font-semibold text-gray-800">{row.premiums}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[10px] text-gray-500 mt-2">
        Source: <a href="https://www.acli.com/-/media/public/pdf/news-and-analysis/publications-and-research/2025fb/11_industry_rankings_acli_fact_book_2025.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ACLI/NAIC data</a>
      </p>
    </div>
  );
};

export default function PPGPitchDeck() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const sections = [
    { id: 'ie-flywheel', title: 'InsurtechExpress Flywheel', icon: Zap, color: COLORS.primary },
    { id: 'ie-facts', title: 'IE Quick Facts', icon: Star, color: COLORS.primaryDark },
    { id: 'moo-facts', title: 'Mutual of Omaha', icon: Shield, color: COLORS.moo },
    { id: 'partnership', title: 'IE × MOO Partnership', icon: Target, color: COLORS.navy },
    { id: 'ppg-opportunity', title: 'PPG Opportunity', icon: Globe, color: COLORS.ppg },
    { id: 'insurance-comparison', title: 'Why Term Life Insurance?', icon: Heart, color: COLORS.success },
    { id: 'revenue', title: 'Revenue Potential', icon: DollarSign, color: COLORS.accent },
    { id: 'next-steps', title: 'Next Steps', icon: ArrowRight, color: COLORS.navy },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setShowDropdown(false);
  };

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setShowDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 rounded-lg" style={{ backgroundColor: `${COLORS.primary}15` }}>
              <span style={{ color: COLORS.primary }} className="font-bold text-xs">InsurtechExpress</span>
            </div>
            <span className="text-gray-400 text-xs">×</span>
            <div className="px-2 py-1 rounded-lg" style={{ backgroundColor: COLORS.moo }}>
              <span className="text-white font-bold text-xs">Mutual of Omaha</span>
            </div>
          </div>
          
          <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white font-medium text-xs shadow-md hover:shadow-lg transition-all" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}>
              Navigate Sections
              <ChevronDown size={14} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50">
                {sections.map((section) => (
                  <button key={section.id} onClick={() => scrollToSection(section.id)} className="w-full flex items-center gap-2 px-3 py-2 hover:bg-gray-50 transition-colors text-left border-b border-gray-100 last:border-0">
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${section.color}15` }}>
                      <section.icon size={12} style={{ color: section.color }} />
                    </div>
                    <span className="text-xs font-medium text-gray-700">{section.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <section className="py-8 px-4" style={{ background: 'linear-gradient(180deg, #F8FAFC 0%, #E2E8F0 100%)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
            <div className="bg-white rounded-lg px-3 py-1.5 shadow-md border border-gray-200">
              <span style={{ color: COLORS.primary }} className="font-bold text-sm">InsurtechExpress</span>
            </div>
            <span className="text-xl text-gray-400">×</span>
            <div className="rounded-lg px-3 py-1.5 shadow-md" style={{ backgroundColor: COLORS.moo }}>
              <span className="text-white font-bold text-sm">Mutual of Omaha</span>
            </div>
            <span className="text-xl text-gray-400">×</span>
            <div className="rounded-lg px-3 py-1.5 shadow-md" style={{ backgroundColor: COLORS.ppg }}>
              <span className="text-white font-bold text-sm">Plaza Premium Group</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Protecting Travelers.<br/><span style={{ color: COLORS.primary }}>Growing Revenue.</span>
          </h1>

          <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto">
            A strategic partnership to offer <strong className="text-gray-900">$1 Million Term Life Insurance</strong> to <strong style={{ color: COLORS.primary }}>200,000+ US travelers</strong> through Plaza Premium Group lounges worldwide.
          </p>

          <button onClick={toggleDropdown} className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all text-sm" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}>
            Explore the Opportunity
            <ChevronDown size={18} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <CollapsibleSection id="ie-flywheel" title="InsurtechExpress: The Innovation Ecosystem" icon={Zap} defaultOpen={true} color={COLORS.primary}>
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 mb-4">
            <p className="text-center text-sm text-gray-700 mb-6">
              <strong style={{ color: COLORS.primary }}>The Insurance & FinTech Innovation Ecosystem</strong><br/>
              <span className="text-gray-600">Connecting innovators with <strong>capital</strong>, <strong>talent</strong>, & <strong>marketing</strong></span>
            </p>
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <Flywheel />
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 border-l-4" style={{ borderLeftColor: COLORS.primary }}>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">Founded by Industry Veterans</h4>
                  <p className="text-gray-600 text-xs">Ken Leibow, CEO with 38+ years experience at Mutual of Omaha, Oracle, EBIX, Genworth.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border-l-4" style={{ borderLeftColor: COLORS.primaryDark }}>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">Navigator AI Platform</h4>
                  <p className="text-gray-600 text-xs">World's largest content hub for life insurance technology, launched June 2024.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border-l-4" style={{ borderLeftColor: COLORS.navy }}>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">IE Capital Connect</h4>
                  <p className="text-gray-600 text-xs">Funding and advisory services for insurtech ventures, launched September 2025.</p>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection id="ie-facts" title="IE Quick Facts" icon={Star} color={COLORS.primaryDark}>
          <div className="grid grid-cols-4 gap-3 mb-4">
            <StatCard icon={Users} value="250K+" label="B2B Network" color={COLORS.primary} />
            <StatCard icon={Globe} value="150K+" label="Monthly Views" color={COLORS.primaryDark} />
            <StatCard icon={TrendingUp} value="33K+" label="LinkedIn" color={COLORS.navy} />
            <StatCard icon={Star} value="3M+" label="Views/Year" color={COLORS.success} />
          </div>
          <KenLeibowBio />
        </CollapsibleSection>

        <CollapsibleSection id="moo-facts" title="Mutual of Omaha: 116 Years of Trust" icon={Shield} color={COLORS.moo}>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="rounded-xl p-4 text-white text-center" style={{ background: `linear-gradient(135deg, ${COLORS.moo}, #004080)` }}>
              <Award size={28} className="mx-auto mb-1 text-yellow-400" />
              <div className="text-2xl font-bold">#1</div>
              <div className="text-white/80 text-xs">J.D. Power 2025</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-100">
              <div className="text-2xl font-bold" style={{ color: COLORS.moo }}>A+</div>
              <div className="text-gray-600 text-xs mb-1">Financial Strength</div>
              <div className="flex flex-wrap justify-center gap-1 text-[10px]">
                <span className="bg-gray-100 px-1.5 py-0.5 rounded-full">AM Best</span>
                <span className="bg-gray-100 px-1.5 py-0.5 rounded-full">S&P</span>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md text-center border border-gray-100">
              <div className="text-2xl font-bold" style={{ color: COLORS.moo }}>#299</div>
              <div className="text-gray-600 text-xs">Fortune 500</div>
              <div className="text-lg font-bold mt-1" style={{ color: COLORS.primary }}>$14.6B</div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 mb-4">
            <StatCard icon={Building} value="1909" label="Founded" color={COLORS.moo} />
            <StatCard icon={Users} value="22M" label="Covered" color={COLORS.moo} />
            <StatCard icon={Shield} value="$52B" label="Assets" color={COLORS.moo} />
            <StatCard icon={Heart} value="6.5M+" label="Policies" color={COLORS.moo} />
          </div>
          <NAICTable />
        </CollapsibleSection>

        <CollapsibleSection id="partnership" title="IE × MOO Exclusive Partnership" icon={Target} color={COLORS.navy}>
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 mb-4">
            <p className="text-center text-gray-700 text-sm mb-4">
              Mutual of Omaha engaged InsurtechExpress as their <strong className="text-gray-900">exclusive partner</strong> to develop "Nontraditional Life Insurance Sales Channels" throughout the United States.
            </p>
            <div className="grid md:grid-cols-2 gap-3 mb-4">
              <div className="rounded-xl p-4 text-white" style={{ backgroundColor: COLORS.moo }}>
                <div className="flex items-center gap-2 mb-3">
                  <Shield size={20} />
                  <h4 className="font-bold text-sm">Mutual of Omaha Provides</h4>
                </div>
                <ul className="space-y-1.5 text-xs">
                  <li className="flex items-start gap-1.5"><CheckCircle size={14} className="text-green-400 mt-0.5" />Marketing dollars and support</li>
                  <li className="flex items-start gap-1.5"><CheckCircle size={14} className="text-green-400 mt-0.5" />A+ rated insurance products</li>
                  <li className="flex items-start gap-1.5"><CheckCircle size={14} className="text-green-400 mt-0.5" />Accelerated underwriting tech</li>
                  <li className="flex items-start gap-1.5"><CheckCircle size={14} className="text-green-400 mt-0.5" />116 years of trust</li>
                </ul>
              </div>
              <div className="rounded-xl p-4 text-white" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}>
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={20} />
                  <h4 className="font-bold text-sm">InsurtechExpress Provides</h4>
                </div>
                <ul className="space-y-1.5 text-xs">
                  <li className="flex items-start gap-1.5"><CheckCircle size={14} className="text-green-300 mt-0.5" />Strategic partnerships</li>
                  <li className="flex items-start gap-1.5"><CheckCircle size={14} className="text-green-300 mt-0.5" />Creative marketing & distribution</li>
                  <li className="flex items-start gap-1.5"><CheckCircle size={14} className="text-green-300 mt-0.5" />Startup experience & agility</li>
                  <li className="flex items-start gap-1.5"><CheckCircle size={14} className="text-green-300 mt-0.5" />250,000+ industry network</li>
                </ul>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Target className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
                <div>
                  <h4 className="font-bold text-gray-800 text-xs mb-1">Why This Partnership Makes Sense</h4>
                  <p className="text-gray-700 text-xs">This new division is being created as an <strong>internal startup</strong> within Mutual of Omaha. IE's marketing experience makes this the ideal fit.</p>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection id="ppg-opportunity" title="Plaza Premium Group Opportunity" icon={Globe} color={COLORS.ppg}>
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 mb-4">
            <p className="text-center text-gray-700 text-sm mb-4">
              Sell life insurance to <strong>US travelers</strong> and <strong>US Visa/Green Card holders</strong> through PPG's global lounge network.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Building style={{ color: COLORS.ppg }} size={16} />
                    <h4 className="font-bold text-gray-800 text-xs">Physical Lounge Experience</h4>
                  </div>
                  <p className="text-gray-600 text-xs">Embedded displays, QR codes, digital kiosks, concierge-assisted enrollment.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Globe style={{ color: COLORS.primary }} size={16} />
                    <h4 className="font-bold text-gray-800 text-xs">Virtual Experience</h4>
                  </div>
                  <p className="text-gray-600 text-xs">Integration with Plaza Premium app and website.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign style={{ color: COLORS.success }} size={16} />
                    <h4 className="font-bold text-gray-800 text-xs">Flat Referral Fees</h4>
                  </div>
                  <p className="text-gray-600 text-xs">No commission complexity or insurance licensing required.</p>
                </div>
              </div>

              <div className="rounded-xl p-4 text-white" style={{ background: `linear-gradient(135deg, ${COLORS.ppg}, #654321)` }}>
                <h4 className="font-bold text-sm mb-3">Plaza Premium Group</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between border-b border-white/20 pb-1.5"><span className="text-white/80">Global Lounges</span><span className="font-bold">250+</span></div>
                  <div className="flex justify-between border-b border-white/20 pb-1.5"><span className="text-white/80">Airports</span><span className="font-bold">80+</span></div>
                  <div className="flex justify-between border-b border-white/20 pb-1.5"><span className="text-white/80">Countries</span><span className="font-bold">30+</span></div>
                  <div className="flex justify-between border-b border-white/20 pb-1.5"><span className="text-white/80">US Members</span><span className="font-bold">200K</span></div>
                  <div className="flex justify-between"><span className="text-white/80">Skytrax Best</span><span className="font-bold">9 Years</span></div>
                </div>
              </div>
            </div>

            <LoungeMap />
          </div>
          
          <MarketingCreativeGallery />
        </CollapsibleSection>

        <CollapsibleSection id="insurance-comparison" title="Why Term Life Insurance?" icon={Heart} color={COLORS.success}>
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 mb-4">
            <p className="text-center text-gray-700 text-sm mb-4">
              Travel insurance protects <strong>trips</strong>. Term life insurance protects <strong>families</strong>.
            </p>
            
            <ComparisonTable />

            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Shield className="text-green-600" size={16} />
                  <h4 className="font-bold text-green-800 text-xs">$1M Term Life</h4>
                </div>
                <ul className="space-y-0.5 text-green-700 text-[10px]">
                  <li>✓ ANY cause of death</li>
                  <li>✓ 10-30 year coverage</li>
                  <li>✓ Global protection 24/7</li>
                  <li>✓ ~$37-62/month</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Plane className="text-orange-600" size={16} />
                  <h4 className="font-bold text-orange-800 text-xs">Travel Insurance</h4>
                </div>
                <ul className="space-y-0.5 text-orange-700 text-[10px]">
                  <li>✗ Trip accidents only</li>
                  <li>✗ Trip duration only</li>
                  <li>✗ Max ~$100K</li>
                  <li>✗ Pre-existing excluded</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <AlertCircle className="text-red-600" size={16} />
                  <h4 className="font-bold text-red-800 text-xs">AD&D Insurance</h4>
                </div>
                <ul className="space-y-0.5 text-red-700 text-[10px]">
                  <li>✗ Accidents only (14%)</li>
                  <li>✗ No illness</li>
                  <li>✗ No heart attack</li>
                  <li>✗ 86% uncovered</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 rounded-xl p-4 text-white text-center" style={{ background: `linear-gradient(135deg, ${COLORS.moo}, #004080)` }}>
              <h4 className="text-base font-bold mb-1">The Bottom Line</h4>
              <p className="text-white/90 text-xs">
                Heart disease and cancer cause <strong>1.29M US deaths annually</strong>. AD&D covers just 14%. <strong>Term life covers 100%.</strong>
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection id="revenue" title="Revenue Potential for PPG" icon={DollarSign} color={COLORS.accent}>
          <div className="mb-4">
            <p className="text-center text-gray-700 text-sm mb-4">
              Simple flat-fee referral model. No commission complexity. No insurance licensing required.
            </p>
            <RevenueCalculator />
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
            <h4 className="font-bold text-gray-800 mb-2 text-xs">How the Flat Referral Fee Works:</h4>
            <div className="grid grid-cols-2 gap-2 text-gray-700 text-xs">
              <div className="flex items-start gap-1.5"><CheckCircle size={14} style={{ color: COLORS.success }} className="mt-0.5" />$5-$25 per qualified referral</div>
              <div className="flex items-start gap-1.5"><CheckCircle size={14} style={{ color: COLORS.success }} className="mt-0.5" />No commission splits</div>
              <div className="flex items-start gap-1.5"><CheckCircle size={14} style={{ color: COLORS.success }} className="mt-0.5" />Fee paid on policy issuance</div>
              <div className="flex items-start gap-1.5"><CheckCircle size={14} style={{ color: COLORS.success }} className="mt-0.5" />No insurance license needed</div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection id="next-steps" title="Next Steps" icon={ArrowRight} color={COLORS.navy}>
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
            <h3 className="text-base font-bold text-gray-800 mb-3 text-center">Information Needed to Continue</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-bold text-gray-800 text-xs mb-2 flex items-center gap-1.5">
                  <Users style={{ color: COLORS.primary }} size={14} />
                  US Member Demographics
                </h4>
                <ul className="space-y-1.5 text-gray-600 text-xs">
                  <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.primary }} />Age / DOB distribution</li>
                  <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.primary }} />Zip Code / Geographic</li>
                  <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.primary }} />Sex / Gender breakdown</li>
                  <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.primary }} />Actual US member count</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-xs mb-2 flex items-center gap-1.5">
                  <MapPin style={{ color: COLORS.primary }} size={14} />
                  Lounge Network Details
                </h4>
                <ul className="space-y-1.5 text-gray-600 text-xs">
                  <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.primary }} />Current US lounge cities</li>
                  <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.primary }} />International lounge cities</li>
                  <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.primary }} />12-month expansion roadmap</li>
                  <li className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full" style={{ backgroundColor: COLORS.primary }} />US traveler demographics</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
              <a href="https://www.insurtechexpress.com/contact/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-xs" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}>
                Contact InsurtechExpress <ArrowRight size={14} />
              </a>
              <a href="https://www.mutualofomaha.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all text-xs" style={{ backgroundColor: COLORS.moo }}>
                Visit Mutual of Omaha <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </CollapsibleSection>
      </main>

      <footer className="py-4 px-4 text-center" style={{ background: `linear-gradient(135deg, ${COLORS.navyDark}, ${COLORS.navy})` }}>
        <p className="text-white/60 text-xs">© 2025 InsurtechExpress × Mutual of Omaha. Confidential Partnership Proposal.</p>
        <div className="mt-1 text-[10px] text-white/40">
          Sources:{' '}
          <a href="https://www.swissre.com/dam/jcr:0a92d176-548a-4b2a-9b27-6f83548987b9/Embedded%20Insurance%202.0%20-%20Incumbent%20Strategy%20-%20International%20Peer%20Group%20Report%20-%20June%202022.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 underline">Swiss Re EI 2.0</a>
          {' | '}
          <a href="https://www.bcg.com/publications/2025/embedded-insurance-success-get-your-tech-stack-right" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 underline">BCG</a>
          {' | '}
          <a href="https://www.acli.com/-/media/public/pdf/news-and-analysis/publications-and-research/2025fb/11_industry_rankings_acli_fact_book_2025.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 underline">ACLI/NAIC</a>
        </div>
      </footer>
    </div>
  );
}
