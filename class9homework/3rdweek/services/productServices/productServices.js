


const Product = require('./productConstructure')


const { readfileProduct, writeFileProduct } = require('../../utilis/utilis')

const products = Symbol('products')

class ProductCollection {

    constructor() {
        (async function () {
            const data = await readfileProduct()
            this[products] = data;
        }.call(this))


    }


    /**
     * 
     * @param {string} productName
     * @param {number} price 
     * @param {string} userID
     * @param {date} createAt
     */
    create(productName, price, userID, createAt) {
        const product = new Product(productName, price, userID, createAt)
        this[products].push(product)
        writeFileProduct(this[products])
        return product
    }


    /**
        * return all products form db
        */
    find() {
        return this[products]
    }
    /**
    * find product by userId
    * @param {string} userID
    */
    findByUserID(userID) {


        const Products = this[products].filter(
            /**
             * @param {string} userId
             */
            (product) => product.userID === userID
        )

        return Products;
    }
    /**
     * find product by id
     * @param {string} id
     */
    findById(id) {


        const oneProduct = this[products].filter(
            /**
             * @param {string} id
             */
            (product) => product.id === id
        )

        return oneProduct;
    }
    /**
    * delete product by id
    * @param {string} id
    */

    deleteById(id) {

        const index = this[products].findIndex(
            /**
             * @param {string} id
             */
            (product) => product.id === id
        )
        if (index === -1) {
            return false;
        } else {
            this[products].splice(index, 1)
            writeFileProduct(this[products])
            return true;
        }


    }

}

const productCollection = new ProductCollection()
module.exports = productCollection