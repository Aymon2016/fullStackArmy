

const millCollection = require('../../services/millServices/millServices')

const getOneUserMillController = async (req, res) => {

    const { id } = req.params;

    try {

        const oneUserMills = await millCollection.findByUserID(id)
        if (oneUserMills.length === 0) {
            return res.status(404).json({ message: 'Mills Not Found' })
        } else {
            return res.status(200).json({
                message: 'Mills Found',
                data: oneUserMills
            })
        }

    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: error })
    }


};
module.exports = getOneUserMillController