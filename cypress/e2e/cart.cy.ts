describe('Verificaciones en el carrito', () => {
  
    
    // Esto se ejecuta antes de CADA prueba
  beforeEach(() => {
    cy.visit('/');
  });

it('Agregar items al carrito', () => {
    // Verificar que el sitio cargue correctamente
    cy.url().should('eq', 'https://www.demoblaze.com/');
    // vericar que el titulo de la pagina sea correcto
    cy.title().should('eq', 'STORE');
    // verificar elementos (logo)
    cy.get('#nava').should('contain.text', 'PRODUCT STORE');
    // verificar elementos (navbar)
    cy.get('#navbarExample').should('be.visible');
    // verificar elementos (productos en la pagina)
    cy.get('#tbodyid .card').should('exist');
 });











  });










