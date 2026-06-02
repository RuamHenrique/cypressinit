class ConveniosPage {
  visit() {
    cy.visit("https://portaldatransparencia.gov.br/convenios/consulta");
  }

  getTitulo() {
    return cy.get("body");
  }

  getFiltroUF() {
    return cy.get("body");
  }

  selecionarUF(uf) {
    cy.contains("UF").should("exist");
  }

  clicarConsultar() {
    cy.contains("button", "Consultar", { matchCase: false })
        .click({ force: true });
  }

  getTabela() {
    return cy.get("body");
  }
}

export default ConveniosPage;