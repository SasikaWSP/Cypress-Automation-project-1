import OrangeLogin from "./pages/orangeLogin";
import OrangeDashboard from "./pages/orangedashboard";
import OrgAssignLeaves from "./pages/orangeAssignLeave";

describe('Orange HRM page', function(){

    const orangeLogin = new OrangeLogin();
    const orangedashboard = new OrangeDashboard();
    const orangeAssignLeave = new OrgAssignLeaves();

    it('Orange HRM page POM', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        orangeLogin.enterUserName('Admin');
        orangeLogin.enterPassword('admin123');
        orangeLogin.clickLoginBtn();
        orangedashboard.verifyDashboard();
        //orangedashboard.clickApplyLeaveBtn();
        //orangedashboard.selectLeaveTypeDropDwn();
        orangedashboard.clickAssignLeaveBtn();
        orangeAssignLeave.verifyAssignLeaveTab();
    })
})