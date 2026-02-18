class HomePage{

    getYourFeed() {return 'Your Feed'}
    getGlobalFeed() {return 'Global Feed'}
    getHome() {return 'Home'}
    getNewPost() {return 'New Post'}
    getSettings() {return 'Settings'}

    checkYourFeedIsVisible(){
        cy.contains(this.getYourFeed()).should('be.visible')
    }

    clickGlobalFeed(){
        cy.contains(this.getGlobalFeed()).click()
    }

    clickHome(){
        cy.contains(this.getHome).click()
    }

    clickSettings(){
        cy.contains(this.getSettings()).click()
    }

    clickNewPost(){
        cy.contains(this.getNewPost()).click()

    }
}
export default HomePage