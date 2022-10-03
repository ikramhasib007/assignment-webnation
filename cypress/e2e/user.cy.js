
describe('User', () => {
  it('Should create an user', () => {
    const name = 'Ikram Ud Daula'
    cy.visit('/')
    cy.findByRole('button', {  name: /add/i}).click()
    cy.findByTestId('name').type(name)
    cy.findByTestId('email').type('ikramhasib007@gmail.com')
    cy.findByTestId('phone').type('01911281882')
    cy.findByTestId('add-user').click()

    cy.contains(':nth-child(1) > h2', name).should('be.visible')
  })
})