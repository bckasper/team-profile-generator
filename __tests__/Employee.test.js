// Requiring the Employee object from the Employee.js
const Employee = require('../lib/Employee')

// Creating a new employee that will be used in these tests
// Employee object needs a name, ID, and email parameter
const newEmployee = new Employee('Cloud Strife', '44312', 'ffxvii@squaresoft.com')

// Below is the test to create an object and test the methods of getName, getID, getEmail, and getRole

// This test runs to see that the object creates an employee based on the parameters
describe('newEmployee', () => {

    it('Should return the object from the class constructor based on parameters input', () => {
        expect(newEmployee.name).toEqual('Cloud Strife')
        expect(newEmployee.id).toEqual('44312')
        expect(newEmployee.email).toEqual('ffxvii@squaresoft.com')
    })
})

// Test for the getName method
describe('getName()', () => {

    it('Should return the name value from the object', () => {
        expect(newEmployee.getName()).toEqual('Cloud Strife')
    })
})

// Test for the getId method
describe('getId()', () => {

    it('Should return the ID value from the object', () => {
        expect(newEmployee.getId()).toEqual('44312')
    })
})

// Test for the getEmail method
describe('getEmail()', () => {

    it('Should return the email value from the object', () => {
        expect(newEmployee.getEmail()).toEqual('ffxvii@squaresoft.com')
    })
})

// Test for the getRole method
describe('getRole()', () => {

    it('Should return the role value from the object', () => {
        expect(newEmployee.getRole()).toEqual('Employee')
    })
})