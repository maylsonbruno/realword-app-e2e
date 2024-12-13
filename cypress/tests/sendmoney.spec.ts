import LoginPage from '../Pages/loginPage'
import userData from '../fixtures/user-data.json'
import DashboardPage from '../Pages/dashBoardPage'
import SendMoney from '../Pages/sendMoney'


const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const send = new SendMoney()

describe('Enviar dinheiro com saldo suficiente', () => {
  it.only('deve enviar dinheiro com sucesso', () => {
    cy.visit('http://localhost:3000/signin')
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboard.locationDashboard(userData.userSuccess.username)
    send.transferMoney(10,'transfer of R$ 10,00')
  })

  //Sistema permitindo transferencia sem saldo
  it('deve exibir mensagem de erro ao enviar dinheiro com saldo suficiente', () => {
    cy.visit('http://localhost:3000/signin')
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboard.locationDashboard(userData.userSuccess.username)
    send.validateAccountAmount()
    send.transferMoney(10,'transfer of R$ 10,00')
  })
})