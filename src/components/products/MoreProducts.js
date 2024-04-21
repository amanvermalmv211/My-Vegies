import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import MoreItems from './MoreItems';

const MoreProducts = () => {

    const { state } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='w-full lg:w-[92%] px-2 my-4 mb-8 mx-auto'>
            <div className='flex items-end justify-between font-bold md:text-4xl text-3xl text-green-700'>
                <div>Get more and more!</div>
            </div>

            <div className="py-6 sm:py-8 lg:py-12 text-white">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:mb-8 md:grid-cols-4 lg:grid-cols-5 px-4 lg:px-0">

                    {
                        state.map((myLink, idx) => (
                            <MoreItems key={myLink._id} idx={idx} myLink={myLink}/>
                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default MoreProducts;