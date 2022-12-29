/**
 * Clicks the provided class, it can be button, menu link, tab click, etc.
 *
 * @param className Element class name.
 */
export function customClick(className) {
    cy.get(className).click({ force: true })
}

/**
 * Sets text input value.
 *
 * @param className Element class name.
 * @param inputValue Input value to set to control.
 * @param clear A flag to clear input value set it true to clear control and set value to input or set false.
 * @param isUnique A flag to generate random input value set it true for unique value else false.
 * @param length no of characters.
 */
export function setTextInput(className, inputValue = '', clear = false, isUnique = false, length = 2) {
    if (clear)
        cy.get(className).clear();

    if (isUnique && length != 0) {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        cy.get(className).type(text, { force: true })
    }
    else {
        cy.get(className).type(inputValue, { force: true })
    }
}

/**
 * Sets text input value.
 *
 * @param clickClassName Element class name.
 * @param selectClassName Element class name.
 * @param inputValue Input value to set to control. No need to pass '{enter}' keyword it will be added automatically.
 * @param type Drop-down control type eg 1, 2 etc.
 */
export function setSelectInput(clickClassName, selectClassName, inputValue) {
    cy.get(clickClassName).click({ force: true })
    cy.get(selectClassName).type(inputValue + '{enter}', { delay: 500, })
}