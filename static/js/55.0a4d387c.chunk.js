(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[55],{1049:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var c=a(1),s=a(54),n=a(2218),l=a(17),i=a.n(l),o=a(109),r=a(1050),d=a.n(r),m=a(3);const b=e=>{const t=Object(o.useCurrentThemeConfig)(),{children:a,themes:c,...l}=e;return Object(m.jsx)(s.a,{theme:{token:{colorBgContainer:t["color-input-bg"],colorBorder:t["color-button-bordered"],colorPrimaryHover:t["color-button-bordered-text"],colorText:t["color-text-default"],controlOutline:"none",colorIcon:t["color-text-default"],colorFillAlter:t["color-input-bg"],colorErrorBorderHover:"none",colorErrorOutline:"none",colorTextBase:t["color-text-default"],colorBgElevated:t["color-input-bg"],controlItemBgActive:t["color-select-active"],controlItemBgHover:t["color-text-default-06"],colorTextQuaternary:t["color-text-default"],colorBgContainerDisabled:t["color-text-default-06"],colorTextDisabled:t["color-button-bordered-text"],colorTextPlaceholder:t["color-text-default-5"],...c}},children:Object(m.jsx)(n.a,{size:"large",className:i()("pure-comp",d.a.common_select),popupClassName:i()("pure-comp",d.a.common_select_pop),...l,children:a})})},j=n.a.Option;t.b=Object(c.memo)(b)},1050:function(e,t,a){e.exports={common_select_pop:"style_common_select_pop__1Gvf-",common_select:"style_common_select__16Itm"}},2038:function(e,t,a){},2265:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(81),n=a(960),l=a(318),i=a(2219),o=a(1049),r=a(11),d=a.n(r),m=a(120),b=a(971),j=a(87),p=a(182),u=a(0),O=a(21),g=(a(2038),a.p+"static/media/psm-question-circle.e41aebb7.svg"),_=a.p+"static/media/psm-question-circle_light.1cfa30d1.svg",v=(a.p,a.p,a.p+"static/media/ico_jump.bce7b3f1.svg"),x=a.p+"static/media/ico_jump_light.3dfdc164.svg",h=a.p+"static/media/white-triangle-down.86bd9763.svg",f=a.p+"static/media/white-triangle-down_light.c932cfe8.svg",w=a.p+"static/media/copy.a783e0b6.svg",N=a.p+"static/media/copy_light.6bad3627.svg",y=(a(977),a(981)),k=a(155),C=a(193),S=a(3);const{psmTokensKeys:D,psmTokensInfo:T,swapPairsList:I,decimalForShow:Z,decimalForInput:P}=p.a;t.default=()=>{Object(m.a)(window.navigator).any;const e=Object(s.d)((()=>j.default.network)),t=Object(s.d)((()=>j.default.themeStore));let a=null;const r=Object(s.d)((()=>j.default.system)),U=Object(s.d)((()=>j.default.psmPool));Object(c.useEffect)((async()=>(window.gtag("event","index",{type:"psm_view_counts"}),he(),await U.getPsmAmountInfo(),U.setData({order:!0}),Oe(),a||(a=setInterval((async()=>{await U.getPsmAmountInfo(),await ge()}),e.defaultIntervalSec)),()=>{clearInterval(a)})),[]);const[B,L]=Object(c.useState)(!1),[F,A]=Object(c.useState)(!1),[E,M]=Object(c.useState)(d.a.get("psm.enter_amount")),[q,V]=Object(c.useState)(d.a.get("psm.enter_amount")),[H,J]=Object(c.useState)("usdt"),[z,R]=Object(c.useState)("usdd"),[Q,G]=Object(c.useState)(!1),[K,W]=Object(c.useState)(!1),[X,Y]=Object(c.useState)(!1),[$,ee]=Object(c.useState)(!1),[te,ae]=Object(c.useState)(!1),[ce,se]=Object(c.useState)(null),[ne,le]=Object(c.useState)(null),[ie,oe]=Object(c.useState)(null),[re,de]=Object(c.useState)(null),[me,be]=Object(c.useState)("--");let je=window.localStorage.getItem("lang");const[pe,ue]=Object(c.useState)({pools:T,poolData:U.poolData,contracts:I.usdt,approveCallback:[["psmPool/getBalanceInfo"]],exchangeCallback:[["psmPool/getBalanceInfo"],["psmPool/getPsmAmountInfo"]]}),Oe=()=>{let e="--";const t=U.info;if((null===t||void 0===t?void 0:t.length)>0)if(U.order){let a=t[2].minus(t[6]),c=t[3].minus(t[1]),s=t[5],n=a.lt(c)?a:c;e=n.lt(s)?n:s;let l=Object(u.ib)(1).minus(U.info[9]);e=e.times(l)}else{const a=t[8];let c=t[0],s=t[4],n=Object(u.ib)(1).plus(U.info[10]);e=a.gt(0)&&c.lt(s)?c.div(n):s.div(n)}be(e)},ge=async()=>{await Promise.all([U.getBalanceInfo()]),Oe()},_e=async()=>{await ge()},ve=e=>{!Q&&G(!0);try{const{valid:t,str:a}=Object(u.Z)((""+e).replace(/,/g,""),P);if(!t)return;if(se(Object(u.c)(a)),Object(u.ib)(a).gt(0))if("usdd"!==H){const e=Object(u.ib)(1).minus(U.info[9]),t=Object(u.jb)(Object(u.ib)(a).times(e),P,{cutZero:!0});le(Object(u.c)(t)),de(t);const c=Object(u.jb)(Object(u.ib)(t).div(e),P,{cutZero:!0});oe(c)}else{const e=Object(u.ib)(1).plus(U.info[10]),t=Object(u.jb)(Object(u.ib)(a).div(e),P,{cutZero:!0});le(Object(u.c)(t)),de(t);const c=Object(u.jb)(Object(u.ib)(e).times(t),P,{cutZero:!0});oe(c)}else oe(null),le(null);""===e&&(ee(!1),ae(!1))}catch(t){console.log(t)}},xe=e=>{!Q&&G(!0);try{const{valid:t,str:a}=Object(u.Z)((""+e).replace(/,/g,""),P);if(!t)return;le(Object(u.c)(a));const{poolData:c}=pe,s=c[H],n=Object(u.ib)(s.balance).div(s.precision);if(Object(u.ib)(a).eq(0))de(null),se(null);else if("usdd"===z){const e=Object(u.ib)(1).minus(U.info[9]),t=Object(u.jb)(Object(u.ib)(a).div(e),P,{cutZero:!0});if(Object(u.ib)(a).div(e).gt(n))ve(Object(u.jb)(Object(u.ib)(n),P,{cutZero:!0}));else{oe(t),se(Object(u.c)(t));const a=Object(u.jb)(Object(u.ib)(e).times(t),P,{cutZero:!0});de(a)}}else{const e=Object(u.ib)(1).plus(U.info[10]),t=Object(u.jb)(Object(u.ib)(a).times(e),P,{cutZero:!0});if(Object(u.ib)(a).times(e).gt(n))ve(Object(u.jb)(Object(u.ib)(n),P,{cutZero:!0}));else{se(Object(u.c)(t)),oe(t);const a=Object(u.jb)(Object(u.ib)(t).div(e),P,{cutZero:!0});de(a)}}""===e&&(ee(!1),ae(!1))}catch(t){console.log(t)}};Object(c.useEffect)((async()=>{U.setData({currentUsdToken:"usdd"===H?z:H}),ue({pools:T,poolData:U.poolData,contracts:"usdd"===H?I[z]:I[H],approveCallback:[["psmPool/getBalanceInfo"]],exchangeCallback:[["psmPool/getBalanceInfo"],["psmPool/getPsmAmountInfo"]]}),se(null),le(null),oe(null),de(null),ee(!1),ae(!1),await U.getPsmAmountInfo(),Oe()}),[H,z]),Object(c.useEffect)((()=>{Q&&he()}),[ce,ne,me]);const he=()=>{try{const{poolData:t}=pe,a=t[H],c=t[z],s=Object(u.ib)(a.balance).div(a.precision);return Object(u.ib)(ce).lte(0)||Object(u.ib)(ce).isNaN()||(Object(u.ib)(ne).lte(0)||Object(u.ib)(ne).isNaN())?(W(d.a.get("psm.enter_amount")),!0):(W(!1),Object(u.ib)(ce).gt(s)?(ee(d.a.get("psm.insufficient_balance",{value:a.symbol})),!0):(ee(!1),Object(u.ib)(ne).gt(me)?(ae(d.a.get("psm.limit_exceed",{value:c.symbol})),!0):(ae(!1),e.isConnected?(Y(!1),!1):(Y(d.a.get("psm.connect_wallet")),!0))))}catch(t){console.log("checkInput: "+t)}},fe=async e=>{U.setData({order:"usdd"!==e}),!Q&&G(!0),"usdd"===e&&R("usdt"),"usdd"!==z&&"usdd"!==e&&R("usdd"),J(e)},we=e=>{U.setData({order:"usdd"===e}),!Q&&G(!0),"usdd"===e&&J("usdt"),"usdd"!==H&&"usdd"!==e&&J("usdd"),R(e)},Ne=async()=>{if(X||$||te||K)return;if(U.info[7].eq(0))return void n.a.info(d.a.get("psm.unavailable"));await(async()=>{const{pools:e,poolData:t,contracts:a,approveCallback:c}=pe,{psm:s,gemJoin:n}=a;!Q&&G(!0);let l=H,i=ce,o=n;U.order||(o=s);try{if(!X&&!$&&!te&&!K&&he())return!1;if(X&&$&&te&&K)return!1;let{allowance:a,precision:s}=t[l];var d;if(a=Object(u.ib)(a).div(s),"usdt"===z)a=null===(d=t[l])||void 0===d?void 0:d.allowanceForUSDT;else if("usdc"===z){var m;a=null===(m=t[l])||void 0===m?void 0:m.allowanceForUSDC}else if("tusd"===z){var b;a=null===(b=t[l])||void 0===b?void 0:b.allowanceForTUSD}else if("usdj"===z){var j;a=null===(j=t[l])||void 0===j?void 0:j.allowanceForUSDJ}if(Object(u.ib)(i).gt(a)){var p,O;const t={action:"approve",title:"psm.approve",obj:{value:null===(p=e[l])||void 0===p?void 0:p.symbol},continuous:!0};return!!await r.approveToken(null===(O=e[l])||void 0===O?void 0:O.token,o,t,c)&&(await U.getBalanceInfo(),!0)}return!0}catch(g){console.log("checkApprove: "+g)}})()&&ye()},ye=async()=>{var e,t,a,c;window.gtag("event","PSM",{type:"psm_exchange"});const{pools:s,contracts:n,exchangeCallback:l}=pe,{psm:i}=n,o=ie&&Object(u.ib)(ie).gt(0)?Object(u.ib)(ie):Object(u.ib)(ce),d=re&&Object(u.ib)(re).gt(0)?Object(u.ib)(re):Object(u.ib)(ne),m=U.order?o:d,b=U.order?null===(e=s[H])||void 0===e?void 0:e.precision:null===(t=s[z])||void 0===t?void 0:t.precision,j={title:"notification.tip1",obj:{fromValue:Object(u.u)(o,{dp:Z,cutZero:!0,miniText:"0.01"}),fromToken:null===(a=s[H])||void 0===a?void 0:a.symbol,toValue:Object(u.u)(d,{dp:Z,cutZero:!0,miniText:"0.01"}),toToken:null===(c=s[z])||void 0===c?void 0:c.symbol}};try{(U.order?await r.takeUsdd(i,m.times(b)._toIntegerDown()._toHex(),j,l):await r.takeUsdToken(i,m.times(b)._toIntegerDown()._toHex(),j,l))&&(await U.getPsmAmountInfo(),Oe(),await U.getBalanceInfo())}catch(p){console.log("exchange error: ",p)}},ke=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{const{poolData:a}=pe,c=a[H],s=Object(u.ib)(null===c||void 0===c?void 0:c.balance).isNaN()?"--":Object(u.ib)(c.balance).div(c.precision);return Object(S.jsxs)("div",{className:"swap-input-title",children:[Object(S.jsx)("div",{className:"swap-input-title-text",children:e?Object(S.jsx)(o.b,{onChange:fe,value:H,getPopupContainer:e=>e.parentElement||document.body,dropdownStyle:{top:"36px"},suffixIcon:Object(S.jsx)("img",{src:"dark"===t.theme?h:f,alt:""}),children:D.map((e=>{const{symbol:t,id:a}=T[e];return Object(S.jsxs)(o.a,{value:a,children:[Object(S.jsx)("img",{src:Object(O.h)(a),alt:a+" icon",className:"token-logo"}),t]},a)}))}):Object(S.jsx)(o.b,{onChange:we,value:z,getPopupContainer:e=>e.parentElement||document.body,dropdownStyle:{top:"36px"},suffixIcon:Object(S.jsx)("img",{src:"dark"===t.theme?h:f,alt:""}),children:D.map((e=>{const{symbol:t,id:a}=T[e];return Object(S.jsxs)(o.a,{value:a,children:[Object(S.jsx)("img",{src:Object(O.h)(a),alt:a+" icon",className:"token-logo"}),t]},a)}))})}),Object(S.jsxs)("div",{className:"title-info",children:[!e&&Object(S.jsx)(l.a,{title:d.a.get("psm.swap_limit_tip"),children:Object(S.jsx)("img",{className:"input-icon-tip",src:"dark"===t.theme?g:_,alt:""})}),Object(S.jsx)("div",{className:"swap-balance-text",children:e?d.a.get("psm.balance"):d.a.get("psm.swap_limit")}),Object(S.jsxs)("div",{className:"swap-balance-value",children:[Object(S.jsx)("span",{title:Object(u.u)(e?s:me,{dp:P,cutZero:!0,positive:!0,miniText:"0.000001"})||"--",children:Object(u.u)(e?s:me,{dp:P,cutZero:!0,positive:!0,miniText:"0.01"})||"--"}),(e?H:z).toUpperCase()+("USDD"===(e?H:z).toUpperCase()?"OLD":"")]})]})]})}catch(a){console.log(a)}},Ce=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];try{const{poolData:a}=pe,c=a[H],s=Object(u.ib)(null===c||void 0===c?void 0:c.balance).isNaN()?"--":Object(u.ib)(c.balance).div(c.precision);return Object(S.jsx)(S.Fragment,{children:t&&e.isConnected&&Object(S.jsx)("div",{className:"swap-input-btn-max",onClick:()=>{var e,t;null!==(e=Object(u.ib)(s))&&void 0!==e&&e.lt(me)?ve(Object(u.jb)(Object(u.ib)(s),P,{cutZero:!0})):(null===(t=Object(u.ib)(s))||void 0===t?void 0:t.gte(me))&&xe(Object(u.jb)(Object(u.ib)(me),P,{cutZero:!0}))},children:d.a.get("psm.max")})})}catch(a){console.log(a)}},Se=()=>{const e=[{name:d.a.get("psm.cmodal_p1_name1")},{name:d.a.get("psm.cmodal_p1_name2")},{name:d.a.get("psm.cmodal_p1_name3")},{name:d.a.get("psm.cmodal_p1_name4")},{name:d.a.get("psm.cmodal_p1_name5")},{name:d.a.get("psm.cmodal_p1_name6")},{name:d.a.get("psm.cmodal_p1_name7")},{name:d.a.get("psm.cmodal_p1_name8")},{name:d.a.get("psm.cmodal_p1_name9")},{name:d.a.get("psm.cmodal_p1_name10")},{name:d.a.get("psm.cmodal_p1_name11")},{name:d.a.get("psm.cmodal_p1_name12")},{name:d.a.get("psm.cmodal_p1_name13")},{name:d.a.get("psm.cmodal_p1_name14")}];return Object(S.jsxs)("section",{className:"content",children:[Object(S.jsxs)("div",{className:"item",children:[Object(S.jsx)("div",{className:"item-title",children:d.a.get("psm.cmodal_title")}),Object(S.jsx)("div",{className:"ul",children:e.map(((e,a)=>Object(S.jsxs)("div",{className:"li",children:[Object(S.jsxs)("div",{className:"name",children:[Object(S.jsx)("span",{children:e.name+" *"}),Object(S.jsxs)("span",{children:[Object(S.jsx)("img",{alt:"",src:"dark"===t.theme?v:x,onClick:e=>{window.open(p.a.tronscanUrl+"contract/"+p.a.contractList[a],"_blank")}}),Object(S.jsx)("img",{alt:"",src:"dark"===t.theme?w:N,onClick:e=>{Object(u.q)({value:p.a.contractList[a]})},style:{marginLeft:10}})]})]}),Object(S.jsx)("div",{className:"address "+p.a.contractList[a],title:p.a.contractList[a],children:Object(S.jsx)(C.a,{href:p.a.tronscanUrl+"contract/"+p.a.contractList[a],target:e.name,children:p.a.contractList[a]})})]},a)))})]}),Object(S.jsx)("div",{className:"tip",children:d.a.get("psm.cmodal_tip")}),Object(S.jsxs)("div",{className:"item",children:[Object(S.jsx)("div",{className:"item-title",children:d.a.get("psm.cmodal_title2")}),Object(S.jsx)("div",{className:"ul",children:p.a.ownerList.map(((e,a)=>Object(S.jsxs)("div",{className:"li",children:[Object(S.jsxs)("div",{className:"name",children:[Object(S.jsx)("span",{}),Object(S.jsxs)("span",{children:[Object(S.jsx)("img",{alt:"",src:"dark"===t.theme?v:x,onClick:t=>{window.open(p.a.tronscanUrl+"address/"+e,"_blank")}}),Object(S.jsx)("img",{alt:"",src:"dark"===t.theme?w:N,onClick:t=>{Object(u.q)({value:e})},style:{marginLeft:10}})]})]}),Object(S.jsx)("div",{className:"address "+e,title:e,children:Object(S.jsx)(C.a,{href:p.a.tronscanUrl+"address/"+e,target:e,children:e})})]},a)))})]})]})},De=()=>{try{const e=U.info;if((null===e||void 0===e?void 0:e.length)>0){const t=H.toLocaleUpperCase(),a=z.toLocaleUpperCase(),c=Object(u.u)(Object(u.ib)(1).minus(e[9]),{dp:6,miniText:"0.01",cutZero:!0}),s=Object(u.u)(Object(u.ib)(1).plus(e[10]),{dp:6,miniText:"0.01",cutZero:!0}),n=e[9]&&Object(u.u)(e[9].times(100),{dp:2,miniText:"0.01",reserveOneZero:!0}),i=e[10]&&Object(u.u)(e[10].times(100),{dp:2,miniText:"0.01",reserveOneZero:!0});return"USDD"!==t&&Object(u.ib)(e[9]).gt(0)?Object(S.jsxs)("div",{className:"swap-fee",children:[Object(S.jsx)("div",{children:"1 ".concat(t," = ").concat(c," ").concat(a)}),Object(S.jsx)(l.a,{title:"".concat(d.a.get("buysell.fee")," ").concat(n,"%"),children:Object(S.jsx)("img",{alt:"",src:g})})]}):"USDD"===t&&e[10].gt(0)?Object(S.jsxs)("div",{className:"swap-fee",children:[Object(S.jsx)("div",{children:"".concat(s," ").concat(t," = 1 ").concat(a)}),Object(S.jsx)(l.a,{title:"".concat(d.a.get("buysell.fee")," ").concat(i,"%"),children:Object(S.jsx)("img",{alt:"",src:g})})]}):""}}catch(e){console.log("renderFee: ",e)}},Te=[{title:d.a.get("psm.item_title1"),desc:d.a.get("psm.item_content1")},{title:d.a.get("psm.item_title2"),desc:d.a.get("psm.item_content2")},{title:d.a.get("psm.item_title3"),desc:d.a.get("psm.item_content3")}];return Object(S.jsx)(s.a,{children:()=>Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(b.a,{routeName:"psm",mountedActions:_e}),Object(S.jsxs)("div",{className:"page-psm",children:[Object(S.jsx)("div",{className:"page-psm-title",children:Object(S.jsx)(y.a,{title:d.a.get("psm.title"),subTitle:d.a.get("psm.title_des")})}),Object(S.jsxs)("section",{className:"page-psm-main",children:[Object(S.jsx)("div",{className:"page-psm-main-l",children:Object(S.jsx)("section",{className:"psm-swap-container",children:Object(S.jsxs)("section",{className:"psm-swap",children:[Object(S.jsxs)("section",{className:"psm-swap-box",children:[Object(S.jsxs)("div",{className:"swap-input-box swap-from",children:[ke(!0),Object(S.jsxs)("div",{className:"swap-input",children:[Object(S.jsx)(i.a,{onFocus:()=>M(""),onBlur:()=>M(d.a.get("psm.enter_amount")),value:ce,onChange:e=>ve(e.target.value),placeholder:E}),Ce(!0)]}),$?Object(S.jsx)("div",{className:"swap-error-tip "+($?"":"vhide"),children:$}):""]}),Object(S.jsx)("div",{className:"swap-arrow",onClick:()=>(async()=>{!Q&&G(!0);const e=U.order;U.setData({order:!e});const t=H;J(z),R(t)})()}),Object(S.jsxs)("div",{className:"swap-input-box swap-to",children:[ke(!1),Object(S.jsx)("div",{className:"swap-input",children:Object(S.jsx)(i.a,{onFocus:()=>V(""),onBlur:()=>V(d.a.get("psm.enter_amount")),onChange:e=>xe(e.target.value),value:ne,placeholder:q})}),te?Object(S.jsx)("div",{className:"swap-error-tip "+(!$&&te?"":"vhide"),children:te}):""]})]}),De(),Object(S.jsx)("div",{className:"submit-btn ".concat((X||$||te||K)&&e.isConnected?" disabled ":""),onClick:()=>e.isConnected?Ne():e.setData({loginModalVisible:!0,loginModalStep:1}),children:e.isConnected?d.a.get("psm.swap"):d.a.get("psm.connect_wallet")})]})})}),Object(S.jsxs)("div",{className:"page-psm-main-r",children:[Te.map((e=>Object(S.jsxs)("div",{className:"psm-desc-card",children:[Object(S.jsx)("div",{className:"psm-desc-card-title",children:e.title}),Object(S.jsx)("div",{className:"psm-desc-card-desc",children:e.desc})]}))),Object(S.jsxs)("div",{className:"psm-des-jumper",children:[Object(S.jsx)("div",{className:"psm-des-item",onClick:()=>{window.gtag("event","PSM",{type:"psm_white_paper_btn"})},children:Object(S.jsxs)("a",{className:"psm-des-btn",target:"mechanism",href:"en-US"===je?p.a.mechanismLinkEn:p.a.mechanismLinkZn,children:[Object(S.jsx)("span",{children:d.a.get("psm.mechanism")}),Object(S.jsx)("img",{src:"dark"===t.theme?v:x,alt:"mechanism"})]})}),Object(S.jsxs)("div",{className:"psm-des-item psm-des-btn",onClick:()=>{A(!0),window.gtag("event","PSM",{type:"psm_contract_btn"})},children:[Object(S.jsx)("span",{children:d.a.get("psm.contract_address")}),Object(S.jsx)("img",{src:"dark"===t.theme?v:x,alt:"conteacts"})]}),Object(S.jsx)("div",{className:"psm-des-item",onClick:()=>{window.gtag("event","PSM",{type:"psm_audit_report_btn"})},children:Object(S.jsxs)("a",{className:"psm-des-btn",target:"audit_report",href:p.a.auditReportFile,children:[Object(S.jsx)("span",{children:d.a.get("psm.audit_report")}),Object(S.jsx)("img",{src:"dark"===t.theme?v:x,alt:"repor"})]})})]})]})]})]}),Object(S.jsx)(k.a,{title:null,footer:null,centered:!0,maskStyle:{},open:B,className:"psm-detail-modal",onCancel:()=>L(!1),getContainer:()=>document.querySelector(".psm-swap-container"),children:Object(S.jsxs)("section",{className:"psm-amount-modal-content",children:[Object(S.jsxs)("div",{className:"top",children:[Object(S.jsxs)("div",{className:"tip",children:[d.a.get("psm.smodal_swap_limit"),Object(S.jsx)(l.a,{title:d.a.get("psm.smodal_swap_limit_tip"),children:Object(S.jsx)("img",{src:g,alt:""})})]}),Object(S.jsx)("div",{className:"balance",children:null!==U&&void 0!==U&&U.totalConvertible?Object(u.u)(U.totalConvertible,{dp:P,cutZero:!0,miniText:"0.01"}):"--"})]}),Object(S.jsxs)("div",{className:"table",children:[Object(S.jsxs)("div",{className:"th tr",children:[Object(S.jsx)("div",{className:"td"}),Object(S.jsxs)("div",{className:"td",children:[d.a.get("psm.smodal_usdd_max"),Object(S.jsx)(l.a,{title:d.a.get("psm.smodal_swap_limit_des"),children:Object(S.jsx)("img",{src:g,alt:""})})]}),Object(S.jsx)("div",{className:"td",children:d.a.get("psm.smodal_usdd_swapped")}),Object(S.jsx)("div",{className:"td",children:d.a.get("psm.smodal_usdd_left")})]}),U.amountDataDetail.map(((e,t)=>{var a;const c=U.amountDataDetail.length>1&&0===t,s=e.name.toLocaleLowerCase();return Object(S.jsxs)("div",{className:"tr",children:[Object(S.jsx)("div",{className:"td name "+(c?"":"link"),children:c?e.name:Object(S.jsx)("a",{href:p.a.tronscanUrl+"contract/"+(null===(a=U.poolData[s])||void 0===a?void 0:a.token),target:e.name,children:e.name})}),Object(S.jsx)("div",{className:"td exchangeCap",children:Object(u.u)(e.exchangeCap,{dp:Z,cutZero:!0,miniText:"0.01"})}),Object(S.jsx)("div",{className:"td redeemed",children:Object(u.u)(e.redeemed,{dp:Z,cutZero:!0,miniText:"0.01"})}),Object(S.jsx)("div",{className:"td convertible",children:Object(u.u)(e.convertible,{dp:Z,cutZero:!0,miniText:"0.01"})})]},t)}))]})]})}),Object(S.jsx)(k.a,{title:d.a.get("psm.contract_address"),footer:null,width:440,open:F,className:"psm-contracts-modal",onCancel:()=>A(!1),children:Se()})]})})}},981:function(e,t,a){"use strict";var c=a(1),s=a(17),n=a.n(s),l=a(984),i=a(3);const o=e=>{const{title:t,subTitle:a,isRevert:c}=e,s="string"===typeof t;return Object(i.jsxs)("div",{className:l.page_title_wrap,children:[c&&a&&Object(i.jsx)("div",{className:l.page_title_sub,children:a}),t&&Object(i.jsx)("div",{className:n()({[l.page_title]:!0,[l.page_title_revert]:c,[l.page_title_ele]:!s}),children:s?t.split("").map(((e,t)=>Object(i.jsx)("span",{className:l.page_title_ele,children:e},t))):t}),a&&!c&&Object(i.jsx)("div",{className:l.page_title_sub,children:a})]})};t.a=Object(c.memo)(o)},984:function(e,t,a){e.exports={"page-head":"style_page-head__1_76J",link:"style_link__JVBBX","gradient-title":"style_gradient-title__14115",animateTitle:"style_animateTitle__1W1A5","dim-content":"style_dim-content__1MZ32",uppercase:"style_uppercase__2R_0z","window-for-tabs-pane":"style_window-for-tabs-pane__3S1zF","dark-btn":"style_dark-btn__VnSQD","purple-btn":"style_purple-btn__3Ez4v","cur-input":"style_cur-input__1VPh5","max-btn":"style_max-btn__2ujF3",page_title:"style_page_title__dfZPh",page_title_wrap:"style_page_title_wrap__7dtV_",page_title_ele:"style_page_title_ele__Tktf1",page_title_sub:"style_page_title_sub__1IUsF",page_title_revert:"style_page_title_revert__18HMS"}}}]);