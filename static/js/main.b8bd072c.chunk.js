(this["webpackJsonporder-list"]=this["webpackJsonporder-list"]||[]).push([[0],{17:function(t,e,a){t.exports=a(30)},30:function(t,e,a){"use strict";a.r(e);var n=a(2),r=a(3),i=a(6),u=a(4),c=a(7),l=a(0),o=a.n(l),s=a(10),b=a.n(s),m=a(9),y=a(5),p=[{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"},{name:"wasabi",qty:0,unit:"bag"}],g=Object(m.b)({items:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0,a=[];switch(e.type){case"INCREASE":return a=t.map((function(t,a){return a===e.payload&&(t.qty=t.qty+1),t})),window.localStorage.setItem("CGI_items",JSON.stringify(a)),a;case"DECREASE":return a=t.map((function(t,a){return a===e.payload&&t.qty-1>=0&&(t.qty=t.qty-1),t})),window.localStorage.setItem("CGI_items",JSON.stringify(a)),a;case"LOADITEMFROMFLOCALSTORAGE":return localStorage&&localStorage.getItem("CGI_items")?JSON.parse(localStorage.getItem("CGI_items")):t;case"RESET":return a=p,window.localStorage.setItem("CGI_items",JSON.stringify(a)),window.location.reload(),a;default:return t}}}),E=function(t){function e(){var t,a;Object(n.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).renderItem=function(){return a.props.items.map((function(t,e){return o.a.createElement("tr",{key:e},o.a.createElement("td",null,t.name),o.a.createElement("td",null,o.a.createElement("span",null,o.a.createElement("button",{onClick:function(){return a.props.increase(e)},className:"btn btn-success"},o.a.createElement("h4",null,"+")),t.qty,o.a.createElement("button",{onClick:function(){return a.props.decrease(e)},className:"btn btn-danger"},o.a.createElement("h4",null,"-")))),o.a.createElement("td",null,t.unit))}))},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"componentDidMount",value:function(){this.props.loadItemFromLocalStorage()}},{key:"render",value:function(){return o.a.createElement("tbody",null,this.renderItem())}}]),e}(o.a.Component),d=Object(y.b)((function(t){return{items:t.items}}),{increase:function(t){return{type:"INCREASE",payload:t}},decrease:function(t){return{type:"DECREASE",payload:t}},loadItemFromLocalStorage:function(){return{type:"LOADITEMFROMFLOCALSTORAGE"}}})(E),w=function(t){function e(){return Object(n.a)(this,e),Object(i.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return console.log("reseted"),o.a.createElement("div",null,o.a.createElement("button",{onClick:this.props.reset,className:"btn btn-danger btn-block block_button"},"Reset"))}}]),e}(o.a.Component),O=Object(y.b)(null,{reset:function(){return{type:"RESET"}}})(w),f=a(16),q=function(t){function e(){var t,a;Object(n.a)(this,e);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(c)))).renderTextOutPut=function(){var t="";return a.props.items.map((function(e){return e.qty>0?t=t+e.name+" "+e.qty+" "+e.unit+" ,\n":""})),t},a.copied=function(){alert("thanks")},a}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"form-group"},o.a.createElement(f.CopyToClipboard,{text:this.renderTextOutPut()},o.a.createElement("button",{onClick:this.copied,className:"btn btn-dark btn-block block_button"},"Copy Message")),o.a.createElement("textarea",{style:{width:"100%",height:"500px"},className:"form-control",id:"textOutPut",readOnly:!0,value:this.renderTextOutPut()}))}}]),e}(o.a.Component),h=Object(y.b)((function(t){return{items:t.items}}))(q);a.d(e,"App",(function(){return j}));var j=function(t){function e(){return Object(n.a)(this,e),Object(i.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=Object(m.c)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());return o.a.createElement(y.a,{store:t},o.a.createElement("table",{className:"table table-secondary"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{style:{width:"60%"}},"Name: "),o.a.createElement("th",null,"Qty: "),o.a.createElement("th",null,"Unit: "))),o.a.createElement(d,null)),o.a.createElement(h,null),o.a.createElement(O,null))}}]),e}(l.Component);b.a.render(o.a.createElement(j,null),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b8bd072c.chunk.js.map