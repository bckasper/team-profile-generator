// // Requiring the engineer object from the Engineer.js
const Engineer = require('../lib/Engineer')

// Creating a new engineer that will be used in these tests
// Engineer object needs a name, ID, email, and github parameter
const newEngineer = new Engineer('Crash Bandicoot', '39203', 'ukauka@naughtydog.com', 'crashbandi')

// Below is the test to create an object and test the methods of getName, getID, getEmail, getRole, and getGithub

// This test runs to see that the object creates an engineer based on the parameters
describe('newEngineer', () => {

    it('Should return the object from the class constructor based on parameters input', () => {
        expect(newEngineer.name).toEqual('Crash Bandicoot')
        expect(newEngineer.id).toEqual('39203')
        expect(newEngineer.email).toEqual('ukauka@naughtydog.com')
        expect(newEngineer.github).toEqual('crashbandi')
    })
})

// Test for the getName method
describe('getName()', () => {

    it('Should return the name value from the object', () => {
        expect(newEngineer.getName()).toEqual('Crash Bandicoot')
    })
})

// Test for the getId method
describe('getId()', () => {

    it('Should return the ID value from the object', () => {
        expect(newEngineer.getId()).toEqual('39203')
    })
})

// Test for the getEmail method
describe('getEmail()', () => {

    it('Should return the email value from the object', () => {
        expect(newEngineer.getEmail()).toEqual('ukauka@naughtydog.com')
    })
})

// Test for the getRole method
describe('getRole()', () => {

    it('Should return the role value from the object', () => {
        expect(newEngineer.getRole()).toEqual('Engineer')
    })
})

// Test for the getGithub method
describe('getGithub()', () => {

    it('Should return the github value from the object', () => {
        expect(newEngineer.getGithub()).toEqual('crashbandi')
    })
})
