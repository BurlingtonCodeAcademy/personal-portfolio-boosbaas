describe("Learning, branching out to my portfolio page", () => {
    it("successfully loads", () => {
        cy.visit('/')
    })

    it( "has a poem link", ()=>{
        cy.get('.poem').click()
    })
        
    it("has a poem link", ()=> {
        cy.url().should('include', '/Poem')
    } )
   
})



//given visiting home page when about link clicked: go to about page
// '/Poem'