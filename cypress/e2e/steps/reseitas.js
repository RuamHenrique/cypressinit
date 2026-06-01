import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a seção de receitas", () => {
    cy.visit("https://portaldatransparencia.gov.br/receitas");
});

Then("devo visualizar a página de receitas", () => {
    cy.url().should("include", "receitas");
});

Then("devo ver o título da consulta de receitas", () => {
    cy.get("body").should("contain.text", "Receitas");
});

Then("devo visualizar os filtros de receitas disponíveis", () => {
    cy.get("body").should("contain.text", "Filtro");
});

Given("que acesso a lista de consultas de receitas", () => {
    cy.visit("https://portaldatransparencia.gov.br/receitas");
});

Then("devo ver opções de consulta de receitas", () => {
    cy.get("body").should("contain.text", "Receitas");
});

Then("a URL deve conter {string}", (fragmento) => {
    cy.url().should("include", fragmento);
});

Given("que acesso a URL de receitas {string}", (pagina) => {
    cy.visit(pagina);
});