
class PlanSelectionPage {
    selectSixMealPlan() {
      cy.findByTestId('plan-select-6-toggle').should('be.visible').click();
      cy.get('[data-testid="plan-select-continue-button"]').should('be.visible').click({ force: true });
    }
  }
  
  export default new PlanSelectionPage();
  