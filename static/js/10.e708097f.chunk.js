(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[10],{1639:function(n,t,e){"use strict";e.r(t),e.d(t,"filterUrl",(function(){return a})),e.d(t,"filterPath",(function(){return u})),e.d(t,"filterHref",(function(){return l})),e.d(t,"getUrl",(function(){return c}));var i=e(207),s=e(6),o=["/homeTokens","/home","/stable_swap","/sun","/stake","/rewards","/claim","/risks","/governance","/3pool/trade","/3pool/combinedstats","/3pool/dailystats","/3pool/volumeperCoin","/3pool/deposit","/3pool/withdraw","/3pool","/usdd_3pool","/usdd_old_2pool","/usdd_2pool","/usdc/withdraw","/usdc/deposit","/usdc","/countdown","/pool_settings","/psm","/documents","/scan","/scan/tokenDetail","/scan/pairDetail","/sun_swap","/sun_swap/v1","/sun_swap/v2","/more_page","/stake/two","/stake/one","/stake/genesis"],r=[s.a.justSwap,s.a.justList,s.a.centuryMining.split("#")[0],s.a.sunSwap,s.a.sunSwapV2];function a(n){if(!n)return!1;var t=n.split("?")[0];return!r.includes(t)}function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!n)return!1;var t="/"+n.split("/")[1];return o.includes(t)}function l(n,t,e){var i;if(!n.includes("?"))return n;var s=n.split("?")[0]||"";return(null===(i=n.split("?")[1])||void 0===i?void 0:i.split("&")).forEach((function(n){var i=n.split("=");!t&&!t.includes(i[0])&&e&&e.includes("sun_swap")&&(s&&!s.includes("?")&&(s="?"+s),s+=n)})),s.includes("#")||(s+="#"),s}function c(n,t){if(!n)return"";var e=window.location.href.split("#")[0];e=e.split("?")[0];var i="";t||(t=e),n.includes("?")&&n.includes("#")&&n.indexOf("?")<n.indexOf("#")&&(i="?"+n.match(/\?(\S*)#/)[1]);var s=n.split("#")[1],o="";return s&&s.includes("?")&&(o="?"+s.split("?")[1],s=s.split("?")[0]),e.includes("?")&&(e=l(e,o,s)),u(s)&&a(t)?e+i+"#"+s+o:n}document.addEventListener("click",(function(n){var t=n.path||n.composedPath&&n.composedPath();if(!n.defaultPrevented){var e,s=Object(i.a)(t);try{for(s.s();!(e=s.n()).done;){var o=e.value;if(o instanceof HTMLAnchorElement){n.preventDefault();var r=o.href.split("?")[0],a=c(o.href,r);window.open(a,o.target||"_self")}}}catch(u){s.e(u)}finally{s.f()}}}));var d=window.open;window.open=function(n,t,e){var i=n.toString();if(void 0===i)return null;var s=i.split("?")[0],o=c(i,s);return d(o,t,e)},["pushState"].forEach((function(n){var t=window.history,e=t[n];t[n]=function(n,i,s){if(void 0!==s&&null!==s){var o=s.split("?")[0],r=(s=c(s,o)).toString();return e.call(t,n,i,r)}}}))}}]);