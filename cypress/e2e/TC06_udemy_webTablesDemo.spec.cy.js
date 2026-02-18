/// <reference types = "Cypress" />

describe('Advanced UI elements', () => {
    const row = 1
    const col = 3
    it('WebTables Demo', () => {
        cy.visit('https://the-internet.herokuapp.com/tables')

        // check value present anywhere in the table
        cy.get('#table1').contains('td', 'http://www.jdoe.com').should('be.visible')

        // check value based on specific row and column
        cy.get(`#table1>tbody>tr:nth-child(${row})>td:nth-child(${col})`).contains('td', 'jsmith@gmail.com').should('be.visible')

        // check value based on a condition by iterating the table
        cy.get(`#table1>tbody>tr>td:nth-child(2)`).each(($ele, index,$list) => {
            const fname = $ele.text()
            if(fname.includes('Frank')){
                cy.get('#table1>tbody>tr>td:nth-child(4)').eq(index).then(function($due) {
                    const dueAmount = $due.text()
                    expect(dueAmount).to.equal('$51.00')
                })
            }
        })
    })
})
