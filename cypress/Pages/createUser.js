class CreateUser {
    selectorList(){
      const selectors = {
           accessCreateUser : "[data-test='signup']",
           firstName: "[data-test='signup-first-name']",
           lastName: "[data-test='signup-last-name']",
           userNameField : "[data-test='signup-username']",
           passwordField : "[data-test='signup-password']",
           confirmPassword : "[data-test='signup-confirmPassword']",
           buttonCreateUser : "[data-test='signup-submit']",
           wrongFirstName : "[data-test='signup-first-name']",
           wrongLastName : "[data-test='signup-last-name']",
           wrongUserName : '#firstName',
           wrongPassword : "[data-test='signup-password']",
           wrongConfirmPassword : "[data-test='signup-confirmPassword']"
         
      }
      return selectors
    }
    createNewUser(newFirstName,newLastName,userName,password){
        cy.get(this.selectorList().accessCreateUser).click()
       cy.get(this.selectorList().firstName).type(newFirstName)
        cy.get(this.selectorList().lastName).type(newLastName)
        cy.get(this.selectorList().userNameField).type(userName)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().confirmPassword).type(password)
        cy.get(this.selectorList().buttonCreateUser).click({force:true})
    }
    validateFields(){
        cy.get(this.selectorList().accessCreateUser).click()
       // cy.get(this.selectorList().firstName).type(newFirstName)
        cy.get(this.selectorList().lastName).type('testelast')
        cy.get(this.selectorList().userNameField).type('testename')
        cy.get(this.selectorList().passwordField).type('secret')
        cy.get(this.selectorList().confirmPassword).type('secret')
        cy.get(this.selectorList().wrongFirstName)
        cy.get(this.selectorList().wrongLastName)
        cy.get(this.selectorList().wrongUserName)
        cy.get(this.selectorList().wrongPassword)
        cy.get(this.selectorList().wrongConfirmPassword)
    }
}
export default CreateUser