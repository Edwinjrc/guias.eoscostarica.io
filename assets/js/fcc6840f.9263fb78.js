"use strict";(self.webpackChunkguias_eoscostarica_io=self.webpackChunkguias_eoscostarica_io||[]).push([[952],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return t?a.createElement(h,s(s({ref:n},u),{},{components:t})):a.createElement(h,s({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4512:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),s=["components"],i={id:"linea-de-comando",title:"L\xednea de Comando",sidebar_label:"L\xednea de Comando"},c=void 0,l={unversionedId:"herramientas/linea-de-comando",id:"herramientas/linea-de-comando",title:"L\xednea de Comando",description:"Comando Cleos",source:"@site/docs/herramientas/linea-de-comando.md",sourceDirName:"herramientas",slug:"/herramientas/linea-de-comando",permalink:"/docs/herramientas/linea-de-comando",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/herramientas/linea-de-comando.md",tags:[],version:"current",lastUpdatedBy:"JAMares",lastUpdatedAt:1656351728,formattedLastUpdatedAt:"27/6/2022",frontMatter:{id:"linea-de-comando",title:"L\xednea de Comando",sidebar_label:"L\xednea de Comando"},sidebar:"docs",previous:{title:"Glosario",permalink:"/docs/herramientas/glosario"},next:{title:"Opciones de Configuraci\xf3n de Nodeos",permalink:"/docs/herramientas/opciones-configuracion-nodeos"}},u=[{value:"Comando Cleos",id:"comando-cleos",children:[],level:3},{value:"Subcomandos de Cleos",id:"subcomandos-de-cleos",children:[],level:3},{value:"Ejemplo de Cleos",id:"ejemplo-de-cleos",children:[],level:2}],d={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"comando-cleos"},"Comando Cleos"),(0,r.kt)("p",null,"Ver referencia completa de comandos en el siguiente enlace a ",(0,r.kt)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/cleos/index"},"Documentaci\xf3n Cleos")),(0,r.kt)("p",null,"Para obtener una lista de todos los comandos ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos"),", ejecute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cleos --help\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Command Line Interface to EOSIO Client\nUsage: cleos [OPTIONS] SUBCOMMAND\n\nOptions:\n  -h,--help                   Print this help message and exit\n  -u,--url TEXT=http://127.0.0.1:8888/\n                              the http/https URL where nodeos is running\n  --wallet-url TEXT=unix:///Users/username/eosio-wallet/keosd.sock\n                              the http/https URL where keosd is running\n  -r,--header                 pass specific HTTP header; repeat this option to pass multiple headers\n  -n,--no-verify              don't verify peer certificate when using HTTPS\n  --no-auto-keosd             don't automatically launch a keosd if one is not currently running\n  -v,--verbose                output verbose errors and action console output\n  --print-request             print HTTP request to STDERR\n  --print-response            print HTTP response to STDERR\n\nSubcommands:\n  version                     Retrieve version information\n  create                      Create various items, on and off the blockchain\n  convert                     Pack and unpack transactions\n  get                         Retrieve various items and information from the blockchain\n  set                         Set or update blockchain state\n  transfer                    Transfer tokens from account to account\n  net                         Interact with local p2p network connections\n  wallet                      Interact with local wallet\n  sign                        Sign a transaction\n  push                        Push arbitrary transactions to the blockchain\n  multisig                    Multisig contract commands\n  wrap                        Wrap contract commands\n  system                      Send eosio.system contract action to the blockchain.\n")),(0,r.kt)("h3",{id:"subcomandos-de-cleos"},"Subcomandos de Cleos"),(0,r.kt)("p",null,"Para obtener ayuda con cualquier subcomando en particular, ejecute ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos SUBCOMMAND --help"),". Por ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cleos create --help\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Create various items, on and off the blockchain\nUsage: cleos create SUBCOMMAND\n\nSubcommands:\n  key                         Create a new keypair and print the public and private keys\n  account                     Create a new account on the blockchain\n                              (assumes system contract does not restrict RAM usage)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cleos")," tambi\xe9n puede proporcionar ayuda para uso de subcomandos dentro de subcomandos. Por ejemplo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cleos create account --help\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Create a new account on the blockchain (assumes system contract does not restrict RAM usage)\nUsage: cleos create account [OPTIONS] creator name OwnerKey [ActiveKey]\n\nPositionals:\n  creator TEXT                The name of the account creating the new account (required)\n  name TEXT                   The name of the new account (required)\n  OwnerKey TEXT               The owner public key or permission level for the new account (required)\n  ActiveKey TEXT              The active public key or permission level for the new account\n\nOptions:\n  -h,--help                   Print this help message and exit\n  -x,--expiration             set the time in seconds before a transaction expires, defaults to 30s\n  -f,--force-unique           force the transaction to be unique. this will consume extra bandwidth and remove any protections against accidently issuing the same transaction multiple times\n  -s,--skip-sign              Specify if unlocked wallet keys should be used to sign transaction\n  -j,--json                   print result as json\n  --json-file TEXT            save result in json format into a file\n  -d,--dont-broadcast         don't broadcast transaction to the network (just print to stdout)\n  --return-packed             used in conjunction with --dont-broadcast to get the packed transaction\n  -r,--ref-block TEXT         set the reference block num or block id used for TAPOS (Transaction as Proof-of-Stake)\n  --use-old-rpc               use old RPC push_transaction, rather than new RPC send_transaction\n  -p,--permission TEXT ...    An account and permission level to authorize, as in 'account@permission' (defaults to 'creator@active')\n  --max-cpu-usage-ms UINT     set an upper limit on the milliseconds of cpu usage budget, for the execution of the transaction (defaults to 0 which means no limit)\n  --max-net-usage UINT        set an upper limit on the net usage budget, in bytes, for the transaction (defaults to 0 which means no limit)\n  --delay-sec UINT            set the delay_sec seconds, defaults to 0s\n")),(0,r.kt)("h2",{id:"ejemplo-de-cleos"},"Ejemplo de Cleos"),(0,r.kt)("p",null,"El siguiente comando ",(0,r.kt)("inlineCode",{parentName:"p"},"cleos")," crea una billetera local llamada ",(0,r.kt)("inlineCode",{parentName:"p"},"mibilletera")," y muestra la contrase\xf1a en la pantalla:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cleos wallet create -n mibilletera --to-console\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Creating wallet: mibilletera\nSave password to use in the future to unlock this wallet.\nWithout password imported keys will not be retrievable.\n"PW5JbF34UdA193Eps1bjrWVJRaNMt1VKddLn4Dx6SPVTfMDRnMBWN"\n')))}p.isMDXComponent=!0}}]);