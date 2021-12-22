Cypress.Commands.add('login', (username: string, password: string) => { 
    cy.findByText('Username').next().type(username)  
    cy.findByText('Password').next().type(password)  
})