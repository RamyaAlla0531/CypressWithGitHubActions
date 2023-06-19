import locators from '../locators/loginPageLocators'

export default class LoginPage {
    enterUsernameandPasssword(username, password) {
        cy.get(locators.Username).type(username)
        cy.get(locators.Password).type(password)
        cy.get(locators.SignIn).click();
    }
}