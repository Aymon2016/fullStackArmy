





const Mill = require('./millConstructure')


const { readfileMill, writeFileMill } = require('../../utilis/utilis')

const mills = Symbol('mills')

class MillCollection {

    constructor() {
        (async function () {
            const data = await readfileMill()
            this[mills] = data;
        }.call(this))


    }


    /**
    * mills constructor will receive date, quantity, userID, authorId, createAt
    * @param {string} date
    * @param {number} quantity
    * @param {number} userID
    * @param {number} authorId
    * @param {number} createAt
    */

    create(date, quantity, userID, authorId, createAt) {

        const mill = new Mill(date, quantity, userID, authorId, createAt)
        this[mills].push(mill)
        writeFileMill(this[mills])
        return mill
    }


    /**
        * return all mill form db
        */
    find() {
        return this[mills]
    }

    /**
     * find mill by date
     * @param {string} id
     */
    findByDate(date) {


        const oneMill = this[mills].filter(
            /**
             * @param {string} date
             */
            (mill) => mill.date === date
        )

        return oneMill;
    }

    /**
    * find mills by userID
    * @param {string} userID
    */
    findByUserID(userID) {


        const Mills = this[mills].filter(
            /**
             * @param {string} userID
             */
            (mill) => mill.userID === userID
        )

        return Mills;
    }
    /**
    * find mills by id
    * @param {string} id
    */
    findByID(id) {


        const Mills = this[mills].filter(
            /**
             * @param {string} id
             */
            (mill) => mill.id === id
        )

        return Mills;
    }
    /**
    * delete mill by date
    * @param {string} id
    */

    deleteById(id) {

        const index = this[mills].findIndex(
            /**
             * @param {string} id
             */
            (mill) => mill.id === id
        )
        if (index === -1) {
            return false;
        } else {
            this[mills].splice(index, 1)
            writeFileMill(this[mills])
            return true;
        }


    }

}

const millCollection = new MillCollection()
module.exports = millCollection