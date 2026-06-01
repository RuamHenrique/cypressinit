# language: pt

Funcionalidade: Consulta de Receitas Públicas no Portal da Transparência

Como cidadão brasileiro
Quero consultar informações relacionadas às receitas públicas
Para verificar dados de arrecadação

Cenário: Acessar o Portal da Transparência
Dado que acesso o Portal da Transparência
Então devo visualizar a página principal

Cenário: Pesquisar por receitas públicas
Dado que acesso o Portal da Transparência
Quando pesquiso por "receitas públicas"
Então devo visualizar resultados da pesquisa

Cenário: Pesquisar por arrecadação federal
Dado que acesso o Portal da Transparência
Quando pesquiso por "arrecadação federal"
Então devo visualizar resultados da pesquisa

Esquema do Cenário: Pesquisas relacionadas a receitas
Dado que acesso o Portal da Transparência
Quando pesquiso por "<termo>"
Então devo visualizar resultados da pesquisa

```
Exemplos:
  | termo                    |
  | receita líquida          |
  | arrecadação tributária   |
```
