# Introdução a Back-end

Diferença entre o ambiente de desenvolvimento e produção.

- Mostrar vídeo do Akita
- Nesse vídeo vamos listar todas tecnologias mencionados
- Equalizar a equipe

<iframe
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen
  frameborder="0"
  height="315"
  src="https://www.youtube.com/embed/KyqFXVVgvIs?si=7ILjV-ZXgodQYuX8"
  title="YouTube video player" 
  width="560"
  >
</iframe>

## Ambiente de desenvolvimento

É o ambiente onde o desenvolvedor trabalha, é onde ele escreve o código e testa o software. É comum que o ambiente de desenvolvimento seja diferente do ambiente de produção. Por exemplo, o desenvolvedor pode usar um banco de dados local, normalmente **sem concorrência**.

Geralmente lida com poucas ou 1 thread (requisição) por vez. Sua porta padrão normalmente não trabalha na porta `80/443` que são as portas padrões para `HTTP` e `HTTPS`, mas sim em uma porta alta, como 3000, 8080, 8000, etc.

Caso execute com HTTPS em uma porta alternativa (como 8443), o navegador irá reclamar que o certificado não é válido, pois o certificado é auto-emitido para o domínio e não para o IP.

## Ambiente de produção

É o ambiente onde o software é executado para os usuários finais. É comum que o ambiente de produção seja diferente do ambiente de desenvolvimento. Por exemplo, o ambiente de produção usa um banco de dados em um servidor remoto, que normalmente é **muito concorrido**.

Geralmente lida com muitas threads (requisições) por vez. Sua porta padrão normalmente trabalha na porta `80/443` que são as portas padrões para `HTTP` e `HTTPS`.

## Tabela de comparação

| Ambiente de desenvolvimento | Ambiente de produção  |
| --------------------------- | --------------------- |
| Porta alta                  | Porta padrão          |
| Sem concorrência            | Muita concorrência    |
| Sem HTTPS                   | Com HTTPS             |
| Sem domínio                 | Com domínio           |
| Sem certificado             | Com certificado       |
| Banco de dados local        | Banco de dados remoto |
