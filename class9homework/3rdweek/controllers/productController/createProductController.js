


const createValidator = require('../../validator/productValidator/createValidator')
const getFullDate = require('../../utilis/getFullDate')
const productCollection = require('../../services/productServices/productServices')


const createNoticeController = async (req, res) => {

    let { productName, price, userID } = req.body

    const createAt = await getFullDate()

    let validate = createValidator({ productName, price, userID, createAt })

    if (!validate.isValid) {
        return res.status(400).json(validate.error)
    } else {

        try {

            const product = productCollection.create(productName, price, userID, createAt)
            return res.status(200).json({
                message: 'Product Created Successfull',
                product: product
            })

        } catch (error) {
            return res.status(500).json({ message: 'something went wrong', error: error })
        }
    }



};
module.exports = createNoticeController