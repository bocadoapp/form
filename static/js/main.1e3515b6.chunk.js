(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{103:function(e,a,t){e.exports=t(120)},113:function(e,a,t){},120:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(85),c=t.n(r),s=t(127),m=t(128),i=t(129),o=t(99),u=t(31),p=t(126),d=["ca","es"],f={es:{intro1:"Somos <logo>Bocado</span>! Estamos cocinando, en pleno confinamiento por la COVID19, una aplicaci\xf3n m\xf3vil con el objetivo de compartir recetas y men\xfas saludables y equilibrados entre usuarios.",intro2:"Nosotros estamos centrados en el desarrollo y el dise\xf1o pero nos gustar\xeda poder contar contigo porque nos ayudes a completar un recetario inicial. Hemos preparado un formulario r\xe1pido y sencillo para que puedas subir tantas recetas como quieras y puedas :).",intro3:"Nos comprometemos a darte acceso para que puedas testear la app cuando est\xe9 terminada antes de presentarla al p\xfablico."},ca:{intro1:"Som <logo>Bocado</logo>! Estem cuinant, en ple confinament per la COVID19, una aplicaci\xf3 m\xf2bil amb l'objectiu de compartir receptes i men\xfas saludables i equilibrats entre usuaris.",intro2:"Nosaltres estem centrats en el desenvolupament i el disseny per\xf2 ens agradaria poder comptar amb tu perqu\xe8 ens ajudis a completar un receptari inicial. Hem preparat un formulari r\xe0pid i senzill perqu\xe8 puguis pujar tantes receptes com vulguis i puguis :).",intro3:"Ens comprometem a donar-te acc\xe9s per a que puguis testejar l'app tan bon punt la tinguem enllestida abans que en fem la presentaci\xf3 p\xfablica ;)"}},E=t(67),b=t(36),g=t(86),v=t.n(g),x=function(){return l.a.createElement("nav",{className:"flex sticky top-0 md:flex-row justify-start items-center w-full py-3 px-6 md:px-20 lg:px-32 mb-10 md:mb-10"},l.a.createElement("div",{className:"flex justify-end md:justify-start"},l.a.createElement(u.b,{to:"/"},l.a.createElement("figure",null,l.a.createElement("img",{src:v.a,alt:"Bocado",style:{maxWidth:"150px"}})))),l.a.createElement("div",{className:"menu flex w-full justify-center ml-auto mr-auto"},l.a.createElement("a",{href:"https://blog.bocadoapp.com",target:"_blank",rel:"noreferrer noopener"},"Blog")),l.a.createElement("div",{className:"hidden md:flex pt-4 md:max-w-xs justfy-end"},"social"))},y=t(18),N={user:{name:"",email:""},name:"test",diners:"",time:"",cooking_time:"",cuisine:"",ingredients:[],steps:[],pics:[],videos:[],picsPerStep:[]},h=function(e){var a=e.children;return l.a.createElement(y.d,{initialValues:N,onSubmit:function(e){console.log("values",e)},validate:function(){}},(function(e){e.values,e.errors;return l.a.createElement(y.c,null,a)}))},w=function(e){var a=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"wrapper"},l.a.createElement(x,null),l.a.createElement(h,null,a)))},j=t(25),O=t(58),k=t.n(O),C=t(124),S=t(45),q=t(69),R=Object(n.createContext)(),F={step:Number(window.location.hash.split("/").find((function(e){return!isNaN(Number(e))})))||1,numSteps:4};function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_STEP":return Object(q.a)({},e,{step:a.step});default:return Object(q.a)({},e)}}function T(e){var a=e.children;return l.a.createElement(R.Provider,{value:Object(n.useReducer)(I,F)},a)}function B(){var e=Object(n.useContext)(R),a=Object(S.a)(e,2),t=a[0],l=a[1];return Object(q.a)({},t,{setStep:function(e){return l({type:"SET_STEP",step:e})}})}var _=function(e){var a=e.className,t=e.type,r=Object(b.g)(),c=B(),s=c.step,m=c.setStep,i=Object(C.a)().locale,o=Object(n.useCallback)((function(){var e="prev"===t?Number(s)-1:Number(s)+1;m(e),r.push("/".concat(i,"/").concat(e))}),[s,t,r,i,m]);return l.a.createElement("div",{onClick:o,style:{top:"50%"},className:k()(a,"absolute text-5xl p-5 text-gray-600 cursor-pointer","prev"===t?"left-0":"right-0")},"prev"===t?l.a.createElement("i",{className:"fas fa-angle-left"}):l.a.createElement("i",{className:"fas fa-angle-right"}))},A=function(){var e=B(),a=e.step,t=e.numSteps;return l.a.createElement(l.a.Fragment,null,a>1&&l.a.createElement(_,{type:"prev"}),a<t&&l.a.createElement(_,{type:"next"}))},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.arrows,t=void 0!==a&&a;return function(e){return function(a){return l.a.createElement(E.b.div,{exit:{opacity:0},initial:{opacity:0},animate:{opacity:1},className:"flex w-full md:max-w-screen-md lg:max-w-screen-md m-auto leading-relaxed"},l.a.createElement(e,a),t&&l.a.createElement(A,null))}}},P=D()((function(){var e=Object(b.g)(),a=Object(C.a)().locale,t=B().setStep,r=Object(n.useCallback)((function(n){n.preventDefault(),t(3),e.push("/".concat(a,"/3"))}),[e,a,t]);return l.a.createElement("div",{className:"w-full text-gray-600"},l.a.createElement(y.a,{type:"text",name:"name",placeholder:"Nom de la recepta",className:"text-3xl mb-8"}),l.a.createElement("div",{className:"flex items-center mb-5"},l.a.createElement("div",{className:"w-10 mr-5 text-center"},l.a.createElement("i",{className:"fas fa-users"})),l.a.createElement(y.a,{type:"number",name:"diners",placeholder:"Numero de comen\xe7als"})),l.a.createElement("div",{className:"flex items-center mb-5"},l.a.createElement("div",{className:"w-10 mr-5 text-center"},l.a.createElement("i",{className:"fas fa-stopwatch"})),l.a.createElement(y.a,{type:"number",min:"5",step:"5",name:"cooking_time",placeholder:"Temps cocci\xf3"})),l.a.createElement("div",{className:"flex items-center mb-5"},l.a.createElement("div",{className:"w-10 mr-5 text-center"},l.a.createElement("i",{className:"fas fa-tag"})),l.a.createElement(y.a,{name:"cuisine"},(function(e){var a=e.field;return l.a.createElement("select",Object.assign({},a,{className:"w-full h-10"}),l.a.createElement("option",null,"Tipus de cuina"),l.a.createElement("option",null,"Mediterr\xe0nea"),l.a.createElement("option",null,"Asi\xe0tica"))}))),l.a.createElement(j.a,{handleOnclick:r,className:"shadow-full mt-8 items-center text-orange-100",size:"sm"},l.a.createElement("i",{className:"fas fa-hamburger mr-3"}),"Afegir ingredients!"))})),z=D()((function(){return l.a.createElement("div",null,l.a.createElement("button",{type:"submit"},"Enviar"))})),V=t(125),H=D()((function(){var e=Object(b.g)(),a=B().setStep,t=Object(C.a)().locale,r=Object(n.useCallback)((function(n){n.preventDefault(),a(2),e.push("/".concat(t,"/2"))}),[e,t,a]);return l.a.createElement("div",null,l.a.createElement("div",{className:"flex flex-col md:flex-row justify-center items-center"},l.a.createElement("div",{className:"flex flex-col w-full md:w-1/2 md:mr-5 px-8 md:px-0"},l.a.createElement("h1",{className:"text-4xl"},l.a.createElement("span",{role:"img","aria-label":"hello"},"\ud83d\udc4b")),l.a.createElement("p",null,l.a.createElement(V.a,{id:"intro1",values:{logo:function(e){return l.a.createElement("span",{className:"bocado"},e)}}})),l.a.createElement("p",{className:"text-xs"},l.a.createElement(V.a,{id:"intro2"})),l.a.createElement("p",{className:"text-xs"},l.a.createElement(V.a,{id:"intro3"}))),l.a.createElement("div",{className:"flex flex-col w-full md:w-1/2 md:ml-5 px-8 md:px-0"},l.a.createElement("div",{className:"flex flex-col justify-center bg-gray-100 p-3 rounded-lg shadow-xl"},l.a.createElement("div",{className:"mb-3"},l.a.createElement("input",{type:"text",placeholder:"Nom i cognoms"})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("input",{type:"email",placeholder:"Correu electr\xf2nic"})),l.a.createElement("button",{className:"border bg-gray-300 text-gray-500"},"Registrar-me!")),l.a.createElement(j.a,{handleOnclick:r,className:"shadow-full mt-8 items-center text-orange-100",size:"sm"},l.a.createElement("i",{className:"fab fa-instagram mr-3"}),"Registrar-me amb Instagram"))))}));function J(e){var a=e.toggle,t=e.push,r={qty:Object(n.useRef)(null),unit:Object(n.useRef)(null),name:Object(n.useRef)(null)},c=Object(n.useCallback)((function(e){var n={qty:r.qty.current.value,unit:r.unit.current.selectedOptions[0].value,name:r.name.current.value};console.log("hola?",n),t(n),a(!1)}),[t,a,r.name,r.unit,r.qty]);return l.a.createElement("div",{className:"flex flex-col w-full"},l.a.createElement("div",{className:"w-full flex border border-gray-300 rounded text-gray-600 my-4"},l.a.createElement("div",{className:"w-32 flex items-center border-r border-gray-300"},l.a.createElement("input",{ref:r.qty,type:"number",className:"p-3 w-full border-0",placeholder:"Quantitat"})),l.a.createElement("div",{className:"w-24 flex items-center border-r border-gray-300"},l.a.createElement("select",{className:"h-full w-full",ref:r.unit},l.a.createElement("option",{value:"g"},"g"),l.a.createElement("option",{value:"kg"},"kg"),l.a.createElement("option",{value:"ml"},"ml"))),l.a.createElement("div",{className:"w-full flex items-center px-2"},l.a.createElement("i",{className:"fas fa-tag"}),l.a.createElement("input",{type:"text",className:"p-3 border-0",placeholder:"Ingredient",ref:r.name}))),l.a.createElement(j.a,{type:"button",className:"w-full",styled:"success",onClick:c},"Afegir"))}var M=D()((function(){var e=Object(n.useState)(!0),a=Object(S.a)(e,2),t=a[0],r=a[1],c=Object(n.useCallback)((function(){return r(!t)}),[t,r]);return l.a.createElement("div",{className:"w-full"},l.a.createElement(y.b,{name:"ingredients",render:function(e){var a=e.form.values,n=e.remove,s=e.push;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"flex"},l.a.createElement("button",{className:"border border-gray-300 bg-gray-100 text-gray-600 mr-2",onClick:c},"Nou ingredient"),l.a.createElement(j.a,{className:"ml-2",disabled:0===a.ingredients.length},"Fet!")),t&&l.a.createElement(J,{toggle:r,push:s}),a.ingredients.map((function(e,a){var t=e.name,r=e.qty,c=e.unit;return l.a.createElement("div",{key:"ing-".concat(a),className:"flex items-center justify-between py-2 my-2 border-b border-gray-200 text-gray-500"},l.a.createElement("span",null,r,c," ",l.a.createElement("span",{className:"text-gray-700"},t)),l.a.createElement("i",{className:"far fa-times-circle cursor-pointer",onClick:function(){return n(a)}}))})))}}))}));function L(e){var a=e.toggle,t=e.push,r={text:Object(n.useRef)(null)},c=Object(n.useCallback)((function(e){var n={text:r.text.current.value};t(n),a(!1)}),[t,a,r.text]);return l.a.createElement("div",{className:"flex flex-col w-full"},l.a.createElement("div",{className:"w-full flex"},l.a.createElement("textarea",{ref:r.text,className:"w-full border border-gray-300 rounded p-3 my-3 h-64 text-gray-700",placeholder:"Explicaci\xf3 del pas a seguir"})),l.a.createElement(j.a,{type:"button",className:"w-full",styled:"success",onClick:c},"Afegir"))}var Q=D()((function(){var e=Object(n.useState)(!0),a=Object(S.a)(e,2),t=a[0],r=a[1],c=Object(n.useCallback)((function(){return r(!t)}),[t,r]);return l.a.createElement("div",{className:"w-full"},l.a.createElement(y.b,{name:"steps",render:function(e){var a=e.form.values,n=e.remove,s=e.push;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"flex"},l.a.createElement("button",{className:"border border-gray-300 bg-gray-100 text-gray-600 mr-2",onClick:c},"Nou pas"),l.a.createElement(j.a,{className:"ml-2",disabled:0===a.steps.length},"Fet!")),t&&l.a.createElement(L,{toggle:r,push:s}),a.steps.map((function(e,a){var t=e.text;return l.a.createElement("div",{key:"step-".concat(a),className:"flex items-center justify-between py-2 my-2 border-b border-gray-200 text-gray-500"},l.a.createElement("span",null,l.a.createElement("span",{className:"text-gray-700"},t)),l.a.createElement("i",{className:"far fa-times-circle cursor-pointer",onClick:function(){return n(a)}}))})))}}))}));var U=function(){var e=Object(b.h)();return l.a.createElement(w,null,l.a.createElement(E.a,null,l.a.createElement(b.d,{location:e,key:e.pathname},l.a.createElement(b.b,{path:"/",exact:!0},l.a.createElement(b.a,{from:"/",to:"/ca/1"})),l.a.createElement(b.b,{path:"/:lang/1",exact:!0},l.a.createElement(H,null)),l.a.createElement(b.b,{path:"/:lang/2",exact:!0},l.a.createElement(P,null)),l.a.createElement(b.b,{path:"/:lang/3",exact:!0},l.a.createElement(M,null)),l.a.createElement(b.b,{path:"/:lang/4",exact:!0},l.a.createElement(Q,null)),l.a.createElement(b.b,{path:"/:lang/5",exact:!0},l.a.createElement(z,null)))))},W=(t(113),function(){var e=window.location.pathname.split("/").filter((function(e){return""!==e}))[0];if(e&&d.includes(e))return e;var a=window.localStorage.getItem("lang");return a&&d.includes(a)?a:"ca"}()),G=new s.a({cache:new m.a,link:Object(o.createUploadLink)({uri:"https://bocado-api.herokuapp.com/graphql"})});c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,{client:G},l.a.createElement(p.a,{locale:W,messages:f[W]},l.a.createElement(T,null,l.a.createElement(u.a,null,l.a.createElement(U,null)))))),document.getElementById("root"))},86:function(e,a,t){e.exports=t.p+"static/media/logo.ceaf2aeb.png"}},[[103,1,2]]]);
//# sourceMappingURL=main.1e3515b6.chunk.js.map