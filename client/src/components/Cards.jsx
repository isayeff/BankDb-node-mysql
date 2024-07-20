import axios from 'axios'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataCntx } from '../data/ContextData'

const Cards = () => {

    const cards = useContext(DataCntx)

    return (
        <div className='container mx-auto  py-[50px]'>
            <div className='flex justify-between items-center'>
                <h2 className='text-[20px] font-[500] pb-[15px]'>All Cards ({cards && cards.length})</h2>
                <Link to="create">
                    <button className='bg-black text-white py-[7px] px-[20px] rounded-[5px]'>Add New Card</button>
                </Link>
            </div>
            <div className='flex items-center gap-[30px] flex-wrap'>
                {
                    cards && cards.map(card => (
                        <div key={card.id} className="max-w-xs rounded-md overflow-hidden shadow-md">
                            <div className='bg-gray-900'>
                                <img src={card.img} alt="" className="object-cover object-center w-full rounded-t-md dark:bg-gray-500" />
                            </div>
                            <div className="flex flex-col justify-between p-6 space-y-8">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-semibold tracki">{card.name}</h2>
                                    <p className="">About {card.partnotCount} - partners.</p>
                                </div>
                                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-black text-white">Order</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards