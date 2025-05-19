
class Quiz {
    skipAll() {
      cy.waitUntil(() =>
        cy.document().then((doc) => {
          const btn = doc.querySelector('[data-testid="preferences-quiz-skip-all-button"]');
          return (
            btn &&
            btn.offsetParent !== null &&
            !btn.disabled &&
            window.getComputedStyle(btn).display !== 'none'
          );
        }), {
          timeout: 8000,
          interval: 200,
        }
      );
  
      cy.get('iframe[src*="solve-widget.forethought.ai"]').then(($iframe) => {
        $iframe.css('display', 'none');
      });
  
      cy.findByTestId('preferences-quiz-skip-all-button').click({ force: true });
    }
  }
  
  export default new Quiz();
  