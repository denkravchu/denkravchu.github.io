!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e){function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],o=!0,n=!1,a=void 0;try{for(var c,s=t[Symbol.iterator]();!(o=(c=s.next()).done)&&(r.push(c.value),!e||r.length!==e);o=!0);}catch(t){n=!0,a=t}finally{try{o||null==s.return||s.return()}finally{if(n)throw a}}return r}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=t[r];return o}var a,c,s=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=o(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,c=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw a}}}}(document.querySelectorAll('a[href*="#"]'));try{var l=function(){var t=a.value;t.addEventListener("click",(function(e){e.preventDefault();var r=t.getAttribute("href").substr(1);console.log(e.preventDefault),document.getElementById(r).scrollIntoView({behavior:"smooth",block:"start"})}))};for(s.s();!(a=s.n()).done;)l()}catch(t){s.e(t)}finally{s.f()}if(window.matchMedia("(min-width: 1080px)").matches){var i=function(t){var e=t.split("-")[1];switch(t.split("-")[0]){case"background":S.style.left="".concat(e<0?100:e>50?50:100-e,"%");break;case"indicator":q.style.height="".concat(e/(2*k/100)*2,"%");break;case"circle":e<=Y?w[0].classList.add("circleActive"):w[0].classList.remove("circleActive"),e<=k-Y&&e>Y?w[1].classList.add("circleActive"):w[1].classList.remove("circleActive"),e>k-Y?w[2].classList.add("circleActive"):w[2].classList.remove("circleActive");break;case"text":e>3?L[0].classList.add("frameIn"):L[0].classList.remove("frameIn"),e>=Y?(L[0].classList.add("frameOut"),L[1].classList.add("frameIn")):(L[0].classList.remove("frameOut"),L[1].classList.remove("frameIn")),e>=k-Y?(L[1].classList.add("frameOut"),L[2].classList.add("frameIn")):(L[1].classList.remove("frameOut"),L[2].classList.remove("frameIn"))}},f=function(t,e){var r=t.platform,o=t.shadow,n=t.block1,a=t.block2,c=t.block3;e<=1&&(r.style.opacity=-.5+e,r.style.transform="scale(".concat(e,")")),e<=2&&(o.style.transform="translateY(".concat(8-4*e,"rem)"),o.style.opacity=e-.5),e>2.5&&(o.style.transform="translateY(".concat(e,"rem)"),o.style.opacity=3-e),e>=1&&e<=2&&(r.style.transform="scale(1)",n.style.transform="translateY(".concat(3*e/2-3,"rem)"),a.style.transform="translateY(".concat(5*e/2-5,"rem)"),c.style.transform="translateY(".concat(8*e/2-8,"rem)"),n.style.opacity=1,a.style.opacity=1,c.style.opacity=1),e<1&&(n.style.transform="translateY(-3rem)",a.style.transform="translateY(-5rem)",c.style.transform="translateY(-8rem)",n.style.opacity=0,a.style.opacity=0,c.style.opacity=0),e>2.5&&(r.style.transform="scale(".concat(e-1.5,")"),n.style.transform="scale(".concat(e-1.5,")"),a.style.transform="scale(".concat(e-1.5,")"),c.style.transform="scale(".concat(e-1.5,")"),r.style.opacity=3-e,n.style.opacity=3.5-e,a.style.opacity=3.5-e,c.style.opacity=3.5-e)},y=function(t,e){var o=t.lines,n=t.computer,a=t.smallBlocks,c=t.smallLights,s=r(c=void 0===c?[]:c,3),l=s[0],i=s[1],f=s[2],y=t.bigBlock,u=t.planet,m=t.lightAround;e<3&&(o.style.opacity=0,n.style.opacity=0),e>=3&&(o.style.opacity=1,n.style.opacity=1),e>=3.5&&e<=4&&(a.style.opacity=1,a.style.transform="translateY(".concat(-4+e,"rem)")),e<3.5&&(a.style.opacity=0,a.style.transform="translateY(-4rem)"),l.style.opacity=e>=4.3?1:0,i.style.opacity=e>=4.5?1:0,f.style.opacity=e>=4.7?1:0,e>=3.7&&e<=4.2&&(y.style.opacity=1,y.style.transform="translateY(".concat(-4.2+e,"rem)")),m.style.opacity=e>=4.2?1:0,e<3.7&&(y.style.opacity=0,y.style.transform="translateY(-4.2rem)"),u.style.opacity=e>=4.5?1:0,e>=5&&(o.style.transform="scale(".concat(e-3.5,")"),n.style.transform="scale(".concat(e-3.5,")"),a.style.transform="scale(".concat(e-3.5,")"),l.style.transform="scale(".concat(e-3.5,")"),i.style.transform="scale(".concat(e-3.5,")"),f.style.transform="scale(".concat(e-3.5,")"),y.style.transform="scale(".concat(e-3.5,")"),u.style.transform="scale(".concat(e-3.5,")"),m.style.transform="scale(".concat(e-3.5,")")),e>=4.5&&e<5&&(o.style.transform="scale(1)",n.style.transform="scale(1)",a.style.transform="scale(1)",l.style.transform="scale(1)",i.style.transform="scale(1)",f.style.transform="scale(1)",y.style.transform="scale(1)",u.style.transform="scale(1)",m.style.transform="scale(1)")},u=function(t,e){var r=t.block,o=t.platform,n=t.shadow,a=t.wires;e<5&&(r.style.transform="translateY(-7rem)",r.style.opacity=0,o.style.transform="translateY(7rem)",o.style.opacity=0),e>=5&&e<=7&&(r.style.transform="translateY(".concat(-7+e,"rem)"),r.style.opacity=-6+e,o.style.transform="translateY(".concat(7-e,"rem)"),o.style.opacity=-6+e),e>=7.1&&(a.style.opacity=1,n.style.opacity=1,r.style.opacity=1,o.style.transform="translateY(0)",r.style.transform="translateY(0)",o.style.opacity=1),e<7&&(n.style.opacity=0,a.style.opacity=0)},m=function(t,e){t.addEventListener("load",(function(){addEventListener("scroll",(function(){var r=d(t,e);t.offsetTop+t.offsetHeight/4<pageYOffset+innerHeight&&t.offsetTop+t.offsetHeight/1.3>pageYOffset?p(r,!0):p(r,!1)}))}))},d=function(t,e){for(var r=[],o=1;o<=e;o++)r[o]=t.contentDocument.querySelector(".e".concat(o));return r},p=function(t,e){for(var r=0,o=1;o<t.length;o++)t[o].style.transition="".concat(x,"s ease .").concat(r+=o*D,"s"),t[o].style.opacity=e?1:0},v=document.querySelector("header .wrapper"),g=document.querySelector("main"),b=document.querySelector(".space"),h=v.offsetTop;g.offsetTop,b.offsetTop,b.offsetHeight;addEventListener("scroll",(function(){window.pageYOffset>=h?(v.classList.add("navFixed"),g.classList.add("mainFixed")):(v.classList.remove("navFixed"),g.classList.remove("mainFixed")),window.pageYOffset+innerHeight>=b.offsetHeight?(g.classList.add("offset"),g.classList.remove("mainFixed")):g.classList.remove("offset")}));var S=document.querySelector(".animationZone"),q=document.querySelector(".scrollIndicator .indicator"),w=document.querySelectorAll(".circles div"),L=document.querySelectorAll("main .frame .paragraph");addEventListener("scroll",(function(){if(window.pageYOffset+innerHeight<=b.offsetHeight){var t=Math.floor((pageYOffset-document.querySelector("main").offsetTop)/innerHeight*10),e=Math.floor((pageYOffset-document.querySelector("main").offsetTop)/innerHeight*100);i("background-".concat(e)),i("indicator-".concat(t)),i("circle-".concat(t)),i("text-".concat(t))}window.pageYOffset+innerHeight>b.offsetHeight&&(i("background-".concat(k)),i("indicator-".concat(k)),i("circle-".concat(k)),i("text-".concat(k)))}));var k=78,Y=Math.floor(k/3),A=document.querySelector(".firstAnimImage"),O=document.querySelector(".secondAnimImage"),H=document.querySelector(".thirdAnimImage");A.addEventListener("load",(function(){var t=(pageYOffset-document.querySelector("main").offsetTop)/innerHeight,e={platform:A.contentDocument.querySelector("#platform"),shadow:A.contentDocument.querySelector("#platformShadow"),block1:A.contentDocument.querySelector("#block1"),block2:A.contentDocument.querySelector("#block2"),block3:A.contentDocument.querySelector("#block3"),basicStyles:function(t){f(e,t)}},r={lines:O.contentDocument.querySelector("#lines"),computer:O.contentDocument.querySelector("#computer"),smallBlocks:O.contentDocument.querySelector("#smallBlocks"),smallLights:O.contentDocument.querySelectorAll("#smallLight"),bigBlock:O.contentDocument.querySelector("#bigBlock"),planet:O.contentDocument.querySelector("#planet"),lightAround:O.contentDocument.querySelector("#lightAround"),basicStyles:function(t){y(r,t)}},o={block:H.contentDocument.querySelector("#block"),platform:H.contentDocument.querySelector("#platform"),shadow:H.contentDocument.querySelector("#shadow"),wires:H.contentDocument.querySelector("#wires"),basicStyles:function(t){u(o,t)}};window.onload=function(){window.pageYOffset+innerHeight>b.offsetHeight?(e.basicStyles(k),r.basicStyles(k),o.basicStyles(k)):(e.basicStyles(t),r.basicStyles(t),o.basicStyles(t))},addEventListener("scroll",(function(){t=(pageYOffset-document.querySelector("main").offsetTop)/innerHeight,window.pageYOffset+innerHeight<=b.offsetHeight&&(f(e,t),y(r,t),u(o,t))}))}));document.querySelector("section.whatWeDo");var D=4,x=.2,I=document.querySelector(".background"),T=document.querySelector(".background3"),E=document.querySelector(".background4");m(I,26),m(T,18),m(E,8);var j=document.querySelectorAll(".textAnim");c=j,addEventListener("scroll",(function(){for(var t=0;t<c.length;t++)c[t].offsetTop<pageYOffset+innerHeight?c[t].classList.remove("unvisible"):c[t].classList.add("unvisible")}));var M=document.querySelectorAll(".anim");addEventListener("scroll",(function(){if(M[0].offsetTop+M[0].offsetHeight/4<pageYOffset+innerHeight)for(var t=0;t<M.length;t++)M[t].style.opacity=1,M[t].style.transform="translate(0)";else for(var e=0;e<M.length;e++)M[e].style.opacity=0,M[e].style.transform="translate(-3rem)"}))}else{var B=function(t){t.addEventListener("click",(function(t){F.classList.toggle("show"),document.body.style.overflow=""===document.body.style.overflow?"hidden":"",function(t){t.classList.toggle("burgerRotate")}(_)}))},_=document.querySelector(".btn-menu"),F=document.querySelector(".hooks"),P=(document.querySelectorAll(".btn-menu hr"),document.querySelectorAll(".hooks a"));B(_),B(P[0]),B(P[1]),B(P[2]),B(P[3]),B(P[4])}}]);