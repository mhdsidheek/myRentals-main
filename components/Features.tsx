
import React from 'react';

const features = [
  {
    title: "40% Cheaper than Retail",
    text: "Peer-to-peer pricing means lower overheads. Get premium gear for less than store rates.",
    color: "bg-emerald-500",
    icon: "💰"
  },
  {
    title: "Zero-Waste Lifestyle",
    text: "Sharing idle resources reduces manufacturing demand. It's the greenest way to ride.",
    color: "bg-blue-500",
    icon: "🌍"
  },
  {
    title: "Side-Income for Owners",
    text: "Turn your unused bike or tools into a monthly revenue stream. We handle the insurance.",
    color: "bg-orange-500",
    icon: "📈"
  },
  {
    title: "Community Backed",
    text: "Our platform is local. You're renting from the person down the street, not a corporation.",
    color: "bg-purple-500",
    icon: "🤝"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight transition-colors">
            Why choose Peer-to-Peer?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
            Traditional rentals are expensive and corporate. MyRentals is local, affordable, and sustainable.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
