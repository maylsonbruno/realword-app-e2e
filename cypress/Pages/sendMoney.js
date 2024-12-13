class SendMoney{
    selectorList(){
        const selectors = {
           buttonNew : "[data-test='nav-top-new-transaction']",
           userList : "[data-test='user-list-item-_XblMqbuoP']",
           amount : "[data-test='transaction-create-amount-input']",
           addNote : "[data-test='transaction-create-description-input']",
           payValue : "[data-test='transaction-create-submit-payment']",
           requestValue : "[data-test='transaction-create-submit-request']",
           messageOperation: ".css-1hbmzt3-MuiGrid-root",
           amountAccount : "[data-test='sidenav-user-balance']"
        }
        return selectors
    }

    transferMoney(amountValue, description){
        cy.get(this.selectorList().buttonNew).click()
        cy.get(this.selectorList().userList).click()
        cy.get(this.selectorList().amount).type(amountValue)
        cy.get(this.selectorList().addNote).type(description)
        cy.get(this.selectorList().payValue).click()
        cy.get(this.selectorList().messageOperation)
      
    }

    validateAccountAmount(){
        cy.get(this.selectorList().amountAccount).eq(0.00)
    }
}
export default SendMoney