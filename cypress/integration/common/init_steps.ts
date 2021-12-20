import { Given } from "cypress-cucumber-preprocessor/steps";

Given('the user has navigated to CoolHockey website homepage', () => {
    cy.fixture("credential").as("credential")
    cy.visit('/')
})