import { useEffect, useState } from 'react';
import { greenVegetables } from '../products/ListofProducts';

const MyPlan = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    let initialState = [];
    const [items, setItems] = useState(initialState);

    const addItems = (details) => {
        let flag = false;
        for (var i = 0; i < items.length; i++) {
            if (items[i].name === details.name) {
                flag = true;
                break;
            }
        }

        if (!flag) {
            setItems(items.concat(details));
        }
    }

    const deleteItems = (name) => {
        setIsGif(false);
        setShowSuggestion(false);
        const newItems = items.filter((item) => { return item.name !== name });
        setItems(newItems);
    }

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

    let allItems = greenVegetables;

    return (
        <div className='p-4 mb-8'>
            <div>
                <div className='flex items-end justify-between font-bold md:text-4xl text-3xl text-green-700'>What should I cook today?</div>

                <div className='text-justify text-lg lg:text-xl my-1'>
                    Select the food items and click on 'Suggest' to have what you should cook today!
                </div>

                <div className="group relative flex items-center justify-center w-40 mx-auto my-4">
                    <button className='bg-green-500 hover:bg-green-600 px-2 py-1 md:my-4 rounded-md text-white text-lg'>Add Items</button>

                    <div className="absolute top-10 hidden group-hover:block py-2 text-start w-28 bg-white font-semibold rounded-lg shadow-lg z-10 overflow-y-scroll overflow-x-hidden h-48 nobar divide-y">
                        {
                            allItems.map((item, idx) => (
                                <div key={idx} className="block p-2 hover:scale-105 cursor-pointer" onClick={() => { addItems(item) }}>{item.name}</div>
                            ))
                        }

                    </div>
                </div>

                <div className='flex items-center justify-center flex-wrap lg:w-[70%] mx-auto my-8'>
                    {
                        items.map((item, idx) => (
                            <div key={idx} className='relative'>
                                <div className='border border-gray-400 p-1 w-36 m-1.5 rounded-md bg-gray-100 flex flex-col items-center justify-center'>
                                    <div className='w-32 h-16'>
                                        <img src={item.imglink} alt="" className='w-full h-full mix-blend-darken object-contain' />
                                    </div>
                                    <div className='max-md:text-sm'>{item.name}</div>
                                </div>

                                <div className='absolute -top-1 right-0 cursor-pointer' onClick={() => { deleteItems(item.name) }}>
                                    <i className="fa fa-times-circle bg-green-400 rounded-full text-gray-700" aria-hidden="true"></i>
                                </div>

                            </div>
                        ))
                    }

                </div>

                {
                    (items.length > 0 && items.length < 2) && <div className='text-xl text-red-500 text-center'>For suggestion, add atleast <br/> two items.</div>
                }

                <div className='flex items-center justify-center'>
                    {
                        showSuggestion && <div className='border-2 rounded-lg border-gray-500 w-full md:w-96 h-36 flex overflow-hidden shadow-[2px_4px_10px_#00000090]'>
                            <div className='w-1/3 flex items-center justify-center bg-gray-100'>
                                <img src={items[todaysFood].imglink} alt="" className='w-20 h-20 object-contain mix-blend-darken' />
                            </div>

                            <div className='w-2/3 flex items-center justify-center flex-col p-2'>
                                <div className='font-semibold text-lg w-full text-center'>{items[todaysFood].name}</div>
                                <div className='text-start text-sm w-full'>{items[todaysFood].description}</div>
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
        </div>
    )
}

export default MyPlan;