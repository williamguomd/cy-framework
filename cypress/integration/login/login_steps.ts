import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../../src/pages/camps/homepage";


let homepage = new HomePage();

When('the user enters username and password', () => {
    cy.get('credential').then((value: any) => {
        cy.wrap(value.QA.username).as('username');
        homepage.login(value.QA.username, Buffer.from(value.QA.password, 'base64').toString('binary'));
    })
})

When('the user clicks submit button', () => {
    homepage.click_submit();
})

Then('the user name should be presented on the screen', () => {
    cy.get('@username').then((username: any) => {
        cy.get('div span').contains(username).should('be.visible');
    })
})