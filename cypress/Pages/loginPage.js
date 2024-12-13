class LoginPage {
   selectorList(){
    const selectors = {
        usernameField:"[data-test='signin-username']",
        passwordField: "[data-test='signin-password']",
        loginButton : "[type='submit']",
        wrongCredentialAlert : "[data-test='signin-error']",
        logoutUser: "[data-test='sidenav-signout']"
    }
    return selectors
   }

   loginWithUser(username,password){
    cy.get(this.selectorList().usernameField).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().loginButton).click({force:true})
   }

   invalidLogin(){
    cy.get(this.selectorList().wrongCredentialAlert)
  }
}
export default LoginPage