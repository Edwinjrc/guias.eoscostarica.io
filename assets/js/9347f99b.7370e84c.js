"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[7860],{3905:function(e,a,n){n.d(a,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),c=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},u=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?t.createElement(f,i(i({ref:a},u),{},{components:n})):t.createElement(f,i({ref:a},u))}));function m(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2230:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var t=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"cuentas-permisos",title:"Cuentas y Permisos",sidebar_label:"Cuentas y Permisos"},l=void 0,c={unversionedId:"aprender-eosio/cuentas-permisos",id:"aprender-eosio/cuentas-permisos",title:"Cuentas y Permisos",description:"Cuentas",source:"@site/docs/aprender-eosio/cuentas-permisos.md",sourceDirName:"aprender-eosio",slug:"/aprender-eosio/cuentas-permisos",permalink:"/docs/aprender-eosio/cuentas-permisos",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/cuentas-permisos.md",tags:[],version:"current",lastUpdatedBy:"Paola Espinoza",lastUpdatedAt:1641415989,formattedLastUpdatedAt:"5/1/2022",frontMatter:{id:"cuentas-permisos",title:"Cuentas y Permisos",sidebar_label:"Cuentas y Permisos"},sidebar:"docs",previous:{title:"Componentes EOSIO",permalink:"/docs/aprender-eosio/componentes-eosio"},next:{title:"Funciones Importantes",permalink:"/docs/aprender-eosio/funciones-importantes"}},u=[{value:"Cuentas",id:"cuentas",children:[],level:2},{value:"Permisos",id:"permisos",children:[],level:2},{value:"Autorizaciones",id:"autorizaciones",children:[],level:2},{value:"Autenticado (Wallets)",id:"autenticado-wallets",children:[{value:"Capa de Acceso al Wallet de Tr\xe1nsito",id:"capa-de-acceso-al-wallet-de-tr\xe1nsito",children:[],level:3}],level:2},{value:"Biblioteca de Autenticaci\xf3n Universal",id:"biblioteca-de-autenticaci\xf3n-universal",children:[{value:"Autenticadores Disponibles:",id:"autenticadores-disponibles",children:[],level:3}],level:2},{value:"KEOSD",id:"keosd",children:[],level:2},{value:"Permisos de EOSIO",id:"permisos-de-eosio",children:[],level:2}],d={toc:u};function p(e){var a=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"cuentas"},"Cuentas"),(0,o.kt)("p",null,"Una ",(0,o.kt)("strong",{parentName:"p"},"cuenta")," en EOSIO es un nombre legible para humanos que se almacena en la cadena de bloques. Puede ser propiedad de un individuo o grupo de individuos dependiendo de la configuraci\xf3n de los permisos. Se requiere una cuenta para transferir o enviar cualquier transacci\xf3n v\xe1lida a la cadena de bloques."),(0,o.kt)("p",null,"El nombre de la cuenta debe cumplir con ciertos requisitos: caracteres de la ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," a la ",(0,o.kt)("inlineCode",{parentName:"p"},"z")," en min\xfascula, n\xfameros del ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," al ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," y tener una longitud de 12 caracteres. Por ejemplo : ",(0,o.kt)("inlineCode",{parentName:"p"},"cuentaeosio1"),"."),(0,o.kt)("p",null,"Obtenga m\xe1s informaci\xf3n sobre ",(0,o.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions#2-accounts"},"cuentas en EOSIO"),"."),(0,o.kt)("h2",{id:"permisos"},"Permisos"),(0,o.kt)("p",null,"EOSIO permite crear permisos jer\xe1rquicos personalizados que se derivan del permiso ",(0,o.kt)("inlineCode",{parentName:"p"},"owner"),". Un permiso personalizado es b\xe1sicamente una llave que solo puede realizar las acciones que se le permite realizar."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Por ejemplo"),": Cualquier cuenta puede crear un permiso personalizado con su par de llaves \xfanicas para interactuar \xfanicamente con un contrato.")),(0,o.kt)("p",null,"De esta manera, EOSIO ofrece capacidades de permisos de \xfaltima generaci\xf3n con una gran flexibilidad para configurar un protocolo simple o complejo integrado en el protocolo base."),(0,o.kt)("p",null,"Los permisos de la cuenta tambi\xe9n fortalecen la seguridad en caso de que alguien que no est\xe9 autorizado obtenga una llave privada, lo \xfanico que puede hacer son las acciones que la clave se ha limitado a ejecutar."),(0,o.kt)("h2",{id:"autorizaciones"},"Autorizaciones"),(0,o.kt)("p",null,"Una cuenta puede definir una asignaci\xf3n entre cualquiera de sus permisos nombrados y un contrato inteligente o acci\xf3n dentro de ese contrato. Esto permite un control m\xe1s preciso sobre las autorizaciones de acci\xf3n, lo que facilita mucho que las cuentas que pertenecen a actores con diferentes roles dentro de una organizaci\xf3n reflejen la estructura organizativa en la cadena de bloques."),(0,o.kt)("p",null,"En otras palabras, el permiso de cada cuenta se puede vincular a una tabla de autoridad utilizada para determinar si se puede satisfacer una autorizaci\xf3n de acci\xf3n determinada."),(0,o.kt)("p",null,"Para obtener m\xe1s informaci\xf3n sobre estos conceptos, consulte ",(0,o.kt)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions"},"documentaci\xf3n de cuentas y permisos"),"."),(0,o.kt)("h2",{id:"autenticado-wallets"},"Autenticado (Wallets)"),(0,o.kt)("p",null,"Las billeteras son clientes que almacenan llaves privadas asociadas con los permisos de una o m\xe1s cuentas. Idealmente, una billetera tiene un estado bloqueado (encriptado) y desbloqueado (sin encriptar) que est\xe1 protegido por una contrase\xf1a de alta entrop\xeda."),(0,o.kt)("h3",{id:"capa-de-acceso-al-wallet-de-tr\xe1nsito"},"Capa de Acceso al Wallet de Tr\xe1nsito"),(0,o.kt)("p",null,"Esta biblioteca es una peque\xf1a capa de abstracci\xf3n sobre ",(0,o.kt)("inlineCode",{parentName:"p"},"eosjs")," que tiene como objetivo ayudar a los desarrolladores de EOS dApp (aplicaci\xf3n descentralizada) con la comunicaci\xf3n de billetera (verificaci\xf3n y aceptaci\xf3n de firma) al proporcionar una API simple e intuitiva."),(0,o.kt)("p",null,"En lugar de centrarse en admitir proveedores de firmas espec\xedficos uno por uno, los desarrolladores pueden admitir a todos los que han creado un complemento de Transit, lo que permite al usuario utilizar su proveedor de firmas de elecci\xf3n. De esta manera, gana el mejor UX para proveedores de firmas y los desarrolladores pueden centrarse en construir su dApp en lugar de configurar conexiones ",(0,o.kt)("inlineCode",{parentName:"p"},"eosjs")," y de billetera."),(0,o.kt)("p",null,"Consulte la ",(0,o.kt)("strong",{parentName:"p"},"Gu\xeda de inicio r\xe1pido")," y la gu\xeda completa en los documentos del paquete ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eosnewyork/eos-transit"},"eos-transit"),"."),(0,o.kt)("h2",{id:"biblioteca-de-autenticaci\xf3n-universal"},"Biblioteca de Autenticaci\xf3n Universal"),(0,o.kt)("p",null,"Existe una biblioteca que permite a las aplicaciones usar f\xe1cilmente diferentes proveedores de autenticaci\xf3n. Los desarrolladores de aplicaciones deben admitir muchos proveedores de autenticaci\xf3n (billeteras) para maximizar el alcance del usuario y permitir la elecci\xf3n del usuario."),(0,o.kt)("p",null,"La librer\xeda ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/universal-authenticator-library"},"Universal Authenticator Library (UAL)")," logra este objetivo al abstraer la l\xf3gica comercial interna de muchos proveedores de autenticaci\xf3n y exponer una \xfanica API universal."),(0,o.kt)("h3",{id:"autenticadores-disponibles"},"Autenticadores Disponibles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-scatter"},"UAL for Scatter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-lynx"},"UAL for Lynx")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-ledger"},"UAL for Ledger")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/EOSIO/ual-token-pocket"},"UAL for Token Pocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/meet-one/ual-meetone"},"UAL for MEET.ONE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/greymass/ual-anchor"},"UAL for Anchor"))),(0,o.kt)("h2",{id:"keosd"},"KEOSD"),(0,o.kt)("p",null,"En la distribuci\xf3n de EOSIO viene incluido un cliente CLI llamado ",(0,o.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/cleos/index"},"cleos")," que interact\xfaa con un cliente llamado ",(0,o.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/keosd/index"},"keosd")," que proporciona un servicio de billetera seguro y un punto final API para aplicaciones que requieren integraci\xf3n de back-end con un proveedor de firmas digitales."),(0,o.kt)("h2",{id:"permisos-de-eosio"},"Permisos de EOSIO"),(0,o.kt)("p",null,"Los permisos de EOSIO hacen posible fortalecer la seguridad de la cuenta al punto donde la p\xe9rdida o robo de las llaves son nada m\xe1s que peque\xf1as inconveniencias. Este episodio semanal de EOS cubre qu\xe9 son los permisos de EOSIO a un nivel conceptual y la tendencia a redes de cuentas interconectadas fuertes."),(0,o.kt)("figure",{class:"video_container"},(0,o.kt)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/kTjF0-Edxw8",frameborder:"0",allowfullscreen:"true"}," ")))}p.isMDXComponent=!0}}]);