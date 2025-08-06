describe('Verificaciones de la pagina principal', () => {
  
    
    // Esto se ejecuta antes de CADA prueba
  beforeEach(() => {
    cy.visit('/');
  });

   
  it('Verificaciones de carga en pagina principal', () => {
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
  
  it('Debe mostrar los elementos del navbar', () => {
    // Verificar que existan y estén visibles
    cy.contains('Home').should('be.visible');
    //Verifica contact
    cy.get(':nth-child(2) > .nav-link').should('be.visible');
    //Verifica about us
    cy.get(':nth-child(3) > .nav-link').should('be.visible');
    //Verifica cart
    cy.get('#cartur').should('be.visible');
    //Verifica log in
    cy.get('#login2').should('be.visible');
    //Verifica sign up
    cy.get('#signin2').should('be.visible');
  });












   });