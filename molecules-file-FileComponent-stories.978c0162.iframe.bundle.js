/*! For license information please see molecules-file-FileComponent-stories.978c0162.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_mimirorg_component_library=self.webpackChunk_mimirorg_component_library||[]).push([[3393],{"./src/components/molecules/file/FileComponent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FileComponent_stories});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/@styled-icons/styled-icon/index.esm.js"),Attachment=react.forwardRef((function(props,ref){return react.createElement(index_esm.r,(0,esm_extends.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},props,{ref}),react.createElement("path",{d:"M18.5 16H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h12.5a2.5 2.5 0 0 1 0 5H9c-.55 0-1-.45-1-1s.45-1 1-1h9.5V9.5H9a2.5 2.5 0 0 0 0 5h10.5c2.21 0 4-1.79 4-4s-1.79-4-4-4H7c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5h11.5V16z"}))}));Attachment.displayName="Attachment";var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),atoms=__webpack_require__("./src/components/atoms/index.ts"),services=__webpack_require__("./src/components/core/services/index.ts"),services_file=__webpack_require__("./src/components/core/services/file.ts");const FileComponentContainer=styled_components_browser_esm.ZP.div``;FileComponentContainer.defaultProps={};const FileInputContainer=styled_components_browser_esm.ZP.div``;FileInputContainer.defaultProps={};var Description=react.forwardRef((function(props,ref){return react.createElement(index_esm.r,(0,esm_extends.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},props,{ref}),react.createElement("path",{d:"M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"}))}));Description.displayName="Description";var Clear=react.forwardRef((function(props,ref){return react.createElement(index_esm.r,(0,esm_extends.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},props,{ref}),react.createElement("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}))}));Clear.displayName="Clear";var Textarea=__webpack_require__("./src/components/molecules/inputs/textarea/Textarea.ts");const FileItemContainer=styled_components_browser_esm.ZP.div`
  display: flex;
  align-content: left;
  align-items: center;
  flex-direction: row;

  textarea {
    min-height: 80px;
  }

  & .fileitem-delete {
    :hover {
      cursor: pointer;
      border: 2px solid black;
      border-radius: 50%;
    }
  }

  @media screen and ${props=>props.theme.mimir.queries.phoneAndBelow} {
    flex-direction: column;

    textarea {
      width: 100%;
    }
  }
`,FileInfoContainer=styled_components_browser_esm.ZP.div`
  display: flex;
  width: 30%;
  align-content: center;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  margin-right: ${props=>props.theme.mimir.spacing.xl};
  padding-left: ${props=>props.theme.mimir.spacing.s};
  padding-right: ${props=>props.theme.mimir.spacing.s};

  :hover {
    outline: 1px solid ${props=>props.theme.mimir.color.primary.base};
    cursor: pointer;
  }

  @media screen and ${props=>props.theme.mimir.queries.phoneAndBelow} {
    margin-top: ${props=>props.theme.mimir.spacing.xl};
    margin-bottom: ${props=>props.theme.mimir.spacing.xl};
    width: 100%;
  }
`,FileIconContainer=styled_components_browser_esm.ZP.div`
  display: flex;
  min-width: 50px;

  @media screen and ${props=>props.theme.mimir.queries.phoneAndBelow} {
  }
`,FileTextareaContainer=styled_components_browser_esm.ZP.div`
  width: 70%;

  @media screen and ${props=>props.theme.mimir.queries.phoneAndBelow} {
    width: 100%;
  }
`,FileTextContainer=styled_components_browser_esm.ZP.div`
  display: flex;
  flex-direction: column;
  max-width: 150px;
  margin-left: ${props=>props.theme.mimir.spacing.l};
  margin-right: ${props=>props.theme.mimir.spacing.l};

  @media screen and ${props=>props.theme.mimir.queries.phoneAndBelow} {
    max-width: none;
    width: 70%;

    h4,
    p {
      margin: 0px;
    }
  }
`;FileItemContainer.defaultProps={};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FileItemComponent=({fileInfo,onRemove,onClick,onDescriptionChange,placeholder,tooltip,disabled})=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:null!=fileInfo&&(0,jsx_runtime.jsxs)(FileItemContainer,{children:[(0,jsx_runtime.jsxs)(FileInfoContainer,{onClick:()=>{null!=onClick&&onClick(fileInfo)},children:[(0,jsx_runtime.jsxs)(FileIconContainer,{children:[(0,jsx_runtime.jsx)(Description,{size:24}),(0,jsx_runtime.jsx)(atoms.u,{content:tooltip??"Remove file",children:!1===disabled&&(0,jsx_runtime.jsx)(Clear,{className:"fileitem-delete",size:16,color:"red",onClick:e=>{e.stopPropagation(),onRemove(fileInfo.id)}})})]}),(0,jsx_runtime.jsxs)(FileTextContainer,{children:[(0,jsx_runtime.jsx)(atoms.xv,{as:"p",useEllipsis:!0,children:fileInfo.fileName}),(0,jsx_runtime.jsxs)(atoms.xv,{variant:"label-medium",children:[fileInfo.fileSize," byte"]})]})]}),(0,jsx_runtime.jsx)(FileTextareaContainer,{children:(0,jsx_runtime.jsx)(Textarea.g,{placeholder:placeholder??"Enter a file description here",onChange:data=>onDescriptionChange(fileInfo.id,data.target.value),value:fileInfo.description,disabled})})]})});try{FileItemComponent.displayName="FileItemComponent",FileItemComponent.__docgenInfo={description:"",displayName:"FileItemComponent",props:{fileInfo:{defaultValue:null,description:"",name:"fileInfo",required:!0,type:{name:"FileInfo"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(id: number) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(file: FileInfo) => void"}},onDescriptionChange:{defaultValue:null,description:"",name:"onDescriptionChange",required:!0,type:{name:"(id: number, description: string) => void"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/file/components/FileItemComponent.tsx#FileItemComponent"]={docgenInfo:FileItemComponent.__docgenInfo,name:"FileItemComponent",path:"src/components/molecules/file/components/FileItemComponent.tsx#FileItemComponent"})}catch(__react_docgen_typescript_loader_error){}const FileComponent=(0,react.forwardRef)(((props,ref)=>{const{value,onChange,placeholder,tooltip,buttonText,disabled}=props,theme=(0,styled_components_browser_esm.Fg)(),inputFile=(0,react.useRef)(null),[files,setFiles]=(0,react.useState)(value);return(0,react.useEffect)((()=>{null!=onChange&&onChange(files)}),[files]),(0,jsx_runtime.jsxs)(FileComponentContainer,{ref,children:[(0,jsx_runtime.jsxs)(FileInputContainer,{children:[(0,jsx_runtime.jsx)("input",{type:"file",onChange:e=>((event,files,setFiles)=>{event.stopPropagation(),event.preventDefault();const inputFiles=event.currentTarget.files;if(null==inputFiles)return;const addedFiles=Array.from(inputFiles),filesToBeAdded=[];addedFiles.forEach((async file=>{const bytes=await(0,services.s3)(file),newFile={id:(0,services.pu)(),fileName:file.name,fileSize:file.size,file:null!=bytes?bytes.toString():null,contentType:file.type,description:""};filesToBeAdded.push(newFile);const list=[...files,...filesToBeAdded];setFiles(list)}))})(e,files,setFiles),multiple:!0,ref:inputFile,style:{display:"none"}}),(0,jsx_runtime.jsx)(atoms.zx,{icon:(0,jsx_runtime.jsx)(Attachment,{size:24}),onClick:()=>inputFile?.current?.click(),spacing:{pl:theme.mimir.spacing.l,pr:theme.mimir.spacing.l},disabled,children:buttonText})]}),files&&files.map(((info,index)=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(FileItemComponent,{fileInfo:info,onRemove:id=>((id,files,setFiles)=>{setFiles([...files.filter((f=>f.id!==id))])})(id,files,setFiles),onClick:file=>(file=>{if(console.log(file),null==file?.file)return;const blob=(0,services_file.S)(file.file),url=window.URL.createObjectURL(blob);window.open(url,"_blank")})(file),onDescriptionChange:(id,description)=>((id,description,files,setFiles)=>{setFiles(files.map((x=>x.id===id?{...x,description}:x)))})(id,description,files,setFiles),placeholder,tooltip,disabled})},index)))]})}));FileComponent.displayName="FileComponent",FileComponent.defaultProps={placeholder:"Enter file description here...",tooltip:"Add file",buttonText:"Add file",disabled:!1};try{FileComponent.displayName="FileComponent",FileComponent.__docgenInfo={description:"",displayName:"FileComponent",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"FileInfo[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((files: FileInfo[]) => void)"}},placeholder:{defaultValue:{value:"Enter file description here..."},description:"",name:"placeholder",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"Add file"},description:"",name:"tooltip",required:!1,type:{name:"string"}},buttonText:{defaultValue:{value:"Add file"},description:"",name:"buttonText",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/file/FileComponent.tsx#FileComponent"]={docgenInfo:FileComponent.__docgenInfo,name:"FileComponent",path:"src/components/molecules/file/FileComponent.tsx#FileComponent"})}catch(__react_docgen_typescript_loader_error){}const Default={args:{value:[],onChange:files=>{files&&files.length>0&&alert(files[0].fileName)},disabled:!1}},FileComponent_stories={title:"Molecules/File",component:FileComponent};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: files,\n    onChange: onFileChange,\n    disabled: false\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/molecules/inputs/textarea/Textarea.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>Textarea});var styled_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/core/theme/helpers/index.ts");const Textarea=styled_components__WEBPACK_IMPORTED_MODULE_1__.ZP.textarea`
  border: 1px solid ${props=>props.theme.mimir.color.outline.base};
  border-radius: ${props=>props.theme.mimir.border.radius.medium};
  min-height: 150px;
  width: 100%;
  padding: ${props=>props.theme.mimir.spacing.base};
  color: ${props=>props.theme.mimir.color.text.base};

  background-color: ${props=>props.theme.mimir.color.pure.base};
  color: ${props=>props.theme.mimir.color.background.on};

  :disabled {
    color: ${props=>props.theme.mimir.color.surface.variant.on};
    background-color: ${props=>props.theme.mimir.color.outline.base};
  }

  ${(0,_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.qU)("body-large")};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.T_};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.W$};
  ${_core_theme_helpers__WEBPACK_IMPORTED_MODULE_0__.bv};
`},"./node_modules/base-64/base64.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;module=__webpack_require__.nmd(module),function(root){var freeExports=exports,freeGlobal=(module&&module.exports,"object"==typeof __webpack_require__.g&&__webpack_require__.g);freeGlobal.global!==freeGlobal&&freeGlobal.window;var InvalidCharacterError=function(message){this.message=message};(InvalidCharacterError.prototype=new Error).name="InvalidCharacterError";var error=function(message){throw new InvalidCharacterError(message)},TABLE="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",REGEX_SPACE_CHARACTERS=/[\t\n\f\r ]/g,base64={encode:function(input){input=String(input),/[^\0-\xFF]/.test(input)&&error("The string to be encoded contains characters outside of the Latin1 range.");for(var a,b,c,buffer,padding=input.length%3,output="",position=-1,length=input.length-padding;++position<length;)a=input.charCodeAt(position)<<16,b=input.charCodeAt(++position)<<8,c=input.charCodeAt(++position),output+=TABLE.charAt((buffer=a+b+c)>>18&63)+TABLE.charAt(buffer>>12&63)+TABLE.charAt(buffer>>6&63)+TABLE.charAt(63&buffer);return 2==padding?(a=input.charCodeAt(position)<<8,b=input.charCodeAt(++position),output+=TABLE.charAt((buffer=a+b)>>10)+TABLE.charAt(buffer>>4&63)+TABLE.charAt(buffer<<2&63)+"="):1==padding&&(buffer=input.charCodeAt(position),output+=TABLE.charAt(buffer>>2)+TABLE.charAt(buffer<<4&63)+"=="),output},decode:function(input){var length=(input=String(input).replace(REGEX_SPACE_CHARACTERS,"")).length;length%4==0&&(length=(input=input.replace(/==?$/,"")).length),(length%4==1||/[^+a-zA-Z0-9/]/.test(input))&&error("Invalid character: the string to be decoded is not correctly encoded.");for(var bitStorage,buffer,bitCounter=0,output="",position=-1;++position<length;)buffer=TABLE.indexOf(input.charAt(position)),bitStorage=bitCounter%4?64*bitStorage+buffer:buffer,bitCounter++%4&&(output+=String.fromCharCode(255&bitStorage>>(-2*bitCounter&6)));return output},version:"1.0.0"};void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return base64}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=molecules-file-FileComponent-stories.978c0162.iframe.bundle.js.map