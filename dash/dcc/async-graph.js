"use strict";(self.webpackChunkdash_core_components=self.webpackChunkdash_core_components||[]).push([[196],{34387:function(e,t,r){r.r(t);var n=r(20748),o=r(99196),i=r.n(o),a=r(63449),u=r(90067),c=r(69064),s=r.n(c),l=r(49069);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function g(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var O={autosize:!0,height:void 0,width:void 0},_={},w={autosize:!1},j={responsive:!0},P={},k={responsive:!1},E=function(e,t,r){var n;if((0,u.q9t)(r,["click","hover","selected"])){var o=function(){var r=[];if((0,u.kKJ)(t))return{v:null};for(var o=e.data,i=function(e){var n=t.points[e],i=(0,u.hXT)((function(e){return!(0,u.q9t)((0,u.dt8)(e),["Object","Array"])}),n);(0,u.e$l)("bbox",n)&&(i.bbox=n.bbox),(0,u.e$l)("curveNumber",n)&&(0,u.e$l)("customdata",o[i.curveNumber])&&((0,u.e$l)("pointNumber",n)?i.customdata=o[i.curveNumber].customdata[n.pointNumber]:(0,u.e$l)("pointNumbers",n)&&(i.customdata=n.pointNumbers.map((function(e){return o[i.curveNumber].customdata[e]})))),(0,u.e$l)("pointNumbers",n)&&(i.pointNumbers=n.pointNumbers),r[e]=i},a=0;a<t.points.length;a++)i(a);n={points:r}}();if("object"==typeof o)return o.v}else"relayout"!==r&&"restyle"!==r||(n=t);return(0,u.e$l)("range",t)&&(n.range=t.range),(0,u.e$l)("lassoPoints",t)&&(n.lassoPoints=t.lassoPoints),n},R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(l,e);var t,r,o,c,s=(o=l,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(o);if(c){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return g(this,e)});function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=s.call(this,e)).gd=i().createRef(),t._hasPlotted=!1,t._prevGd=null,t._queue=Promise.resolve(),t.bindEvents=t.bindEvents.bind(b(t)),t.getConfig=t.getConfig.bind(b(t)),t.getConfigOverride=t.getConfigOverride.bind(b(t)),t.getLayout=t.getLayout.bind(b(t)),t.getLayoutOverride=t.getLayoutOverride.bind(b(t)),t.graphResize=t.graphResize.bind(b(t)),t.isResponsive=t.isResponsive.bind(b(t)),t.amendTraces=t.amendTraces.bind(b(t)),t.state={override:{},originals:{}},t}return t=l,r=[{key:"plot",value:function(e){var t=this,r=e.figure,o=e.config,i=e.animate,a=e.animation_options,u=e.responsive,c=e.mathjax,s=this.gd.current;r=e._dashprivate_transformFigure(r,s),o=e._dashprivate_transformConfig(o,s);var l=this.getConfig(o,u);l.typesetMath=c;var f={data:r.data,layout:this.getLayout(r.layout,u),frames:r.frames,config:l};return i&&this._hasPlotted&&r.data.length===s.data.length?r.frames?Plotly.deleteFrames(s).then((function(){return Plotly.addFrames(s,r.frames)})).then((function(){return Plotly.animate(s,f,a)})):Plotly.animate(s,f,a):(s.classList.add("dash-graph--pending"),(0,n.Z)(c).then((function(){var e=t.gd.current;return e&&Plotly.react(e,f)})).then((function(){var e=t.gd.current;e&&(e.classList.remove("dash-graph--pending"),t._hasPlotted&&e!==t._prevGd&&(t._prevGd&&t._prevGd.removeAllListeners&&(t._prevGd.removeAllListeners(),Plotly.purge(t._prevGd)),t._hasPlotted=!1),t._hasPlotted||(t.bindEvents(),t.graphResize(!0),t._hasPlotted=!0,t._prevGd=e))})))}},{key:"amendTraces",value:function(e,t,r){var n=t.prependData,o=t.extendData,i=r.prependData,a=r.extendData,u=this;function c(e,t,r){var n=e.clearState,o=e[t],i=Promise.resolve();return o.forEach((function(e){var t,n,o,a,c;if(Array.isArray(e)&&"object"==typeof e[0]){var s=(c=3,function(e){if(Array.isArray(e))return e}(a=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(a,c)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}(a,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());t=s[0],n=s[1],o=s[2]}else t=e;n||(n=function(e){return Array.from(Array(function(e){return e[Object.keys(e)[0]]}(e).length).keys())}(t)),i=i.then((function(){var e=u.gd.current;return e&&Plotly[r](e,t,n,o)}))})),i.then((function(){return n(t)}))}var s=!1;return null!=i&&i.length&&n!==i&&(s=!0,e=e.then((function(){return c(r,"prependData","prependTraces")}))),null!=a&&a.length&&o!==a&&(s=!0,e=e.then((function(){return c(r,"extendData","extendTraces")}))),s&&(e=e.then((function(){return r._dashprivate_onFigureModified(r.figure)}))),e}},{key:"getConfig",value:function(e,t){return(0,u.BPw)(e,this.getConfigOverride(t))}},{key:"getLayout",value:function(e,t){if(!e)return e;var r=this.getLayoutOverride(t),n=this.state,o=n.override,i=n.originals,a={};for(var u in r)e[u]!==o[u]?a[u]=e[u]:i.hasOwnProperty(u)&&(a[u]=i[u]);for(var c in this.setState({override:r,originals:a}),i)e[c]===o[c]&&(e[c]=i[c]);for(var s in r)e[s]=r[s];return e}},{key:"getConfigOverride",value:function(e){switch(e){case!1:return k;case!0:return j;default:return P}}},{key:"getLayoutOverride",value:function(e){switch(e){case!1:return w;case!0:return O;default:return _}}},{key:"isResponsive",value:function(e){var t=e.config,r=e.figure,n=e.responsive;return"Boolean"===(0,u.dt8)(n)?n:Boolean(t.responsive&&(!r.layout||(r.layout.autosize||(0,u.kKJ)(r.layout.autosize))&&((0,u.kKJ)(r.layout.height)||(0,u.kKJ)(r.layout.width))))}},{key:"graphResize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||this.isResponsive(this.props)){var t=this.gd.current;t&&(t.classList.add("dash-graph--pending"),Plotly.Plots.resize(t).catch((function(){})).finally((function(){return t.classList.remove("dash-graph--pending")})))}}},{key:"bindEvents",value:function(){var e=this.props,t=e.setProps,r=e.clear_on_unhover,n=e.relayoutData,o=e.restyleData,i=e.hoverData,a=e.selectedData,c=this.gd.current;c.on("plotly_click",(function(e){var r=E(c,e,"click");(0,u.kKJ)(r)||t({clickData:r})})),c.on("plotly_clickannotation",(function(e){var r=(0,u.CEd)(["event","fullAnnotation"],e);t({clickAnnotationData:r})})),c.on("plotly_hover",(function(e){var r=E(c,e,"hover");(0,u.kKJ)(r)||(0,u.fS0)(r,i)||t({hoverData:r})})),c.on("plotly_selected",(function(e){var r=E(c,e,"selected");(0,u.kKJ)(r)||(0,u.fS0)(r,a)||t({selectedData:r})})),c.on("plotly_deselect",(function(){t({selectedData:null})})),c.on("plotly_relayout",(function(e){var r=E(c,e,"relayout");(0,u.kKJ)(r)||(0,u.fS0)(r,n)||t({relayoutData:r})})),c.on("plotly_restyle",(function(e){var r=E(c,e,"restyle");(0,u.kKJ)(r)||(0,u.fS0)(r,o)||t({restyleData:r})})),c.on("plotly_unhover",(function(){r&&t({hoverData:null})}))}},{key:"componentDidMount",value:function(){var e=this.plot(this.props);this._queue=this.amendTraces(e,{},this.props)}},{key:"componentWillUnmount",value:function(){var e=this.gd.current;e&&e.removeAllListeners&&(e.removeAllListeners(),this._hasPlotted&&Plotly.purge(e))}},{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||JSON.stringify(this.props.style)!==JSON.stringify(e.style)||JSON.stringify(this.props.loading_state)!==JSON.stringify(e.loading_state)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this;if(this.props.id===e.id){var r=this._queue;this.props.mathjax===e.mathjax&&this.props.figure===e.figure&&this.props._dashprivate_transformConfig===e._dashprivate_transformConfig&&this.props._dashprivate_transformFigure===e._dashprivate_transformFigure||(r=r.then((function(){return t.plot(e)}))),this._queue=this.amendTraces(r,this.props,e)}}},{key:"componentDidUpdate",value:function(e){var t=this;e.id===this.props.id&&e.mathjax===this.props.mathjax||(this._queue=this._queue.then((function(){return t.plot(t.props)})))}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.id,n=e.style,o=e.loading_state;return i().createElement("div",{id:r,key:r,"data-dash-is-loading":o&&o.is_loading||void 0,className:t,style:n},i().createElement(a.ZP,{handleHeight:!0,handleWidth:!0,refreshMode:"debounce",refreshOptions:{trailing:!0},refreshRate:50,onResize:this.graphResize}),i().createElement("div",{ref:this.gd,style:{height:"100%",width:"100%"}}))}}],r&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.Component);R.propTypes=p(p({},l.GR),{},{prependData:s().arrayOf(s().oneOfType([s().array,s().object])),extendData:s().arrayOf(s().oneOfType([s().array,s().object])),clearState:s().func.isRequired}),R.defaultProps=p(p({},l.OD),{},{prependData:[],extendData:[]}),t.default=R},63449:function(e,t,r){var n=r(91033),o=r(99196),i=r(91850);function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function u(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}var c=a(n),s=u(o),l=function(e,t){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},l(e,t)};var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==r.g?r.g:"undefined"!=typeof self?self:{},p=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},d="object"==typeof f&&f&&f.Object===Object&&f,h="object"==typeof self&&self&&self.Object===Object&&self,v=d||h||Function("return this")(),y=v,g=/\s/,b=/^\s+/,m=v.Symbol,O=m,_=Object.prototype,w=_.hasOwnProperty,j=_.toString,P=O?O.toStringTag:void 0,k=Object.prototype.toString,E=function(e){var t=w.call(e,P),r=e[P];try{e[P]=void 0;var n=!0}catch(e){}var o=j.call(e);return n&&(t?e[P]=r:delete e[P]),o},R=m?m.toStringTag:void 0,D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":R&&R in Object(e)?E(e):function(e){return k.call(e)}(e)},T=function(e){return e?e.slice(0,function(e){for(var t=e.length;t--&&g.test(e.charAt(t)););return t}(e)+1).replace(b,""):e},S=p,x=/^[-+]0x[0-9a-f]+$/i,A=/^0b[01]+$/i,z=/^0o[0-7]+$/i,N=parseInt,C=p,L=function(){return y.Date.now()},M=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==D(e)}(e))return NaN;if(S(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=S(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=T(e);var r=A.test(e);return r||z.test(e)?N(e.slice(2),r?2:8):x.test(e)?NaN:+e},H=Math.max,J=Math.min,$=function(e,t,r){var n,o,i,a,u,c,s=0,l=!1,f=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var r=n,i=o;return n=o=void 0,s=t,a=e.apply(i,r)}function h(e){return s=e,u=setTimeout(y,t),l?d(e):a}function v(e){var r=e-c;return void 0===c||r>=t||r<0||f&&e-s>=i}function y(){var e=L();if(v(e))return g(e);u=setTimeout(y,function(e){var r=t-(e-c);return f?J(r,i-(e-s)):r}(e))}function g(e){return u=void 0,p&&n?d(e):(n=o=void 0,a)}function b(){var e=L(),r=v(e);if(n=arguments,o=this,c=e,r){if(void 0===u)return h(c);if(f)return clearTimeout(u),u=setTimeout(y,t),d(c)}return void 0===u&&(u=setTimeout(y,t)),a}return t=M(t)||0,C(r)&&(l=!!r.leading,i=(f="maxWait"in r)?H(M(r.maxWait)||0,t):i,p="trailing"in r?!!r.trailing:p),b.cancel=function(){void 0!==u&&clearTimeout(u),s=0,n=c=o=u=void 0},b.flush=function(){return void 0===u?a:g(L())},b},q=$,F=p,K=function(e,t,r,n){switch(t){case"debounce":return $(e,r,n);case"throttle":return function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return F(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),q(e,t,{leading:n,maxWait:t,trailing:o})}(e,r,n);default:return e}},G=function(e){return"function"==typeof e},U=function(){return"undefined"==typeof window},W=function(e){return e instanceof Element||e instanceof HTMLDocument},B=function(e){function t(t){var r=e.call(this,t)||this;r.cancelHandler=function(){r.resizeHandler&&r.resizeHandler.cancel&&(r.resizeHandler.cancel(),r.resizeHandler=null)},r.attachObserver=function(){var e=r.props,t=e.targetRef,n=e.observerOptions;if(!U()){t&&t.current&&(r.targetRef.current=t.current);var o=r.getElement();o&&(r.observableElement&&r.observableElement===o||(r.observableElement=o,r.resizeObserver.observe(o,n)))}},r.getElement=function(){var e=r.props,t=e.querySelector,n=e.targetDomEl;if(U())return null;if(t)return document.querySelector(t);if(n&&W(n))return n;if(r.targetRef&&W(r.targetRef.current))return r.targetRef.current;var o=i.findDOMNode(r);if(!o)return null;switch(r.getRenderType()){case"renderProp":case"childFunction":case"child":case"childArray":return o;default:return o.parentElement}},r.createResizeHandler=function(e){var t=r.props,n=t.handleWidth,o=void 0===n||n,i=t.handleHeight,a=void 0===i||i,u=t.onResize;if(o||a){var c=function(e,t,r,n){return function(o){var i=o.width,a=o.height;t((function(t){return t.width===i&&t.height===a||t.width===i&&!n||t.height===a&&!r?t:(e&&G(e)&&e(i,a),{width:i,height:a})}))}}(u,r.setState.bind(r),o,a);e.forEach((function(e){var t=e&&e.contentRect||{},n=t.width,o=t.height;!r.skipOnMount&&!U()&&c({width:n,height:o}),r.skipOnMount=!1}))}},r.getRenderType=function(){var e=r.props,t=e.render,n=e.children;return G(t)?"renderProp":G(n)?"childFunction":o.isValidElement(n)?"child":Array.isArray(n)?"childArray":"parent"};var n=t.skipOnMount,a=t.refreshMode,u=t.refreshRate,s=void 0===u?1e3:u,l=t.refreshOptions;return r.state={width:void 0,height:void 0},r.skipOnMount=n,r.targetRef=o.createRef(),r.observableElement=null,U()||(r.resizeHandler=K(r.createResizeHandler,a,s,l),r.resizeObserver=new c.default(r.resizeHandler)),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver()},t.prototype.componentWillUnmount=function(){U()||(this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var e,t=this.props,r=t.render,n=t.children,i=t.nodeType,a=void 0===i?"div":i,u=this.state,c={width:u.width,height:u.height,targetRef:this.targetRef};switch(this.getRenderType()){case"renderProp":return r&&r(c);case"childFunction":return(e=n)(c);case"child":if((e=n).type&&"string"==typeof e.type){var l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(c,["targetRef"]);return o.cloneElement(e,l)}return o.cloneElement(e,c);case"childArray":return(e=n).map((function(e){return!!e&&o.cloneElement(e,c)}));default:return s.createElement(a,null)}},t}(o.PureComponent);U()?o.useEffect:o.useLayoutEffect;t.ZP=B}}]);
//# sourceMappingURL=async-graph.js.map