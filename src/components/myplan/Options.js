import React from 'react';

const Options = () => {

    return (

        <div className="group relative flex items-center justify-center lg:ml-4 xl:ml-7 lg:my-0 my-3 lg:cursor-pointer">
            <div><i className="fa fa-caret-down" aria-hidden="true"></i></div>
            <div className="absolute top-6 -right-4 hidden group-hover:block py-2 text-start w-28 bg-white font-semibold rounded-lg shadow-lg z-10 overflow-y-scroll overflow-x-hidden h-48">
                <div className="block p-2 hover:scale-105">Brinjal</div>
                <div className="block p-2 hover:scale-105">Cauliflower</div>
                <div className="block p-2 hover:scale-105">Cabbage</div>
                <div className="block p-2 hover:scale-105">Potato</div>
                <div className="block p-2 hover:scale-105">Brinjal</div>
                <div className="block p-2 hover:scale-105">Cauliflower</div>
                <div className="block p-2 hover:scale-105">Cabbage</div>
                <div className="block p-2 hover:scale-105">Potato</div>
            </div>
        </div>
    )
}

export default Options;