"use strict";(self.webpackChunk_mimirorg_component_library=self.webpackChunk_mimirorg_component_library||[]).push([[1284],{"./src/components/atoms/conditional/ConditionalWrapper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _buttons_Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/atoms/buttons/Button.tsx"),_ConditionalWrapper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/conditional/ConditionalWrapper.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Atoms/ConditionalWrapper",component:_ConditionalWrapper__WEBPACK_IMPORTED_MODULE_2__.M,args:{wrapper:c=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:c}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_buttons_Button__WEBPACK_IMPORTED_MODULE_0__.z,{children:"Wrapped?"})},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})]},Example={},__WEBPACK_DEFAULT_EXPORT__=meta;Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{}",...Example.parameters?.docs?.source}}};const __namedExportsOrder=["Example"]},"./src/components/atoms/buttons/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),VisuallyHidden=__webpack_require__("./src/components/atoms/hidden/VisuallyHidden.tsx"),Icon=__webpack_require__("./src/components/atoms/media/Icon.ts"),Text=__webpack_require__("./src/components/atoms/text/Text.tsx"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),helpers=__webpack_require__("./src/components/core/theme/helpers/index.ts"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js");const getButtonColor=(theme,buttonColor)=>{switch(buttonColor){case"primary":return theme?.color.primary.base;case"success":return theme?.color.success.base;case"warning":return theme?.color.tertiary.base;case"danger":case"error":return theme?.color.error.base;default:return""}},ButtonContainer=styled_components_browser_esm.ZP.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${props=>props.theme.mimir.spacing.s};
  flex-direction: ${props=>"left"===props.iconPlacement&&"row-reverse"};

  white-space: nowrap;
  text-decoration: none;

  font: ${props=>props.theme.mimir.typography.roles.label.large.font};
  line-height: ${props=>props.theme.mimir.typography.roles.label.large.lineHeight};
  letter-spacing: ${props=>props.theme.mimir.typography.roles.label.large.letterSpacing};

  height: 32px;
  width: fit-content;
  min-width: 70px;
  padding: ${props=>props.theme.mimir.spacing.base} ${props=>props.theme.mimir.spacing.xl};
  border-radius: ${props=>props.theme.mimir.border.radius.medium};

  :hover {
    cursor: pointer;
  }

  :disabled {
    cursor: not-allowed;
  }

  img,
  svg {
    max-width: 24px;
    max-height: 24px;
  }

  ${helpers.T_};

  ${({variant,buttonColor,...props})=>{const{color,border}=props.theme.mimir;switch(variant){case"filled":return((color,buttonColor)=>{const baseColor=buttonColor||color.primary.base,hoverColor=(0,polished_esm.$n)(.1,baseColor),hoverTextColor=(0,polished_esm.Us)(color.text.base,hoverColor).AAA?color.text.base:color.text.on,activeColor=(0,polished_esm.$n)(.3,baseColor),activeTextColor=(0,polished_esm.Us)(color.text.base,activeColor).AAA?color.text.base:color.text.on;return styled_components_browser_esm.iv`
    border: 0;
    background-color: ${baseColor};
    color: ${color.text.on};

    :disabled {
      background-color: ${color.outline.base};
      color: ${color.surface.variant.on};
    }

    :not(:disabled) {
      :hover {
        background-color: ${hoverColor};
        color: ${hoverTextColor};
      }

      :active {
        background-color: ${activeColor};
        color: ${activeTextColor};
      }
    }
  `})(color,getButtonColor(props.theme.mimir,buttonColor));case"outlined":return((color,buttonColor)=>{const baseColor=buttonColor||color.primary.base,hoverColor=(0,polished_esm.$n)(.1,baseColor),hoverTextColor=(0,polished_esm.Us)(color.text.base,hoverColor).AAA?color.text.base:color.text.on,activeColor=(0,polished_esm.$n)(.3,baseColor),activeTextColor=(0,polished_esm.Us)(color.text.base,activeColor).AAA?color.text.base:color.text.on;return styled_components_browser_esm.iv`
    outline: 0;
    background-color: transparent;
    border: 1px solid ${baseColor};
    color: ${color.text.base};

    :disabled {
      border-color: ${color.outline.base};
      color: ${color.surface.variant.on};
    }

    :not(:disabled) {
      :hover {
        background-color: ${hoverColor};
        color: ${hoverTextColor};
      }

      :active {
        background-color: ${activeColor};
        color: ${activeTextColor};
      }
    }
  `})(color,getButtonColor(props.theme.mimir,buttonColor));case"text":return(color=>styled_components_browser_esm.iv`
    border: 0;
    background-color: transparent;
    color: ${color.primary.base};

    :disabled {
      color: ${color.surface.variant.on};
    }

    :not(:disabled) {
      :hover {
        background-color: ${(0,polished_esm.$n)(.1,color.primary.base)};
        color: ${color.text.on};
      }

      :active {
        background-color: ${(0,polished_esm.$n)(.3,color.primary.base)};
        color: ${color.text.on};
      }
    }
  `)(color);case"round":return((color,border)=>styled_components_browser_esm.iv`
    height: 50px;
    width: 50px;
    border-width: 0;
    border-radius: ${border.radius.round};
    background-color: ${color.primary.base};
    color: ${color.text.on};

    :disabled {
      background-color: ${color.outline.base};
      color: ${color.surface.variant.on};
    }

    :not(:disabled) {
      :hover {
        background-color: ${(0,polished_esm.$n)(.1,color.primary.base)};
        color: ${color.text.on};
      }

      :active {
        background-color: ${(0,polished_esm.$n)(.3,color.primary.base)};
        color: ${color.text.on};
      }
    }

    img,
    svg {
      max-width: 70%;
      max-height: 70%;
      width: 50%;
      height: 50%;
    }
  `)(color,border)}}};

  ${({iconOnly,...props})=>iconOnly&&styled_components_browser_esm.iv`
      padding: ${props.theme.mimir.spacing.xs};
      min-width: revert;
      width: 24px;
      height: 24px;

      img,
      svg {
        max-width: 18px;
        max-height: 18px;
      }
    `};

  ${helpers.Zv};
  ${helpers.bv};
  ${helpers.Fc};
