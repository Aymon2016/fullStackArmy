


const productCollection = require('../../services/productServices/productServices')

const deleteProductController = async (req, res) => {

    const { id } = req.params;

    try {

        const product = await productCollection.findById(id)

        if (product.length === 0) {
            return res.status(404).json({ message: 'Product Already Deleted' })
        } else {
            const isDeleted = await productCollection.deleteById(id)
            if (isDeleted) {

                return res.status(200).json({ message: 'Product Deleted Successfully' })
            } else {
                return res.status(500).json({ message: 'Internal Server Error' })
            }
        }

    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: error })
    }

};
module.exports = deleteProductController