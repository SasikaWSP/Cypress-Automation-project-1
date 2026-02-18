

describe('Custome commands Demo', () => {
     
    beforeEach(() =>{
        cy.fixture('ConduetLogin').as('data')
       })

    it('Conduit Login - Valid credentials', function() {
        cy.conduitLogin(this.data.email, this.data.password)
        cy.contains('Settings').click()
        cy.contains('Or click here to logout.').click()
    })

    it('Conduit Login - Invalid credentials', function (){
        cy.conduitLogin(this.data.email, this.data.invalidPwd)
        cy.get('.error-messages').should('contain', 'email or password is invalid')
    })


})