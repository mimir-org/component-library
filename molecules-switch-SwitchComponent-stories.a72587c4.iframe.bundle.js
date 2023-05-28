"use strict";(self.webpackChunk_mimirorg_component_library=self.webpackChunk_mimirorg_component_library||[]).push([[2968],{"./node_modules/@radix-ui/react-use-previous/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>$010c2913dbd2fe3d$export$5cae361ad82dce8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function $010c2913dbd2fe3d$export$5cae361ad82dce8b(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({value,previous:value});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>(ref.current.value!==value&&(ref.current.previous=ref.current.value,ref.current.value=value),ref.current.previous)),[value])}},"./src/components/molecules/switch/SwitchComponent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SwitchComponent_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),atoms=__webpack_require__("./src/components/atoms/index.ts"),Flexbox_styled=__webpack_require__("./src/components/layouts/Flexbox.styled.tsx"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_context_dist=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_use_previous_dist=__webpack_require__("./node_modules/@radix-ui/react-use-previous/dist/index.mjs"),react_use_size_dist=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs");const[$6be4966fd9bbc698$var$createSwitchContext,$6be4966fd9bbc698$export$cf7f5f17f69cbd43]=(0,react_context_dist.b)("Switch"),[$6be4966fd9bbc698$var$SwitchProvider,$6be4966fd9bbc698$var$useSwitchContext]=$6be4966fd9bbc698$var$createSwitchContext("Switch"),$6be4966fd9bbc698$export$b5d5cf8927ab7262=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,name,checked:checkedProp,defaultChecked,required,disabled,value="on",onCheckedChange,...switchProps}=props,[button,setButton]=(0,react.useState)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setButton(node))),hasConsumerStoppedPropagationRef=(0,react.useRef)(!1),isFormControl=!button||Boolean(button.closest("form")),[checked=!1,setChecked]=(0,react_use_controllable_state_dist.T)({prop:checkedProp,defaultProp:defaultChecked,onChange:onCheckedChange});return(0,react.createElement)($6be4966fd9bbc698$var$SwitchProvider,{scope:__scopeSwitch,checked,disabled},(0,react.createElement)(react_primitive_dist.WV.button,(0,esm_extends.Z)({type:"button",role:"switch","aria-checked":checked,"aria-required":required,"data-state":$6be4966fd9bbc698$var$getState(checked),"data-disabled":disabled?"":void 0,disabled,value},switchProps,{ref:composedRefs,onClick:(0,dist.M)(props.onClick,(event=>{setChecked((prevChecked=>!prevChecked)),isFormControl&&(hasConsumerStoppedPropagationRef.current=event.isPropagationStopped(),hasConsumerStoppedPropagationRef.current||event.stopPropagation())}))})),isFormControl&&(0,react.createElement)($6be4966fd9bbc698$var$BubbleInput,{control:button,bubbles:!hasConsumerStoppedPropagationRef.current,name,value,checked,required,disabled,style:{transform:"translateX(-100%)"}}))})),$6be4966fd9bbc698$export$4d07bf653ea69106=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeSwitch,...thumbProps}=props,context=$6be4966fd9bbc698$var$useSwitchContext("SwitchThumb",__scopeSwitch);return(0,react.createElement)(react_primitive_dist.WV.span,(0,esm_extends.Z)({"data-state":$6be4966fd9bbc698$var$getState(context.checked),"data-disabled":context.disabled?"":void 0},thumbProps,{ref:forwardedRef}))})),$6be4966fd9bbc698$var$BubbleInput=props=>{const{control,checked,bubbles=!0,...inputProps}=props,ref=(0,react.useRef)(null),prevChecked=(0,react_use_previous_dist.D)(checked),controlSize=(0,react_use_size_dist.t)(control);return(0,react.useEffect)((()=>{const input=ref.current,inputProto=window.HTMLInputElement.prototype,setChecked=Object.getOwnPropertyDescriptor(inputProto,"checked").set;if(prevChecked!==checked&&setChecked){const event=new Event("click",{bubbles});setChecked.call(input,checked),input.dispatchEvent(event)}}),[prevChecked,checked,bubbles]),(0,react.createElement)("input",(0,esm_extends.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:checked},inputProps,{tabIndex:-1,ref,style:{...props.style,...controlSize,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $6be4966fd9bbc698$var$getState(checked){return checked?"checked":"unchecked"}const $6be4966fd9bbc698$export$be92b6f5f03c0fe9=$6be4966fd9bbc698$export$b5d5cf8927ab7262,$6be4966fd9bbc698$export$6521433ed15a34db=$6be4966fd9bbc698$export$4d07bf653ea69106,SwitchRoot=(0,styled_components_browser_esm.ZP)($6be4966fd9bbc698$export$be92b6f5f03c0fe9)`
  all: unset;
  width: 42px;
  height: 25px;
  background-color: ${props=>props.theme.mimir.color.surface.variant.base};
  border-radius: 9999px;
  position: relative;
  box-shadow: ${props=>props.theme.mimir.shadow.small};
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  :hover {
    cursor: pointer;
    background-color: ${props=>props.theme.mimir.color.secondary.container?.base};
  }

  :focus {
    box-shadow: ${props=>props.theme.mimir.shadow.small};
  }
`,SwitchThumb=(0,styled_components_browser_esm.ZP)($6be4966fd9bbc698$export$6521433ed15a34db)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: ${props=>props.theme.mimir.color.text.on};
  border-radius: 9999px;
  box-shadow: ${props=>props.theme.mimir.shadow.small};
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(19px);
    background-color: ${props=>props.theme.mimir.color.primary.base};
  }
`;try{SwitchRoot.displayName="SwitchRoot",SwitchRoot.__docgenInfo={description:"",displayName:"SwitchRoot",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/switch/SwitchComponent.styled.tsx#SwitchRoot"]={docgenInfo:SwitchRoot.__docgenInfo,name:"SwitchRoot",path:"src/components/molecules/switch/SwitchComponent.styled.tsx#SwitchRoot"})}catch(__react_docgen_typescript_loader_error){}try{SwitchThumb.displayName="SwitchThumb",SwitchThumb.__docgenInfo={description:"",displayName:"SwitchThumb",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/switch/SwitchComponent.styled.tsx#SwitchThumb"]={docgenInfo:SwitchThumb.__docgenInfo,name:"SwitchThumb",path:"src/components/molecules/switch/SwitchComponent.styled.tsx#SwitchThumb"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SwitchComponent=props=>{const theme=(0,styled_components_browser_esm.Fg)(),[status,setStatus]=(0,react.useState)(props.checked);return(0,jsx_runtime.jsxs)(Flexbox_styled.D,{alignItems:"center",children:[(0,jsx_runtime.jsx)(atoms.xv,{htmlFor:"airplane-mode",as:"label",variant:"label-medium",spacing:{mr:theme.mimir.spacing.l},children:props.text}),(0,jsx_runtime.jsx)(SwitchRoot,{id:"airplane-mode",checked:status,onCheckedChange:status=>{setStatus(status),null!=props.onSwitchChange&&props.onSwitchChange(status)},children:(0,jsx_runtime.jsx)(SwitchThumb,{})})]})};SwitchComponent.displayName="SwitchComponent",SwitchComponent.displayName="SwitchComponent",SwitchComponent.defaultProps={text:"",checked:!1};try{SwitchComponent.displayName="SwitchComponent",SwitchComponent.__docgenInfo={description:"Component that displays a switch with label.",displayName:"SwitchComponent",props:{spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"Spacing"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:""},description:"",name:"text",required:!1,type:{name:"string"}},onSwitchChange:{defaultValue:null,description:"",name:"onSwitchChange",required:!1,type:{name:"((status: boolean) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/switch/SwitchComponent.tsx#SwitchComponent"]={docgenInfo:SwitchComponent.__docgenInfo,name:"SwitchComponent",path:"src/components/molecules/switch/SwitchComponent.tsx#SwitchComponent"})}catch(__react_docgen_typescript_loader_error){}const Default={args:{text:"Label text"}},SwitchComponent_stories={title:"Molecules/Switch",component:SwitchComponent};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    text: "Label text"\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/atoms/buttons/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),VisuallyHidden=__webpack_require__("./src/components/atoms/hidden/VisuallyHidden.tsx"),Icon=__webpack_require__("./src/components/atoms/media/Icon.ts"),Text=__webpack_require__("./src/components/atoms/text/Text.tsx"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),helpers=__webpack_require__("./src/components/core/theme/helpers/index.ts"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js");const getButtonColor=(theme,buttonColor)=>{switch(buttonColor){case"primary":return theme?.color.primary.base;case"success":return theme?.color.success.base;case"warning":return theme?.color.tertiary.base;case"danger":case"error":return theme?.color.error.base;default:return""}},ButtonContainer=styled_components_browser_esm.ZP.button`
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
`;ButtonContainer.defaultProps={variant:"filled",buttonColor:"primary"};const MotionButtonContainer=(0,motion.E)(ButtonContainer);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)(((props,ref)=>{const theme=(0,styled_components_browser_esm.Fg)(),{children,icon,iconPlacement,iconOnly,textVariant,buttonColor,...delegated}=props;return(0,jsx_runtime.jsxs)(MotionButtonContainer,{ref,iconOnly,iconPlacement,buttonColor,...theme.mimir.animation.buttonTap,...delegated,children:[icon&&iconOnly?(0,jsx_runtime.jsx)(VisuallyHidden.T,{children}):(0,jsx_runtime.jsx)(Text.x,{as:"span",variant:textVariant,children}),icon&&((0,react.isValidElement)(icon)?icon:(0,jsx_runtime.jsx)(Icon.J,{src:String(icon),alt:""}))]})}));Button.displayName="Button",Button.defaultProps={type:"button",iconPlacement:"right",textVariant:"body-small",buttonColor:"primary"};try{Button.displayName="Button",Button.__docgenInfo={description:"A button with different variants.\nA typical use case is in forms or navigation purposes.\noriginal component props with the props of the supplied element/component and change the underlying DOM node.",displayName:"Button",props:{flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string | number"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexFlow:{defaultValue:null,description:"",name:"flexFlow",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"Spacing"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"filled"'},{value:'"outlined"'},{value:'"round"'}]}},iconPlacement:{defaultValue:{value:"right"},description:"",name:"iconPlacement",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},iconOnly:{defaultValue:null,description:"",name:"iconOnly",required:!1,type:{name:"boolean"}},buttonColor:{defaultValue:{value:"primary"},description:"",name:"buttonColor",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'},{value:'"success"'},{value:'"warning"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},textVariant:{defaultValue:{value:"body-small"},description:"",name:"textVariant",required:!1,type:{name:"enum",value:[{value:'"display-large"'},{value:'"display-medium"'},{value:'"display-small"'},{value:'"headline-large"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"title-large"'},{value:'"title-medium"'},{value:'"title-small"'},{value:'"body-large"'},{value:'"body-medium"'},{value:'"body-small"'},{value:'"label-large"'},{value:'"label-medium"'},{value:'"label-small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/buttons/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/atoms/buttons/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/conditional/ConditionalWrapper.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>ConditionalWrapper});const ConditionalWrapper=({condition,wrapper,children})=>condition?wrapper(children):children;try{ConditionalWrapper.displayName="ConditionalWrapper",ConditionalWrapper.__docgenInfo={description:"Component which facilities conditional wrapping of its children",displayName:"ConditionalWrapper",props:{condition:{defaultValue:null,description:"",name:"condition",required:!1,type:{name:"boolean"}},wrapper:{defaultValue:null,description:"",name:"wrapper",required:!0,type:{name:"(children: ReactElement<any, string | JSXElementConstructor<any>>) => ReactElement<any, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/conditional/ConditionalWrapper.tsx#ConditionalWrapper"]={docgenInfo:ConditionalWrapper.__docgenInfo,name:"ConditionalWrapper",path:"src/components/atoms/conditional/ConditionalWrapper.tsx#ConditionalWrapper"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/divider/Divider.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>Divider});var _radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-separator/dist/index.mjs"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Divider=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP)(_radix_ui_react_separator__WEBPACK_IMPORTED_MODULE_1__.f)`
  background-color: ${props=>props.color?props.color:props.theme.mimir.color.primary.base};
  margin: 0 auto;
  height: 1px;
  width: 100%;
  flex-shrink: 0;

  ${props=>"vertical"===props.orientation&&styled_components__WEBPACK_IMPORTED_MODULE_0__.iv`
      height: 100%;
      margin: auto 0;
      width: 1px;
    `}
`;Divider.defaultProps={orientation:"horizontal",decorative:!1}},"./src/components/atoms/hidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>VisuallyHidden});var _radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-visually-hidden/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const VisuallyHidden=({children,asChild})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_1__.f,{asChild,children});VisuallyHidden.displayName="VisuallyHidden";try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"A component for including data without displaying it.\nA typical use case might be description text for icons that can only be read by screen readers.",displayName:"VisuallyHidden",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/hidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/atoms/hidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button.z,M2:()=>ConditionalWrapper.M,X6:()=>Heading.X,JO:()=>Icon.J,SX:()=>PlainLink,xv:()=>Text.x,u:()=>Tooltip,TX:()=>VisuallyHidden.T});var Button=__webpack_require__("./src/components/atoms/buttons/Button.tsx"),ConditionalWrapper=__webpack_require__("./src/components/atoms/conditional/ConditionalWrapper.tsx"),VisuallyHidden=(__webpack_require__("./src/components/atoms/divider/Divider.ts"),__webpack_require__("./src/components/atoms/hidden/VisuallyHidden.tsx")),Icon=__webpack_require__("./src/components/atoms/media/Icon.ts"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),helpers=__webpack_require__("./src/components/core/theme/helpers/index.ts");const PlainLink=(0,styled_components_browser_esm.ZP)(dist.rU)`
  color: inherit;
  text-decoration: inherit;

  :link,
  :hover {
    color: inherit;
    text-decoration: inherit;
  }

  ${helpers.bv};
`;try{PlainLink.displayName="PlainLink",PlainLink.__docgenInfo={description:"Removes styles from react router links.\nUseful when wrapping other elements with navigation semantics.",displayName:"PlainLink",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/plain-link/PlainLink.tsx#PlainLink"]={docgenInfo:PlainLink.__docgenInfo,name:"PlainLink",path:"src/components/atoms/plain-link/PlainLink.tsx#PlainLink"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/atoms/spinner/Spinner.tsx");var Heading=__webpack_require__("./src/components/atoms/text/Heading.tsx"),Text=__webpack_require__("./src/components/atoms/text/Text.tsx"),react_tooltip_dist=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs");const TooltipContent=styled_components_browser_esm.ZP.div`
  padding: ${props=>props.theme.mimir.spacing.base} ${props=>props.theme.mimir.spacing.l};
  border-radius: ${props=>props.theme.mimir.border.radius.large};
  background-color: ${props=>props.theme.mimir.color.surface.inverse.base};
  color: ${props=>props.theme.mimir.color.surface.inverse.on};
  box-shadow: ${props=>props.theme.mimir.shadow.small};
  ${helpers.bv};
`,MotionTooltipContent=(0,motion.E)(TooltipContent);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tooltip=(0,react.forwardRef)((({children,content,placement,align,delay,offset,asChild,...delegated},ref)=>{const theme=(0,styled_components_browser_esm.Fg)(),containsTextOnly="string"==typeof content;return(0,jsx_runtime.jsx)("div",{ref,children:(0,jsx_runtime.jsxs)(react_tooltip_dist.fC,{disableHoverableContent:!0,delayDuration:delay,children:[(0,jsx_runtime.jsx)(react_tooltip_dist.xz,{asChild,children}),(0,jsx_runtime.jsx)(AnimatePresence.M,{children:(0,jsx_runtime.jsx)(react_tooltip_dist.h_,{children:(0,jsx_runtime.jsx)(react_tooltip_dist.VY,{asChild,avoidCollisions:!0,sideOffset:offset,side:placement,align,children:(0,jsx_runtime.jsx)(MotionTooltipContent,{...theme.mimir.animation.scale,...delegated,children:containsTextOnly?(0,jsx_runtime.jsx)(Text.x,{variant:"body-medium",children:content}):content})})})})]})})}));Tooltip.displayName="Tooltip",Tooltip.defaultProps={placement:"top",align:"center",delay:0,offset:8,asChild:!0};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"A generic tooltip for describing focusable elements.\nHandles focus management, collision detection, a11y tags and more.\n\nSee documentation link below for details.",displayName:"Tooltip",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},delay:{defaultValue:{value:"0"},description:"",name:"delay",required:!1,type:{name:"number"}},offset:{defaultValue:{value:"8"},description:"",name:"offset",required:!1,type:{name:"number"}},asChild:{defaultValue:{value:"true"},description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/atoms/tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/media/Icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts");const Icon=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.img`
  display: inline-block;
  width: ${props=>props.size?`${props.size}px`:"1em"};
  height: ${props=>props.size?`${props.size}px`:"1em"};
  line-height: 1;
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.bv};
`},"./src/components/atoms/spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Spinner});var CircleLoader=__webpack_require__("./node_modules/react-spinners/esm/CircleLoader.js"),ScaleLoader=__webpack_require__("./node_modules/react-spinners/esm/ScaleLoader.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SpinnerContainer=styled_components_browser_esm.ZP.div`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
  width: 50px;
  height: 50px;
`,SpinnerOverlay=styled_components_browser_esm.ZP.div`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 901;
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Spinner=({variant,disabled})=>{const theme=(0,styled_components_browser_esm.Fg)();return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:!disabled&&(0,jsx_runtime.jsx)(SpinnerOverlay,{children:(0,jsx_runtime.jsxs)(SpinnerContainer,{children:[variant&&"circle"===variant&&(0,jsx_runtime.jsx)(CircleLoader.Z,{color:theme.mimir.color.primary.base}),variant&&"scale"===variant&&(0,jsx_runtime.jsx)(ScaleLoader.Z,{color:theme.mimir.color.primary.base})]})})})};Spinner.displayName="Spinner",Spinner.defaultValues={variant:"circle",disabled:!0};try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"Component the draws a spinner on screen",displayName:"Spinner",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"scale"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/spinner/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/atoms/spinner/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/text/Heading.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>Heading});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts");const Heading=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.h1`
  ${({variant})=>(0,_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.qU)(variant)};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.Fc};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.o9};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.KK};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.KO};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.A2};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.bv};
