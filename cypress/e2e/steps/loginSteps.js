import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso o Portal da Transparência", () => {
    cy.visit("https://portaldatransparencia.gov.br/");
});

Then("devo visualizar a página principal", () => {
    cy.url().should("include", "portaldatransparencia");
});

When("pesquiso por {string}", (termo) => {
    cy.get('input[type="search"]').first().type(`${termo}{enter}`, { force: true });
});

Then("devo visualizar resultados da pesquisa", () => {
    cy.url().should("include", "busca");
});

Then("devo visualizar a URL oficial", () => {
    cy.url().should("include", "portaldatransparencia.gov.br");
});

Then("devo visualizar o campo de pesquisa", () => {
    cy.get('input[type="search"]').should("exist");
});

Then("devo visualizar elementos principais do portal", () => {
    cy.get("body").should("contain.text", "Portal");
});