

const shortid = require('shortid')

class Product {

    /**
     * Users constructor will receive name,price and userID
     * @param {string} productName
     * @param {number} price 
     * @param {string} userID
     * @param {string} createAt
     */

    constructor(productName, price, userID, createAt) {
        this.id = shortid.generate();
        this.productName = productName;
        this.price = price;
        this.userID = userID;
        this.createAt = createAt
    }
}

module.exports = Product;