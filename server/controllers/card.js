const db = require('../config/db')

const getAllCards = async (req, res) => {
    try {
        const data =  await db.query('select * from cards')

        if (!data) {
            res.status(404).send({
                status: false,
                message: 'data is not founf'
            })
        }

        res.status(200).send({
            data: data[0],
            length: data[0].length
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: error
        })
    }
}

const createCard = async (req, res) => {
    const {name, img, partnotCount, categoryID} = req.body

    try { 
        const data = await db.query(`insert into cards(name,img,partnotCount,categoryID) values(?,?,?,?)`, [name, img, partnotCount, categoryID])
        res.status(201).send(data[0])
    } catch (error) {
        res.status(500).send({
            status: false,
            message: error
        })
    }
}

module.exports = { getAllCards, createCard }