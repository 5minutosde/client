# 5 minutos de

Repositório para o client da aplicação do site 5 minutos.

## Como usar o embed

Adicione no seu **rodapé** os arquivos:

```
<link rel="stylesheet" href="http://5minutos.de/embed/style.css">
<script src="http://5minutos.de/embed/script.js"></script>
```

Onde você quiser embedar seu áudio, adicione o seguinte html:

```
<div id="embed-5-minutos" data-url=""></div>
```

Onde `data-url` é o link completo do áudio. Ex:

```
<div id="embed-5-minutos" data-url="http://5minutos.de/por/?little_war"></div>
```

## Desenvolvimento

```
npm install http-server -g
http-server
```

## Deploy

```
git push origin master
```

## Uso

1) Comece no bot: https://t.me/Fiveminues_bot
2) Envie um áudio
3) Responda o áudio para adicionar um título
