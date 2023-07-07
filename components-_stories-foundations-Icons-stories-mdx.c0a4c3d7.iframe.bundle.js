"use strict";(self.webpackChunk_mimirorg_component_library=self.webpackChunk_mimirorg_component_library||[]).push([[7760],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/_stories/foundations/Icons.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/icons/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",h4:"h4",pre:"pre",code:"code"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{title:"Foundations/Icons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"icons",children:"Icons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Mimirorg uses many different icons to identify both content and functionality. Here is a set of frequently reused icons."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h4,{id:"example",children:"Example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-js",children:'<FunctionIcon width={"22px"} height={"18px"} />\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.code,{className:"language-js",children:"<BlockViewIcon size={14} />\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h4,{id:"aspect",children:"Aspect"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Lo,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"FunctionIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.ei,{width:"22px",height:"18px"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"FunctionFilterIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.re,{width:"22px",height:"18px"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"LocationIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__._t,{width:"22px",height:"18px"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"LocationFilterIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.L6,{width:"22px",height:"18px"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"ProductIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.wq,{width:"22px",height:"18px"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"ProductFilterIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.c1,{width:"22px",height:"18px"})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h4,{id:"header-and-toolbar",children:"Header and toolbar"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Lo,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"AvatarBackgroundIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.ni,{width:"36px",height:"37px"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"BlockViewIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.fW,{size:14})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"DarkModeIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.ce,{size:14})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"FilterIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.k1,{size:14})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"FitViewIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.CQ,{size:14})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"HorizontalIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.Pp,{size:14})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"LightModeIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.xp,{size:14})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"LogoutIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.R0,{size:14})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"NotificationsIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.ak,{size:14})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"SettingsIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.ew,{size:14})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"TreeViewIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.jy,{width:"19px",height:"14px"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"VerticalIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.b1,{size:14})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h4,{id:"lock",children:"Lock"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Lo,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"LockIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.mB,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"LockClosedIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.kh,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"LockOpenIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.Gl,{})})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h4,{id:"library",children:"Library"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Lo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"LibraryIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.Vq,{})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h4,{id:"common",children:"Common"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Lo,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__._R,{name:"CollapseAccordionIcon",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.dO,{})})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Foundations/Icons",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta}}]);