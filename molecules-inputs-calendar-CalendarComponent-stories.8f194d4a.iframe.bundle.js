"use strict";(self.webpackChunk_mimirorg_component_library=self.webpackChunk_mimirorg_component_library||[]).push([[6577],{"./src/components/molecules/inputs/calendar/CalendarComponent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Compact:()=>Compact,Default:()=>Default,Disabled:()=>Disabled,WithInputHidden:()=>WithInputHidden,WithNoDefaultValue:()=>WithNoDefaultValue,WithReadOnly:()=>WithReadOnly,WithReset:()=>WithReset,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CalendarComponent_stories});var Delete_esm=__webpack_require__("./node_modules/@styled-icons/material-outlined/Delete/Delete.esm.js"),CalendarMonth_esm=__webpack_require__("./node_modules/@styled-icons/material-outlined/CalendarMonth/CalendarMonth.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),atoms=__webpack_require__("./src/components/atoms/index.ts"),services=__webpack_require__("./src/components/core/services/index.ts"),Popover=__webpack_require__("./src/components/molecules/popover/Popover.tsx"),helpers=__webpack_require__("./src/components/core/theme/helpers/index.ts"),Input_styled=__webpack_require__("./src/components/molecules/inputs/input/Input.styled.ts");const CalendarComponentContainer=styled_components_browser_esm.ZP.div`
  display: flex;

  ${({variant})=>{if("compact"===variant)return styled_components_browser_esm.iv`
  height: 24px;
`}};

  ${helpers.Zv};
  ${helpers.bv};
  ${helpers.Fc};
`;CalendarComponentContainer.defaultProps={variant:"standard"};const CalendarComponentInput=(0,styled_components_browser_esm.ZP)(Input_styled.f)`
  height: 100%;
  width: 100%;

  :disabled {
    color: ${props=>props.theme.mimir.color.surface.variant.on};
    background-color: ${props=>props.theme.mimir.color.surface.variant.base};
  }

  ${({theme,isDisabled})=>isDisabled&&styled_components_browser_esm.iv`
      color: ${theme.mimir.color.surface.variant.on} !important;
      background-color: ${theme.mimir.color.outline.base} !important;
    `};
`;try{CalendarComponentContainer.displayName="CalendarComponentContainer",CalendarComponentContainer.__docgenInfo={description:"",displayName:"CalendarComponentContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignContent:{defaultValue:null,description:"",name:"alignContent",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string | number"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexFlow:{defaultValue:null,description:"",name:"flexFlow",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"Spacing"}},variant:{defaultValue:{value:"standard"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"compact"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/inputs/calendar/CalendarComponent.styled.tsx#CalendarComponentContainer"]={docgenInfo:CalendarComponentContainer.__docgenInfo,name:"CalendarComponentContainer",path:"src/components/molecules/inputs/calendar/CalendarComponent.styled.tsx#CalendarComponentContainer"})}catch(__react_docgen_typescript_loader_error){}try{CalendarComponentInput.displayName="CalendarComponentInput",CalendarComponentInput.__docgenInfo={description:'The input for the calendar is always disabled, since the user interacts with the calendar through a button and modal.\nTo explicitly style the input when the "whole" calendar is disabled we use a custom isDisabled property for the input.',displayName:"CalendarComponentInput",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement> | null"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},iconPlacement:{defaultValue:null,description:"",name:"iconPlacement",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},isDisabled:{defaultValue:null,description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/inputs/calendar/CalendarComponent.styled.tsx#CalendarComponentInput"]={docgenInfo:CalendarComponentInput.__docgenInfo,name:"CalendarComponentInput",path:"src/components/molecules/inputs/calendar/CalendarComponent.styled.tsx#CalendarComponentInput"})}catch(__react_docgen_typescript_loader_error){}const CalendarContentContainer=styled_components_browser_esm.ZP.div`
  .react-calendar {
    width: 350px;
    max-width: 100%;
    background-color: inherit;
    border: none;
    ${(0,helpers.qU)("body-large")};
    border-radius: ${props=>props.theme.mimir.border.radius.medium};
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
    border-radius: ${props=>props.theme.mimir.border.radius.medium};
  }
  .react-calendar__navigation button:disabled {
    background-color: ${props=>props.theme.mimir.color.outline.base};
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: ${props=>props.theme.mimir.color.secondary.container?.base};
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
    abbr {
      text-decoration: none;
    }
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    padding: ${props=>props.theme.mimir.spacing.l};
    background: none;
    text-align: center;
    line-height: 16px;
    border-radius: ${props=>props.theme.mimir.border.radius.medium};
  }
  .react-calendar__tile:disabled {
    background-color: ${props=>props.theme.mimir.color.outline.base};
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: ${props=>props.theme.mimir.color.secondary.container?.base};
  }
  .react-calendar__tile--now {
    background-color: ${props=>props.theme.mimir.color.secondary.container?.base};
    color: ${props=>props.theme.mimir.color.text.base};
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background-color: ${props=>props.theme.mimir.color.secondary.container?.base};
  }
  .react-calendar__tile--hasActive {
    background: ${props=>props.theme.mimir.color.tertiary.container?.base};
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background-color: ${props=>props.theme.mimir.color.secondary.container?.base};
  }
  .react-calendar__tile--active {
    background-color: ${props=>props.theme.mimir.color.tertiary.container?.base};
    color: ${props=>props.theme.mimir.color.text.base};
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: ${props=>props.theme.mimir.color.secondary.container?.base};
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: ${props=>props.theme.mimir.color.surface.variant.base};
  }
`;try{CalendarContentContainer.displayName="CalendarContentContainer",CalendarContentContainer.__docgenInfo={description:"",displayName:"CalendarContentContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/inputs/calendar/components/CalendarContent.styled.tsx#CalendarContentContainer"]={docgenInfo:CalendarContentContainer.__docgenInfo,name:"CalendarContentContainer",path:"src/components/molecules/inputs/calendar/components/CalendarContent.styled.tsx#CalendarContentContainer"})}catch(__react_docgen_typescript_loader_error){}var Calendar=__webpack_require__("./node_modules/react-calendar/dist/esm/Calendar.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CalendarContent=(0,react.forwardRef)(((props,ref)=>{const{value,onItemChange}=props;return(0,jsx_runtime.jsx)(CalendarContentContainer,{children:(0,jsx_runtime.jsx)(Calendar.Z,{locale:"no",inputRef:ref,onChange:value=>onItemChange(value??void 0),value:value??void 0})})}));CalendarContent.displayName="CalendarContent";try{CalendarContent.displayName="CalendarContent",CalendarContent.__docgenInfo={description:"",displayName:"CalendarContent",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | Date | null | undefined"}},onItemChange:{defaultValue:null,description:"",name:"onItemChange",required:!0,type:{name:"(item: Date | undefined) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/inputs/calendar/components/CalendarContent.tsx#CalendarContent"]={docgenInfo:CalendarContent.__docgenInfo,name:"CalendarContent",path:"src/components/molecules/inputs/calendar/components/CalendarContent.tsx#CalendarContent"})}catch(__react_docgen_typescript_loader_error){}const CalendarComponent=(0,react.forwardRef)(((props,ref)=>{const{icon,onChange,value,placeholder,disabled,reset,inputHidden,iconSize,buttonHeight,...rest}=props,popoverButtonRef=(0,react.useRef)(null),theme=(0,styled_components_browser_esm.Fg)(),[datevalue,setDateValue]=(0,react.useState)((0,services.fU)(value));return(0,jsx_runtime.jsxs)(CalendarComponentContainer,{...rest,children:[(0,jsx_runtime.jsx)(CalendarComponentInput,{type:inputHidden?"hidden":"text",placeholder,value:datevalue?.toLocaleDateString("no",{weekday:"short",year:"numeric",month:"short",day:"2-digit"})??"",disabled:!0,isDisabled:disabled}),reset&&(0,jsx_runtime.jsx)(atoms.zx,{spacing:{ml:theme.mimir.spacing.s},icon:null!=icon?icon:(0,jsx_runtime.jsx)(Delete_esm.H,{size:iconSize}),iconOnly:!0,variant:"outlined",disabled,onClick:()=>{setDateValue(void 0),null!=onChange&&onChange(void 0)},height:buttonHeight,children:"Kalender"}),(0,jsx_runtime.jsx)(Popover.J,{content:(0,jsx_runtime.jsx)(CalendarContent,{onItemChange:value=>{if(null!=value&&void 0!==value){const now=new Date;value.setHours(now.getHours()),value.setMinutes(now.getMinutes()),value.setSeconds(now.getSeconds()),setDateValue(value),null!=onChange&&onChange(value)}else setDateValue(value),null!=onChange&&onChange(value);popoverButtonRef.current?.click()},value:null!=datevalue?datevalue:void 0,ref}),children:(0,jsx_runtime.jsx)(atoms.zx,{spacing:{ml:theme.mimir.spacing.s},icon:null!=icon?icon:(0,jsx_runtime.jsx)(CalendarMonth_esm.C,{size:iconSize}),iconOnly:!0,variant:"outlined",disabled,ref:popoverButtonRef,height:buttonHeight,children:"Kalender"})})]})}));CalendarComponent.displayName="CalendarComponent",CalendarComponent.defaultProps={alignItems:"center",alignContent:"center",value:void 0,placeholder:"The date is not set",disabled:!1,reset:!1,inputHidden:!1,iconSize:24,buttonHeight:"32"};try{CalendarComponent.displayName="CalendarComponent",CalendarComponent.__docgenInfo={description:"Component that displays a calendar button, field and calendar popover.",displayName:"CalendarComponent",props:{flexDirection:{defaultValue:null,description:"",name:"flexDirection",required:!1,type:{name:"string"}},flexWrap:{defaultValue:null,description:"",name:"flexWrap",required:!1,type:{name:"string"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"string"}},alignItems:{defaultValue:{value:"center"},description:"",name:"alignItems",required:!1,type:{name:"string"}},alignContent:{defaultValue:{value:"center"},description:"",name:"alignContent",required:!1,type:{name:"string"}},order:{defaultValue:null,description:"",name:"order",required:!1,type:{name:"string"}},flex:{defaultValue:null,description:"",name:"flex",required:!1,type:{name:"string | number"}},flexGrow:{defaultValue:null,description:"",name:"flexGrow",required:!1,type:{name:"string"}},flexShrink:{defaultValue:null,description:"",name:"flexShrink",required:!1,type:{name:"string"}},flexFlow:{defaultValue:null,description:"",name:"flexFlow",required:!1,type:{name:"string"}},alignSelf:{defaultValue:null,description:"",name:"alignSelf",required:!1,type:{name:"string"}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},spacing:{defaultValue:null,description:"",name:"spacing",required:!1,type:{name:"Spacing"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"compact"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},value:{defaultValue:{value:"undefined"},description:"",name:"value",required:!1,type:{name:"string | Date | null"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},reset:{defaultValue:{value:"false"},description:"",name:"reset",required:!1,type:{name:"boolean"}},inputHidden:{defaultValue:{value:"false"},description:"",name:"inputHidden",required:!1,type:{name:"boolean"}},iconSize:{defaultValue:{value:"24"},description:"",name:"iconSize",required:!1,type:{name:"number"}},buttonHeight:{defaultValue:{value:"32"},description:"",name:"buttonHeight",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/inputs/calendar/CalendarComponent.tsx#CalendarComponent"]={docgenInfo:CalendarComponent.__docgenInfo,name:"CalendarComponent",path:"src/components/molecules/inputs/calendar/CalendarComponent.tsx#CalendarComponent"})}catch(__react_docgen_typescript_loader_error){}const meta={title:"Molecules/Calendar",component:CalendarComponent},Default={args:{value:new Date,placeholder:"This is the calendar placeholder",variant:"standard"}},Compact={args:{value:new Date,placeholder:"This is the calendar placeholder",variant:"compact"}},WithNoDefaultValue={args:{...Default.args,value:null}},WithReadOnly={args:{...Default.args,disabled:!0}},WithReset={args:{...Default.args,disabled:!1,reset:!0}},WithInputHidden={args:{...Default.args,disabled:!1,reset:!0,inputHidden:!0}},Disabled={args:{...Default.args,disabled:!0}},CalendarComponent_stories=meta;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    value: new Date(),\n    placeholder: "This is the calendar placeholder",\n    variant: "standard"\n  }\n}',...Default.parameters?.docs?.source}}},Compact.parameters={...Compact.parameters,docs:{...Compact.parameters?.docs,source:{originalSource:'{\n  args: {\n    value: new Date(),\n    placeholder: "This is the calendar placeholder",\n    variant: "compact"\n  }\n}',...Compact.parameters?.docs?.source}}},WithNoDefaultValue.parameters={...WithNoDefaultValue.parameters,docs:{...WithNoDefaultValue.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    value: null\n  }\n}",...WithNoDefaultValue.parameters?.docs?.source}}},WithReadOnly.parameters={...WithReadOnly.parameters,docs:{...WithReadOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    disabled: true\n  }\n}",...WithReadOnly.parameters?.docs?.source}}},WithReset.parameters={...WithReset.parameters,docs:{...WithReset.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    disabled: false,\n    reset: true\n  }\n}",...WithReset.parameters?.docs?.source}}},WithInputHidden.parameters={...WithInputHidden.parameters,docs:{...WithInputHidden.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    disabled: false,\n    reset: true,\n    inputHidden: true\n  }\n}",...WithInputHidden.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Compact","WithNoDefaultValue","WithReadOnly","WithReset","WithInputHidden","Disabled"]},"./src/components/molecules/inputs/input/Input.styled.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>InputIconContainer,f:()=>InputContainer});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts");const InputContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.input`
  height: 100%;
  width: 100%;

  border: 1px solid ${props=>props.theme.mimir.color.outline.base};
  border-radius: ${props=>props.theme.mimir.border.radius.medium};
  padding: ${props=>props.theme.mimir.spacing.base} ${props=>props.theme.mimir.spacing.l};
  padding-right: ${props=>props.icon&&"right"===props.iconPlacement&&props.theme.mimir.spacing.multiple(6)};
  padding-left: ${props=>props.icon&&"left"===props.iconPlacement&&props.theme.mimir.spacing.multiple(6)};

  background-color: ${props=>props.theme.mimir.color.pure.base};
  color: ${props=>props.theme.mimir.color.background.on};

  :disabled {
    color: ${props=>props.theme.mimir.color.surface.variant.on};
    background-color: ${props=>props.theme.mimir.color.outline.base};
  }

  box-sizing: border-box;

  ${(0,_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.qU)("body-large")};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.bv};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.W$};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.T_};
`,InputIconContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.span`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: ${props=>props.icon&&"left"===props.iconPlacement&&props.theme.mimir.spacing.xl};
  right: ${props=>props.icon&&"right"===props.iconPlacement&&props.theme.mimir.spacing.xl};
  color: ${props=>props.theme.mimir.color.primary.base};
  line-height: 0;

  img,
  svg {
    width: 24px;
    height: 24px;
  }
`},"./src/components/molecules/popover/Popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Popover});var dist=__webpack_require__("./node_modules/@radix-ui/react-popover/dist/index.mjs"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),atoms=__webpack_require__("./src/components/atoms/index.ts"),helpers=__webpack_require__("./src/components/core/theme/helpers/index.ts");const PopoverContent=styled_components_browser_esm.ZP.div`
  padding: ${props=>props.theme.mimir.spacing.xl};
  border-radius: ${props=>props.theme.mimir.border.radius.large};
  background-color: ${props=>(0,helpers.W7)(props.theme.mimir.color.surface.base,.98)};
  color: ${props=>props.theme.mimir.color.surface.on};
  box-shadow: ${props=>props.theme.mimir.shadow.small};
  ${helpers.o9};
  ${helpers.bv};
  ${helpers.T_};
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Popover=({children,content,onOpenChange,placement="top",align="center",offset=8,...delegated})=>{const theme=(0,styled_components_browser_esm.Fg)(),containsTextOnly="string"==typeof content;return(0,jsx_runtime.jsxs)(dist.fC,{onOpenChange,children:[(0,jsx_runtime.jsx)(dist.xz,{asChild:!0,children}),(0,jsx_runtime.jsx)(dist.h_,{children:(0,jsx_runtime.jsx)(dist.VY,{asChild:!0,avoidCollisions:!0,sideOffset:offset,side:placement,align,children:(0,jsx_runtime.jsx)(PopoverContent,{...theme.mimir.animation.scale,...delegated,children:containsTextOnly?(0,jsx_runtime.jsx)(atoms.xv,{variant:"body-medium",textAlign:"center",children:content}):content})})})]})};Popover.displayName="Popover";try{Popover.displayName="Popover",Popover.__docgenInfo={description:"A generic popover for providing focusable elements with extra information.\nHandles focus management, collision detection, a11y tags and more.\n\nSee documentation link below for details.",displayName:"Popover",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"string"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"string"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"string"}},boxSizing:{defaultValue:null,description:"",name:"boxSizing",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"(() => void)"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},align:{defaultValue:{value:"center"},description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"start"'},{value:'"end"'}]}},offset:{defaultValue:{value:"8"},description:"",name:"offset",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"src/components/molecules/popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=molecules-inputs-calendar-CalendarComponent-stories.8f194d4a.iframe.bundle.js.map