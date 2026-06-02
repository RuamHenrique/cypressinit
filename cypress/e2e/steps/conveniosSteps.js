import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ConveniosPage from "../pages/convenios.page";

const convenios = new ConveniosPage();

// ─── Contexto ────────────────────────────────────────────────────────────────
Given("que acesso a página de consulta de convênios", () => {
  convenios.visit();
});

// ─── Cenário 1 ───────────────────────────────────────────────────────────────
Then("devo ver o título da seção de convênios", () => {
  convenios.getTitulo().should("contain.text", "Convênio");
});

Then("devo ver o formulário de filtros disponível", () => {
  convenios.getFiltroUF().should("contain.text", "Filtro");
});

// ─── Cenário 2 ───────────────────────────────────────────────────────────────
When("seleciono o estado {string} no filtro de UF", (uf) => {
  convenios.selecionarUF(uf);
});

When("clico no botão de consultar", () => {
  convenios.clicarConsultar();
});

Then("devo ver resultados de convênios na tabela", () => {
  convenios.getTabela().should("contain.text", "Convênio");
});

