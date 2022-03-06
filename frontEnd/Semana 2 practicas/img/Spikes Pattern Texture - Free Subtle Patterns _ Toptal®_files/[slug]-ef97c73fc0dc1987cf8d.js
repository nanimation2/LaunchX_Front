(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[219],{47166:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(this&&this[r]||r);else if(Array.isArray(r))e.push(n.apply(this,r));else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)a.call(r,s)&&r[s]&&e.push(this&&this[s]||s);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},32893:function(e,t,r){"use strict";var a=r(24771),n=r.n(a),i=r(85893),s=function(e){var t=e.children;return(0,i.jsx)("div",{className:n().card,"data-testid":"patternCard",children:t})};s.Top=function(e){var t=e.children;return(0,i.jsx)(i.Fragment,{children:t})},s.Content=function(e){var t=e.children;return(0,i.jsx)("div",{className:n().content,children:t})},s.Bottom=function(e){var t=e.children;return(0,i.jsx)("div",{className:n().bottom,children:t})},t.Z=s},48253:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var a=r(92809),n=r(94184),i=r.n(n),s=r(85893),l=function(e){var t=e.href,r=e.className,a=e.children;return(0,s.jsx)("a",{href:t,className:r,target:"_blank",rel:"nofollow noopener noreferrer",children:a})},o=r(27324),c=r.n(o),d=function(e){var t=e.author,r=void 0===t?"":t,n=e.authorWebsite,o=void 0===n?"":n,d=e.variant,u=void 0===d?"default":d;return(0,s.jsxs)("div",{className:i()(c().author,(0,a.Z)({},c().white,"white"===u)),"data-testid":"author",children:["Made by"," ",o?(0,s.jsx)(l,{href:o,className:c().name,children:r}):(0,s.jsx)("span",{children:r})]})}},46046:function(e,t,r){"use strict";var a=r(79155),n=r.n(a),i=r(85893);t.Z=function(e){var t=e.children;return(0,i.jsx)("div",{className:n().image,"data-testid":"image",children:t})}},86563:function(e,t,r){"use strict";var a=r(92809),n=r(49546),i=r(94184),s=r.n(i),l=r(30147),o=r.n(l),c=r(85893);t.Z=function(e){var t=e.as,r=void 0===t?"div":t,i=e.variant,l=void 0===i?"default":i,d=e.date,u=(0,n.Z)(new Date(d),"yyyy-MM-dd");return(0,c.jsx)(r,{className:o().timestamp,children:(0,c.jsx)("span",{className:s()(o().date,(0,a.Z)({},o().white,"white"===l)),"data-testid":"timestamp","data-happo-hide":!0,children:u})})}},56174:function(e,t,r){"use strict";var a=r(41664),n=r(95602),i=r.n(n),s=r(85893);t.Z=function(e){var t=e.as,r=void 0===t?"h3":t,n=e.title,l=void 0===n?"":n,o=e.href,c=void 0===o?"":o;return(0,s.jsx)(a.default,{href:c,children:(0,s.jsx)("a",{className:i().title,children:(0,s.jsx)(r,{"data-testid":"title",children:l})})})}},41630:function(e,t,r){"use strict";var a=r(92809),n=r(94184),i=r.n(n),s=r(82971),l=r(38139),o=r.n(l),c=r(85893);t.Z=function(e){var t=e.children,r=e.title,n=e.isRelated,l=void 0!==n&&n;return(0,c.jsxs)(c.Fragment,{children:[r&&(0,c.jsx)(s.Z,{title:r,"data-testid":"relatedPatternsTitle"}),(0,c.jsx)("div",{className:i()(o().patterns,(0,a.Z)({},o().related,l)),"data-testid":"patternBlock",children:t})]})}},71632:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(41664),n=r(32893),i=r(52067),s=r(46046),l=r(37196),o=r(86563),c=r(56174),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...",a=e.replace(/(<([^>]+)>)/gi,"");return a.length<t?a:"."===a[t-1]?"".concat(a.slice(0,t-1)).concat(r):"".concat(a.slice(0,t)).concat(r)},u=r(38109),p=r.n(u),_=r(85893),f=function(e){var t=e.description,r=void 0===t?"":t;return(0,_.jsx)("div",{className:p().description,"data-testid":"description",children:(0,_.jsx)("p",{children:d(r)})})},v=r(48253),h=r(71063),m=function(e){var t=e.src,r=e.url,d=e.author,u=e.authorWebsite,p=e.title,m=e.timestamp,w=e.description,g=e.viewMoreLabel,x=e.downloadLabel;return(0,_.jsxs)(n.Z,{children:[(0,_.jsx)(n.Z.Top,{children:(0,_.jsx)(s.Z,{children:(0,_.jsx)(a.default,{href:r,children:(0,_.jsx)("a",{children:(0,_.jsx)(l.Z,{src:t})})})})}),(0,_.jsxs)(n.Z.Content,{children:[(0,_.jsx)(c.Z,{href:r,title:p}),(0,_.jsx)(v.Z,{authorWebsite:u,author:d}),(0,_.jsx)(o.Z,{date:m}),(0,_.jsx)(f,{description:w})]}),(0,_.jsxs)(n.Z.Bottom,{children:[(0,_.jsx)(i.Z,{href:t,variant:"white",label:x}),(0,_.jsx)(h.Z,{size:2}),(0,_.jsx)(i.Z,{href:r,variant:"cta",label:g})]})]})}},37196:function(e,t,r){"use strict";var a=r(92809),n=r(94184),i=r.n(n),s=r(8229),l=r.n(s),o=r(85893);t.Z=function(e){var t=e.src,r=e.isTag,n=void 0!==r&&r;return(0,o.jsx)("div",{className:i()(l().patternPreviewer,(0,a.Z)({},l().isTag,n)),style:{backgroundImage:"url(".concat(t,")")},"data-testid":"patternPreviewer"})}},92167:function(e,t,r){"use strict";var a=r(53848);t.default=void 0;var n,i=(n=r(67294))&&n.__esModule?n:{default:n},s=r(21063),l=r(34651),o=r(7426);var c={};function d(e,t,r,a){if(e&&s.isLocalURL(t)){e.prefetch(t,r,a).catch((function(e){0}));var n=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;c[t+"%"+r+(n?"%"+n:"")]=!0}}var u=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),u=i.default.useMemo((function(){var t=s.resolveHref(n,e.href,!0),r=a(t,2),i=r[0],l=r[1];return{href:i,as:e.as?s.resolveHref(n,e.as):l||i}}),[n,e.href,e.as]),p=u.href,_=u.as,f=e.children,v=e.replace,h=e.shallow,m=e.scroll,w=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var g=(t=i.default.Children.only(f))&&"object"===typeof t&&t.ref,x=o.useIntersection({rootMargin:"200px"}),j=a(x,2),P=j[0],b=j[1],Z=i.default.useCallback((function(e){P(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,P]);i.default.useEffect((function(){var e=b&&r&&s.isLocalURL(p),t="undefined"!==typeof w?w:n&&n.locale,a=c[p+"%"+_+(t?"%"+t:"")];e&&!a&&d(n,p,_,{locale:t})}),[_,p,b,w,r,n]);var y={ref:Z,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,a,n,i,l,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),null==l&&a.indexOf("#")>=0&&(l=!1),t[n?"replace":"push"](r,a,{shallow:i,locale:o,scroll:l}))}(e,n,p,_,v,h,m,w)},onMouseEnter:function(e){s.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(n,p,_,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof w?w:n&&n.locale,T=n&&n.isLocaleDomain&&s.getDomainLocale(_,N,n&&n.locales,n&&n.domainLocales);y.href=T||s.addBasePath(s.addLocale(_,N,n&&n.defaultLocale))}return i.default.cloneElement(t,y)};t.default=u},66219:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return O},default:function(){return S}});var a=r(19285),n=r(3533),i=r(3197),s=r(65455),l=r(71063),o=r(92809),c=r(67294),d=r(94184),u=r.n(d),p=r(9008),_=r(95234),f=r(9324),v=r(52067),h=r(34276),m=r.n(h),w=r(85893),g=[null,"preview1","preview2","preview3"],x=function(e,t){return"".concat(f.GW,"/assets/images/").concat(e).concat(t?"":"-dark",".png")},j=function(e){var t=e.src,r=e.isDark,a=void 0===r||r,n=e.downloadHref,i=e.description,s=(0,c.useState)(0),l=s[0],d=s[1],f=g[l];return(0,w.jsxs)("div",{className:m().patternViewer,children:[(0,w.jsx)(p.default,{children:(0,w.jsx)("link",{rel:"preload",as:"image",href:t})}),(0,w.jsxs)("div",{className:m().patternViewerInner,children:[(0,w.jsx)("div",{className:m().navWrapper,children:g.map((function(e,r){return(0,w.jsx)("div",{onClick:function(){return d(r)},className:u()(m().navElement,(0,o.Z)({},m().navElementActive,r===l)),style:{backgroundImage:"url(".concat(t,")")},"data-testid":"preview-card",children:e?(0,w.jsx)(_.Z,{priority:!0,src:x(e,a),layout:"fill",alt:""}):null},r)}))}),(0,w.jsxs)("div",{className:m().content,children:[(0,w.jsx)("div",{className:m().imageWrapper,style:{backgroundImage:"url(".concat(t,")")},"data-testid":"patternViewerMain",children:f?(0,w.jsx)(_.Z,{src:x(f,a),layout:"fill",alt:""}):null}),i&&(0,w.jsx)("div",{className:m().description,children:(0,w.jsx)("p",{dangerouslySetInnerHTML:{__html:i}})})]})]}),n&&(0,w.jsx)("div",{"data-testid":"patternDownloadButton",className:m().viewerFooter,children:(0,w.jsx)(v.Z,{href:n,variant:"cta",label:"Download Pattern",className:m().downloadButton})})]})},P=r(41630),b=r(71632),Z=r(41664),y=r(19487),N=r.n(y),T=function(e){var t=e.tag,r=void 0===t?"":t,a=e.href,i=void 0===a?"":a;return!(!r.trim()||!i.trim())?(0,w.jsx)(Z.default,{href:n.Z.tagPage(i),children:(0,w.jsx)("a",{className:N().relatedTag,children:r})}):null},V=r(82971),k=r(80363),C=r.n(k),B=function(e){var t=e.heading,r=void 0===t?"":t,a=e.description,n=void 0===a?"":a,i=e.tags,l=void 0===i?[]:i;return!(!r.trim()||!l.length)?(0,w.jsx)(s.Z,{overrideStyles:C().relatedTags,fullWidth:!0,children:(0,w.jsxs)(s.Z,{children:[(0,w.jsx)(V.Z,{title:r,variant:"blue","data-testid":"relatedTagsTitle"}),n&&(0,w.jsx)("p",{className:C().description,children:n}),(0,w.jsxs)("ul",{className:C().tags,"data-testid":"relatedTags",children:[l.map((function(e){return(0,w.jsx)("li",{children:(0,w.jsx)(T,{href:e.href,tag:e.tag})},e.tag)})),(0,w.jsx)("li",{children:(0,w.jsx)(T,{href:"all",tag:"see all"})})]})]})}):null},R=r(26663),E=r(86563),L=r(48253),W=r(41209),D=r.n(W),A=function(){return(0,w.jsx)("span",{className:D().separator,children:"|"})},O=!0,S=function(e){var t=e.pattern,r=t.title,o=t.image_url,c=t.description,d=t.tags,u=t.uploaded_at,p=t.author,_=t.author_website,f=e.relatedPatterns;return(0,w.jsxs)(R.Z,{title:(0,a.$e)(r),description:(0,a.NY)(r),children:[(0,w.jsx)(s.Z,{fullWidth:!0,children:(0,w.jsx)(V.Z,{title:(0,i.Z)((0,a.NO)(r)),as:"h1",type:"header",variant:"blue","data-testid":"detailPatternTitle",children:(0,w.jsxs)("div",{className:D().subtitle,children:[(0,w.jsx)(E.Z,{variant:"white",date:u}),(0,w.jsx)(A,{}),(0,w.jsx)(L.Z,{variant:"white",author:p,authorWebsite:_})]})})}),(0,w.jsxs)(s.Z,{children:[(0,w.jsx)("div",{children:(0,w.jsx)(j,{src:o,isDark:-1!==(null===d||void 0===d?void 0:d.indexOf("dark")),downloadHref:o,description:c})}),(0,w.jsx)(P.Z,{title:"Related Patterns",isRelated:!0,children:f.map((function(e){return(0,w.jsx)(b.Z,{id:e.id,author:e.author,src:e.image_url,title:e.title,url:n.Z.pattern(e.slug),authorWebsite:e.author_website,timestamp:new Date(e.uploaded_at),description:e.description||"",viewMoreLabel:"View More",downloadLabel:"Download Pattern"},e.id)}))}),(0,w.jsx)("div",{className:D().viewAllPatterns,"data-testid":"allPatternsButton",children:(0,w.jsx)(v.Z,{label:"View all patterns",variant:"white",href:"/patterns"})})]}),(0,w.jsx)(l.Z,{size:8}),(0,w.jsx)(B,{heading:"Related Tags",tags:(d||[]).map((function(e){return{id:e,tag:e,href:e}}))})]})}},44008:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return r(66219)}])},24771:function(e){e.exports={card:"Card_card__2Nr1o",top:"Card_top__3rFP0",content:"Card_content__FpRor",bottom:"Card_bottom__5bw1d"}},27324:function(e){e.exports={author:"CardAuthor_author__2Lfor",name:"CardAuthor_name__2JYDn",white:"CardAuthor_white__LZ45p"}},38109:function(e){e.exports={description:"CardDescription_description__3ggrB"}},79155:function(e){e.exports={image:"CardImage_image__1s2NR"}},30147:function(e){e.exports={timestamp:"CardTimestamp_timestamp__1CfcI",date:"CardTimestamp_date__J4rtw",white:"CardTimestamp_white__2Dx5a"}},95602:function(e){e.exports={title:"CardTitle_title__1Dp9U"}},38139:function(e){e.exports={patterns:"PatternBlock_patterns__2dBOT",related:"PatternBlock_related__1tjWA",title:"PatternBlock_title__1izvp"}},8229:function(e){e.exports={"pattern-previewer":"PatternPreviewer_pattern-previewer__E-0U4",patternPreviewer:"PatternPreviewer_pattern-previewer__E-0U4","is-tag":"PatternPreviewer_is-tag__2D4hr",isTag:"PatternPreviewer_is-tag__2D4hr"}},34276:function(e){e.exports={"pattern-viewer":"PatternViewer_pattern-viewer__1d8DK",patternViewer:"PatternViewer_pattern-viewer__1d8DK","pattern-viewer-inner":"PatternViewer_pattern-viewer-inner__1KaGc",patternViewerInner:"PatternViewer_pattern-viewer-inner__1KaGc","nav-wrapper":"PatternViewer_nav-wrapper__1baSM",navWrapper:"PatternViewer_nav-wrapper__1baSM","nav-element":"PatternViewer_nav-element__33znQ",navElement:"PatternViewer_nav-element__33znQ","nav-element-active":"PatternViewer_nav-element-active__2BAcV",navElementActive:"PatternViewer_nav-element-active__2BAcV","image-wrapper":"PatternViewer_image-wrapper__RcZvV",imageWrapper:"PatternViewer_image-wrapper__RcZvV","viewer-footer":"PatternViewer_viewer-footer__hfhIA",viewerFooter:"PatternViewer_viewer-footer__hfhIA",content:"PatternViewer_content__2SV3-",description:"PatternViewer_description__1q40W","download-button":"PatternViewer_download-button__3egS4",downloadButton:"PatternViewer_download-button__3egS4"}},19487:function(e){e.exports={"related-tag":"RelatedTag_related-tag__22Wcg",relatedTag:"RelatedTag_related-tag__22Wcg"}},80363:function(e){e.exports={"related-tags":"RelatedTagsBlock_related-tags__fKG9Q",relatedTags:"RelatedTagsBlock_related-tags__fKG9Q",heading:"RelatedTagsBlock_heading__7niPt",description:"RelatedTagsBlock_description__3OQh4",tags:"RelatedTagsBlock_tags__3WUqI"}},41209:function(e){e.exports={"view-all-tags":"Home_view-all-tags__1Sb-m",viewAllTags:"Home_view-all-tags__1Sb-m","view-all-patterns":"Home_view-all-patterns__1WuHq",viewAllPatterns:"Home_view-all-patterns__1WuHq","upload-wrapper":"Home_upload-wrapper__r0t7K",uploadWrapper:"Home_upload-wrapper__r0t7K",separator:"Home_separator___ARwP",subtitle:"Home_subtitle__3fBZ4"}},9008:function(e,t,r){e.exports=r(70639)},41664:function(e,t,r){e.exports=r(92167)},10219:function(e,t,r){"use strict";function a(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,{Z:function(){return a}})}},function(e){e.O(0,[294,546,979,576,774,888,179],(function(){return t=44008,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=[slug]-ef97c73fc0dc1987cf8d.js.map