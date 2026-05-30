Feature: Portal da Transparência

Scenario: Acessar página inicial do portal
  Given que acesso o Portal da Transparência
  Then devo visualizar a página principal

Scenario: Pesquisar por Bolsa Família
  Given que acesso o Portal da Transparência
  When pesquiso por "Bolsa Família"
  Then devo visualizar resultados da pesquisa

Scenario: Validar URL do portal
  Given que acesso o Portal da Transparência
  Then devo visualizar a URL oficial

Scenario Outline: Pesquisas no portal
  Given que acesso o Portal da Transparência
  When pesquiso por "<termo>"
  Then devo visualizar resultados da pesquisa

Examples:
| termo    |
| educação |
| saúde    |

Scenario: Pesquisar por aposentadoria
  Given que acesso o Portal da Transparência
  When pesquiso por "aposentadoria"
  Then devo visualizar resultados da pesquisa

Scenario: Pesquisar por benefícios sociais
  Given que acesso o Portal da Transparência
  When pesquiso por "benefícios sociais"
  Then devo visualizar resultados da pesquisa

Scenario Outline: Pesquisas adicionais no portal
  Given que acesso o Portal da Transparência
  When pesquiso por "<termo>"
  Then devo visualizar resultados da pesquisa

Examples:
| termo              |
| servidores         |
| orçamento          |
| programas sociais  |

Scenario: Verificar presença do campo de busca
  Given que acesso o Portal da Transparência
  Then devo visualizar o campo de pesquisa

Scenario: Validar carregamento do portal
  Given que acesso o Portal da Transparência
  Then devo visualizar elementos principais do portal