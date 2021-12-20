declare namespace Cypress {
    interface Chainable {
        getIframe(frame_locator): Chainable<any>
        login(username: string, password: string): void
    }
}