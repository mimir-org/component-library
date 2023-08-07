"use strict";(self.webpackChunk_mimirorg_component_library=self.webpackChunk_mimirorg_component_library||[]).push([[3595],{"./src/components/atoms/buttons/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),VisuallyHidden=__webpack_require__("./src/components/atoms/hidden/VisuallyHidden.tsx"),Icon=__webpack_require__("./src/components/atoms/media/Icon.ts"),Text=__webpack_require__("./src/components/atoms/text/Text.tsx"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),helpers=__webpack_require__("./src/components/core/theme/helpers/index.ts"),polished_esm=__webpack_require__("./node_modules/polished/dist/polished.esm.js");const getButtonColor=(theme,buttonColor)=>{switch(buttonColor){case"primary":return theme?.color.primary.base;case"success":return theme?.color.success.base;case"warning":return theme?.color.tertiary.base;case"danger":case"error":return theme?.color.error.base;default:return""}},ButtonContainer=styled_components_browser_esm.ZP.button`
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
`;Divider.defaultProps={orientation:"horizontal",decorative:!1}},"./src/components/atoms/flow/connectors/FlowConnectorComponent.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>FlowConnectorComponent});var esm=__webpack_require__("./node_modules/react-flow-renderer/dist/esm/index.js"),types=__webpack_require__("./src/components/core/types/index.ts"),icons=__webpack_require__("./src/components/icons/index.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const FlowHandleContainer=styled_components_browser_esm.ZP.div`
  display: flex;
  flex: 0 0 ${props=>props.connectorWidth}px;
  gap: 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 4px;
`,FlowHandleBox=styled_components_browser_esm.ZP.div`
  position: relative;
  line-height: 0;
  transition: top 0.2s ease-out, left 0.2s ease-out;
  display: ${props=>props.visible&&!0===props.visible?"block":"none"};

  top: ${props=>props.top};
  left: ${props=>props.left};
  transform: revert;

  width: fit-content;
  height: fit-content;
  padding: 0;
  margin: 0;

  .react-flow__handle-block {
    visibility: ${props=>props.visible?"visible":"hidden"};
    transition: top 0.2s ease-out, left 0.2s ease-out;
  }
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FlowConnectorComponent=props=>{const{connectors,direction,...delegated}=props,filteredConnectors=connectors?.filter((x=>x.direction===direction&&!x.hidden));return(0,jsx_runtime.jsx)(FlowHandleContainer,{...delegated,children:filteredConnectors&&filteredConnectors.map((x=>x.hidden?null:(0,jsx_runtime.jsx)(FlowHandleComponent,{handles:x.handles.filter((x=>!x.hidden)),connectors,direction,...delegated},`handle-${x.id}`)))})};FlowConnectorComponent.displayName="FlowConnectorComponent",FlowConnectorComponent.displayName="FlowConnectorComponent",FlowConnectorComponent.defaultProps={connectors:[],direction:types.u.Input,storybook:!1,connectorWidth:20,connectorHeight:20};const FlowHandleComponent=props=>{const{handles,connectorWidth,connectorHeight,storybook}=props;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:handles?.map((x=>{return(0,jsx_runtime.jsxs)(FlowHandleBox,{id:`handle-${x.id}`,top:(handle=x,side=props.side,"inside"===side&&"outside"===handle.side?"-24px":"outside"===side&&"inside"===handle.side?"24px":"0px"),left:"0px",visible:x.side===props.side,hidden:x.hidden,children:[(0,jsx_runtime.jsx)(icons.p7,{style:{fill:x.color},className:x.className,width:`${connectorWidth}px`,height:`${connectorHeight}px`}),!storybook&&(0,jsx_runtime.jsx)(esm.HH,{hidden:x.hidden,type:x.handleType,position:x.position,id:x.id,className:x.className})]},x.id);var handle,side}))})};FlowHandleComponent.displayName="FlowHandleComponent",FlowHandleComponent.defaultProps={handles:[],storybook:!1,connectorWidth:20,connectorHeight:20};try{FlowConnectorComponent.displayName="FlowConnectorComponent",FlowConnectorComponent.__docgenInfo={description:"A flow connector collection component.\nThe component is used to draw all connectors from a given list.\nIf the connector has property hidden, the connector will be removed from the list. The visible property is only visually\nhiding the connector with css.",displayName:"FlowConnectorComponent",props:{hidden:{defaultValue:null,description:"",name:"hidden",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"",name:"visible",required:!1,type:{name:"boolean"}},connectorWidth:{defaultValue:{value:"20"},description:"",name:"connectorWidth",required:!1,type:{name:"number"}},connectorHeight:{defaultValue:{value:"20"},description:"",name:"connectorHeight",required:!1,type:{name:"number"}},connectors:{defaultValue:{value:"[] as FlowConnector[]"},description:"",name:"connectors",required:!1,type:{name:"FlowConnector[]"}},direction:{defaultValue:{value:"ConnectorDirection.Input"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"}]}},side:{defaultValue:null,description:"",name:"side",required:!0,type:{name:"enum",value:[{value:'"inside"'},{value:'"outside"'}]}},storybook:{defaultValue:{value:"false"},description:"",name:"storybook",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/flow/connectors/FlowConnectorComponent.tsx#FlowConnectorComponent"]={docgenInfo:FlowConnectorComponent.__docgenInfo,name:"FlowConnectorComponent",path:"src/components/atoms/flow/connectors/FlowConnectorComponent.tsx#FlowConnectorComponent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/hidden/VisuallyHidden.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>VisuallyHidden});var _radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-visually-hidden/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const VisuallyHidden=({children,asChild})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_visually_hidden__WEBPACK_IMPORTED_MODULE_1__.f,{asChild,children});VisuallyHidden.displayName="VisuallyHidden";try{VisuallyHidden.displayName="VisuallyHidden",VisuallyHidden.__docgenInfo={description:"A component for including data without displaying it.\nA typical use case might be description text for icons that can only be read by screen readers.",displayName:"VisuallyHidden",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/hidden/VisuallyHidden.tsx#VisuallyHidden"]={docgenInfo:VisuallyHidden.__docgenInfo,name:"VisuallyHidden",path:"src/components/atoms/hidden/VisuallyHidden.tsx#VisuallyHidden"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zx:()=>Button.z,M2:()=>ConditionalWrapper.M,X6:()=>Heading.X,JO:()=>Icon.J,KS:()=>MotionPanel.K,SX:()=>PlainLink,xv:()=>Text.x,u:()=>Tooltip,TX:()=>VisuallyHidden.T});var Button=__webpack_require__("./src/components/atoms/buttons/Button.tsx"),ConditionalWrapper=__webpack_require__("./src/components/atoms/conditional/ConditionalWrapper.tsx"),VisuallyHidden=(__webpack_require__("./src/components/atoms/divider/Divider.ts"),__webpack_require__("./src/components/atoms/flow/connectors/FlowConnectorComponent.tsx"),__webpack_require__("./src/components/atoms/hidden/VisuallyHidden.tsx")),Icon=__webpack_require__("./src/components/atoms/media/Icon.ts"),MotionPanel=(__webpack_require__("./src/components/atoms/media/Symbol.tsx"),__webpack_require__("./src/components/atoms/media/Symbol.styled.ts"),__webpack_require__("./src/components/atoms/panel/MotionPanel.tsx")),dist=(__webpack_require__("./src/components/atoms/panel/ResizablePanel.tsx"),__webpack_require__("./node_modules/react-router-dom/dist/index.js")),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),helpers=__webpack_require__("./src/components/core/theme/helpers/index.ts");const PlainLink=(0,styled_components_browser_esm.ZP)(dist.rU)`
  color: inherit;
  text-decoration: inherit;

  :link,
  :hover {
    color: inherit;
    text-decoration: inherit;
  }

  ${helpers.bv};
`;try{PlainLink.displayName="PlainLink",PlainLink.__docgenInfo={description:"Removes styles from react router links.\nUseful when wrapping other elements with navigation semantics.",displayName:"PlainLink",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/plain-link/PlainLink.tsx#PlainLink"]={docgenInfo:PlainLink.__docgenInfo,name:"PlainLink",path:"src/components/atoms/plain-link/PlainLink.tsx#PlainLink"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__("./src/components/atoms/spinner/Spinner.tsx");var Heading=__webpack_require__("./src/components/atoms/text/Heading.tsx"),Text=__webpack_require__("./src/components/atoms/text/Text.tsx"),react_tooltip_dist=__webpack_require__("./node_modules/@radix-ui/react-tooltip/dist/index.mjs"),AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs");const TooltipContent=styled_components_browser_esm.ZP.div`
  padding: ${props=>props.theme.mimir.spacing.base} ${props=>props.theme.mimir.spacing.l};
  border-radius: ${props=>props.theme.mimir.border.radius.large};
  background-color: ${props=>props.theme.mimir.color.surface.inverse.base};
  color: ${props=>props.theme.mimir.color.surface.inverse.on};
  box-shadow: ${props=>props.theme.mimir.shadow.small};
  ${helpers.bv};
`,MotionTooltipContent=(0,motion.E)(TooltipContent);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tooltip=(0,react.forwardRef)(((props,ref)=>{const{children,content,placement,align,delay,offset,asChild,...delegated}=props,theme=(0,styled_components_browser_esm.Fg)(),containsTextOnly="string"==typeof content;return(0,jsx_runtime.jsx)("div",{ref,children:(0,jsx_runtime.jsxs)(react_tooltip_dist.fC,{disableHoverableContent:!0,delayDuration:delay,children:[(0,jsx_runtime.jsx)(react_tooltip_dist.xz,{asChild,children}),(0,jsx_runtime.jsx)(AnimatePresence.M,{children:(0,jsx_runtime.jsx)(react_tooltip_dist.h_,{children:(0,jsx_runtime.jsx)(react_tooltip_dist.VY,{asChild,avoidCollisions:!0,sideOffset:offset,side:placement,align,children:(0,jsx_runtime.jsx)(MotionTooltipContent,{...theme.mimir.animation.scale,...delegated,children:containsTextOnly?(0,jsx_runtime.jsx)(Text.x,{variant:"body-medium",children:content}):content})})})})]})})}));Tooltip.displayName="Tooltip",Tooltip.defaultProps={placement:"top",align:"center",delay:0,offset:8,asChild:!0};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"A generic tooltip for describing focusable elements.\nHandles focus management, collision detection, a11y tags and more.\n\nSee documentation link below for details.",displayName:"Tooltip",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},delay:{defaultValue:{value:"0"},description:"",name:"delay",required:!1,type:{name:"number"}},offset:{defaultValue:{value:"8"},description:"",name:"offset",required:!1,type:{name:"number"}},asChild:{defaultValue:{value:"true"},description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"src/components/atoms/tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/media/Icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Icon});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts");const Icon=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.img`
  display: inline-block;
  width: ${props=>props.size?`${props.size}px`:"1em"};
  height: ${props=>props.size?`${props.size}px`:"1em"};
  line-height: 1;
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.bv};
`},"./src/components/atoms/media/Symbol.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MN:()=>LogoBox,XQ:()=>SymbolImage,wX:()=>SymbolBox});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SymbolImage=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.img`
  max-height: 100%;
  pointer-events: none;
`,SymbolBox=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
  max-height: 30px;

  ${SymbolImage} {
    min-height: 30px;
  }
`,LogoBox=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.div`
  position: absolute;
  bottom: 0;
  height: 20px;
  width: 50px;
  align-self: flex-start;
  pointer-events: none;
  margin-left: 10px;

  img {
    min-height: 100%;
    filter: brightness(0%);
  }
`},"./src/components/atoms/media/Symbol.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Symbol});var _Symbol_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/atoms/media/Symbol.styled.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Symbol=({source,text})=>null==source?null:source.startsWith("http")?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Symbol_styled__WEBPACK_IMPORTED_MODULE_0__.XQ,{src:source,alt:text,draggable:"false"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Symbol_styled__WEBPACK_IMPORTED_MODULE_0__.XQ,{src:"data:image/svg+xml;base64,"+source,alt:text,draggable:"false"});Symbol.displayName="Symbol";try{Symbol.displayName="Symbol",Symbol.__docgenInfo={description:"",displayName:"Symbol",props:{source:{defaultValue:null,description:"",name:"source",required:!0,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/media/Symbol.tsx#Symbol"]={docgenInfo:Symbol.__docgenInfo,name:"Symbol",path:"src/components/atoms/media/Symbol.tsx#Symbol"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/panel/MotionPanel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>MotionPanel});var framer_motion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/framer-motion/dist/es/components/MotionConfig/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ResizablePanel__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/atoms/panel/ResizablePanel.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MotionPanel=props=>{const{header,open,duration,children,...delegated}=props,[expanded,setExpanded]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setExpanded(open)}),[open]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.A,{transition:{duration},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[header,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ResizablePanel__WEBPACK_IMPORTED_MODULE_1__.e,{duration,...delegated,children:expanded&&children})]})})};MotionPanel.displayName="MotionPanel",MotionPanel.displayName="MotionPanel";try{MotionPanel.displayName="MotionPanel",MotionPanel.__docgenInfo={description:"",displayName:"MotionPanel",props:{spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"Spacing"}},maxTrigger:{defaultValue:null,description:"",name:"maxTrigger",required:!1,type:{name:"boolean"}},duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"ReactNode"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/panel/MotionPanel.tsx#MotionPanel"]={docgenInfo:MotionPanel.__docgenInfo,name:"MotionPanel",path:"src/components/atoms/panel/MotionPanel.tsx#MotionPanel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/panel/ResizablePanel.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ResizablePanel});var AnimatePresence=__webpack_require__("./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs"),motion=__webpack_require__("./node_modules/framer-motion/dist/es/render/dom/motion.mjs"),web=__webpack_require__("./node_modules/react-use-measure/dist/web.js"),common=__webpack_require__("./src/components/core/services/common.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),helpers=__webpack_require__("./src/components/core/theme/helpers/index.ts");const ResizablePanelContainer=styled_components_browser_esm.ZP.div`
  position: relative;
  overflow: ${props=>props.maxTrigger?"auto":"hidden"};
  ${helpers.Fc};
`;ResizablePanelContainer.defaultProps={maxTrigger:!1};const MotionResizablePanelContainer=(0,motion.E)(ResizablePanelContainer);try{MotionResizablePanelContainer.displayName="MotionResizablePanelContainer",MotionResizablePanelContainer.__docgenInfo={description:"An animation wrapper for the ResizablePanelConatiner component",displayName:"MotionResizablePanelContainer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/panel/MotionPanel.styled.tsx#MotionResizablePanelContainer"]={docgenInfo:MotionResizablePanelContainer.__docgenInfo,name:"MotionResizablePanelContainer",path:"src/components/atoms/panel/MotionPanel.styled.tsx#MotionResizablePanelContainer"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ResizablePanel=({children,duration,maxHeight})=>{const[ref,{height}]=(0,web.Z)();let h=height,maxTrigger=!1;return null!=maxHeight&&null!=h&&height>=maxHeight&&(h=maxHeight,maxTrigger=!0),(0,jsx_runtime.jsx)(MotionResizablePanelContainer,{animate:{height:h||"auto"},maxTrigger,children:(0,jsx_runtime.jsx)(AnimatePresence.M,{initial:!1,children:(0,jsx_runtime.jsx)(motion.E.div,{initial:{opacity:0},animate:{opacity:1,transition:{duration:duration/2,delay:duration/2}},exit:{opacity:0,transition:{duration:duration/2}},children:(0,jsx_runtime.jsx)("div",{ref,style:{position:"absolute"},children})},JSON.stringify(children,(0,common.qM)()))})})};ResizablePanel.displayName="ResizablePanel";try{ResizablePanel.displayName="ResizablePanel",ResizablePanel.__docgenInfo={description:"",displayName:"ResizablePanel",props:{spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"Spacing"}},maxTrigger:{defaultValue:null,description:"",name:"maxTrigger",required:!1,type:{name:"boolean"}},duration:{defaultValue:null,description:"",name:"duration",required:!0,type:{name:"number"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/panel/ResizablePanel.tsx#ResizablePanel"]={docgenInfo:ResizablePanel.__docgenInfo,name:"ResizablePanel",path:"src/components/atoms/panel/ResizablePanel.tsx#ResizablePanel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/spinner/Spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Spinner});var CircleLoader=__webpack_require__("./node_modules/react-spinners/esm/CircleLoader.js"),ScaleLoader=__webpack_require__("./node_modules/react-spinners/esm/ScaleLoader.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const SpinnerContainer=styled_components_browser_esm.ZP.div`
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
`;Heading.displayName="Heading",Heading.defaultProps={useEllipsis:!1,ellipsisMaxLines:1};try{Heading.displayName="Heading",Heading.__docgenInfo={description:"A polymorphic component for heading elements",displayName:"Heading",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLHeadingElement | null) => void) | RefObject<HTMLHeadingElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"string"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"Spacing"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"string | number"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"string"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"string"}},wordBreak:{defaultValue:null,description:"",name:"wordBreak",required:!1,type:{name:"string"}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"display-large"'},{value:'"display-medium"'},{value:'"display-small"'},{value:'"headline-large"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"title-large"'},{value:'"title-medium"'},{value:'"title-small"'},{value:'"body-large"'},{value:'"body-medium"'},{value:'"body-small"'},{value:'"label-large"'},{value:'"label-medium"'},{value:'"label-small"'}]}},useEllipsis:{defaultValue:{value:"false"},description:"",name:"useEllipsis",required:!1,type:{name:"boolean"}},ellipsisMaxLines:{defaultValue:{value:"1"},description:"",name:"ellipsisMaxLines",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/text/Heading.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"src/components/atoms/text/Heading.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/atoms/text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts");const Text=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.p`
  ${({variant})=>(0,_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.qU)(variant)};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.Fc};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.o9};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.KK};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.KO};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.A2};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.bv};
