import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-100">
      <div className="aspect-square overflow-hidden bg-stone-50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-stone-800">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-extrabold text-amber-600">{product.price} ج.م</span>
          <button className="bg-stone-800 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-600 transition-colors duration-300 active:scale-95">
            أضف للسلة
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
