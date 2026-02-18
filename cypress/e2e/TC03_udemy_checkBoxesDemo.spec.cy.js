/// <reference types = "Cypress"/>

describe('Checkbox functionality', () => {

    it('Handling different checkboxes', () => {
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/')

        //vertical checkboxes
        cy.get('#checkbox-v-2a').should('not.be.checked').first().check({force: true})
        cy.get('#checkbox-v-2b').should('not.be.checked').check({force:true})
        cy.get('#checkbox-v-2c').should('not.be.checked').check({force:true})

        //modern horizontal checkboxes
        cy.get('#checkbox-h-2a').should('not.be.checked').check({force: true})
        cy.get('#checkbox-h-2b').should('not.be.checked').check({force:true})
        cy.get('#checkbox-h-2c').should('not.be.checked').check({force:true})

    })
})