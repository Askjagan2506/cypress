




describe("sample http post request",()=>{
    it("post call",()=>{
                       
    cy.request({

     method:'post',
     url:'https://reqres.in/api/users',
     body:{
            "name": "morpheus",
            "job": "leader"
        }

    
    })
    .its('status').should('equal',201)
    })
})
  