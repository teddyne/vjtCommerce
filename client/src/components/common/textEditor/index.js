import React, { Component } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import MyCustomUploadAdapterPlugin from './customUploadAdapter'

class TextEditor extends Component {
      render() {
        const { value, onChange } = this.props // <- Dont mind this, just handling objects from props because Im using this as a shared component.

        const custom_config = {
          extraPlugins: [ MyCustomUploadAdapterPlugin ],
          toolbar: {
            items: [
              'heading',
              '|',
              'bold',
              'italic',
              'link',
              'bulletedList',
              'numberedList',
              '|',
              'blockQuote',
              'insertTable',
              '|',
              'imageUpload',
              'undo',
              'redo'
            ]
          },
          table: {
            contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
          }
        }

        return(
              <CKEditor
                required
                editor={ClassicEditor}
                config={custom_config}
                data={value}
                onChange={(event, editor) => {
                    const data = editor.getData()
                    onChange(data)
                }}
              />
        )
      }
}

export default TextEditor