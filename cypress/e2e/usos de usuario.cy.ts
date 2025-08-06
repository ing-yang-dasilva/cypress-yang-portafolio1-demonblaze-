//test para probar funcionalidades
describe('Funcionalidades', () => {
  
    
   it('deberia poder hacer una compra', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').click();
    cy.get('#loginusername').type('admin');
    cy.get('#loginpassword').click();
    cy.get('#loginpassword').type('admin');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('a[href="prod.html?idp_=1"]').first().click();
    cy.get('[onclick="addToCart(1)"]').first().click();
    cy.get('#cartur').click();
    cy.get('.col-lg-1 > .btn').click();
    cy.get('#name').type('Armando');
    cy.get('#country').type('Venezuela');
    cy.get('#city').type('Petare');
    cy.get('#card').type('123321233421');
    cy.get('#month').type('Marzo');
    cy.get('#year').type('2025');
    cy.get('[onclick="purchaseOrder()"]').first().click();

  });

























    });