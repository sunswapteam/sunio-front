(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[55],{1352:function(e,t,a){"use strict";t.a=a.p+"static/media/white-triangle-down.86bd9763.svg"},1622:function(e,t,a){},1666:function(e,t,a){"use strict";a.r(t);var c=a(21),n=a(0),s=a(3),i=a(2),r=(a(38),a(57)),o=a(282),l=a(189),d=a(1320),m=a(1308),j=a(621),u=a(16),b=a.n(u),p=a(101),O=a(649),v=a(127),x=a(75),f=a(1),g=a(26),h=(a(1622),a.p+"static/media/psm-question-circle.e41aebb7.svg"),w=a.p+"static/media/psm-close.da24ed95.svg",_=a.p+"static/media/close-b.3057ffe3.svg",N=a.p+"static/media/psm-book.3f681225.svg",k=a(1352),Y=a.p+"static/media/copy.9a56392e.svg",C=a(645),S=a(9),Z=x.a.psmTokensKeys,y=x.a.psmTokensInfo,D=x.a.swapPairsList,I=x.a.decimalForShow,P=x.a.decimalForInput;t.default=function(){var e=Object(p.a)(window.navigator).any,t=Object(r.d)((function(){return v.a.network})),a=null,u=Object(r.d)((function(){return v.a.system})),T=Object(r.d)((function(){return v.a.psmPool}));Object(i.useEffect)(Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.gtag("event","index",{type:"psm_view_counts"}),tt(),e.next=4,T.getPsmAmountInfo();case 4:return T.setData({order:!0}),Qe(),a||(a=setInterval(Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getPsmAmountInfo();case 2:return e.next=4,We();case 4:case"end":return e.stop()}}),e)}))),t.defaultIntervalSec)),e.abrupt("return",(function(){clearInterval(a)}));case 8:case"end":return e.stop()}}),e)}))),[]);var U=Object(i.useState)(!1),L=Object(c.a)(U,2),B=L[0],F=L[1],M=Object(i.useState)(!1),A=Object(c.a)(M,2),q=A[0],E=A[1],J=Object(i.useState)(b.a.get("psm.enter_amount")),V=Object(c.a)(J,2),H=V[0],K=V[1],R=Object(i.useState)(b.a.get("psm.enter_amount")),z=Object(c.a)(R,2),G=z[0],Q=z[1],W=Object(i.useState)("usdt"),X=Object(c.a)(W,2),$=X[0],ee=X[1],te=Object(i.useState)("usdd"),ae=Object(c.a)(te,2),ce=ae[0],ne=ae[1],se=Object(i.useState)(!1),ie=Object(c.a)(se,2),re=ie[0],oe=ie[1],le=Object(i.useState)(!1),de=Object(c.a)(le,2),me=de[0],je=de[1],ue=Object(i.useState)(!1),be=Object(c.a)(ue,2),pe=be[0],Oe=be[1],ve=Object(i.useState)(!1),xe=Object(c.a)(ve,2),fe=xe[0],ge=xe[1],he=Object(i.useState)(!1),we=Object(c.a)(he,2),_e=we[0],Ne=we[1],ke=Object(i.useState)(null),Ye=Object(c.a)(ke,2),Ce=Ye[0],Se=Ye[1],Ze=Object(i.useState)(null),ye=Object(c.a)(Ze,2),De=ye[0],Ie=ye[1],Pe=Object(i.useState)(null),Te=Object(c.a)(Pe,2),Ue=Te[0],Le=Te[1],Be=Object(i.useState)(null),Fe=Object(c.a)(Be,2),Me=Fe[0],Ae=Fe[1],qe=Object(i.useState)("--"),Ee=Object(c.a)(qe,2),Je=Ee[0],Ve=Ee[1],He=window.localStorage.getItem("lang"),Ke=Object(i.useState)({pools:y,poolData:T.poolData,contracts:D.usdt,approveCallback:[["psmPool/getBalanceInfo"]],exchangeCallback:[["psmPool/getBalanceInfo"],["psmPool/getPsmAmountInfo"]]}),Re=Object(c.a)(Ke,2),ze=Re[0],Ge=Re[1],Qe=function(){var e="--",t=T.info;if((null===t||void 0===t?void 0:t.length)>0)if(T.order){var a=t[2].minus(t[6]),c=t[3].minus(t[1]),n=t[5],s=a.lt(c)?a:c;e=s.lt(n)?s:n;var i=Object(f.Y)(1).minus(T.info[9]);e=e.times(i)}else{var r=t[8],o=t[0],l=t[4],d=Object(f.Y)(1).plus(T.info[10]);e=r.gt(0)&&o.lt(l)?o.div(d):l.div(d)}Ve(e)},We=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([T.getBalanceInfo()]);case 2:Qe();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,We();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$e=function(e){!re&&oe(!0);try{var t=Object(f.P)((""+e).replace(/,/g,""),P),a=t.valid,c=t.str;if(!a)return;if(Se(Object(f.c)(c)),Object(f.Y)(c).gt(0))if("usdd"!==$){var n=Object(f.Y)(1).minus(T.info[9]),s=Object(f.Z)(Object(f.Y)(c).times(n),P,{cutZero:!0});Ie(Object(f.c)(s)),Ae(s);var i=Object(f.Z)(Object(f.Y)(s).div(n),P,{cutZero:!0});Le(i)}else{var r=Object(f.Y)(1).plus(T.info[10]),o=Object(f.Z)(Object(f.Y)(c).div(r),P,{cutZero:!0});Ie(Object(f.c)(o)),Ae(o);var l=Object(f.Z)(Object(f.Y)(r).times(o),P,{cutZero:!0});Le(l)}else Le(null),Ie(null);""===e&&(ge(!1),Ne(!1))}catch(d){console.log(d)}},et=function(e){!re&&oe(!0);try{var t=Object(f.P)((""+e).replace(/,/g,""),P),a=t.valid,c=t.str;if(!a)return;Ie(Object(f.c)(c));var n=ze.poolData[$],s=Object(f.Y)(n.balance).div(n.precision);if(Object(f.Y)(c).eq(0))Ae(null),Se(null);else if("usdd"===ce){var i=Object(f.Y)(1).minus(T.info[9]),r=Object(f.Z)(Object(f.Y)(c).div(i),P,{cutZero:!0});if(Object(f.Y)(c).div(i).gt(s))$e(Object(f.Z)(Object(f.Y)(s),P,{cutZero:!0}));else{Le(r),Se(Object(f.c)(r));var o=Object(f.Z)(Object(f.Y)(i).times(r),P,{cutZero:!0});Ae(o)}}else{var l=Object(f.Y)(1).plus(T.info[10]),d=Object(f.Z)(Object(f.Y)(c).times(l),P,{cutZero:!0});if(Object(f.Y)(c).times(l).gt(s))$e(Object(f.Z)(Object(f.Y)(s),P,{cutZero:!0}));else{Se(Object(f.c)(d)),Le(d);var m=Object(f.Z)(Object(f.Y)(d).div(l),P,{cutZero:!0});Ae(m)}}""===e&&(ge(!1),Ne(!1))}catch(j){console.log(j)}};Object(i.useEffect)(Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T.setData({currentUsdToken:"usdd"===$?ce:$}),Ge({pools:y,poolData:T.poolData,contracts:"usdd"===$?D[ce]:D[$],approveCallback:[["psmPool/getBalanceInfo"]],exchangeCallback:[["psmPool/getBalanceInfo"],["psmPool/getPsmAmountInfo"]]}),Se(null),Ie(null),Le(null),Ae(null),ge(!1),Ne(!1),e.next=10,T.getPsmAmountInfo();case 10:Qe();case 11:case"end":return e.stop()}}),e)}))),[$,ce]),Object(i.useEffect)((function(){re&&tt()}),[Ce,De,Je]);var tt=function(){try{var e=ze.poolData,a=e[$],c=e[ce],n=Object(f.Y)(a.balance).div(a.precision);return Object(f.Y)(Ce).lte(0)||Object(f.Y)(Ce).isNaN()||(Object(f.Y)(De).lte(0)||Object(f.Y)(De).isNaN())?(je(b.a.get("psm.enter_amount")),!0):(je(!1),Object(f.Y)(Ce).gt(n)?(ge(b.a.get("psm.insufficient_balance",{value:a.symbol})),!0):(ge(!1),Object(f.Y)(De).gt(Je)?(Ne(b.a.get("psm.limit_exceed",{value:c.symbol})),!0):(Ne(!1),t.isConnected?(Oe(!1),!1):(Oe(b.a.get("psm.connect_wallet")),!0))))}catch(s){console.log("checkInput: "+s)}},at=function(){var e=Object(s.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:$,T.setData({order:"usdd"!==t}),!re&&oe(!0),"usdd"===t&&ne("usdt"),"usdd"!==ce&&"usdd"!==t&&ne("usdd"),ee(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ct=function(e){T.setData({order:"usdd"===e}),!re&&oe(!0),"usdd"===e&&ee("usdt"),"usdd"!==$&&"usdd"!==e&&ee("usdd"),ne(e)},nt=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){var t,a;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!re&&oe(!0),t=T.order,T.setData({order:!t}),a=$,ee(ce),ne(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),st=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){var t,a,c,s,i,r,o,l,d,m,j,b,p,O,v,x,g,h,w;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=ze.pools,a=ze.poolData,c=ze.contracts,s=ze.approveCallback,i=c.psm,r=c.gemJoin,!re&&oe(!0),o=$,l=Ce,d=r,T.order||(d=i),e.prev=7,pe||fe||_e||me){e.next=12;break}if(!tt()){e.next=12;break}return e.abrupt("return",!1);case 12:if(!(pe&&fe&&_e&&me)){e.next=14;break}return e.abrupt("return",!1);case 14:if(m=a[o],j=m.allowance,b=m.precision,j=Object(f.Y)(j).div(b),"usdt"===ce?j=null===(p=a[o])||void 0===p?void 0:p.allowanceForUSDT:"usdc"===ce?j=null===(O=a[o])||void 0===O?void 0:O.allowanceForUSDC:"tusd"===ce?j=null===(v=a[o])||void 0===v?void 0:v.allowanceForTUSD:"usdj"===ce&&(j=null===(x=a[o])||void 0===x?void 0:x.allowanceForUSDJ),!Object(f.Y)(l).gt(j)){e.next=29;break}return w={action:"approve",title:"psm.approve",obj:{value:null===(g=t[o])||void 0===g?void 0:g.symbol},continuous:!0},e.next=21,u.approveToken(null===(h=t[o])||void 0===h?void 0:h.token,d,w,s);case 21:if(!e.sent){e.next=28;break}return e.next=25,T.getBalanceInfo();case 25:return e.abrupt("return",!0);case 28:return e.abrupt("return",!1);case 29:return e.abrupt("return",!0);case 32:e.prev=32,e.t0=e.catch(7),console.log("checkApprove: "+e.t0);case 35:case"end":return e.stop()}}),e,null,[[7,32]])})));return function(){return e.apply(this,arguments)}}(),it=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(pe||fe||_e||me)){e.next=2;break}return e.abrupt("return");case 2:if(!T.info[7].eq(0)){e.next=5;break}return o.b.info(b.a.get("psm.unavailable")),e.abrupt("return");case 5:return e.next=7,st();case 7:e.sent&&rt();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),rt=function(){var e=Object(s.a)(Object(n.a)().mark((function e(){var t,a,c,s,i,r,o,l,d,m,j;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.gtag("event","PSM",{type:"psm_exchange"}),c=ze.pools,s=ze.contracts,i=ze.exchangeCallback,r=s.psm,o=Ue&&Object(f.Y)(Ue).gt(0)?Object(f.Y)(Ue):Object(f.Y)(Ce),l=Me&&Object(f.Y)(Me).gt(0)?Object(f.Y)(Me):Object(f.Y)(De),d=T.order?o:l,m=T.order?null===(t=c[$])||void 0===t?void 0:t.precision:null===(a=c[ce])||void 0===a?void 0:a.precision,j={title:"notification.tip1",obj:{fromValue:Object(f.t)(o,{dp:I,cutZero:!0,miniText:"0.01"}),fromToken:$.toUpperCase(),toValue:Object(f.t)(l,{dp:I,cutZero:!0,miniText:"0.01"}),toToken:ce.toUpperCase()}},e.prev=8,!T.order){e.next=15;break}return e.next=12,u.takeUsdd(r,d.times(m)._toIntegerDown()._toHex(),j,i);case 12:e.t0=e.sent,e.next=18;break;case 15:return e.next=17,u.takeUsdToken(r,d.times(m)._toIntegerDown()._toHex(),j,i);case 17:e.t0=e.sent;case 18:if(!e.t0){e.next=25;break}return e.next=22,T.getPsmAmountInfo();case 22:return Qe(),e.next=25,T.getBalanceInfo();case 25:e.next=30;break;case 27:e.prev=27,e.t1=e.catch(8),console.log("exchange error: ",e.t1);case 30:case"end":return e.stop()}}),e,null,[[8,27]])})));return function(){return e.apply(this,arguments)}}(),ot=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{var t=ze.poolData,a=t[$],c=Object(f.Y)(null===a||void 0===a?void 0:a.balance).isNaN()?"--":Object(f.Y)(a.balance).div(a.precision);return Object(S.jsxs)("div",{className:"swap-input-title",children:[Object(S.jsx)("div",{className:"swap-input-title-text",children:e?b.a.get("psm.from"):b.a.get("psm.to")}),Object(S.jsxs)("div",{className:"title-info",children:[Object(S.jsx)("div",{className:"swap-balance-text",children:e?b.a.get("psm.balance"):b.a.get("psm.swap_limit")}),Object(S.jsxs)("div",{className:"swap-balance-value",children:[Object(S.jsx)("span",{title:Object(f.t)(e?c:Je,{dp:P,cutZero:!0,positive:!0,miniText:"0.000001"})||"--",children:Object(f.t)(e?c:Je,{dp:P,cutZero:!0,positive:!0,miniText:"0.01"})||"--"}),(e?$:ce).toUpperCase(),!e&&Object(S.jsx)(l.a,{title:b.a.get("psm.swap_limit_tip"),children:Object(S.jsx)("img",{src:h,alt:""})})]}),e&&Object(S.jsx)("div",{className:"swap-input-title-max",onClick:function(){var e,t;null!==(e=Object(f.Y)(c))&&void 0!==e&&e.lt(Je)?$e(Object(f.Z)(Object(f.Y)(c),P,{cutZero:!0})):(null===(t=Object(f.Y)(c))||void 0===t?void 0:t.gte(Je))&&et(Object(f.Z)(Object(f.Y)(Je),P,{cutZero:!0}))},children:b.a.get("psm.max")})]})]})}catch(n){console.log(n)}},lt=function(){var e=[{name:b.a.get("psm.cmodal_p1_name1")},{name:b.a.get("psm.cmodal_p1_name2")},{name:b.a.get("psm.cmodal_p1_name3")},{name:b.a.get("psm.cmodal_p1_name4")},{name:b.a.get("psm.cmodal_p1_name5")},{name:b.a.get("psm.cmodal_p1_name6")},{name:b.a.get("psm.cmodal_p1_name7")},{name:b.a.get("psm.cmodal_p1_name8")},{name:b.a.get("psm.cmodal_p1_name9")},{name:b.a.get("psm.cmodal_p1_name10")},{name:b.a.get("psm.cmodal_p1_name11")},{name:b.a.get("psm.cmodal_p1_name12")},{name:b.a.get("psm.cmodal_p1_name13")},{name:b.a.get("psm.cmodal_p1_name14")}];return Object(S.jsxs)("section",{className:"psm-contracts-modal-content",children:[Object(S.jsx)("div",{className:"title",children:b.a.get("psm.contract_address")}),Object(S.jsxs)("div",{className:"content",children:[Object(S.jsxs)("div",{className:"item",children:[Object(S.jsx)("div",{className:"item-title",children:b.a.get("psm.cmodal_title")}),Object(S.jsx)("div",{className:"ul",children:e.map((function(e,t){return Object(S.jsxs)("div",{className:"li",children:[Object(S.jsx)("div",{className:"name",children:e.name+" *"}),Object(S.jsxs)("div",{className:"address "+x.a.contractList[t],title:x.a.contractList[t],children:[Object(S.jsx)("a",{href:x.a.tronscanUrl+"contract/"+x.a.contractList[t],target:e.name,children:x.a.contractList[t]}),Object(S.jsx)("img",{alt:"",src:Y,onClick:function(e){Object(f.o)(e,"50px",".".concat(x.a.contractList[t]))}})]})]},t)}))})]}),Object(S.jsx)("div",{className:"tip",children:b.a.get("psm.cmodal_tip")}),Object(S.jsxs)("div",{className:"item",children:[Object(S.jsx)("div",{className:"item-title",children:b.a.get("psm.cmodal_title2")}),Object(S.jsx)("div",{className:"ul",children:x.a.ownerList.map((function(e,t){return Object(S.jsx)("div",{className:"li",children:Object(S.jsxs)("div",{className:"address "+e,title:e,children:[Object(S.jsx)("a",{href:x.a.tronscanUrl+"address/"+e,target:e,children:e}),Object(S.jsx)("img",{alt:"",src:Y,onClick:function(t){Object(f.o)(t,"50px",".".concat(e))}})]})},t)}))})]})]})]})},dt=function(){try{var e=T.info;if((null===e||void 0===e?void 0:e.length)>0){var t=$.toLocaleUpperCase(),a=ce.toLocaleUpperCase(),c=Object(f.t)(Object(f.Y)(1).minus(e[9]),{dp:6,miniText:"0.01",cutZero:!0}),n=Object(f.t)(Object(f.Y)(1).plus(e[10]),{dp:6,miniText:"0.01",cutZero:!0}),s=e[9]&&Object(f.t)(e[9].times(100),{dp:2,miniText:"0.01",reserveOneZero:!0}),i=e[10]&&Object(f.t)(e[10].times(100),{dp:2,miniText:"0.01",reserveOneZero:!0});return"USDD"!==t&&Object(f.Y)(e[9]).gt(0)?Object(S.jsxs)("div",{className:"swap-fee",children:[Object(S.jsx)("div",{children:"1 ".concat(t," = ").concat(c," ").concat(a)}),Object(S.jsx)(l.a,{title:"".concat(b.a.get("buysell.fee")," ").concat(s,"%"),children:Object(S.jsx)("img",{alt:"",src:h})})]}):"USDD"===t&&e[10].gt(0)?Object(S.jsxs)("div",{className:"swap-fee",children:[Object(S.jsx)("div",{children:"".concat(n," ").concat(t," = 1 ").concat(a)}),Object(S.jsx)(l.a,{title:"".concat(b.a.get("buysell.fee")," ").concat(i,"%"),children:Object(S.jsx)("img",{alt:"",src:h})})]}):Object(S.jsx)("div",{className:"swap-fee"})}}catch(r){console.log("renderFee: ",r)}},mt=Object(i.useMemo)((function(){return{showBack:!0,onBack:function(){Object(C.g)({id:"more"})}}}),[]);return Object(S.jsx)(r.a,{children:function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(O.a,{routeName:"psm",mountedActions:Xe,subNavProps:mt,mShowLogo:!1,mShowBottomNav:!1}),Object(S.jsxs)("section",{className:"psm-swap-container",children:[Object(S.jsxs)("section",{className:"psm-description",children:[Object(S.jsx)("div",{className:"bg-card card1"}),Object(S.jsx)("div",{className:"bg-card card2"}),Object(S.jsxs)("div",{className:"des-content",children:[Object(S.jsx)("img",{src:N,alt:"",className:"psm-book"}),Object(S.jsx)("div",{className:"des-content-title",children:b.a.get("psm.get_start")}),Object(S.jsx)("div",{className:"des-item-title",children:b.a.get("psm.item_title1")}),Object(S.jsx)("div",{className:"des-item-content",children:b.a.get("psm.item_content1")}),Object(S.jsx)("div",{className:"des-item-title",children:b.a.get("psm.item_title2")}),Object(S.jsx)("div",{className:"des-item-content",children:b.a.get("psm.item_content2")}),Object(S.jsx)("div",{className:"des-item-title",children:b.a.get("psm.item_title3")}),Object(S.jsx)("div",{className:"des-item-content",children:b.a.get("psm.item_content3")}),Object(S.jsxs)("div",{className:"psm-des-footer",children:[Object(S.jsx)("div",{onClick:function(){window.gtag("event","PSM",{type:"psm_white_paper_btn"})},children:Object(S.jsx)("a",{className:"des-footer-btn",target:"mechanism",href:"en-US"===He?x.a.mechanismLinkEn:x.a.mechanismLinkZn,children:b.a.get("psm.mechanism")})}),Object(S.jsx)("div",{className:"des-footer-btn",onClick:function(){E(!0),window.gtag("event","PSM",{type:"psm_contract_btn"})},children:b.a.get("psm.contract_address")}),Object(S.jsx)("div",{className:"des-footer-btn",onClick:function(){window.gtag("event","PSM",{type:"psm_audit_report_btn"})},children:Object(S.jsx)("a",{target:"audit_report",href:x.a.auditReportFile,children:b.a.get("psm.audit_report")})})]})]})]}),Object(S.jsxs)("section",{className:"psm-swap",children:[Object(S.jsxs)("div",{className:"psm-swap-title",children:[Object(S.jsx)("div",{className:"psm-swap-title-text",children:b.a.get("psm.title")}),e?Object(S.jsx)("div",{className:"psm-swap-des",children:b.a.get("psm.title_des")}):Object(S.jsx)("div",{className:"psm-swap-amount-detail",onClick:function(){F(!0),window.gtag("event","PSM",{type:"psm_amount_modal"})},children:b.a.get("psm.swap_limit_button")})]}),e?Object(S.jsx)("div",{className:"psm-swap-amount-detail",onClick:function(){F(!0),window.gtag("event","PSM",{type:"psm_amount_modal"})},children:b.a.get("psm.swap_limit_button")}):Object(S.jsx)("div",{className:"psm-swap-des",children:b.a.get("psm.title_des")}),Object(S.jsxs)("section",{className:"psm-swap-box",children:[Object(S.jsxs)("div",{className:"swap-input-box swap-from",children:[ot(!0),Object(S.jsxs)("div",{className:"swap-input",children:[Object(S.jsx)(d.a,{onFocus:function(){return K("")},onBlur:function(){return K(b.a.get("psm.enter_amount"))},value:Ce,onChange:function(e){return $e(e.target.value)},placeholder:H}),Object(S.jsx)(m.a,{dropdownClassName:"psm-select",onChange:at,value:$,suffixIcon:Object(S.jsx)("img",{src:k.a,alt:""}),children:Z.map((function(e){var t=y[e],a=t.symbol,c=t.id;return Object(S.jsxs)(m.a.Option,{value:c,children:[Object(S.jsx)("img",{src:Object(g.e)(c),alt:c+" icon",className:"token-logo"}),a]},c)}))})]}),Object(S.jsx)("div",{className:"swap-error-tip "+(fe?"":"vhide"),children:fe})]}),Object(S.jsx)("div",{className:"swap-arrow",onClick:function(){return nt()}}),Object(S.jsxs)("div",{className:"swap-input-box swap-to",children:[ot(!1),Object(S.jsxs)("div",{className:"swap-input",children:[Object(S.jsx)(d.a,{onFocus:function(){return Q("")},onBlur:function(){return Q(b.a.get("psm.enter_amount"))},onChange:function(e){return et(e.target.value)},value:De,placeholder:G}),Object(S.jsx)(m.a,{dropdownClassName:"psm-select",onChange:ct,value:ce,suffixIcon:Object(S.jsx)("img",{src:k.a,alt:""}),children:Z.map((function(e){var t=y[e],a=t.symbol,c=t.id;return Object(S.jsxs)(m.a.Option,{value:c,children:[Object(S.jsx)("img",{src:Object(g.e)(c),alt:c+" icon",className:"token-logo"}),a]},c)}))})]}),Object(S.jsx)("div",{className:"swap-error-tip "+(!fe&&_e?"":"vhide"),children:_e})]})]}),dt(),Object(S.jsx)("div",{className:"submit-btn ".concat((pe||fe||_e||me)&&t.isConnected?" disabled ":""),onClick:function(){return t.isConnected?it():t.setData({loginModalVisible:!0,loginModalStep:1})},children:t.isConnected?b.a.get("psm.swap"):b.a.get("psm.connect_wallet")})]})]}),Object(S.jsx)(j.a,{closeIcon:Object(S.jsx)("img",{src:w,alt:""}),title:null,footer:null,centered:!0,maskStyle:{},visible:B,className:"psm-detail-modal",onCancel:function(){return F(!1)},getContainer:function(){return document.querySelector(".psm-swap-container")},children:Object(S.jsxs)("section",{className:"psm-amount-modal-content",children:[Object(S.jsxs)("div",{className:"top",children:[Object(S.jsxs)("div",{className:"tip",children:[b.a.get("psm.smodal_swap_limit"),Object(S.jsx)(l.a,{title:b.a.get("psm.smodal_swap_limit_tip"),children:Object(S.jsx)("img",{src:h,alt:""})})]}),Object(S.jsx)("div",{className:"balance",children:null!==T&&void 0!==T&&T.totalConvertible?Object(f.t)(T.totalConvertible,{dp:P,cutZero:!0,miniText:"0.01"}):"--"})]}),Object(S.jsxs)("div",{className:"table",children:[Object(S.jsxs)("div",{className:"th tr",children:[Object(S.jsx)("div",{className:"td"}),Object(S.jsxs)("div",{className:"td",children:[b.a.get("psm.smodal_usdd_max"),Object(S.jsx)(l.a,{title:b.a.get("psm.smodal_swap_limit_des"),children:Object(S.jsx)("img",{src:h,alt:""})})]}),Object(S.jsx)("div",{className:"td",children:b.a.get("psm.smodal_usdd_swapped")}),Object(S.jsx)("div",{className:"td",children:b.a.get("psm.smodal_usdd_left")})]}),T.amountDataDetail.map((function(e,t){var a,c=T.amountDataDetail.length>1&&0===t,n=e.name.toLocaleLowerCase();return Object(S.jsxs)("div",{className:"tr",children:[Object(S.jsx)("div",{className:"td name "+(c?"":"link"),children:c?e.name:Object(S.jsx)("a",{href:x.a.tronscanUrl+"contract/"+(null===(a=T.poolData[n])||void 0===a?void 0:a.token),target:e.name,children:e.name})}),Object(S.jsx)("div",{className:"td exchangeCap",children:Object(f.t)(e.exchangeCap,{dp:I,cutZero:!0,miniText:"0.01"})}),Object(S.jsx)("div",{className:"td redeemed",children:Object(f.t)(e.redeemed,{dp:I,cutZero:!0,miniText:"0.01"})}),Object(S.jsx)("div",{className:"td convertible",children:Object(f.t)(e.convertible,{dp:I,cutZero:!0,miniText:"0.01"})})]},t)}))]})]})}),Object(S.jsx)(j.a,{closeIcon:Object(S.jsx)("img",{src:_,alt:""}),title:null,footer:null,centered:!0,maskStyle:{},visible:q,className:"psm-contracts-modal",onCancel:function(){return E(!1)},getContainer:function(){return document.querySelector(".psm-swap-container")},children:lt()})]})}})}}}]);