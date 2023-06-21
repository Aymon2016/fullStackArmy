

const noticeCollection = require('../../services/noticeServices/noticeServices')


const getAllNoticeController = async (req, res) => {

    const token = req.headers.Cookie || req.cookies
    console.log(token);

    try {

        const allNotice = await noticeCollection.find()
        return res.status(200).json({
            message: 'Notices successfully retrieved',
            allNotice: allNotice
        })

    } catch (error) {
        return res.status(500).json({ message: 'something went wrong', error: error })
    }


};
module.exports = getAllNoticeController