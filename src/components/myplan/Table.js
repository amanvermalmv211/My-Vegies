import React from 'react';
import Options from './Options';

const Table = () => {

    let planTable = [
        { day: "Monday", name: "Potato", imglink: "https://img.freepik.com/free-photo/large-set-isolated-vegetables-white-background_485709-44.jpg" },
        { day: "Tuesday", name: "Cabbage", imglink: "https://img.freepik.com/free-photo/large-set-isolated-vegetables-white-background_485709-44.jpg" },
        { day: "Wednesday", name: "Brinjal", imglink: "https://img.freepik.com/free-photo/large-set-isolated-vegetables-white-background_485709-44.jpg" },
        { day: "Thursday", name: "Tomato", imglink: "https://img.freepik.com/free-photo/large-set-isolated-vegetables-white-background_485709-44.jpg" },
        { day: "Friday", name: "Cabbage", imglink: "https://img.freepik.com/free-photo/large-set-isolated-vegetables-white-background_485709-44.jpg" },
        { day: "Saturday", name: "Brinjal", imglink: "https://img.freepik.com/free-photo/large-set-isolated-vegetables-white-background_485709-44.jpg" },
        { day: "Sunday", name: "Tomato", imglink: "https://img.freepik.com/free-photo/large-set-isolated-vegetables-white-background_485709-44.jpg" }
    ];

    return (
        <table className='border-2 border-black mx-auto'>
            <thead className=''>
                <tr className='divide-x-2 divide-black border-2 border-black'>
                    <th className='px-1 lg:w-56 max-sm:text-xs'>
                        <div className='flex items-center justify-center'>
                            <i className="fa fa-arrow-down mx-0.5" aria-hidden="true"></i> <span>Days</span> <span className='scale-150 inline-block mx-0.5'>/</span> <span>Period</span> <i className="fa fa-arrow-right mx-0.5" aria-hidden="true"></i>
                        </div>
                    </th>
                    <th className='px-10 lg:w-56'>Morning</th>
                    <th className='px-10 lg:w-56'>Evening</th>
                </tr>
            </thead>

            <tbody className=''>
                {
                    planTable.map((menu, idx) => (
                        <tr key={idx} className='divide-x-2 divide-black border-b border-black'>
                            <th className='px-1 p-2 text-start'>{menu.day}</th>
                            <td className='px-1 p-2'>
                                <div className='flex items-center justify-start space-x-2'>
                                    <img src={menu.imglink} alt="" className='w-8 object-contain mix-blend-darken' />
                                    <div>{menu.name}</div>
                                    <Options/>
                                </div>
                            </td>
                            <td className='px-1 p-2'>
                                <div className='flex items-center justify-start space-x-2'>
                                    <img src={menu.imglink} alt="" className='w-8 object-contain mix-blend-darken' />
                                    <div>{menu.name}</div>
                                    <Options/>
                                </div>
                            </td>
                        </tr>
                    ))

                }

            </tbody>


        </table>
    )
}

export default Table;