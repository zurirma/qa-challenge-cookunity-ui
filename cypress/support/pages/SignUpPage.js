class SignUpPage {
    accountExistedMessage = "There's an existing account with this email address";
    goToLogin() {
      const authUrl = Cypress.env('authUrl');
  
      cy.origin(authUrl, () => {
        cy.url().should('include', '/login');
        cy.get('[data-testid="signin-buttons-social"]').should('be.visible');
        cy.get('[data-testid="signin-buttons-social"]').within(() => {
          cy.get('[data-testid="login-form"]').should('be.visible').click();
        });
      });
    }
  
    signUpWithFallback(fallbackEmail) {
      const authUrl = Cypress.env('authUrl');
      const errorMsg = this.accountExistedMessage;
  
      cy.fixture('userData').then(({ defaultEmail, defaultPassword }) => {
        cy.origin(authUrl, { args: { fallbackEmail, defaultEmail, defaultPassword, errorMsg } }, ({ fallbackEmail, defaultEmail, defaultPassword, errorMsg }) => {
          cy.get('iframe[src*="solve-widget.forethought.ai"]').then(($iframe) => {
            if ($iframe.length) {
              $iframe.css('display', 'none');
            }
          });
  
          cy.get('[data-testid="email"]').should('be.visible').type(defaultEmail);
          cy.get('[data-testid="submit-email"]').should('be.visible').click();
  
          cy.contains(errorMsg, { timeout: 6000 }).then(() => {
            cy.get('[data-testid="email"]').clear().type(fallbackEmail);
            cy.get('[data-testid="submit-email"]').click();
  
            cy.get('[data-testid="password"]', { timeout: 8000 }).should('exist').and('be.visible');
            cy.get('[data-testid="password"]').type(defaultPassword);
            cy.get('[data-testid="submit-form"]').should('be.visible').click();
          });
        });
      });
    }
  }
  
  export default new SignUpPage();
  