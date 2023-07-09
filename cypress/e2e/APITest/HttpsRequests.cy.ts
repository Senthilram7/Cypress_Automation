describe("HTTP Requests", ()=>{



it('Get call', () => {
    cy.request('GET','https://reqres.in/api/users?page=2').its('status').should('equal', 200);
  
  }) 

  it('Post Call', ()=> {

cy.request( {
method: 'POST',
url:'https://reqres.in/api/users',
body: {
  "page": 2,
  "per_page": 6,
  "total": 12,
  "total_pages": 2,
}
})

.its('status').should('equal',201);

})
})
