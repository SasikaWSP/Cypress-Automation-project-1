class OrgAssignLeaves{
    getAssignLeaveTab() { return 'h6[class="oxd-text oxd-text--h6 orangehrm-main-title"]'}

    
    verifyAssignLeaveTab(){
        cy.get(this.getAssignLeaveTab()).contains('Assign Leave')
    }



}

export default OrgAssignLeaves