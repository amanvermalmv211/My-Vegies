import React, { useEffect } from 'react';
import Products from './products/Products';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='w-full'>
        <div className='flex items-center justify-center'>
          <div className='w-full h-44 md:h-80 lg:h-72 hidden lg:block'>
            <img src="https://png.pngtree.com/png-clipart/20221018/ourmid/pngtree-editable-text-banner-best-price-promo-label-transparent-background-png-image_239743.png" alt="" className='w-full h-full object-contain lg:object-contain z-10' />
          </div>

          <div className='w-full h-44 md:h-80 lg:h-72'>
            <img src="https://img.freepik.com/free-photo/large-set-isolated-vegetables-white-background_485709-44.jpg" alt="" className='w-full h-full object-contain z-10 mix-blend-darken hidden'/>

            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzE2NmdyN2FvM3J4dTN5dXFmdG85NnVqMmV3Z3p6ZWF3aWNubnJrNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zqtOYPQZ8Kb5pMlH8p/giphy.gif" alt="" className='w-full h-full object-contain mix-blend-darken' />

          </div>

          <div className='w-full h-44 md:h-80 lg:h-72 hidden lg:block'>
            <img src="https://png.pngtree.com/png-vector/20230507/ourmid/pngtree-fast-delivery-label-design-vector-png-image_7087605.png" alt="" className='w-full h-full object-fill lg:object-contain z-10' />
          </div>
        </div>

        <div className='flex items-center justify-center h-20'>
          <i className='navtext p-3 font-bold md:text-4xl text-3xl text-center mytext bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-b-2 border-dashed border-purple-400'>Special Offers Unlocked</i>
        </div>

      </div>

      <div className='mb-10'>
        <Products title="Daily Use" />
        <Products title="Fruits" />
        <Products title="Leave Items" />
        <Products title="Green Vegitables" />
      </div>

    </>
  )
}

export default Home;