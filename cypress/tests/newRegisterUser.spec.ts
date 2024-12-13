import DashboardPage from '../Pages/dashBoardPage'
import LoginPage from '../Pages/loginPage'
import CreateUser from '../Pages/createUser'
import userData from '../fixtures/user-data.json'

const loginPage = new LoginPage()
const dashboard = new DashboardPage()
const create = new CreateUser()


describe('Registro de novo usuário com sucesso', () => {
  it.only('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit('http://localhost:3000/signin')
     create.createNewUser('first','Last','TesteCreateUSER','secret')
     dashboard.locationDashboardHomePage()
     loginPage.loginWithUser('TesteCreateUSER','secret')
     dashboard.locationDashboardLogin('@TesteCreateUSER')
     
    
  })

  it('Deve exibir mensagens de erro ao tentar registrar um novo usuario sem preencher todas as informações',()=>{
    cy.visit('http://localhost:3000/signin')
    create.validateFields()
    create.createNewUser('first','Last','first@','secret')
    dashboard.locationDashboardNewUser('Sign Up')
    loginPage.loginWithUser('first@','secret')
    dashboard.locationDashboardLogin('first@')
   
    

  })
})