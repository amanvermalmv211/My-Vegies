import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './asserts/logo.png';
import cartContext from '../context/cart/cartContext';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const context = useContext(cartContext);
    const { cartOrder, setCartOrder } = context;

    useEffect(() => {
        try {
            if (localStorage.getItem("mvcart")) {
                setCartOrder(JSON.parse(localStorage.getItem("mvcart")));
            }
        }
        catch (err) {
            localStorage.removeItem("mvcart");
            console.log(err)
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (open) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
        };

    }, [open]);

    const getClose = () => {
        if (open) {
            setOpen(false);
        }
    }

    let footerLinks = [
        { name: "Home", link: "/", logo: "fa-home" },
        { name: "My Plan", link: "/myplan", logo: "fa-window-restore" },
        { name: "Orders", link: "/cartorders", logo: "fa-shopping-basket" },
        { name: "Profile", link: "/userlogin", logo: "fa-user-o" }
    ];

    let navLogo = [
        { link: "/as", logo: "fa-search" },
        { link: "/cartorders", logo: "fa-cart-plus" },
        { link: "/userlogin", logo: "fa-user" },
        { link: "/dsaf", logo: "" }
    ];

    let navLinks = [
        { name: "Home", link: "/" },
        { name: "My Plan", link: "/myplan" },
        { name: "Orders", link: "/cartorders" }
    ];

    let allLinks = [
        { name: "Home", link: "/", logo: "fa-home" },
        { name: "My Plan", link: "/myplan", logo: "fa-window-restore" },
        { name: "Orders", link: "/cartorders", logo: "fa-shopping-basket" },
        { name: "Profile", link: "/userlogin", logo: "fa-user-o" }
    ];

    return (
        <>
            <div className='text-center text-[0.7rem] md:text-sm p-1 md:p-2 bg-green-500 text-gray-800 border-b border-dashed border-black'><span className='font-semibold'>Delivery Charge :</span> <span className='text-[0.6rem] md:text-[0.7rem] text-red-500 line-through'>20 Rs</span> <span className='px-1 py-0.5 lg:pb-1 rounded-full border border-dotted border-black font-semibold'>Free Delivery</span></div>

            <section className='bg-green-500 text-gray-800 sticky top-0 left-0 w-full z-50'>

                <div className={`lg:flex items-center justify-between lg:px-3`}>
                    <div className='flex items-center justify-center text-lg'>
                        <Link to="/" className="hidden mr-4 lg:flex title-font font-medium items-center justify-center md:mb-0">
                            <img src={logo} alt="" className="w-20 h-14 pt-1" />
                            <div className="relative lg:cursor-pointer ml-3 text-xl overflow-hidden group"><span className="invisible">My Veggies</span><span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">My Veggies</span><span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">My Veggies</span></div>
                        </Link>

                        <nav className={`lg:flex hidden text-center lg:w-auto lg:pt-0 absolute lg:static border-l-2 border-black`}>

                            {
                                navLinks.map((myLink) => (
                                    <li key={myLink.name} className='lg:ml-4 xl:ml-7 lg:my-0 my-3 list-none relative after:absolute after:bg-green-300 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 lg:hover:after:origin-bottom-left lg:hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 lg:cursor-pointer'>
                                        <Link onClick={getClose} to={myLink.link}>{myLink.name}</Link>
                                    </li>
                                ))
                            }

                        </nav>



                    </div>

                    <div className='flex justify-between items-center lg:hidden font-bold cursor-default p-1 px-3'>
                        <Link to="/" className="myIcon flex items-center justify-center space-x-1" onClick={getClose}>
                            <img src={logo} alt="" className="w-14 aspect-[3/2] object-fill" />
                            <span className='text-lg font-serif' id="spanHeading">My Veggies</span>
                        </Link>

                        <div className='lg:hidden flex items-center justify-center space-x-6'>
                            <Link to="/"><i className="fa fa-search" aria-hidden="true"></i></Link>

                            <Link to="/cartorders" className='relative'>
                                <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                {
                                    Object.keys(cartOrder).length !== 0 && 
                                    <div className='absolute -top-1.5 -right-2 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center p-[0.45rem] text-[0.65rem]'>{Object.keys(cartOrder).length}</div>
                                }

                            </Link>

                            <svg onClick={() => { setOpen(!open) }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>


                    <div className='lg:flex hidden'>

                        <div className='flex items-center justify-between space-x-14'>

                            {
                                navLogo.map((myLink) => (
                                    <Link key={myLink.link} to={myLink.link} className='flex items-center justify-center flex-col relative'>
                                        <i className={`fa ${myLink.logo} scale-110`} aria-hidden="true"></i>
                                        {
                                            Object.keys(cartOrder).length !== 0 &&
                                            <div className={`absolute -top-3 -right-2 h-3 w-3 bg-red-500 rounded-full flex items-center justify-center p-2 text-xs ${myLink.logo === "fa-cart-plus" ? "block" : "hidden"}`}>{Object.keys(cartOrder).length}</div>
                                        }
                                        
                                    </Link>
                                ))
                            }

                        </div>

                    </div>

                </div>

                <div className={`fixed top-0 right-0 w-full h-full transform ${open ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out flex backdrop-blur-[1.5px]`}
                >

                    <div className='bg-[#eee6c2] w-[80%] overflow-y-auto nobar'>
                        <Link to="/userlogin" onClick={getClose} className='flex items-center justify-between bg-green-400 z-20 p-6 sticky top-0 left-0'>
                            <div className="flex items-center justify-center space-x-2">
                                <i className="fa fa-user text-white bg-black p-2 rounded-full scale-125" aria-hidden="true"></i>
                                <h2 className="text-2xl font-semibold w-full">Guest User</h2>

                            </div>
                        </Link>

                        <div>
                            <div onClick={getClose} className='flex flex-col justify-center font-medium bg-[#eee6c2]'>

                                {
                                    allLinks.map((myLink, index) => (
                                        <Link key={index} to={myLink.link} className={`flex items-center justify-between p-4 border-b border-gray-300`}>
                                            <div className='flex items-center space-x-4'>
                                                <i className={`fa ${myLink.logo}`} aria-hidden="true"></i> <span className='text-xl'>{myLink.name}</span>
                                            </div>

                                            <div>
                                                <i className="fa fa-angle-right text-gray-500" aria-hidden="true"></i>
                                            </div>
                                        </Link>
                                    ))
                                }

                            </div>
                        </div>
                    </div>

                    <div className='h-full w-[20%]' onClick={getClose}></div>

                </div>

            </section>

            <footer className='lg:hidden pt-1 px-6 md:px-16 bg-green-400 text-gray-800 fixed bottom-0 left-0 w-full z-30'>
                <div className='flex items-center justify-between space-x-4'>

                    {
                        footerLinks.map((myLink) => (
                            <Link key={myLink.link} to={myLink.link} className='flex items-center justify-center flex-col'>
                                <i className={`fa ${myLink.logo}`} aria-hidden="true"></i>
                                <div className='text-sm md:text-xl'>{myLink.name}</div>
                            </Link>
                        ))
                    }

                </div>
            </footer>
        </>
    )
}

export default Navbar;