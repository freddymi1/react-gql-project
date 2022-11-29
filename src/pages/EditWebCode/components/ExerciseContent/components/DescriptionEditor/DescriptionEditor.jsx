import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Title from '../../../Title/Title';

const DescriptionEditor = (props) => {
  return (
    <div className="App h-full overflow-auto">
      <div className="">
        <div className="bg-gray-500 w-full px-6 py-3">
          <Title setPrivacy={ props.setPrivacy } saveWebCode={ props.saveWebCode }  privacy={ props.privacy } />
        </div>
      <div className="w-full bg-gray-100 overflow-hidden m-auto z-40">
        <p className={ "bg-gray-100 px-6 py-3 text-gray-500 outline-none active:bg-indigo-800 focus:outline-none"}>
          DESCRIPTION
        </p>
      </div>
      <div className="p-4">
        <h2 className="text-gray-700 mb-5">Ajouter une description</h2>
        <CKEditor
          editor={ClassicEditor}
          data={ props.description }
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            props.setDescription(data)
          }}
          className="h-full"
        />
      </div>
      </div>
    </div>
  );
}

export default DescriptionEditor;