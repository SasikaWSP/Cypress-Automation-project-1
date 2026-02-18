/// <reference types = "Cypress" />

describe('Dropdown functionality', () => {
    it('Handling static dropdown', () => {
        cy.visit('https://seleniumbase.io/demo_page')
        cy.get('#mySelect').select('Set to 50%').should('have.value', '50%')
    })

    it('Handling Dynamic dropdown', () => {
        cy.visit('https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx')
        cy.get('#ctl00_ContentPlaceholder1_RadDropDownProducts').click()
        cy.get('.rddlItem').contains('Aniseed Syrup').click()
    })

    it('Handling multi-select dropdown', () => {
        cy.visit('https://demo.mobiscroll.com/select/multiple-select')
        cy.get('#multiple-select-input').click({force: true})
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Books').click()
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Health & Beauty').click()
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Clothing & Jewelry').click()
    })
})