`;Text.displayName="Text",Text.defaultProps={useEllipsis:!1,ellipsisMaxLines:1,htmlFor:""};try{Text.displayName="Text",Text.__docgenInfo={description:"A polymorphic text component for non-heading text",displayName:"Text",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},display:{defaultValue:null,description:"",name:"display",required:!1,type:{name:"string"}},overflow:{defaultValue:null,description:"",name:"overflow",required:!1,type:{name:"string"}},textOverflow:{defaultValue:null,description:"",name:"textOverflow",required:!1,type:{name:"string"}},visibility:{defaultValue:null,description:"",name:"visibility",required:!1,type:{name:"string"}},whiteSpace:{defaultValue:null,description:"",name:"whiteSpace",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"Spacing"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},fontStyle:{defaultValue:null,description:"",name:"fontStyle",required:!1,type:{name:"string"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"string | number"}},letterSpacing:{defaultValue:null,description:"",name:"letterSpacing",required:!1,type:{name:"string"}},lineHeight:{defaultValue:null,description:"",name:"lineHeight",required:!1,type:{name:"string"}},textAlign:{defaultValue:null,description:"",name:"textAlign",required:!1,type:{name:"string"}},textTransform:{defaultValue:null,description:"",name:"textTransform",required:!1,type:{name:"string"}},wordBreak:{defaultValue:null,description:"",name:"wordBreak",required:!1,type:{name:"string"}},font:{defaultValue:null,description:"",name:"font",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"display-large"'},{value:'"display-medium"'},{value:'"display-small"'},{value:'"headline-large"'},{value:'"headline-medium"'},{value:'"headline-small"'},{value:'"title-large"'},{value:'"title-medium"'},{value:'"title-small"'},{value:'"body-large"'},{value:'"body-medium"'},{value:'"body-small"'},{value:'"label-large"'},{value:'"label-medium"'},{value:'"label-small"'}]}},useEllipsis:{defaultValue:{value:"false"},description:"",name:"useEllipsis",required:!1,type:{name:"boolean"}},ellipsisMaxLines:{defaultValue:{value:"1"},description:"",name:"ellipsisMaxLines",required:!1,type:{name:"number"}},htmlFor:{defaultValue:{value:""},description:"",name:"htmlFor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/text/Text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/components/atoms/text/Text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/core/services/common.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Mc:()=>createId,fU:()=>forceDate,pu:()=>createNumberId,qM:()=>ignoreCircularReferences});const ignoreCircularReferences=()=>{const seen=new WeakSet;return(key,value)=>{if(!key.startsWith("_")){if("object"==typeof value&&null!==value){if(seen.has(value))return;seen.add(value)}return value}}},createId=()=>{let d=(new Date).getTime(),d2="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(c){let r=16*Math.random();return d>0?(r=(d+r)%16|0,d=Math.floor(d/16)):(r=(d2+r)%16|0,d2=Math.floor(d2/16)),("x"===c?r:3&r|8).toString(16)}))},createNumberId=(negative=!0)=>{const input=createId();let hash=0;const len=input.length;for(let i=0;i<len;i++)hash=(hash<<5)-hash+input.charCodeAt(i),hash|=0;return negative&&hash>0?-1*hash:hash},forceDate=value=>{if(null!=value){if("string"==typeof value)try{return new Date(value)}catch(error){return console.warn("Can't parse date string: ",value),new Date}return value}}},"./src/components/core/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>ConnectorDirection});let ConnectorDirection=function(ConnectorDirection){return ConnectorDirection[ConnectorDirection.Input=0]="Input",ConnectorDirection[ConnectorDirection.Output=1]="Output",ConnectorDirection[ConnectorDirection.Bidirectional=2]="Bidirectional",ConnectorDirection}({})}}]);
//# sourceMappingURL=3595.a7ad57d8.iframe.bundle.js.map