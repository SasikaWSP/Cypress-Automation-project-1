class OrangeLogin{
    getUserName(){return 'input[name="username"]'} 
    getPassword(){return 'input[placeholder="Password"]'}
    getLoginBtn(){return 'button[type="submit"]'}

    enterUserName(orgusername){
        cy.get(this.getUserName()).type(orgusername)
    }

    enterPassword(orgpassword){
        cy.get(this.getPassword()).type(orgpassword)
    }

    clickLoginBtn(){
        cy.get(this.getLoginBtn()).click();
        cy.get('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('contain', 'Dashboard')
    }
}

export default OrangeLogin