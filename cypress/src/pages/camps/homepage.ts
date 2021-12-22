import BasePage from "../BasePage";

export default class HomePage extends BasePage {
    readonly LOCATOR = {
        USER_NAME: 'Username',
        PASSWORD: 'Password',
        SUBMIT_BUTTON: {tag: 'form button', text: 'Login Here'}
    }

    public login(username: string, password: string) {
        cy.contains(this.LOCATOR.USER_NAME).next().type(username);
        cy.contains(this.LOCATOR.PASSWORD).next().type(password);
    }

    public click_submit() {
        cy.get(this.LOCATOR.SUBMIT_BUTTON.tag).get('[type=submit]')
            .contains(this.LOCATOR.SUBMIT_BUTTON.text)
            .click();
    }
}