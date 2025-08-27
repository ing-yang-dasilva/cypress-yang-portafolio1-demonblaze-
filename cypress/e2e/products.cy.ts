/// <reference types="cypress" />

describe('Pruebas de productos y carrito', () => {
  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('Permite agregar un producto al carrito', () => {
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Product added');
    });
  });

  it('Debe mostrar el modal de Contact', () => {
    cy.contains('Contact').click();
    cy.get('#exampleModal').should('be.visible');
  });

  it('Debe mostrar el modal de About us', () => {
    cy.contains('About us').click();
    cy.get('#videoModal').should('be.visible');
  });
});