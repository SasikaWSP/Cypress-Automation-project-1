describe('Fixture data functionality',function(){

   beforeEach(() =>{
    cy.fixture('ConduetLogin').as('data')
   })
 
    it('Login Test: valid credentials',function(){
        
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder="Email"]').type(this.data.email)
        cy.get('input[placeholder="Password"]').type(this.data.password)
        cy.get('button[type="submit"]').click() 
        
    })

    it('Login Test: invalid credentials',function(){
        cy.visit('https://react-redux.realworld.io/')
        cy.get('a[href="#login"]').click()
        cy.get('input[placeholder="Email"]').type(this.data.email)
        cy.get('input[placeholder="Password"]').type(this.data.invalidPwd)
        cy.get('button[type="submit"]').click()
        cy.get('.error-messages').should('contain', 'email or password is invalid')
    })
})