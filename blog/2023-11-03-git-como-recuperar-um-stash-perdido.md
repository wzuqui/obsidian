---
title: Como recuperar um stash perdido no Git?
description: Aprenda como recuperar um stash perdido no Git e restaurar as alterações importantes que você pode ter arquivado.
slug: git-como-recuperar-um-stash-perdido
authors:
  - name: Willian Luis Zuqui
    title: Willian Luis Zuqui
    url: https://github.com/zuqui
    image_url: https://github.com/wzuqui.png
tags: [git, git-como-recuperar-um-stash-perdido, stash]
hide_table_of_contents: false
---

# Como recuperar um estoque perdido no Git?

## 1. Encontre o stash

```bash
git log --graph --oneline --decorate $(git fsck --no-reflog | awk '/dangling commit/ {print $3}')
```

_Isso mostrará todos os commits nas pontas do seu gráfico de commit que não são mais referenciados por nenhum branch ou tag – cada commit perdido, incluindo cada stash commit que você já criou, estará em algum lugar desse gráfico_

## 2. Depois de saber o hash do commit desejado, você pode aplicá-lo como um stash

```bash
git stash apply SEU_WIP_COMMIT_HASH_AQUI
```

_**Nota:** A mensagem de commit só estará neste formato (começando com "WIP on") se você não forneceu uma mensagem quando fez git stash._

**Fonte:** Veja a resposta completa em https://stackoverflow.com/a/91795/2510591

## 3. Se o seu stash commit não estiver listado ou você não o encontrar (opcional)

Se o seu stash já foi aplicado, mas você não o vê, por exemplo, após resolver um conflito ou reiniciar. Siga esses passos:

- Execute `bash git fsck --no-reflog | awk '/dangling commit/ {print $3}'`
- Escolha um hash de commit stash e use `git show COMMIT_HASH` para examinar o stash commit diff de suas alterações.
- Depois de encontrar suas alterações, basta usar o commit correspondente das alterações do seu stash e aplicá-lo usando `git stash apply COMMIT_HASH`.
