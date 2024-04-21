import React, { useContext, useEffect, useState } from 'react'
import cartContext from '../../context/cart/cartContext';

const CartItems = (props) => {

    const context = useContext(cartContext);
    const { cartOrder, toggleCartOrder } = context;

    let calcDisc = ((props.items.price - props.items.dprice) / props.items.price) * 100

    let [itemcount, setItemcount] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const increment = () => {
        if (itemcount === null) {
            itemcount = 1;
        }
        else {
            itemcount++;
        }
        setItemcount(itemcount);
        toggleCartOrder({ _id: props.items._id, quantity: itemcount });
    }

    const decrement = () => {
        if (itemcount === 1) {
            itemcount = 0;
            setIsShow(false);
        }
        else {
            itemcount--;
        }
        setItemcount(itemcount);
        toggleCartOrder({ _id: props.items._id, quantity: itemcount });
    }

    useEffect(() => {
        // eslint-disable-next-line
        Object.keys(cartOrder).map((cartItems) => {
            if (props.items._id === cartItems) {
                setItemcount(cartOrder[cartItems].quantity);
                setIsShow(true);
            }
        });

        // eslint-disable-next-line
    }, [Object.keys(cartOrder).length]);

    return (
        <div className={`group relative flex flex-col h-44 lg:h-48 overflow-hidden bg-gray-100 lg:cursor-pointer border border-gray-400 rounded-lg ${isShow ? "block" : "hidden"}`}>

            <span className={`absolute top-1.5 left-0 pl-0.5 pr-1.5 text-[0.7rem] rounded-r-full bg-green-700 z-20 ${props.items.price === "0" ? "hidden" : "block"}`}>{calcDisc.toFixed(0)}% off</span>

            <div className='h-24'>
                <img src={props.items.imglink} loading="lazy" alt="This is by Minh Pham" className="h-20 lg:h-24 w-full px-2 py-1 object-contain object-center transition duration-200 lg:group-hover:scale-110 mix-blend-darken" />
            </div>

            <div className='bg-gray-100 text-gray-600 text-md md:font-semibold h-28 px-1 lg:px-2 flex items-stretch justify-around flex-col'>
                <div className=''>{props.items.name}</div>

                <div className='flex items-end justify-between'>
                    <div className='flex flex-col items-start'>
                        <div className={`text-red-500 line-through text-[0.8rem] ${props.items.price === "0" ? "hidden" : "block"}`}>₹{props.items.price}</div>
                        <div>₹{props.items.dprice}</div>
                    </div>

                    <div className='flex flex-col items-end'>
                        <div>{props.items.capicity}</div>
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
    )
}

export default CartItems;