import React from 'react';
import { addToCart } from '../features/cart/cartSlice';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between border border-gray-100 p-4">
      {/* Product Image Container */}
      <div className="w-full h-48 flex justify-center items-center bg-gray-50 rounded-xl overflow-hidden mb-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>


      <div className="flex flex-col flex-1">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
          {product.category}
        </span>
        <h2 className="text-md font-bold text-gray-800 line-clamp-1 mb-1">
          {product.title}
        </h2>
        <p className="text-xs text-gray-500 line-clamp-2 mb-3">
          {product.description}
        </p>
      </div>


      <div className="mt-auto">
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-black text-gray-900">
            ${product?.price}
          </span>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-lg">
            <span className="text-amber-500 text-xs">⭐</span>
            <span className="text-xs font-bold text-amber-700">{product?.rating}</span>
          </div>
        </div>

        <button onClick={() => dispatch(addToCart(product))} className="w-full bg-slate-900 text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-600 transition-colors duration-200 shadow-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard