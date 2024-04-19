describe('Test the message which displays when there are no logs in the time range selected', () => {
    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        
        // Cypress clears the local storage between each test.  
        // So we need to save it at the end of each test (see afterEach)
        // and then restore before each test (here). 
        cy.restoreLocalStorage() 
        cy.visit('/farm/fd2-barn-kit/seedingReport')
        cy.waitForPage()
    })

    afterEach(() => {
        // Save the local storage at the end of each test so 
        // that it can be restored at the start of the next 
        cy.saveLocalStorage()
    })
    
    //Gabe
    it('', () => {

    })

    //Maximo
    it('', () => {

    })

    //Spencer
    it('', () => {

    })
})