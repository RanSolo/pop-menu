import { getGreeting, getTitle } from '../support/app.po';

describe('menu-challenge', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to menu-challenge!');
  });
  it('should display a menu item title', () => {
    // // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    getTitle().contains('Shrimp and Chorizo Paella');
  });
});
