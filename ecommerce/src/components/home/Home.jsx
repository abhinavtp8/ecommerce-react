import React from 'react'
import Products from '../../pages/Products'
// import Products from '../components/Products'

const Home = () => {
    return (
        <div className='w-full'>
            {/* Hero Section - Supermarket/DayMart Theme */}
            <section className='w-full bg-linear-to-r from-teal-700 to-teal-900 text-white py-20 px-10 flex flex-col md:flex-row items-center justify-between gap-10 '>
                <div className='max-w-xl space-y-6'>
                    <h1 className='text-5xl md:text-6xl font-black leading-tight'>
                        Everything You Need, <br /> All In One Place
                    </h1>
                    <p className='text-teal-100 text-base'>
                        Shop fresh groceries, daily essentials, household items, and much more at the best prices. High-quality products delivered straight to your doorstep.
                    </p>
                    <button className='bg-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105'>
                        Shop Now
                    </button>
                </div>

                {/* Image Placeholder Frame - Beautiful Grocery Basket */}
                <div className='w-80 h-80 md:w-100 md:h-100 rounded-full border-8 border-orange-400 overflow-hidden shadow-2xl'>
                    <img
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600"
                        alt="Fresh Groceries and Essentials"
                        className='w-full h-full object-cover'
                    />
                </div>
            </section>

            {/* Available Products Section */}
            <section id="products" className='max-w-7xl mx-auto px-6 py-16 space-y-4'>
                <div className='text-center space-y-2 mb-10'>
                    <h2 className='text-3xl font-extrabold text-gray-900'>Our Featured Products</h2>
                    <p className='text-gray-500 text-sm max-w-md mx-auto'>
                        Explore our wide range of supermarket essentials, handpicked to ensure top quality for your daily needs.
                    </p>
                </div>

                {/* Your Main Products Component */}
                
                <Products limit={4} />
            </section>
        </div>
    )
}

export default Home