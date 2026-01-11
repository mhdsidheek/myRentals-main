
import React from 'react';

const categories = [
  { name: 'Bikes', icon: '🚲', items: '450+ available', color: 'bg-orange-50 dark:bg-orange-950/20', borderColor: 'group-hover:border-orange-200 dark:group-hover:border-orange-800' },
  { name: 'Home Durables', icon: '🛋️', items: '120+ available', color: 'bg-blue-50 dark:bg-blue-950/20', borderColor: 'group-hover:border-blue-200 dark:group-hover:border-blue-800' },
  { name: 'E-Mobility', icon: '⚡', items: '85+ available', color: 'bg-indigo-50 dark:bg-indigo-950/20', borderColor: 'group-hover:border-indigo-200 dark:group-hover:border-indigo-800' },
  { name: 'Camping', icon: '⛺', items: '310+ available', color: 'bg-yellow-50 dark:bg-yellow-950/20', borderColor: 'group-hover:border-yellow-200 dark:group-hover:border-yellow-800' },
  { name: 'Tools', icon: '🔨', items: '210+ available', color: 'bg-purple-50 dark:bg-purple-950/20', borderColor: 'group-hover:border-purple-200 dark:group-hover:border-purple-800' },
  { name: 'Photography', icon: '📷', items: '60+ available', color: 'bg-pink-50 dark:bg-pink-950/20', borderColor: 'group-hover:border-pink-200 dark:group-hover:border-pink-800' },
];

const Categories: React.FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors">Explore Categories</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className={`${cat.color} p-8 rounded-3xl border border-transparent ${cat.borderColor} hover:shadow-xl hover:shadow-indigo-900/5 dark:hover:shadow-black/40 hover:-translate-y-1 transition duration-300 cursor-pointer group text-center`}>
              <span className="text-4xl block mb-4 group-hover:scale-125 transition duration-500 ease-out">{cat.icon}</span>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1 transition-colors">{cat.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold transition-colors">{cat.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
