

/// response validation//===========


describe("post",()=>{
it("post call",()=>{
cy.request({
  
    method:'post',
    url:'https://reqres.in/api/users',
    body:{
        name: "morpheus",
        job: "leader"
    }

})
.then((response)=>{
    expect(response.status).to.eql(201)
    expect(response.status).to.equal(201)
    expect(response.status).to.eqls(201)

}) 
})
})













