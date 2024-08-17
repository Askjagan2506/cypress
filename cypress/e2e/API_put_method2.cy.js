
describe("sample http put request",()=>{
    it("put call",()=>{
                       
    const bodyvalue= {
        name: "morpheus",
        job: "zion resident"

    }
    cy.request({

     method:'put',
     url:'https://reqres.in/api/users/2',
     body:bodyvalue
    
    })
    .its('status').should('equal',200)
    })
})
  


