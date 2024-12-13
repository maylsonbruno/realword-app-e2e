import userData from '../fixtures/user-data.json'
import DashboardPage from '../Pages/dashBoardPage'
import LoginPage from '../Pages/loginPage'

const loginPage = new LoginPage()
const dashboard = new DashboardPage()

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit('http://localhost:3000/signin')
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboard.locationDashboard(userData.userSuccess.username)
  })

  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas',()=>{
    cy.visit('http://localhost:3000/signin')
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
    loginPage.invalidLogin()
  })
})