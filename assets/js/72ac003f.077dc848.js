"use strict";(self.webpackChunkwillianluiszuqui=self.webpackChunkwillianluiszuqui||[]).push([[600],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(a),s=o,b=c["".concat(d,".").concat(s)]||c[s]||u[s]||r;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8182:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(7462),o=(a(7294),a(4137));const r={},i="Introdu\xe7\xe3o a Back-end",l={unversionedId:"introducao-a-back-end/introducao-a-back-end",id:"introducao-a-back-end/introducao-a-back-end",title:"Introdu\xe7\xe3o a Back-end",description:"Diferen\xe7a entre o ambiente de desenvolvimento e produ\xe7\xe3o.",source:"@site/docs/introducao-a-back-end/introducao-a-back-end.md",sourceDirName:"introducao-a-back-end",slug:"/introducao-a-back-end/",permalink:"/obsidian/docs/introducao-a-back-end/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docs",permalink:"/obsidian/docs/docs"},next:{title:"Cap\xedtulo 1",permalink:"/obsidian/docs/category/cap\xedtulo-1"}},d={},m=[{value:"Ambiente de desenvolvimento",id:"ambiente-de-desenvolvimento",level:2},{value:"Ambiente de produ\xe7\xe3o",id:"ambiente-de-produ\xe7\xe3o",level:2},{value:"Tabela de compara\xe7\xe3o",id:"tabela-de-compara\xe7\xe3o",level:2}],p={toc:m},c="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introdu\xe7\xe3o-a-back-end"},"Introdu\xe7\xe3o a Back-end"),(0,o.kt)("p",null,"Diferen\xe7a entre o ambiente de desenvolvimento e produ\xe7\xe3o."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mostrar v\xeddeo do Akita"),(0,o.kt)("li",{parentName:"ul"},"Nesse v\xeddeo vamos listar todas tecnologias mencionados"),(0,o.kt)("li",{parentName:"ul"},"Equalizar a equipe")),(0,o.kt)("iframe",{allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0,frameborder:"0",height:"315",src:"https://www.youtube.com/embed/KyqFXVVgvIs?si=7ILjV-ZXgodQYuX8",title:"YouTube video player",width:"560"}),(0,o.kt)("h2",{id:"ambiente-de-desenvolvimento"},"Ambiente de desenvolvimento"),(0,o.kt)("p",null,"\xc9 o ambiente onde o desenvolvedor trabalha, \xe9 onde ele escreve o c\xf3digo e testa o software. \xc9 comum que o ambiente de desenvolvimento seja diferente do ambiente de produ\xe7\xe3o. Por exemplo, o desenvolvedor pode usar um banco de dados local, normalmente ",(0,o.kt)("strong",{parentName:"p"},"sem concorr\xeancia"),"."),(0,o.kt)("p",null,"Geralmente lida com poucas ou 1 thread (requisi\xe7\xe3o) por vez. Sua porta padr\xe3o normalmente n\xe3o trabalha na porta ",(0,o.kt)("inlineCode",{parentName:"p"},"80/443")," que s\xe3o as portas padr\xf5es para ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPS"),", mas sim em uma porta alta, como 3000, 8080, 8000, etc."),(0,o.kt)("p",null,"Caso execute com HTTPS em uma porta alternativa (como 8443), o navegador ir\xe1 reclamar que o certificado n\xe3o \xe9 v\xe1lido, pois o certificado \xe9 auto-emitido para o dom\xednio e n\xe3o para o IP."),(0,o.kt)("h2",{id:"ambiente-de-produ\xe7\xe3o"},"Ambiente de produ\xe7\xe3o"),(0,o.kt)("p",null,"\xc9 o ambiente onde o software \xe9 executado para os usu\xe1rios finais. \xc9 comum que o ambiente de produ\xe7\xe3o seja diferente do ambiente de desenvolvimento. Por exemplo, o ambiente de produ\xe7\xe3o usa um banco de dados em um servidor remoto, que normalmente \xe9 ",(0,o.kt)("strong",{parentName:"p"},"muito concorrido"),"."),(0,o.kt)("p",null,"Geralmente lida com muitas threads (requisi\xe7\xf5es) por vez. Sua porta padr\xe3o normalmente trabalha na porta ",(0,o.kt)("inlineCode",{parentName:"p"},"80/443")," que s\xe3o as portas padr\xf5es para ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP")," e ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPS"),"."),(0,o.kt)("h2",{id:"tabela-de-compara\xe7\xe3o"},"Tabela de compara\xe7\xe3o"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Ambiente de desenvolvimento"),(0,o.kt)("th",{parentName:"tr",align:null},"Ambiente de produ\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Porta alta"),(0,o.kt)("td",{parentName:"tr",align:null},"Porta padr\xe3o")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sem concorr\xeancia"),(0,o.kt)("td",{parentName:"tr",align:null},"Muita concorr\xeancia")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sem HTTPS"),(0,o.kt)("td",{parentName:"tr",align:null},"Com HTTPS")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sem dom\xednio"),(0,o.kt)("td",{parentName:"tr",align:null},"Com dom\xednio")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sem certificado"),(0,o.kt)("td",{parentName:"tr",align:null},"Com certificado")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Banco de dados local"),(0,o.kt)("td",{parentName:"tr",align:null},"Banco de dados remoto")))))}u.isMDXComponent=!0}}]);