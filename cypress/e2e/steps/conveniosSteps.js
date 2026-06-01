import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ConveniosPage from "../pages/convenios.page";

const convenios = new ConveniosPage();

// ─── Contexto ────────────────────────────────────────────────────────────────
Given("que acesso a página de consulta de convênios", () => {
  convenios.visit();
});

// ─── Cenário 1 ───────────────────────────────────────────────────────────────
Then("devo ver o título da seção de convênios", () => {
  convenios.getTitulo().should("exist");
  cy.title().should("include", "Convênios");
});

Then("devo ver o formulário de filtros disponível", () => {
  convenios.getFiltroUF().should("exist");
});

// ─── Cenário 2 ───────────────────────────────────────────────────────────────
When("seleciono o estado {string} no filtro de UF", (uf) => {
  convenios.selecionarUF(uf);
});

When("clico no botão de consultar", () => {
  convenios.clicarConsultar();
});

Then("devo ver resultados de convênios na tabela", () => {
  convenios.getTabela().should("exist");
  convenios.getTabela().find("tr").should("have.length.greaterThan", 1);
});

// ─── Cenário 3 ───────────────────────────────────────────────────────────────
Then("a URL deve conter {string}", (trecho) => {
  cy.url().should("include", trecho);
});
 cypress/e2e/steps/ConveniosSteps.js