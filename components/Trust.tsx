
import React from 'react';

const Trust: React.FC = () => {
  return (
    <section id="trust" className="py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Decorative blurs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-violet-50 dark:bg-violet-900/10 rounded-full blur-2xl opacity-40"></div>
            
            <div className="bg-slate-900 dark:bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-10 text-white relative z-10 shadow-2xl border border-white/5">
              <div className="flex items-center space-x-1 mb-8 text-indigo-400">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-2xl font-medium italic mb-10 leading-relaxed text-slate-100">
                "I listed my Royal Enfield that was gathering dust, and it's already paid for itself twice over. MyRentals made the verification process easy and secure!"
              </p>
              <div className="flex items-center">
                <img src="https://picsum.photos/seed/user-test/100/100" alt="Deepa Varma" className="w-14 h-14 rounded-full border-2 border-indigo-500 mr-5" />
                <div>
                  <p className="font-bold text-lg">Deepa Varma</p>
                  <p className="text-slate-400 font-medium italic">Verified Owner in Edappally, Kochi</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-indigo-50/80 dark:bg-indigo-950/20 backdrop-blur-sm p-8 rounded-3xl text-center border border-indigo-100 dark:border-indigo-900/50 transition-colors">
                <p className="text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-1">99.8%</p>
                <p className="text-sm text-indigo-900 dark:text-indigo-200 font-bold uppercase tracking-wider">Safe Neighborhoods</p>
              </div>
              <div className="bg-violet-50/80 dark:bg-violet-950/20 backdrop-blur-sm p-8 rounded-3xl text-center border border-violet-100 dark:border-violet-900/50 transition-colors">
                <p className="text-4xl font-black text-violet-600 dark:text-violet-400 mb-1">1.5 km</p>
                <p className="text-sm text-violet-900 dark:text-violet-200 font-bold uppercase tracking-wider">Avg. Proximity</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight transition-colors">Trust built on <span className="text-indigo-600 dark:text-indigo-400">neighborhood</span> safety.</h2>
            <ul className="space-y-8">
              <li className="flex items-start">
                <div className="bg-indigo-600 p-1.5 rounded-lg mr-5 mt-1 shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-slate-900 dark:text-white transition-colors">Hyper-local Verification</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed transition-colors">Rent from verified neighbors within walking distance. Seeing a familiar face makes every transaction safer and more reliable.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-600 p-1.5 rounded-lg mr-5 mt-1 shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-slate-900 dark:text-white transition-colors">Smart ID Checks</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed transition-colors">We verify every member using government-issued identification, ensuring only trusted locals can list or rent.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
