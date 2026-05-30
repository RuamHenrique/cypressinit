class DespesasPage {
  visitFavorecido() {
    cy.visit("https://portaldatransparencia.gov.br/despesas/favorecido");
  }

  visitListaConsultas() {
    cy.visit("https://portaldatransparencia.gov.br/despesas/lista-consultas");
  }

  getBody() {
    return cy.get("body");
  }
}

export default DespesasPage;
