import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import DespesasPage from "../pages/despesas.page";

const despesas = new DespesasPage();

// ─── Givens ───────────────────────────────────────────────────────────────────
Given("que acesso a seção de despesas por favorecido", () => {
  despesas.visitFavorecido();
});

Given("que acesso a lista de consultas de despesas", () => {
  despesas.visitListaConsultas();
});

Given("que acesso a URL de despesas {string}", (url) => {
  cy.visit(url);
});

// ─── Thens ────────────────────────────────────────────────────────────────────
Then("devo visualizar a página de despesas", () => {
  cy.url().should("include", "despesas");
});

Then("devo ver o título da consulta na página", () => {
  despesas.getBody().should("contain.text", "Despesa");
});

Then("devo visualizar os filtros de consulta disponíveis", () => {
  despesas.getBody().should("contain.text", "Filtro");
});

Then("devo ver opções de consulta disponíveis", () => {
  despesas.getBody().should("contain.text", "Consulta");
});

