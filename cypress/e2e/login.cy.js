describe('Login', () => {
  beforeEach(() => {
    //Arrange 
    cy.visit('http://localhost:4000')

  });
  it('Login com dados válidos - Acesso com Sucesso', () => {
    
    //Act 
    cy.get('#username').click().type('junior.lima')
    cy.get('#senha').click().type('123456')
    cy.contains('button','Entrar').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos - Visualizar mensagem erro', () => {
    
    //Act 
    cy.get('#username').click().type('junior.lima')
    cy.get('#senha').click().type('456987')
    cy.contains('button','Entrar').click()

    //Assert
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})