(this.webpackJsonpreact_demo_master20=this.webpackJsonpreact_demo_master20||[]).push([[0],{18:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),i=n.n(c),s=n(20),r=n.n(s),j=(n(27),n(7)),o=n(8),l=n(10),d=n(9),h=(n(18),n(11)),b=n(2),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("h1",{children:"Here comes the discover part."})}}]),n}(c.Component),u=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"GOT QUESTIONS?"}),Object(a.jsxs)("p",{children:["Please send an email to ",Object(a.jsx)("a",{className:"contact-a",href:"mailto:melindakleszken1021@gmail.com",children:" the creator"})," of the page."]})]})}}]),n}(c.Component),p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("h1",{children:"Here comes the pairing part."})}}]),n}(c.Component),x=n.p+"static/media/beer4.fb014f23.png",m=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"navbar",children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(h.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(h.b,{to:"/Discover",children:"Discover"})}),Object(a.jsx)("li",{children:Object(a.jsx)("img",{className:"App-logo",src:x,alt:"beer logo"})}),Object(a.jsx)("li",{children:Object(a.jsx)(h.b,{to:"/Pairing",children:"Pairing"})}),Object(a.jsx)("li",{children:Object(a.jsx)(h.b,{to:"/Contact",children:"Contact"})})]})})}}]),n}(c.Component),f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={data:[],name:"hn",loading:!0},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){fetch("https://api.punkapi.com/v2/beers/").then((function(e){return e.json()})).then((function(t){e.setState({data:t,loading:!1}),console.log({data:t})}))}),1e3)}},{key:"componentDidUpdate",value:function(){console.log("new value= "+this.state.data[1].name)}},{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(h.a,{children:[Object(a.jsx)("div",{className:"App-header",children:Object(a.jsx)(m,{})}),Object(a.jsx)("div",{className:"content",children:Object(a.jsxs)(b.c,{children:[Object(a.jsxs)(b.a,{exact:!0,path:"/",children:[Object(a.jsx)(g,{}),Object(a.jsx)("div",{className:"beer-details",children:this.state.loading?Object(a.jsx)("h1",{children:"loading..."}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Name: ",this.state.data[1].name]}),Object(a.jsxs)("p",{children:["About: ",this.state.data[1].description]}),Object(a.jsxs)("p",{children:["Best with: ",this.state.data[1].food_pairing[0],", ",this.state.data[1].food_pairing[1]]}),Object(a.jsx)("img",{src:this.state.data[1].image_url,alt:this.state.data[1].name})]})})]}),Object(a.jsxs)(b.a,{path:"/Discover",children:[Object(a.jsx)(O,{}),Object(a.jsx)("div",{className:"beer-details",children:this.state.loading?Object(a.jsx)("h1",{children:"loading..."}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Name: ",this.state.data[1].name]}),Object(a.jsxs)("p",{children:["About: ",this.state.data[1].description]}),Object(a.jsxs)("p",{children:["Best with: ",this.state.data[1].food_pairing[0],", ",this.state.data[1].food_pairing[1]]}),Object(a.jsx)("img",{src:this.state.data[1].image_url,alt:this.state.data[1].name})]})})]}),Object(a.jsx)(b.a,{path:"/Pairing",children:Object(a.jsx)(p,{})}),Object(a.jsx)(b.a,{path:"/Contact",children:Object(a.jsx)(u,{})})]})})]})})}}]),n}(i.a.Component),g=function(e){return Object(a.jsx)("div",{children:Object(a.jsx)("h2",{children:"Welcome"})})},v=f,y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};r.a.render(Object(a.jsx)(v,{}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.7f480c92.chunk.js.map