(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[18],{1683:function(t,e,n){"use strict";n.r(e);n(1);var c=n(86),r=n(817),a=n(923),i=n(1200),o=n(0);e.default=function(){var t=Object(c.i)().collectionAddress,e=Object(r.e)(t);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(a.a,{collection:e}),Object(o.jsx)(i.a,{collection:e})]})}},841:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var c,r=n(9),a=n(5),i=n(47),o=(n(1),n(6)),s=n(2),l=n(0),u=["title","stat"],b=function(t){var e=t.title,n=t.stat,c=Object(i.a)(t,u);return Object(l.jsxs)(s.q,Object(a.a)(Object(a.a)({},c),{},{children:[Object(l.jsx)(s.Dc,{fontSize:"12px",color:"textSubtle",textAlign:"center",children:e}),null===n?Object(l.jsx)(s.jc,{height:"24px",width:"50%",mx:"auto"}):Object(l.jsx)(s.Dc,{fontWeight:"600",textAlign:"center",children:n})]}))},d=Object(o.e)(s.cb)(c||(c=Object(r.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  justify-content: space-around;\n  padding: 8px;\n  width: 100%;\n"])),(function(t){return t.theme.colors.invertedContrast}),(function(t){return t.theme.colors.cardBorder}),(function(t){return t.theme.radii.card}));e.b=d},846:function(t,e,n){"use strict";var c,r,a,i=n(3),o=n.n(i),s=n(10),l=n(5),u=n(8),b=n(47),d=n(9),j=n(1),O=n(2),f=n(6),p=n(35),x=n(13),h=n(231),m=n(0),g=["onValidAddress","onAddressClick"];!function(t){t[t.NOT_VALID=0]="NOT_VALID",t[t.FOUND=1]="FOUND",t[t.NOT_FOUND=2]="NOT_FOUND"}(a||(a={}));var v=f.e.div(c||(c=Object(d.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(t){return t.theme.colors.input}),(function(t){return t.theme.colors.inputSecondary}),(function(t){return t.theme.radii.default}),(function(t){return t.theme.radii.default}),(function(t){return t.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),k=Object(f.e)(O.Dc)(r||(r=Object(d.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),A={isFetching:!1,resultFound:a.NOT_VALID,value:""},D=function(){return Promise.resolve(!0)};e.a=function(t){var e=t.onValidAddress,n=void 0===e?D:e,c=t.onAddressClick,r=Object(b.a)(t,g),i=Object(j.useState)(A),d=Object(u.a)(i,2),f=d[0],F=d[1],N=Object(x.b)().t,w=f.isFetching,y=f.resultFound,I=f.value;return Object(j.useEffect)((function(){!1!==Object(p.j)(I)?function(){var t=Object(s.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,F((function(t){return Object(l.a)(Object(l.a)({},t),{},{isFetching:!0})})),t.next=4,n(I);case 4:e=t.sent,F((function(t){return Object(l.a)(Object(l.a)({},t),{},{isFetching:!1,resultFound:e?a.FOUND:a.NOT_FOUND})})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),F((function(t){return Object(l.a)(Object(l.a)({},t),{},{isFetching:!1})}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()():F((function(t){return Object(l.a)(Object(l.a)({},t),{},{resultFound:a.NOT_VALID})}))}),[I,n,F]),Object(m.jsxs)(O.q,Object(l.a)(Object(l.a)({position:"relative"},r),{},{children:[Object(m.jsx)(O.lb,{placeholder:N("Search %subject%",{subject:N("Address").toLowerCase()}),value:f.value,onChange:function(t){var e=t.target.value;F((function(t){return Object(l.a)(Object(l.a)({},t),{},{value:e})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),w&&Object(m.jsx)(O.q,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(m.jsx)(h.a,{})}),Object(m.jsx)(v,{isOpen:y!==a.NOT_VALID,children:y===a.FOUND?Object(m.jsx)(k,{onClick:function(){F(A),c(f.value)},children:f.value}):Object(m.jsx)(O.Dc,{px:"16px",fontWeight:"bold",children:N("No results found.")})})]}))}},851:function(t,e,n){"use strict";var c=n(5),r=(n(1),n(433)),a=n(108),i=n(0);e.a=function(t){var e=Object(a.a)().theme.isDark?"linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)":"linear-gradient(111.68deg, #f2ecf2 0%, #e8f2f6 100%)";return Object(i.jsx)(r.a,Object(c.a)({background:e},t))}},858:function(t,e,n){"use strict";var c,r=n(9),a=n(6).e.div.attrs((function(t){return{alt:t.alt}}))(c||(c=Object(r.a)(["\n  background: url('","');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n  border: 4px "," solid;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])),(function(t){return t.src}),(function(t){return t.borderColor||"#f2ecf2"}));e.a=a},868:function(t,e,n){"use strict";var c=n(5),r=(n(1),n(86)),a=n(846),i=n(133),o=n(0);e.a=function(t){var e=Object(r.g)();return Object(o.jsx)(a.a,Object(c.a)({onAddressClick:function(t){e.push("".concat(i.a,"/profile/").concat(t))}},t))}},869:function(t,e,n){"use strict";var c=n(5),r=n(47),a=(n(1),n(2)),i=n(0),o=["title","description","children"];e.a=function(t){var e=t.title,n=t.description,s=t.children,l=Object(r.a)(t,o);return Object(i.jsxs)(a.db,Object(c.a)(Object(c.a)({gridGap:"16px",alignItems:"center",gridTemplateColumns:["1fr",null,null,null,"repeat(2, 1fr)"]},l),{},{children:[Object(i.jsxs)(a.q,{children:[Object(i.jsx)(a.eb,{as:"h1",scale:"xl",color:"secondary",mb:"16px",children:e}),n]}),Object(i.jsx)(a.q,{children:s})]}))}},871:function(t,e,n){"use strict";var c,r=n(9),a=n(2),i=n(6),o=Object(i.e)(a.tc)(c||(c=Object(r.a)(["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n"])),(function(t){return t.theme.colors.cardBorder}));e.a=o},875:function(t,e,n){"use strict";var c,r=n(5),a=n(47),i=(n(1),n(2)),o=n(9),s=n(6).e.div.attrs((function(t){return{alt:t.alt}}))(c||(c=Object(o.a)(["\n  ",";\n  background-image: url('","');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 100%;\n  border-radius: 32px;\n  height: 123px;\n\n  "," {\n    height: 192px;\n  }\n\n  "," {\n    height: 256px;\n  }\n"])),(function(t){var e=t.src,n=t.theme;return e?"background-image: url('".concat(e,"')"):"background-color: ".concat(n.colors.cardBorder)}),(function(t){return t.src}),(function(t){return t.theme.mediaQueries.sm}),(function(t){return t.theme.mediaQueries.md})),l=n(0),u=["bannerImage","bannerAlt","avatar","children"];e.a=function(t){var e=t.bannerImage,n=t.bannerAlt,c=t.avatar,o=t.children,b=Object(a.a)(t,u);return Object(l.jsx)(i.cb,Object(r.a)(Object(r.a)({flexDirection:"column",mb:"24px"},b),{},{children:Object(l.jsxs)(i.q,{position:"relative",pb:"56px",children:[Object(l.jsx)(s,{src:e,alt:n}),Object(l.jsx)(i.q,{position:"absolute",bottom:0,left:-4,children:Object(l.jsxs)(i.cb,{alignItems:"flex-end",children:[c,o]})})]})}))}},923:function(t,e,n){"use strict";var c,r=n(1),a=n(86),i=n(2),o=n(31),s=n(13),l=n(300),u=n(851),b=n(869),d=n(841),j=n(875),O=n(858),f=n(871),p=n(133),x=n(9),h=n(99),m=n(6),g=n(868),v=n(0),k=Object(m.e)(h.a)(c||(c=Object(x.a)(["\n  align-items: center;\n  color: ",";\n  display: inline-flex;\n  font-weight: 600;\n"])),(function(t){return t.theme.colors.primary})),A=function(){var t=Object(s.b)().t;return Object(v.jsxs)(i.cb,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[Object(v.jsxs)(k,{to:"".concat(p.a,"/collections"),children:[Object(v.jsx)(i.N,{color:"primary",width:"24px"}),t("All Collections")]}),Object(v.jsx)(i.q,{children:Object(v.jsx)(g.a,{})})]})},D=n(5),F=n(3),N=n.n(F),w=n(10),y=n(8),I=n(47),C=n(75),T=["collectionAddress"],B=function(t){var e=t.collectionAddress,n=Object(I.a)(t,T),c=Object(r.useState)(null),a=Object(y.a)(c,2),i=a[0],o=a[1],l=Object(s.b)().t;Object(r.useEffect)((function(){(function(){var t=Object(w.a)(N.a.mark((function t(){var n;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.n)(e);case 2:n=t.sent,o(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e,o]);var u=null===i?null:i.toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3});return Object(v.jsx)(d.a,Object(D.a)({title:l("Lowest (%symbol%)",{symbol:"BNB"}),stat:u},n))};e.a=function(t){var e=t.collection,n=Object(a.i)().collectionAddress,c=e.totalSupply,r=e.numberTokensListed,x=e.totalVolumeBNB,h=e.banner,m=e.avatar,g=Object(s.b)().t,k=Object(a.h)(),D=k.pathname,F=k.hash,N=x?parseFloat(x).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}):"0",w=[{label:g("Items"),href:"".concat(p.a,"/collections/").concat(n,"#items")},{label:g("Traits"),href:"".concat(p.a,"/collections/").concat(n,"#traits")},{label:g("Activity"),href:"".concat(p.a,"/collections/").concat(n,"#activity")}];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(u.a,{children:[Object(v.jsx)(A,{}),Object(v.jsx)(j.a,{bannerImage:h.large,avatar:Object(v.jsx)(O.a,{src:m})}),Object(v.jsx)(b.a,{title:e.name,description:e.description?Object(v.jsx)(i.Dc,{color:"textSubtle",children:g(e.description)}):null,children:Object(v.jsxs)(d.b,{children:[Object(v.jsx)(d.a,{title:g("Items"),stat:Object(o.e)(Number(c),0,0)}),Object(v.jsx)(d.a,{title:g("Items listed"),stat:r?Object(o.e)(Number(r),0,0):"0"}),Object(v.jsx)(B,{collectionAddress:e.address}),Object(v.jsx)(d.a,{title:g("Vol. (%symbol%)",{symbol:"BNB"}),stat:N})]})})]}),Object(v.jsx)(l.a,{children:Object(v.jsx)(f.a,{items:w,activeItem:"".concat(D).concat(F||"#items"),mt:"24px",mb:"8px"})})]})}}}]);
//# sourceMappingURL=18.77a9e590.chunk.js.map