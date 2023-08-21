import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Component, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { EditorData } from '../data/dummy';
import { Header } from '../components';
const Editor = () => {
  return (
    <div className=' dark:bg-secondary-dark-bg m-2 md:m-10 pt-10 sm:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header title="Editor" category="App" />

    <RichTextEditorComponent>
        {/* <EditorData /> */}
      <Inject services={[HtmlEditor, Toolbar, Link, Image, QuickToolbar]} />
    </RichTextEditorComponent>
  </div>  )
}

export default Editor