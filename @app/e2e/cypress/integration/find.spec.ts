/// <reference types="cypress" />
describe("find* dom-testing-library commands", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5678/");
  });

  it("Find the only label", () => {
    cy.findByText(/Home Page/i).should("exist");
  });

  it("Finds the only Text Link", () => {
    cy.findByRole("link", { name: /Go to About/i }).should("exist");
  });
});

/* global cy */
