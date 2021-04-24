/* eslint-disable no-undef */
before(() => {
  cy.seedMediaData()
  cy.wait(3000)
})
after(() => {
  cy.restoreMediaData()
})
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
  it('Dummy test to force after to trigger if a test fails', () => {
    cy.get('body')
  })
})
