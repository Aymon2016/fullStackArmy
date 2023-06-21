
const millCollection = require('../../services/millServices/millServices')

const deleteMillController = async (req, res) => {

    const { id } = req.params;


    try {

        const mill = await millCollection.findByID(id)

        if (mill.length === 0) {
            return res.status(404).json({ message: 'Mill Already Deleted' })
        } else {
            const isDeleted = millCollection.deleteById(id)

            if (isDeleted) {

                return res.status(200).json({ message: 'Mill Deleted Successfully' })
            } else {
                return res.status(500).json({ message: 'Internal Server Error' })
            }
        }

    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: error })
    }

};
module.exports = deleteMillController