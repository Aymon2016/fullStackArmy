const shortid = require('shortid')

class Users {

    /**
     * Users constructor will receive name , email  and password
     * @param {string} name
     * @param {string} email 
     * @param {string} role 
     * @param {password} password
     */

    constructor(name, email, password, role) {
        this.id = shortid.generate();
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role
    }
}

module.exports = Users;