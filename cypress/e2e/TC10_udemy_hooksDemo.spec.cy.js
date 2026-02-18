/// <reference types = "cypress" />

describe('Hooks basics', () => {

    before(() => {
        cy.log('Before block')
    })

    beforeEach(() => {
        cy.log('Before Each block')
    })

    it('search item', () => {
        cy.log('This is Search item block')
    })
    
    it('Order item', () => {
        cy.log('This is Order item block')
    })

    it('Checkout item', () => {
        cy.log('This is checkout item block')
    })

    afterEach(() => {
        cy.log('After Each block')
    })

    after(() => {
        cy.log('After block')
    })

})