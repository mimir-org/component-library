"use strict";(self.webpackChunk_mimirorg_component_library=self.webpackChunk_mimirorg_component_library||[]).push([[7429],{"./src/components/molecules/form/FormFieldset.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FormFieldset_stories});var FormField_stories=__webpack_require__("./src/components/molecules/form/FormField.stories.tsx"),FormFieldset=__webpack_require__("./src/components/molecules/form/FormFieldset.ts");const FormLegend=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").ZP.legend`
  color: ${props=>null!=props.color?props.color:props.theme.mimir.color.text.on};
  background-color: ${props=>null!=props.backgroundColor?props.backgroundColor:props.theme.mimir.color.primary.base};
  padding: ${props=>props.theme.mimir.spacing.s} ${props=>props.theme.mimir.spacing.l};
  padding-top: ${props=>props.theme.mimir.spacing.s};
  margin-bottom: ${props=>props.theme.mimir.spacing.xl};
  border-radius: ${props=>props.theme.mimir.border.radius.small};
  box-shadow: ${props=>props.theme.mimir.shadow.medium};
`;var FormField=__webpack_require__("./src/components/molecules/form/FormField.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"Molecules/FormFieldset",component:FormFieldset.C},Default={args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(FormLegend,{children:"This is a legend"}),(0,jsx_runtime.jsx)(FormField.W,{...FormField_stories.Default.args}),(0,jsx_runtime.jsx)(FormField.W,{...FormField_stories.Default.args}),(0,jsx_runtime.jsx)(FormField.W,{...FormField_stories.Default.args})]})}},WithError={args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(FormLegend,{children:"This is a legend"}),(0,jsx_runtime.jsx)(FormField.W,{...FormField_stories.Default.args}),(0,jsx_runtime.jsx)(FormField.W,{...FormField_stories.WithError.args}),(0,jsx_runtime.jsx)(FormField.W,{...FormField_stories.Default.args}),(0,jsx_runtime.jsx)(FormField.W,{...FormField_stories.WithError.args})]})}},FormFieldset_stories=meta;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\r\n        <FormLegend>This is a legend</FormLegend>\r\n        <FormField {...FormFieldStory.args} />\r\n        <FormField {...FormFieldStory.args} />\r\n        <FormField {...FormFieldStory.args} />\r\n      </>\n  }\n}",...Default.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: <>\r\n        <FormLegend>This is a legend</FormLegend>\r\n        <FormField {...FormFieldStory.args} />\r\n        <FormField {...FormFieldWithErrorStory.args} />\r\n        <FormField {...FormFieldStory.args} />\r\n        <FormField {...FormFieldWithErrorStory.args} />\r\n      </>\n  }\n}",...WithError.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithError"]},"./src/components/molecules/form/FormFieldset.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>FormFieldset});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts");const FormFieldset=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.fieldset`
  display: flex;
  gap: ${props=>props.theme.mimir.spacing.xxl};

  padding: ${props=>props.theme.mimir.spacing.xl} ${props=>props.theme.mimir.spacing.xl}
    ${props=>props.theme.mimir.spacing.multiple(6)};

  border: 0;
  border-radius: ${props=>props.theme.mimir.border.radius.medium};
  box-shadow: ${props=>props.theme.mimir.shadow.medium};
  background-color: ${props=>props.theme.mimir.color.text.on};

  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.Zv};
`;FormFieldset.defaultProps={flexDirection:"column"}}}]);
//# sourceMappingURL=molecules-form-FormFieldset-stories.158cf0c2.iframe.bundle.js.map