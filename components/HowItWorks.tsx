
import React from 'react';

const steps = [
  {
    title: "Verify & Connect",
    description: "Create your profile and verify your identity. Trust is the backbone of our neighbor-to-neighbor community.",
    icon: (
      <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.312-2.841.873-4.083" />
      </svg>
    )
  },
  {
    title: "Rent or List Locally",
    description: "Search for items within walking distance. Owners list idle gear; Renters get it cheaper than at any retail store.",
    icon: (
      <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: "Exchange & Enjoy",
    description: "Meet a neighbor, grab your gear, and go. Return it after your adventure. It's sustainable and simple.",
    icon: (
      <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight transition-colors">Simple, P2P Sharing</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed transition-colors">Skip the rental shop queues. MyRentals is built by real people, for real adventures.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group text-center">
              <div className="mb-8 relative flex justify-center">
                <div className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/20 rounded-full scale-0 group-hover:scale-110 transition duration-500 -z-10"></div>
                <div className="bg-white dark:bg-slate-900 w-24 h-24 rounded-full shadow-lg flex items-center justify-center border border-slate-100 dark:border-slate-800 group-hover:shadow-indigo-100/50 dark:group-hover:shadow-indigo-900/50 transition duration-300">
                  {step.icon}
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-[calc(100%+2rem)] w-1/2 h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium transition-colors">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
