import { getGreeting } from '../support/app.po';

describe('big-raccoon', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Function helper example, see `../support/app.po.ts` file
    getGreeting().should('contain', 'Welcome big-raccoon');
  });
});
