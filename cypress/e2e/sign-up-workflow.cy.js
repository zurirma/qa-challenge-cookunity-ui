
import { generateUniqueEmail } from '../support/utils';
import HomePage from '../support/pages/HomePage';
import Quiz from '../support/pages/Quiz';
import PlanSelectionPage from '../support/pages/PlanSelectionPage';
import SignUpPage from '../support/pages/SignUpPage';
import MealSelectionPage from '../support/pages/MealSelectionPage';

describe('CookUnity - Sign up Workflow', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('should complete the meal selection flow and sign up successfully', () => {
    const fallbackEmail = generateUniqueEmail();

    cy.visit('/');
    HomePage.enterZipCode('10001');
    cy.assertUrlContains('/preferences-quiz');

    Quiz.skipAll();
    cy.assertUrlContains('/plan-select');

    PlanSelectionPage.selectSixMealPlan();

    SignUpPage.goToLogin();
    SignUpPage.signUpWithFallback(fallbackEmail);

    MealSelectionPage.waitForMealSelectPageToLoad();

    cy.assertUrlContains('/en/meal-select');
    MealSelectionPage.verifyPageIsLoaded();
    
  });
});
