



const productCollection = require('../../services/productServices/productServices')


const getAllProductController = async (req, res) => {


    try {

        const allProducts = await productCollection.find()
        return res.status(200).json({
            message: 'Products successfully retrieved',
            allProducts: allProducts
        })

    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: error })
    }


};
module.exports = getAllProductController