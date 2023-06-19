/// <reference types="cypress"/>
import loginpage from '../pages/loginPage'
//import testData from '../fixtures/testData.json'

const login = new loginpage();
let testData;


describe('Login Functionality', () => {
    beforeEach(() => {
        // Load the fixture before each test
        cy.fixture('testData').then(function (data) {
            testData = data;
        })

    })

    it('Launch URL', () => {
        cy.visit(testData.URL);
    })
    it('Custom Command' , ()=>{
        cy.login(testData.URL,testData.Username,testData.Password);
    })
    it('Launch URL', () => {
        login.enterUsernameandPasssword(testData.Username, testData.Password);
    })
    it('Launch URL', () => {
        cy.visit(testData.URL);
    })
    it('Launch URL', () => {
        cy.visit(testData.URL);
    })
})