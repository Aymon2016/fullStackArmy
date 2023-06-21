
const User = require('./userconstructor')



const { readfile, writeFile } = require('../../utilis/utilis')

const users = Symbol('users')

class UserCollection {

    constructor() {
        (async function () {
            const data = await readfile()
            this[users] = data;
        }.call(this))


    }
    /**
     * 
     * @param {string} name 
     * @param {string} email
     * @param {string} role
     * @param {password} password
     */
    create(name, email, password, role) {
        const user = new User(name, email, password, role)
        this[users].push(user)
        writeFile(this[users])
        return user
    }
    /**
     * find user by email
     * @param {string} email
     */
    findByEmail(email) {


        const userEmail = this[users].filter(
            /**
             * @param {email} email
             */
            (user) => user.email === email
        )

        return userEmail;
    }
    /**
        * find user by id
        * @param {string} email
        */
    findById(id) {


        const oneUser = this[users].filter(
            /**
             * @param {string} id
             */
            (user) => user.id === id
        )

        return oneUser;
    }

    deleteById(userid) {

        const index = this[users].findIndex(
            /**
             * @param {user} user
             */
            (user) => user.id === userid
        )
        if (index === -1) {
            return false;
        } else {
            this[users].splice(index, 1)
            writeFile(this[users])
            return true;
        }


    }

}

const userCollection = new UserCollection()
module.exports = userCollection