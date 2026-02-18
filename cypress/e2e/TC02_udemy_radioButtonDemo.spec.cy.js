/// <reference types = "Cypress"/>

describe('Radio button functionality', () => {

    it('Handling different Radio buttons', () =>{
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/')
        cy.get(':nth-child(11) > form > .ui-controlgroup > .ui-controlgroup-controls > :nth-child(1) > .ui-btn').should('not.be.checked').click({force:true})
        cy.get(':nth-child(6) > form > :nth-child(2) > .ui-btn').should('not.be.checked').click({force:true})
        cy.get('#radio-choice-v-2c').should('not.be.checked').click({force:true})

        // Modern/ horizontal radio buttons
        cy.get(':nth-child(6) > form > :nth-child(1) > .ui-btn').should('not.be.checked').first().click({force:true})
        cy.get('#radio-choice-h-2b').should('not.be.checked').click({force:true})
        cy.get('#radio-choice-h-2c').should('not.be.checked').click({force:true})

    })
})

