(this.webpackJsonpclothing=this.webpackJsonpclothing||[]).push([[0],{43:function(e,t,a){e.exports=a(82)},48:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),i=a.n(c),l=(a(48),a(10)),s=a.n(l),o=a(2),m=a(13),u=a(17),p=a(18),d=a(20),b=a(19),g=(a(50),a(4)),h=a(3),f=(a(55),a(56),Object(g.g)((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:" ".concat(n," menu-item"),onClick:function(){c.push("".concat(l.url).concat(i))}},console.log(l),r.a.createElement("div",{className:"bakimag",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("span",{className:"subtitle"},"Shop Now")))}))),E=(a(58),a(5)),v=Object(E.a)([function(e){return e.direct}],(function(e){return e.section})),y=Object(E.b)({sectio:v}),O=Object(h.b)(y)((function(e){var t=e.sectio;return console.log("ddddddddddddddd"),console.log(t),r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.title,a=e.imageUrl,n=e.size,c=e.id,i=e.linkUrl;return r.a.createElement(f,{title:t,imageUrl:a,key:c,size:n,linkUrl:i})})))})),k=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(O,null))},j=a(21),w=Object(E.a)([function(e){return e.shop}],(function(e){return e.item})),N=Object(E.a)([w],(function(e){return Object.keys(e).map((function(t){return console.log("aaaaaaaaaaaaaaaaaaaaaaa"),console.log(e[t]),e[t]}))})),U=(a(59),a(60),a(61),a(62),function(e){var t=e.inverted,a=e.isgug,n=e.children,c=Object(j.a)(e,["inverted","isgug","children"]);return r.a.createElement("button",Object.assign({className:"".concat(t?"inverted":" ","  ").concat(a?"igug":""," custom-button")},c),n)}),C={CART_TOGGLE:"CART_TOGGLE",ADD_ITEM:"ADD_ITEM",REMOV:"REMOV",REMOVITEM:"REMOVITEM"},x=function(){return{type:C.CART_TOGGLE}},T=function(e){return{type:C.ADD_ITEM,payload:e}},I=Object(h.b)(null,(function(e){return{addItem:function(t){e(T(t))}}}))((function(e){var t=e.item,a=e.addItem,n=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},c),r.a.createElement(U,{onClick:function(){return a(t)},inverted:!0},"Add to Cart")))})),S=function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(I,{key:e.id,item:e})}))))},P=Object(E.b)({it:N}),R=Object(h.b)(P)((function(e){var t=e.it;return console.log(t),r.a.createElement("div",{className:"collections-overview"},t.map((function(e){var t=e.id,a=Object(j.a)(e,["id"]);return r.a.createElement(S,Object.assign({key:t},a))})))})),M=(a(63),Object(h.b)((function(e,t){return{item:(a=t.match.params.cat,Object(E.a)([w],(function(e){return e[a]})))(e)};var a}))((function(e){var t=e.item,a=t.title,n=t.items;return console.log(t),r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(I,{key:e.id,item:e})}))))}))),B=function(e){var t=e.match;return console.log("xxxxxxxxxxxx"),console.log(t.path),r.a.createElement("div",{className:"shop-name"},r.a.createElement(g.b,{exact:!0,path:"".concat(t.path),component:R}),r.a.createElement(g.b,{path:"".concat(t.path,"/:cat"),component:M}))},A=(a(64),function(e){return e.cart}),q=Object(E.a)([A],(function(e){return e.cartItem})),V=Object(E.a)([A],(function(e){return e.hidden})),G=Object(E.a)([q],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),D=Object(E.a)([q],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),W=(a(65),Object(h.b)(null,(function(e){return{dele:function(t){e(function(e){return{type:C.REMOV,payload:e}}(t))},ader:function(t){e(T(t))},deler:function(t){e(function(e){return{type:C.REMOVITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,a=e.dele,n=e.ader,c=e.deler,i=t.name,l=t.imageUrl,s=t.quantity,o=t.price;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{onClick:function(){return c(t)},className:"arrow"},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{onClick:function(){return n(t)},className:"arrow"},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("span",{onClick:function(){a(t)},className:"remove-button"},"\u2715"))}))),z=a(38),J=a.n(z),L=function(e){var t=e.Price,a=100*t;return r.a.createElement(J.a,{label:"Pay Now",name:" Clothing Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/CUz.svg",description:"Your total is $".concat(t),amount:a,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Succesful!")},stripeKey:"pk_test_51HNZqjGJpfKZA2IE1qxPi9TeqnqrNTjTXfqDd2L1dzgxCni8nMDMK8JqQVVo0Eqnd91d4nPkgMHOjgIjmEsHGlrg00OCXREt5G"})},H=Object(E.b)({i:q,p:D}),_=Object(h.b)(H)((function(e){var t=e.i,a=e.p;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Descsription")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(W,{cartItem:e,key:e.id})})),r.a.createElement("div",{className:"total"},"TOTOAL:$",a," "),r.a.createElement("div",{className:"test-warning"},"*Please use the following test credit card for payments*",r.a.createElement("br",null),"4242 4242 4242 4242 - Exp: 01/20 - CVV: 123"),r.a.createElement(L,{Price:a}))})),F=a(9);a(66);function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var Y=r.a.createElement("title",null,"Group"),X=r.a.createElement("desc",null,"Created with Sketch."),Z=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),$=function(e){var t=e.svgRef,a=e.title,n=Q(e,["svgRef","title"]);return r.a.createElement("svg",K({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?Y:a?r.a.createElement("title",null,a):null,X,Z)},ee=r.a.forwardRef((function(e,t){return r.a.createElement($,K({svgRef:t},e))})),te=(a.p,a(22)),ae=a.n(te),ne=(a(67),a(71),function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n,r,c,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=re.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(r=e.sent,console.log(r),r.exists){e.next=18;break}return c=t.displayName,i=t.email,l=new Date,e.prev=10,e.next=13,n.set(Object(o.a)({displayName:c,email:i,ceatedAt:l},a));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.error("nhi banra bhaiyaa",e.t0.message);case 18:return e.abrupt("return",n);case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,a){return e.apply(this,arguments)}}());ae.a.initializeApp({apiKey:"AIzaSyDtIsEb3yPRiGTwPE1w7vnDcRfmOU75V5A",authDomain:"clothing-db-007.firebaseapp.com",databaseURL:"https://clothing-db-007.firebaseio.com",projectId:"clothing-db-007",storageBucket:"clothing-db-007.appspot.com",messagingSenderId:"1089691042113",appId:"1:1089691042113:web:78cc6d39762536950c21c0",measurementId:"G-EWWV74881B"});var re=ae.a.firestore(),ce=ae.a.auth(),ie=new ae.a.auth.GoogleAuthProvider;ie.setCustomParameters({prompt:"select_account"});var le=function(){return ce.signInWithPopup(ie)};ae.a;function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var me=r.a.createElement("g",null),ue=r.a.createElement("g",null),pe=r.a.createElement("g",null),de=r.a.createElement("g",null),be=r.a.createElement("g",null),ge=r.a.createElement("g",null),he=r.a.createElement("g",null),fe=r.a.createElement("g",null),Ee=r.a.createElement("g",null),ve=r.a.createElement("g",null),ye=r.a.createElement("g",null),Oe=r.a.createElement("g",null),ke=r.a.createElement("g",null),je=r.a.createElement("g",null),we=r.a.createElement("g",null),Ne=function(e){var t=e.svgRef,a=e.title,n=oe(e,["svgRef","title"]);return r.a.createElement("svg",se({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),me,ue,pe,de,be,ge,he,fe,Ee,ve,ye,Oe,ke,je,we)},Ue=r.a.forwardRef((function(e,t){return r.a.createElement(Ne,se({svgRef:t},e))})),Ce=(a.p,a(73),Object(h.b)((function(e){return{num:G(e)}}),(function(e){return{cartToggle:function(){e(x())}}}))((function(e){var t=e.cartToggle,a=e.num;return r.a.createElement("div",{className:"cart-icon"},r.a.createElement(Ue,{className:"shopping-icon",onClick:t}),r.a.createElement("span",{className:"item-count"},a))}))),xe=(a(74),a(75),function(e){var t=e.item,a=t.price,n=t.name,c=t.quantity,i=t.imageUrl;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:i,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},n),r.a.createElement("span",{className:"price"},c," x $",a)))}),Te=Object(h.b)((function(e){return{cartItem:q(e)}}),(function(e){return{toggle:function(){e(x())}}}))((function(e){var t=e.cartItem,a=e.toggle;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(xe,{key:e.id,item:e})})):r.a.createElement("span",{className:"cartEmpty"},"You Cart is Empty")),r.a.createElement(F.b,{to:"/checkout"},r.a.createElement(U,{onClick:a},"Go to Checkout ")))})),Ie=Object(E.a)([function(e){return e.user}],(function(e){return e.currentUser})),Se=Object(E.b)({currentUser:Ie,hidden:V}),Pe=Object(h.b)(Se)((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement(F.b,{className:"logo-container",to:"/"},r.a.createElement(ee,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(F.b,{className:"option",to:"/shop"},"SHOP"),r.a.createElement(F.b,{className:"option",to:"/contact"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){ce.signOut()}},"SIGN-OUT"):r.a.createElement(F.b,{className:"option",to:"/signin"},"SIGN-IN"),r.a.createElement(Ce,null)),a?null:r.a.createElement(Te,null))," ")})),Re=(a(76),a(16)),Me=(a(77),a(78),function(e){var t=e.handleChange,a=e.label,n=Object(j.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length,"? 'shrink':'' } form-input-label")},a):null)}),Be=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).submithandler=function(){var t=Object(m.a)(s.a.mark((function t(a){var n,r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,r=n.email,c=n.password,t.prev=2,t.next=5,ce.signInWithEmailAndPassword(r,c);case 5:e.setState({email:"",password:""}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),console.error("errorr aa gya");case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(Re.a)({},n,r))},e.state={email:"",password:""},e}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",null,"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.submithandler},r.a.createElement(Me,{name:"email",type:"email",label:"email",handleChange:this.handleChange,value:this.state.email,required:!0}),r.a.createElement(Me,{name:"password",type:"password",label:"password",handleChange:this.handleChange,value:this.state.password,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(U,{type:"submit",value:"submit the form"},"Sign-In"),r.a.createElement(U,{isgug:!0,onClick:le},"Sign-In With Goggle "))))}}]),a}(n.Component),Ae=(a(79),function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleSubmit=function(){var t=Object(m.a)(s.a.mark((function t(a){var n,r,c,i,l,o,m;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayName,c=n.email,i=n.password,l=n.confirmPassword,i===l){t.next=5;break}return alert("password dont match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,ce.createUserWithEmailAndPassword(c,i);case 8:return o=t.sent,m=o.user,t.next=12,ne(m,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log("not able to create documnet element for the user",t.t0.message);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(Re.a)({},a,n))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"}," I do not have a accoutn "),r.a.createElement("span",null,"  Sign up with your Email and password "),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(Me,{type:"text",value:t,name:"displayName",onChange:this.handleChange,label:"displayName",required:!0}),r.a.createElement(Me,{type:"email",value:a,name:"email",onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(Me,{type:"password",value:n,name:"password",onChange:this.handleChange,label:"password",required:!0}),r.a.createElement(Me,{type:"password",value:c,name:"confirmPassword",onChange:this.handleChange,label:"confirmPssword",required:!0}),r.a.createElement(U,{type:"submit"}," Sign Up")))}}]),a}(n.Component)),qe=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(Be,null),r.a.createElement(Ae,null))},Ve="SET_CURRENT_USER",Ge=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).unsubscribe=null,e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ce.onAuthStateChanged(function(){var t=Object(m.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,ne(a);case 3:t.sent.onSnapshot((function(t){e({currentUser:Object(o.a)({id:t.id},t.data())})}));case 5:e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Pe,null),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",component:k}),r.a.createElement(g.b,{path:"/shop",component:B}),r.a.createElement(g.b,{exact:!0,path:"/checkout",component:_}),r.a.createElement(g.b,{exact:!0,path:"/signin",render:function(){return e.props.currentUser?r.a.createElement(g.a,{to:"/"}):r.a.createElement(qe,null)}})))}}]),a}(n.Component),De=Object(h.b)((function(e){return{currentUser:Ie(e)}}),(function(e){return{setCurrentUser:function(t){e(function(e){return{type:Ve,payload:e}}(t))}}}))(Ge),We=a(12),ze=a(27),Je=a(39),Le=a.n(Je),He={currentUser:null},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ve:return Object(o.a)(Object(o.a)({},e),{},{currentUser:t.payload});default:return e}},Fe=a(42),Ke=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Fe.a)(e),[Object(o.a)(Object(o.a)({},t),{},{quantity:1})])},Qe=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{quantity:e.quantity-1}):e}))},Ye={hidden:!0,cartItem:[]},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.CART_TOGGLE:return Object(o.a)(Object(o.a)({},e),{},{hidden:!e.hidden});case C.ADD_ITEM:return Object(o.a)(Object(o.a)({},e),{},{cartItem:Ke(e.cartItem,t.payload)});case C.REMOV:return Object(o.a)(Object(o.a)({},e),{},{cartItem:e.cartItem.filter((function(e){return e.id!==t.payload.id}))});case C.REMOVITEM:return Object(o.a)(Object(o.a)({},e),{},{cartItem:Qe(e.cartItem,t.payload)});default:return e}},Ze={section:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},$e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;return t.type,e},et={item:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;return t.type,e},at=a(40),nt={key:"root",storage:a.n(at).a,whiteList:["cart"]},rt=Object(We.c)({user:_e,cart:Xe,direct:$e,shop:tt}),ct=Object(ze.a)(nt,rt),it=[Le.a],lt=Object(We.d)(ct,We.a.apply(void 0,it)),st=Object(ze.b)(lt),ot=a(41);i.a.render(r.a.createElement(h.a,{store:lt},r.a.createElement(F.a,null,r.a.createElement(ot.a,{persistor:st},r.a.createElement(De,null)))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.56fd6295.chunk.js.map