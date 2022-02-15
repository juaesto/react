describe('Prueba de Cypress', () => {
    it('frontpage cap be opened', () => {
        cy.visit('http://localhost:3000');
        cy.contains('Learn React');
    })
})