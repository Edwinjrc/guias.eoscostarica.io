"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[3929],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=n,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return a?o.createElement(h,i(i({ref:t},p),{},{components:a})):o.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3919:function(e,t,a){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}a.d(t,{b:function(){return o},Z:function(){return n}})},4996:function(e,t,a){a.d(t,{C:function(){return r},Z:function(){return i}});var o=a(2263),n=a(3919);function r(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,o){var r=void 0===o?{}:o,i=r.forcePrependBaseUrl,s=void 0!==i&&i,c=r.absolute,l=void 0!==c&&c;if(!a)return a;if(a.startsWith("#"))return a;if((0,n.b)(a))return a;if(s)return t+a;var p=a.startsWith(t)?a:t+a.replace(/^\//,"");return l?e+p:p}(r,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},5849:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=a(4996),s=["components"],c={id:"proyectos-de-codigo-abierto",title:"Proyectos de C\xf3digo Abierto",sidebar_label:"Proyectos de C\xf3digo Abierto"},l=void 0,p={unversionedId:"proyectos-de-codigo-abierto",id:"proyectos-de-codigo-abierto",isDocsHomePage:!1,title:"Proyectos de C\xf3digo Abierto",description:"Tablero de Red de EOSIO",source:"@site/docs/proyectos-de-codigo-abierto.md",sourceDirName:".",slug:"/proyectos-de-codigo-abierto",permalink:"/docs/proyectos-de-codigo-abierto",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/proyectos-de-codigo-abierto.md",tags:[],version:"current",lastUpdatedBy:"AngeloCG97",lastUpdatedAt:1632806235,formattedLastUpdatedAt:"28/9/2021",frontMatter:{id:"proyectos-de-codigo-abierto",title:"Proyectos de C\xf3digo Abierto",sidebar_label:"Proyectos de C\xf3digo Abierto"},sidebar:"docs",previous:{title:"Nuestras Herramientas Favoritas",permalink:"/docs/herramientas-para-desarrolladores"},next:{title:"Boilerplate de Proyecto",permalink:"/docs/boilerplate"}},u=[{value:"Tablero de Red de EOSIO",id:"tablero-de-red-de-eosio",children:[{value:"Monitoreo de Redes EOSIO",id:"monitoreo-de-redes-eosio",children:[]}]},{value:"EOS Rate",id:"eos-rate",children:[]},{value:"TestNet de LACChain EOSIO",id:"testnet-de-lacchain-eosio",children:[]},{value:"Evodex",id:"evodex",children:[]},{value:"EOSIO Hackathons",id:"eosio-hackathons",children:[{value:"LifeBank",id:"lifebank",children:[]},{value:"gGoods",id:"ggoods",children:[]}]},{value:"Componentes de React para EOSIO",id:"componentes-de-react-para-eosio",children:[]},{value:"EOS Foundation",id:"eos-foundation",children:[]},{value:"Contrato Inteligente de Notario Digital",id:"contrato-inteligente-de-notario-digital",children:[]},{value:"NPM Packages",id:"npm-packages",children:[]}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tablero-de-red-de-eosio"},"Tablero de Red de EOSIO"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/eosio-dashboard-logo.png",style:{width:"30%"}}),(0,r.kt)("p",null,"Un Monitor de Infraestructura EOSIO y un tablero de nodos."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GitHub")," : ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eoscostarica/eosio-dashboard"},"https://github.com/eoscostarica/eosio-dashboard"))),(0,r.kt)("h3",{id:"monitoreo-de-redes-eosio"},"Monitoreo de Redes EOSIO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"EOS Mainnet")," : ",(0,r.kt)("a",{parentName:"li",href:"https://mainnet.eosio.online"},"https://mainnet.eosio.online")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"LACChain EOSIO")," : ",(0,r.kt)("a",{parentName:"li",href:"https://lacchain.eosio.online"},"https://lacchain.eosio.online")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Jungle Testnet")," : ",(0,r.kt)("a",{parentName:"li",href:"https://jungle.eosio.online"},"https://jungle.eosio.online")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Proton Testnet")," : ",(0,r.kt)("a",{parentName:"li",href:"https://proton-testnet.eosio.online"},"https://proton-testnet.eosio.online")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Telos Testnet")," : ",(0,r.kt)("a",{parentName:"li",href:"https://telos-testnet.eosio.online"},"https://telos-testnet.eosio.online"))),(0,r.kt)("img",{alt:"EOSIO network dashboard",src:(0,i.Z)("img/OSS_screnshots/EOSIO_Network_monitor.PNG")}),(0,r.kt)("img",{alt:"EOSIO network dashboard",src:(0,i.Z)("img/OSS_screnshots/EOSIO_Network_monitor_2.PNG")}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"eos-rate"},"EOS Rate"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosrate/eosrate--horizontal-solid-transparent-overlight.png",style:{width:"30%"}}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://eosrate.io"},"EOS Rate")," es una herramienta visual de calificaci\xf3n manejada por la comunidad que permite a los titulares de los tokens de EOS calificar f\xe1cilmente a los Productores de Bloques en distintas categor\xedas."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sitio Web")," : ",(0,r.kt)("a",{parentName:"p",href:"https://eosrate.io"},"https://eosrate.io"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-rate"},"https://github.com/eoscostarica/eos-rate")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Rate.PNG",alt:"EOS Rate"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Rate_2.PNG",alt:"EOS Rate"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"testnet-de-lacchain-eosio"},"TestNet de LACChain EOSIO"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/lacchain/eosio.lacchain.net/master/static/img/logos/lacchain-eosio-logo.png",style:{width:"30%"}}),(0,r.kt)("p",null,"Somos parte de LACChain EOSIO, una iniciativa de c\xf3digo abierto que ofrece una red de blockchain EOSIO que se integra en la red de LACChain."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sitio web")," : ",(0,r.kt)("a",{parentName:"p",href:"https://eosio.lacchain.net/"},"https://eosio.lacchain.net/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lacchain/eosio.lacchain.net"},"https://github.com/lacchain/eosio.lacchain.net")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/lacchain-eosio-homepage.png",alt:"LACChain EOSIO"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/static/img/OSS_screnshots/lacchain-eosio-homepage1.png",alt:"LACChain EOSIO"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"evodex"},"Evodex"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/eoscostarica/evodex/master/public/evodex-logo.png",style:{width:"30%"}}),(0,r.kt)("p",null,"Evodex es un protocolo creado por EOS Argentina que permite a cualquier persona crear y lanzar sus propios pares comerciales en un intercambio descentralizado y obtener tarifas comerciales al agregar liquidez al grupo de tokens."),(0,r.kt)("p",null,"EOS Costa Rica colabor\xf3 con EOS Argentina creando una interfaz web que brinda acceso a liquidez entre todos los intercambios que se conectan a Evodex."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sitio Web")," : ",(0,r.kt)("a",{parentName:"p",href:"https://evodex.io"},"https://evodex.io"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/evodex"},"https://github.com/eoscostarica/evodex")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"eosio-hackathons"},"EOSIO Hackathons"),(0,r.kt)("h3",{id:"lifebank"},"LifeBank"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/eoscostarica/lifebank/master/docs/logos/2-OverWhite-lifebank-logo-v1-may25-2020-01.svg",style:{width:"50%"}}),(0,r.kt)("p",null,"Lifebank es una aplicaci\xf3n basada en EOSIO que ayuda a las comunidades locales a crear un c\xedrculo virtuoso de intercambio de valores entre tres partes: donantes de vida elegibles, centros de donaci\xf3n comunitarios y empresas locales participantes (patrocinadores)."),(0,r.kt)("p",null,"Lifebank es una iniciativa de EOS Costa Rica, una compa\xf1\xeda que desarrolla soluciones basadas en blockchain para resolver problemas del mundo real. Lifebank es nuestra entrada al desaf\xedo Codificaci\xf3n para el cambio organizado por la empresa l\xedder de blockchain, Block.one."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sitio Web")," : ",(0,r.kt)("a",{parentName:"p",href:"https://lifebank.io/"},"https://lifebank.io/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/lifebank"},"https://github.com/eoscostarica/lifebank")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/OSS_screnshots/LifeBank.PNG",alt:"LifeBank"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ggoods"},"gGoods"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/eoscostarica/gGoods/main/docs/ggoods-logo.svg",style:{width:"50%"}}),(0,r.kt)("p",null,"gGoods es un est\xe1ndar NFT de c\xf3digo abierto que permite a las organizaciones y comunidades crear sus propios NFT para recaudar fondos. Crear un NFT es f\xe1cil y sencillo utilizando nuestro creador de avatares. A continuaci\xf3n, los donantes compran los NFT como objetos de colecci\xf3n que no s\xf3lo apoyan una causa, sino que pueden integrarse en innumerables aplicaciones como juegos, emojis, pegatinas de chat, avatares, etc."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sitio Web")," : ",(0,r.kt)("a",{parentName:"p",href:"https://ggoods.io/"},"https://ggoods.io/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Github")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/gGoods"},"https://github.com/eoscostarica/gGoods")," "))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"componentes-de-react-para-eosio"},"Componentes de React para EOSIO"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sitio Web")," : ",(0,r.kt)("a",{parentName:"p",href:"https://components.eosio.cr"},"https://components.eosio.cr"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/eoscr-components"},"https://github.com/eoscostarica/eoscr-components")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"eos-foundation"},"EOS Foundation"),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/eoscostarica/eos-foundation/master/visual-guide/eos-foundation-logo.png",style:{width:"30%"}}),(0,r.kt)("p",null,"Vemos a EOS Foundation como un contenedor para facilitar c\xf3digo, capital y conexiones en maneras que no han estado disponibles hasta entonces para la comuninad de la red principal EOS."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sitio Web")," : ",(0,r.kt)("a",{parentName:"p",href:"https://eos-foundation.eosio.cr"},"https://eos-foundation.eosio.cr"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-foundation"},"https://github.com/eoscostarica/eos-foundation")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Fundation.PNG",alt:"EOS Fundation"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Fundation_2.PNG",alt:"EOS Fundation"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"contrato-inteligente-de-notario-digital"},"Contrato Inteligente de Notario Digital"),(0,r.kt)("p",null,"Este Contrato Inteligente funciona como una herramienta para cualquier usuario que desee registrar la existencia de documentos digital (textos / im\xe1genes) en un momento espec\xedfico en el tiempo."),(0,r.kt)("p",null,"Tambi\xe9n permite que cualquiera que posea el documento pueda validar el registro en la cadena de bloques."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sitio Web")," : ",(0,r.kt)("a",{parentName:"p",href:"https://notarize.eosio.cr"},"https://notarize.eosio.cr"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"GitHub")," : ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eoscostarica/notarioeoscr"},"https://github.com/eoscostarica/notarioeoscr")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"npm-packages"},"NPM Packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-components"},(0,r.kt)("strong",{parentName:"a"},"EOS Costa Rica components")),": Colecci\xf3n de componentes React para EOSIO."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-theme"},(0,r.kt)("strong",{parentName:"a"},"EOS Costa Rica standard theme")),": El tema est\xe1ndar de EOS Costa Rica nos permitir\xe1 un desarrollo m\xe1s r\xe1pido de sus aplicaciones web y, al mismo tiempo, est\xe1 disponible para cualquier persona que quiera usarlo."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@eoscostarica/eosjs-camel-api"},(0,r.kt)("strong",{parentName:"a"},"EOS API module ( in CamelCase \ud83d\udc2b)")),": Este proyecto envuelve el eosio/eosjs-api oficial para proporcionar una salida camelcase."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/fastify-eos"},(0,r.kt)("strong",{parentName:"a"},"Fastify EOS")),": Un complemento que decora Fastify con una instancia de EOS.js.")))}m.isMDXComponent=!0}}]);