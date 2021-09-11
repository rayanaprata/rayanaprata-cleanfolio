(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(9),c=a(3),s=a(1),i=a(0),r=Object(s.createContext)(),l=function(e){var t=e.children,a=Object(s.useState)("light"),n=Object(c.a)(a,2),l=n[0],o=n[1];Object(s.useEffect)((function(){"dark"===localStorage.getItem("themeName")&&o("dark")}),[]);return Object(i.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://rayanaprata-cleanfolio.github.io/cleanfolio",j="RP.",b="Rayana Prata",h="Front End Developer Student",d="I need to be always looking for personal and professional growth. I believe time is a precious but limited resource. I try to use it in the smartest and most efficient way possible.",u="https://drive.google.com/file/d/1xg4pPVtwCR-7LkAkaJItSE9EnAfzHF6O/view?usp=sharing",m={linkedin:"https://www.linkedin.com/in/rayanaprata/en",github:"https://github.com/rayanaprata"},O=[{name:"Dev Finances",description:"Project for personal finance control developed during the first edition of Marathon Discover offered by Rocketseat.",stack:["HTML","CSS","Javascript"],sourceCode:"https://github.com/rayanaprata/dev-finances",livePreview:"https://rayanaprata.github.io/dev-finances/"},{name:"To do list",description:"Task list project, stores the data in LocalStorage, developed using only HTML, CSS and Javascript and made together with Dev Ed's youtube channel.",stack:["HTML","CSS","Javascript"],sourceCode:"https://github.com/rayanaprata/todo-list",livePreview:"https://rayanaprata.github.io/todo-list/"},{name:"Dashboard Star Wars",description:"Dashboard project using Star Wars API to learn and practice requests with Axios.",stack:["HTML","CSS","Javascript","Axios","JQuery","SWAPI - The Star Wars API","Moment.js","Google Charts"],sourceCode:"https://github.com/rayanaprata/dashboard-star-wars",livePreview:"https://rayanaprata.github.io/dashboard-star-wars/"}],p=["HTML","CSS","JavaScript","TypeScript","React","Styled Components","SASS","REST APIs","Git/GitHub","UI/UX Design","Figma/Adobe XD/Photoshop"],x="rayanaprata@uol.com.br",f=a(14),v=a.n(f),k=a(12),g=a.n(k),N=a(16),_=a.n(N),S=a(15),y=a.n(S),w=(a(26),function(){var e=Object(s.useContext)(r),t=Object(c.a)(e,1)[0],a=t.themeName,n=t.toggleTheme,l=Object(s.useState)(!1),o=Object(c.a)(l,2),j=o[0],b=o[1],h=function(){return b(!j)};return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[O.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})}):null,p.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:"Skills"})}):null,x?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:h,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:n,className:"center btn btn--icon","aria-label":"toggle theme",children:"dark"===a?Object(i.jsx)(g.a,{}):Object(i.jsx)(v.a,{})}),Object(i.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(i.jsx)(y.a,{}):Object(i.jsx)(_.a,{})})]})}),C=(a(32),function(){var e=o,t=j;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(w,{})]})}),P=a(10),I=a.n(P),T=a(17),A=a.n(T),E=(a(33),function(){var e=b,t=h,a=d,n=u,c=m;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:a&&a}),Object(i.jsxs)("div",{className:"about__contact center",children:[n&&Object(i.jsx)("a",{href:n,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),c&&Object(i.jsxs)(i.Fragment,{children:[c.github&&Object(i.jsx)("a",{href:c.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(I.a,{})}),c.linkedin&&Object(i.jsx)("a",{href:c.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(A.a,{})})]})]})]})}),J=a(7),L=a.n(J),D=a(18),H=a.n(D),R=(a(35),function(e){var t=e.project;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(i.jsx)("li",{className:"project__stack-item",children:e},L()())}))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(I.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(H.a,{})})]})}),M=(a(36),function(){return O.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:O.map((function(e){return Object(i.jsx)(R,{project:e},L()())}))})]}):null}),F=(a(37),function(){return p.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:p.map((function(e){return Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},L()())}))})]}):null}),W=a(19),G=a.n(W),z=(a(38),function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?n(!0):n(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),a?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(G.a,{fontSize:"large"})})}):null}),B=(a(39),function(){return x?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(x),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),U=(a(40),function(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Shekhar"})})}),X=(a(41),function(){var e=Object(s.useContext)(r),t=Object(c.a)(e,1)[0].themeName;return Object(i.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(i.jsx)(C,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(E,{}),Object(i.jsx)(M,{}),Object(i.jsx)(F,{}),Object(i.jsx)(B,{})]}),Object(i.jsx)(z,{}),Object(i.jsx)(U,{})]})});a(42);Object(n.render)(Object(i.jsx)(l,{children:Object(i.jsx)(X,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.fd9116e9.chunk.js.map