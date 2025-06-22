import React, { useEffect } from 'react'
import Items from './Items';
import { useNavigate } from 'react-router-dom';

const Products = (props) => {

    // let allLinks = [
    //     { _id: "100", name: "Potato", price: "30", dprice: "18", capicity: "1kg", imglink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvK9EuXpRBy_z7HNwGO2PK2uxppZ7njHQvYxnQL22n_MQbeC10Wb_1DXFjeQiHwl0MHmY&usqp=CAU" },
    //     { _id: "1", name: "Onion", price: "60", dprice: "40", capicity: "1kg", imglink: "https://freepngimg.com/save/144-red-onion-png-image/3191x1675" },
    //     { _id: "2", name: "Cabbage", price: "30", dprice: "23", capicity: "1kg", imglink: "https://i.pinimg.com/736x/7f/68/5f/7f685f54733d5309c1c3918ffa8b824e.jpg" },
    //     { _id: "3", name: "Cauliflower", price: "30", dprice: "28", capicity: "1kg", imglink: "https://pngimg.com/d/cauliflower_PNG12679.png" },
    //     { _id: "4", name: "Green Chilli", price: "0", dprice: "36", capicity: "250g", imglink: "https://i.pinimg.com/originals/3c/42/5a/3c425a418d2c6b4670ee7d47c799a80d.png" },
    //     { _id: "5", name: "Tomato", price: "40", dprice: "29", capicity: "500g", imglink: "https://purepng.com/public/uploads/large/purepng.com-tomatovegetables-tomato-941524712357ikhy3.png" },
    //     { _id: "6", name: "Ginger", price: "80", dprice: "70", capicity: "250g", imglink: "https://pngimg.com/d/ginger_PNG16797.png" },
    //     { _id: "7", name: "Garlic", price: "60", dprice: "43", capicity: "250g", imglink: "https://static.vecteezy.com/system/resources/previews/027/214/959/original/garlic-garlic-garlic-transparent-background-ai-generated-free-png.png" },
    //     { _id: "8", name: "Brinjal", price: "30", dprice: "25", capicity: "1kg", imglink: "https://freepngimg.com/save/13029-eggplant-free-download-png/346x347" }
    // ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate(null);

    const seeMore = () => {
        navigate("/moreproducts", { state: props.data });
    }

    return (
        <div className='w-full lg:w-[92%] px-2 my-4 mx-auto'>
            <div className='flex items-end justify-between font-bold md:text-4xl text-3xl text-green-700'>
                <div>
                    {props.title}
                </div>
                <div className='text-xs md:text-sm pr-1 cursor-pointer'>
                    <div className="group transition ease-in-out duration-200" onClick={seeMore}>See more <span aria-hidden="true" className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"><i className="fa fa-arrow-right bg-green-400 p-1 rounded-full" aria-hidden="true"></i></span></div>
                </div>
            </div>

            <div className="py-6 sm:py-8 lg:py-12 text-white">
                <div className="nobar grid grid-row-1 grid-flow-col gap-3 overflow-x-auto max-w-screen-2xl px-2 md:px-8">

                    {
                        props.data.map((myLink, idx) => (
                            <Items key={idx} idx={idx} myLink={myLink} />
                        ))
                    }

                </div>

            </div>

        </div>
    )
}

export default Products;