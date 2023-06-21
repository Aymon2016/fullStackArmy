
const Notice = require('./noticeConstructure')


const { readfileNotice, writeFileNotice } = require('../../utilis/utilis')

const notices = Symbol('notices')

class NoticeCollection {

    constructor() {
        (async function () {
            const data = await readfileNotice()
            this[notices] = data;
        }.call(this))


    }


    /**
     * 
     * @param {date} date 
     * @param {string} title
     * @param {text} noticeBody
     */
    create(date, title, noticeBody) {
        const notice = new Notice(date, title, noticeBody)
        this[notices].push(notice)
        writeFileNotice(this[notices])
        return notice
    }


    /**
        * return all notice form db
        */
    find() {
        return this[notices]
    }

    /**
     * find notice by id
     * @param {string} id
     */
    findById(id) {


        const oneNotice = this[notices].filter(
            /**
             * @param {string} id
             */
            (notice) => notice.id === id
        )

        return oneNotice;
    }


    deleteById(id) {

        const index = this[notices].findIndex(
            /**
             * @param {string} id
             */
            (notice) => notice.id === id
        )
        if (index === -1) {
            return false;
        } else {
            this[notices].splice(index, 1)
            writeFileNotice(this[notices])
            return true;
        }


    }

}

const noticeCollection = new NoticeCollection()
module.exports = noticeCollection