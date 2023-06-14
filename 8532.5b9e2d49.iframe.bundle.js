/*! For license information please see 8532.5b9e2d49.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_mimirorg_component_library=self.webpackChunk_mimirorg_component_library||[]).push([[8532],{"./node_modules/@radix-ui/react-separator/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>$89eedd556c436f6a$export$be92b6f5f03c0fe9});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs");const $89eedd556c436f6a$var$DEFAULT_ORIENTATION="horizontal",$89eedd556c436f6a$var$ORIENTATIONS=["horizontal","vertical"],$89eedd556c436f6a$export$1ff3c3f08ae963c0=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>{const{decorative,orientation:orientationProp=$89eedd556c436f6a$var$DEFAULT_ORIENTATION,...domProps}=props,orientation=$89eedd556c436f6a$var$isValidOrientation(orientationProp)?orientationProp:$89eedd556c436f6a$var$DEFAULT_ORIENTATION,semanticProps=decorative?{role:"none"}:{"aria-orientation":"vertical"===orientation?orientation:void 0,role:"separator"};return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__.WV.div,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.Z)({"data-orientation":orientation},semanticProps,domProps,{ref:forwardedRef}))}));function $89eedd556c436f6a$var$isValidOrientation(orientation){return $89eedd556c436f6a$var$ORIENTATIONS.includes(orientation)}$89eedd556c436f6a$export$1ff3c3f08ae963c0.propTypes={orientation(props,propName,componentName){const propValue=props[propName],strVal=String(propValue);return propValue&&!$89eedd556c436f6a$var$isValidOrientation(propValue)?new Error(function $89eedd556c436f6a$var$getInvalidOrientationError(value,componentName){return`Invalid prop \`orientation\` of value \`${value}\` supplied to \`${componentName}\`, expected one of:\n  - horizontal\n  - vertical\n\nDefaulting to \`${$89eedd556c436f6a$var$DEFAULT_ORIENTATION}\`.`}(strVal,componentName)):null}};const $89eedd556c436f6a$export$be92b6f5f03c0fe9=$89eedd556c436f6a$export$1ff3c3f08ae963c0},"./node_modules/react-router-dom/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{VK:()=>BrowserRouter,rU:()=>Link});var router_Action,react=__webpack_require__("./node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}!function(Action){Action.Pop="POP",Action.Push="PUSH",Action.Replace="REPLACE"}(router_Action||(router_Action={}));const PopStateEventType="popstate";function invariant(value,message){if(!1===value||null==value)throw new Error(message)}function getHistoryState(location,index){return{usr:location.state,key:location.key,idx:index}}function createLocation(current,to,state,key){return void 0===state&&(state=null),_extends({pathname:"string"==typeof current?current:current.pathname,search:"",hash:""},"string"==typeof to?router_parsePath(to):to,{state,key:to&&to.key||key||Math.random().toString(36).substr(2,8)})}function router_createPath(_ref){let{pathname="/",search="",hash=""}=_ref;return search&&"?"!==search&&(pathname+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(pathname+="#"===hash.charAt(0)?hash:"#"+hash),pathname}function router_parsePath(path){let parsedPath={};if(path){let hashIndex=path.indexOf("#");hashIndex>=0&&(parsedPath.hash=path.substr(hashIndex),path=path.substr(0,hashIndex));let searchIndex=path.indexOf("?");searchIndex>=0&&(parsedPath.search=path.substr(searchIndex),path=path.substr(0,searchIndex)),path&&(parsedPath.pathname=path)}return parsedPath}function getUrlBasedHistory(getLocation,createHref,validateLocation,options){void 0===options&&(options={});let{window=document.defaultView,v5Compat=!1}=options,globalHistory=window.history,action=router_Action.Pop,listener=null,index=getIndex();function getIndex(){return(globalHistory.state||{idx:null}).idx}function handlePop(){action=router_Action.Pop;let nextIndex=getIndex(),delta=null==nextIndex?null:nextIndex-index;index=nextIndex,listener&&listener({action,location:history.location,delta})}function createURL(to){let base="null"!==window.location.origin?window.location.origin:window.location.href,href="string"==typeof to?to:router_createPath(to);return invariant(base,"No window.location.(origin|href) available to create URL for href: "+href),new URL(href,base)}null==index&&(index=0,globalHistory.replaceState(_extends({},globalHistory.state,{idx:index}),""));let history={get action(){return action},get location(){return getLocation(window,globalHistory)},listen(fn){if(listener)throw new Error("A history only accepts one active listener");return window.addEventListener(PopStateEventType,handlePop),listener=fn,()=>{window.removeEventListener(PopStateEventType,handlePop),listener=null}},createHref:to=>createHref(window,to),createURL,encodeLocation(to){let url=createURL(to);return{pathname:url.pathname,search:url.search,hash:url.hash}},push:function push(to,state){action=router_Action.Push;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex()+1;let historyState=getHistoryState(location,index),url=history.createHref(location);try{globalHistory.pushState(historyState,"",url)}catch(error){if(error instanceof DOMException&&"DataCloneError"===error.name)throw error;window.location.assign(url)}v5Compat&&listener&&listener({action,location:history.location,delta:1})},replace:function replace(to,state){action=router_Action.Replace;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex();let historyState=getHistoryState(location,index),url=history.createHref(location);globalHistory.replaceState(historyState,"",url),v5Compat&&listener&&listener({action,location:history.location,delta:0})},go:n=>globalHistory.go(n)};return history}var ResultType;!function(ResultType){ResultType.data="data",ResultType.deferred="deferred",ResultType.redirect="redirect",ResultType.error="error"}(ResultType||(ResultType={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function router_stripBasename(pathname,basename){if("/"===basename)return pathname;if(!pathname.toLowerCase().startsWith(basename.toLowerCase()))return null;let startIndex=basename.endsWith("/")?basename.length-1:basename.length,nextChar=pathname.charAt(startIndex);return nextChar&&"/"!==nextChar?null:pathname.slice(startIndex)||"/"}function getInvalidPathError(char,field,dest,path){return"Cannot include a '"+char+"' character in a manually specified `to."+field+"` field ["+JSON.stringify(path)+"].  Please separate it out to the `to."+dest+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function getPathContributingMatches(matches){return matches.filter(((match,index)=>0===index||match.route.path&&match.route.path.length>0))}function router_resolveTo(toArg,routePathnames,locationPathname,isPathRelative){let to;void 0===isPathRelative&&(isPathRelative=!1),"string"==typeof toArg?to=router_parsePath(toArg):(to=_extends({},toArg),invariant(!to.pathname||!to.pathname.includes("?"),getInvalidPathError("?","pathname","search",to)),invariant(!to.pathname||!to.pathname.includes("#"),getInvalidPathError("#","pathname","hash",to)),invariant(!to.search||!to.search.includes("#"),getInvalidPathError("#","search","hash",to)));let from,isEmptyPath=""===toArg||""===to.pathname,toPathname=isEmptyPath?"/":to.pathname;if(isPathRelative||null==toPathname)from=locationPathname;else{let routePathnameIndex=routePathnames.length-1;if(toPathname.startsWith("..")){let toSegments=toPathname.split("/");for(;".."===toSegments[0];)toSegments.shift(),routePathnameIndex-=1;to.pathname=toSegments.join("/")}from=routePathnameIndex>=0?routePathnames[routePathnameIndex]:"/"}let path=function resolvePath(to,fromPathname){void 0===fromPathname&&(fromPathname="/");let{pathname:toPathname,search="",hash=""}="string"==typeof to?router_parsePath(to):to,pathname=toPathname?toPathname.startsWith("/")?toPathname:function resolvePathname(relativePath,fromPathname){let segments=fromPathname.replace(/\/+$/,"").split("/");return relativePath.split("/").forEach((segment=>{".."===segment?segments.length>1&&segments.pop():"."!==segment&&segments.push(segment)})),segments.length>1?segments.join("/"):"/"}(toPathname,fromPathname):fromPathname;return{pathname,search:normalizeSearch(search),hash:normalizeHash(hash)}}(to,from),hasExplicitTrailingSlash=toPathname&&"/"!==toPathname&&toPathname.endsWith("/"),hasCurrentTrailingSlash=(isEmptyPath||"."===toPathname)&&locationPathname.endsWith("/");return path.pathname.endsWith("/")||!hasExplicitTrailingSlash&&!hasCurrentTrailingSlash||(path.pathname+="/"),path}const router_joinPaths=paths=>paths.join("/").replace(/\/\/+/g,"/"),normalizeSearch=search=>search&&"?"!==search?search.startsWith("?")?search:"?"+search:"",normalizeHash=hash=>hash&&"#"!==hash?hash.startsWith("#")?hash:"#"+hash:"";Error;const validMutationMethodsArr=["post","put","patch","delete"],validRequestMethodsArr=(new Set(validMutationMethodsArr),["get",...validMutationMethodsArr]);new Set(validRequestMethodsArr),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function dist_extends(){return dist_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},dist_extends.apply(this,arguments)}const DataRouterContext=react.createContext(null);const NavigationContext=react.createContext(null);const LocationContext=react.createContext(null);const RouteContext=react.createContext({outlet:null,matches:[],isDataRoute:!1});function useInRouterContext(){return null!=react.useContext(LocationContext)}function dist_useLocation(){return useInRouterContext()||invariant(!1),react.useContext(LocationContext).location}function useIsomorphicLayoutEffect(cb){react.useContext(NavigationContext).static||react.useLayoutEffect(cb)}function dist_useNavigate(){let{isDataRoute}=react.useContext(RouteContext);return isDataRoute?function useNavigateStable(){let{router}=useDataRouterContext(DataRouterHook.UseNavigateStable),id=useCurrentRouteId(DataRouterStateHook.UseNavigateStable),activeRef=react.useRef(!1);return useIsomorphicLayoutEffect((()=>{activeRef.current=!0})),react.useCallback((function(to,options){void 0===options&&(options={}),activeRef.current&&("number"==typeof to?router.navigate(to):router.navigate(to,dist_extends({fromRouteId:id},options)))}),[router,id])}():function useNavigateUnstable(){useInRouterContext()||invariant(!1);let dataRouterContext=react.useContext(DataRouterContext),{basename,navigator}=react.useContext(NavigationContext),{matches}=react.useContext(RouteContext),{pathname:locationPathname}=dist_useLocation(),routePathnamesJson=JSON.stringify(getPathContributingMatches(matches).map((match=>match.pathnameBase))),activeRef=react.useRef(!1);return useIsomorphicLayoutEffect((()=>{activeRef.current=!0})),react.useCallback((function(to,options){if(void 0===options&&(options={}),!activeRef.current)return;if("number"==typeof to)return void navigator.go(to);let path=router_resolveTo(to,JSON.parse(routePathnamesJson),locationPathname,"path"===options.relative);null==dataRouterContext&&"/"!==basename&&(path.pathname="/"===path.pathname?basename:router_joinPaths([basename,path.pathname])),(options.replace?navigator.replace:navigator.push)(path,options.state,options)}),[basename,navigator,routePathnamesJson,locationPathname,dataRouterContext])}()}function dist_useResolvedPath(to,_temp2){let{relative}=void 0===_temp2?{}:_temp2,{matches}=react.useContext(RouteContext),{pathname:locationPathname}=dist_useLocation(),routePathnamesJson=JSON.stringify(getPathContributingMatches(matches).map((match=>match.pathnameBase)));return react.useMemo((()=>router_resolveTo(to,JSON.parse(routePathnamesJson),locationPathname,"path"===relative)),[to,routePathnamesJson,locationPathname,relative])}react.Component;var DataRouterHook,DataRouterStateHook;function useDataRouterContext(hookName){let ctx=react.useContext(DataRouterContext);return ctx||invariant(!1),ctx}function useCurrentRouteId(hookName){let route=function useRouteContext(hookName){let route=react.useContext(RouteContext);return route||invariant(!1),route}(),thisRoute=route.matches[route.matches.length-1];return thisRoute.route.id||invariant(!1),thisRoute.route.id}!function(DataRouterHook){DataRouterHook.UseBlocker="useBlocker",DataRouterHook.UseRevalidator="useRevalidator",DataRouterHook.UseNavigateStable="useNavigate"}(DataRouterHook||(DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseBlocker="useBlocker",DataRouterStateHook.UseLoaderData="useLoaderData",DataRouterStateHook.UseActionData="useActionData",DataRouterStateHook.UseRouteError="useRouteError",DataRouterStateHook.UseNavigation="useNavigation",DataRouterStateHook.UseRouteLoaderData="useRouteLoaderData",DataRouterStateHook.UseMatches="useMatches",DataRouterStateHook.UseRevalidator="useRevalidator",DataRouterStateHook.UseNavigateStable="useNavigate",DataRouterStateHook.UseRouteId="useRouteId"}(DataRouterStateHook||(DataRouterStateHook={}));function dist_Router(_ref5){let{basename:basenameProp="/",children=null,location:locationProp,navigationType=router_Action.Pop,navigator,static:staticProp=!1}=_ref5;useInRouterContext()&&invariant(!1);let basename=basenameProp.replace(/^\/*/,"/"),navigationContext=react.useMemo((()=>({basename,navigator,static:staticProp})),[basename,navigator,staticProp]);"string"==typeof locationProp&&(locationProp=router_parsePath(locationProp));let{pathname="/",search="",hash="",state=null,key="default"}=locationProp,locationContext=react.useMemo((()=>{let trailingPathname=router_stripBasename(pathname,basename);return null==trailingPathname?null:{location:{pathname:trailingPathname,search,hash,state,key},navigationType}}),[basename,pathname,search,hash,state,key,navigationType]);return null==locationContext?null:react.createElement(NavigationContext.Provider,{value:navigationContext},react.createElement(LocationContext.Provider,{children,value:locationContext}))}var AwaitRenderStatus;!function(AwaitRenderStatus){AwaitRenderStatus[AwaitRenderStatus.pending=0]="pending",AwaitRenderStatus[AwaitRenderStatus.success=1]="success",AwaitRenderStatus[AwaitRenderStatus.error=2]="error"}(AwaitRenderStatus||(AwaitRenderStatus={}));new Promise((()=>{}));react.Component;function react_router_dom_dist_extends(){return react_router_dom_dist_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},react_router_dom_dist_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}const _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];const dist_START_TRANSITION="startTransition";function BrowserRouter(_ref){let{basename,children,window}=_ref,historyRef=react.useRef();null==historyRef.current&&(historyRef.current=function router_createBrowserHistory(options){return void 0===options&&(options={}),getUrlBasedHistory((function createBrowserLocation(window,globalHistory){let{pathname,search,hash}=window.location;return createLocation("",{pathname,search,hash},globalHistory.state&&globalHistory.state.usr||null,globalHistory.state&&globalHistory.state.key||"default")}),(function createBrowserHref(window,to){return"string"==typeof to?to:router_createPath(to)}),null,options)}({window,v5Compat:!0}));let history=historyRef.current,[state,setStateImpl]=react.useState({action:history.action,location:history.location}),setState=react.useCallback((newState=>{dist_START_TRANSITION in react_namespaceObject?react_namespaceObject[dist_START_TRANSITION]((()=>setStateImpl(newState))):setStateImpl(newState)}),[setStateImpl]);return react.useLayoutEffect((()=>history.listen(setState)),[history,setState]),react.createElement(dist_Router,{basename,children,location:state.location,navigationType:state.action,navigator:history})}const isBrowser="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,dist_ABSOLUTE_URL_REGEX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=react.forwardRef((function LinkWithRef(_ref4,ref){let absoluteHref,{onClick,relative,reloadDocument,replace,state,target,to,preventScrollReset}=_ref4,rest=_objectWithoutPropertiesLoose(_ref4,_excluded),{basename}=react.useContext(NavigationContext),isExternal=!1;if("string"==typeof to&&dist_ABSOLUTE_URL_REGEX.test(to)&&(absoluteHref=to,isBrowser))try{let currentUrl=new URL(window.location.href),targetUrl=to.startsWith("//")?new URL(currentUrl.protocol+to):new URL(to),path=router_stripBasename(targetUrl.pathname,basename);targetUrl.origin===currentUrl.origin&&null!=path?to=path+targetUrl.search+targetUrl.hash:isExternal=!0}catch(e){}let href=function useHref(to,_temp){let{relative}=void 0===_temp?{}:_temp;useInRouterContext()||invariant(!1);let{basename,navigator}=react.useContext(NavigationContext),{hash,pathname,search}=dist_useResolvedPath(to,{relative}),joinedPathname=pathname;return"/"!==basename&&(joinedPathname="/"===pathname?basename:router_joinPaths([basename,pathname])),navigator.createHref({pathname:joinedPathname,search,hash})}(to,{relative}),internalOnClick=function useLinkClickHandler(to,_temp){let{target,replace:replaceProp,state,preventScrollReset,relative}=void 0===_temp?{}:_temp,navigate=dist_useNavigate(),location=dist_useLocation(),path=dist_useResolvedPath(to,{relative});return react.useCallback((event=>{if(function shouldProcessLinkClick(event,target){return!(0!==event.button||target&&"_self"!==target||function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey)}(event))}(event,target)){event.preventDefault();let replace=void 0!==replaceProp?replaceProp:router_createPath(location)===router_createPath(path);navigate(to,{replace,state,preventScrollReset,relative})}}),[location,navigate,path,replaceProp,state,target,to,preventScrollReset,relative])}(to,{replace,state,target,preventScrollReset,relative});return react.createElement("a",react_router_dom_dist_extends({},rest,{href:absoluteHref||href,onClick:isExternal||reloadDocument?onClick:function handleClick(event){onClick&&onClick(event),event.defaultPrevented||internalOnClick(event)},ref,target}))}));var dist_DataRouterHook,dist_DataRouterStateHook;(function(DataRouterHook){DataRouterHook.UseScrollRestoration="useScrollRestoration",DataRouterHook.UseSubmitImpl="useSubmitImpl",DataRouterHook.UseFetcher="useFetcher"})(dist_DataRouterHook||(dist_DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseFetchers="useFetchers",DataRouterStateHook.UseScrollRestoration="useScrollRestoration"}(dist_DataRouterStateHook||(dist_DataRouterStateHook={}))},"./node_modules/react-spinners/esm/CircleLoader.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-spinners/esm/helpers/unitConverter.js"),_helpers_animation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-spinners/esm/helpers/animation.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},circle=(0,_helpers_animation__WEBPACK_IMPORTED_MODULE_1__.i)("CircleLoader","0% {transform: rotate(0deg)} 50% {transform: rotate(180deg)} 100% {transform: rotate(360deg)}","circle");const __WEBPACK_DEFAULT_EXPORT__=function CircleLoader(_a){var _b=_a.loading,loading=void 0===_b||_b,_c=_a.color,color=void 0===_c?"#000000":_c,_d=_a.speedMultiplier,speedMultiplier=void 0===_d?1:_d,_e=_a.cssOverride,cssOverride=void 0===_e?{}:_e,_f=_a.size,size=void 0===_f?50:_f,additionalprops=__rest(_a,["loading","color","speedMultiplier","cssOverride","size"]),wrapper=__assign({display:"inherit",position:"relative",width:(0,_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__.E)(size),height:(0,_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__.E)(size)},cssOverride),style=function(i){var _a=(0,_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__.h)(size),value=_a.value,unit=_a.unit;return{position:"absolute",height:"".concat(value*(1-i/10)).concat(unit),width:"".concat(value*(1-i/10)).concat(unit),borderTop:"1px solid ".concat(color),borderBottom:"none",borderLeft:"1px solid ".concat(color),borderRight:"none",borderRadius:"100%",transition:"2s",top:"".concat(.7*i*2.5,"%"),left:"".concat(.35*i*2.5,"%"),animation:"".concat(circle," ").concat(1/speedMultiplier,"s ").concat(.2*i/speedMultiplier,"s infinite linear")}};return loading?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",__assign({style:wrapper},additionalprops),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:style(0)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:style(1)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:style(2)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:style(3)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:style(4)})):null}},"./node_modules/react-spinners/esm/ScaleLoader.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-spinners/esm/helpers/unitConverter.js"),_helpers_animation__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-spinners/esm/helpers/animation.js"),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},scale=(0,_helpers_animation__WEBPACK_IMPORTED_MODULE_1__.i)("ScaleLoader","0% {transform: scaley(1.0)} 50% {transform: scaley(0.4)} 100% {transform: scaley(1.0)}","scale");const __WEBPACK_DEFAULT_EXPORT__=function ScaleLoader(_a){var _b=_a.loading,loading=void 0===_b||_b,_c=_a.color,color=void 0===_c?"#000000":_c,_d=_a.speedMultiplier,speedMultiplier=void 0===_d?1:_d,_e=_a.cssOverride,cssOverride=void 0===_e?{}:_e,_f=_a.height,height=void 0===_f?35:_f,_g=_a.width,width=void 0===_g?4:_g,_h=_a.radius,radius=void 0===_h?2:_h,_j=_a.margin,margin=void 0===_j?2:_j,additionalprops=__rest(_a,["loading","color","speedMultiplier","cssOverride","height","width","radius","margin"]),wrapper=__assign({display:"inherit"},cssOverride),style=function(i){return{backgroundColor:color,width:(0,_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__.E)(width),height:(0,_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__.E)(height),margin:(0,_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__.E)(margin),borderRadius:(0,_helpers_unitConverter__WEBPACK_IMPORTED_MODULE_2__.E)(radius),display:"inline-block",animation:"".concat(scale," ").concat(1/speedMultiplier,"s ").concat(.1*i,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return loading?react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",__assign({style:wrapper},additionalprops),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:style(1)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:style(2)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:style(3)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:style(4)}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{style:style(5)})):null}},"./node_modules/react-spinners/esm/helpers/animation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>createAnimation});var createAnimation=function(loaderName,frames,suffix){var animationName="react-spinners-".concat(loaderName,"-").concat(suffix);if("undefined"==typeof window||!window.document)return animationName;var styleEl=document.createElement("style");document.head.appendChild(styleEl);var styleSheet=styleEl.sheet,keyFrames="\n    @keyframes ".concat(animationName," {\n      ").concat(frames,"\n    }\n  ");return styleSheet&&styleSheet.insertRule(keyFrames,0),animationName}},"./node_modules/react-spinners/esm/helpers/unitConverter.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>cssValue,h:()=>parseLengthAndUnit});var cssUnit={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function parseLengthAndUnit(size){if("number"==typeof size)return{value:size,unit:"px"};var value,valueString=(size.match(/^[0-9.]*/)||"").toString();value=valueString.includes(".")?parseFloat(valueString):parseInt(valueString,10);var unit=(size.match(/[^0-9]*$/)||"").toString();return cssUnit[unit]?{value,unit}:(console.warn("React Spinners: ".concat(size," is not a valid css value. Defaulting to ").concat(value,"px.")),{value,unit:"px"})}function cssValue(value){var lengthWithunit=parseLengthAndUnit(value);return"".concat(lengthWithunit.value).concat(lengthWithunit.unit)}}}]);