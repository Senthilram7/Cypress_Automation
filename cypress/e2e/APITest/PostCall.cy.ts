describe("API Testing", ()=>{



    it('Approach using fixtures', () => {
       
        cy.fixture('users').then((data)=>{
        const requestBody=data;

        cy.request( 
            {
method: 'POST',
url: 'https://reqres.in/api/users',
body: requestBody

            }).then ((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.name).to.eq(requestBody.name)
                expect(response.body.job).to.eq(requestBody.job)
            })

/*expect(response.status).to.eq(201)
expect(response.body.name).to.eq("morpheus")
expect(response.body.job).to.eq("leader")*/

            }

        )
      
      }) 

    })