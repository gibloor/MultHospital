/// <reference types="cypress" /> 
describe('login and logout', () => {
  it('login', () => {
    cy.visit('/');
    cy.getByCy('username');
    // cy.getByTestId('submit').click();
  })
});