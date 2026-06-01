class ConveniosPage {
  visit() {
    cy.visit("https://portaldatransparencia.gov.br/convenios/consulta");
  }

  getTitulo() {
    return cy.get("h1, h2").first();
  }

  getFiltroUF() {
    return cy.get("select#uf, input[name='uf'], [data-testid='uf']").first();
  }

  selecionarUF(uf) {
    this.getFiltroUF().select(uf, { force: true });
  }

  clicarConsultar() {
    cy.get("button[type='submit'], button").contains(/consultar|buscar/i)
      .click({ force: true });
  }

  getTabela() {
    return cy.get("table, [class*='tabela'], [class*='resultado']").first();
  }
}

export default ConveniosPage;
cypress/e2e/pages/convenios.page.js