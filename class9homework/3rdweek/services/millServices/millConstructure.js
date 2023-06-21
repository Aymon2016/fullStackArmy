


const shortid = require('shortid')

class Mill {

    /**
     * Users constructor will receive name,price and userID
     * @param {string} date
     * @param {number} quantity
     * @param {number} userID
     * @param {number} authorId
     * @param {date}  createAt
     */

    constructor(date, quantity, userID, authorId, createAt) {
        this.id = shortid.generate();
        this.date = date;
        this.quantity = quantity;
        this.userID = userID;
        this.authorId = authorId;
        this.createAt = createAt;
    }
}

module.exports = Mill;