(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{3144:function(e){"use strict";var t=self.fetch.bind(self);e.exports=t,e.exports.default=e.exports},8045:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}var c,f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),s=(c=n(5443))&&c.__esModule?c:{default:c},l=n(5809),d=n(7190);function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){v(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var y=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(j(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(j(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(j(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||l.imageConfigDefault,w=m.deviceSizes,A=m.imageSizes,O=m.loader,S=m.path,E=(m.domains,a(w).concat(a(A)));function I(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,o=e.quality,u=e.sizes,c=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var f=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,o=[];r=i.exec(n);r)o.push(parseInt(r[2]));if(o.length){var u,c=.01*(u=Math).min.apply(u,a(o));return{widths:E.filter((function(e){return e>=w[0]*c})),kind:"w"}}return{widths:E,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:w,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return E.find((function(t){return t>=e}))||E[E.length-1]})))),kind:"x"}}(i,r,u),s=f.widths,l=f.kind,d=s.length-1;return{sizes:u||"w"!==l?u:"100vw",srcSet:s.map((function(e,n){return"".concat(c({src:t,quality:o,width:e})," ").concat("w"===l?e:n+1).concat(l)})).join(", "),src:c({src:t,quality:o,width:s[d]})}}function R(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function k(e){var t=h.get(O);if(t)return t(p({root:S},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(O))}function j(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,t){return e-t})),E.sort((function(e,t){return e-t}))},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!u,f=o.useRef(),s=i(o.useState(!1),2),l=s[0],d=s[1],v=i(o.useState(t?t.current:null),2),p=v[0],y=v[1],g=o.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||l||e&&e.tagName&&(f.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&d(e)}),{root:p,rootMargin:n}))}),[r,p,n,l]);return o.useEffect((function(){if(!u&&!l){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[l]),o.useEffect((function(){t&&y(t.current)}),[t]),[g,l]};var o=n(7294),a=n(9311),u="undefined"!==typeof IntersectionObserver;var c=new Map},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(e,t,n){n(8045)},8100:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Z}});var r=n(7294);function i(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function u(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}var a,u=function(){},c=u(),f=Object,s=function(e){return e===c},l=function(e){return"function"==typeof e},d=function(e,t){return f.assign({},e,t)},v="undefined",p=function(){return typeof window!=v},y=new WeakMap,g=0,h=function(e){var t,n,r=typeof e,i=e&&e.constructor,o=i==Date;if(f(e)!==e||o||i==RegExp)t=o?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=y.get(e))return t;if(t=++g+"~",y.set(e,t),i==Array){for(t="@",n=0;n<e.length;n++)t+=h(e[n])+",";y.set(e,t)}if(i==f){t="#";for(var a=f.keys(e).sort();!s(n=a.pop());)s(e[n])||(t+=n+":"+h(e[n])+",");y.set(e,t)}}return t},b=!0,m=p(),w=typeof document!=v,A=m&&window.addEventListener?window.addEventListener.bind(window):u,O=w?document.addEventListener.bind(document):u,S=m&&window.removeEventListener?window.removeEventListener.bind(window):u,E=w?document.removeEventListener.bind(document):u,I={isOnline:function(){return b},isVisible:function(){var e=w&&document.visibilityState;return s(e)||"hidden"!==e}},R={initFocus:function(e){return O("visibilitychange",e),A("focus",e),function(){E("visibilitychange",e),S("focus",e)}},initReconnect:function(e){var t=function(){b=!0,e()},n=function(){b=!1};return A("online",t),A("offline",n),function(){S("online",t),S("offline",n)}}},k=!p()||"Deno"in window,j=function(e){return p()&&typeof window.requestAnimationFrame!=v?window.requestAnimationFrame(e):setTimeout(e,1)},x=k?r.useEffect:r.useLayoutEffect,C="undefined"!==typeof navigator&&navigator.connection,D=!k&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),P=function(e){if(l(e))try{e=e()}catch(n){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?h(e):"",t,e?"$swr$"+e:""]},_=new WeakMap,T=function(e,t,n,r,i,o,a){void 0===a&&(a=!0);var u=_.get(e),c=u[0],f=u[1],s=u[3],l=c[t],d=f[t];if(a&&d)for(var v=0;v<d.length;++v)d[v](n,r,i);return o&&(delete s[t],l&&l[0])?l[0](2).then((function(){return e.get(t)})):e.get(t)},M=0,L=function(){return++M},V=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return i(void 0,void 0,void 0,(function(){var t,n,r,i,a,u,f,v,p,y,g,h,b,m,w,A,O,S,E,I,R;return o(this,(function(o){switch(o.label){case 0:if(t=e[0],n=e[1],r=e[2],i=e[3],u=!!s((a="boolean"===typeof i?{revalidate:i}:i||{}).populateCache)||a.populateCache,f=!1!==a.revalidate,v=!1!==a.rollbackOnError,p=a.optimisticData,y=P(n),g=y[0],h=y[2],!g)return[2];if(b=_.get(t),m=b[2],e.length<3)return[2,T(t,g,t.get(g),c,c,f,!0)];if(w=r,O=L(),m[g]=[O,0],S=!s(p),E=t.get(g),S&&(I=l(p)?p(E):p,t.set(g,I),T(t,g,I)),l(w))try{w=w(t.get(g))}catch(k){A=k}return w&&l(w.then)?[4,w.catch((function(e){A=e}))]:[3,2];case 1:if(w=o.sent(),O!==m[g][0]){if(A)throw A;return[2,w]}A&&S&&v&&(u=!0,w=E,t.set(g,E)),o.label=2;case 2:return u&&(A||(l(u)&&(w=u(w,E)),t.set(g,w)),t.set(h,d(t.get(h),{error:A}))),m[g][1]=L(),[4,T(t,g,w,A,c,f,!!u)];case 3:if(R=o.sent(),A)throw A;return[2,u?R:w]}}))}))},q=function(e,t){for(var n in e)e[n][0]&&e[n][0](t)},z=function(e,t){if(!_.has(e)){var n=d(R,t),r={},i=V.bind(c,e),o=u;if(_.set(e,[r,{},{},{},i]),!k){var a=n.initFocus(setTimeout.bind(c,q.bind(c,r,0))),f=n.initReconnect(setTimeout.bind(c,q.bind(c,r,1)));o=function(){a&&a(),f&&f(),_.delete(e)}}return[e,i,o]}return[e,_.get(e)[4]]},F=z(new Map),N=F[0],U=F[1],B=d({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:function(e,t,n,r,i){var o=n.errorRetryCount,a=i.retryCount,u=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!s(o)&&a>o||setTimeout(r,u,i)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:D?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:D?5e3:3e3,compare:function(e,t){return h(e)==h(t)},isPaused:function(){return!1},cache:N,mutate:U,fallback:{}},I),W=function(e,t){var n=d(e,t);if(t){var r=e.use,i=e.fallback,o=t.use,a=t.fallback;r&&o&&(n.use=r.concat(o)),i&&a&&(n.fallback=d(i,a))}return n},$=(0,r.createContext)({}),G=function(e){return l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},H=function(){return d(B,(0,r.useContext)($))},J=function(e,t,n){var r=t[e]||(t[e]=[]);return r.push(n),function(){var e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},Q={dedupe:!0},Z=(f.defineProperty((function(e){var t=e.value,n=W((0,r.useContext)($),t),i=t&&t.provider,o=(0,r.useState)((function(){return i?z(i(n.cache||N),t):c}))[0];return o&&(n.cache=o[0],n.mutate=o[1]),x((function(){return o?o[2]:c}),[]),(0,r.createElement)($.Provider,d(e,{value:n}))}),"default",{value:B}),a=function(e,t,n){var a=n.cache,u=n.compare,f=n.fallbackData,v=n.suspense,p=n.revalidateOnMount,y=n.refreshInterval,g=n.refreshWhenHidden,h=n.refreshWhenOffline,b=_.get(a),m=b[0],w=b[1],A=b[2],O=b[3],S=P(e),E=S[0],I=S[1],R=S[2],C=(0,r.useRef)(!1),D=(0,r.useRef)(!1),M=(0,r.useRef)(E),q=(0,r.useRef)(t),z=(0,r.useRef)(n),F=function(){return z.current},N=function(){return F().isVisible()&&F().isOnline()},U=function(e){return a.set(R,d(a.get(R),e))},B=a.get(E),W=s(f)?n.fallback[E]:f,$=s(B)?W:B,G=a.get(R)||{},H=G.error,Z=!C.current,K=function(){return Z&&!s(p)?p:!F().isPaused()&&(v?!s($)&&n.revalidateIfStale:s($)||n.revalidateIfStale)},X=!(!E||!t)&&(!!G.isValidating||Z&&K()),Y=function(e,t){var n=(0,r.useState)({})[1],i=(0,r.useRef)(e),o=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,r.useCallback)((function(e){var r=!1,a=i.current;for(var u in e){var c=u;a[c]!==e[c]&&(a[c]=e[c],o.current[c]&&(r=!0))}r&&!t.current&&n({})}),[]);return x((function(){i.current=e})),[i,o.current,a]}({data:$,error:H,isValidating:X},D),ee=Y[0],te=Y[1],ne=Y[2],re=(0,r.useCallback)((function(e){return i(void 0,void 0,void 0,(function(){var t,r,i,f,d,v,p,y,g,h,b,m,w;return o(this,(function(o){switch(o.label){case 0:if(t=q.current,!E||!t||D.current||F().isPaused())return[2,!1];f=!0,d=e||{},v=!O[E]||!d.dedupe,p=function(){return!D.current&&E===M.current&&C.current},y=function(){var e=O[E];e&&e[1]===i&&delete O[E]},g={isValidating:!1},h=function(){U({isValidating:!1}),p()&&ne(g)},U({isValidating:!0}),ne({isValidating:!0}),o.label=1;case 1:return o.trys.push([1,3,,4]),v&&(T(a,E,ee.current.data,ee.current.error,!0),n.loadingTimeout&&!a.get(E)&&setTimeout((function(){f&&p()&&F().onLoadingSlow(E,n)}),n.loadingTimeout),O[E]=[t.apply(void 0,I),L()]),w=O[E],r=w[0],i=w[1],[4,r];case 2:return r=o.sent(),v&&setTimeout(y,n.dedupingInterval),O[E]&&O[E][1]===i?(U({error:c}),g.error=c,b=A[E],!s(b)&&(i<=b[0]||i<=b[1]||0===b[1])?(h(),v&&p()&&F().onDiscarded(E),[2,!1]):(u(ee.current.data,r)?g.data=ee.current.data:g.data=r,u(a.get(E),r)||a.set(E,r),v&&p()&&F().onSuccess(r,E,n),[3,4])):(v&&p()&&F().onDiscarded(E),[2,!1]);case 3:return m=o.sent(),y(),F().isPaused()||(U({error:m}),g.error=m,v&&p()&&(F().onError(m,E,n),("boolean"===typeof n.shouldRetryOnError&&n.shouldRetryOnError||l(n.shouldRetryOnError)&&n.shouldRetryOnError(m))&&N()&&F().onErrorRetry(m,E,n,re,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return f=!1,h(),p()&&v&&T(a,E,g.data,g.error,!1),[2,!0]}}))}))}),[E]),ie=(0,r.useCallback)(V.bind(c,a,(function(){return M.current})),[]);if(x((function(){q.current=t,z.current=n})),x((function(){if(E){var e=E!==M.current,t=re.bind(c,Q),n=0,r=J(E,w,(function(e,t,n){ne(d({error:t,isValidating:n},u(ee.current.data,e)?c:{data:e}))})),i=J(E,m,(function(e){if(0==e){var r=Date.now();F().revalidateOnFocus&&r>n&&N()&&(n=r+F().focusThrottleInterval,t())}else if(1==e)F().revalidateOnReconnect&&N()&&t();else if(2==e)return re()}));return D.current=!1,M.current=E,C.current=!0,e&&ne({data:$,error:H,isValidating:X}),K()&&(s($)||k?t():j(t)),function(){D.current=!0,r(),i()}}}),[E,re]),x((function(){var e;function t(){var t=l(y)?y($):y;t&&-1!==e&&(e=setTimeout(n,t))}function n(){ee.current.error||!g&&!F().isVisible()||!h&&!F().isOnline()?t():re(Q).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[y,g,h,re]),(0,r.useDebugValue)($),v&&s($)&&E)throw q.current=t,z.current=n,D.current=!1,s(H)?re(Q):H;return{mutate:ie,get data(){return te.data=!0,$},get error(){return te.error=!0,H},get isValidating(){return te.isValidating=!0,X}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=H(),r=G(e),i=r[0],o=r[1],u=r[2],c=W(n,u),f=a,s=c.use;if(s)for(var l=s.length;l-- >0;)f=s[l](f);return f(i,o||c.fetcher,c)})}}]);