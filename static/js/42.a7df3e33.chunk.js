(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[42],{1351:function(e,t,n){"use strict";var s=n(0),a=n(3),c=n(21),r=n(2),i=n(16),l=n.n(i),j=n(57),u=n(1),b=n(127),d=n(9);t.a=function(){var e=Object(j.d)((function(){return b.a.pool})),t=Object(r.useState)("--"),n=Object(c.a)(t,2),i=n[0],m=n[1];return Object(r.useEffect)(Object(a.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getSwapBalance();case 2:m(Object(u.a)(e.totalSwapBalance).plus(e.balancesUsdc));case 3:case"end":return t.stop()}}),t)}))),[]),Object(d.jsx)(j.a,{children:function(){return Object(d.jsx)("div",{className:"window white",children:Object(d.jsxs)("fieldset",{children:[Object(d.jsx)("legend",{className:"text-center",children:l.a.get("home.volume_title")}),Object(d.jsxs)("ul",{className:"volumn-ul mt-20",children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"c-999",children:l.a.get("home.volume.deposits")}),"$".concat(Object(u.t)(i))]}),e.volData&&Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{className:"c-999",children:l.a.get("home.volume.daily_volume")}),"$".concat(Object(u.t)(e.totalDealAmountPerDay,2))]})]})]})})}})}},1376:function(e,t,n){"use strict";var s=n(21),a=n(2),c=(n(763),n(16)),r=n.n(c),i=n(9);t.a=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!0),j=Object(s.a)(l,2),u=j[0],b=j[1];return Object(i.jsxs)("div",{className:"window charts",children:[Object(i.jsxs)("ul",{className:"li-inline",children:[Object(i.jsxs)("li",{onClick:function(){return c(!n)},children:["[",n&&Object(i.jsx)("span",{children:"X"}),"] usdt"]}),Object(i.jsxs)("li",{onClick:function(){return b(!u)},children:["[",u&&Object(i.jsx)("span",{children:"X"}),"] 3pool"]})]}),Object(i.jsx)("div",{className:"mt-10",children:Object(i.jsx)("button",{children:r.a.get("volume_percoin.select")})})]})}},1461:function(e,t,n){"use strict";n(2),n(16),n(9)},1647:function(e,t,n){"use strict";n.r(t);n(2);var s=n(649),a=n(663),c=(n(1461),n(1351),n(1376)),r=(n(304),n(763),n(9));t.default=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(s.a,{routeName:"3pool/combinedstats"}),Object(r.jsx)(a.a,{}),Object(r.jsx)(c.a,{})]})}},663:function(e,t,n){"use strict";var s=n(2),a=n(16),c=n.n(a),r=n(127),i=n(6),l=n(679),j=n.n(l),u=n(57),b=n(1),d=n(9);t.a=function(e){Object(u.d)((function(){return r.a.pool}));return Object(s.useEffect)((function(){}),[e.totalTvl,e.stableCoins,e.allSwaps,e.miningPools]),Object(d.jsx)(u.a,{children:function(){return Object(d.jsxs)("div",{className:(e.audit?"banner audit":"banner")+("poolConfigure"===e.from?" pool-config":""),children:[Object(d.jsxs)("div",{className:"banner-title "+(e.spTitle?"sp":""),children:["poolConfigure"!==e.from&&(e.title||c.a.get("banner.title_1")),"poolConfigure"==e.from&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{children:e.title||c.a.get("banner.title_1")}),Object(d.jsx)("img",{src:"data:image/png;base64,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"})]})]}),"no-desc"!==e.desc&&Object(d.jsx)("div",{className:"banner-des",children:e.desc||c.a.get("banner.desc_1")}),e.tvl&&Object(d.jsxs)("div",{className:"tvl-list",children:[Object(d.jsxs)("div",{className:"banner-tvl",children:[Object(d.jsx)("div",{className:"tvl-value",children:"--"===e.totalTvl?"--":Object(d.jsx)(j.a,{end:Number(Object(b.Z)(e.totalTvl,0)),duration:1,prefix:"$ ",separator:","})}),Object(d.jsx)("div",{className:"tvl-title",children:c.a.get("banner.total_value")})]}),Object(d.jsxs)("div",{className:"banner-tvl-detail",children:[Object(d.jsxs)("div",{className:"banner-tvl-stable",children:[Object(d.jsx)("div",{className:"tvl-value",children:"--"===e.stableCoins?"--":Object(d.jsx)(j.a,{end:Number(Object(b.Z)(e.stableCoins,0)),duration:1,prefix:"$ ",separator:","})}),Object(d.jsx)("div",{className:"tvl-title",children:c.a.get("banner.total_value_stable")})]}),Object(d.jsxs)("div",{className:"banner-tvl-stable sunswap-tvl",children:[Object(d.jsx)("div",{className:"tvl-value",children:"--"===e.allSwaps?"--":Object(d.jsx)(j.a,{end:Number(Object(b.Z)(e.allSwaps,0)),duration:1,prefix:"$ ",separator:","})}),Object(d.jsx)("div",{className:"tvl-title",children:c.a.get("banner.total_value_sunswap")})]}),Object(d.jsxs)("div",{className:"banner-tvl-mining",children:[Object(d.jsx)("div",{className:"tvl-value",children:"--"===e.miningPools?"--":Object(d.jsx)(j.a,{end:Number(Object(b.Z)(e.miningPools,0)),duration:1,prefix:"$ ",separator:","})}),Object(d.jsx)("div",{className:"tvl-title",children:c.a.get("banner.total_value_mining")})]})]})]}),e.link?Object(d.jsx)("div",{className:"banner-audit",children:Object(d.jsx)("a",{href:"zh-CN"===window.localStorage.getItem("lang")?i.a.bannerLinkCn:i.a.bannerLinkEn,target:"_blank",children:c.a.get("banner.link")})}):null]})}})}},763:function(e,t,n){}}]);