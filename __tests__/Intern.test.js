// Requiring the Intern object from the Intern.js
const Intern = require('../lib/Intern')

// Creating a new intern that will be used in these tests
// Intern object needs a name, ID, email, and school parameter
const newIntern = new Intern('Link', '49834', 'savezelda@nintenda.com', 'Skyloft Knights Academy')

// Below is the test to create an object and test the methods of getName, getID, getEmail, getRole and getSchool

// This test runs to see that the object creates an Intern based on the parameters
describe('newIntern', () => {

    it('Should return the object from the class constructor based on parameters input', () => {
        expect(newIntern.name).toEqual('Link')
        expect(newIntern.id).toEqual('49834')
        expect(newIntern.email).toEqual('savezelda@nintenda.com')
        expect(newIntern.school).toEqual('Skyloft Knights Academy')
    })
})

// Test for the getName method
describe('getName()', () => {

    it('Should return the name value from the object', () => {
        expect(newIntern.getName()).toEqual('Link')
    })
})

// Test for the getId method
describe('getId()', () => {

    it('Should return the ID value from the object', () => {
        expect(newIntern.getId()).toEqual('49834')
    })
})

// Test for the getEmail method
describe('getEmail()', () => {

    it('Should return the email value from the object', () => {
        expect(newIntern.getEmail()).toEqual('savezelda@nintenda.com')
    })
})

// Test for the getRole method
describe('getRole()', () => {

    it('Should return the role value from the object', () => {
        expect(newIntern.getRole()).toEqual('Intern')
    })
})

// Test for the getSchool method
describe('getSchool()', () => {

    it('Should return the school value from the object', () => {
        expect(newIntern.getSchool()).toEqual('Skyloft Knights Academy')
    })
})