
import React, { useState } from 'react';

const CityCTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-indigo-700 relative overflow-hidden">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-violet-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-indigo-300 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block bg-white/20 backdrop-blur-md text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-white/20">
          Limited Beta Release
        </span>
        <h2 className="text-4xl sm:text-6xl font-black text-white mb-8 tracking-tighter">
          Kochi, get ready.
        </h2>
        <p className="text-indigo-50 text-xl sm:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Be the first to know when we launch in Kochi. Rent unique gear or start your own micro-rental business.
        </p>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="flex-grow px-7 py-5 rounded-2xl text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-white/30 transition shadow-2xl placeholder:text-slate-400"
            />
            <button 
              type="submit"
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black hover:bg-slate-800 transition shadow-2xl hover:scale-105 active:scale-95 duration-200"
            >
              Get Early Access
            </button>
          </form>
        ) : (
          <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] text-white border border-white/20 animate-in zoom-in-95 duration-500">
            <h3 className="text-3xl font-black mb-3">You're on the list! 🎉</h3>
            <p className="text-lg font-medium opacity-90">We'll send you an invitation as soon as MyRentals launches in Kochi.</p>
          </div>
        )}
        
        <p className="mt-10 text-indigo-100/50 text-sm font-semibold uppercase tracking-widest">
        </p>
      </div>
    </section>
  );
};

export default CityCTA;
