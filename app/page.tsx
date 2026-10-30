import React from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';

const products = [
  { id: 1, name: 'كرواسون بالزبدة', price: 25, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80' },
  { id: 2, name: 'فينو بالسمسم', price: 5, image: 'https://images.unsplash.com/photo-1568254183919-78a4f43f28b8?auto=format&fit=crop&w=500&q=80' },
  { id: 3, name: 'كيك الشوكولاتة', price: 150, image: 'https://images.unsplash.com/photo-1606313560242-bd7c4faac2e8?auto=format&fit=crop&w=500&q=80' },
  { id: 4, name: 'خبز فينو فرنسي', price: 10, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80' },
  { id: 5, name: 'بيتي فور', price: 60, image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=500&q=80' },
  { id: 6, name: 'دونات محشي', price: 20, image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=80' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <div className="bg-amber-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-4">
            طازج يومياً من فرن <span className="text-amber-600">علام</span>
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            تشكيلة واسعة من المخبوزات والحلويات الطازجة، مفعمة بالنكهة الأصيلة. اطلب الآن ووصلك لحد باب البيت.
          </p>
        </div>
      </div>
      <div id="products" className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8 border-b border-stone-200 pb-4">
          <h2 className="text-3xl font-bold text-stone-800">منتجاتنا</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-stone-800 text-white rounded-lg text-sm">الكل</button>
            <button className="px-4 py-2 bg-white text-stone-600 rounded-lg text-sm border hover:bg-stone-100">مخبوزات</button>
            <button className="px-4 py-2 bg-white text-stone-600 rounded-lg text-sm border hover:bg-stone-100">حلويات</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
