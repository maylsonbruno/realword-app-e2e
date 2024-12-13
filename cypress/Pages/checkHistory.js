class CheckHistory {
    selectorList(){
        const selector ={
           userList : "[data-test='transaction-list']",
           userReceive : "[data-test='transaction-receiver-zPExB8fdB']",
           dateButton : "[data-test='transaction-list-filter-date-range-button']",
           myHistory : "[data-test='nav-personal-tab']",
           returnTransactionButton : "[data-test='new-transaction-return-to-transactions']",
           noTransactions : "[data-test='empty-list-header']"
        }
        return selector
    }

    checkValidateTransaction(username,amountTransfer){
        cy.get(this.selectorList().returnTransactionButton).click()
        cy.get(this.selectorList().myHistory).click()
        cy.get(this.selectorList().userList).each(($element) => {
            if($element.eq(amountTransfer) && $element.eq(username)){
               cy.get(this.selectorList().userList)
            }
        })
    }

    checkValidateTransactionUserNoTransaction(){
        cy.get(this.selectorList().myHistory).click()
        cy.get(this.selectorList().noTransactions).contains('No Transactions')
    }
}
export default CheckHistory