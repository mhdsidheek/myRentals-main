
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 py-20 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                </svg>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter">MyRentals</span>
            </div>
            <p className="text-base leading-relaxed mb-8 font-medium text-slate-400">
              The neighborhood-first marketplace for renting anything on wheels and beyond. Building a sustainable future in India, one rental at a time.
            </p>
            <div className="flex space-x-5">
              <span className="hover:text-indigo-400 transition transform hover:-translate-y-1 cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </span>
              <span className="hover:text-indigo-400 transition transform hover:-translate-y-1 cursor-pointer">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em]">Platform</h4>
            <ul className="space-y-4 font-semibold">
              <li><span className="hover:text-indigo-400 transition cursor-pointer">Find a Ride</span></li>
              <li><span className="hover:text-indigo-400 transition cursor-pointer">List Your Gear</span></li>
              <li><span className="hover:text-indigo-400 transition cursor-pointer">Safety Center</span></li>
              <li><span className="hover:text-indigo-400 transition cursor-pointer">Community</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em]">Company</h4>
            <ul className="space-y-4 font-semibold">
              <li><span className="hover:text-indigo-400 transition cursor-pointer">Our Story</span></li>
              <li><span className="hover:text-indigo-400 transition cursor-pointer">Careers</span></li>
              <li><span className="hover:text-indigo-400 transition cursor-pointer">Contact</span></li>
              <li><span className="hover:text-indigo-400 transition cursor-pointer">Privacy</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black mb-8 uppercase text-xs tracking-[0.2em]">Support</h4>
            <ul className="space-y-4 font-semibold">
              <li><span className="hover:text-indigo-400 transition cursor-pointer">Help Center</span></li>
              <li><span className="hover:text-indigo-400 transition cursor-pointer">Trust & Safety</span></li>
              <li><span className="hover:text-indigo-400 transition cursor-pointer">Terms</span></li>
              <li><span className="hover:text-indigo-400 transition cursor-pointer">Insurance</span></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm font-bold uppercase tracking-widest text-slate-500 transition-colors duration-300">
          <p>© 2024 MyRentals India. All rights reserved.</p>
          <div className="mt-6 md:mt-0 flex space-x-8">
            <span className="flex items-center text-indigo-400">
              <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full mr-3 shadow-lg shadow-indigo-500/50"></span>
              All Systems Go
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
