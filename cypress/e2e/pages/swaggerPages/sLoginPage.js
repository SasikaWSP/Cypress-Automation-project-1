class SwagLoginPage{
    getUserName() {return 'input[id="user-name"]'}
    getPassword() {return 'input[id="password"]'}
    getLoginBtn() {return '#login-button'}

    enterUserName(susername){
        cy.get(this.getUserName()).type(susername);
    }

    enterPassword(password){
        cy.get(this.getPassword()).type(password);
    }

    clickLoginBtn(){
        cy.get(this.getLoginBtn()).click();
    }

}
export default SwagLoginPage