# language: pt

Funcionalidade: Consulta de Convênios e Parcerias no Portal da Transparência
  Como cidadão brasileiro
  Quero consultar convênios firmados pelo governo federal
  Para acompanhar os repasses de recursos públicos

  Contexto:
    Dado que acesso a página de consulta de convênios

  Cenário: Verificar que a página de convênios carrega corretamente
    Então devo ver o título da seção de convênios
    E devo ver o formulário de filtros disponível

  Cenário: Filtrar convênios por estado e verificar resultados
    Quando seleciono o estado "PB" no filtro de UF
    E clico no botão de consultar
    Então devo ver resultados de convênios na tabela

  Cenário: Verificar que a URL da página de convênios é a oficial
    Então a URL deve conter "convenios"
    E a URL deve conter "portaldatransparencia.gov.br"

  Esquema do Cenário: Filtrar convênios por diferentes estados
    Quando seleciono o estado "<uf>" no filtro de UF
    E clico no botão de consultar
    Então devo ver resultados de convênios na tabela

    Exemplos:
      | uf |
      | SP |
      | RJ |
      | MG |
      | PB |
