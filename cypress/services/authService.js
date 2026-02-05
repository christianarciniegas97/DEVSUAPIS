export function signupUser(username,password ) {
  return cy.request({
    method: "POST",
    url: "/signup",
    body: {
      username,
      password
    },
    failOnStatusCode: false
  })
}

export function login(username,password ) {
  return cy.request({
    method: "POST",
    url: "/login",
    body: {
      username,
      password
    },
    failOnStatusCode: false
  })
}
