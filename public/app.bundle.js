!function(e){function t(t){for(var l,u,o=t[0],c=t[1],i=t[2],f=0,d=[];f<o.length;f++)u=o[f],n[u]&&d.push(n[u][0]),n[u]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);for(s&&s(t);d.length;)d.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],l=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(l=!1)}l&&(r.splice(t--,1),e=u(u.s=a[0]))}return e}var l={},n={0:0},r=[];function u(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.m=e,u.c=l,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)u.d(a,l,function(t){return e[t]}.bind(null,l));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var s=c;r.push([34,1]),a()}({101:function(e,t,a){},13:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(1),r=function(e){return e&&e.__esModule?e:{default:e}}(n),u=a(17);a(60);var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={test:!0},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"render",value:function(){var e=this.state.test;return r.default.createElement("header",{className:"Header"},e,r.default.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.default.createElement(u.Link,{className:"navbar-brand ",to:"/"},r.default.createElement("span",{className:"fa fa-vimeo v-icon"})),r.default.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#1navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.default.createElement("span",{className:"navbar-toggler-icon"})),r.default.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.default.createElement("ul",{className:"navbar-nav mr-auto"}),r.default.createElement("ul",{className:"navbar-nav"},r.default.createElement("li",{className:"nav-item"},r.default.createElement(u.Link,{className:"nav-link",to:"/about-me/who-am-i"},"About Me")),r.default.createElement("li",{className:"nav-item"},r.default.createElement(u.Link,{className:"nav-link",to:"/contact"},"Contact"))))))}}]),t}();t.default=o},14:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={IS_DESKTOP:"(min-width: 1024px)",IS_MOBILE:"(max-width: 991px)"}},15:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(e){return e&&e.__esModule?e:{default:e}}(a(1));a(69);t.default=function(){return l.default.createElement("div",{className:"Footer"},l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-6 col-lg-6 text-left footer-left"},"Copyright © 2018"),l.default.createElement("div",{className:"col-6 col-lg-6 text-right social-icon"},l.default.createElement("a",{href:"https://www.linkedin.com/in/vinay-p-9ba107127/"},l.default.createElement("span",{className:"fa fa-linkedin-square "})),l.default.createElement("a",{href:"https://github.com/vinayp21"},l.default.createElement("span",{className:"fa fa-github-square"})),l.default.createElement("a",{href:"https://www.facebook.com/vinayp21"},l.default.createElement("span",{className:"fa fa-facebook"})))))}},23:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(1)),n=r(a(24));function r(e){return e&&e.__esModule?e:{default:e}}a(62);t.default=function(){return l.default.createElement("div",{className:"AboutMeMenu text-center"},l.default.createElement("img",{src:"."+n.default,alt:"vinay",width:"200"}),l.default.createElement("div",{className:"info"},"Info"),l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("span",{className:"fa fa-address-card info-icon"}),l.default.createElement("span",null,l.default.createElement("b",null,"Address")),l.default.createElement("address",{className:"info-description"},"Malleshwaram, Bangalore, 560003")),l.default.createElement("li",null,l.default.createElement("span",{className:"fa fa-phone info-icon"}),l.default.createElement("span",null,l.default.createElement("b",null,"Phone"),l.default.createElement("div",{className:"info-description"},"+91 7411542565"))),l.default.createElement("li",null,l.default.createElement("span",{className:"fa fa-envelope info-icon"}),l.default.createElement("span",null,l.default.createElement("b",null,"Email"),l.default.createElement("div",{className:"info-description"},"vinayprakash321@gmail.com")))))}},24:function(e,t,a){e.exports=a.p+"circular.jpg"},25:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o(a(1)),n=o(a(0)),r=o(a(12)),u=o(a(14));function o(e){return e&&e.__esModule?e:{default:e}}a(65);var c=function(e){var t=e.selectedOption;return l.default.createElement("div",{className:"Information"},l.default.createElement("div",{className:"d-flex flex-row option"},l.default.createElement("hr",null),"skills"===t&&l.default.createElement("b",{className:"option-name"},"My Skills"),"who-am-i"===t&&l.default.createElement("b",{className:"option-name"},"About Me"),"work"===t&&l.default.createElement("b",{className:"option-name"},"Work Experience"),l.default.createElement("hr",null)),"skills"===t&&l.default.createElement("div",{className:"skill"},l.default.createElement(r.default,{query:u.default.IS_DESKTOP},l.default.createElement("table",{className:"table table-hover"},l.default.createElement("tbody",null,l.default.createElement("tr",null,l.default.createElement("td",null,l.default.createElement("b",null,"Programming Languages")),l.default.createElement("td",null,"JavasSript")),l.default.createElement("tr",null,l.default.createElement("td",null,l.default.createElement("b",null,"Javascript Frameworks/Libraries")),l.default.createElement("td",null,"ReactJS, EmberJS, AngularJs(1.5x), JQuery")),l.default.createElement("tr",null,l.default.createElement("td",null,l.default.createElement("b",null,"Build Tools")),l.default.createElement("td",null,"Webpack, Babel")),l.default.createElement("tr",null,l.default.createElement("td",null,l.default.createElement("b",null,"Web Tecnologies")),l.default.createElement("td",null,"HTML5, CSS3, SASS")),l.default.createElement("tr",null,l.default.createElement("td",null,l.default.createElement("b",null,"CSS Frameworks")),l.default.createElement("td",null,"Bootstarp, Foundation")),l.default.createElement("tr",null,l.default.createElement("td",null,l.default.createElement("b",null,"Server Side Scripting")),l.default.createElement("td",null,"Node JS, Express JS")),l.default.createElement("tr",null,l.default.createElement("td",null,l.default.createElement("b",null,"Version Control System")),l.default.createElement("td",null,"GIT"))))),l.default.createElement(r.default,{query:u.default.IS_MOBILE},l.default.createElement("ul",null,l.default.createElement("li",null,l.default.createElement("b",null,"Programming Languages")),l.default.createElement("li",null,"JavasSript"),l.default.createElement("li",null,l.default.createElement("b",null,"Javascript Frameworks/Libraries")),l.default.createElement("li",null,"ReactJS, EmberJS, AngularJs(1.5x), JQuery"),l.default.createElement("li",null,l.default.createElement("b",null,"Build Tools")),l.default.createElement("li",null,"Webpack, Babel"),l.default.createElement("li",null,l.default.createElement("b",null,"Web Tecnologies")),l.default.createElement("li",null,"HTML5, CSS3, SASS"),l.default.createElement("li",null,l.default.createElement("b",null,"CSS Frameworks")),l.default.createElement("li",null,"Bootstarp, Foundation"),l.default.createElement("li",null,l.default.createElement("b",null,"Server Side Scripting")),l.default.createElement("li",null,"Node JS, Express JS"),l.default.createElement("li",null,l.default.createElement("b",null,"Version Control System")),l.default.createElement("li",null,"GIT")))),"who-am-i"===t&&l.default.createElement("div",{className:"about-me-text"},"Hello,",l.default.createElement("p",null,"I am a web developer, currently working in Deloitte Consulting based out of Bangalore location, I have an experience of 5 years with a demonstrated history of working in the consulting industry. I am skilled in JavaScript and its frameworks/libraries and have extensively worked on web based applications. I have a Bachelor’s Degree focused in Electronics and Communications Engineering from Sapthagiri College of Engineering affiliated to Visvesvaraya Technological University")),"work"===t&&l.default.createElement("div",{className:"work-education"},l.default.createElement("div",{className:"row work-exp"},l.default.createElement("div",{className:"col-lg-4 col-12 duration"},"Jan 2014 - Dec 2015"),l.default.createElement("div",{className:"col-lg-8 col-12"},l.default.createElement("b",null,"Torry Harris Business Solutions"),l.default.createElement("div",null,"Associate Software Enginerr"),l.default.createElement("p",null,"Worked as a full stack developer, developing responsive web applications and using Java as backend language")),l.default.createElement("div",{className:"col-lg-4 col-12 duration"},"Dec 2015 - Present"),l.default.createElement("div",{className:"col-lg-8 col-12"},l.default.createElement("b",null,"Deloitte Consulting"),l.default.createElement("div",null,"Consultant"),l.default.createElement("p",null,"Worked as a Frontend/UI developer, developing responsive web applications and integrating with backend service"))),l.default.createElement("div",{className:"d-flex flex-row option"},l.default.createElement("hr",null),l.default.createElement("b",{className:"option-name"},"Education"),l.default.createElement("hr",null)),l.default.createElement("div",{className:"row work-exp"},l.default.createElement("div",{className:"col-lg-4 col-12 duration"},"2009 - 2013"),l.default.createElement("div",{className:"col-lg-8 col-12"},l.default.createElement("b",null,"Sapthagiri College Of Engineering, Bangalore"),l.default.createElement("div",null,"Bachelor Of Engineering"),l.default.createElement("div",null,"Visvesvarayaraya Technological University"),l.default.createElement("div",null,"Aggregate: 71.35%")))))};c.propTypes={selectedOption:n.default.string.isRequired},t.default=c},34:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=d(a(1)),n=d(a(36)),r=a(17),u=a(103),o=d(a(12)),c=d(a(59)),i=d(a(73)),s=d(a(14));a(95);var f=d(a(97));function d(e){return e&&e.__esModule?e:{default:e}}var m=l.default.createElement(r.HashRouter,null,l.default.createElement(r.Switch,null,l.default.createElement(u.AnimatedSwitch,{atEnter:{opacity:0},atLeave:{opacity:0},atActive:{opacity:1},className:"switch-wrapper"},l.default.createElement(r.Route,{exact:!0,path:"/",component:f.default}),l.default.createElement(o.default,{query:s.default.IS_DESKTOP},l.default.createElement(r.Route,{exact:!0,path:"/about-me",component:c.default}),l.default.createElement(r.Route,{path:"/about-me/:option",component:c.default}),l.default.createElement(r.Route,{path:"/contact",component:i.default})))));t.default=m,n.default.render(m,document.getElementById("root"))},59:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(1),r=f(n),u=f(a(0)),o=f(a(13)),c=f(a(23)),i=f(a(64)),s=f(a(15));function f(e){return e&&e.__esModule?e:{default:e}}a(71);var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.history;"/about-me"===e.history.location.pathname&&t.push("about-me/who-am-i")}},{key:"render",value:function(){var e=this.props.match.params.option;return r.default.createElement("div",{className:"AboutMePage"},r.default.createElement(o.default,null),r.default.createElement("div",{className:"about-me-section"},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-lg-3 menu panel"},r.default.createElement(c.default,null)),r.default.createElement("div",{className:"col-lg-9 content panel"},r.default.createElement(i.default,{selectedOption:e})))),r.default.createElement(s.default,null))}}]),t}();d.propTypes={match:u.default.object.isRequired,history:u.default.object.isRequired},t.default=d},60:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o(a(1)),n=o(a(0)),r=a(17),u=o(a(25));function o(e){return e&&e.__esModule?e:{default:e}}a(67);var c=function(e){var t=e.selectedOption;return l.default.createElement("div",{className:"AboutMeContent"},l.default.createElement("h1",{className:"name"},"Vinay Prakash"),l.default.createElement("div",{className:"role"},"UI Developer"),l.default.createElement("div",{className:"text-content"},l.default.createElement("div",{className:"d-flex flex-row justify-content-center"},l.default.createElement(r.Link,{to:"/about-me/who-am-i"},l.default.createElement("div",{className:"nav-icon  "+("who-am-i"===t?"selected":"")},l.default.createElement("span",{className:"fa fa-user"}))),l.default.createElement(r.Link,{to:"/about-me/skills"},l.default.createElement("div",{className:"nav-icon  "+("skills"===t?"selected":"")},l.default.createElement("span",{className:"fa fa-gears"}))),l.default.createElement(r.Link,{to:"/about-me/work"},l.default.createElement("div",{className:"nav-icon  "+("work"===t?"selected":"")},l.default.createElement("span",{className:"fa fa-briefcase"}))))),l.default.createElement(u.default,{selectedOption:t}))};c.propTypes={selectedOption:n.default.string.isRequired},t.default=c},65:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(1),r=s(n),u=s(a(74)),o=s(a(13)),c=s(a(15)),i=s(a(23));function s(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}a(93);var d=function(e){function t(){var e,a,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=l=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),l.state={name:"",emailId:"",message:"",phone:"",messageSuccess:!1},l.getformData=function(e){l.setState(function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},e.target.name,e.target.value))},l.submitConatctForm=function(e){e.preventDefault();var t=l.state,a=t.name,n=t.emailId,r=t.message,o=t.phone;u.default.post("https://vinay-prakash.herokuapp.com/sendMessage",{name:a,emailId:n,message:r,phone:o}).then(function(){l.setState({messageSuccess:!0})}).catch(function(e){console.log(e)}),l.setState({name:"",emailId:"",message:"",phone:""})},f(l,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.emailId,l=e.message,n=e.phone,u=e.messageSuccess;return r.default.createElement("div",{className:"contact"},r.default.createElement(o.default,null),r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-lg-3 menu panel"},r.default.createElement(i.default,null)),r.default.createElement("div",{className:"col-lg-9 form "},r.default.createElement("h1",{className:"text-center contact-heading"},"CONTACT"),r.default.createElement("form",{className:"contact-form",onSubmit:this.submitConatctForm},r.default.createElement("div",{className:"row"},r.default.createElement("div",{className:"col-3 label"},"Full Name*"),r.default.createElement("div",{className:"col-9"},r.default.createElement("input",{type:"text",onChange:this.getformData,name:"name",value:t,autoComplete:"off",required:!0})),r.default.createElement("div",{className:"col-3 label"},"Email Id*"),r.default.createElement("div",{className:"col-9"},r.default.createElement("input",{type:"email",onChange:this.getformData,name:"emailId",value:a,autoComplete:"off",required:!0})),r.default.createElement("div",{className:"col-3 label"},"Phone Number"),r.default.createElement("div",{className:"col-9"},r.default.createElement("input",{type:"text",onChange:this.getformData,name:"phone",value:n,autoComplete:"off"})),r.default.createElement("div",{className:"col-3 label"},"Message*"),r.default.createElement("div",{className:"col-9"},r.default.createElement("textarea",{col:"2",onChange:this.getformData,row:"4",name:"message",value:l,autoComplete:"off",required:!0})),r.default.createElement("input",{type:"submit",className:"btn btn-primary",value:"Submit"})),u&&r.default.createElement("p",null,"Thank You for your Message")))),r.default.createElement(c.default,null))}}]),t}();t.default=d},93:function(e,t,a){},97:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),n=a(1),r=m(n),u=m(a(0)),o=m(a(12)),c=m(a(13)),i=m(a(98)),s=m(a(15)),f=m(a(14)),d=m(a(25));function m(e){return e&&e.__esModule?e:{default:e}}a(101);var p=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.redirectUrl=function(){e.props.history.push("/")},e.selectOption=function(t){e.setState({selectedOption:t})},e.state={selectedOption:"who-am-i"},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),l(t,[{key:"render",value:function(){var e=this,t=this.state.selectedOption;return r.default.createElement("div",{className:"home"},r.default.createElement(c.default,null),r.default.createElement(i.default,null),r.default.createElement(o.default,{query:f.default.IS_MOBILE},r.default.createElement("div",{className:"mobile-nav row"},r.default.createElement("button",{type:"button",onClick:function(){return e.selectOption("who-am-i")},className:"nav-btn col-4 text-center "+("who-am-i"===t?"selected":"")},r.default.createElement("span",{className:"fa fa-user"})),r.default.createElement("button",{type:"button",onClick:function(){return e.selectOption("skills")},className:"nav-btn col-4 text-center "+("skills"===t?"selected":"")},r.default.createElement("span",{className:"fa fa-gears"})),r.default.createElement("button",{type:"button",onClick:function(){return e.selectOption("work")},className:"nav-btn col-4 text-center "+("work"===t?"selected":"")},r.default.createElement("span",{className:"fa fa-briefcase"}))),r.default.createElement(d.default,{selectedOption:t})),r.default.createElement(s.default,null))}}]),t}();p.propTypes={history:u.default.object.isRequired},t.default=p},98:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=r(a(1));a(99);var n=r(a(24));function r(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return l.default.createElement("div",{className:"Banner"},l.default.createElement("div",{className:"container"},l.default.createElement("img",{src:"."+n.default,alt:"vinay"}),l.default.createElement("p",{className:"name"},"VINAY PRAKASH"),l.default.createElement("div",{className:"d-flex flex-row divider"},l.default.createElement("hr",null),l.default.createElement("span",{className:"fa fa-star star-icon"}),l.default.createElement("hr",null)),l.default.createElement("div",{className:"role"},"WEB DEVELOPER")))}},99:function(e,t,a){}});