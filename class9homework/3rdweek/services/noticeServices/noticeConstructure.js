const shortid = require('shortid')

class Notice {

    /**
     * Users constructor will receive title , date  and noticeBody
     * @param {string} title
     * @param {date} date 
     * @param {text} noticeBody
     */

    constructor(date, title, noticeBody) {
        this.id = shortid.generate();
        this.date = date;
        this.title = title;
        this.noticeBody = noticeBody;
    }
}

module.exports = Notice;