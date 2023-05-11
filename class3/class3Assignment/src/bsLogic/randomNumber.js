
const RandomNumber = (start, end) => {

    if (typeof start !== 'number') {
        return error = 'start is not number'
    } else if (typeof end !== 'number') {
        return error = 'end is not a number'
    } else {

        const result = Math.floor(Math.random() * (start - end) + end);
        return result
    }
}
module.exports = RandomNumber

