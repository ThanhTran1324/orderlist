(this["webpackJsonporder-list"]=this["webpackJsonporder-list"]||[]).push([[0],{16:function(e,t,n){e.exports=n(26)},26:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),c=n(6),l=n(4),o=n(7),u=n(0),i=n.n(u),s=n(10),m=n.n(s),b=n(9),p=n(5),E=[{name:"wasabi",qty:0,unit:"bag"},{name:"rice",qty:0,unit:"bag"},{name:"rice",qty:0,unit:"bag"},{name:"rice",qty:0,unit:"bag"},{name:"rice",qty:0,unit:"bag"}],y=Object(b.b)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREASE":var n=[];return n=e.map((function(e,n){return n===t.payload&&(e.qty=e.qty+1),e})),window.localStorage.setItem("CGI_items",JSON.stringify(n)),n;case"DECREASE":var a=[];return a=e.map((function(e,n){return n===t.payload&&e.qty-1>=0&&(e.qty=e.qty-1),e})),window.localStorage.setItem("CGI_items",JSON.stringify(a)),a;case"LOADITEMFROMFLOCALSTORAGE":return localStorage&&localStorage.getItem("CGI_items")?JSON.parse(localStorage.getItem("CGI_items")):e;case"RESET":return console.log("reset"),console.log(E),window.localStorage.setItem("CGI_items",JSON.stringify(E)),E;case"CREATE_MESSAGE":return console.log(e),e;default:return e}}}),d=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).renderItem=function(){return n.props.items.map((function(e,t){return console.log(e),i.a.createElement("tr",{key:t},i.a.createElement("td",null,e.name),i.a.createElement("td",null,i.a.createElement("button",{onClick:function(){return n.props.increase(t)},className:"btn btn-success"}," + "),": ",e.qty,i.a.createElement("button",{onClick:function(){return n.props.decrease(t)},className:"btn btn-danger"}," - ")),i.a.createElement("td",null,e.unit))}))},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.loadItemFromLocalStorage()}},{key:"render",value:function(){return i.a.createElement("tbody",null,this.renderItem())}}]),t}(i.a.Component),O=Object(p.b)((function(e){return{items:e.items}}),{increase:function(e){return{type:"INCREASE",payload:e}},decrease:function(e){return{type:"DECREASE",payload:e}},loadItemFromLocalStorage:function(){return{type:"LOADITEMFROMFLOCALSTORAGE"}}})(d),f=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{onClick:this.props.createMessage,className:"btn btn-success"},"Create Message"),i.a.createElement("button",{onClick:this.props.reset,className:"btn btn-danger"},"Reset Button"))}}]),t}(i.a.Component),g=Object(p.b)(null,{reset:function(){return{type:"RESET"}},createMessage:function(){return{type:"CREATE_MESSAGE"}}})(f),h=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,o=new Array(r),u=0;u<r;u++)o[u]=arguments[u];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).renderTextOutPut=function(){var e="";return n.props.items.map((function(t){return e=e+t.name+" "+t.qty+" "+t.unit+" ,\n"})),e},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null,"Your Message : "),i.a.createElement("button",null,"Copy Button"),i.a.createElement("textarea",{style:{width:"100%",height:"500px"},className:"form-control",id:"textOutPut",readOnly:!0,value:this.renderTextOutPut()}))}}]),t}(i.a.Component),j=Object(p.b)((function(e){return{items:e.items}}))(h);n.d(t,"App",(function(){return S}));var S=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=Object(b.c)(y);return i.a.createElement(p.a,{store:e},i.a.createElement("table",{className:"table table-secondary"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Name: "),i.a.createElement("th",null,"Qty: "),i.a.createElement("th",null,"Unit: "))),i.a.createElement(O,null)),i.a.createElement(g,null),i.a.createElement(j,null))}}]),t}(u.Component);m.a.render(i.a.createElement(S,null),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4c3e0774.chunk.js.map