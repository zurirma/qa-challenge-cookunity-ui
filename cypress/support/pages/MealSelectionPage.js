class MealSelectionPage {
    waitForMealSelectPageToLoad() {
        cy.intercept('GET', '**/en/meal-select**').as('pageLoaded');
        cy.wait('@pageLoaded');
      }
      
    verifyPageIsLoaded() {
        cy.get('[data-testid^="meal-card-"]').should('have.length.greaterThan', 1);
        cy.contains('Meal selected').should('be.visible');
        cy.contains('0/6').should('be.visible');
    }
  }
  
  export default new MealSelectionPage();