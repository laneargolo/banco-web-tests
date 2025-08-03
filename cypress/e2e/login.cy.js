describe('template spec', () => {
  it('Login com dados válidos - Acesso com Sucesso', () => {
    //Arrange 
    cy.visit('http://localhost:4000')

    //Act 
    cy.get('#username').click().type('junior.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
})