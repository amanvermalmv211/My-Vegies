import React, { useContext, useEffect, useState } from 'react';
import Table from './Table';
import cartContext from '../../context/cart/cartContext';

const MyPlan = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const context = useContext(cartContext);
    const { items, toggleItems, deleteItems } = context;

    const [isGif, setIsGif] = useState(false);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [todaysFood, setTodaysFood] = useState(null);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handleSuggest = () => {
        setIsGif(true);
        setShowSuggestion(false);

        setTodaysFood(getRandomInt(0, (items.length - 1)));

        setTimeout(() => {
            setIsGif(false);
            setShowSuggestion(true);
        }, getRandomInt(2000, 3000));
    }

    let allItems = [
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

    return (
        <div className='p-4 mb-8'>
            <div>
                <div className='flex items-end justify-between font-bold md:text-4xl text-3xl text-green-700'>What should I cook today?</div>

                <div className='text-justify text-lg lg:text-xl my-1'>
                    Select the food items and click on 'Suggest' to have what you should cook today!
                </div>

                <div className="group relative flex items-center justify-center w-40 mx-auto my-4">
                    <button className='bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md text-white text-lg'>Add Items</button>

                    <div className="absolute top-8 hidden group-hover:block py-2 text-start w-28 bg-white font-semibold rounded-lg shadow-lg z-10 overflow-y-scroll overflow-x-hidden h-48 nobar">
                        {
                            allItems.map((item, idx) => (
                                <div key={idx} className="block p-2 hover:scale-105 cursor-pointer" onClick={() => { toggleItems(item) }}>{item.name}</div>
                            ))
                        }

                    </div>
                </div>

                <div className='flex items-center justify-center flex-wrap lg:w-[70%] mx-auto my-8'>
                    {
                        items.map((item) => (
                            <div key={item.name} className='relative'>
                                <div className='border border-gray-400 p-1 w-24 m-1.5 rounded-md bg-gray-100 flex flex-col items-center justify-center'>
                                    <div className='w-14 h-10'>
                                        <img src={item.imglink} alt="" className='w-full h-full mix-blend-darken object-contain' />
                                    </div>
                                    <div className='max-md:text-sm'>{item.name}</div>
                                </div>

                                <div className='absolute -top-1.5 right-0 cursor-pointer' onClick={() => { deleteItems(item.name) }}>
                                    <i className="fa fa-times-circle bg-green-400 rounded-full" aria-hidden="true"></i>
                                </div>

                            </div>
                        ))
                    }

                </div>

                <div className='flex items-center justify-center'>
                    {
                        showSuggestion && <div className='border-2 rounded-lg border-gray-500 w-full md:w-96 h-36 flex overflow-hidden shadow-[2px_4px_10px_#00000090]'>
                            <div className='w-1/3 flex items-center justify-center bg-gray-100'>
                                <img src={items[todaysFood].imglink} alt="" className='w-20 h-20 object-contain mix-blend-darken' />
                            </div>

                            <div className='w-2/3 flex items-center justify-center flex-col p-2'>
                                <div className='font-semibold text-lg w-full text-center'>{items[todaysFood].name}</div>
                                <div className='text-start text-sm w-full'>This is for the description of the today's food item that shows benifits of having this food item. This section will composed soon.</div>
                            </div>

                        </div>
                    }

                    {
                        isGif && <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHc0Y2I5Zm9pYnJseHp3bm5ybG9vNndwYW80eTdiYTJ4MDN2aG56aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TiPQa86PpufKymqPAu/giphy.gif" alt="" className='w-32 h-36 object-contain mix-blend-darken scale-150' />
                    }

                </div>

                {
                    items.length >= 2 && <div className='flex items-center justify-center my-4'>
                        <button className='bg-green-500 hover:bg-green-600 px-2 py-1 rounded-md text-white text-lg' onClick={handleSuggest}>Suggest Food 😋</button>
                    </div>
                }

            </div>

            <div className='my-8'>
                <div className='flex items-end justify-between font-bold md:text-4xl text-3xl text-green-700'>My Plan</div>

                <div className='text-justify text-lg lg:text-xl'>
                    Here you can plan your today's meal just by slecting the food items and we will let you know randomly which food you should have today!
                </div>

                <div className='my-4 nobar overflow-x-auto h-[65vh]'>
                    <Table />
                </div>
            </div>

        </div>
    )
}

export default MyPlan;