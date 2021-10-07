// Requiring the Manager object from the Manager.js
const Manager = require('../lib/Manager')

// Creating a new Manager that will be used in these tests
// Manager object needs a name, ID, email and office number parameter
const newManager = new Manager('Mario', 'numba 1', 'plumberboy@pipedreams.com', 'Castle 1-4')

// Below is the test to create an object and test the methods of getName, getID, getEmail, and getRole

// This test runs to see that the object creates an Manager based on the parameters
describe('newManager', () => {

    it('Should return the object from the class constructor based on parameters input', () => {
        expect(newManager.name).toEqual('Mario')
        expect(newManager.id).toEqual('numba 1')
        expect(newManager.email).toEqual('plumberboy@pipedreams.com')
        expect(newManager.officeNumber).toEqual('Castle 1-4')
    })
})

// Test for the getName method
describe('getName()', () => {

    it('Should return the name value from the object', () => {
        expect(newManager.getName()).toEqual('Mario')
    })
})

// Test for the getId method
describe('getId()', () => {

    it('Should return the ID value from the object', () => {
        expect(newManager.getId()).toEqual('numba 1')
    })
})

// Test for the getEmail method
describe('getEmail()', () => {

    it('Should return the email value from the object', () => {
        expect(newManager.getEmail()).toEqual('plumberboy@pipedreams.com')
    })
})

// Test for the getRole method
describe('getRole()', () => {

    it('Should return the role value from the object', () => {
        expect(newManager.getRole()).toEqual('Manager')
    })
})