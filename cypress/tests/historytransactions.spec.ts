import LoginPage from '../Pages/loginPage'
import userData from '../fixtures/user-data.json'
import DashboardPage from '../Pages/dashBoardPage'
import SendMoney from '../Pages/sendMoney'
import CheckHistory from '../Pages/checkHistory'


const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const send = new SendMoney()
const check = new CheckHistory()



describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    cy.visit('http://localhost:3000/signin')
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
    dashboard.locationDashboard(userData.userSuccess.username)
    send.transferMoney(30,'transfer of R$ 10,00')
    check.checkValidateTransaction('Ruthie Prosa',30.00)
  })

  it.only('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    cy.visit('http://localhost:3000/signin')
    loginPage.loginWithUser('fqa','secret')
    check.checkValidateTransactionUserNoTransaction()
  })
})