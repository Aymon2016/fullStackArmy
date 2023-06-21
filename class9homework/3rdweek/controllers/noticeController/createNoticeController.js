
const createValidator = require('../../validator/noticeValidator/createValidator')
const getFullDate = require('../../utilis/getFullDate')
const noticeCollection = require('../../services/noticeServices/noticeServices')


const createNoticeController = async (req, res) => {

    let { title, noticeBody } = req.body
    const date = await getFullDate()
    let validate = createValidator({ date, title, noticeBody })

    if (!validate.isValid) {
        return res.status(400).json(validate.error)
    } else {

        try {

            noticeCollection.create(date, title, noticeBody)
            return res.status(200).json({
                message: 'Notice Created Successfull'
            })

        } catch (error) {
            return res.status(500).json({ message: 'something went wrong', error: error })
        }
    }



};
module.exports = createNoticeController
