import { cyan } from "@material-ui/core/colors";

describe("Adds machine without errors", () => {
  it("Adds new entry without errors", () => {
    cy.visit("http://localhost:8000");
    cy.get(".app__nav--add").click();
    cy.get("#machineName")
      .click()
      .type("Integration Test Machine")
      .should("have.value", "Integration Test Machine");
    cy.get("#machineType")
      .click()
      .get("[data-value='MAC']")
      .click();
    cy.get("#machineHDD")
      .click()
      .get("[data-value='64']")
      .click();
    cy.get("button.MuiButtonBase-root").click();
    cy.wait(500);
    cy.get(".name")
      .last()
      .should("have.text", "Integration Test Machine");
  });
});