`;Heading.displayName="Heading",Heading.defaultProps={useEllipsis:!1,ellipsisMaxLines:1};try{Heading.displayName="Heading",Heading.__docgenInfo={description:"A polymorphic component for heading elements",displayName:"Heading",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"string"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"Spacing"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"display-large"'},{value:'"display-medium"'},{value:'"display-small"'},{value:'"headline-large"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"title-large"'},{value:'"title-medium"'},{value:'"title-small"'},{value:'"body-large"'},{value:'"body-medium"'},{value:'"body-small"'},{value:'"label-large"'},{value:'"label-medium"'},{value:'"label-small"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"string | number"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"string"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"string"}},wordBreak:{defaultValue:null,description:"",name:"wordBreak",required:!1,type:{name:"string"}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"string"}},useEllipsis:{defaultValue:{value:"false"},description:"",name:"useEllipsis",required:!1,type:{name:"boolean"}},ellipsisMaxLines:{defaultValue:{value:"1"},description:"",name:"ellipsisMaxLines",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/text/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/atoms/text/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.p`
  ${({variant})=>(0,_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.qU)(variant)};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.Fc};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.o9};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.KK};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.KO};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.A2};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.bv};
`;Text.displayName="Text",Text.defaultProps={useEllipsis:!1,ellipsisMaxLines:1,htmlFor:""};try{Text.displayName="Text",Text.__docgenInfo={description:"A polymorphic text component for non-heading text",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"string"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"string"}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"string"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"string"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"Spacing"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"display-large"'},{value:'"display-medium"'},{value:'"display-small"'},{value:'"headline-large"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"title-large"'},{value:'"title-medium"'},{value:'"title-small"'},{value:'"body-large"'},{value:'"body-medium"'},{value:'"body-small"'},{value:'"label-large"'},{value:'"label-medium"'},{value:'"label-small"'}]}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"string | number"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"string"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"string"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"string"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"string"}},wordBreak:{defaultValue:null,description:"",name:"wordBreak",required:!1,type:{name:"string"}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"string"}},useEllipsis:{defaultValue:{value:"false"},description:"",name:"useEllipsis",required:!1,type:{name:"boolean"}},ellipsisMaxLines:{defaultValue:{value:"1"},description:"",name:"ellipsisMaxLines",required:!1,type:{name:"number"}},htmlFor:{defaultValue:{value:""},description:"",name:"htmlFor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/atoms/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/layouts/Flexbox.styled.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>Flexbox});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts"),framer_motion__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs");const Flexbox=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.div`
  display: flex;
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.T_};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.Zv};
`,MotionFlexbox=(0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.E)(Flexbox);try{Flexbox.displayName="Flexbox",Flexbox.__docgenInfo={description:"A polymorphic layout component for flexbox behaviour.",displayName:"Flexbox",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string | number"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexFlow:{defaultValue:null,description:"",name:"flexFlow",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layouts/Flexbox.styled.tsx#Flexbox"]={docgenInfo:Flexbox.__docgenInfo,name:"Flexbox",path:"src/components/layouts/Flexbox.styled.tsx#Flexbox"})}catch(__react_docgen_typescript_loader_error){}try{MotionFlexbox.displayName="MotionFlexbox",MotionFlexbox.__docgenInfo={description:"An animation wrapper for the Flexbox component",displayName:"MotionFlexbox",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/layouts/Flexbox.styled.tsx#MotionFlexbox"]={docgenInfo:MotionFlexbox.__docgenInfo,name:"MotionFlexbox",path:"src/components/layouts/Flexbox.styled.tsx#MotionFlexbox"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=molecules-switch-SwitchComponent-stories.a72587c4.iframe.bundle.js.map