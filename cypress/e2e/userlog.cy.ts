describe('Verificaciones de la pagina principal', () => {
  // Esto se ejecuta antes de CADA prueba
  beforeEach(() => {
    cy.visit('/');
  });


  
  it('deberia poder registrarse', () => {
   cy.get('#signin2').click(); 
    cy.get('#sign-username').click();
    cy.get('#sign-username').type('345345345');
    cy.get('#sign-password').click();
    cy.get('#sign-password').type('123123123');

  });


  it('deberia poder logearse', () => {
    // Proceso completo de log-in con pass adecuadas
    cy.get('#login2').click();
    cy.get('#loginusername').click();
    cy.get('#loginusername').type('admin');
    cy.get('#loginpassword').click();
    cy.get('#loginpassword').type('admin');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
     // Esperar a que se cierre el modal y aparezca el nombre de usuario
    cy.get('#nameofuser', { timeout: 10000 }).should('contain.text', 'Welcome');
  });


it('deberia no poder logearse por datos incorrectos', () => {
    // Proceso completo de log-in por datos incorrectos
    cy.get('#login2').click();
    cy.get('#loginusername').click();
    cy.get('#loginusername').type('admin');
    cy.get('#loginpassword').click();
    cy.get('#loginpassword').type('motheregg');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    // Captura del alert nativo
    cy.on('window:alert', (text) => {
      expect(text).to.match(/User does not exist|Wrong password/);
  });


 });























     });