# language: pt

Funcionalidade: Consulta de Despesas Públicas no Portal da Transparência
  Como cidadão brasileiro
  Quero acessar a seção de Despesas do Portal da Transparência
  Para consultar e verificar os gastos do governo federal

  Cenário: Acessar a página de consulta de despesas por favorecido
    Dado que acesso a seção de despesas por favorecido
    Então devo visualizar a página de despesas
    E devo ver o título da consulta na página

  Cenário: Verificar que a página de despesas carrega os filtros de consulta
    Dado que acesso a seção de despesas por favorecido
    Então devo visualizar os filtros de consulta disponíveis

  Cenário: Verificar que a lista de consultas de despesas está acessível
    Dado que acesso a lista de consultas de despesas
    Então devo ver opções de consulta disponíveis
    E a URL deve conter "despesas"

  Esquema do Cenário: Acessar diferentes seções de despesas e validar a URL
    Dado que acesso a URL de despesas "<pagina>"
    Então a URL deve conter "<fragmento>"

    Exemplos:
      | pagina                                              | fragmento       |
      | https://portaldatransparencia.gov.br/despesas/favorecido        | favorecido      |
      | https://portaldatransparencia.gov.br/despesas/lista-consultas   | lista-consultas |
      | https://portaldatransparencia.gov.br/despesas                   | despesas        |