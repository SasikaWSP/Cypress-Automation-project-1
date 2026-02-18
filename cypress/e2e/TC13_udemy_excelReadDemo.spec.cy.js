describe('Excel read functionality',function(){
    
    var data;

    beforeEach(() =>{
     data = cy.task('readXlsx', {file:'cypress/fixtures/conduitData.xlsx', sheet: 'Sheet1'}).then((rows) =>{
        data = rows
     })

    })
  
     it('Login Test: valid credentials',function(){
         cy.visit('https://react-redux.realworld.io/')
         cy.get('a[href="#login"]').click()
         cy.get('input[placeholder="Email"]').type(data[0].UserName)
         cy.get('input[placeholder="Password"]').type(data[0].Password)
         cy.get('button[type="submit"]').click()
         
     })
 
     it('Login Test: invalid credentials',function(){
         cy.visit('https://react-redux.realworld.io/')
         cy.get('a[href="#login"]').click()
         cy.get('input[placeholder="Email"]').type(data[1].UserName)
         cy.get('input[placeholder="Password"]').type(data[1].Password)
         cy.get('button[type="submit"]').click()
         cy.get('.error-messages').should('contain', 'email or password is invalid')
     })
 })