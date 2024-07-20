import React from 'react'
import Cards from '../components/Cards'

const Home = () => {
    return (
        <>
            <div className='container mx-auto py-[30px]'>
                <h2 className='text-[35px] font-bold font-sans my-[20px]'>Cards</h2>
                <p className='text-[#999] w-[40vw]'>Enjoy the convenience of cashless payments. Make your payments quickly and safely and take advantage of the advantages of the cards.</p>
                <Cards />
            </div>
        </>
    )
}

export default Home