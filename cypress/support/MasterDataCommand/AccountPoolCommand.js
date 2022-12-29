import { customClick, setTextInput } from '../../modules/UIComponents/Components.js';
import { ADD_BUTTON_CLASS, BUTTON_OPTIONS_CLASS, COPY_BUTTON_CLASS, DELETE_BUTTON_CLASS, MENU_CLASS, NEW_BUTTON_CLASS, UPDATE_BUTTON_CLASS, ALERT_MESSAGE } from '../constants.js';

export function ListAccountPool() {

    customClick(MENU_CLASS)
    customClick('div#MainmegaMenu div:nth-child(9) > ul > li:nth-child(5) > a')
    cy.wait(500)
    cy.get('div#mainContainer ul.pagination.flex-wrap > li:nth-child(2)').contains(/([1-9])\w+/)

}

export function AddAccountPool(accountPool) {
    cy.wait(500)
    customClick(MENU_CLASS)
    customClick('div#MainmegaMenu div:nth-child(9) > ul > li:nth-child(5) > a')
    customClick(NEW_BUTTON_CLASS)
    setTextInput('input#Name', accountPool.name, false, true, 6)
    cy.wait(1000)
    setTextInput('form#form_AccountPool div:nth-child(2) > div > input#Description', accountPool.description)
    cy.wait(1000)
    customClick(ADD_BUTTON_CLASS)
    cy.wait(1000)
    cy.get(ALERT_MESSAGE).contains('Success')
}

export function UpdateAccountPool(accountPool) {
    cy.wait(500)
    setTextInput('form#form_AccountPool div:nth-child(2) > div > input#Description', accountPool.description)
    customClick(UPDATE_BUTTON_CLASS)
    cy.get(ALERT_MESSAGE).contains('Success')
}

export function CopyAccountPool(accountPool) {
    cy.wait(500)
    customClick(BUTTON_OPTIONS_CLASS)
    customClick(COPY_BUTTON_CLASS)
    setTextInput('input#Name', accountPool.name, false, true,6)
    customClick(ADD_BUTTON_CLASS)
    cy.get(ALERT_MESSAGE).contains('Success')
}

export function DeleteAccountPool() {
    cy.wait(500)
    customClick(BUTTON_OPTIONS_CLASS)
    customClick(DELETE_BUTTON_CLASS)
    cy.get(ALERT_MESSAGE).contains('Success')
}