import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import axios from "axios";

const Products = ({ limit }) => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [singleUser, setSingleUser] = useState(null);

    useEffect(() => {
        const fetchproducts = async () => {
            try {
                if (id) {
                    const response = await axios.get(`https://dummyjson.com/products/${id}`);
                    setSingleUser(response.data);
                } else {
                    const response = await axios.get("https://dummyjson.com/products");
                    setProducts(response.data.products || []);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchproducts();
    }, [id]);

    const dispatch = useDispatch();

    // --- 1. SINGLE PRODUCT VIEW (SHOWS FULL DETAILS WHEN CLICKED) ---
    if (id) {
        return (
            <div className="p-6 max-w-xl mx-auto">
                
                <Link to="/products" className="text-blue-600 hover:underline mb-6 inline-block font-medium">
                    &larr; Back to Products List
                </Link>

                {singleUser && (
                    <>
                        {/* --- MAIN PRODUCT CARD (Yellow Container) --- */}
                        <div className="bg-amber-200 p-6 rounded-3xl shadow-sm flex flex-col gap-4">

                            {/* Image Container */}
                            <div className="w-full h-64 bg-white rounded-2xl overflow-hidden flex items-center justify-center">
                                <img
                                    src={singleUser.thumbnail}
                                    alt={singleUser.title}
                                    className="w-full h-full object-contain p-4"
                                />
                            </div>

                            {/* Text Details */}
                            <div>
                                <span className="text-xs uppercase tracking-wider font-bold text-amber-800 bg-amber-300/50 px-2.5 py-1 rounded-full">
                                    {singleUser.brand || "Generic"}
                                </span>
                                <h1 className="text-2xl font-bold text-gray-900 mt-2">{singleUser.title}</h1>
                                <p className="text-xs text-gray-700 font-semibold uppercase tracking-wide mt-1">
                                    Category: {singleUser.category}
                                </p>
                                <p className="text-sm text-gray-800 mt-3 bg-white/40 p-3 rounded-xl leading-relaxed">
                                    {singleUser.description}
                                </p>
                            </div>

                            {/* Pricing & Stock */}
                            <div className="bg-white/70 p-4 rounded-2xl flex justify-between items-center shadow-sm">
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-black text-gray-900">${singleUser.price}</span>
                                        <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                                            {singleUser.discountPercentage}% OFF
                                        </span>
                                    </div>
                                    <p className="text-xs font-semibold text-gray-600 mt-1">
                                        Rating: {singleUser.rating} ⭐
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${singleUser.stock > 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                                        {singleUser.availabilityStatus || (singleUser.stock > 0 ? "In Stock" : "Out of Stock")}
                                    </span>
                                    <p className="text-xs text-gray-600 mt-1.5 font-medium">
                                        Only {singleUser.stock} left!
                                    </p>
                                </div>
                            </div>

                            {/* Specifications */}
                            <div className="bg-white/40 p-4 rounded-2xl space-y-2.5 text-sm">
                                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">Specifications</h2>

                                <div className="flex justify-between border-b border-amber-300/30 pb-1.5">
                                    <span className="text-gray-600 font-medium">Weight:</span>
                                    <span className="text-gray-900 font-semibold">{singleUser.weight}g</span>
                                </div>

                                {singleUser.dimensions && (
                                    <div className="flex justify-between border-b border-amber-300/30 pb-1.5">
                                        <span className="text-gray-600 font-medium">Dimensions (W×H×D):</span>
                                        <span className="text-gray-900 font-semibold">
                                            {singleUser.dimensions.width} x {singleUser.dimensions.height} x {singleUser.dimensions.depth} cm
                                        </span>
                                    </div>
                                )}

                                <div className="flex justify-between border-b border-amber-300/30 pb-1.5">
                                    <span className="text-gray-600 font-medium">Warranty:</span>
                                    <span className="text-gray-900 font-semibold text-right">{singleUser.warrantyInformation || "N/A"}</span>
                                </div>

                                <div className="flex justify-between pb-0.5">
                                    <span className="text-gray-600 font-medium">Shipping:</span>
                                    <span className="text-gray-900 font-semibold text-right">{singleUser.shippingInformation || "Standard Shipping"}</span>
                                </div>
                            </div>

                        </div>

                        {/* --- CUSTOMER REVIEWS --- */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <h3 className="text-md font-bold uppercase text-gray-800 tracking-wider mb-4 px-1">
                                Customer Reviews
                            </h3>

                            <div className="space-y-4">
                                {singleUser.reviews?.map((review, index) => (
                                    <div key={index} className="bg-gray-50 border border-gray-100 p-4 rounded-2xl text-sm shadow-sm">
                                        <div className="flex flex-col">
                                            <p className="font-bold text-gray-900 text-base">{review.reviewerName}</p>
                                            <p className="font-bold text-gray-500 text-xs">{review.reviewerEmail}</p>
                                            <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 mt-1 rounded-lg w-max flex items-center gap-1">
                                                {review.rating} ⭐
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mt-2 text-sm italic">"{review.comment}"</p>
                                        <p className="text-gray-400 mt-1 text-xs">{review.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }

    const displayedProducts = limit ? products.slice(0, limit) : products;

    // --- 2. GRID PRODUCTS LIST VIEW (MINIMAL - NO DESCRIPTION, WITH ADD TO CART & OFFER TAG) ---
    return (
        <div>
            <div className="flex justify-between items-center mb-4 px-4">
                <h1 className="text-xl font-bold text-gray-800">Products</h1>
                {limit && (
                    <Link to="/products" className="text-blue-600 font-bold hover:underline text-sm">
                        Show all
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
                {displayedProducts.map((product) => {
                    return (
                        <div key={product.id} className="bg-amber-200 p-4 rounded-3xl h-full flex flex-col justify-between hover:shadow-md transition-shadow">

                            {/* Wrap card top layout inside a Link to handle page directory navigation clicks */}
                            <Link to={`/products/${product.id}`} className="block no-underline text-black group mb-4">
                                {/* White framed image containing the top right discount banner */}
                                <div className="w-full h-48 bg-white rounded-2xl overflow-hidden flex items-center justify-center mb-4 relative">

                                    {/* Small offer layout tag placed at top right */}
                                    <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10 shadow-sm">
                                        -{Math.round(product.discountPercentage)}%
                                    </div>

                                    <img
                                        src={product.thumbnail}
                                        alt={product.title}
                                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-200"
                                    />
                                </div>
                                <h1 className="text-lg font-bold text-gray-900">{product.brand || "Generic"}</h1>
                                <p className="text-sm text-gray-800 font-medium break-all mt-1">
                                    {product.title}
                                </p>
                            </Link>

                            <button onClick={() => dispatch(addToCart(product))} className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold py-2.5 px-4 rounded-xl tracking-wide transition-colors cursor-pointer">
                                Add to Cart
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Products