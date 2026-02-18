import SwagLoginPage from "./pages/swaggerPages/sLoginPage";

describe('Swagger Page Demo testing', function(){
    const sLoginPage = new SwagLoginPage()

    /*beforeEach(function(){
        cy.fixture('swagLoginData').as('data');
    })*/

    it('Swagger Page Test', function(){
        cy.visit('https://www.saucedemo.com/');
        sLoginPage.enterUserName('standard_user');
        //sLoginPage.enterPassword(this.sdata.password);
        //sLoginPage.clickLoginBtn();
    })
})