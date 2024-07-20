const db = require('../config/db')

const getCategories = async (req, res) => {
    try {
        const data =  await db.query('select * from categories')

        if (!data) {
            res.status(404).send({
                status: false,
                message: 'data is not founf'
            })
        }

        res.status(200).send({
            data: data[0]
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: error
        })
    }
}

module.exports = { getCategories }