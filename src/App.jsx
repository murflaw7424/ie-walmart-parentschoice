import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Globe, Users, TrendingUp, Shield, Heart, DollarSign, CheckCircle, XCircle, Building, Award, Zap, ArrowRight, MapPin, Star, Target, Calculator, ExternalLink, Phone, Lock, LogOut, Gift, Baby, Home } from 'lucide-react';

const INVITE_CODE = 'PARENTS2025';

const LoginGate = ({ onSuccess }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.toUpperCase() === INVITE_CODE) {
      localStorage.setItem('walmart_access', 'granted');
      onSuccess();
    } else {
      setError('Invalid invite code');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className={`bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md ${isShaking ? 'animate-shake' : ''}`}>
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Lock size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Confidential Proposal</h1>
          <p className="text-gray-600 text-sm">Enter your invite code to access this presentation</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={code}
              onChange={(e) => { setCode(e.target.value); setError(''); }}
              placeholder="Enter invite code"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-center text-lg font-mono uppercase tracking-widest focus:border-cyan-500 focus:outline-none transition-colors"
              autoFocus
            />
            {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-600 to-cyan-700 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-cyan-800 transition-all shadow-lg hover:shadow-xl"
          >
            Access Presentation
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-xs">
            <Shield size={14} />
            <span>InsurtechExpress × Mutual of Omaha</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake { animation: shake 0.5s ease-in-out; }
      `}</style>
    </div>
  );
};

const COLORS = {
  primary: '#0891B2',
  primaryDark: '#0E7490',
  primaryLight: '#22D3EE',
  navy: '#1E3A5F',
  navyDark: '#0F172A',
  accent: '#F59E0B',
  success: '#10B981',
  moo: '#003366',
  walmart: '#0071DC',
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

const ProductOptionsTable = () => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-gray-100">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b-2 border-gray-200 bg-gray-50">
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Product</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Target Audience</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Target Insureds</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Life Event Trigger</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Family Protection Ecosystem</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Why Purchase</th>
            <th className="text-left py-2 px-2 font-semibold text-gray-800">Why Diaper Brands</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-100 hover:bg-gray-50">
            <td className="py-2 px-2 font-bold text-gray-900">Term Life</td>
            <td className="py-2 px-2 text-gray-700">New parents 25-45</td>
            <td className="py-2 px-2 text-gray-700">Primary earner</td>
            <td className="py-2 px-2 text-gray-700">Birth of child</td>
            <td className="py-2 px-2 text-gray-700">Income replacement if parent dies</td>
            <td className="py-2 px-2 text-gray-700">Affordable protection during child-raising years</td>
            <td className="py-2 px-2 text-gray-700">Parents buying diapers are in prime life insurance buying window</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50">
            <td className="py-2 px-2 font-bold text-gray-900">Final Expense</td>
            <td className="py-2 px-2 text-gray-700">Caregivers 40-65</td>
            <td className="py-2 px-2 text-gray-700">Aging parents</td>
            <td className="py-2 px-2 text-gray-700">Parent needs incontinence care</td>
            <td className="py-2 px-2 text-gray-700">Cover burial/funeral costs</td>
            <td className="py-2 px-2 text-gray-700">Relieve family of end-of-life expenses</td>
            <td className="py-2 px-2 text-gray-700">Adult incontinence purchase signals mortality awareness</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50">
            <td className="py-2 px-2 font-bold text-gray-900">Whole Life</td>
            <td className="py-2 px-2 text-gray-700">Established families</td>
            <td className="py-2 px-2 text-gray-700">Both parents</td>
            <td className="py-2 px-2 text-gray-700">Child enters school/daycare</td>
            <td className="py-2 px-2 text-gray-700">Permanent protection + cash value</td>
            <td className="py-2 px-2 text-gray-700">Legacy planning, college savings</td>
            <td className="py-2 px-2 text-gray-700">Higher income families (premium brands) can afford</td>
          </tr>
          <tr className="border-b border-gray-100 hover:bg-gray-50">
            <td className="py-2 px-2 font-bold text-gray-900">Chronic Illness/LTC</td>
            <td className="py-2 px-2 text-gray-700">Sandwich generation</td>
            <td className="py-2 px-2 text-gray-700">Aging parents</td>
            <td className="py-2 px-2 text-gray-700">Parent health decline</td>
            <td className="py-2 px-2 text-gray-700">Cover long-term care costs</td>
            <td className="py-2 px-2 text-gray-700">Protect retirement savings</td>
            <td className="py-2 px-2 text-gray-700">Incontinence often precedes LTC need</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const RevenueCalculator = () => {
  const [showReferralDetails, setShowReferralDetails] = useState(false);
  const [showBoxDetails, setShowBoxDetails] = useState(false);

  // Interactive values for referral fee calculation
  const [annualBoxes, setAnnualBoxes] = useState(15000000);
  const [scanRate, setScanRate] = useState(20);
  const [conversionRate, setConversionRate] = useState(10);
  const [flatFee, setFlatFee] = useState(25);
  const referralRevenue = annualBoxes * (scanRate / 100) * (conversionRate / 100) * flatFee;

  // Interactive values for box purchase calculation
  const [quotes, setQuotes] = useState(300000);
  const [policyRate, setPolicyRate] = useState(5);
  const policies = quotes * (policyRate / 100);
  const [avgBoxesPerPolicy, setAvgBoxesPerPolicy] = useState(13);
  const totalBoxesSold = policies * avgBoxesPerPolicy;
  const boxPrice = 22.98; // Fixed for Parent's Choice
  const boxRevenue = totalBoxesSold * boxPrice;

  return (
    <div className="space-y-4">
      {/* Top Display - Two Big Numbers */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl p-6 text-white text-center" style={{ background: `linear-gradient(135deg, ${COLORS.walmart}, #005AA7)` }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <DollarSign size={24} />
            <h3 className="text-lg font-bold">Referral Fees</h3>
          </div>
          <div className="text-4xl font-extrabold mb-1">${(referralRevenue / 1000000).toFixed(1)}M</div>
          <div className="text-white/80 text-sm">per year</div>
        </div>

        <div className="rounded-2xl p-6 text-white text-center" style={{ background: `linear-gradient(135deg, ${COLORS.success}, #059669)` }}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Baby size={24} />
            <h3 className="text-lg font-bold">Guaranteed Purchases</h3>
          </div>
          <div className="text-4xl font-extrabold mb-1">${(boxRevenue / 1000000).toFixed(1)}M</div>
          <div className="text-white/80 text-sm">in diaper sales</div>
        </div>
      </div>

      {/* Expandable Section 1: Referral Fee Calculator */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <button
          onClick={() => setShowReferralDetails(!showReferralDetails)}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Calculator size={18} style={{ color: COLORS.walmart }} />
            <h4 className="font-bold text-gray-800 text-sm">Referral Fee Calculator</h4>
          </div>
          <ChevronDown size={18} className={`transition-transform text-gray-400 ${showReferralDetails ? 'rotate-180' : ''}`} />
        </button>

        {showReferralDetails && (
          <div className="p-4 pt-0 border-t border-gray-100">
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="text-center text-sm font-semibold text-gray-800 mb-3">
                Annual Boxes × Scan Rate × Conversion Rate × Flat Fee
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Annual Boxes Slider */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-700 text-xs font-medium">Annual Boxes Sold</label>
                    <span className="text-base font-bold" style={{ color: COLORS.walmart }}>{(annualBoxes / 1000000).toFixed(0)}M</span>
                  </div>
                  <input
                    type="range"
                    min="5000000"
                    max="50000000"
                    step="1000000"
                    value={annualBoxes}
                    onChange={(e) => setAnnualBoxes(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>5M</span>
                    <span>50M</span>
                  </div>
                </div>

                {/* Scan Rate Slider */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-700 text-xs font-medium">QR Code Scan Rate</label>
                    <span className="text-base font-bold" style={{ color: COLORS.walmart }}>{scanRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="1"
                    value={scanRate}
                    onChange={(e) => setScanRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>5%</span>
                    <span>40%</span>
                  </div>
                </div>

                {/* Conversion Rate Slider */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-700 text-xs font-medium">Quote Conversion Rate</label>
                    <span className="text-base font-bold" style={{ color: COLORS.walmart }}>{conversionRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="25"
                    step="1"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>2%</span>
                    <span>25%</span>
                  </div>
                </div>

                {/* Flat Fee Slider */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-700 text-xs font-medium">Flat Fee per Lead</label>
                    <span className="text-base font-bold" style={{ color: COLORS.walmart }}>${flatFee}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={flatFee}
                    onChange={(e) => setFlatFee(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>$10</span>
                    <span>$50</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg p-4 text-center text-white" style={{ background: `linear-gradient(135deg, ${COLORS.walmart}, #005AA7)` }}>
              <div className="text-sm mb-1">Annual Referral Revenue</div>
              <div className="text-3xl font-bold">${(referralRevenue / 1000000).toFixed(1)}M</div>
            </div>
          </div>
        )}
      </div>

      {/* Expandable Section 2: Guaranteed Box Purchases Calculator */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <button
          onClick={() => setShowBoxDetails(!showBoxDetails)}
          className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Gift size={18} style={{ color: COLORS.success }} />
            <h4 className="font-bold text-gray-800 text-sm">Guaranteed Box Purchases Calculator</h4>
          </div>
          <ChevronDown size={18} className={`transition-transform text-gray-400 ${showBoxDetails ? 'rotate-180' : ''}`} />
        </button>

        {showBoxDetails && (
          <div className="p-4 pt-0 border-t border-gray-100">
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Quotes Slider */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-700 text-xs font-medium">Annual Quotes</label>
                    <span className="text-base font-bold" style={{ color: COLORS.success }}>{(quotes / 1000).toFixed(0)}K</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="1000000"
                    step="50000"
                    value={quotes}
                    onChange={(e) => setQuotes(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>100K</span>
                    <span>1M</span>
                  </div>
                </div>

                {/* Policy Rate Slider */}
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-700 text-xs font-medium">Policy Conversion Rate</label>
                    <span className="text-base font-bold" style={{ color: COLORS.success }}>{policyRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    step="1"
                    value={policyRate}
                    onChange={(e) => setPolicyRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>1%</span>
                    <span>15%</span>
                  </div>
                </div>

                {/* Avg Boxes Per Policy Slider */}
                <div className="bg-white/10 rounded-xl p-3 col-span-2">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-700 text-xs font-medium">Avg Free Boxes per Policy</label>
                    <span className="text-base font-bold" style={{ color: COLORS.success }}>{avgBoxesPerPolicy} boxes</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="15"
                    step="1"
                    value={avgBoxesPerPolicy}
                    onChange={(e) => setAvgBoxesPerPolicy(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                    <span>2 boxes</span>
                    <span>15 boxes</span>
                  </div>
                </div>
              </div>

              {/* Summary Boxes */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="text-gray-600 text-xs mb-1">Policies Sold</div>
                  <div className="text-xl font-bold" style={{ color: COLORS.success }}>
                    {policies.toLocaleString(undefined, {maximumFractionDigits: 0})}
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="text-gray-600 text-xs mb-1">Total Boxes</div>
                  <div className="text-xl font-bold" style={{ color: COLORS.success }}>
                    {totalBoxesSold.toLocaleString(undefined, {maximumFractionDigits: 0})}
                  </div>
                </div>
              </div>

              <div className="text-center pt-2 border-t border-gray-300">
                <div className="text-gray-600 text-xs mb-1">Box Revenue (Parent's Choice)</div>
                <div className="text-2xl font-bold" style={{ color: COLORS.success }}>
                  ${(boxRevenue / 1000000).toFixed(1)}M
                </div>
                <div className="text-gray-500 text-[10px]">@ ${boxPrice.toFixed(2)}/box</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const USStoreHeatmap = () => {
  const [hoveredState, setHoveredState] = useState(null);

  const stateData = {
    // High Priority - Newborn Focus
    CA: { priority: 'high', focus: 'Newborn Focus', color: '#0071DC' },
    TX: { priority: 'high', focus: 'Newborn Focus', color: '#0071DC' },
    NY: { priority: 'high', focus: 'Newborn Focus', color: '#0071DC' },

    // High Priority - Adult Incontinence Focus
    FL: { priority: 'high', focus: 'Adult Incontinence Focus', color: '#005AA7' },
    ME: { priority: 'high', focus: 'Adult Incontinence Focus', color: '#005AA7' },
    PA: { priority: 'high', focus: 'Adult Incontinence Focus', color: '#005AA7' },

    // Medium Priority
    IL: { priority: 'medium', focus: 'Newborn Focus', color: '#66B3FF' },
    OH: { priority: 'medium', focus: 'Newborn Focus', color: '#66B3FF' },
    GA: { priority: 'medium', focus: 'Newborn Focus', color: '#66B3FF' },
    NC: { priority: 'medium', focus: 'Newborn Focus', color: '#66B3FF' },
    MI: { priority: 'medium', focus: 'Newborn Focus', color: '#66B3FF' },

    // Default (lower priority)
    default: { priority: 'low', focus: 'Standard Focus', color: '#B3D9FF' }
  };

  const getStateColor = (stateCode) => {
    return stateData[stateCode]?.color || stateData.default.color;
  };

  const getStateFocus = (stateCode) => {
    return stateData[stateCode]?.focus || stateData.default.focus;
  };

  return (
    <div className="space-y-4">
      <div className="text-center text-gray-700 text-sm font-semibold mb-3">
        US Market Heatmap - Nationwide Walmart Coverage
      </div>

      <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 relative">
        <svg viewBox="0 0 960 600" className="w-full h-auto">
          {/* Simplified US Map - Major states */}
          {/* California */}
          <path
            d="M 50 200 L 80 180 L 90 220 L 100 260 L 90 320 L 70 350 L 50 340 L 40 300 L 45 250 Z"
            fill={getStateColor('CA')}
            stroke="#fff"
            strokeWidth="2"
            onMouseEnter={() => setHoveredState('CA')}
            onMouseLeave={() => setHoveredState(null)}
            className="cursor-pointer transition-opacity hover:opacity-80"
          />
          {/* Texas */}
          <path
            d="M 360 380 L 420 370 L 450 390 L 460 430 L 440 470 L 400 480 L 350 460 L 340 420 Z"
            fill={getStateColor('TX')}
            stroke="#fff"
            strokeWidth="2"
            onMouseEnter={() => setHoveredState('TX')}
            onMouseLeave={() => setHoveredState(null)}
            className="cursor-pointer transition-opacity hover:opacity-80"
          />
          {/* Florida */}
          <path
            d="M 680 420 L 720 410 L 750 430 L 760 460 L 740 490 L 710 500 L 690 480 L 675 450 Z"
            fill={getStateColor('FL')}
            stroke="#fff"
            strokeWidth="2"
            onMouseEnter={() => setHoveredState('FL')}
            onMouseLeave={() => setHoveredState(null)}
            className="cursor-pointer transition-opacity hover:opacity-80"
          />
          {/* New York */}
          <path
            d="M 760 150 L 800 140 L 820 160 L 810 190 L 780 200 L 750 180 Z"
            fill={getStateColor('NY')}
            stroke="#fff"
            strokeWidth="2"
            onMouseEnter={() => setHoveredState('NY')}
            onMouseLeave={() => setHoveredState(null)}
            className="cursor-pointer transition-opacity hover:opacity-80"
          />
          {/* Pennsylvania */}
          <path
            d="M 720 200 L 770 190 L 780 220 L 760 240 L 720 230 Z"
            fill={getStateColor('PA')}
            stroke="#fff"
            strokeWidth="2"
            onMouseEnter={() => setHoveredState('PA')}
            onMouseLeave={() => setHoveredState(null)}
            className="cursor-pointer transition-opacity hover:opacity-80"
          />
          {/* Maine */}
          <path
            d="M 840 80 L 860 70 L 870 90 L 865 110 L 845 120 L 835 100 Z"
            fill={getStateColor('ME')}
            stroke="#fff"
            strokeWidth="2"
            onMouseEnter={() => setHoveredState('ME')}
            onMouseLeave={() => setHoveredState(null)}
            className="cursor-pointer transition-opacity hover:opacity-80"
          />
          {/* Illinois */}
          <path
            d="M 520 240 L 550 235 L 560 270 L 550 300 L 520 295 L 515 265 Z"
            fill={getStateColor('IL')}
            stroke="#fff"
            strokeWidth="2"
            onMouseEnter={() => setHoveredState('IL')}
            onMouseLeave={() => setHoveredState(null)}
            className="cursor-pointer transition-opacity hover:opacity-80"
          />
          {/* Ohio */}
          <path
            d="M 640 240 L 680 235 L 690 265 L 675 285 L 640 280 Z"
            fill={getStateColor('OH')}
            stroke="#fff"
            strokeWidth="2"
            onMouseEnter={() => setHoveredState('OH')}
            onMouseLeave={() => setHoveredState(null)}
            className="cursor-pointer transition-opacity hover:opacity-80"
          />
        </svg>

        {hoveredState && (
          <div className="absolute top-2 right-2 bg-white rounded-lg shadow-xl p-3 border-2 z-10" style={{ borderColor: getStateColor(hoveredState) }}>
            <div className="font-bold text-gray-900 text-sm">{hoveredState}</div>
            <div className="text-xs" style={{ color: getStateColor(hoveredState) }}>
              {getStateFocus(hoveredState)}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#0071DC' }}></div>
          <span className="text-gray-700">High Priority - Newborn</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#005AA7' }}></div>
          <span className="text-gray-700">High Priority - Adult</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded" style={{ backgroundColor: '#B3D9FF' }}></div>
          <span className="text-gray-700">Standard Coverage</span>
        </div>
      </div>

      <div className="text-center text-gray-600 text-xs mt-2">
        4,700+ Walmart stores nationwide • Full US coverage
      </div>
    </div>
  );
};

const FreeDiapersCalculator = () => {
  const products = [
    { name: 'Term Life', benefit: 100, boxes: 4, months: 1.3, bestValue: false },
    { name: 'Whole Life', benefit: 300, boxes: 13, months: 4.3, bestValue: true },
    { name: 'Final Expense', benefit: 150, boxes: 7, months: 2.3, bestValue: false },
    { name: 'Chronic/LTC', benefit: 50, boxes: 2, months: 0.75, bestValue: false },
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1 flex items-center justify-center gap-2">
          <Gift style={{ color: COLORS.walmart }} size={20} />
          Free Diapers Calculator
        </h3>
        <p className="text-sm text-gray-600">Parent's Choice / Walmart ($22.98/box)</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b-2 border-gray-200 bg-gray-50">
              <th className="text-left py-2 px-3 font-semibold text-gray-800">Insurance Product</th>
              <th className="text-center py-2 px-3 font-semibold text-gray-800">Partner Benefit</th>
              <th className="text-center py-2 px-3 font-semibold text-gray-800">Free Boxes</th>
              <th className="text-center py-2 px-3 font-semibold text-gray-800">Free Months</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.name}
                className={`border-b border-gray-100 ${product.bestValue ? 'bg-amber-50' : 'hover:bg-gray-50'}`}
              >
                <td className="py-3 px-3 font-bold text-gray-900">{product.name}</td>
                <td className="py-3 px-3 text-center font-semibold text-gray-900">${product.benefit}</td>
                <td className="py-3 px-3 text-center">
                  <span className={`font-bold ${product.bestValue ? 'text-lg' : ''}`} style={{ color: product.bestValue ? COLORS.accent : 'inherit' }}>
                    {product.boxes} boxes
                  </span>
                </td>
                <td className="py-3 px-3 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-semibold text-gray-900">~{product.months} months</span>
                    {product.bestValue && (
                      <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-[10px] font-bold">
                        <Star size={10} fill="currentColor" /> Best Value
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm font-semibold text-gray-800 mb-1">
          "When you protect your family, we protect your diaper budget"
        </p>
        <p className="text-xs text-gray-600">
          Free Parent's Choice Diapers for budget-conscious families
        </p>
      </div>
    </div>
  );
};

const KenLeibowBio = () => (
  <div className="rounded-2xl p-5 text-white" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}>
    <div className="flex flex-col md:flex-row items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-32 h-32 rounded-xl bg-white/20 overflow-hidden shadow-xl">
          <img
            src="/Ken-Leibow-e1643663858314.jpeg"
            alt="Ken Leibow"
            className="w-full h-full object-cover object-top"
          />
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
    {
      id: 'qr-flyer',
      title: 'QR Code Flyer',
      description: 'Parent\'s Choice branding: "Scan to Protect Your Growing Family"',
      placeholder: true,
      content: {
        headline: 'Scan to Protect Your Growing Family',
        subtext: 'Free Parent\'s Choice Diapers with Life Insurance Quote',
        brand: 'Parent\'s Choice'
      }
    },
    {
      id: 'box-ad',
      title: 'Box Advertisement',
      description: 'Parent\'s Choice diaper box with QR code integration',
      placeholder: true,
      content: {
        headline: 'Protect Your Family & Save on Diapers',
        subtext: 'Scan QR Code for Free Boxes',
        brand: 'Parent\'s Choice × Mutual of Omaha'
      }
    },
    {
      id: 'store-display',
      title: 'Walmart Store Display',
      description: 'Value messaging: "Parent\'s Choice + Mutual of Omaha: Protecting Families Together"',
      placeholder: true,
      content: {
        headline: 'Protecting Families Together',
        subtext: 'Affordable Life Insurance + Free Diapers',
        brand: 'Parent\'s Choice × Walmart'
      }
    }
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
      <h3 className="text-base font-bold text-gray-800 mb-4 text-center flex items-center justify-center gap-2">
        <Star style={{ color: COLORS.accent }} size={18} />
        Example Marketing Creative
      </h3>

      <div className="flex justify-center gap-1.5 mb-4 flex-wrap">
        {creatives.map((creative, index) => (
          <button
            key={creative.id}
            onClick={() => setActiveImage(index)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeImage === index ? 'text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            style={activeImage === index ? { background: `linear-gradient(135deg, ${COLORS.walmart}, #005AA7)` } : {}}
          >
            {creative.title}
          </button>
        ))}
      </div>

      <div className="max-w-md mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg border-2" style={{ borderColor: COLORS.walmart }}>
          {/* Placeholder mockup design */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 text-center">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 rounded-lg mb-3" style={{ backgroundColor: COLORS.walmart }}>
                <span className="text-white font-bold text-sm">{creatives[activeImage].content.brand}</span>
              </div>
            </div>

            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {creatives[activeImage].content.headline}
            </h4>

            <p className="text-gray-600 text-sm mb-6">
              {creatives[activeImage].content.subtext}
            </p>

            {/* Mock QR Code */}
            <div className="w-32 h-32 mx-auto bg-white border-4 border-gray-300 rounded-lg flex items-center justify-center mb-4">
              <div className="text-xs text-gray-400 font-mono">QR CODE</div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <Shield size={14} style={{ color: COLORS.moo }} />
              <span>Powered by Mutual of Omaha</span>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-600 text-xs mt-2">{creatives[activeImage].description}</p>
      </div>

      <p className="text-center text-gray-500 text-[10px] mt-3">
        In-store displays • Diaper box packaging • Digital integration
      </p>
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

const WalmartPitchDeck = ({ onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const sections = [
    { id: 'problem', title: 'The Problem', icon: Target, color: COLORS.walmart },
    { id: 'opportunity', title: 'The Opportunity', icon: Heart, color: COLORS.success },
    { id: 'product-options', title: 'Why Partner with Insurance', icon: Shield, color: COLORS.primary },
    { id: 'revenue', title: 'Revenue Potential for Walmart', icon: DollarSign, color: COLORS.accent },
    { id: 'ie-ecosystem', title: 'InsurtechExpress: The Innovation Ecosystem', icon: Zap, color: COLORS.primary },
    { id: 'ie-facts', title: 'IE Quick Facts', icon: Star, color: COLORS.primaryDark },
    { id: 'moo-facts', title: 'Mutual of Omaha: 116 Years of Trust', icon: Shield, color: COLORS.moo },
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
            <button onClick={onLogout} className="ml-2 p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" title="Exit presentation">
              <LogOut size={14} />
            </button>
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
            <div className="rounded-lg px-3 py-1.5 shadow-md" style={{ backgroundColor: COLORS.walmart }}>
              <span className="text-white font-bold text-sm">Walmart</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            Protecting Families.<br/><span style={{ color: COLORS.walmart }}>Increasing Revenue.</span>
          </h1>

          <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto">
            A strategic partnership to offer <strong className="text-gray-900">Family Protection Ecosystem</strong> to <strong style={{ color: COLORS.walmart }}>Parent's Choice shoppers</strong> - new parents and caregivers who trust Walmart for everyday essentials.
          </p>

          <button onClick={toggleDropdown} className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all text-sm" style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark})` }}>
            Explore the Opportunity
            <ChevronDown size={18} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-6">
        <CollapsibleSection id="problem" title="The Problem" icon={Target} defaultOpen={true} color={COLORS.walmart}>
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 mb-4">
            <h3 className="text-2xl font-bold text-center mb-4" style={{ color: COLORS.walmart }}>
              Diapers are low margin and highly competitive.<br/>How do we fix this?
            </h3>
            <p className="text-center text-gray-700 text-sm mb-4">
              Parent's Choice competes in a crowded market with razor-thin margins. Traditional diaper sales alone don't drive significant profit growth.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-red-600 mb-1">~5%</div>
                <div className="text-gray-700 text-xs">Typical Retail Margin</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">High</div>
                <div className="text-gray-700 text-xs">Market Competition</div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-amber-600 mb-1">Limited</div>
                <div className="text-gray-700 text-xs">Revenue Diversification</div>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection id="opportunity" title="The Opportunity" icon={Heart} color={COLORS.success}>
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 mb-4">
            <h3 className="text-xl font-bold text-center mb-4" style={{ color: COLORS.success }}>
              The Insurance Partnership Solution
            </h3>
            <p className="text-center text-gray-700 text-sm mb-6">
              Transform your diaper customers into a high-value revenue stream through a <strong>Family Protection Ecosystem</strong> powered by life insurance partnerships.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl p-4 text-white" style={{ background: `linear-gradient(135deg, ${COLORS.walmart}, #005AA7)` }}>
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign size={20} />
                  <h4 className="font-bold text-sm">New Revenue Stream</h4>
                </div>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-300 mt-0.5" />$7.5M annual referral fees</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-300 mt-0.5" />$4.5M guaranteed diaper sales</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-300 mt-0.5" />Zero insurance licensing required</li>
                </ul>
              </div>
              <div className="rounded-xl p-4 text-white" style={{ background: `linear-gradient(135deg, ${COLORS.success}, #059669)` }}>
                <div className="flex items-center gap-2 mb-3">
                  <Heart size={20} />
                  <h4 className="font-bold text-sm">Customer Value</h4>
                </div>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-300 mt-0.5" />Free diapers with insurance quotes</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-300 mt-0.5" />Life event triggers (newborns, elderly care)</li>
                  <li className="flex items-start gap-2"><CheckCircle size={14} className="text-green-300 mt-0.5" />Affordable family protection</li>
                </ul>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection id="product-options" title="Why Partner with Insurance - Product Options" icon={Shield} color={COLORS.primary}>
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 mb-4">
            <p className="text-center text-gray-700 text-sm mb-4">
              Multiple insurance products aligned with <strong>life event triggers</strong> - reaching new parents and caregivers at critical decision moments.
            </p>
            <ProductOptionsTable />
          </div>
          <FreeDiapersCalculator />
        </CollapsibleSection>

        <CollapsibleSection id="revenue" title="Revenue Potential for Walmart" icon={DollarSign} color={COLORS.accent}>
          <div className="mb-4">
            <p className="text-center text-gray-700 text-sm mb-4">
              Simple flat-fee referral model. No commission complexity. No insurance licensing required.
            </p>
            <RevenueCalculator />
          </div>
        </CollapsibleSection>

        <CollapsibleSection id="ie-ecosystem" title="InsurtechExpress: The Innovation Ecosystem" icon={Zap} color={COLORS.primary}>
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


        <CollapsibleSection id="next-steps" title="Next Steps" icon={ArrowRight} color={COLORS.navy}>
          <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-center mb-4" style={{ color: COLORS.navy }}>
              Contact Nichole Gaines, CRO
            </h3>

            <div className="text-center mb-6">
              <a href="mailto:nichole@insurtechexpress.com" className="inline-flex items-center gap-2 text-2xl font-bold hover:underline" style={{ color: COLORS.primary }}>
                nichole@insurtechexpress.com
              </a>
            </div>

            <div className="max-w-2xl mx-auto">
              <h4 className="font-bold text-gray-800 text-sm mb-3 text-center">Let's Discuss:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={16} style={{ color: COLORS.walmart }} />
                    <span className="font-semibold text-gray-900 text-xs">Partnership Structure</span>
                  </div>
                  <p className="text-gray-600 text-xs">Revenue sharing, implementation timeline, and pilot program details</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={16} style={{ color: COLORS.walmart }} />
                    <span className="font-semibold text-gray-900 text-xs">Marketing Integration</span>
                  </div>
                  <p className="text-gray-600 text-xs">QR codes on boxes, digital assets, and in-store displays</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={16} style={{ color: COLORS.walmart }} />
                    <span className="font-semibold text-gray-900 text-xs">Customer Experience</span>
                  </div>
                  <p className="text-gray-600 text-xs">Free diaper redemption process and enrollment journey</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={16} style={{ color: COLORS.walmart }} />
                    <span className="font-semibold text-gray-900 text-xs">Success Metrics</span>
                  </div>
                  <p className="text-gray-600 text-xs">KPIs, reporting cadence, and performance tracking</p>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href="mailto:nichole@insurtechexpress.com"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all text-sm"
                style={{ background: `linear-gradient(135deg, ${COLORS.walmart}, #005AA7)` }}
              >
                Schedule a Call <ArrowRight size={18} />
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
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('walmart_access') === 'granted';
  });

  const handleLogout = () => {
    localStorage.removeItem('walmart_access');
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginGate onSuccess={() => setIsAuthenticated(true)} />;
  }

  return <WalmartPitchDeck onLogout={handleLogout} />;
}
