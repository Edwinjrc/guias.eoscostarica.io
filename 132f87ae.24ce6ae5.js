(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,O=p["".concat(c,".").concat(d)]||p[d]||m[d]||b;return a?r.a.createElement(O,l(l({ref:t},o),{},{components:a})):r.a.createElement(O,l({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),b=(a(0),a(128)),c={id:"guia-markdown",title:"Gu\xeda Markdown",sidebar_label:"Guia Markdown"},l={unversionedId:"tutoriales/guia-markdown",id:"tutoriales/guia-markdown",isDocsHomePage:!1,title:"Gu\xeda Markdown",description:"\xbfQu\xe9 es Markdown?",source:"@site/docs/tutoriales/guia-markdown.md",slug:"/tutoriales/guia-markdown",permalink:"/docs/tutoriales/guia-markdown",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/guia-markdown.md",version:"current",lastUpdatedBy:"Leister Francisco Alvarez Campos",lastUpdatedAt:1612313083,sidebar_label:"Guia Markdown",sidebar:"docs",previous:{title:"Tutorial de flujo de trabajo de Git",permalink:"/docs/tutoriales/tutorial-flujo-trabajo-git"},next:{title:"Gu\xeda GitHub",permalink:"/docs/tutoriales/guia-github"}},i=[{value:"\xbfQu\xe9 es Markdown?",id:"\xbfqu\xe9-es-markdown",children:[]},{value:"Sintaxis B\xe1sica",id:"sintaxis-b\xe1sica",children:[]},{value:"Sintaxis de Estructura",id:"sintaxis-de-estructura",children:[{value:"<strong>Lista no Ordenada</strong>",id:"lista-no-ordenada",children:[]},{value:"<strong>Lista Ordenada</strong>",id:"lista-ordenada",children:[]},{value:"<strong>Tabla</strong>",id:"tabla",children:[]},{value:"<strong>Check List</strong>",id:"check-list",children:[]},{value:"<strong>Salto de L\xednea</strong>",id:"salto-de-l\xednea",children:[]},{value:"<strong>Comentarios</strong>",id:"comentarios",children:[]}]},{value:"Otras Sintaxis",id:"otras-sintaxis",children:[{value:"<strong>Enlaces</strong>",id:"enlaces",children:[]},{value:"<strong>Im\xe1genes</strong>",id:"im\xe1genes",children:[]},{value:"<strong>Citas en Bloque</strong>",id:"citas-en-bloque",children:[]},{value:"<strong>L\xedneas Horizontales</strong>",id:"l\xedneas-horizontales",children:[]}]}],o={toc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"\xbfqu\xe9-es-markdown"},"\xbfQu\xe9 es Markdown?"),Object(b.b)("p",null,"Markdown es un lenguaje de marcado ligero que puede usar para agregar elementos de formato a documentos de texto sin formato."),Object(b.b)("p",null,"Markdown, creado por John Gruber en 2004, es ahora uno de los lenguajes de marcado m\xe1s populares del mundo. ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/getting-started/"}),"M\xe1s sobre Markdown"),"."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"sintaxis-b\xe1sica"},"Sintaxis B\xe1sica"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Componente"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Sintaxis"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.markdownguide.org/basic-syntax/#headings"}),"Encabezado")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"# H1   ",Object(b.b)("br",null)," ## H2 ",Object(b.b)("br",null),"  ### H3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.markdownguide.org/basic-syntax/#bold"}),"Tipograf\xeda Negrita")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"**Texto**")," or ",Object(b.b)("inlineCode",{parentName:"td"},"__texto__"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.markdownguide.org/basic-syntax/#italic"}),"Tipograf\xeda It\xe1lica")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"*texto*")," or  ",Object(b.b)("inlineCode",{parentName:"td"},"_texto_"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.markdownguide.org/basic-syntax/#blockquotes-1"}),"Citas en Bloque")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"> Citas en bloque")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#ordered-list"}),"Lista Num\xe9rica")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1. Primer Item ",Object(b.b)("br",null)," 2. Segundo Item ",Object(b.b)("br",null)," 3. Tercer Item")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#unordered-list"}),"Lista no Ordenada")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"- Primer Item ",Object(b.b)("br",null)," - Segundo Item ",Object(b.b)("br",null)," - Tercer Item")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#horizontal-rule"}),"Linea Horizontal")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"---")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.markdownguide.org/basic-syntax/#links"}),"Enlaces")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"[t\xedtulo](https://www.example.com)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://www.markdownguide.org/basic-syntax/#images-1"}),"Imagen")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"![texto](image.jpg)"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#line-break"}),"Salto de L\xednea")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"texto + doble espacio")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#comments"}),"Comentarios")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"\x3c!---Comentario---\x3e"))))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Puede obtener hasta 6 tama\xf1os de t\xedtulos diferentes seg\xfan el n\xfamero de ",Object(b.b)("inlineCode",{parentName:"p"},"#"))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"sintaxis-de-estructura"},"Sintaxis de Estructura"),Object(b.b)("h3",{id:"lista-no-ordenada"},Object(b.b)("strong",{parentName:"h3"},"Lista no Ordenada")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Sintaxis"',title:'"Sintaxis"'}),"    - Primer Item\n        - Sub Item\n    - Segundo Item\n    - Tercer Item  \n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Ejemplo:")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Primer Item",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Sub Item"))),Object(b.b)("li",{parentName:"ul"},"Segundo Item"),Object(b.b)("li",{parentName:"ul"},"Tercer Item")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/basic-syntax/#unordered-lists"}),"M\xe1s informaci\xf3n"),"."),Object(b.b)("h3",{id:"lista-ordenada"},Object(b.b)("strong",{parentName:"h3"},"Lista Ordenada")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Sintaxis"',title:'"Sintaxis"'}),"    1. Primer Item\n        1. Sub Item\n    2. Segundo Item\n    3. Tercer Item\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Ejemplo:")),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Primer Item",Object(b.b)("ol",{parentName:"li"},Object(b.b)("li",{parentName:"ol"},"Sub Item"))),Object(b.b)("li",{parentName:"ol"},"Segundo Item"),Object(b.b)("li",{parentName:"ol"},"Tercer Item")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"}),"M\xe1s informaci\xf3n"),"."),Object(b.b)("h3",{id:"tabla"},Object(b.b)("strong",{parentName:"h3"},"Tabla")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Sintaxis"',title:'"Sintaxis"'}),"|T\xedtulo Izquierda  | T\xedtulo centro | T\xedtulo Derecha |  \n| :----  |  :----:  |  ----:  |  \n| Izquierda| Centro | Derecha |  \n| Izquierda | Centro | Derecha |  \n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Ejemplo:"),"  "),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"T\xedtulo Izquierda"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"T\xedtulo"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"right"}),"T\xedtulo Derecha"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Izquierda"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Centro"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Derecha")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Izquierda"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Centro"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"right"}),"Derecha")))),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/extended-syntax/#tables"}),"M\xe1s informaci\xf3n"),"."),Object(b.b)("h3",{id:"check-list"},Object(b.b)("strong",{parentName:"h3"},"Check List")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Sintaxis"',title:'"Sintaxis"'}),"- [x] Primer opci\xf3n\n- [ ] Segunda opci\xf3n\n- [ ] Tercera opci\xf3n\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Ejemplo:")),Object(b.b)("ul",{className:"contains-task-list"},Object(b.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!0,disabled:!0}))," ","Primer opci\xf3n"),Object(b.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Segunda opci\xf3n"),Object(b.b)("li",Object(n.a)({parentName:"ul"},{className:"task-list-item"}),Object(b.b)("input",Object(n.a)({parentName:"li"},{type:"checkbox",checked:!1,disabled:!0}))," ","Tercera opci\xf3n")),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/extended-syntax/#task-lists"}),"M\xe1s informaci\xf3n"),"."),Object(b.b)("h3",{id:"salto-de-l\xednea"},Object(b.b)("strong",{parentName:"h3"},"Salto de L\xednea")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Sintaxis"',title:'"Sintaxis"'}),"Texto  \x3c!---Espacio Espacio---\x3e\nOtro texto\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Ejemplo:")),Object(b.b)("p",null,"Texto",Object(b.b)("br",{parentName:"p"}),"\n","Otro texto"),Object(b.b)("h3",{id:"comentarios"},Object(b.b)("strong",{parentName:"h3"},"Comentarios")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Sintaxis"',title:'"Sintaxis"'}),"[comentario]: <> (Este es un comentario, no se incluir\xe1)\n\n[//]: <> (Esto tambi\xe9n es un comentario)\n\n[//]: # (Este puede ser el comentario m\xe1s independiente de la plataforma) `\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"otras-sintaxis"},"Otras Sintaxis"),Object(b.b)("h3",{id:"enlaces"},Object(b.b)("strong",{parentName:"h3"},"Enlaces")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Sintaxis"',title:'"Sintaxis"'}),"[EOS Costa Rica](https://es.eoscostarica.io)\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Ejemplo:"),Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://es.eoscostarica.io"}),"EOS Costa Rica")),Object(b.b)("h3",{id:"im\xe1genes"},Object(b.b)("strong",{parentName:"h3"},"Im\xe1genes")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Sintaxis"',title:'"Sintaxis"'}),"![](https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png)\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Ejemplo:"),"  "),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png",alt:null}))),Object(b.b)("h3",{id:"citas-en-bloque"},Object(b.b)("strong",{parentName:"h3"},"Citas en Bloque")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Sintaxis"',title:'"Sintaxis"'}),"> Texto principal\n>> Texto\n>>\n> * Item\n> * Item\n> Texto\n> Texto final\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Ejemplo:")),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Texto principal"),Object(b.b)("blockquote",{parentName:"blockquote"},Object(b.b)("p",{parentName:"blockquote"},"Texto"),Object(b.b)("ul",{parentName:"blockquote"},Object(b.b)("li",{parentName:"ul"},"Item"),Object(b.b)("li",{parentName:"ul"},"Item\nTexto\nTexto final")))),Object(b.b)("h3",{id:"l\xedneas-horizontales"},Object(b.b)("strong",{parentName:"h3"},"L\xedneas Horizontales")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-markdown",metastring:'title="Sintaxis"',title:'"Sintaxis"'}),"---\n***\n- - - -\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Ejemplo:")),Object(b.b)("hr",null),Object(b.b)("hr",null),Object(b.b)("hr",null),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/basic-syntax/#horizontal-rules"}),"M\xe1s informaci\xf3n"),"."),Object(b.b)("hr",null),Object(b.b)("p",null,"Para m\xe1s informaci\xf3n acerca de la sintaxis de Markdown, visitar\n",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/cheat-sheet/"}),"esta p\xe1gina")))}s.isMDXComponent=!0}}]);