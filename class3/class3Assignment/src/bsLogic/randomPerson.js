const { faker } = require('@faker-js/faker');


const randomPerson = (selectedProperties) => {

    const person = {};
    if (selectedProperties.includes('firstName')) {
        person.firstName = faker.person.firstName()
    }
    if (selectedProperties.includes('lastName')) {
        person.lastName = faker.person.lastName()
    }
    if (selectedProperties.includes('email')) {
        person.email = faker.internet.email()
    }
    if (selectedProperties.includes('avatar')) {
        person.avatar = faker.internet.avatar()
    }
    if (selectedProperties.includes('age')) {
        person.age = faker.number.int({ min: 18, max: 65 })
    }
    if (selectedProperties.includes('address')) {
        person.address = faker.location.streetAddress()
    }

    return person;

}

module.exports = randomPerson