

describe("sample http put request",()=>{
    it("put call",()=>{
                       
    cy.request({

     method:'put',
     url:'https://reqres.in/api/users/2',
     body:{
        "name": "morpheus",
        "job": "zion resident"
    }

    
    })
    .its('status').should('equal',200)
    })
})
  