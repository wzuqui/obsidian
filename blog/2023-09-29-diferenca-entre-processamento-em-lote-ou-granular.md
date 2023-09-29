---
title: Diferença entre processamento em lote ou granular
description: Algumas diferenças encontradas com o time de desenvolvimento entre processamento em lote ou granular
slug: diferenca-entre-processamento-em-lote-ou-granular
authors:
  - name: Willian Luis Zuqui
    title: Willian Luis Zuqui
    url: https://github.com/zuqui
    image_url: https://github.com/wzuqui.png
tags: [
    banco-de-dados,
    change-track,
    concorrencia,
    cursor,
    diferenca-entre-processamento-em-lote-ou-granular,
    efcore,
    granular,
    lock
    lote,
    select,
    selects,
    sql,
    transactions,
    worker,
    workers,
  ]
hide_table_of_contents: false
---

## Motivação

A motivação deste post é compartilhar algumas diferenças encontradas com o time de desenvolvimento entre processamento em lote ou granular. Com o objetivo de ajudar a entender qual a melhor forma de processar os dados.

Com o passar do tempo desenvolvendo aplicações `workers` que são aplicativos que processam dados em segundo plano, percebi que existem duas formas de processar os dados, em lote ou granular, com eles suas vantagens e desvantagens que serão abordadas neste post.

## Processamento em lote

O processamento em lote é quando você processa um conjunto de dados de uma vez só, por exemplo, você tem uma lista de 1000 usuários e precisa enviar um e-mail para cada um deles, você pode processar todos de uma vez só, ou seja, em lote.

## Processamento granular

O processamento granular é quando você processa um conjunto de dados de forma granular, ou seja, um por um, por exemplo, você tem uma lista de 1000 usuários e precisa enviar um e-mail para cada um deles, você pode processar um por um, ou seja, de forma granular.

## Tabela comparativa

| Processamento granular                                                            | Processamento em lote                                                                | Vantagem |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | :------: |
| Muito `selects` executados no banco de dados                                      | Menos selects executados no banco                                                    |   Lote   |
| `SQL` com menos parâmetros                                                        | `SQL` com acima de 2.100 parâmetros causam erros de execução                         | Granular |
| Caso aconteça um erro, você pode identificar em qual registro parou sua aplicação | Perde a `transactions` inteira do lote                                               | Granular |
| Salva o `cursor`/`posição` na qual o registro está seja ele com erro ou sucesso   | O `cursor` não consegue identificar o real problema, e salva o cursor somente no fim | Granular |
| Conseguimos identificar o tempo de processamento de cada registro                 | Conseguimos apenas a média de tempo para cada registro                               | Granular |
| Menos `concorrência` e `change track` no `efcore`                                 | Mais `concorrência` gerando mais `lock` no banco                                     | Granular |

> Placar final: Granular 6 x 1 com vantagem para o processamento granular

## Conclusão

Conforme for passando o tempo, e novas experiências forem surgindo, vou atualizando este post com novas informações. Mas por enquanto, a melhor forma de processar os dados é de forma granular.
