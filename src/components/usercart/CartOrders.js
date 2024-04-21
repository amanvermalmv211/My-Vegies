import React, { useContext, useEffect } from 'react';
import cartContext from '../../context/cart/cartContext';
import CartItems from './CartItems';
import Products from '../products/Products';

const CartOrders = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let allProducts = [
        { _id: "100", name: "Potato", price: "30", dprice: "18", capicity: "1kg", imglink: "https://www.seekpng.com/png/detail/423-4230435_potato-hd-png-potato-vegetables.png" },
        { _id: "1", name: "Onion", price: "60", dprice: "40", capicity: "1kg", imglink: "https://freepngimg.com/save/144-red-onion-png-image/3191x1675" },
        { _id: "2", name: "Cabbage", price: "30", dprice: "23", capicity: "1kg", imglink: "https://i.pinimg.com/736x/7f/68/5f/7f685f54733d5309c1c3918ffa8b824e.jpg" },
        { _id: "3", name: "Cauliflower", price: "30", dprice: "28", capicity: "1kg", imglink: "https://pngimg.com/d/cauliflower_PNG12679.png" },
        { _id: "4", name: "Green Chilli", price: "0", dprice: "36", capicity: "250g", imglink: "https://i.pinimg.com/originals/3c/42/5a/3c425a418d2c6b4670ee7d47c799a80d.png" },
        { _id: "5", name: "Tomato", price: "40", dprice: "29", capicity: "500g", imglink: "https://purepng.com/public/uploads/large/purepng.com-tomatovegetables-tomato-941524712357ikhy3.png" },
        { _id: "6", name: "Ginger", price: "80", dprice: "70", capicity: "250g", imglink: "https://pngimg.com/d/ginger_PNG16797.png" },
        { _id: "7", name: "Garlic", price: "60", dprice: "43", capicity: "250g", imglink: "https://static.vecteezy.com/system/resources/previews/027/214/959/original/garlic-garlic-garlic-transparent-background-ai-generated-free-png.png" },
        { _id: "8", name: "Brinjal", price: "30", dprice: "25", capicity: "1kg", imglink: "https://freepngimg.com/save/13029-eggplant-free-download-png/346x347" }
    ];

    const context = useContext(cartContext);
    const { cartOrder, clearCart } = context;

    return (
        <>
            <div className='h-auto text-gray-700 mb-10'>
                <div className='text-3xl font-semibold px-4 md:pl-28 py-4'>
                    Your Shopping Cart
                </div>

                {
                    Object.keys(cartOrder).length <= 0 ?
                        <div className='flex items-center justify-center my-5 flex-col space-y-4'>
                            <div className='flex items-center justify-center flex-col relative'>
                                <i className="fa fa-cart-plus fa-5x scale-125 text-gray-500 " aria-hidden="true"></i>
                                <div className='border-b border-gray-500 w-60 my-3'></div>
                                <div className='border-b border-gray-500 w-8 my-3 absolute top-5 -left-4'></div>
                                <div className='border-b border-gray-500 w-12 my-3 absolute top-0 left-0'></div>
                                <div className='border-b border-gray-500 w-8 my-3 absolute top-0 right-4'></div>
                                <div className='border-b border-gray-500 w-16 my-3 absolute top-5 -right-4'></div>
                            </div>

                            <div className='flex flex-col space-y-4'>
                                <div className='font-semibold text-xl'>
                                    Your Cart is Empty
                                </div>
                            </div>
                        </div> :
                        <>
                            <div className='w-full lg:w-[92%] px-2 my-4 mb-8 mx-auto'>
                                <div className='flex items-end justify-between font-bold md:text-4xl text-3xl text-green-700'>
                                    <div>Cart Items</div>
                                </div>

                                <div className="py-6 sm:py-8 lg:py-12 text-white">
                                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:mb-8 md:grid-cols-4 lg:grid-cols-5 px-4 lg:px-0">

                                        {
                                            allProducts.map((items) => (
                                                <CartItems keys={items} items={items} />
                                            ))
                                        }

                                    </div>

                                </div>

                            </div>

                            <div className='flex flex-col items-center justify-center space-y-4'>
                                <div className="bg-green-600 w-60 flex items-center justify-center p-2 text-white rounded-lg text-lg hover:bg-green-700 lg:cursor-pointer" onClick={()=>{clearCart()}}>Clear Cart</div>
                                <div className="bg-green-600 w-60 flex items-center justify-center p-2 text-white rounded-lg text-lg hover:bg-green-700 lg:cursor-pointer">Proceed to Buy {Object.keys(cartOrder).length} Items</div>
                            </div>

                        </>

                }
                <Products title="Daily Use" />

            </div>
        </>
    )
}

export default CartOrders;