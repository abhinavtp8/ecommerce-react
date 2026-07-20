import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQuantity, increaseQuantity ,deleteItem} from '../features/cart/cartSlice'
// import {
//     increaseQuantity,
//     decreaseQuantity,
//     deleteItem
// } from "../features/cart/cartSlice";

const Cart = () => {

    const { products } = useSelector((state) => state.cart)

    console.log(products);

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }

    return (
        <div className=' p-10 pt-36'>
            <h1 className=' text-3xl font-bold'>Your Cart</h1>

            {
                products.length === 0 ? <div className='text-center p-1 pt-36'>
                    <h1 className='text-red-300'>
                        Your cart is empty
                    </h1>
                </div> : <div>
                    {
                        products.map((item) => {
                            return (
                                <div key={item.id} className=' bg-amber-100 p-5'>
                                    <div>
                                        <img src={item.product.thumbnail} alt="product image" />
                                        <h1 className=' text-xl font-bold'>{item.product.title}</h1>
                                    </div>
                                    <div className=' flex flex-col gap-3 justify-center'>
                                        <p className='font-bold text-3xl'>Price: ${item.product.price}</p>
                                        <p>Quantity: <span className=' flex gap-2 items-center'>
                                            <button onClick={() => dispatch(decreaseQuantity(item.id))} className=' bg-gray-400 rounded-xl px-3 py-1'>-</button>
                                            {item.quantity}
                                            <button onClick={() => dispatch(increaseQuantity(item.id))} className=' bg-gray-400 rounded-xl px-3 py-1'>+</button>
                                        </span></p>
                                    </div>
                                    <button onClick={() => handleDelete(item.id)} size={50} color='red'>dlt</button>
                                </div>
                            )
                        })
                    }
                </div>
            }

        </div>
    )
}

export default Cart