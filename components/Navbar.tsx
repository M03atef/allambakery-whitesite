import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-extrabold text-amber-600 tracking-tight">
              Allam <span className="text-stone-800">Bakery</span>
            </h1>
          </div>
          <div className="hidden md:flex space-x-8 space-x-reverse">
            <a href="#" className="text-stone-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">الرئيسية</a>
            <a href="#products" className="text-stone-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">المنتجات</a>
            <a href="#branches" className="text-stone-600 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors">الفروع</a>
          </div>
          <div className="flex items-center">
            <button className="relative p-2 text-stone-600 hover:text-amber-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
