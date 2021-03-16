import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import axios from '../../../ThemeLayouts/repository/api';
import './Templates.css';
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

function Templates(){

    const [templateFields, setTemplateFields] = useState([]);
    useEffect(() => {
        getFieldList();
    },[]);

    const getFieldList = () => {
        axios.get(`formfields`).then(res => {     
            setTemplateFields(res.data.data);
            // console.log(templateFields);   
        })   
        
      }
     
    return(
        <div>
             <div className="grid grid-cols-12 gap-3 mt-5">
                <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-3"> 
                    <div className="form-inline">
                        <label className="form-label">Template Name<span className="text-danger">*</span></label> 
                        <div className="input-group"> 
                            <div className="input-group-text">
                                <Icon.Clipboard className="w-4 h-4" />
                            </div> 
                            <input type="text" className="form-control form-control-sm" name="TemplateName"  placeholder="Enter Template Name" />                                
                        </div>
                    </div>
                </div>
             </div>
           
            <div className="grid grid-cols-12 gap-3 mt-5">
                <div className=" col-span-9 lg:col-span-9 sm:col-span-9 mt-3">
                    <h6 className="text-md font-medium leading-none mb-3 position-fixed">Field Editor</h6>
                  
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
                            // data="<p>Hello from the first editor working with the context!</p>"
                            onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                                 console.log( 'Editor1 is ready to use!', editor );
                            } }
                        />

                    </CKEditorContext>
                    
                </div>
                <div className=" col-span-3 lg:col-span-3 sm:col-span-3 ml-5">
                    <div className="overflow-x-auto" >
                        <h6 className="text-md font-medium leading-none mt-3">Field Name</h6>
                        <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-3" style={{overflow: 'auto',maxHeight: '350px',width:'250px'}}>
                            <table className="table mt-3">
                            
                                <tbody>
                                    {
                                        templateFields.map((value,index) =>{
                                            return <tr className="border-b whitespace-nowrap">
                                                        <td className="border-b whitespace-nowrap"><input type="checkbox" className="mr-3"></input>{value.FormFieldLabel}</td>
                                                        <td><Icon.Copy color="#2e4587" width="18px"  onClick={() => {navigator.clipboard.writeText(value.FormFieldKeyword)}}/></td>
                                                    </tr>
                                        })
                                    }
                                
                                </tbody>
                            </table>
                        
                        </div>
                    </div>
                </div>
            </div>
            {/* Button Section */}
            <div className="intro-y text-right mt-5">
                <div className="grid grid-cols-12 gap-3">
                    <div className="intro-y col-span-12 lg:col-span-12 flex">
                        <button className="btn btn-sm btn-dark-soft w-24 mr-1 ml-auto mb-2"> <Icon.X className="w-4 h-4 mr-2" /> Cancel </button>
                        <button type="submit" className="btn btn-sm btn-primary w-24 mr-1 mb-2"> <Icon.Save className="w-4 h-4 mr-2" /> Save </button>
                    </div>
                </div>
            </div>
            {/* end */}

        </div>
    )
}

export default Templates;