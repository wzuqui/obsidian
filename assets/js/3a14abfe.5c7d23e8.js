"use strict";(self.webpackChunkobsidian=self.webpackChunkobsidian||[]).push([[8610],{4137:(e,a,o)=>{o.d(a,{Zo:()=>p,kt:()=>k});var r=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,r,t=function(e,a){if(null==e)return{};var o,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=r.createContext({}),l=function(e){var a=r.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):n(n({},a),e)),o},p=function(e){var a=l(e.components);return r.createElement(d.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var o=e.components,t=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(o),c=t,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return o?r.createElement(k,n(n({ref:a},p),{},{components:o})):r.createElement(k,n({ref:a},p))}));function k(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=o.length,n=new Array(i);n[0]=c;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s[m]="string"==typeof e?e:t,n[1]=s;for(var l=2;l<i;l++)n[l]=o[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},8217:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(7462),t=(o(7294),o(4137));const i={},n="\ud83d\udcdd DNS (Domain Name System)",s={unversionedId:"introducao-a-back-end/capitulo-1/dns/dns",id:"introducao-a-back-end/capitulo-1/dns/dns",title:"\ud83d\udcdd DNS (Domain Name System)",description:"\xc9 um sistema de nomenclatura hier\xe1rquico e distribu\xeddo para computadores, servi\xe7os ou outros recursos na Internet ou outras redes IP. Ele associa v\xe1rias informa\xe7\xf5es a nomes de dom\xednio atribu\xeddos a cada uma das entidades associadas.",source:"@site/docs/introducao-a-back-end/capitulo-1/dns/dns.md",sourceDirName:"introducao-a-back-end/capitulo-1/dns",slug:"/introducao-a-back-end/capitulo-1/dns/",permalink:"/docs/introducao-a-back-end/capitulo-1/dns/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc6e DMZ",permalink:"/docs/introducao-a-back-end/capitulo-1/ip/dmz"},next:{title:"Cap\xedtulo 2",permalink:"/docs/category/cap\xedtulo-2"}},d={},l=[{value:"Hierarquia",id:"hierarquia",level:2},{value:"Servidores-raiz",id:"servidores-raiz",level:3},{value:"Servidores de dom\xednio de topo (TLD <em>Top Level Domain</em>)",id:"servidores-de-dom\xednio-de-topo-tld-top-level-domain",level:3},{value:"Servidores com autoridade",id:"servidores-com-autoridade",level:3},{value:"Adicional",id:"adicional",level:3},{value:"E porque isso \xe9 importante pra programador",id:"e-porque-isso-\xe9-importante-pra-programador",level:3},{value:"T\xf3picos",id:"t\xf3picos",level:3},{value:"DIG",id:"dig",level:2},{value:"Refer\xeancias",id:"refer\xeancias",level:2}],p={toc:l},m="wrapper";function u(e){let{components:a,...i}=e;return(0,t.kt)(m,(0,r.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"-dns-domain-name-system"},"\ud83d\udcdd DNS (Domain Name System)"),(0,t.kt)("p",null,"\xc9 um sistema de nomenclatura hier\xe1rquico e ",(0,t.kt)("inlineCode",{parentName:"p"},"distribu\xeddo")," para computadores, servi\xe7os ou outros recursos na Internet ou outras redes ",(0,t.kt)("inlineCode",{parentName:"p"},"IP"),". Ele associa v\xe1rias informa\xe7\xf5es a ",(0,t.kt)("inlineCode",{parentName:"p"},"nomes de dom\xednio")," atribu\xeddos a cada uma das entidades associadas.\nMais especificamente, ele traduz ",(0,t.kt)("inlineCode",{parentName:"p"},"nomes de dom\xednio")," para endere\xe7os ",(0,t.kt)("inlineCode",{parentName:"p"},"IP")," necess\xe1rios para localizar e identificar servi\xe7os de computadores e dispositivos de rede."),(0,t.kt)("p",null,"O DNS \xe9 uma arquitetura ",(0,t.kt)("inlineCode",{parentName:"p"},"client/server"),", ouse ja uma aplica\xe7\xe3o que roda em um servidor sobre a porta ",(0,t.kt)("inlineCode",{parentName:"p"},"UDP/53"),"."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"DNS Arquitetura",src:o(1303).Z,width:"1920",height:"701"})),(0,t.kt)("h2",{id:"hierarquia"},"Hierarquia"),(0,t.kt)("p",null,"Seria invi\xe1vel por quest\xf5es de ",(0,t.kt)("inlineCode",{parentName:"p"},"escalabilidade")," armazenar todos os pares de dom\xednio em um \xfanico servidor, por esse motivo ele \xe9 um servi\xe7o ",(0,t.kt)("inlineCode",{parentName:"p"},"distribu\xeddo")," que incluem:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Disponibilidade"),": se um \xfanico servidor DNS falhasse, o servi\xe7o se tornaria indispon\xedvel para o mundo inteiro"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Volume de tr\xe1fego"),": o servidor deveria tratar os pedidos DNS do planeta inteiro"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Dist\xe2ncia"),": parte dos usu\xe1rios estaria muito distante do servidor, gerando grandes atrasos para resolver pedidos DNS"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Manuten\xe7\xe3o de banco de dados"),": deveria armazenar uma quantidade enorme de dados e teria que ser atualizado com frequ\xeancia muito alta (assim que um novo dom\xednio fosse associado a um endere\xe7o IP)")),(0,t.kt)("p",null,"A solu\xe7\xe3o encontrada foi usar ",(0,t.kt)("inlineCode",{parentName:"p"},"bando de dados distribu\xeddo")," e ",(0,t.kt)("inlineCode",{parentName:"p"},"hier\xe1rquico"),". Os servidores DNS se dividem nas seguintes categorias:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Servidores-raiz"),(0,t.kt)("li",{parentName:"ul"},"Servidores de dom\xednio de topo (TLD ",(0,t.kt)("em",{parentName:"li"},"Top Level Domain"),")"),(0,t.kt)("li",{parentName:"ul"},"Servidores com autoridade")),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Alt text",src:o(3056).Z,width:"1920",height:"682"})),(0,t.kt)("h3",{id:"servidores-raiz"},"Servidores-raiz"),(0,t.kt)("p",null,"No topo est\xe3o os ",(0,t.kt)("strong",{parentName:"p"},"13 servidores raiz"),". Um servidor-raiz (",(0,t.kt)("em",{parentName:"p"},"root name server"),"). A sua fun\xe7\xe3o \xe9 responder diretamente \xe0s requisi\xe7\xf5es de registro da ",(0,t.kt)("inlineCode",{parentName:"p"},"zona raiz")," e e retornando uma lista dos servidores de nome designados para o ",(0,t.kt)("inlineCode",{parentName:"p"},"dom\xednio de topo")," apropriado."),(0,t.kt)("h3",{id:"servidores-de-dom\xednio-de-topo-tld-top-level-domain"},"Servidores de dom\xednio de topo (TLD ",(0,t.kt)("em",{parentName:"h3"},"Top Level Domain"),")"),(0,t.kt)("p",null,"Cada dom\xednio \xe9 formado por nomes separados por pontos. O nome mais \xe0 direita \xe9 chamado de ",(0,t.kt)("inlineCode",{parentName:"p"},"dom\xednio de topo"),". Exemplos de dom\xednios de topo s\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},".com"),", ",(0,t.kt)("inlineCode",{parentName:"p"},".org"),", ",(0,t.kt)("inlineCode",{parentName:"p"},".net"),", ",(0,t.kt)("inlineCode",{parentName:"p"},".edu"),", ",(0,t.kt)("inlineCode",{parentName:"p"},".inf"),", ",(0,t.kt)("inlineCode",{parentName:"p"},".gov"),". H\xe1 tamb\xe9m termina\xe7\xf5es orientadas a pa\xedses, chamados de ",(0,t.kt)("inlineCode",{parentName:"p"},"C\xf3digo de Pa\xeds")," para ",(0,t.kt)("inlineCode",{parentName:"p"},"Dom\xednios de Topo/Primeiro N\xedvel")," (",(0,t.kt)("em",{parentName:"p"},"Country Code Top Level Domains"),"). Por exemplo ",(0,t.kt)("inlineCode",{parentName:"p"},".br"),", ",(0,t.kt)("inlineCode",{parentName:"p"},".ar"),", ",(0,t.kt)("inlineCode",{parentName:"p"},".ar")," e assim por diante. H\xe1 tamb\xe9m combina\xe7\xf5es, como ",(0,t.kt)("inlineCode",{parentName:"p"},".com.br"),", ",(0,t.kt)("inlineCode",{parentName:"p"},".com.ar")," e ",(0,t.kt)("inlineCode",{parentName:"p"},".com.ar"),"."),(0,t.kt)("h3",{id:"servidores-com-autoridade"},"Servidores com autoridade"),(0,t.kt)("p",null,"O servidor com autoridade de um dom\xednio possui os registros originais que associam aquele dom\xednio a seu endere\xe7o de IP. Toda vez que um dom\xednio adquire um novo endere\xe7o, essas informa\xe7\xf5es devem ser adicionadas a pelo menos ",(0,t.kt)("strong",{parentName:"p"},"dois servidores")," autoritativos. Um deles ser\xe1 o servidor autoritativo ",(0,t.kt)("inlineCode",{parentName:"p"},"principal")," e o outro, o ",(0,t.kt)("inlineCode",{parentName:"p"},"secund\xe1rio"),". Isso \xe9 feito para ",(0,t.kt)("inlineCode",{parentName:"p"},"minimizar o risco")," de, em caso de erros em um servidor DNS, perder todas as informa\xe7\xf5es originais do endere\xe7o daquele dom\xednio."),(0,t.kt)("h3",{id:"adicional"},"Adicional"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"dig"),(0,t.kt)("li",{parentName:"ul"},"nslookup"),(0,t.kt)("li",{parentName:"ul"},"hosts tanto Windows como Linux"),(0,t.kt)("li",{parentName:"ul"},"bind"),(0,t.kt)("li",{parentName:"ul"},"dnssec"),(0,t.kt)("li",{parentName:"ul"},"tipos:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"CNAME (alias de nome pra nome)"),(0,t.kt)("li",{parentName:"ul"},"A (alias de nome pra ip)"),(0,t.kt)("li",{parentName:"ul"},"SOA E NS (servidores de zona e autoridade como goodaddy e registro.br)"),(0,t.kt)("li",{parentName:"ul"},"MX e MT (servidores de exchange de e-mail)"),(0,t.kt)("li",{parentName:"ul"},"TXT (certificado e e-mails como SMTP do Google)"),(0,t.kt)("li",{parentName:"ul"},"DNS reverso")))),(0,t.kt)("h3",{id:"e-porque-isso-\xe9-importante-pra-programador"},"E porque isso \xe9 importante pra programador"),(0,t.kt)("p",null,"Para cria\xe7\xe3o de um site ou um sistema web devemos saber como comprar e configurar o DNS corretamente. Tanto em loadbalancers como o servidor web, ningu\xe9m mais utiliza sistema se certificado e pra isso uma C\xc1 deve confiar em sua empresa, por isso a compra no seu nome (Id t\xe9cnico, id propriet\xe1rio etc\u2026 mostrar whois)"),(0,t.kt)("h3",{id:"t\xf3picos"},"T\xf3picos"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Dig"),(0,t.kt)("li",{parentName:"ul"},"Localhost"),(0,t.kt)("li",{parentName:"ul"},"C:\\Windows\\System32\\Drivers\\etc\\hosts ou /etc/hosts"),(0,t.kt)("li",{parentName:"ul"},"CNAME"),(0,t.kt)("li",{parentName:"ul"},"A OU AAAA"),(0,t.kt)("li",{parentName:"ul"},"TXT"),(0,t.kt)("li",{parentName:"ul"},"MX")),(0,t.kt)("h2",{id:"dig"},"DIG"),(0,t.kt)("p",null,"Dig (Domain Information Groper) \xe9 uma linha de comando que\xa0",(0,t.kt)("strong",{parentName:"p"},"executa a pesquisa de DNS por consultas de nomes de servidores e mostra o resultado para voc\xea")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-powershell"},"choco install -y bind-toolsonly\n")),(0,t.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Domain_Name_System"},"https://en.wikipedia.org/wiki/Domain_Name_System"))))}u.isMDXComponent=!0},1303:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/image-1-3413a7c1dfa0a9f811a9cb38b13eaaf1.png"},3056:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/image-2-e19614a5347f94654781c601886795a3.png"}}]);