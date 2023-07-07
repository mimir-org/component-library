"use strict";(self.webpackChunk_mimirorg_component_library=self.webpackChunk_mimirorg_component_library||[]).push([[9060],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/_stories/foundations/Shadows.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_core_theme_variables_theme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/core/theme/variables/theme.ts"),_layouts__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/layouts/index.ts"),_atoms__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/atoms/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.h_,{title:"Foundations/Shadows"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h1,{id:"shadows",children:"Shadows"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.p,{children:"Here you will find an overview of the different shadows available. These are used to create a sense of hierarchy and elevation within the UI and different layouts."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2,{id:"shadow-levels",children:"Shadow levels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_layouts__WEBPACK_IMPORTED_MODULE_3__.xu,{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:_core_theme_variables_theme__WEBPACK_IMPORTED_MODULE_2__.r.spacing.multiple(8),spacing:{p:_core_theme_variables_theme__WEBPACK_IMPORTED_MODULE_2__.r.spacing.multiple(5)},border:`2px solid ${_core_theme_variables_theme__WEBPACK_IMPORTED_MODULE_2__.r.color.outline.base}`,borderRadius:_core_theme_variables_theme__WEBPACK_IMPORTED_MODULE_2__.r.border.radius.medium,children:Object.entries(_core_theme_variables_theme__WEBPACK_IMPORTED_MODULE_2__.r.shadow).map((([k,v])=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_layouts__WEBPACK_IMPORTED_MODULE_3__.xu,{display:"flex",flexDirection:"column",gap:_core_theme_variables_theme__WEBPACK_IMPORTED_MODULE_2__.r.spacing.xxl,spacing:{p:_core_theme_variables_theme__WEBPACK_IMPORTED_MODULE_2__.r.spacing.l},boxShadow:v,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_atoms__WEBPACK_IMPORTED_MODULE_4__.xv,{variant:"title-medium",children:["shadow.",k]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_atoms__WEBPACK_IMPORTED_MODULE_4__.xv,{variant:"label-large",children:["box-shadow: ",v]})]},v)))})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Foundations/Shadows",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/components/layouts/Box.styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>MotionBox,x:()=>Box});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts"),framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs");const Box=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.T_};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.KK};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.Zv};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.QF};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.E6};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.bv};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.vR};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.o9};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.G4};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.Fc};
`,MotionBox=(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.E)(Box);try{Box.displayName="Box",Box.__docgenInfo={description:"A polymorphic layout component for a box element.\n\nSince many components often need a generic box for layout purposes this component exposes flexbox and grid properties\nin addition to properties related to display, positions, palette, sizing, spacing, borders, shadows etc.",displayName:"Box",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"string"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"string"}},gridColumn:{defaultValue:null,description:"",name:"gridColumn",required:!1,type:{name:"string"}},gridRow:{defaultValue:null,description:"",name:"gridRow",required:!1,type:{name:"string"}},gridAutoFlow:{defaultValue:null,description:"",name:"gridAutoFlow",required:!1,type:{name:"string"}},gridAutoColumns:{defaultValue:null,description:"",name:"gridAutoColumns",required:!1,type:{name:"string"}},gridAutoRows:{defaultValue:null,description:"",name:"gridAutoRows",required:!1,type:{name:"string"}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:"string"}},gridTemplateRows:{defaultValue:null,description:"",name:"gridTemplateRows",required:!1,type:{name:"string"}},gridTemplateAreas:{defaultValue:null,description:"",name:"gridTemplateAreas",required:!1,type:{name:"string"}},gridArea:{defaultValue:null,description:"",name:"gridArea",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},placeItems:{defaultValue:null,description:"",name:"placeItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},placeContent:{defaultValue:null,description:"",name:"placeContent",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},placeSelf:{defaultValue:null,description:"",name:"placeSelf",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string | number"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexFlow:{defaultValue:null,description:"",name:"flexFlow",required:!1,type:{name:"string"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"string"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"string"}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"string"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"string"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"string"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"string | number"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"string | number"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"string | number"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"string | number"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"string | number"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"Spacing"}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"string | number"}},borderTop:{defaultValue:null,description:"",name:"borderTop",required:!1,type:{name:"string | number"}},borderLeft:{defaultValue:null,description:"",name:"borderLeft",required:!1,type:{name:"string | number"}},borderRight:{defaultValue:null,description:"",name:"borderRight",required:!1,type:{name:"string | number"}},borderBottom:{defaultValue:null,description:"",name:"borderBottom",required:!1,type:{name:"string | number"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderTopColor:{defaultValue:null,description:"",name:"borderTopColor",required:!1,type:{name:"string"}},borderRightColor:{defaultValue:null,description:"",name:"borderRightColor",required:!1,type:{name:"string"}},borderBottomColor:{defaultValue:null,description:"",name:"borderBottomColor",required:!1,type:{name:"string"}},borderLeftColor:{defaultValue:null,description:"",name:"borderLeftColor",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layouts/Box.styled.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"src/components/layouts/Box.styled.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}try{MotionBox.displayName="MotionBox",MotionBox.__docgenInfo={description:"An animation wrapper for the Box component",displayName:"MotionBox",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layouts/Box.styled.tsx#MotionBox"]={docgenInfo:MotionBox.__docgenInfo,name:"MotionBox",path:"src/components/layouts/Box.styled.tsx#MotionBox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layouts/Flexbox.styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Flexbox});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts"),framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs");const Flexbox=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  display: flex;
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.T_};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.Zv};
`,MotionFlexbox=(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.E)(Flexbox);try{Flexbox.displayName="Flexbox",Flexbox.__docgenInfo={description:"A polymorphic layout component for flexbox behaviour.",displayName:"Flexbox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string | number"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexFlow:{defaultValue:null,description:"",name:"flexFlow",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layouts/Flexbox.styled.tsx#Flexbox"]={docgenInfo:Flexbox.__docgenInfo,name:"Flexbox",path:"src/components/layouts/Flexbox.styled.tsx#Flexbox"})}catch(__react_docgen_typescript_loader_error){}try{MotionFlexbox.displayName="MotionFlexbox",MotionFlexbox.__docgenInfo={description:"An animation wrapper for the Flexbox component",displayName:"MotionFlexbox",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layouts/Flexbox.styled.tsx#MotionFlexbox"]={docgenInfo:MotionFlexbox.__docgenInfo,name:"MotionFlexbox",path:"src/components/layouts/Flexbox.styled.tsx#MotionFlexbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layouts/Gridbox.styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Gridbox});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts"),framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs");const Gridbox=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  display: grid;
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.QF};
`,MotionGridbox=(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.E)(Gridbox);try{Gridbox.displayName="Gridbox",Gridbox.__docgenInfo={description:"A polymorphic layout component for grid behaviour.",displayName:"Gridbox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}},columnGap:{defaultValue:null,description:"",name:"columnGap",required:!1,type:{name:"string"}},rowGap:{defaultValue:null,description:"",name:"rowGap",required:!1,type:{name:"string"}},gridColumn:{defaultValue:null,description:"",name:"gridColumn",required:!1,type:{name:"string"}},gridRow:{defaultValue:null,description:"",name:"gridRow",required:!1,type:{name:"string"}},gridAutoFlow:{defaultValue:null,description:"",name:"gridAutoFlow",required:!1,type:{name:"string"}},gridAutoColumns:{defaultValue:null,description:"",name:"gridAutoColumns",required:!1,type:{name:"string"}},gridAutoRows:{defaultValue:null,description:"",name:"gridAutoRows",required:!1,type:{name:"string"}},gridTemplateColumns:{defaultValue:null,description:"",name:"gridTemplateColumns",required:!1,type:{name:"string"}},gridTemplateRows:{defaultValue:null,description:"",name:"gridTemplateRows",required:!1,type:{name:"string"}},gridTemplateAreas:{defaultValue:null,description:"",name:"gridTemplateAreas",required:!1,type:{name:"string"}},gridArea:{defaultValue:null,description:"",name:"gridArea",required:!1,type:{name:"string"}},justifyItems:{defaultValue:null,description:"",name:"justifyItems",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},placeItems:{defaultValue:null,description:"",name:"placeItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},placeContent:{defaultValue:null,description:"",name:"placeContent",required:!1,type:{name:"string"}},justifySelf:{defaultValue:null,description:"",name:"justifySelf",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},placeSelf:{defaultValue:null,description:"",name:"placeSelf",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layouts/Gridbox.styled.tsx#Gridbox"]={docgenInfo:Gridbox.__docgenInfo,name:"Gridbox",path:"src/components/layouts/Gridbox.styled.tsx#Gridbox"})}catch(__react_docgen_typescript_loader_error){}try{MotionGridbox.displayName="MotionGridbox",MotionGridbox.__docgenInfo={description:"An animation wrapper for the Grid component",displayName:"MotionGridbox",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layouts/Gridbox.styled.tsx#MotionGridbox"]={docgenInfo:MotionGridbox.__docgenInfo,name:"MotionGridbox",path:"src/components/layouts/Gridbox.styled.tsx#MotionGridbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layouts/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DL:()=>_Flexbox_styled__WEBPACK_IMPORTED_MODULE_1__.D,uH:()=>_Box_styled__WEBPACK_IMPORTED_MODULE_0__.u,xu:()=>_Box_styled__WEBPACK_IMPORTED_MODULE_0__.x});var _Box_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/layouts/Box.styled.tsx"),_Flexbox_styled__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/layouts/Flexbox.styled.tsx");__webpack_require__("./src/components/layouts/Gridbox.styled.tsx")}}]);
//# sourceMappingURL=components-_stories-foundations-Shadows-stories-mdx.302bd80b.iframe.bundle.js.map