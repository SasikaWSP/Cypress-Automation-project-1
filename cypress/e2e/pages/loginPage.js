class LoginPage{
    getEmail(){return 'input[placeholder="Email"]'}
    getPassword(){return 'input[placeholder="Password"]'}
    getSigninButton(){return 'button[type="submit"]'}

    enterEmail(email){
        cy.get(this.getEmail()).type(email)
    }

    enterPassword(password){
        cy.get(this.getPassword()).type(password)
    }

    clickSigninButton(){
        cy.get(this.getSigninButton()).click()
    }
}

export default LoginPage