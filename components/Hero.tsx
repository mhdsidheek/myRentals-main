
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-violet-100 dark:bg-violet-900/20 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-12 lg:mb-0 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-indigo-100 dark:border-indigo-900/50">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
              </span>
              <span>1,200+ items available in Kochi</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6 transition-colors">
              Your neighborhood is your <span className="text-indigo-600 dark:text-indigo-400">new garage.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-colors">
              Don't buy it for a one-time use. Rent motorcycles, camping gear, and power tools directly from your neighbors for a fraction of the cost.
            </p>

            {/* Mock Search Bar */}
            <div className="max-w-xl mx-auto lg:mx-0 bg-white dark:bg-slate-900 p-2 rounded-2xl shadow-2xl shadow-indigo-900/10 dark:shadow-black/40 flex flex-col sm:flex-row gap-2 border border-slate-100 dark:border-slate-800 transition-colors">
              <div className="flex-1 flex items-center px-4 py-3 border-b sm:border-b-0 sm:border-r border-slate-100 dark:border-slate-800">
                <svg className="w-5 h-5 text-indigo-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Try 'Hunter 350' or 'Camping Tent'" 
                  className="w-full bg-transparent focus:outline-none text-slate-900 dark:text-white placeholder-slate-400 font-medium"
                />
              </div>
              <button className="bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200 dark:shadow-none">
                Find Gear
              </button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <div className="flex items-center">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mr-2">
                  <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </div>
                Verified Locals
              </div>
              <div className="flex items-center">
                <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded-full mr-2">
                  <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                </div>
                Secure UPI Payments
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?auto=format&fit=crop&q=80&w=600" 
                  alt="Classic Motorcycle" 
                  className="rounded-3xl shadow-xl w-full h-64 object-cover border border-slate-200 dark:border-slate-800"
                />
                <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl shadow-2xl shadow-indigo-900/5 dark:shadow-black/20 border border-slate-100 dark:border-slate-800">
                   <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2 py-1 rounded-md tracking-wider transition-colors">AVAILABLE</span>
                      <span className="text-sm font-extrabold text-slate-900 dark:text-white transition-colors">₹999/day</span>
                   </div>
                   <p className="text-slate-900 dark:text-white font-bold transition-colors">RE Hunter 350 Metro</p>
                   <p className="text-xs text-slate-500 dark:text-slate-400 font-medium transition-colors">Panampilly Nagar, 1.2 km away</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-slate-900 dark:bg-slate-800 p-6 rounded-3xl shadow-2xl text-white relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/20 blur-2xl group-hover:bg-indigo-500/40 transition"></div>
                   <p className="text-xs text-slate-400 font-medium mb-1">Total Earnings</p>
                   <p className="text-3xl font-extrabold text-indigo-400 tracking-tight">₹18,250</p>
                   <p className="text-[10px] mt-2 opacity-60 font-semibold uppercase tracking-widest">Shared this month</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=600" 
                  alt="Camping Tent" 
                  className="rounded-3xl shadow-xl w-full h-64 object-cover border border-slate-200 dark:border-slate-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
