/// <reference types="Cypress" />
 
describe('Mock Testing',function(){

    beforeEach(function() {
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder="Email"]').type('cypressdemo@gmail.com')
        cy.get('input[placeholder="Password"]').type('cypressdemo')
        cy.get('button[type="submit"]').click()
    })
 
    it('Tag Mock - Conduit', function(){
        cy.intercept('GET', 'api/tags', {fixture: 'tags.json'})
            cy.contains('Your Feed').should('be.visible')
            cy.get('.tag-list').should('contain', 'cypress').and('contain', 'udemy').and('contain', 'course')
    })

    it('Articles Mock - conduit', function() {
        cy.intercept('GET', '/api/articles/*', {fixture: 'article.json'})
        cy.contains('Your Feed').should('be.visible')
        cy.contains('Global Feed').click()
        cy.get('.col-md-9').should('contain', 'Demo Mock test')
        
    })

    it('Login User Mock',function(){
        cy.intercept('POST','/api/users/login',{fixture:'login.json'})
        cy.get('a[href^="#@"]').should('contain','Vignesh-Udemy')
    })
})