(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{18:function(e,t,c){e.exports={overlay:"Drawer_overlay__1ZHne",overlay__visible:"Drawer_overlay__visible__37hUX",drawer:"Drawer_drawer__3828_"}},19:function(e,t,c){e.exports={card:"Card_card__1FtMu",plus:"Card_plus__nOesS",fav:"Card_fav__1TLOq"}},40:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(12),s=c(33),i=c.n(s),o=(c(40),c(41),c(14)),l=c(7),d=c.n(l),j=c(11),u=c(4),b=c(5),x=c.n(b),h=c(2),m=a.a.createContext({}),p=c(1),f=function(e){var t=e.img,c=e.title,r=e.description,n=a.a.useContext(m).setCartOpened;return Object(p.jsxs)("div",{className:"drawerClear d-flex flex-column align-center",children:[Object(p.jsx)("img",{className:"mb-20",src:t,alt:"Box-clear",width:120}),Object(p.jsx)("h3",{className:"mb-10",children:c}),Object(p.jsx)("p",{className:"opacity-6 mb-40 text-center",children:r}),Object(p.jsx)("button",{onClick:function(){return n(!1)},className:"cart__btn",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]})},v=c(18),O=c.n(v),g=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var k=function(e){var t=e.onClose,c=e.onRemove,r=e.items,n=void 0===r?[]:r,s=e.opened,i=a.a.useContext(m),o=i.cartItems,l=i.setCartItems,b=a.a.useState(!1),h=Object(u.a)(b,2),v=h[0],k=h[1],N=a.a.useState(null),C=Object(u.a)(N,2),w=C[0],_=C[1],y=o.reduce((function(e,t){return t.price+e}),0),I=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("https://611230db89c6d00017ac015c.mockapi.io/orders",{item:o});case 3:t=e.sent,c=t.data,_(c.id),k(!0),l([]),r=0;case 9:if(!(r<o.length)){e.next=18;break}return a=o[r],e.next=13,x.a.delete("https://611230db89c6d00017ac015c.mockapi.io/cart/"+a.id);case 13:return e.next=15,g(1e3);case 15:r++,e.next=9;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437");case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{className:"".concat(O.a.overlay," ").concat(s?O.a.overlay__visible:" "),children:Object(p.jsxs)("div",{className:O.a.drawer,children:[Object(p.jsxs)("h2",{className:"d-flex justify-between",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(p.jsx)("img",{onClick:t,className:"removeBtn cu-p",src:"img/btn-remove.svg",alt:""})]}),n.length>0?Object(p.jsxs)("div",{className:"d-flex flex-column justify-between h100p",children:[Object(p.jsx)("div",{className:"items cart mt-40",children:n.map((function(e){return Object(p.jsxs)("div",{className:"cartItem d-flex align-center mt-20",children:[Object(p.jsx)("img",{className:"mr-15",width:70,height:70,src:e.imageUrl,alt:"Sneakers"}),Object(p.jsxs)("div",{className:"mr-20",children:[Object(p.jsx)("p",{className:"mb-5",children:e.title}),Object(p.jsxs)("b",{children:[e.price," \u0440\u0443\u0431"]})]}),Object(p.jsx)("img",{onClick:function(){return c(e.id)},className:"removeBtn",src:"img/btn-remove.svg",alt:"Delete"})]},e.id)}))}),Object(p.jsxs)("div",{className:"drawer__bottom",children:[Object(p.jsxs)("div",{className:"cart__info d-flex",children:[Object(p.jsx)("p",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(p.jsx)("span",{}),Object(p.jsxs)("b",{children:[y," \u0440\u0443\u0431. "]})]}),Object(p.jsxs)("div",{className:"cart__info d-flex",children:[Object(p.jsx)("p",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(p.jsx)("span",{}),Object(p.jsxs)("b",{children:[y/100*5," \u0440\u0443\u0431. "]})]}),Object(p.jsx)("button",{onClick:I,className:"cart__btn",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]}):Object(p.jsx)(f,{title:v?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430",description:v?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(w," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e \u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437",img:v?"img/cart-ok.png":"img/cart-clear.png"})]})})};var N=function(e){var t=a.a.useContext(m).cartItems.reduce((function(e,t){return t.price+e}),0);return Object(p.jsxs)("header",{className:"header d-flex justify-between",children:[Object(p.jsx)(n.b,{to:"/react-sneakers",children:Object(p.jsxs)("div",{className:"headerLeft d-flex align-center",children:[Object(p.jsx)("img",{src:"img/logo.png",alt:"logo",width:40,height:40}),Object(p.jsxs)("div",{className:"headerInfo",children:[Object(p.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(p.jsx)("p",{children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(p.jsxs)("ul",{className:"headerRight d-flex align-center",children:[Object(p.jsxs)("li",{className:"d-flex mr-30",onClick:e.onClickCart,children:[Object(p.jsxs)("svg",{className:"mr-10",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(p.jsx)("path",{d:"M7.54548 18.1818C7.99735 18.1818 8.36366 17.8155 8.36366 17.3636C8.36366 16.9118 7.99735 16.5455 7.54548 16.5455C7.09361 16.5455 6.72729 16.9118 6.72729 17.3636C6.72729 17.8155 7.09361 18.1818 7.54548 18.1818Z",stroke:"#9B9B9B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),Object(p.jsx)("path",{d:"M16.5455 18.1818C16.9973 18.1818 17.3637 17.8155 17.3637 17.3636C17.3637 16.9118 16.9973 16.5455 16.5455 16.5455C16.0936 16.5455 15.7273 16.9118 15.7273 17.3636C15.7273 17.8155 16.0936 18.1818 16.5455 18.1818Z",stroke:"#9B9B9B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),Object(p.jsx)("path",{d:"M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091",stroke:"#9B9B9B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),Object(p.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(p.jsx)("li",{className:"mr-30 d-flex",children:Object(p.jsx)(n.b,{to:"/react-sneakers/favorites",children:Object(p.jsx)("img",{width:20,height:20,src:"img/favoritebtn.svg",alt:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"})})}),Object(p.jsx)("li",{className:"d-flex",children:Object(p.jsx)(n.b,{to:"/react-sneakers/orders",children:Object(p.jsx)("img",{width:20,height:20,src:"img/Union.svg",alt:"\u0417\u0430\u043a\u0430\u0437\u044b"})})})]})]})},C=c(19),w=c.n(C),_=c(35);var y=function(e){var t=e.id,c=e.onFavorite,r=e.title,n=e.imageUrl,s=e.price,i=e.onPlus,o=e.favorited,l=void 0!==o&&o,d=e.loading,j=void 0!==d&&d,b=a.a.useState(l),x=Object(u.a)(b,2),h=x[0],f=x[1],v=a.a.useContext(m).isItemAdded,O={id:t,parentId:t,title:r,imageUrl:n,price:s};return Object(p.jsx)("li",{className:"products__wrapper",children:j?Object(p.jsxs)(_.a,{speed:2,width:150,height:230,viewBox:"0 0 150 230",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(p.jsx)("rect",{x:"-1",y:"100",rx:"5",ry:"5",width:"150",height:"15"}),Object(p.jsx)("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"150",height:"91"}),Object(p.jsx)("rect",{x:"0",y:"120",rx:"5",ry:"5",width:"100",height:"15"}),Object(p.jsx)("rect",{x:"0",y:"197",rx:"5",ry:"5",width:"80",height:"25"}),Object(p.jsx)("rect",{x:"110",y:"197",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(p.jsxs)("article",{className:w.a.card,children:[c&&Object(p.jsx)("img",{className:w.a.fav,onClick:function(){c(O),f(!h)},src:h?"img/liked.svg":"img/unliked.svg"}),Object(p.jsx)("img",{className:"mb-15",src:n,alt:"",width:"100%",height:"135px"}),Object(p.jsx)("h5",{className:"mb-15",children:r}),Object(p.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(p.jsxs)("div",{className:"d-flex flex-column",children:[Object(p.jsx)("span",{children:"\u0426\u0435\u043d\u0430"}),Object(p.jsx)("b",{children:s})]}),i&&Object(p.jsx)("img",{className:w.a.plus,onClick:function(){i(O)},src:v(t)?"img/ok.svg":"img/plus.svg"})]})]})})};var I=function(e){var t=e.items,c=(e.cartItems,e.searchValue),r=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart;return Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(p.jsx)("h1",{children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(p.jsxs)("div",{className:"search__block",children:[Object(p.jsx)("button",{className:"search__btn",children:Object(p.jsx)("img",{src:"img/search.svg",alt:"Search"})}),c&&Object(p.jsx)("img",{onClick:function(){return r("")},className:"clearr cu-p",src:"img/btn-remove.svg",alt:"Clear"}),Object(p.jsx)("input",{onChange:a,value:c,className:"search__input",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(p.jsx)("ul",{className:"products mt-40",children:t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())})).map((function(e,t){return Object(p.jsx)(y,{id:e.id,title:e.title,price:e.price,imageUrl:e.imageUrl,onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:!1},t)}))})]})};var S=function(e){var t=e.onAddToFavorite,c=e.onAddToCart,r=a.a.useContext(m).favorites;return a.a.useContext(m).isItemAdded,Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex justify-between align-center",children:Object(p.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(p.jsx)("div",{children:"\u0422\u0443\u0442 \u0431\u0443\u0434\u0443\u0442 \u043c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"}),Object(p.jsx)("ul",{className:"products mt-40",children:r.map((function(e,r){return Object(p.jsx)(y,{id:e.id,title:e.title,price:e.price,imageUrl:e.imageUrl,favorited:!0,onFavorite:t,onPlus:function(e){return c(e)}},r)}))})]})};var A=function(){var e=a.a.useContext(m),t=(e.onAddToFavorite,e.onAddToCart,a.a.useState([])),c=Object(u.a)(t,2),r=c[0],n=c[1];return a.a.useEffect((function(){Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://611230db89c6d00017ac015c.mockapi.io/orders/");case 3:t=e.sent,c=t.data,n(c.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.item))}),[])),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),Object(p.jsxs)("div",{className:"content p-40",children:[Object(p.jsx)("div",{className:"d-flex justify-between align-center",children:Object(p.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(p.jsx)("div",{children:"\u0422\u0443\u0442 \u0431\u0443\u0434\u0443\u0442 \u043c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"}),Object(p.jsx)("ul",{className:"products mt-40",children:r.map((function(e,t){return Object(p.jsx)(y,{id:e.id,title:e.title,price:e.price,imageUrl:e.imageUrl},t)}))})]})};var B=function(){var e=a.a.useState([]),t=Object(u.a)(e,2),c=t[0],r=t[1],n=a.a.useState([]),s=Object(u.a)(n,2),i=s[0],l=s[1],b=a.a.useState([]),f=Object(u.a)(b,2),v=f[0],O=f[1],g=a.a.useState(""),C=Object(u.a)(g,2),w=C[0],_=C[1],y=a.a.useState(!1),B=Object(u.a)(y,2),T=B[0],U=B[1];a.a.useEffect((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,c,a,n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=Promise,e.next=4,x.a.get("https://611230db89c6d00017ac015c.mockapi.io/cart");case 4:return e.t1=e.sent,e.next=7,x.a.get("https://611230db89c6d00017ac015c.mockapi.io/favorites");case 7:return e.t2=e.sent,e.next=10,x.a.get("https://611230db89c6d00017ac015c.mockapi.io/item");case 10:return e.t3=e.sent,e.t4=[e.t1,e.t2,e.t3],e.next=14,e.t0.all.call(e.t0,e.t4);case 14:t=e.sent,c=Object(u.a)(t,3),a=c[0],n=c[1],s=c[2],l(a.data),O(n.data),r(s.data),e.next=27;break;case 24:e.prev=24,e.t5=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445");case 27:case"end":return e.stop()}}),e,null,[[0,24]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var F=function(){var e=Object(j.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),e.prev=1,!(c=i.find((function(e){return Number(e.parentId)==Number(t.id)})))){e.next=9;break}return l((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=7,x.a.delete("https://611230db89c6d00017ac015c.mockapi.io/cart/".concat(c.id));case 7:e.next=12;break;case 9:return e.next=11,x.a.post("https://611230db89c6d00017ac015c.mockapi.io/cart",t);case 11:l((function(e){return[].concat(Object(o.a)(e),[t])}));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445");case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!v.find((function(e){return e.id==t.id}))){e.next=5;break}x.a.delete("https://611230db89c6d00017ac015c.mockapi.io/favorites/".concat(t.id)),e.next=10;break;case 5:return e.next=7,x.a.post("https://611230db89c6d00017ac015c.mockapi.io/favorites",t);case 7:c=e.sent,r=c.data,O((function(e){return[].concat(Object(o.a)(e),[r])}));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)(m.Provider,{value:{items:c,cartItems:i,favorites:v,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)==Number(e)}))},onAddToFavorite:L,onAddToCart:F,setCartOpened:U,setCartItems:l},children:Object(p.jsxs)("div",{className:"wrapper clear",children:[Object(p.jsx)(k,{items:i,onClose:function(){return U(!1)},onRemove:function(e){try{x.a.delete("https://611230db89c6d00017ac015c.mockapi.io/cart/".concat(e)),l((function(t){return t.filter((function(t){return t.id!==e}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b")}},opened:T}),Object(p.jsx)(N,{onClickCart:function(){return U(!0)}}),Object(p.jsx)(h.a,{path:"/react-sneakers",exact:!0,children:Object(p.jsx)(I,{items:c,searchValue:w,setSearchValue:_,onChangeSearchInput:function(e){_(e.target.value)},onAddToFavorite:L,onAddToCart:F,cartItems:i})}),Object(p.jsx)(h.a,{path:"/react-sneakers/favorites",exact:!0,children:Object(p.jsx)(S,{onAddToCart:F,onAddToFavorite:L})}),Object(p.jsx)(h.a,{path:"/react-sneakers/orders",exact:!0,children:Object(p.jsx)(A,{})})]})})};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(n.a,{children:Object(p.jsx)(B,{})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.f7792f43.chunk.js.map