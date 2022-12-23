(this["webpackJsonpfront-js"]=this["webpackJsonpfront-js"]||[]).push([[43],{1341:function(e,t,c){"use strict";var a=c(14),n=c(12),r=c(692),i=c(27),o=c.n(i),s=c(23),l=c(10),d=c(11),u=c(18),m=c(19),v=c(35),p=c(129),b=c(2),f=c(668),h=c.n(f),j=c(45),y=c(59),O=c(21),x=b.forwardRef((function(e,t){var c,a=e.prefixCls,r=e.forceRender,i=e.className,s=e.style,l=e.children,d=e.isActive,u=e.role,m=b.useState(d||r),v=Object(O.a)(m,2),p=v[0],f=v[1];return b.useEffect((function(){(r||d)&&f(!0)}),[r,d]),p?b.createElement("div",{ref:t,className:o()("".concat(a,"-content"),(c={},Object(n.a)(c,"".concat(a,"-content-active"),d),Object(n.a)(c,"".concat(a,"-content-inactive"),!d),c),i),style:s,role:u},b.createElement("div",{className:"".concat(a,"-content-box")},l)):null}));x.displayName="PanelContent";var N=x,C=["className","id","style","prefixCls","headerClass","children","isActive","destroyInactivePanel","accordion","forceRender","openMotion","extra","collapsible"],g=function(e){Object(u.a)(c,e);var t=Object(m.a)(c);function c(){var e;Object(l.a)(this,c);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).onItemClick=function(){var t=e.props,c=t.onItemClick,a=t.panelKey;"function"===typeof c&&c(a)},e.handleKeyPress=function(t){"Enter"!==t.key&&13!==t.keyCode&&13!==t.which||e.onItemClick()},e.renderIcon=function(){var t=e.props,c=t.showArrow,a=t.expandIcon,n=t.prefixCls,r=t.collapsible;if(!c)return null;var i="function"===typeof a?a(e.props):b.createElement("i",{className:"arrow"});return i&&b.createElement("div",{className:"".concat(n,"-expand-icon"),onClick:"header"===r||"icon"===r?e.onItemClick:null},i)},e.renderTitle=function(){var t=e.props,c=t.header,a=t.prefixCls,n=t.collapsible;return b.createElement("span",{className:"".concat(a,"-header-text"),onClick:"header"===n?e.onItemClick:null},c)},e}return Object(d.a)(c,[{key:"shouldComponentUpdate",value:function(e){return!h()(this.props,e)}},{key:"render",value:function(){var e,t,c=this.props,r=c.className,i=c.id,s=c.style,l=c.prefixCls,d=c.headerClass,u=c.children,m=c.isActive,v=c.destroyInactivePanel,p=c.accordion,f=c.forceRender,h=c.openMotion,O=c.extra,x=c.collapsible,g=Object(j.a)(c,C),w="disabled"===x,k="header"===x,I="icon"===x,P=o()((e={},Object(n.a)(e,"".concat(l,"-item"),!0),Object(n.a)(e,"".concat(l,"-item-active"),m),Object(n.a)(e,"".concat(l,"-item-disabled"),w),e),r),E={className:o()("".concat(l,"-header"),(t={},Object(n.a)(t,d,d),Object(n.a)(t,"".concat(l,"-header-collapsible-only"),k),Object(n.a)(t,"".concat(l,"-icon-collapsible-only"),I),t)),"aria-expanded":m,"aria-disabled":w,onKeyPress:this.handleKeyPress};k||I||(E.onClick=this.onItemClick,E.role=p?"tab":"button",E.tabIndex=w?-1:0);var A=null!==O&&void 0!==O&&"boolean"!==typeof O;return delete g.header,delete g.panelKey,delete g.onItemClick,delete g.showArrow,delete g.expandIcon,b.createElement("div",Object(a.a)({},g,{className:P,style:s,id:i}),b.createElement("div",E,this.renderIcon(),this.renderTitle(),A&&b.createElement("div",{className:"".concat(l,"-extra")},O)),b.createElement(y.b,Object(a.a)({visible:m,leavedClassName:"".concat(l,"-content-hidden")},h,{forceRender:f,removeOnLeave:v}),(function(e,t){var c=e.className,a=e.style;return b.createElement(N,{ref:t,prefixCls:l,className:c,style:a,isActive:m,forceRender:f,role:p?"tabpanel":null},u)})))}}]),c}(b.Component);g.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};var w=g;function k(e){var t=e;if(!Array.isArray(t)){var c=Object(v.a)(t);t="number"===c||"string"===c?[t]:[]}return t.map((function(e){return String(e)}))}var I=function(e){Object(u.a)(c,e);var t=Object(m.a)(c);function c(e){var a;Object(l.a)(this,c),(a=t.call(this,e)).onClickItem=function(e){var t=a.state.activeKey;if(a.props.accordion)t=t[0]===e?[]:[e];else{var c=(t=Object(s.a)(t)).indexOf(e);c>-1?t.splice(c,1):t.push(e)}a.setActiveKey(t)},a.getNewChild=function(e,t){if(!e)return null;var c=a.state.activeKey,n=a.props,r=n.prefixCls,i=n.openMotion,o=n.accordion,s=n.destroyInactivePanel,l=n.expandIcon,d=n.collapsible,u=e.key||String(t),m=e.props,v=m.header,p=m.headerClass,f=m.destroyInactivePanel,h=m.collapsible,j=null!==h&&void 0!==h?h:d,y={key:u,panelKey:u,header:v,headerClass:p,isActive:o?c[0]===u:c.indexOf(u)>-1,prefixCls:r,destroyInactivePanel:null!==f&&void 0!==f?f:s,openMotion:i,accordion:o,children:e.props.children,onItemClick:"disabled"===j?null:a.onClickItem,expandIcon:l,collapsible:j};return"string"===typeof e.type?e:(Object.keys(y).forEach((function(e){"undefined"===typeof y[e]&&delete y[e]})),b.cloneElement(e,y))},a.getItems=function(){var e=a.props.children;return Object(p.a)(e).map(a.getNewChild)},a.setActiveKey=function(e){"activeKey"in a.props||a.setState({activeKey:e}),a.props.onChange(a.props.accordion?e[0]:e)};var n=e.activeKey,r=e.defaultActiveKey;return"activeKey"in e&&(r=n),a.state={activeKey:k(r)},a}return Object(d.a)(c,[{key:"shouldComponentUpdate",value:function(e,t){return!h()(this.props,e)||!h()(this.state,t)}},{key:"render",value:function(){var e,t=this.props,c=t.prefixCls,a=t.className,r=t.style,i=t.accordion,s=o()((e={},Object(n.a)(e,c,!0),Object(n.a)(e,a,!!a),e));return b.createElement("div",{className:s,style:r,role:i?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(e){var t={};return"activeKey"in e&&(t.activeKey=k(e.activeKey)),t}}]),c}(b.Component);I.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1},I.Panel=w;var P=I,E=(I.Panel,c(128)),A=c(95),K=c(89),S=c(77),M=function(e){var t,c=b.useContext(A.b),i=c.getPrefixCls,s=c.direction,l=e.prefixCls,d=e.className,u=void 0===d?"":d,m=e.bordered,v=void 0===m||m,f=e.ghost,h=e.expandIconPosition,j=void 0===h?"start":h,y=i("collapse",l),O=b.useMemo((function(){return"left"===j?"start":"right"===j?"end":j}),[j]),x=o()("".concat(y,"-icon-position-").concat(O),(t={},Object(n.a)(t,"".concat(y,"-borderless"),!v),Object(n.a)(t,"".concat(y,"-rtl"),"rtl"===s),Object(n.a)(t,"".concat(y,"-ghost"),!!f),t),u),N=Object(a.a)(Object(a.a)({},K.a),{motionAppear:!1,leavedClassName:"".concat(y,"-content-hidden")});return b.createElement(P,Object(a.a)({openMotion:N},e,{expandIcon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=e.expandIcon,a=c?c(t):b.createElement(r.a,{rotate:t.isActive?90:void 0});return Object(S.a)(a,(function(){return{className:o()(a.props.className,"".concat(y,"-arrow"))}}))},prefixCls:y,className:x}),function(){var t=e.children;return Object(p.a)(t).map((function(e,t){var c;if(null===(c=e.props)||void 0===c?void 0:c.disabled){var n=e.key||String(t),r=e.props,i=r.disabled,o=r.collapsible,s=Object(a.a)(Object(a.a)({},Object(E.a)(e.props,["disabled"])),{key:n,collapsible:null!==o&&void 0!==o?o:i?"disabled":void 0});return Object(S.a)(e,s)}return e}))}())};M.Panel=function(e){var t=b.useContext(A.b).getPrefixCls,c=e.prefixCls,r=e.className,i=void 0===r?"":r,s=e.showArrow,l=void 0===s||s,d=t("collapse",c),u=o()(Object(n.a)({},"".concat(d,"-no-arrow"),!l),i);return b.createElement(P.Panel,Object(a.a)({},e,{prefixCls:d,className:u}))};var R=M;t.a=R},1343:function(e,t,c){"use strict";var a=c(5),n=c(2),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},i=c(43),o=function(e,t){return n.createElement(i.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:r}))};o.displayName="CopyOutlined";t.a=n.forwardRef(o)},1623:function(e,t,c){},1651:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(649),r=c(6),i=c(16),o=c.n(i),s=(c(1623),c(645)),l=c(9);t.default=function(){var e="https://github.com/sunswapteam",t=function(e){var t=window.localStorage.getItem("lang"),c="";if(e){switch(e){case"whitePaper":c="".concat(r.a.fileLink,"SUN_V2_Whitepaper_").concat("en-US"===t?"en":"zh-CN"===t?"cn":"tc",".pdf");break;case"document1":c="".concat("en-US"===t?r.a.documents.document1.en:r.a.documents.document1.zh);break;case"document2":c="".concat("en-US"===t?r.a.documents.document2.en:r.a.documents.document2.zh);break;default:c=""}return c}},c=Object(a.useMemo)((function(){return{showBack:!0,onBack:function(){Object(s.g)({id:"more"})}}}),[]);return Object(l.jsxs)("div",{className:"community",children:[Object(l.jsx)(n.a,{routeName:"documents",mShowLogo:!1,mShowBottomNav:!1,subNavProps:c}),Object(l.jsx)("div",{className:"community-banner",children:Object(l.jsxs)("div",{className:"banner-inner community-layout",children:[Object(l.jsx)("div",{className:"title",children:"Sun.io"}),Object(l.jsx)("div",{className:"desc",children:o.a.get("documents.banner.sub_title")}),Object(l.jsx)("a",{href:e,className:"view-btn",children:o.a.get("documents.document.view_github")})]})}),Object(l.jsx)("div",{className:"community-main",children:Object(l.jsx)("div",{className:"community-layout",children:Object(l.jsxs)("div",{className:"community-flex",children:[Object(l.jsxs)("div",{className:"quick-start",children:[Object(l.jsx)("div",{className:"community-title",children:o.a.get("documents.quick_start")}),Object(l.jsxs)("div",{className:"community-flex quick-wrap",children:[Object(l.jsxs)("a",{href:t("document1"),className:"quick-row",children:[Object(l.jsx)("div",{className:"row-title",children:o.a.get("documents.document.document1.title")}),Object(l.jsx)("div",{className:"row-desc",children:o.a.get("documents.document.document1.desc")})]}),Object(l.jsxs)("a",{href:t("document2"),className:"quick-row",children:[Object(l.jsx)("div",{className:"row-title",children:o.a.get("documents.document.document2.title")}),Object(l.jsx)("div",{className:"row-desc",children:o.a.get("documents.document.document2.desc")})]})]})]}),Object(l.jsxs)("div",{className:"community-aside",children:[Object(l.jsxs)("div",{className:"github",children:[Object(l.jsx)("div",{className:"community-title",children:"Github"}),Object(l.jsx)("a",{href:e,className:"link-way",children:o.a.get("documents.document.view_github")})]}),Object(l.jsxs)("div",{className:"white-paper",children:[Object(l.jsx)("div",{className:"community-title",children:o.a.get("wallet.white_paper")}),Object(l.jsx)("a",{href:t("whitePaper"),className:"link-way",children:o.a.get("documents.document.view_whitepaper")})]})]})]})})})]})}},668:function(e,t){e.exports=function(e,t,c,a){var n=c?c.call(a,e,t):void 0;if(void 0!==n)return!!n;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(var o=Object.prototype.hasOwnProperty.bind(t),s=0;s<r.length;s++){var l=r[s];if(!o(l))return!1;var d=e[l],u=t[l];if(!1===(n=c?c.call(a,d,u,l):void 0)||void 0===n&&d!==u)return!1}return!0}},692:function(e,t,c){"use strict";var a=c(5),n=c(2),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},i=c(43),o=function(e,t){return n.createElement(i.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:r}))};o.displayName="RightOutlined";t.a=n.forwardRef(o)}}]);