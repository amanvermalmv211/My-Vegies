import React, { useContext, useEffect, useState } from 'react';
import cartContext from '../../context/cart/cartContext';
import { useNavigate } from 'react-router-dom';

const Items = (props) => {
    const context = useContext(cartContext);
    const { cartOrder, toggleCartOrder } = context;

    let calcDisc = ((props.myLink.price - props.myLink.dprice) / props.myLink.price) * 100

    let [itemcount, setItemcount] = useState(0);
    const navigate = useNavigate(null);

    const increment = () => {
        if (itemcount === null) {
            itemcount = 1;
        }
        else {
            itemcount++;
        }
        setItemcount(itemcount);
        toggleCartOrder({ _id: props.myLink._id, quantity: itemcount });
    }

    const decrement = () => {
        if (itemcount === 1) {
            itemcount = 0;
        }
        else {
            itemcount--;
        }
        setItemcount(itemcount);
        toggleCartOrder({ _id: props.myLink._id, quantity: itemcount });
    }

    const handleProdDetails = () => {
        navigate("/proddetails", { state: props.myLink });
    }

    useEffect(() => {
        // eslint-disable-next-line
        Object.keys(cartOrder).map((cartItems) => {
            if (props.myLink._id === cartItems) {
                setItemcount(cartOrder[cartItems].quantity);
            }
        });

        // eslint-disable-next-line
    }, [Object.keys(cartOrder).length]);

    return (
        <div className={`group relative flex flex-col w-32 lg:w-40 h-44 lg:h-48 overflow-hidden bg-gray-100 lg:cursor-pointer border border-gray-400 rounded-lg lg:${props.idx >= 7 ? "hidden" : ""}`}>

            <span className={`absolute top-1.5 left-0 pl-0.5 pr-1.5 text-[0.7rem] rounded-r-full bg-green-700 z-20 ${props.myLink.price === "0" ? "hidden" : "block"}`}>{calcDisc.toFixed(0)}% off</span>

            <div className='h-24' onClick={handleProdDetails}>
                <img src={props.myLink.imglink} loading="lazy" alt="This is by Minh Pham" className="h-20 lg:h-24 w-full px-2 py-1 object-contain object-center transition duration-200 lg:group-hover:scale-110 mix-blend-darken" />
            </div>

            <div className='bg-gray-100 text-gray-600 text-md md:font-semibold h-28 px-1 lg:px-2 flex items-stretch justify-around flex-col'>
                <div onClick={handleProdDetails}>{props.myLink.name}</div>

                <div className='flex items-end justify-between'>
                    <div className='flex flex-col items-start'>
                        <div className={`text-red-500 line-through text-[0.8rem] ${props.myLink.price === "0" ? "hidden" : "block"}`}>₹{props.myLink.price}</div>
                        <div>₹{props.myLink.dprice}</div>
                    </div>

                    <div className='flex flex-col items-end'>
                        <div>{props.myLink.capicity}</div>
                        {
                            itemcount === 0 ? <div className='bg-green-600 lg:hover:bg-green-700 text-white w-16 h-6 rounded-md text-center shadow-[1px_2px_4px] shadow-gray-400' onClick={increment}>Add <i className="fa fa-cart-plus ml-auto scale-75" aria-hidden="true"></i> </div> : <div className='bg-green-600 lg:hover:bg-green-700 text-white rounded-md flex w-16 h-6 items-center justify-center text-sm shadow-[1px_2px_4px] shadow-gray-400'>
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

export default Items;