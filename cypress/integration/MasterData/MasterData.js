let waitTime = 0;
let token = '';
let accounPoolData;

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Master Data Test Suite', function () {

    // calls before every other test or it block
    // setting authentication token in local storage
    beforeEach(() => {
        if (token != '')
            cy.setLocalStorage('token', token);
    });

    // Login Test
    it('Login into application', function () {

        cy.fixture('Data-File').then(function (data) {
            this.data = data;
            cy.visit('baseUrl/Test');
            waitTime = this.data.configuration.waitTime;
            cy.wait(waitTime);
            cy.login(this.data.credentials.ClientId, this.data.credentials.username, this.data.credentials.password);

            const reqBody = { userName: "xyz", password: "123" };

            cy.request({
                method: 'POST',
                form: true,
                url: 'your Application Link',
                headers: {
                    'tenantID': 'ABC',
                },
                body: JSON.stringify(reqBody)
            }).then(response => {
                token = response.body.data.token;
                cy.setLocalStorage('token', token);
            })
        });
    })


    // Account Pool Tests
    context('Account Pool Tests', () => {
        
        it('Get List', () => {
            cy.AccountPoolList();
        })

        it('Create new record', () => {

            cy.fixture('./AccountPool').then(function (data) {
                accounPoolData = data.accountPool;
                cy.AccountPoolAdd(accounPoolData);
            })
        })

        it('Update existing record', () => {
            cy.AccountPoolUpdate(accounPoolData);
        })

        it('Copy record', () => {
            cy.AccountPoolCopy(accounPoolData);
        })

        it('Delete existing record', () => {
            cy.AccountPoolDelete(accounPoolData);
        })
    })

    // Remining Screens goes here
});