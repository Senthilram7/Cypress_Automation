describe("POST /login", () => {
    it("login as user", () => {
      cy.loginByApi("morpheus", "leader").then((response) => {
        expect(response.status).to.eq(201)
      })
    })
  })