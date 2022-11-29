import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Title from '../../../Title/Title';

class DescriptionEditor extends Component {
  render() {
    return (
      <div className="App h-full overflow-auto">
        <div className="">
          <div className="bg-gray-500 w-full px-6 py-3">
            <Title />
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
            data="<p>Hello from CKEditor 5!</p>"
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
            className="h-full"
          />
        </div>
        <button className="mx-5 my-5 flex-shrink-0 bg-green-600 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200" type="button">
          Enregistrer
        </button>
        </div>
      </div>
    );
  }
}

export default DescriptionEditor;