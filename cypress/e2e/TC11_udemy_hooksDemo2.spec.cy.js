describe('Hooks exercise conduit', () => {

    beforeEach(() => {
        cy.visit('https://react-redux.realworld.io/')
        cy.contains('Sign in').click()
        cy.get('input[type="email"]').type('cypressdemo@gmail.com')
        cy.get('input[type="password"]').type('cypressdemo')
        cy.get('button[type="submit"]').click()
    })

    it('Create new post', () => {
        cy.contains('New Post').click()
        cy.get('input[placeholder="Article Title"]').type('My first Demo Post')
        cy.get('input[placeholder="What\'s this article about?"]').type('Demo post for testing')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('This is a Demo post for testing')
        cy.get('input[placeholder="Enter tags"]').type('Demo')
        cy.get('button[type="button"]').click()

    })

    it('Verify newly created post', () => {
        cy.contains('Global Feed').click()
        cy.get('.article-preview:nth-child(1)').should('contain', 'My first Demo Post')


    })

    afterEach(() => {
        cy.contains('Settings').click()
        cy.contains('Or click here to logout.').click()
    })
})