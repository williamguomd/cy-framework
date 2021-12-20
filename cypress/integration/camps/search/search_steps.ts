import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { HomePage } from "../../../src/pages/camps/homepage";


let homepage = new HomePage();

Given('the user has login to the homepage', () => {
    cy.get('credential').then((value: any) => {
        cy.login(value.QA.username, Buffer.from(value.QA.password, 'base64').toString('binary'));
    })
    homepage.click_submit();
})

When('the user click Canada then Ontario as location', (city, specific_city) => {
    cy.get('#lbl_ca').click()
    cy.get('#plabel_on').click()
})

When('the user hover onto Youth Activities', (check_in_date) => {
    cy.get('#nav-link-2').contains('Youth Activities').click({ force: true })
})
    

When('the user clicks Programs', (check_out_date) => {
    cy.get("#subnav_youth a[title='Programs']").click()
    cy.get('.content-news-slider').contains('Youth Hockey Programs').click()
    cy.get("#showmore").click()
    cy.get('#location-div').click()
    cy.get("select#location").select('Oakville', {force: true})
})

Then('should have more than one camps in the result page', () => {
    cy.get('div[data-block-id="hotel_list"]').should('have.length.greaterThan',1)
})