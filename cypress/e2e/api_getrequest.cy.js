                                 //get request//

// link   https://reqres.in/api/users?page=2


//first we need to writew the describe block
describe("sample http get request",()=>{
    it("get call",()=>{
                       // for ant type of requrst we should call cy.request and inside we should be
                       //     pass parameter
    
                       // one is ===http method=== and another ====end point url==
    cy.request('GET','https://reqres.in/api/users?page=2')
                    // now we going to validate the status code
    .its('status')
    
    .should('equal',200);                

    
    
    })
    
    })