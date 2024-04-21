import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import cartContext from '../../context/cart/cartContext';

const Details = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { state } = useLocation();

    const context = useContext(cartContext);
    const { cartOrder, toggleCartOrder } = context;

    let calcDisc = ((state.price - state.dprice) / state.price) * 100

    let [itemcount, setItemcount] = useState(0);

    const increment = () => {
        if (itemcount === null) {
            itemcount = 1;
        }
        else {
            itemcount++;
        }
        setItemcount(itemcount);
        toggleCartOrder({ _id: state._id, quantity: itemcount });
    }

    const decrement = () => {
        if (itemcount === 1) {
            itemcount = 0;
        }
        else {
            itemcount--;
        }
        setItemcount(itemcount);
        toggleCartOrder({ _id: state._id, quantity: itemcount });
    }

    useEffect(() => {
        // eslint-disable-next-line
        Object.keys(cartOrder).map((cartItems) => {
            if (state._id === cartItems) {
                setItemcount(cartOrder[cartItems].quantity);
            }
        });

        // eslint-disable-next-line
    }, [Object.keys(cartOrder).length]);

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap relative">
                    <span className={`absolute top-1.5 left-0 p-0.5 pl-1 pr-3 rounded-r-full bg-green-700 z-20 ${state.price === "0" ? "hidden" : "block"} text-white`}>{calcDisc.toFixed(0)}% off</span>
                    <img alt="ecommerce" className="lg:w-1/3 w-full h-40 lg:h-56 object-contain object-center rounded mix-blend-darken" src={state.imglink} />
                    <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{state.name}</h1>

                        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>

                        <div className="flex">
                            <div className='flex items-center justify-center space-x-1'>
                                <div className={`text-red-500 line-through text-[0.8rem] ${state.price === "0" ? "hidden" : "block"}`}>₹{state.price}</div>
                                <span className="title-font font-medium text-2xl text-gray-900">₹{state.dprice}</span>
                            </div>

                            <div className='flex flex-col items-end ml-auto'>
                                <div>{state.capicity}</div>
                                {
                                    itemcount === 0 ? <div className='bg-green-600 lg:hover:bg-green-700 text-white w-16 h-6 rounded-md text-center shadow-[1px_2px_4px] shadow-gray-400' onClick={increment}>Add</div> : <div className='bg-green-600 lg:hover:bg-green-700 text-white rounded-md flex w-16 h-6 items-center justify-center text-sm shadow-[1px_2px_4px] shadow-gray-400'>
                                        <span className='px-1 w-1/3' onClick={decrement}><i className="fa fa-minus scale-75" aria-hidden="true"></i></span>
                                        <span className='px-1 w-1/3 text-center'>{itemcount}</span>
                                        <span className='px-1 w-1/3' onClick={increment}><i className="fa fa-plus scale-75" aria-hidden="true"></i></span>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Details;