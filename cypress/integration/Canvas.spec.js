beforeEach(() => {
  cy.visit('http://localhost:8080')
})

describe('Media Selection view', () => {
  it('should see a ligtning canvas', () => {
    cy.get('canvas')
  })
  it('should hightlight 2nd media element', () => {
    cy.wait(3000)
    cy.get('body').trigger('keydown', { keyCode: 39 }) // tap right arrow
    cy.wait(3000)
    cy.get('body').toMatchImageSnapshot()
  })
})
