describe('test example USelect with cypress', () => {
  it('checks business layout passes accessibility (logged out)', () => {
    cy.visit('http://localhost:3000/USelectMenuExample')
    cy.wait(500)
    cy.injectAxe()

    cy.checkA11y({ exclude: ['.nuxt-devtools-panel-content']})
  })
})
