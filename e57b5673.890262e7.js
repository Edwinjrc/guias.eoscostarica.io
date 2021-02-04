(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{120:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return i})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),o=(t(0),t(130)),c={id:"tutorial-react",title:"React JS",sidebar_label:"React JS"},s={unversionedId:"tutoriales/tutorial-react",id:"tutoriales/tutorial-react",isDocsHomePage:!1,title:"React JS",description:"React es una librer\xeda de JavaScript que servir\xe1 para construir interfaces web y aplicaciones m\xf3viles con una extensi\xf3n llamada React Native. React trabaja con unidades de c\xf3digo que se trabajan de forma independiente. React tambi\xe9n utiliza una herramienta llamada JSX que permite una interacci\xf3n muy sencilla con JavaScript, es decir se podr\xe1 utilizar con HTML tambi\xe9n de forma sencilla.",source:"@site/docs/tutoriales/tutorial-react.md",slug:"/tutoriales/tutorial-react",permalink:"/docs/tutoriales/tutorial-react",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/tutoriales/tutorial-react.md",version:"current",lastUpdatedBy:"Edgar Parra",lastUpdatedAt:1612456332,sidebar_label:"React JS",sidebar:"docs",previous:{title:"Llaves de GitHub",permalink:"/docs/tutoriales/llaves-github"},next:{title:"Glosario",permalink:"/docs/herramientas/glosario"}},i=[{value:"Herramientas",id:"herramientas",children:[]},{value:"Extensiones",id:"extensiones",children:[]},{value:"Recomendaciones",id:"recomendaciones",children:[{value:"Estandares de JavaScript",id:"estandares-de-javascript",children:[]}]},{value:"DOM Virtual",id:"dom-virtual",children:[{value:"\xbfC\xf3mo Funciona?",id:"\xbfc\xf3mo-funciona",children:[]}]},{value:"Verificar Instalaciones",id:"verificar-instalaciones",children:[]},{value:"Iniciar la Primera Aplicaci\xf3n con React",id:"iniciar-la-primera-aplicaci\xf3n-con-react",children:[]},{value:"Primeros Pasos",id:"primeros-pasos",children:[]},{value:"\xbfQu\xe9 son los Componentes?",id:"\xbfqu\xe9-son-los-componentes",children:[{value:"Componentes",id:"componentes",children:[]},{value:"Ciclo de Vida de los Componentes",id:"ciclo-de-vida-de-los-componentes",children:[]},{value:"Componente de Orden Superior (HoC)",id:"componente-de-orden-superior-hoc",children:[]}]},{value:"Componentes en EOS Costa Rica",id:"componentes-en-eos-costa-rica",children:[{value:"Storybook",id:"storybook",children:[]}]},{value:"Conceptos Principales",id:"conceptos-principales",children:[]},{value:"Lo Nuevo en React",id:"lo-nuevo-en-react",children:[{value:"Hooks",id:"hooks",children:[]}]},{value:"React m\xe1s Limpio con Hooks",id:"react-m\xe1s-limpio-con-hooks",children:[]}],l={toc:i};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"React es una librer\xeda de JavaScript que servir\xe1 para construir interfaces web y aplicaciones m\xf3viles con una extensi\xf3n llamada ",Object(o.b)("a",{parentName:"p",href:"https://reactnative.dev/"},"React Native"),". React trabaja con unidades de c\xf3digo que se trabajan de forma independiente. React tambi\xe9n utiliza una herramienta llamada JSX que permite una interacci\xf3n muy sencilla con JavaScript, es decir se podr\xe1 utilizar con HTML tambi\xe9n de forma sencilla."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://es.reactjs.org/"},"M\xe1s Informaci\xf3n"))),Object(o.b)("h2",{id:"herramientas"},"Herramientas"),Object(o.b)("p",null,"Para React se sugieren las siguientes herramientas, las herramientas con * son necesarias:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navegador Web (Google Chorme, Moxilla Firefox)*"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://nodejs.org/es/"},"Node Js"),"*"),Object(o.b)("li",{parentName:"ul"},"Administradores de Paquetes (",Object(o.b)("a",{parentName:"li",href:"https://brew.sh/index_es"},"Brew"),", ",Object(o.b)("a",{parentName:"li",href:"https://chocolatey.org/"},"Chocolatey")," )."),Object(o.b)("li",{parentName:"ul"},"Terminal, se puede utilizar con la terminal nativa pero te recomendamos ",Object(o.b)("a",{parentName:"li",href:"https://iterm2.com/"},"iTerm2")," , ",Object(o.b)("a",{parentName:"li",href:"https://hyper.is/"},"Hyper")," , ",Object(o.b)("a",{parentName:"li",href:"https://cmder.net/"},"cmder"),"."),Object(o.b)("li",{parentName:"ul"},"Editor de c\xf3digo, se sugiere que se utilice ",Object(o.b)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code"),".")),Object(o.b)("h2",{id:"extensiones"},"Extensiones"),Object(o.b)("p",null,"Estas extensiones son una recomendaci\xf3n para mejorar tu experiencia en el desarrollo con React."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Instalar ",Object(o.b)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es"},"React Developer Tools"),",  esta se encuentra en la chrome web store (Navegador Web)."),Object(o.b)("li",{parentName:"ul"},"Debugger for Chrome (Visual Studio Code)."),Object(o.b)("li",{parentName:"ul"},"React Extension Pack (Visual Studio Code)."),Object(o.b)("li",{parentName:"ul"},"Auto Close Tag (Visual Studio Code)."),Object(o.b)("li",{parentName:"ul"},"Prettier - Code Formatter (Visual Studio Code)."),Object(o.b)("li",{parentName:"ul"},"ESLint - Estandares de JavaScript (Visual Studio Code).")),Object(o.b)("h2",{id:"recomendaciones"},"Recomendaciones"),Object(o.b)("p",null,"Es importante para el desarrollo de un buen proyecto la organizaci\xf3n de los diferentes componentes del trabajo, por esto es recomendado generar carpetas que tengan contenido similar, algunos ejemplos son:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Carpeta de ",Object(o.b)("em",{parentName:"li"},"components"),", en donde se guardan los componentes que necesiten."),Object(o.b)("li",{parentName:"ul"},"Carpeta de ",Object(o.b)("em",{parentName:"li"},"styles"),", en donde se guardan los estilos del proyecto por ejemplo los archivos ",Object(o.b)("inlineCode",{parentName:"li"},".css"),"."),Object(o.b)("li",{parentName:"ul"},"Carpeta de ",Object(o.b)("em",{parentName:"li"},"assets"),", en donde se guardan los recursos est\xe1ticos de la aplicaci\xf3n como por ejemplo las imagenes.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Recordar cambiar las referencias una vez ordenado tu proyecto y no hacer cambios, a menos que sea realmente necesario, en el index.js")),Object(o.b)("h3",{id:"estandares-de-javascript"},"Estandares de JavaScript"),Object(o.b)("p",null,"Es importante seguir los estandares de JavaScript, es recomendado utilizar la librer\xeda ",Object(o.b)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," para ayudarte a seguir estos ",Object(o.b)("a",{parentName:"p",href:"https://standardjs.com/rules.html"},"estandares de JavaScript"),"."),Object(o.b)("h2",{id:"dom-virtual"},"DOM Virtual"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Modelo en Objetos para la Representaci\xf3n de Documentos")," (Document Object Model por sus siglas en ingles) es esencialmente una interfaz de plataforma que proporciona un conjunto est\xe1ndar de objetos para representar documentos HTML, XHTML y XML.\u200b Un modelo est\xe1ndar sobre c\xf3mo pueden combinarse dichos objetos, y una interfaz est\xe1ndar para acceder a ellos y manipularlos."),Object(o.b)("p",null,"React se dio cuenta que actualizar la pantalla completa es una tarea que puede tener muchos costos en rendimiento y tiempo. Entonces creo un DOM Virtual. Este objeto DOM virtual es identico al objeto DOM de JavaScript."),Object(o.b)("h3",{id:"\xbfc\xf3mo-funciona"},"\xbfC\xf3mo Funciona?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"El DOM virtual completo se actualiza."),Object(o.b)("li",{parentName:"ul"},"El DOM virtual se compara con una versi\xf3n anterior a la actualizaci\xf3n. React se da cuenta de cuales objetos cambiaron."),Object(o.b)("li",{parentName:"ul"},"El objeto actualiazado y solo ese objeto se actualiza en el DOM real."),Object(o.b)("li",{parentName:"ul"},"Cambios en el DOM real causa que la pantalla cambie.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Este proceso se le conoce como la reconciliaci\xf3n.")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"verificar-instalaciones"},"Verificar Instalaciones"),Object(o.b)("p",null,"Verificar Node js, con estos comandos se puede verificar la versi\xf3n y adem\xe1s si est\xe1n instalados."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ node -v\n#v14.15.2\n$ npm -v\n#6.14.9\n")),Object(o.b)("h2",{id:"iniciar-la-primera-aplicaci\xf3n-con-react"},"Iniciar la Primera Aplicaci\xf3n con React"),Object(o.b)("p",null,'Vamos a crear una primera aplicaci\xf3n con React en donde se van a ver reflejados algunas de las funcionalidades de React, en este caso debes cambiar "nombre_de_tu_aplicaci\xf3n" por el nombre que desees, para hacer m\xe1s sencilla la lectura de ahora en adelante se utilizara my-app.'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'$ npx create-react-app "nombre_de_tu_aplicaci\xf3n"\n')),Object(o.b)("p",null,"Ahora debes entrar a tu directorio de my-app y arrancar tu aplicaci\xf3n."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ cd my-app\n$ yarn start\n")),Object(o.b)("p",null,"Para ver tu c\xf3digo debes utilizar, duplicando tu terminal, lo siguiente: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"$ code .\n")),Object(o.b)("h2",{id:"primeros-pasos"},"Primeros Pasos"),Object(o.b)("p",null,"Una vez abierto el c\xf3digo en tu editor, en este caso recomendablemente Visual Studio Code, puedes navegar hasta encontrar dentro de la carpeta ",Object(o.b)("em",{parentName:"p"},"src")," el archivo ",Object(o.b)("inlineCode",{parentName:"p"},"App.js")," con un contenido igual a este:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'import logo from \'./logo.svg\';\nimport \'./App.css\';\n\nfunction App() {\n  return (\n    <div className="App">\n      <header className="App-header">\n        <img src={logo} className="App-logo" alt="logo" />\n        <p>\n          Editar <code>src/App.js</code> and save to reload.\n        </p>\n        <a\n          className="App-link"\n          href="https://reactjs.org"\n          target="_blank"\n          rel="noopener noreferrer"\n        >\n          Learn React\n        </a>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),Object(o.b)("p",null,"Puedes cambiar el contenido por el siguiente y hacer los cambios que desees como primeros pasos para tu aventura en React. Adem\xe1s, puedes ver los cambios en tu navegador, para esto debes mantener tu terminal con el servidor abierto."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"import { Component } from 'react';\n\nimport logo from './logo.svg';\nimport './App.css';\n\nclass App extends Component{\n  render(){\n  return (\n    <div className=\"App\">\n      <p>Hola Mundo</p>\n    </div>\n  );\n}\n}\nexport default App;\n")),Object(o.b)("h2",{id:"\xbfqu\xe9-son-los-componentes"},"\xbfQu\xe9 son los Componentes?"),Object(o.b)("p",null,"Los componentes se definen como una unidad \xfanica de c\xf3digo que tendr\xe1 una responsabilidad asignada de manera espec\xedfica que se podr\xe1 encapsular determinados comportamientos en los componentes."),Object(o.b)("p",null,"Este es un ejemplo de un componente. Crea un nuevo archivo dentro de tu carpeta de ",Object(o.b)("inlineCode",{parentName:"p"},"componentes")," con el nombre de ",Object(o.b)("inlineCode",{parentName:"p"},"header.js")," y de esta manera poder utilizarlo posteriormente. Este tipo de componentes ya no se utiliza en EOS Costa Rica, sin embargo es importante entender su definici\xf3n y uso."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'import React, { Component } from "react";\n\nclass Header extends Component{\n    render(){\n        return(\n            <div>\n                <h1>Ejemplo </h1>\n            </div>\n        );\n    }\n}\n\nexport default Header;\n')),Object(o.b)("p",null,"Este componente se puede utilizar de la siguiente manera dentro del ",Object(o.b)("inlineCode",{parentName:"p"},"App.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},"import { Component } from 'react';\n\nimport './styles/App.css';\n\nimport Header from \"./components/header\" // Se debe agregar el import del componente\n\nclass App extends Component{\n  render(){\n  return (\n    <div className=\"App\">\n      <Header />  /* Se agrega el componente */\n    </div>\n  );\n}\n}\nexport default App;\n")),Object(o.b)("h3",{id:"componentes"},"Componentes"),Object(o.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/Y2hgEGPzTZY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(o.b)("h3",{id:"ciclo-de-vida-de-los-componentes"},"Ciclo de Vida de los Componentes"),Object(o.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/qnN_FuFNq2g",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(o.b)("h3",{id:"componente-de-orden-superior-hoc"},"Componente de Orden Superior (HoC)"),Object(o.b)("hr",null),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("em",{parentName:"p"},'"Un componente de orden superior (HOC por las siglas en ingl\xe9s de higher-order component) es una t\xe9cnica avanzada en React para el reuso de la l\xf3gica de componentes. Los HOCs no son parte de la API de React. Son un patr\xf3n que surge de la naturaleza composicional de React."'))),Object(o.b)("hr",null),Object(o.b)("p",null,"Para m\xe1s informacion sobre ",Object(o.b)("a",{parentName:"p",href:"https://es.reactjs.org/docs/higher-order-components.html#:~:text=Un%20componente%20de%20orden%20superior,de%20la%20l%C3%B3gica%20de%20componentes.&text=En%20concreto%2C%20un%20componente%20de,y%20devuelve%20un%20nuevo%20componente."},"HoC"),"."),Object(o.b)("h2",{id:"componentes-en-eos-costa-rica"},"Componentes en EOS Costa Rica"),Object(o.b)("p",null,"React utiliza componentes reusables para todas las aplicaciones, estos componentes pueden tener varias versiones, que puede generar conflictos al hacer peque\xf1os cambios. ",Object(o.b)("a",{parentName:"p",href:"https://storybook.js.org/"},"Storybook")," es una herramienta opensource que sirve para crear componentes visuales de forma aislada donde se pueden organizar los componentes y sus versiones en historias."),Object(o.b)("p",null,"EOS Costa Rica utiliza ",Object(o.b)("a",{parentName:"p",href:"https://components.eosio.cr/?path=/story/issuanceverifier--issuance-verifier-wrapper"},"Storybook EOS Costa Rica")," para la creaci\xf3n de sus componentes. Para utilizar estos componentes de ",Object(o.b)("inlineCode",{parentName:"p"},"eoscr-components")," te dejamos la gu\xeda de intalaci\xf3n en ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-components#installation"},"este sitio"),"."),Object(o.b)("h3",{id:"storybook"},"Storybook"),Object(o.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/BySFuXgG-ow",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),Object(o.b)("h2",{id:"conceptos-principales"},"Conceptos Principales"),Object(o.b)("p",null,"A continuaci\xf3n, te damos una lista de elementos que se toman de la documentaci\xf3n oficial de React para aplicar en tu proyecto."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/introducing-jsx.html"},"JSX")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/rendering-elements.html"},"Renderizando Elementos")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/components-and-props.html"},"Components y Propiedades")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/state-and-lifecycle.html"},"Estado y Ciclo de Vida")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/handling-events.html"},"Manejando Eventos")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/conditional-rendering.html"},"Renderizado Condicional")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/lists-and-keys.html"},"Listas y Keys")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/forms.html"},"Formularios")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/lifting-state-up.html"},"Levantando el Estado")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/composition-vs-inheritance.html"},"Composici\xf3n vs. Herencia"))),Object(o.b)("h2",{id:"lo-nuevo-en-react"},"Lo Nuevo en React"),Object(o.b)("h3",{id:"hooks"},"Hooks"),Object(o.b)("p",null,"Hooks son una nueva caracter\xedstica en React 16.8. Estos te permiten usar el estado y otras caracter\xedsticas de React sin escribir una clase."),Object(o.b)("p",null,"Los Hooks son funciones que te permiten \u201cenganchar\u201d el estado de React y el ciclo de vida desde componentes funcionales. Los hooks no funcionan dentro de las clases estos te permiten usar React sin clases. (No recomendamos reescribir tus componentes existentes de la noche a la ma\xf1ana, pero puedes comenzar a usar Hooks en los nuevos si quieres)."),Object(o.b)("p",null,"Se tiene:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-state.html"},"Hook de Estado")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-effect.html"},"Hook de Effecto")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-reference.html#usecontext"},"Hook de Contexto"))),Object(o.b)("p",null,"Otros tipos:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-reference.html#usereducer"},"useReducer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-reference.html#usecallback"},"useCallback")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-reference.html#usememo"},"useMemo")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-reference.html#useref"},"useRef")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-reference.html#useimperativehandle"},"useImperativeHandle")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect"},"useLayoutEffect")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://es.reactjs.org/docs/hooks-reference.html#usedebugvalue"},"useDebugValue"))),Object(o.b)("p",null,"Este es un ejemplo de utilizaci\xf3n, se puede reemplazar el c\xf3digo de tu ",Object(o.b)("inlineCode",{parentName:"p"},"App.js")," para probarlo. En este ejemplo muestran las dimensiones de la pantalla aun cuando se re-dimensiona."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-javascript"},'import React , { useState, useEffect } from "react";\n\nimport "./styles/App.css"\n\nconst App = () => {\n  const [width,setWidth] = useState(window.innerWidth);\n  const [height, setHeight]= useState(window.innerHeight);\n\n  const updateDimensions = () => {\n    setWidth(window.innerWidth);\n    setHeight(window.innerHeight);\n  }\n\n  useEffect( () => {\n    window.addEventListener(\'resize\', updateDimensions);\n\n    return() => {\n      window.removeEventListener(\'resize\',updateDimensions);\n    }\n  }\n  )\n  return(\n    <div className="App">\n      Width = {width}\n      <br/>\n      Height = {height}\n    </div>\n  );\n}\nexport default App;\n')),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://es.reactjs.org/docs/hooks-rules.html"},Object(o.b)("strong",{parentName:"a"},"Reglas Recomendadas"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",{parentName:"p",href:"https://es.reactjs.org/docs/hooks-intro.html"},"M\xe1s Informaci\xf3n"))),Object(o.b)("h2",{id:"react-m\xe1s-limpio-con-hooks"},"React m\xe1s Limpio con Hooks"),Object(o.b)("iframe",{width:"100%",height:"350",src:"https://www.youtube.com/embed/dpw9EHDh2bM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}p.isMDXComponent=!0},130:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return m}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),p=function(e){var a=r.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=p(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),b=n,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||o;return t?r.a.createElement(m,s(s({ref:a},l),{},{components:t})):r.a.createElement(m,s({ref:a},l))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<o;l++)c[l]=t[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);