`;ButtonContainer.defaultProps={variant:"filled",buttonColor:"primary"};const MotionButtonContainer=(0,motion.E)(ButtonContainer);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)(((props,ref)=>{const theme=(0,styled_components_browser_esm.Fg)(),{children,icon,iconPlacement,iconOnly,textVariant,buttonColor,...delegated}=props;return(0,jsx_runtime.jsxs)(MotionButtonContainer,{ref,iconOnly,iconPlacement,buttonColor,...theme.mimir.animation.buttonTap,...delegated,children:[icon&&iconOnly?(0,jsx_runtime.jsx)(VisuallyHidden.T,{children}):(0,jsx_runtime.jsx)(Text.x,{as:"span",variant:textVariant,children}),icon&&((0,react.isValidElement)(icon)?icon:(0,jsx_runtime.jsx)(Icon.J,{src:String(icon),alt:""}))]})}));Button.displayName="Button",Button.defaultProps={type:"button",iconPlacement:"right",textVariant:"body-small",buttonColor:"primary"};try{Button.displayName="Button",Button.__docgenInfo={description:"A button with different variants.\nA typical use case is in forms or navigation purposes.\noriginal component props with the props of the supplied element/component and change the underlying DOM node.",displayName:"Button",props:{flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string | number"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexFlow:{defaultValue:null,description:"",name:"flexFlow",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"Spacing"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"filled"'},{value:'"outlined"'},{value:'"round"'}]}},iconPlacement:{defaultValue:{value:"right"},description:"",name:"iconPlacement",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}},buttonColor:{defaultValue:{value:"primary"},description:"",name:"buttonColor",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'},{value:'"success"'},{value:'"warning"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},textVariant:{defaultValue:{value:"body-small"},description:"",name:"textVariant",required:!1,type:{name:"enum",value:[{value:'"display-large"'},{value:'"display-medium"'},{value:'"display-small"'},{value:'"headline-large"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"title-large"'},{value:'"title-medium"'},{value:'"title-small"'},{value:'"body-large"'},{value:'"body-medium"'},{value:'"body-small"'},{value:'"label-large"'},{value:'"label-medium"'},{value:'"label-small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/buttons/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/atoms/buttons/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/conditional/ConditionalWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>ConditionalWrapper});const ConditionalWrapper=({condition,wrapper,children})=>condition?wrapper(children):children;try{ConditionalWrapper.displayName="ConditionalWrapper",ConditionalWrapper.__docgenInfo={description:"Component which facilities conditional wrapping of its children",displayName:"ConditionalWrapper",props:{condition:{defaultValue:null,description:"",name:"condition",required:!1,type:{name:"boolean"}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!0,type:{name:"(children: ReactElement<any, string | JSXElementConstructor<any>>) => ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/conditional/ConditionalWrapper.tsx#ConditionalWrapper"]={docgenInfo:ConditionalWrapper.__docgenInfo,name:"ConditionalWrapper",path:"src/components/atoms/conditional/ConditionalWrapper.tsx#ConditionalWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/hidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>VisuallyHidden});var _radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-visually-hidden/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const VisuallyHidden=({children,asChild})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_1__.f,{asChild,children});VisuallyHidden.displayName="VisuallyHidden";try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"A component for including data without displaying it.\nA typical use case might be description text for icons that can only be read by screen readers.",displayName:"VisuallyHidden",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/hidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/atoms/hidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/media/Icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts");const Icon=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.img`
  display: inline-block;
  width: ${props=>props.size?`${props.size}px`:"1em"};
  height: ${props=>props.size?`${props.size}px`:"1em"};
  line-height: 1;
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.bv};
`},"./src/components/atoms/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.p`
  ${({variant})=>(0,_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.qU)(variant)};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.Fc};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.o9};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.KK};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.KO};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.A2};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.bv};
`;Text.displayName="Text",Text.defaultProps={useEllipsis:!1,ellipsisMaxLines:1,htmlFor:""};try{Text.displayName="Text",Text.__docgenInfo={description:"A polymorphic text component for non-heading text",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"string"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"string"}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"string"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"string"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"Spacing"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"string | number"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"string"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"string"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"string"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"string"}},wordBreak:{defaultValue:null,description:"",name:"wordBreak",required:!1,type:{name:"string"}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"display-large"'},{value:'"display-medium"'},{value:'"display-small"'},{value:'"headline-large"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"title-large"'},{value:'"title-medium"'},{value:'"title-small"'},{value:'"body-large"'},{value:'"body-medium"'},{value:'"body-small"'},{value:'"label-large"'},{value:'"label-medium"'},{value:'"label-small"'}]}},useEllipsis:{defaultValue:{value:"false"},description:"",name:"useEllipsis",required:!1,type:{name:"boolean"}},ellipsisMaxLines:{defaultValue:{value:"1"},description:"",name:"ellipsisMaxLines",required:!1,type:{name:"number"}},htmlFor:{defaultValue:{value:""},description:"",name:"htmlFor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/atoms/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=atoms-conditional-ConditionalWrapper-stories.a708da69.iframe.bundle.js.map