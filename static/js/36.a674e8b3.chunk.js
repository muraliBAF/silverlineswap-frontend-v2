(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[36],{1695:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(44),i=n(68),o=n(430),s=n(302),l=n(435),j=n(223),b=n(32),a=n(2),d=n(13),u=n(433),x=n(99),O=n(0),h=function(){var e=Object(d.b)().t;return Object(O.jsx)(a.q,{mb:"24px",children:Object(O.jsxs)(a.r,{children:[Object(O.jsx)(x.a,{to:"/",children:e("Home")}),Object(O.jsx)(x.a,{to:"/sparc",children:e("Sparc")}),Object(O.jsx)(a.Dc,{children:e("Leaderboard")})]})})},p=function(){var e=Object(d.b)().t;return Object(O.jsxs)(u.a,{children:[Object(O.jsx)(h,{}),Object(O.jsx)(a.eb,{as:"h1",scale:"xxl",color:"secondary",children:e("Leaderboard")})]})},f=n(470),m=n(484),g=n(310),v=n(471);var B,D,w,S,F,k,y,C,W,N,L,A,z=n(57),R=n(300),q=n(5),T=n(47),I=n(8),P=n(9),V=n(6),U=n(35),_=n(301),M=n(183),Q=n(108),E=n(225),H=n(88),Y=["children"],G=["amount","textPrefix","textColor"],J=function(e){var t=e.children,n=Object(T.a)(e,Y);return Object(O.jsx)(a.cb,Object(q.a)(Object(q.a)({alignItems:"center",justifyContent:"space-between"},n),{},{children:t}))},Z=function(e){var t=e.amount,n=e.textPrefix,c=void 0===n?"":n,r=e.textColor,i=void 0===r?"text":r,o=Object(T.a)(e,G),s=Object(E.b)(),l=Object(H.d)(s,Math.abs(t));return t?Object(O.jsxs)(a.cb,Object(q.a)(Object(q.a)({flexDirection:"column",alignItems:"flex-end"},o),{},{children:[Object(O.jsx)(a.Dc,{fontWeight:"bold",color:i,children:"".concat(c).concat(t.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:6}))}),Object(O.jsx)(a.Dc,{fontSize:"12px",color:"textSubtle",lineHeight:1,children:"~$".concat(l.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))})]})):null},$=function(e){var t=e.amount,n=Object(d.b)().t;return Object(O.jsxs)(J,{mb:"4px",children:[Object(O.jsx)(a.Dc,{fontSize:"12px",color:"textSubtle",children:n("Net Winnings (BNB)")}),Object(O.jsx)(Z,{amount:t,textPrefix:t>0?"+":"",textColor:t>0?"success":"failure"})]})},K=n(3),X=n.n(K),ee=n(10),te=n(432),ne=n.n(te),ce=n(307),re=n.n(ce),ie=n(41),oe=V.e.div(B||(B=Object(P.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: 4px;\n  display: inline-flex;\n  justify-content: center;\n  height: 32px;\n  min-width: 16px;\n  padding-left: 8px;\n  padding-right: 8px;\n"])),(function(e){var t=e.theme,n=e.bgColor;return t.colors[n]})),se=V.e.div(D||(D=Object(P.a)(["\n  color: #fff;\n  display: none;\n  text-transform: uppercase;\n\n  "," {\n    display: block;\n    margin-left: 4px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),le=function(e){var t=e.position,n=Object(d.b)().t,c=t===ie.a.BULL,r=c?"success":"failure",i=c?Object(O.jsx)(a.i,{width:"24px",color:"white"}):Object(O.jsx)(a.d,{width:"24px",color:"white"});return Object(O.jsxs)(oe,{bgColor:r,children:[i,Object(O.jsx)(se,{children:n(c?"Up":"Down")})]})},je=function(e){var t=e.numberOfBets,n=void 0===t?5:t,r=e.account,i=Object(c.useState)(!1),o=Object(I.a)(i,2),s=o[0],l=o[1],j=Object(c.useState)([]),b=Object(I.a)(j,2),u=b[0],x=b[1],h=Object(d.b)().t,p=re()(u,["round.epoch"],["desc"]);return Object(c.useEffect)((function(){(function(){var e=Object(ee.a)(X.a.mark((function e(){var t;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,Object(z.e)({user:r.toLowerCase()},n);case 4:t=e.sent,x(t.map(z.u));case 6:return e.prev=6,l(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[1,,6,9]])})));return function(){return e.apply(this,arguments)}})()()}),[r,n,l,x]),Object(O.jsxs)(a.zc,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(a.Fc,{children:h("Round")}),Object(O.jsx)(a.Fc,{children:h("Direction")}),Object(O.jsx)(a.Fc,{textAlign:"right",children:h("Winnings (BNB)")})]})}),Object(O.jsx)("tbody",{children:s?ne()(n).map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)(a.Bc,{children:Object(O.jsx)(a.jc,{width:"80px"})}),Object(O.jsx)(a.Bc,{children:Object(O.jsx)(a.jc,{width:"60px",height:"32px"})}),Object(O.jsx)(a.Bc,{children:Object(O.jsx)(a.jc,{width:"80px"})})]},e)})):p.map((function(e){var t=e.position===e.round.position;return Object(O.jsxs)("tr",{children:[Object(O.jsx)(a.Bc,{textAlign:"center",fontWeight:"bold",children:e.round.epoch.toLocaleString()}),Object(O.jsx)(a.Bc,{textAlign:"center",children:Object(O.jsx)(le,{position:e.position})}),Object(O.jsx)(a.Bc,{textAlign:"right",children:Object(O.jsx)(Z,{amount:t?e.claimedNetBNB:e.amount,textPrefix:t?"+":"-",textColor:t?"success":"failure"})})]},e.id)}))})]})},be=function(e){var t=e.account,n=Object(d.b)().t,r=Object(c.useState)(!1),i=Object(I.a)(r,2),o=i[0],s=i[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(a.cb,{alignItems:"center",justifyContent:"space-between",px:"24px",py:"32px",borderBottom:"1px solid",borderColor:"cardBorder",style:{cursor:"pointer"},onClick:function(){return s(!o)},children:[Object(O.jsx)(a.Dc,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",children:n("Last %num% Bets",{num:5})}),o?Object(O.jsx)(a.M,{}):Object(O.jsx)(a.P,{})]}),o&&Object(O.jsx)(je,{account:t})]})},ae=function(e){var t=e.account,n=Object(d.b)().t;return Object(O.jsxs)(a.q,{p:"24px",children:[Object(O.jsx)(a.Dc,{as:"h5",color:"secondary",fontWeight:"bold",textTransform:"uppercase",fontSize:"12px",mb:"16px",children:n("Last %num% Bets",{num:5})}),Object(O.jsx)(a.z,{children:Object(O.jsx)(je,{account:t})})]})},de=Object(V.e)(a.tb)(w||(w=Object(P.a)(["\n  color: ",";\n\n  svg {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text})),ue=function(e){var t,n,c,r,i,s=e.account,l=e.onDismiss,j=e.onBeforeDismiss,u=Object(d.b)().t,x=Object(Q.a)().theme,h=Object(o.y)(),p=s||h,f=Object(o.v)(p),m=Object(_.c)(p),g=Object(o.r)()===b.b.Fetching,v=Object(a.dd)().isDesktop;return Object(O.jsxs)(a.Lb,{minWidth:"320px",children:[Object(O.jsxs)(a.Mb,{background:x.colors.gradients.bubblegum,children:[Object(O.jsxs)(a.cb,{alignItems:"center",style:{flex:1},children:[Object(O.jsx)(a.q,{width:["64px",null,null,null,null,null,"96px"],mr:"16px",children:Object(O.jsx)(a.Zb,{src:null===(t=m.nft)||void 0===t||null===(n=t.image)||void 0===n?void 0:n.thumbnail,height:96,width:96})}),Object(O.jsxs)(a.q,{children:[m.username&&Object(O.jsx)(a.eb,{scale:"lg",mb:"8px",children:m.username}),Object(O.jsx)(de,{href:Object(U.e)(p,"address"),children:Object(M.a)(p)})]})]}),Object(O.jsx)(a.hb,{variant:"text",onClick:function(){j&&j(),l()},"aria-label":"Close the dialog",children:Object(O.jsx)(a.R,{color:"text",width:"24px"})})]}),null===f?Object(O.jsx)(a.Dc,{p:"32px",textAlign:"center",fontWeight:"bold",children:u("No results found.")}):Object(O.jsxs)(a.q,{maxHeight:["500px",null,null,null,null,null,"none"],overflowY:"auto",children:[Object(O.jsxs)(a.db,{gridTemplateColumns:["1fr",null,null,null,null,null,"repeat(4, 1fr)"],gridGap:"16px",p:"24px",borderBottom:"1px solid",borderColor:"cardBorder",children:[Object(O.jsxs)(a.q,{children:[Object(O.jsx)(a.Dc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:u("Net Winnings")}),g?Object(O.jsx)(a.jc,{}):Object(O.jsx)(Z,{amount:null===f||void 0===f?void 0:f.netBNB,textPrefix:(null===f||void 0===f?void 0:f.netBNB)>0?"+":"",textColor:(null===f||void 0===f?void 0:f.netBNB)>0?"success":"failure",alignItems:"flex-end"})]}),Object(O.jsxs)(a.q,{children:[Object(O.jsx)(a.Dc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:u("Win Rate")}),g?Object(O.jsx)(a.jc,{}):Object(O.jsx)(a.Dc,{fontWeight:"bold",children:"".concat(null===f||void 0===f||null===(c=f.winRate)||void 0===c?void 0:c.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(O.jsxs)(a.q,{children:[Object(O.jsx)(a.Dc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:u("Rounds Won")}),g?Object(O.jsx)(a.jc,{}):Object(O.jsx)(a.Dc,{fontWeight:"bold",children:null===f||void 0===f||null===(r=f.totalBetsClaimed)||void 0===r?void 0:r.toLocaleString()})]}),Object(O.jsxs)(a.q,{children:[Object(O.jsx)(a.Dc,{as:"h6",fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:"bold",mb:"8px",children:u("Rounds Played")}),g?Object(O.jsx)(a.jc,{}):Object(O.jsx)(a.Dc,{fontWeight:"bold",children:null===f||void 0===f||null===(i=f.totalBets)||void 0===i?void 0:i.toLocaleString()})]})]}),v?Object(O.jsx)(ae,{account:p}):Object(O.jsx)(be,{account:p})]})]})},xe=["user"],Oe=Object(V.e)(a.q)(S||(S=Object(P.a)(["\n  order: 2;\n  margin-left: 8px;\n\n  "," {\n    order: 1;\n    margin-left: 0;\n    margin-right: 8px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),he=Object(V.e)(a.q)(F||(F=Object(P.a)(["\n  order: 1;\n\n  "," {\n    order: 2;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),pe=Object(V.e)(a.rc)(k||(k=Object(P.a)(["\n  background-color: #4C1B83\n"]))),fe=function(e){var t=e.user,n=Object(T.a)(e,xe),c=Object(d.b)().t,r=Object(_.c)(t.id),i=Object(a.ed)(Object(O.jsx)(ue,{account:t.id})),o=Object(I.a)(i,1)[0];return Object(O.jsxs)(pe,{component:Object(O.jsxs)(a.cb,Object(q.a)(Object(q.a)({alignItems:"center"},n),{},{children:[Object(O.jsxs)(he,{children:[Object(O.jsx)(a.Dc,{color:"primary",fontWeight:"bold",children:r.username||Object(M.a)(t.id)})," "]}),Object(O.jsx)(Oe,{width:["32px",null,null,null,null,"40px"],height:["32px",null,null,null,null,"40px"],children:Object(O.jsx)(a.ib,{src:"/images/tokens/sln.png",alt:"",height:40,width:40})})]})),options:{placement:"bottom-start"},children:[Object(O.jsx)(a.sc,{onClick:o,children:c("View Stats")}),Object(O.jsx)(a.sc,{as:a.sb,href:Object(U.e)(t.id,"address"),bold:!1,color:"text",external:!0,children:c("View on BscScan")})]})},me=["rank","user"],ge=function(e){var t=e.rank,n=e.user,c=Object(T.a)(e,me);return Object(O.jsxs)("tr",Object(q.a)(Object(q.a)({},c),{},{children:[t?Object(O.jsx)(a.Bc,{children:Object(O.jsx)(a.Dc,{textAlign:"center",fontWeight:"bold",color:"secondary",children:"#".concat(t)})}):Object(O.jsx)(a.Bc,{}),Object(O.jsx)(a.Bc,{children:Object(O.jsx)(fe,{user:n})}),Object(O.jsx)(a.Bc,{children:Object(O.jsx)(Z,{amount:n.netBNB,textPrefix:n.netBNB>0?"+":"",textColor:n.netBNB>0?"success":"failure"})}),Object(O.jsx)(a.Bc,{textAlign:"center",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")}),Object(O.jsx)(a.Bc,{textAlign:"center",children:Object(O.jsx)("strong",{children:n.totalBetsClaimed.toLocaleString()})}),Object(O.jsx)(a.Bc,{textAlign:"center",children:n.totalBets.toLocaleString()})]}))},ve=function(e){var t=e.results,n=Object(d.b)().t;return Object(O.jsx)(R.a,{mb:"24px",children:Object(O.jsx)(a.z,{children:Object(O.jsxs)(a.zc,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(a.Fc,{width:"60px",children:"\xa0"}),Object(O.jsx)(a.Fc,{textAlign:"left",children:n("User")}),Object(O.jsx)(a.Fc,{textAlign:"right",children:n("Net Winnings (BNB)")}),Object(O.jsx)(a.Fc,{children:n("Win Rate")}),Object(O.jsx)(a.Fc,{children:n("Rounds Won")}),Object(O.jsx)(a.Fc,{children:n("Rounds Played")})]})}),Object(O.jsx)("tbody",{children:t.map((function(e,t){return Object(O.jsx)(ge,{rank:t+4,user:e},e.id)}))})]})})})},Be=Object(V.e)(a.q)(y||(y=Object(P.a)(["\n  background-color: ",";\n  border-bottom: 1px solid ",";\n\n  &:first-child {\n    border-top: 1px solid ",";\n  }\n"])),(function(e){return e.theme.card.background}),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.colors.cardBorder})),De=function(e){var t=e.rank,n=e.user,c=Object(d.b)().t;return Object(O.jsxs)(Be,{p:"16px",children:[Object(O.jsxs)(J,{mb:"16px",children:[t?Object(O.jsx)(a.Dc,{fontWeight:"bold",color:"secondary",children:"#".concat(t)}):Object(O.jsx)("div",{}),Object(O.jsx)(fe,{user:n})]}),Object(O.jsxs)(J,{mb:"4px",children:[Object(O.jsx)(a.Dc,{fontSize:"12px",color:"textSubtle",children:c("Win Rate")}),Object(O.jsx)(a.Dc,{fontWeight:"bold",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(O.jsx)($,{amount:n.netBNB}),Object(O.jsxs)(J,{children:[Object(O.jsx)(a.Dc,{fontSize:"12px",color:"textSubtle",children:c("Rounds Won")}),Object(O.jsx)(a.Dc,{fontWeight:"bold",children:"".concat(n.totalBetsClaimed.toLocaleString(),"/").concat(n.totalBets.toLocaleString())})]})]})},we=function(e){var t=e.results;return Object(O.jsx)(a.q,{mb:"24px",children:t.map((function(e,t){return Object(O.jsx)(De,{rank:t+4,user:e},e.id)}))})},Se=Object(V.e)(a.pb)(C||(C=Object(P.a)(["\n  transform: rotate(30deg);\n"]))),Fe=Object(V.e)(a.qb)(W||(W=Object(P.a)(["\n  transform: rotate(-30deg);\n"]))),ke=Object(V.e)(a.rc)(N||(N=Object(P.a)(["\n  background-color: #4C1B83\n"]))),ye=function(e){var t=e.rank,n=e.user,c=Object(d.b)().t,r=function(e){return 3===e?"bronze":2===e?"silver":"gold"}(t),i=Object(_.c)(n.id),o=Object(a.ed)(Object(O.jsx)(ue,{account:n.id})),s=Object(I.a)(o,1)[0];return Object(O.jsx)(a.z,{ribbon:Object(O.jsx)(a.D,{variantColor:r,text:"#".concat(t),ribbonPosition:"left"}),children:Object(O.jsxs)(a.A,{p:"24px",children:[Object(O.jsx)(a.cb,{alignItems:"center",justifyContent:"center",flexDirection:"column",mb:"24px",children:Object(O.jsxs)(ke,{component:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(a.cb,{mb:"4px",children:[Object(O.jsx)(Se,{color:r,width:"32px"}),Object(O.jsx)(a.q,{width:["40px",null,null,"64px"],height:["40px",null,null,"64px"],children:Object(O.jsx)(a.ib,{src:"/images/tokens/sln.png",alt:"",height:64,width:64})}),Object(O.jsx)(Fe,{color:r,width:"32px"})]}),Object(O.jsx)(a.Dc,{color:"primary",fontWeight:"bold",textAlign:"center",children:i.username||Object(M.a)(n.id)})]}),options:{placement:"bottom"},children:[Object(O.jsx)(a.sc,{onClick:s,children:c("View Stats")}),Object(O.jsx)(a.sc,{as:a.sb,href:Object(U.e)(n.id,"address"),bold:!1,color:"text",external:!0,children:c("View on BscScan")})]})}),Object(O.jsxs)(J,{mb:"4px",children:[Object(O.jsx)(a.Dc,{fontSize:"12px",color:"textSubtle",children:c("Win Rate")}),Object(O.jsx)(a.Dc,{fontWeight:"bold",children:"".concat(n.winRate.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:2}),"%")})]}),Object(O.jsx)($,{amount:n.netBNB}),Object(O.jsxs)(J,{children:[Object(O.jsx)(a.Dc,{fontSize:"12px",color:"textSubtle",children:c("Rounds Won")}),Object(O.jsx)(a.Dc,{fontWeight:"bold",children:"".concat(n.totalBetsClaimed.toLocaleString(),"/").concat(n.totalBets.toLocaleString())})]})]})})},Ce=function(){var e,t=Object(a.dd)().isDesktop,n=Object(d.b)().t,c=Object(o.s)(),r=(e=c,Object(f.a)(e)||Object(m.a)(e)||Object(g.a)(e)||Object(v.a)()),l=r[0],j=r[1],u=r[2],x=r.slice(3),h=Object(o.r)()===b.b.Fetching,p=Object(o.t)(),B=Object(o.q)(),D=Object(i.b)();return Object(O.jsxs)(a.q,{children:[Object(O.jsx)(R.a,{mb:"16px",children:Object(O.jsxs)(a.db,{gridGap:["16px",null,null,null,null,"24px"],gridTemplateColumns:["1fr",null,null,null,null,"repeat(3, 1fr)"],children:[l&&Object(O.jsx)(ye,{rank:1,user:l}),j&&Object(O.jsx)(ye,{rank:2,user:j}),u&&Object(O.jsx)(ye,{rank:3,user:u})]})}),t?Object(O.jsx)(ve,{results:x}):Object(O.jsx)(we,{results:x}),Object(O.jsx)(a.cb,{mb:"40px",justifyContent:"center",children:B&&Object(O.jsx)(a.u,{variant:"secondary",isLoading:h,endIcon:h?Object(O.jsx)(a.j,{spin:!0,color:"currentColor"}):void 0,onClick:function(){D(Object(s.i)(p+z.a))},children:n(h?"Loading...":"View More")})})]})},We=n(171),Ne=function(){var e=Object(r.c)().account,t=Object(d.b)().t,n=Object(i.b)(),l=Object(o.v)(e),j=Object(a.dd)().isDesktop;return Object(c.useEffect)((function(){e&&(n(Object(We.d)(e)),n(Object(s.b)(e)))}),[e,n]),e&&l?Object(O.jsxs)(R.a,{mb:"48px",children:[Object(O.jsx)(a.eb,{as:"h2",scale:"md",color:"secondary",mb:"16px",children:t("My Rankings")}),j?Object(O.jsx)(a.z,{isActive:!0,children:Object(O.jsxs)(a.zc,{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)(a.Fc,{width:"60px",children:"\xa0"}),Object(O.jsx)(a.Fc,{textAlign:"left",children:"\xa0"}),Object(O.jsx)(a.Fc,{textAlign:"right",children:t("Net Winnings (BNB)")}),Object(O.jsx)(a.Fc,{textAlign:"center",children:t("Win Rate")}),Object(O.jsx)(a.Fc,{children:t("Rounds Won")}),Object(O.jsx)(a.Fc,{children:t("Rounds Played")})]})}),Object(O.jsx)("tbody",{children:Object(O.jsx)(ge,{user:l})})]})}):Object(O.jsx)(a.z,{isActive:!0,children:Object(O.jsx)(De,{user:l})})]}):null},Le=n(444),Ae=n(846),ze=function(){var e=Object(i.b)(),t=Object(a.ed)(Object(O.jsx)(ue,{onBeforeDismiss:function(){e(Object(s.s)(null))}})),n=Object(I.a)(t,1)[0],r=Object(c.useCallback)(function(){var t=Object(ee.a)(X.a.mark((function t(n){var c,r;return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(s.b)(n));case 2:return r=t.sent,t.abrupt("return",void 0!==(null===(c=r.payload)||void 0===c?void 0:c.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[e]),o=function(){var t=Object(ee.a)(X.a.mark((function t(c){return X.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(s.s)(c));case 2:n();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsx)(Ae.a,{onAddressClick:o,onValidAddress:r})},Re=Object(V.e)(a.q)(L||(L=Object(P.a)(["\n  margin-bottom: 8px;\n  order: 1;\n  width: 100%;\n\n  "," {\n    margin-bottom: 0;\n    order: 2;\n    width: 320px;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),qe=Object(V.e)(a.q)(A||(A=Object(P.a)(["\n  order: 2;\n  width: 100%;\n\n  "," {\n    order: 1;\n    width: auto;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),Te=function(){var e=Object(d.b)().t,t=Object(i.b)(),n=[{label:e("Net Winnings"),value:"netBNB"},{label:e("Total BNB"),value:"totalBNB"},{label:e("Rounds Played"),value:"totalBets"},{label:e("Win Rate"),value:"winRate"}];return Object(O.jsxs)(R.a,{py:"32px",children:[Object(O.jsx)(a.Dc,{textTransform:"uppercase",fontSize:"12px",color:"textSubtle",fontWeight:"bold",mb:"4px",children:e("Rank By")}),Object(O.jsxs)(a.cb,{flexDirection:["column",null,null,null,null,"row"],alignItems:["start",null,null,null,null,"center"],justifyContent:["start",null,null,null,null,"space-between"],children:[Object(O.jsx)(qe,{children:Object(O.jsx)(Le.a,{options:n,onOptionChange:function(e){t(Object(s.r)({orderBy:e.value}))}})}),Object(O.jsx)(Re,{children:Object(O.jsx)(ze,{})})]})]})};t.default=function(){var e=Object(o.r)(),t=Object(o.p)(),n=Object(r.c)().account,a=Object(i.b)();return Object(c.useEffect)((function(){a(Object(s.h)({filters:t}))}),[n,t,a]),e===b.b.Idle?Object(O.jsx)(l.a,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a,{}),Object(O.jsx)(p,{}),Object(O.jsx)(Te,{}),Object(O.jsx)(Ne,{}),Object(O.jsx)(Ce,{})]})}},846:function(e,t,n){"use strict";var c,r,i,o=n(3),s=n.n(o),l=n(10),j=n(5),b=n(8),a=n(47),d=n(9),u=n(1),x=n(2),O=n(6),h=n(35),p=n(13),f=n(231),m=n(0),g=["onValidAddress","onAddressClick"];!function(e){e[e.NOT_VALID=0]="NOT_VALID",e[e.FOUND=1]="FOUND",e[e.NOT_FOUND=2]="NOT_FOUND"}(i||(i={}));var v=O.e.div(c||(c=Object(d.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.radii.default}),(function(e){return e.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),B=Object(O.e)(x.Dc)(r||(r=Object(d.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),D={isFetching:!1,resultFound:i.NOT_VALID,value:""},w=function(){return Promise.resolve(!0)};t.a=function(e){var t=e.onValidAddress,n=void 0===t?w:t,c=e.onAddressClick,r=Object(a.a)(e,g),o=Object(u.useState)(D),d=Object(b.a)(o,2),O=d[0],S=d[1],F=Object(p.b)().t,k=O.isFetching,y=O.resultFound,C=O.value;return Object(u.useEffect)((function(){!1!==Object(h.j)(C)?function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S((function(e){return Object(j.a)(Object(j.a)({},e),{},{isFetching:!0})})),e.next=4,n(C);case 4:t=e.sent,S((function(e){return Object(j.a)(Object(j.a)({},e),{},{isFetching:!1,resultFound:t?i.FOUND:i.NOT_FOUND})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),S((function(e){return Object(j.a)(Object(j.a)({},e),{},{isFetching:!1})}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()():S((function(e){return Object(j.a)(Object(j.a)({},e),{},{resultFound:i.NOT_VALID})}))}),[C,n,S]),Object(m.jsxs)(x.q,Object(j.a)(Object(j.a)({position:"relative"},r),{},{children:[Object(m.jsx)(x.lb,{placeholder:F("Search %subject%",{subject:F("Address").toLowerCase()}),value:O.value,onChange:function(e){var t=e.target.value;S((function(e){return Object(j.a)(Object(j.a)({},e),{},{value:t})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),k&&Object(m.jsx)(x.q,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(m.jsx)(f.a,{})}),Object(m.jsx)(v,{isOpen:y!==i.NOT_VALID,children:y===i.FOUND?Object(m.jsx)(B,{onClick:function(){S(D),c(O.value)},children:O.value}):Object(m.jsx)(x.Dc,{px:"16px",fontWeight:"bold",children:F("No results found.")})})]}))}}}]);
//# sourceMappingURL=36.a674e8b3.chunk.js.map