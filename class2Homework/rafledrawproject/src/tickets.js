const Ticket = require('./Ticket')
const { readfile, writeFile } = require('./utilis')

const tickets = Symbol('tickets')

class TicketCollection {

    constructor() {
        (async function () {
            const data = await readfile()
            this[tickets] = data;
        }.call(this))
    }

    /**
     * 
     * @param {string} username 
     * @param {number} price 
     * @param {Ticket}
     */
    create(username, price) {
        const ticket = new Ticket(username, price)
        this[tickets].push(ticket)
        writeFile(this[tickets])
        return ticket
    }

    createBulk(username, price, quantity) {
        const result = [];
        for (let i = 0; i < quantity; i++) {
            const ticket = this.create(username, price);
            result.push(ticket)
        }
        writeFile(this[tickets])
        return result;
    }

    /**
     * return all ticket form db
     */
    find() {
        return this[tickets]
    }

    /**
     * find ticket by id
     * @param {id} id 
     */
    findById(id) {

        const ticket = this[tickets].find(
            /**
             * @param {Ticket} ticket
             */
            (ticket) => ticket.id === id
        )
        return ticket;
    }

    /**
     * find ticket by username
     * @param {username} username
     * @return {Ticket[]}
     */
    findByUsername(username) {

        const usertickets = this[tickets].filter(
            /**
             * @param {Ticket} ticket
             */
            (ticket) => ticket.username === username
        )
        return usertickets;
    }

    /**
     * 
     * @param {string} ticketId 
     * @param {{username:string,price:number}} ticketBody 
     * @return {Ticket}
     */
    updateById(ticketId, ticketBody) {

        const ticket = this.findById(ticketId)
        if (ticket) {
            ticket.username = ticketBody.username ?? ticket.username;
            ticket.price = ticketBody.price ?? ticket.price;

        }
        writeFile(this[tickets])
        return ticket;

    }
    /**
     * 
     * @param {string} username 
     * @param {{username:string,price:number}} ticketBody 
     * @returns {Ticket[]}
     */

    updateBulk(username, ticketBody) {
        const userTickets = this.findByUsername(username)
        const updatedTickets = userTickets.map(

            /**
             * 
             * @param {ticket} ticket 
             */
            (ticket) => this.updateById(ticket.id, ticketBody)
        )
        writeFile(this[tickets])
        return updatedTickets
    }
    /**
     * 
     * @param {string} ticketId 
     * @return {boolean}
     */
    deleteById(ticketId) {
        const index = this[tickets].findIndex(
            /**
             * @param {Ticket} ticket
             */
            (ticket) => ticket.id === ticketId
        )
        if (index === -1) {
            return false;
        } else {
            this[tickets].splice(index, 1)
            writeFile(this[tickets])
            return true;
        }


    }

    /**
     * 
     * @param {string} username 
     * @returns {boolean[]}
     */

    deleteBulk(username) {
        const userTickets = this.findByUsername(username)
        const deletedResult = userTickets.map(
            /**
             * @param {Ticket} ticket
             */
            (ticket) => (
                this.deleteById(ticket.id),
                writeFile(this[tickets])
            )
        );

        return deletedResult;
    }

    draw(winnerCount) {
        const winnerIndexes = new Array(winnerCount)

        let winnerIndex = 0;
        while (winnerIndex < winnerCount) {
            let ticketIndex = Math.floor(Math.random() * this[tickets].length)

            if (!winnerIndexes.includes(ticketIndex)) {
                winnerIndexes[winnerIndex++] = ticketIndex;
                continue
            }
        }

        const winners = winnerIndexes.map(
            /**
             * @param {number} index
             */
            (index) => this[tickets][index]
        );
        return winners
    }

}

const ticketCollection = new TicketCollection()
module.exports = ticketCollection