
class HomePage {
    enterZipCode(zip) {
      cy.findByTestId('hero-vertical-slider-text-column').within(() => {
        cy.findByTestId('zipcode-form')
          .find('input')
          .should('exist')
          .should('be.visible')
          .should('not.be.disabled')
          .scrollIntoView()
          .and(($el) => {
            expect($el.prop('disabled')).to.be.false;
          })
          .type(`${zip}{enter}`);
      });
    }
  }
  
  export default new HomePage();
  