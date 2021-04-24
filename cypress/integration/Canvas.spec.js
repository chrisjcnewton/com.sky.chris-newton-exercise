describe('Some app', () => {
  it('should see a ligtning canvas', () => {
    cy.visit('http://localhost:8080')
    cy.get('canvas')
    // Take a snapshot
    cy.wait(3000)
    cy.get('body').toMatchImageSnapshot()
  })
})
