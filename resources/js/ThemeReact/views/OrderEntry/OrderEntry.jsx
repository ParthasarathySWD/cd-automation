import React, { Component, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import * as Icon from 'react-feather';
import Select from 'react-select'

function OrderEntry() {


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


    const DocTypeOption = [
  { value: '1', label: 'Title Commitment' },
  { value: '2', label: 'Closing' },
  { value: '3', label: 'Mortgage' }
]

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
                            Step 1
                        </h2>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    <div className="mt-3 col-span-3"> <label for="regular-form-2" className="form-label">Loan Number</label> 
                    <div className="input-group"> <div id="input-group-email" className="input-group-text">#</div> <input type="text" className="form-control form-control-sm" placeholder="Ex. 9876543224"/> </div>
                    </div>


                </div>
            </div>
        </div>
    </div>        
    <div className="grid grid-cols-12 gap-3 mt-5">
        <div className="intro-y col-span-12 lg:col-span-12">
            <div className="intro-y box p-5">
                <div className="grid grid-cols-12 gap-3">
                    <div className="intro-y col-span-12 lg:col-span-12 pb-0">
                        <h2 className="font-medium text-base mr-auto">
                            Step 2 : <span className="font-normal">Upload your prelim document</span>
                        </h2>
                    </div>
                    <div className="intro-y col-span-12 lg:col-span-6">
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
                    <div className="intro-y col-span-12 lg:col-span-6">
 <table className="table table--sm">
         <tbody>
             <tr>
                 <td className="border-b dark:border-dark-5"><b>Prelim</b></td>
                 <td className="border-b dark:border-dark-5">text.pdf</td>
                 <td className="border-b dark:border-dark-5"><Icon.Trash className="w-4 h-4 text-theme-24" /></td>
             </tr>
         </tbody>
     </table>

 </div>
            </div>
        </div>
    </div>
</div>
<div className="grid grid-cols-12 gap-3 mt-5">
    <div className="intro-y col-span-12 lg:col-span-12">
        <div className="intro-y box p-5">
            <div className="grid grid-cols-12 gap-3">
                <div className="intro-y col-span-12 lg:col-span-12 pb-0">
                    <h2 className="font-medium text-base mr-auto">
                        Step 3 : <span className="font-normal">Upload your supporting documents</span>
                    </h2>
                </div>
                <div className="intro-y col-span-12 lg:col-span-6">
                    <div className="preview text-center">
                    <div className="dropzone" {...getRootProps()}>
                      <input {...getInputProps()} />
                      <button className="btn btn-sm btn-secondary w-24 mr-1 mb-2"> <Icon.File className="w-4 h-4 mr-2" /> Upload </button>

                        <div className="text-lg font-medium">Drop files here or click to upload.</div>
                        <div className="text-gray-600"> This is just a demo dropzone. Selected files are <span className="font-medium">not</span> actually uploaded. </div>
                </div>
            </div>
        </div>
                    <div className="intro-y col-span-12 lg:col-span-6">
 <table className="table table--sm">
         <tbody>
             <tr>
                 <td className="border-b dark:border-dark-5"><Select className="custom_select" options={DocTypeOption} /></td>
                 <td className="border-b dark:border-dark-5">text.pdf</td>
                 <td className="border-b dark:border-dark-5"><Icon.Trash className="w-4 h-4 text-theme-24" /></td>
             </tr>
             <tr>
                 <td className="border-b dark:border-dark-5"><Select className="custom_select" options={DocTypeOption} /></td>
                 <td className="border-b dark:border-dark-5">text.pdf</td>
                 <td className="border-b dark:border-dark-5"><Icon.Trash className="w-4 h-4 text-theme-24" /></td>
             </tr>
             <tr>
                 <td className="border-b dark:border-dark-5"><Select className="custom_select" options={DocTypeOption} /></td>
                 <td className="border-b dark:border-dark-5">text.pdf</td>
                 <td className="border-b dark:border-dark-5"><Icon.Trash className="w-4 h-4 text-theme-24" /></td>
             </tr>
             <tr>
                 <td className="border-b dark:border-dark-5"><Select className="custom_select" options={DocTypeOption} /></td>
                 <td className="border-b dark:border-dark-5">text.pdf</td>
                 <td className="border-b dark:border-dark-5"><Icon.Trash className="w-4 h-4 text-theme-24" /></td>
             </tr>
         </tbody>
     </table>

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
</div>

)
}

export default OrderEntry;
