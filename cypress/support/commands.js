import "cypress-localstorage-commands";
import { ListAccountPool, AddAccountPool, UpdateAccountPool, CopyAccountPool, DeleteAccountPool } from './MasterDataCommand/AccountPoolCommand.js';


Cypress.Commands.add('login', (ClientId, username, password) => {

    cy.get('input#ClientID').type(ClientId)
    cy.get('input#Username').type(username)
    cy.get('input#Password').type(password)
    cy.get('div#app button[type="submit"]').click()

});

Cypress.Commands.add('AccountPoolList', () => {
    ListAccountPool();
});

Cypress.Commands.add('AccountPoolAdd', (accountPool) => {
    AddAccountPool(accountPool);
});

Cypress.Commands.add('AccountPoolUpdate', (accountPool) => {
    UpdateAccountPool(accountPool);
});

Cypress.Commands.add('AccountPoolCopy', (accountPool) => {
    CopyAccountPool(accountPool);
});

Cypress.Commands.add('AccountPoolDelete', (accountPool) => {
    DeleteAccountPool(accountPool);
});