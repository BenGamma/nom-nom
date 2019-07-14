(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{172:function(e,t,n){"use strict";n.r(t);var a=n(216),i=n.n(a),o=n(0),l=n.n(o),r=n(205),c=n.n(r),d=n(175),u=n(186),s=n(190),p=n(195),m=n(180);function f(){var e=i()(["\n    width: auto;\n  "]);return f=function(){return e},e}function g(){var e=i()(["\n    flex-wrap: nowrap;\n  "]);return g=function(){return e},e}var b=d.default.div.withConfig({displayName:"Meal__HeaderWrapper",componentId:"oiogx8-0"})(["width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;",";",""],Object(s.mb)({mobile:2,tablet:3,desktop:3}),Object(u.default)("tablet")(g())),h=d.default.h1.withConfig({displayName:"Meal__Header",componentId:"oiogx8-1"})(["margin:0;width:100%;",""],Object(u.default)("tablet")(f())),w=d.default.div.withConfig({displayName:"Meal__SubHeader",componentId:"oiogx8-2"})(["margin:0;font-size:0.8em;color:#777;flex-shrink:0;"]),x=d.default.div.withConfig({displayName:"Meal__ShortDescription",componentId:"oiogx8-3"})(["width:100%;color:#223;",";"],Object(s.pb)({mobile:2,tablet:3,desktop:4})),E=function(e){var t=e.meal,n=e.children,a=t.title,i=t.updatedAt,o=t.shortDescription,r=t.node_locale;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null,l.a.createElement(h,null,a),l.a.createElement(w,null,Object(m.formatDateDistanceToNow)(r,new Date(i)))),l.a.createElement(x,{dangerouslySetInnerHTML:{__html:o.childMarkdownRemark.html}}),n)},v=(n(280),n(281)),y={renderMark:{},renderNode:{}},N=function(e){var t=e.node;return Object(v.documentToReactComponents)(t.json,y)};function _(){var e=i()(["\n    width: 40%;\n    order: 3;\n  "]);return _=function(){return e},e}function I(){var e=i()(["\n    width: 60%;\n    order: 2;\n  "]);return I=function(){return e},e}function j(){var e=i()(["\n    display: none;\n  "]);return j=function(){return e},e}var k=d.default.div.withConfig({displayName:"Recipe__Wrapper",componentId:"sc-88jqqx-0"})(["width:100%;display:flex;border:2px outset #606060;border-radius:20px;box-shadow:2px 2px 2px 2px #D0D0D0;"," "," "," flex-wrap:wrap;"],Object(s.px)({mobile:3,tablet:4,desktop:4}),Object(s.py)({mobile:2,tablet:3,desktop:3}),Object(s.mb)({mobile:3,tablet:3,desktop:4})),O=d.default.h2.withConfig({displayName:"Recipe__Title",componentId:"sc-88jqqx-1"})(["width:100%;margin:0;"," order:1;"],Object(s.mb)({mobile:3,tablet:3,desktop:2})),L=d.default.h3.withConfig({displayName:"Recipe__SubHeading",componentId:"sc-88jqqx-2"})(["margin:0;",""],Object(u.default)("desktop")(j())),C=d.default.div.withConfig({displayName:"Recipe__Instructions",componentId:"sc-88jqqx-3"})(["width:100%;order:3;",""],Object(u.default)("desktop")(I())),A=d.default.div.withConfig({displayName:"Recipe__Ingredients",componentId:"sc-88jqqx-4"})(["width:100%;order:2;",""],Object(u.default)("desktop")(_())),T=function(e){var t=e.recipe,n=e.showTitle;return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null,n&&l.a.createElement(O,null,t.title),l.a.createElement(C,null,l.a.createElement(L,null,"Instructions"),l.a.createElement(N,{node:t.instructions})),l.a.createElement(A,null,l.a.createElement(L,null,"Ingredients"),l.a.createElement(N,{node:t.ingredients}))))};function S(){var e=i()(["\n    width: 80%;\n  "]);return S=function(){return e},e}function M(){var e=i()(["\n    width: 90%;\n  "]);return M=function(){return e},e}function D(){var e=i()(["\n    width: 100%;\n  "]);return D=function(){return e},e}n.d(t,"pageQuery",function(){return q});var R=d.default.div.withConfig({displayName:"meal__Content",componentId:"sc-1brk3j7-0"})(["background-color:white;",";"," "," ",""],Object(s.p)({mobile:3,tablet:4,desktop:5}),Object(u.default)("mobile")(D()),Object(u.default)("tablet")(M()),Object(u.default)("desktop")(S())),q=(t.default=function(e){var t=e.data,n=e.location,a=t.contentfulMeal,i=a.title,o=a.recipes,r=t.site.siteMetadata.title;return l.a.createElement(p.a,{location:n},l.a.createElement(c.a,{title:i+" | "+r}),l.a.createElement(R,null,l.a.createElement(E,{meal:a},o&&o.map(function(e){return l.a.createElement(T,{key:e.id,showTitle:o.length>1,recipe:e})}))))},"107637316")},178:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(13),l=n.n(o),r=n(59),c=n.n(r);n.d(t,"a",function(){return c.a}),n.d(t,"b",function(){return r.navigate});n(179),i.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},179:function(e,t,n){var a;e.exports=(a=n(182))&&a.default||a},180:function(e,t,n){var a=n(228).default,i={"en-NZ":n(188),"nl-NL":n(189)},o={"en-NZ":n(207),"nl-NL":n(208)},l=function(e){return function(t){return i[e][t]}};e.exports={languages:[{locale:"en-NZ",label:"🇳🇿 English"},{locale:"nl-NL",label:"🇳🇱 Nederlands"}],defaultLocale:"en-NZ",getMessage:l,formatDateDistanceToNow:function(e,t){var n=l(e);return n("LAST_UPDATED")+" "+a(t,{locale:o[e]})+" "+n("AGO")}}},182:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),i=n.n(a),o=n(13),l=n.n(o),r=n(84),c=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(r.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},187:function(e){e.exports={data:{site:{siteMetadata:{languages:[{locale:"en-NZ",label:"🇳🇿 English"},{locale:"nl-NL",label:"🇳🇱 Nederlands"}]}}}}},188:function(e,t){e.exports={LAST_UPDATED:"Last updated",AGO:"ago",VIEW:" View",LANGUAGE:"Language",HOME:"Home",INSPIRATION:"Inspiration"}},189:function(e,t){e.exports={LAST_UPDATED:"Laatst bijgewerkt",AGO:"geleden",VIEW:"Kijk",LANGUAGE:"Taal",HOME:"Start",INSPIRATION:"Inspiratie"}},195:function(e,t,n){"use strict";n(36);var a=n(0),i=n.n(a),o=n(178),l=n(175),r=n(187),c=n(180),d=l.default.div.withConfig({displayName:"LanguageSelector__Selector",componentId:"sc-14ykzzc-0"})(["font-size:1rem;width:150px;position:relative;display:flex;padding:10px;border:1px solid #333;& a{text-decoration:none;}&:hover{background-color:white;border-top:1px solid #333;border-left:1px solid #333;border-right:2px solid #000;}"]),u=l.default.span.withConfig({displayName:"LanguageSelector__SelectorLabel",componentId:"sc-14ykzzc-1"})(["width:100%;&::after{content:'\\25BC';margin-left:10px;float:right;}",":hover &::after{content:'\\25B2';}"],d),s=l.default.div.withConfig({displayName:"LanguageSelector__Items",componentId:"sc-14ykzzc-2"})(["display:none;position:absolute;margin-top:30px;background-color:white;width:150px;margin-left:-11px;z-index:99999;border-top:1px solid #EEE;border-left:1px solid #333;border-right:2px solid #000;border-bottom:2px solid #000;",":hover &{display:block;}"],d),p=l.default.div.withConfig({displayName:"LanguageSelector__Item",componentId:"sc-14ykzzc-3"})(["padding:10px;"]),m=function(e){var t=e.currentLocale,n=e.path,a=Object(c.getMessage)(t),l=r.data;return i.a.createElement(d,null,i.a.createElement(u,null,a("LANGUAGE")),i.a.createElement(s,null,l.site.siteMetadata.languages.map(function(e){var t=e.label,a=e.locale;return i.a.createElement(p,{key:a},i.a.createElement(o.a,{to:"/"+a+"/"+n},t))})))},f=(n(209),n(210),l.default.div.withConfig({displayName:"Layout__Container",componentId:"sc-1mluxn0-0"})(["display:flex;width:100%;justify-content:center;"])),g=l.default.nav.withConfig({displayName:"Layout__Navigation",componentId:"sc-1mluxn0-1"})(["display:flex;justify-content:space-between;height:20vh;max-height:100px;font-size:1.25rem;"]),b=l.default.div.withConfig({displayName:"Layout__NavigationItem",componentId:"sc-1mluxn0-2"})(["display:inline-flex;align-items:center;margin:0 1em;& a{text-decoration:none;}"]),h=l.default.div.withConfig({displayName:"Layout__NavigationSpacer",componentId:"sc-1mluxn0-3"})(["display:inline-flex;width:100%;"]),w={};t.a=function(e){var t=e.location,n=e.children,a=t.pathname.substring(1).split("/"),r=a.shift(),d=a.join("/"),u=Object(c.getMessage)(r);return i.a.createElement(l.ThemeProvider,{theme:w},i.a.createElement(i.a.Fragment,null,i.a.createElement(g,null,i.a.createElement(b,null,i.a.createElement(o.a,{to:"/"+r+"/"},u("HOME"))),i.a.createElement(b,null,i.a.createElement(o.a,{to:"/"+r+"/inspiration"},u("INSPIRATION"))),i.a.createElement(h,null),i.a.createElement(b,null,i.a.createElement(m,{currentLocale:r,path:d}))),i.a.createElement(f,null,n)))}}}]);
//# sourceMappingURL=component---src-templates-meal-js-5ff7d8e95635727e2ddf.js.map