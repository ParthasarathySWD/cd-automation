import React, { Component, useCallback } from 'react';
// dropzone
import { useDropzone } from 'react-dropzone'
// feather icon
import * as Icon from 'react-feather';
// multi select
import Select from 'react-select';
// ck editor
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import Context from '@ckeditor/ckeditor5-core/src/context';
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import InlineEditor from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor";
import BalloonEditor from "@ckeditor/ckeditor5-editor-balloon/src/ballooneditor";
import DocumentEditor from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import UnderlinePlugin from "@ckeditor/ckeditor5-basic-styles/src/underline";
import StrikethroughPlugin from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import CodePlugin from "@ckeditor/ckeditor5-basic-styles/src/code";
import SubscriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import SuperscriptPlugin from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Font from "@ckeditor/ckeditor5-font/src/font";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import HeadingButtonsUI from "@ckeditor/ckeditor5-heading/src/headingbuttonsui";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';

// signature pad
import SignatureCanvas from 'react-signature-canvas'

// tooltip
import Tippy from '@tippyjs/react';

function Form() {

// dropdown
const DocTypeOption = [
{ value: '1', label: 'Title Commitment' },
{ value: '2', label: 'Closing' },
{ value: '3', label: 'Mortgage' }
]
// file upload
const onDrop = useCallback((acceptedFiles) => {
acceptedFiles.forEach((file) => {
const reader = new FileReader()

reader.onabort = () => console.log('file reading was aborted')
reader.onerror = () => console.log('file reading has failed')
reader.onload = () => {

const binaryStr = reader.result
console.log(binaryStr)
}
reader.readAsArrayBuffer(file)
})

}, [])
const { getRootProps, getInputProps } = useDropzone({ onDrop })

return (
<div>
  {/*
    <div className="intro-y flex items-center mt-6">
      <h2 className="text-lg font-medium mr-auto">
        Order Entry
      </h2>
    </div>  */}          
    <div className="grid grid-cols-12 gap-3 mt-5">
      <div className="intro-y col-span-12 lg:col-span-12">
        <div className="intro-y box  p-5">
          <div className="grid grid-cols-12 gap-3">
            <div className="intro-y col-span-12 lg:col-span-12">
              <h2 className="font-medium text-base mr-auto">
                Form Elements
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-3">
           <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
             <label className="form-label">User Name</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.User className="w-4 h-4" /></div> <input type="text" className="form-control form-control-sm" placeholder="Ex. Name" /> </div>
           </div>
           <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
             <label className="form-label">Loan Number</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Hash className="w-4 h-4" /></div> <input type="number" className="form-control form-control-sm" placeholder="Ex. 9876543224" /> </div>
           </div>
           <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
             <label className="form-label">Email</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Mail className="w-4 h-4" /></div> <input type="email" className="form-control form-control-sm" placeholder="Ex. demo@mail.com" /> </div>
           </div>
           <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
             <label className="form-label">Password</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Lock className="w-4 h-4" /></div> <input type="password" className="form-control form-control-sm" placeholder="Ex. Abcd@1234" /> </div>
           </div>
           <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
             <label className="form-label">Phone</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Phone className="w-4 h-4" /></div> <input type="number" className="form-control form-control-sm" placeholder="Ex. (541) 754-3010" /> </div>
           </div>
           <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
             <label className="form-label">Fax</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Printer className="w-4 h-4" /></div> <input type="number" className="form-control form-control-sm" placeholder="Ex. (541) 754-3010" /> </div>
           </div>
         </div>
         <div className="grid grid-cols-12 gap-3 mt-6">
          <div className="intro-y col-span-12 lg:col-span-12">
            <h2 className="font-medium text-base mr-auto">
              Address
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-3">
         <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
           <label className="form-label">Address line 1</label> 
           <div className="input-group"> <div className="input-group-text"><Icon.Map className="w-4 h-4" /></div> <input type="text" className="form-control form-control-sm" placeholder="Ex. Address line 1" /> </div>
         </div>
         <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
           <label className="form-label">Address line 2</label> 
           <div className="input-group"> <div className="input-group-text"><Icon.Map className="w-4 h-4" /></div> <input type="text" className="form-control form-control-sm" placeholder="Ex. Address line 2" /> </div>
         </div>

         <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
           <label className="form-label">Zip Code</label> 
           <div className="input-group"> <div className="input-group-text"><Icon.Hash className="w-4 h-4" /></div> <input type="number" className="form-control form-control-sm" placeholder="Ex. 99501" /> </div>
         </div>

         <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
           <label className="form-label">State</label> 
           <Select className="custom_select" options={DocTypeOption} />
         </div>
         <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
           <label className="form-label">City</label> 
           <Select className="custom_select" options={DocTypeOption} />
         </div>
         <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-3"> 
           <label className="form-label">Multiple Select</label> 
           <Select className="custom_select" isMulti options={DocTypeOption} />
         </div>
       </div>
       <div className="grid grid-cols-12 gap-3 mt-6">
        <div className="intro-y col-span-12 lg:col-span-12">
          <h2 className="font-medium text-base mr-auto">
            Comments
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-3">
       <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-3"> 
         <label className="form-label">Comments</label> 
         <textarea type="text" rows="5" className="form-control form-control-sm" placeholder="Ex. Comments" ></textarea>
       </div>
     </div>
     <div className="grid grid-cols-12 gap-3 mt-6">
      <div className="intro-y col-span-12 lg:col-span-12">
        <h2 className="font-medium text-base mr-auto">
          Additional 
        </h2>
      </div>
    </div>
    <div className="grid grid-cols-12 gap-3">
     <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-3 flex"> 
      <div className="form-check mt-2 mr-6">
        <input id="checkbox-switch-1" className="form-check-input" type="checkbox" value=""/>
        <label className="form-check-label" for="checkbox-switch-1">Chris Evans</label>
      </div>
      <div className="form-check mt-2 mr-6">
        <input id="checkbox-switch-2" className="form-check-input" type="checkbox" value=""/>
        <label className="form-check-label" for="checkbox-switch-2">Liam Neeson</label>
      </div>
      <div className="form-check mt-2">
        <input id="checkbox-switch-3" className="form-check-input" type="checkbox" value=""/>
        <label className="form-check-label" for="checkbox-switch-3">Daniel Craig</label>
      </div>
    </div>
    <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-3"> 
      <div className="form-check mt-2">
        <input id="checkbox-switch-1" className="form-check-input" type="checkbox" value=""/>
        <label className="form-check-label" for="checkbox-switch-1">Chris Evans</label>
      </div>
      <div className="form-check mt-2">
        <input id="checkbox-switch-2" className="form-check-input" type="checkbox" value=""/>
        <label className="form-check-label" for="checkbox-switch-2">Liam Neeson</label>
      </div>
      <div className="form-check mt-2">
        <input id="checkbox-switch-3" className="form-check-input" type="checkbox" value=""/>
        <label className="form-check-label" for="checkbox-switch-3">Daniel Craig</label>
      </div>
    </div>
    <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-3"> 
      <div className="form-check">
        <input id="checkbox-switch-7" className="form-check-switch" type="checkbox"/>
        <label className="form-check-label" for="checkbox-switch-7">Default switch checkbox input</label>
      </div>
    </div>
    <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-3 flex"> 
     <div className="form-check mt-2 mr-6">
      <input id="radio-switch-1" className="form-check-input" type="radio" name="vertical_radio_button" value="vertical-radio-chris-evans"/>
      <label className="form-check-label" for="radio-switch-1">Chris Evans</label>
    </div>
    <div className="form-check mt-2 mr-6">
      <input id="radio-switch-2" className="form-check-input" type="radio" name="vertical_radio_button" value="vertical-radio-liam-neeson"/>
      <label className="form-check-label" for="radio-switch-2">Liam Neeson</label>
    </div>
    <div className="form-check mt-2">
      <input id="radio-switch-3" className="form-check-input" type="radio" name="vertical_radio_button" value="vertical-radio-daniel-craig"/>
      <label className="form-check-label" for="radio-switch-3">Daniel Craig</label>
    </div>
  </div>
  <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-3"> 
   <div className="form-check mt-2">
    <input id="radio-switch-1" className="form-check-input" type="radio" name="vertical_radio_button_2" value="vertical-radio-chris-evans"/>
    <label className="form-check-label" for="radio-switch-1">Chris Evans</label>
  </div>
  <div className="form-check mt-2">
    <input id="radio-switch-2" className="form-check-input" type="radio" name="vertical_radio_button_2" value="vertical-radio-liam-neeson"/>
    <label className="form-check-label" for="radio-switch-2">Liam Neeson</label>
  </div>
  <div className="form-check mt-2">
    <input id="radio-switch-3" className="form-check-input" type="radio" name="vertical_radio_button_2" value="vertical-radio-daniel-craig"/>
    <label className="form-check-label" for="radio-switch-3">Daniel Craig</label>
  </div>
</div>



</div>

<div className="grid grid-cols-12 gap-3 mt-6">
  <div className="intro-y col-span-12 lg:col-span-12">
    <h2 className="font-medium text-base mr-auto">
      Validation 
    </h2>
  </div>
</div>

<div className="grid grid-cols-12 gap-3">
  <div className=" col-span-3 lg:col-span-3 sm:col-span-3 mt-3">
    <label for="input-state-2" className="form-label">Input Warning</label>
    <input id="input-state-2" type="text" className="form-control border-theme-23" placeholder="Input text"/>
    <div className="text-theme-23 mt-2">Attempting to reconnect to server...</div>
  </div>
  <div className=" col-span-3 lg:col-span-3 sm:col-span-3 mt-3">
    <label for="input-state-3" className="form-label">Input Error</label>
    <input id="input-state-3" type="text" className="form-control border-theme-24" placeholder="Input text"/>
    <div className="text-theme-24 mt-2">This field is required</div>
  </div>
</div>
<div className="grid grid-cols-12 gap-3 mt-6">
  <div className="intro-y col-span-12 lg:col-span-12">
    <h2 className="font-medium text-base mr-auto">
      Help Text with label
    </h2>
  </div>
</div>

<div className="grid grid-cols-12 gap-3">

 <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-3"> 
   <label for="input-state-2" className="form-label flex">Comments <Tippy content="Test Tooltip Content"><Icon.HelpCircle className="w-4 h-4 ml-2 text-theme-17" /></Tippy></label>
   <textarea type="text" rows="5" className="form-control form-control-sm" placeholder="Ex. Comments" ></textarea>
 </div>
</div>
<div className="grid grid-cols-12 gap-3 mt-6">
  <div className="intro-y col-span-12 lg:col-span-12">
    <h2 className="font-medium text-base mr-auto">
      Tool tip 
    </h2>
  </div>
</div>

<div className="grid grid-cols-12 gap-3">
  <div className=" col-span-3 lg:col-span-3 sm:col-span-3 mt-3">
    <Tippy content="Hello">
      <button className="btn btn-sm btn-dark-soft w-24 mr-1 ml-auto mb-2">My button</button>
    </Tippy>
  </div>
</div>
<div className="grid grid-cols-12 gap-3 mt-6">
  <div className="intro-y col-span-12 lg:col-span-12">
    <h2 className="font-medium text-base mr-auto">
      Modal Popup 
    </h2>
  </div>
</div>

<div className="grid grid-cols-12 gap-3">
  <div className=" col-span-3 lg:col-span-3 sm:col-span-3 mt-3">
    <Tippy content="Click Open Popup">
      <button className="btn btn-sm btn-dark-soft w-24 mr-1 ml-auto mb-2"><a data-toggle="modal" data-target="#header-footer-modal-preview">Popup Button</a></button>
    </Tippy>
  </div>
</div>
<div className="grid grid-cols-12 gap-3 mt-6">
  <div className="intro-y col-span-12 lg:col-span-12">
    <h2 className="font-medium text-base mr-auto">
      Dropzone File Upload  and Signature pad
    </h2>
  </div>
</div>

<div className="grid grid-cols-12 gap-3">
  <div className=" col-span-6 lg:col-span-6 sm:col-span-6 mt-3">
    <div className="preview text-center"><div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      <button className="btn btn-sm btn-secondary w-24 mr-1 mb-2"> <Icon.File className="w-4 h-4 mr-2" /> Upload </button>

      <div className="">
        <div className="text-lg font-medium">Drop files here or click to upload.</div>
        <div className="text-gray-600"> This is just a demo dropzone. Selected files are <span className="font-medium">not</span> actually uploaded. </div>
      </div>
    </div>
  </div>
</div>
<div className=" col-span-6 lg:col-span-6 sm:col-span-6 mt-3">
  <h2 className="font-medium text-base mr-auto">
    Sign Here
  </h2>
  <SignatureCanvas penColor='black'
  canvasProps={{width: 250, height: 80, className: 'sigCanvas border'}} />
</div>
</div>
<div className="grid grid-cols-12 gap-3 mt-6">
  <div className="intro-y col-span-12 lg:col-span-12">
    <h2 className="font-medium text-base mr-auto">
      Tabs 
    </h2>
  </div>
</div>

<div className="grid grid-cols-12 gap-3">
  <div className="col-span-12 border-b border-gray-200">                         
    <div className="nav nav-tabs flex-col sm:flex-row justify-center lg:justify-start" role="tablist"> 
      <a data-toggle="tab" data-target="#custom_tab_1" href="javascript:;" className="py-4 sm:mr-8 active" role="tab" aria-selected="true">tab 1</a> 
      <a data-toggle="tab" data-target="#custom_tab_2" href="javascript:;" className="py-4 sm:mr-8" role="tab" aria-selected="false">tab 2</a> 
      <a data-toggle="tab" data-target="#custom_tab_3" href="javascript:;" className="py-4 sm:mr-8" role="tab" aria-selected="false">tab 3</a> 
      <a data-toggle="tab" data-target="#custom_tab_4" href="javascript:;" className="py-4 sm:mr-8" role="tab" aria-selected="false">tab 4</a> 
    </div>
  </div>
  <div className="col-span-12"> 
    <div className="intro-y tab-content mt-2">
      <div id="custom_tab_1" className="tab-pane active" role="tabpanel">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-12">
            tab content 1
          </div>
        </div>

      </div>   
      <div id="custom_tab_2" className="tab-pane" role="tabpanel">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-12">
            tab content 2
          </div>
        </div>
      </div>   
      <div id="custom_tab_3" className="tab-pane" role="tabpanel">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-12">
            tab content 3
          </div>
        </div>
      </div>   
      <div id="custom_tab_4" className="tab-pane" role="tabpanel">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-12">
            tab content 4
          </div>
        </div>
      </div>                        
    </div>                        
  </div>


</div>
<div className="grid grid-cols-12 gap-3 mt-6">
  <div className="intro-y col-span-12 lg:col-span-12">
    <h2 className="font-medium text-base mr-auto">
      CK Editor 
    </h2>
  </div>
</div>

<div className="grid grid-cols-12 gap-3">
  <div className=" col-span-12 lg:col-span-12 sm:col-span-12 mt-3">

    <CKEditorContext context={ Context }>
      <CKEditor
      editor={ ClassicEditor }
      config={ {
      plugins: [ Font,
      EssentialsPlugin,
      BoldPlugin,
      UnderlinePlugin,
      StrikethroughPlugin,
      ItalicPlugin,
      LinkPlugin,
      ParagraphPlugin,
      CodePlugin,
      SubscriptPlugin,
      SuperscriptPlugin,
      EasyImage,
      Heading,
      HeadingButtonsUI,
      Highlight, Table, TableToolbar, TableProperties, TableCellProperties, Alignment, Autoformat ],
      toolbar: [ "fontSize",
      "fontFamily",
      "fontColor",
      "fontBackgroundColor", "alignment",
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "code",
      "subscript",
      "superscript",
      "link",
      "undo",
      "redo",
      "imageUpload",
      "highlight","insertTable", ]
    } }
    data="<p>Hello from the first editor working with the context!</p>"
    onReady={ editor => {
    // You can store the "editor" and use when it is needed.
    console.log( 'Editor1 is ready to use!', editor );
  } }
  />

</CKEditorContext>
</div>
</div>

</div>
</div>
</div>    
<div className="intro-y text-right mt-3">

  <div className="grid grid-cols-12 gap-3">
    <div className="intro-y col-span-12 lg:col-span-12 flex">
      <button className="btn btn-sm btn-dark-soft w-24 mr-1 ml-auto mb-2"> <Icon.X className="w-4 h-4 mr-2" /> Cancel </button>
      <button className="btn btn-sm btn-primary w-24 mr-1 mb-2"> <Icon.Save className="w-4 h-4 mr-2" /> Save </button>
    </div>  
  </div>  
</div>  


<div id="header-footer-modal-preview" className="modal" aria-hidden="true">
 <div className="modal-dialog ">
   {/*<div className="modal-dialog modal-sm"> */}
     {/*<div className="modal-dialog modal-lg"> */}
      {/* <div className="modal-dialog modal-xl"> */}
       <div className="modal-content">

         <div className="modal-header">
           <h2 className="font-medium text-base mr-auto">Popup Heading</h2>
           <a data-dismiss="modal" href="javascript:;"> <Icon.X className="w-5 h-5 text-gray-500" /> </a>
         </div> 


         <div className="modal-body pt-0">
          <div className=" grid grid-cols-12 gap-4 gap-y-3">
           <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-3"> 
             <label className="form-label">User Name</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.User className="w-4 h-4" /></div> <input type="text" className="form-control form-control-sm" placeholder="Ex. Name" /> </div>
           </div>
           <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-3"> 
             <label className="form-label">Loan Number</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Hash className="w-4 h-4" /></div> <input type="number" className="form-control form-control-sm" placeholder="Ex. 9876543224" /> </div>
           </div>
           <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-3"> 
             <label className="form-label">Email</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Mail className="w-4 h-4" /></div> <input type="email" className="form-control form-control-sm" placeholder="Ex. demo@mail.com" /> </div>
           </div>
           <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-3"> 
             <label className="form-label">Password</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Lock className="w-4 h-4" /></div> <input type="password" className="form-control form-control-sm" placeholder="Ex. Abcd@1234" /> </div>
           </div>
           <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-3"> 
             <label className="form-label">Phone</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Phone className="w-4 h-4" /></div> <input type="number" className="form-control form-control-sm" placeholder="Ex. (541) 754-3010" /> </div>
           </div>
           <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-3"> 
             <label className="form-label">Fax</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Printer className="w-4 h-4" /></div> <input type="number" className="form-control form-control-sm" placeholder="Ex. (541) 754-3010" /> </div>
           </div>
         </div>
       </div> 

       <div className="modal-footer text-right"> <button type="button" data-dismiss="modal" className="btn btn-outline-secondary btn-sm w-20 mr-1">Cancel</button> <button type="button" className="btn btn-primary btn-sm w-20">Send</button> </div>

     </div>
   </div>
 </div> 
</div>

)
}

export default Form;
