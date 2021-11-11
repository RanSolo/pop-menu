import {
  getNewDescriptionInput,
  getNewImageUrlInput,
  getNewPriceInput,
  getNewTitleInput
} from '../support/app.po';

import {
  getRemoveBtn,
  getGreeting,
  getTitle,
  getCancelBtn,
  getDeleteBtn
} from '../support/app.po';

describe('menu-challenge', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains("Welcome to Dylan's Diner!");
  });

  it('should display a menu item title', () => {
    // // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    getTitle().contains('Shrimp and Chorizo Paella');
  });

  it('should confirm and delete', () => {
    getTitle().contains('Shrimp and Chorizo Paella');
    getRemoveBtn().first().click();
    cy.contains('Confirm Delete').should('exist');

    getCancelBtn().first().click();
    getTitle().contains('Shrimp and Chorizo Paella');
    //   cy.wait(3400);
    cy.contains('Confirm Delete').should('not.exist');
    getRemoveBtn().first().click();
    getDeleteBtn().first().click();
    getTitle().contains('Shrimp and Chorizo Paella').should('not.exist');
  });

  it('should add new Item', () => {
    cy.contains('Add Item').click();
    cy.contains('Add Menu Item').should('exist');
    getNewTitleInput().type('Cheeseburger');
    getNewPriceInput().type('12.99');
    getNewDescriptionInput().type(
      'A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty. ... As with other hamburgers, a cheeseburger may include toppings such as lettuce, tomato, onion, pickles, bacon, mayonnaise, ketchup, and mustard.'
    );

    getNewImageUrlInput().type(
      'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg'
    );
    cy.get(
      '.MuiGrid-grid-xs-3 > .MuiButtonBase-root > .MuiButton-label'
    ).click();
    getTitle().contains('Cheeseburger');
    // getCancelBtn().first().click();
    // getTitle().contains('Shrimp and Chorizo Paella');
    // //   cy.wait(3400);
    // cy.contains('Confirm Delete').should('not.exist');
    // getRemoveBtn().first().click();
    // getDeleteBtn().first().click();
    // getTitle().contains('Shrimp and Chorizo Paella').should('not.exist');
  });
});
