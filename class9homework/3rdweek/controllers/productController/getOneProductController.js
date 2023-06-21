






const productCollection = require('../../services/productServices/productServices')
const getOneProductController = async (req, res) => {

    const { id } = req.params;
    try {

        const product = await productCollection.findById(id)
        if (product.length === 0) {
            return res.status(404).json({ message: 'Product Not Found' })
        } else {
            return res.status(200).json({
                message: 'Product Found',
                product: product
            })
        }

    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: error })
    }


};
module.exports = getOneProductController