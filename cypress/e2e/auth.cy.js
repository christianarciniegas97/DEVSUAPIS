import { login, signupUser } from "../services/authService";
import { generateRandomUser } from "../helpers/randomData";
import data from "../fixtures/data.json"

describe("Signup API - Services", () => {
  
  it("Create new user", () => {
    const user = generateRandomUser();
    cy.log("Request:", JSON.stringify(user))

    signupUser(user.username, user.password)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.empty;
          cy.log(`Response → body: ${JSON.stringify(response.body)} `)
          cy.log(`Response → status:${response.status}`)
      });
  })

  it("try to create a new existing user", () =>{
    signupUser(data.userRegistered.name, data.userRegistered.password).then((response) =>{
      expect(response.body.errorMessage).to.eq( "This user already exist.")
      cy.log(`message:${response.body.errorMessage}`)
    })
  })
})

describe("Login API - Services", () => {
  
  it("login with user registered", () => {
    cy.log("Request:", JSON.stringify(data.userRegistered))

    login(data.userRegistered.name, data.userRegistered.password )
      .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.include("Auth_token")

      const token = response.body.split("Auth_token: ")[1]
      expect(token).to.not.be.empty
      cy.log(`Response → token: ${token}`)
      cy.log(`Response → status: ${response.status}`)
      });
  })

  it("try to login with non register user", () =>{
    cy.log("Request:", JSON.stringify(data.nonExistentUser))

    login(data.nonExistentUser.name, data.nonExistentUser.password).then((response) =>{
      expect(response.status).to.eq(200)
      expect(response.body.errorMessage).to.eq( "User does not exist.")

      cy.log(`Response → status: ${response.status}`)
      cy.log(`Response → status: ${JSON.stringify(response.body)}`)

    }) 
  })

})