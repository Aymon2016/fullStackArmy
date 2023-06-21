

const noticeCollection = require('../../services/noticeServices/noticeServices')
const getOneNoticeController = async (req, res) => {

    const { id } = req.params;
    try {

        const notice = await noticeCollection.findById(id)
        if (notice.length === 0) {
            return res.status(404).json({ message: 'Notice Not Found' })
        } else {
            return res.status(200).json({
                message: 'Notice Found',
                data: notice
            })
        }

    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: error })
    }


};
module.exports = getOneNoticeController