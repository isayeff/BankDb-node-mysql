import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const DataCntx = createContext()

const ContextData = ({ children }) => {

    const [cards, setCards] = useState()

    const getCards = async () => {
        try {
            const responce = await axios.get('http://localhost:4000/api/v1/cards')
            // console.log(responce.data.data);
            setCards(responce.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCards()
    }, [])

    return (
        <>
            <DataCntx.Provider value={cards}>
                {children}
            </DataCntx.Provider>
        </>
    )
}

export default ContextData