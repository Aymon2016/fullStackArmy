
const noticeCollection = require('../../services/noticeServices/noticeServices')
const deleteNoticeController = async (req, res) => {

    const { id } = req.params;

    try {

        const notice = await noticeCollection.findById(id)
        if (notice.length === 0) {
            return res.status(404).json({ message: 'Notice Already Deleted' })
        } else {
            const isDeleted = await noticeCollection.deleteById(id)
            if (isDeleted) {

                return res.status(200).json({ message: 'Notice Deleted Successfully' })
            } else {
                return res.status(500).json({ message: 'Internal Server Error' })
            }
        }

    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: error })
    }

};
module.exports = deleteNoticeController