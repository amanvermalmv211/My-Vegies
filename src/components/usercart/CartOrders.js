import { useContext, useEffect } from 'react';
import cartContext from '../../context/cart/cartContext';
import CartItems from './CartItems';
import Products from '../products/Products';
import dailyUse, { fruits, greenVegetables, leafyVegetables } from '../products/ListofProducts';

const CartOrders = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    let allProducts = dailyUse.concat(greenVegetables).concat(fruits).concat(leafyVegetables);
    // let allProducts = 

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
                                            allProducts.map((items, idx) => (
                                                <CartItems keys={idx} items={items} />
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
                <Products title="Fruits" data={fruits}/>
                <Products title="Green Vegitables" data={greenVegetables}/>

            </div>
        </>
    )
}

export default CartOrders;