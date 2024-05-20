import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ButtonEditor, Editor } from './styles';

export const Markdown = ({ onCancel, onSave, nameButton, setValue }) => {
  return (
    <>
      <Editor>
        <CKEditor
          editor={ClassicEditor}
          config={{
            toolbar: [
              'undo',
              'redo',
              '|',
              'heading',
              '|',
              'bold',
              'italic',
              'blockQuote',
              '|',
              'numberedList',
              'bulletedList',
            ],
          }}
          onChange={(_, editor) => {
            setValue(editor.getData());
          }}
        />
      </Editor>
      <ButtonEditor>
        <button onClick={onSave}>{nameButton.first}</button>
        <button onClick={() => onCancel(false)}>{nameButton.second}</button>
      </ButtonEditor>
    </>
  );
};
