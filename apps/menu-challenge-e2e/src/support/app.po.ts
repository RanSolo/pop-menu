export const getGreeting = () => cy.get('h1');

export const getTitle = () =>
  cy.get(
    ':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > :nth-child(1) > .MuiTypography-root'
  );

export const getAddBtn = () =>
  cy.get('.MuiGrid-grid-xs-2 > .MuiButtonBase-root > .MuiButton-label');

export const getNewTitleInput = () =>
  cy.get(
    ':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
  );

export const getNewPriceInput = () =>
  cy.get(
    ':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
  );

export const getNewDescriptionInput = () =>
  cy.get(
    ':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
  );

export const getNewImageUrlInput = () =>
  cy.get(
    ':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input'
  );

export const getRemoveBtn = () =>
  cy.get(
    ':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > .MuiGrid-root > div > .MuiButtonBase-root'
  );

export const getDeleteBtn = () =>
  cy.get(
    '.MuiDialogActions-root > .MuiButton-containedPrimary > .MuiButton-label'
  );

export const getCancelBtn = () =>
  cy.get('.MuiDialogActions-root > :nth-child(1)');

export const getDescription = () =>
  cy.get(
    ':nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-container > :nth-child(3) > .MuiTypography-root'
  );
