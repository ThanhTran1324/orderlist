(this["webpackJsonporder-list"]=this["webpackJsonporder-list"]||[]).push([[0],{17:function(e,t,a){e.exports=a(30)},30:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(3),r=a(6),o=a(4),c=a(7),u=a(0),l=a.n(u),m=a(10),s=a.n(m),y=a(9),b=a(5),p=[{name:"Wakame Salad",qty:0,unit:"Pack"},{name:"Kombu",qty:0,unit:"Pack"},{name:"Togarashi",qty:0,unit:"Pack"},{name:"Tofu Blue Silk",qty:0,unit:"Case"},{name:"Brown Rice",qty:0,unit:"Bag"},{name:"Black Rice",qty:0,unit:"Bag"},{name:"Soy Paper",qty:0,unit:"Pack"},{name:"Ryu-Chili oil",qty:0,unit:"Bottle"},{name:"Gochu Jang",qty:0,unit:"Pack"},{name:"Beef Base",qty:0,unit:"Pack"},{name:"Edamame",qty:0,unit:"Case"},{name:"Sushi Rice",qty:0,unit:"Bag"},{name:"Hondashi",qty:0,unit:"Pack"},{name:"Hijiki",qty:0,unit:"Case"},{name:"Katsou Bushi",par:" - Bonito Flakes",qty:0,unit:"Pack"},{name:"Furikake",par:" - Fish Seasoning",qty:0,unit:"Pack"},{name:"Dried Wakame",par:" - Miso",qty:0,unit:"Pack"},{name:"Shredded Nori",qty:0,unit:"Pack"},{name:"Aonori",qty:0,unit:"Pack"},{name:"Nori Full",qty:0,unit:"Case"},{name:"Nori 1/2 Cut",qty:0,unit:"Case"},{name:"Fun Chops",qty:0,unit:"Case"},{name:"Rice Vinegar",qty:0,unit:"Count"},{name:"Mirin",qty:0,unit:"Count"},{name:"White Miso",qty:0,unit:"Case"},{name:"Wasabi Powder",qty:0,unit:"Case"},{name:"Kimchee Base",qty:0,unit:"Bottle"},{name:"Matcha Cheesecake",qty:0,unit:"Pack"},{name:"Yuzu Juice",qty:0,unit:"Bottle"},{name:"Udon Noodles",qty:0,unit:"Case"},{name:"Ume",qty:0,unit:"Pack"},{name:"Chili thread",qty:0,unit:"Pack"},{name:"Japanese Curry Paste",qty:0,unit:"Pack"},{name:"Shiso",qty:0,unit:"Pack"},{name:"Wasabi Tobikko",par:" - Green",qty:0,unit:"Pack"},{name:"Masago",qty:0,unit:"Pack"},{name:"Yuzu Tobikko",par:" - Yellow",qty:0,unit:"Pack"},{name:"Hokkaido Scallop",par:" - box",qty:0,unit:"Pack"},{name:"Soft Shell Crab",qty:0,unit:"Pack"},{name:"Red Tobikko",qty:0,unit:"Pack"},{name:"Black Tobikko",qty:0,unit:"Pack"},{name:"Nobashi ebi",par:" - stretch shrimp",qty:0,unit:"Case"},{name:"Eel",qty:0,unit:"Case"},{name:"Sushi Ebi",qty:0,unit:"Pack"},{name:"Norwegian Mackerel",par:" - Saba",qty:0,unit:"Case"},{name:"Hamachi Fillet",qty:0,unit:"Case"},{name:"Smoked Salmon",qty:0,unit:"Count"},{name:"Ikura",par:" - Salmon Roe",qty:0,unit:"Pack"},{name:"Kanikama Osaki",qty:0,unit:"Case"},{name:"Crawfish Tail Meat",qty:0,unit:"Case"},{name:"Ama ebi",qty:0,unit:"Pack"},{name:"Sasa Bamboo Leaf",qty:0,unit:"Pack"},{name:"Togo Ramen Bowls Large",qty:0,unit:"Case"},{name:"Rice Net",qty:0,unit:"Count"}],k=Object(y.b)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=[];switch(t.type){case"INCREASE":return a=e.map((function(e,a){return a===t.payload&&(e.qty=42===a?e.qty+.5:e.qty+1),e})),window.localStorage.setItem("CGI_items",JSON.stringify(a)),a;case"DECREASE":return a=e.map((function(e,a){return a===t.payload&&e.qty-1>=0&&(e.qty=42===a?e.qty-.5:e.qty-1),e})),window.localStorage.setItem("CGI_items",JSON.stringify(a)),a;case"LOADITEMFROMFLOCALSTORAGE":return localStorage&&localStorage.getItem("CGI_items")?JSON.parse(localStorage.getItem("CGI_items")):e;case"RESET":return a=p,window.localStorage.setItem("CGI_items",JSON.stringify(a)),window.location.reload(),a;default:return e}}}),d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).renderItem=function(){return a.props.items.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.name," ",e.par),l.a.createElement("td",{style:{textAlign:"center"}},l.a.createElement("button",{onClick:function(){return a.props.decrease(t)},className:"btn btn-danger"},l.a.createElement("h4",null,"-")),l.a.createElement("span",{className:"font-weight-bold"},e.qty),l.a.createElement("button",{onClick:function(){return a.props.increase(t)},className:"btn btn-success"},l.a.createElement("h4",null,"+"))),l.a.createElement("td",{style:{textAlign:"center"}},e.unit))}))},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.loadItemFromLocalStorage()}},{key:"render",value:function(){return l.a.createElement("tbody",null,this.renderItem())}}]),t}(l.a.Component),h=Object(b.b)((function(e){return{items:e.items}}),{increase:function(e){return console.log(e),{type:"INCREASE",payload:e}},decrease:function(e){return{type:"DECREASE",payload:e}},loadItemFromLocalStorage:function(){return{type:"LOADITEMFROMFLOCALSTORAGE"}}})(d),q=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.props.reset,className:"btn btn-danger btn-block block_button"},"Reset"))}}]),t}(l.a.Component),E=Object(b.b)(null,{reset:function(){return{type:"RESET"}}})(q),C=a(16),O=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).renderTextOutPut=function(){var e="";return a.props.items.map((function(t){return t.qty>0?e=e+t.name+" - "+t.qty+" "+t.unit+"\n":""})),e},a.copied=function(){alert("Copied - Thank You For Using My Web-App.\nEmail: ThanhTran1324@gmail.com")},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"form-group"},l.a.createElement(C.CopyToClipboard,{text:this.renderTextOutPut()},l.a.createElement("button",{onClick:this.copied,className:"btn btn-success btn-block block_button"},"Click To Copy Message")),l.a.createElement("textarea",{style:{width:"100%",height:"500px"},className:"form-control",id:"textOutPut",readOnly:!0,value:this.renderTextOutPut()}))}}]),t}(l.a.Component),f=Object(b.b)((function(e){return{items:e.items}}))(O);a.d(t,"App",(function(){return S}));var S=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=Object(y.c)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());return l.a.createElement(b.a,{store:e},l.a.createElement("h1",{className:"text-center "},"Seito - Make Order To KGI"),l.a.createElement("table",{className:"table table-striped table-dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{width:"40%"}},"Name: "),l.a.createElement("th",{style:{textAlign:"center",width:"50%"}},"Qty: "),l.a.createElement("th",{style:{textAlign:"center",width:"10%"}},"Unit: "))),l.a.createElement(h,null)),l.a.createElement(f,null),l.a.createElement(E,null))}}]),t}(u.Component);s.a.render(l.a.createElement(S,null),document.querySelector("#root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a5734062.chunk.js.map