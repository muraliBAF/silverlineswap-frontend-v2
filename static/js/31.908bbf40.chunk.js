(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[31],{1699:function(e,t,n){"use strict";n.r(t);var c,r,o,a,s,i,u,b,j,l,d,p=n(9),f=n(2),x=n(223),O=n(1),h=n(6),g=n(99),m=n(13),v=n(300),y=Object(h.e)(f.ib)(c||(c=Object(p.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),C=n(0),w=Object(h.e)(f.q)(r||(r=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),S=function(){var e=Object(m.b)().t;return Object(C.jsx)(w,{children:Object(C.jsx)(v.a,{children:Object(C.jsxs)(f.cb,{alignItems:"center",justifyContent:"space-between",children:[Object(C.jsxs)(f.q,{pr:"32px",children:[Object(C.jsx)(f.eb,{as:"h2",scale:"lg",mb:"16px",children:e("Got a suggestion?")}),Object(C.jsx)(f.Dc,{as:"p",children:e("Community proposals are a great way to see how the community feels about your ideas.")}),Object(C.jsx)(f.Dc,{as:"p",mb:"16px",children:e("They won't necessarily be implemented if the community votes successful, but suggestions with a lot of community support may be made into Core proposals.")}),Object(C.jsx)(f.u,{startIcon:Object(C.jsx)(f.cc,{color:"currentColor",width:"24px"}),as:g.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(C.jsx)(y,{src:"/images/voting/voting-bunny.png",width:173,height:234})]})})})},k=Object(h.e)(f.q)(o||(o=Object(p.a)(["\n  background: ",";\n  padding-bottom: 32px;\n  padding-top: 32px;\n"])),(function(e){return e.theme.colors.gradients.bubblegum})),I=function(){var e=Object(m.b)().t;return Object(C.jsx)(k,{children:Object(C.jsx)(v.a,{children:Object(C.jsxs)(f.cb,{alignItems:"center",justifyContent:"space-between",children:[Object(C.jsxs)(f.q,{pr:"32px",children:[Object(C.jsx)(f.eb,{as:"h1",scale:"xxl",color:"secondary",mb:"16px",children:e("Voting")}),Object(C.jsx)(f.eb,{as:"h3",scale:"lg",mb:"16px",children:e("Have your say in the future of the SilverlineSwap Ecosystem")}),Object(C.jsx)(f.u,{startIcon:Object(C.jsx)(f.cc,{color:"currentColor",width:"24px"}),as:g.a,to:"/voting/proposal/create",children:e("Make a Proposal")})]}),Object(C.jsx)(y,{src:"/images/voting/voting-presents.png",width:361,height:214})]})})})},D=n(5),E=n(8),T=n(68),L=n(454),N=n(902),M=n(41),P=n(32),A=n(839),q=n(432),B=n.n(q),F=n(847),V=Object(h.e)(f.cb)(a||(a=Object(p.a)(["\n  border-bottom: 1px solid ",";\n"])),(function(e){return e.theme.colors.cardBorder})),H=h.e.div(s||(s=Object(p.a)(["\n  ",":last-child {\n    border-bottom: 0;\n  }\n"])),V),G=function(){return Object(C.jsx)(H,{children:B()(F.d).map((function(e){return Object(C.jsxs)(V,{alignItems:"center",justifyContent:"space-between",py:"16px",px:"24px",children:[Object(C.jsxs)(f.q,{style:{flex:1},children:[Object(C.jsx)(f.jc,{height:"21px",width:"70%",mb:"4px"}),Object(C.jsx)(f.jc,{height:"21px",width:"30%",mb:"4px"}),Object(C.jsx)(f.jc,{height:"21px",width:"40%"})]}),Object(C.jsx)(f.jc,{height:"32px",width:"32px"})]},e)}))})},J=h.e.div(i||(i=Object(p.a)(["\n  background-color: ",";\n  padding-top: 16px;\n"])),(function(e){return e.theme.colors.input})),R=function(e){switch(e){case M.f.COMMUNITY:return 1;case M.f.ALL:return 2;case M.f.CORE:default:return 0}},U=function(e){var t=e.proposalType,n=e.onTypeChange,c=Object(m.b)().t;return Object(C.jsx)(J,{children:Object(C.jsxs)(f.yc,{activeIndex:R(t),onItemClick:function(e){n(function(e){switch(e){case 1:return M.f.COMMUNITY;case 2:return M.f.ALL;default:return M.f.CORE}}(e))},children:[Object(C.jsx)(f.xc,{children:Object(C.jsxs)(f.cb,{alignItems:"center",children:[Object(C.jsx)(f.Sc,{color:"currentColor",mr:"4px"}),c("Core")]})}),Object(C.jsxs)(f.xc,{children:[" ",Object(C.jsxs)(f.cb,{alignItems:"center",children:[Object(C.jsx)(f.T,{color:"currentColor",mr:"4px"}),c("Community")]})]}),Object(C.jsx)(f.xc,{children:"All"})]})})},Y=n(127),z=n(1657),_=function(e){var t=Object(Y.default)(1e3*e);return Object(z.default)(t,"MMM do, yyyy HH:mm")},Q=function(e){var t=e.startDate,n=e.endDate,c=e.proposalState,r=Object(m.b)().t,o={fontSize:"16px",color:"textSubtle",ml:"8px"};return c===M.e.CLOSED?Object(C.jsx)(f.Dc,Object(D.a)(Object(D.a)({},o),{},{children:r("Ended %date%",{date:_(n)})})):c===M.e.PENDING?Object(C.jsx)(f.Dc,Object(D.a)(Object(D.a)({},o),{},{children:r("Starts %date%",{date:_(t)})})):Object(C.jsx)(f.Dc,Object(D.a)(Object(D.a)({},o),{},{children:r("Ends %date%",{date:_(n)})}))},K=n(937),W=Object(h.e)(g.a)(u||(u=Object(p.a)(["\n  align-items: center;\n  border-bottom: 1px solid ",";\n  display: flex;\n  padding: 16px 24px;\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.dropdown})),X=function(e){var t=e.proposal,n="/voting/proposal/".concat(t.id);return Object(C.jsxs)(W,{to:n,children:[Object(C.jsxs)(f.q,{as:"span",style:{flex:1},children:[Object(C.jsx)(f.Dc,{bold:!0,mb:"8px",children:t.title}),Object(C.jsx)(f.cb,{alignItems:"center",mb:"8px",children:Object(C.jsx)(Q,{startDate:t.start,endDate:t.end,proposalState:t.state})}),Object(C.jsxs)(f.cb,{alignItems:"center",children:[Object(C.jsx)(K.a,{proposalState:t.state}),Object(C.jsx)(K.b,{isCoreProposal:Object(A.h)(t),ml:"8px"})]})]}),Object(C.jsx)(f.hb,{variant:"text",children:Object(C.jsx)(f.f,{width:"24px"})})]})},Z=Object(h.e)(f.cb).attrs({alignItems:"center"})(b||(b=Object(p.a)(["\n  border-bottom: 1px solid ",";\n  padding: 16px 24px;\n"])),(function(e){return e.theme.colors.cardBorder})),$=h.e.label(j||(j=Object(p.a)(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  margin-right: 16px;\n"]))),ee=[{value:M.e.ACTIVE,label:"Vote Now"},{value:M.e.PENDING,label:"Soon"},{value:M.e.CLOSED,label:"Closed"}],te=function(e){var t=e.filterState,n=e.onFilterChange,c=e.isLoading,r=Object(m.b)().t;return Object(C.jsx)(Z,{children:ee.map((function(e){var o=e.value,a=e.label;return Object(C.jsxs)($,{children:[Object(C.jsx)(f.dc,{scale:"sm",value:o,checked:t===o,onChange:function(e){var t=e.currentTarget.value;n(t)},disabled:c}),Object(C.jsx)(f.Dc,{ml:"8px",children:r(a)})]},a)}))})},ne=function(){var e=Object(m.b)().t,t=Object(O.useState)({proposalType:M.f.CORE,filterState:M.e.ACTIVE}),n=Object(E.a)(t,2),c=n[0],r=n[1],o=Object(N.b)(),a=Object(N.c)(),s=Object(T.b)(),i=c.proposalType,u=c.filterState,b=o===P.b.Fetching,j=o===P.b.Fetched;Object(O.useEffect)((function(){s(Object(L.c)({first:1e3,state:u}))}),[u,s]);var l=Object(A.b)(Object(A.c)(a,i),u);return Object(C.jsxs)(v.a,{py:"40px",children:[Object(C.jsx)(f.q,{mb:"48px",children:Object(C.jsxs)(f.r,{children:[Object(C.jsx)(g.a,{to:"/",children:e("Home")}),Object(C.jsx)(f.Dc,{children:e("Voting")})]})}),Object(C.jsx)(f.eb,{as:"h2",scale:"xl",mb:"32px",id:"voting-proposals",children:e("Proposals")}),Object(C.jsxs)(f.z,{children:[Object(C.jsx)(U,{proposalType:i,onTypeChange:function(e){r((function(t){return Object(D.a)(Object(D.a)({},t),{},{proposalType:e})}))}}),Object(C.jsx)(te,{filterState:u,onFilterChange:function(e){r((function(t){return Object(D.a)(Object(D.a)({},t),{},{filterState:e})}))},isLoading:b}),b&&Object(C.jsx)(G,{}),j&&l.length>0&&l.map((function(e){return Object(C.jsx)(X,{proposal:e},e.id)})),j&&0===l.length&&Object(C.jsx)(f.cb,{alignItems:"center",justifyContent:"center",p:"32px",children:Object(C.jsx)(f.eb,{as:"h5",children:e("No proposals found")})})]})]})},ce=h.e.div(l||(l=Object(p.a)(["\n  flex: none;\n"]))),re=h.e.div(d||(d=Object(p.a)(["\n  flex: 1;\n  height: 100%;\n"])));t.default=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(x.a,{}),Object(C.jsxs)(f.cb,{flexDirection:"column",minHeight:"calc(100vh - 64px)",children:[Object(C.jsx)(ce,{children:Object(C.jsx)(I,{})}),Object(C.jsx)(re,{children:Object(C.jsx)(ne,{})}),Object(C.jsx)(ce,{children:Object(C.jsx)(S,{})})]})]})}},839:function(e,t,n){"use strict";n.d(t,"h",(function(){return p})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return x})),n.d(t,"d",(function(){return O})),n.d(t,"e",(function(){return h})),n.d(t,"i",(function(){return g})),n.d(t,"g",(function(){return m})),n.d(t,"a",(function(){return v})),n.d(t,"f",(function(){return y}));var c=n(16),r=n(29),o=n(5),a=n(3),s=n.n(a),i=n(10),u=n(50),b=n(33),j=n(41),l=n(100),d=n(847),p=function(e){return d.a.includes(e.author.toLowerCase())},f=function(e,t){switch(t){case j.f.COMMUNITY:return e.filter((function(e){return!p(e)}));case j.f.CORE:return e.filter((function(e){return p(e)}));case j.f.ALL:default:return e}},x=function(e,t){return e.filter((function(e){return e.state===t}))},O=function(){return{plugins:{},network:56,strategies:[{name:"cake",params:{symbol:"SLCT",address:b.a.cake.address,decimals:18}}]}},h=function(){return{version:d.e,timestamp:(Date.now()/1e3).toFixed(),space:d.c}},g=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u.l,{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if((n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:throw c=e.sent,new Error(null===c||void 0===c?void 0:c.error_description);case 8:return e.next=10,n.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(i.a)(s.a.mark((function e(t,n,c){var r,o,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=c,e.t0){e.next=5;break}return e.next=4,l.a.getBlockNumber();case 4:e.t0=e.sent;case 5:return r=e.t0,e.next=8,fetch("".concat(u.m,"/power"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t,block:r,poolAddresses:n})});case 8:return o=e.sent,e.next=11,o.json();case 11:return a=e.sent,e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e)})));return function(t,n,c){return e.apply(this,arguments)}}(),v=function(e){return e.reduce((function(e,t){var n=t.proposal.choices[t.choice-1];return Object(o.a)(Object(o.a)({},e),{},Object(c.a)({},n,e[n]?[].concat(Object(r.a)(e[n]),[t]):[t]))}),{})},y=function(e){return e.reduce((function(e,t){var n,c=parseFloat(null===(n=t.metadata)||void 0===n?void 0:n.votingPower);return c||(c=0),e+c}),0)}},847:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return i}));var c=10,r=["0x842B508681eE336E74600974B4623B709477d29D","0x977e0c1005dff8749f8cac22f4df0bd5f013d1a7","0x6eaf1b33b8672c5dc40ab8f4ba3a0111723126c7"].map((function(e){return e.toLowerCase()})),o="https://gateway.ipfs.io/ipfs",a="0.1.3",s="cake.eth",i=10},902:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i}));var c=n(18),r=function(){var e=Object(c.d)((function(e){return e.voting.proposals}));return Object.values(e)},o=function(e){return Object(c.d)((function(t){return t.voting.proposals[e]}))},a=function(e){var t=Object(c.d)((function(t){return t.voting.votes[e]}));return t?t.filter((function(e){return!0!==e._inValid})):[]},s=function(){return Object(c.d)((function(e){return e.voting.voteLoadingStatus}))},i=function(){return Object(c.d)((function(e){return e.voting.proposalLoadingStatus}))}},937:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return j}));var c=n(5),r=n(47),o=(n(1),n(232)),a=n(41),s=n(0),i=["proposalState"],u=["isCoreProposal"],b=function(e){var t=e.proposalState,n=Object(r.a)(e,i);return t===a.e.ACTIVE?Object(s.jsx)(o.h,Object(c.a)({},n)):t===a.e.PENDING?Object(s.jsx)(o.g,Object(c.a)({},n)):Object(s.jsx)(o.a,Object(c.a)({},n))},j=function(e){var t=e.isCoreProposal,n=Object(r.a)(e,u);return t?Object(s.jsx)(o.d,Object(c.a)({},n)):Object(s.jsx)(o.b,Object(c.a)({},n))}}}]);
//# sourceMappingURL=31.908bbf40.chunk.js.map