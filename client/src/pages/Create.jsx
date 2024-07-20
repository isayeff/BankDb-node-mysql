import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Create = () => {

    const [categories, setCategories] = useState()

    const getCategories = async () => {
        try {
            const responce = await axios.get('http://localhost:4000/api/v1/categories')
            console.log(responce.data.data);
            setCategories(responce.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCategories()
    }, [])

    const [values, setValues] = useState({
        name: '',
        img: '',
        partnotCount: '',
        categoryID: ''
    })

    async function submitHandler() {
        try {
            await axios.post('http://localhost:4000/api/v1/cards/add', values)
            alert('Kart Əlavə Olundu')
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className='py-[50px] flex justify-center'>
            <div className='bg-[black] w-[400px] rounded-[10px] p-[30px] flex flex-col gap-[30px] items-center'>
                <h2 className='text-white text-[25px] font-[500]'>Kart Əlavə Et</h2>
                <input onChange={(e) => setValues({...values, name:e.target.value})} className='w-full p-[12px] rounded-[5px]' placeholder='Kart Adı...' type="text" />
                <input onChange={(e) => setValues({...values, img:e.target.value})} className='w-full p-[12px] rounded-[5px]' placeholder='Şəkli...' type="text" />
                <input onChange={(e) => setValues({...values, partnotCount:e.target.value})} className='w-full p-[12px] rounded-[5px]' placeholder='Partnyor Sayı...' type="text" />
                <select onChange={(e) => setValues({...values, categoryID: e.target.value})} className='w-full p-[12px] rounded-[5px]' name="" id="">
                    {
                        categories && categories.map(item => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))
                    }
                </select>
                <button onClick={submitHandler} className='bg-[white] uppercase font-[500] text-black w-full py-[15px] rounded-[5px]'>Əlavə Et</button>
            </div>
        </div>
    )
}

export default Create