class DashboardPage{
    
    selectorList(){

      const selectors = {
       dashboardGridCreateUser : "[data-test='signup-title']",
       dashboardGridLogin : "[data-test='sidenav-username']",
       dashboardGridHomePage :'.MuiTypography-h5'

      }

      return selectors
   }

   locationDashboardNewUser(userName){
      cy.get(this.selectorList().dashboardGridCreateUser).contains(userName)
   }

   locationDashboardLogin(user){
      cy.get(this.selectorList().dashboardGridLogin).contains(user)
   }

   locationDashboardHomePage(){
      cy.get(this.selectorList().dashboardGridHomePage).contains('Sign in')
   }

}
export  default DashboardPage