"use strict";(self.webpackChunk_mimirorg_component_library=self.webpackChunk_mimirorg_component_library||[]).push([[8371],{"./src/components/atoms/media/Icon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _icons__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/icons/index.ts"),_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/media/Icon.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Atoms/Icon",component:_Icon__WEBPACK_IMPORTED_MODULE_1__.J},Default={args:{src:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_0__.V,{}),size:16}},__WEBPACK_DEFAULT_EXPORT__=meta;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    src: <LibraryIcon />,\n    size: 16\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/atoms/media/Icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts");const Icon=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.img`
  display: inline-block;
  width: ${props=>props.size?`${props.size}px`:"1em"};
  height: ${props=>props.size?`${props.size}px`:"1em"};
  line-height: 1;
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.bv};
`},"./src/components/icons/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>LibraryIcon});var _path,react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const logo_jsx=function SvgLogojsx(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 225.74 58.23"},props),_path||(_path=react.createElement("path",{d:"m15.73 33.63 29.88-3.22c4.32-.42 4.74-1.61 4.74-4.06 0-1.27-1.61-4.57-8.29-4.57h-19.7v-7.7h19.63c11.09 0 17.61 5.76 17.61 14.05v16.42c0 9.4-8.55 13.63-17.69 13.63H15.99c-9.31 0-16-5.93-16-12.11 0-5.58 6.18-11.43 15.74-12.44m.26 17.18h25.88c5.16 0 8.72-2.71 8.72-5.93v-4.15c0-2.79-1.36-3.73-4.49-3.39C32.39 38.95 8.94 39.12 8.94 46c0 2.54 2.12 4.83 7 4.83M71.82 10a5 5 0 1 1 5.33-5 5.14 5.14 0 0 1-5.27 5h-.06m-4.74 4.12h9.4v43.63h-9.4Zm60.85 44.11h-25.94c-13.46 0-17.61-8.55-17.61-12.87V.67h9.23v7.95c0 2.46 3.13 5.5 8 5.5h26.28c9.57 0 17.61 5 17.61 12.78v18.42c0 4.32-4.15 12.87-17.61 12.87m8.38-31.32c0-2.54-3.22-5.33-8.38-5.33h-25.9c-5.16 0-8.38 2.79-8.38 5.33v18.45c0 2.45 3.13 5 8.38 5h25.9c5.25 0 8.38-2.54 8.38-5Zm59.21 11.79-29.88 3.22c-4.32.42-4.74 1.61-4.74 4.06 0 1.27 1.61 4.57 8.29 4.57h20.35v7.71h-20.26c-11.09 0-17.61-5.76-17.61-14.05V27.74c0-9.4 8.55-13.63 17.69-13.63h25.9c9.31 0 16 5.93 16 12.11 0 5.59-6.18 11.43-15.75 12.44m-.26-17.18h-25.9c-5.16 0-8.72 2.71-8.72 5.92v4.15c0 2.79 1.35 3.72 4.49 3.39 13.71-1.61 37.16-1.78 37.16-8.64 0-2.54-2.12-4.82-7-4.82M216.51.67h9.23V58.2h-9.23z"})))};var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),helpers=__webpack_require__("./src/components/core/theme/helpers/index.ts");const svgMixin=styled_components_browser_esm.iv`
  display: inline-block;
  width: ${props=>props.size?`${props.size}px`:"1em"};
  height: ${props=>props.size?`${props.size}px`:"1em"};
  line-height: 1;
  ${helpers.bv};
`,LogoIcon=(0,styled_components_browser_esm.ZP)(logo_jsx)`
  ${svgMixin};
`;LogoIcon.defaultProps={width:"100px",height:"25px"};try{LogoIcon.displayName="LogoIcon",LogoIcon.__docgenInfo={description:"",displayName:"LogoIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/logo/LogoIcon.tsx#LogoIcon"]={docgenInfo:LogoIcon.__docgenInfo,name:"LogoIcon",path:"src/components/icons/logo/LogoIcon.tsx#LogoIcon"})}catch(__react_docgen_typescript_loader_error){}var library_jsx_path,_path2,_path3,_path4,_path5,_path6;function library_jsx_extends(){return library_jsx_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},library_jsx_extends.apply(this,arguments)}const library_jsx=function SvgLibraryjsx(props){return react.createElement("svg",library_jsx_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 25"},props),library_jsx_path||(library_jsx_path=react.createElement("path",{fill:"#fff",d:"m.519 6.645 10-5.824C11.185.433 12 .944 12 1.75V17.8c0 .388-.199.744-.519.93l-10 5.825C.815 24.944 0 24.433 0 23.626V7.575c0-.387.199-.744.519-.93Z"})),_path2||(_path2=react.createElement("path",{fill:"#272738",fillRule:"evenodd",d:"M1.5 7.889v14.84l9-5.241V2.648l-9 5.24Zm9.259 9.448.241.465-.24-.465h-.001ZM10.519.821l-10 5.824c-.32.186-.519.543-.519.93v16.051c0 .806.815 1.318 1.481.93l10-5.824c.32-.187.519-.543.519-.93V1.75c0-.807-.815-1.318-1.481-.93Z",clipRule:"evenodd"})),_path3||(_path3=react.createElement("path",{fill:"#fff",d:"m6.519 6.645 10-5.824C17.185.433 18 .944 18 1.75V17.8c0 .388-.199.744-.519.93l-10 5.825c-.666.388-1.481-.123-1.481-.93V7.575c0-.387.199-.744.519-.93Z"})),_path4||(_path4=react.createElement("path",{fill:"#272738",fillRule:"evenodd",d:"M7.5 7.889v14.84l9-5.241V2.648l-9 5.24Zm9.259 9.448.241.465-.24-.465h-.001ZM16.519.821l-10 5.824c-.32.186-.519.543-.519.93v16.051c0 .806.815 1.318 1.481.93l10-5.824c.32-.187.519-.543.519-.93V1.75c0-.807-.815-1.318-1.481-.93Z",clipRule:"evenodd"})),_path5||(_path5=react.createElement("path",{fill:"#fff",d:"m12.519 6.645 10-5.824C23.185.433 24 .944 24 1.75V17.8c0 .388-.199.744-.519.93l-10 5.825c-.666.388-1.481-.123-1.481-.93V7.575c0-.387.199-.744.519-.93Z"})),_path6||(_path6=react.createElement("path",{fill:"#272738",fillRule:"evenodd",d:"M13.5 7.889v14.84l9-5.241V2.648l-9 5.24Zm9.259 9.448.241.465-.24-.465h-.001ZM22.519.821l-10 5.824c-.32.186-.519.543-.519.93v16.051c0 .806.815 1.318 1.481.93l10-5.824c.32-.187.519-.543.519-.93V1.75c0-.807-.815-1.318-1.481-.93Z",clipRule:"evenodd"})))},LibraryIcon=(0,styled_components_browser_esm.ZP)(library_jsx)`
  ${svgMixin};
`;try{LibraryIcon.displayName="LibraryIcon",LibraryIcon.__docgenInfo={description:"",displayName:"LibraryIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/icons/library/LibraryIcon.tsx#LibraryIcon"]={docgenInfo:LibraryIcon.__docgenInfo,name:"LibraryIcon",path:"src/components/icons/library/LibraryIcon.tsx#LibraryIcon"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=atoms-media-Icon-stories.3cfcac8d.iframe.bundle.js.map