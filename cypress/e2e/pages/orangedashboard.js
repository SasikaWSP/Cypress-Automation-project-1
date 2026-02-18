class OrangeDashboard{
   
    getDashboard(){ return 'span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]' }
    getApplyLeaveBtn(){ return 'button[title="Apply Leave"]'}
    getAssignLeaveBtn() { return 'button[title="Assign Leave"]'}
    getLeaveListBtn() { return 'button[title="Leave List"]'}
    getTimesheetsBtn() { return 'button[title="Timesheets"]'}

    verifyDashboard(){
        cy.get(this.getDashboard()).should('be.visible');
    }

    clickApplyLeaveBtn(){
        cy.get(this.getApplyLeave()).click();
    }

    clickAssignLeaveBtn(){
        cy.get(this.getAssignLeaveBtn()).click();
    }

    clickLeaveListBtn(){
        cy.get(this.getLeaveListBtn()).click();
    }
    clickTimesheetsBtn(){
        cy.get(this.getTimesheetsBtn()).click();
    }
    

}

export default OrangeDashboard