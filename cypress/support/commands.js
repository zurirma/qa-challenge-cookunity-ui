Cypress.Commands.add('assertUrlContains', (expectedPath) => {
    cy.url().should('include', expectedPath);
  });

  
  
  

