import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import SettingsPage from "./pages/settingsPage";

describe('POM Demo test', function(){
    const landingPage = new LandingPage()
    const loginPage = new LoginPage()
    const homePage= new HomePage()
    const settingsPage = new SettingsPage()

    beforeEach(function(){
        cy.fixture('ConduetLogin').as('data')
    })

    it('Conduit login page using POM', function(){
        cy.visit('/')
        landingPage.clickSigninButton()
        loginPage.enterEmail(this.data.email)
        loginPage.enterPassword(this.data.password)
        loginPage.clickSigninButton()
        homePage.checkYourFeedIsVisible()
        homePage.clickSettings()
        settingsPage.clickLogoutButton()

    })

})