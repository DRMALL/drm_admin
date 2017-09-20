import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.editor = null
  }

  componentDidMount() {
    this.getRef()
  }

  getRef() {
    const editor = this.refs.editor.getEditor()
  }

  render() {
    return(
      <ReactQuill value={this.props.value}
                  onChange={this.props.onChange}
                  modules={this.props.modules || Editor.modules}
                  formats={Editor.formats}
                  theme={'snow'}
                  bounds={this.props.bounds}
                  placeholder="开始编辑"
                  ref='editor'>
        <div 
            style={{minHeight: '300px'}}                     
          />
      </ReactQuill>
    )
  }
}

Editor.modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6]}],
    // [{size: []}],
    [{ 'color': [] }, { 'background': [] }], 
    ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
    [{'list': 'ordered'}, {'list': 'bullet'}], 
     // {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'], // video
    [{align: []}],[{ 'direction': 'rtl' }],
    ['clean']
  ]
}

Editor.formats = [
  'header', 'font', 'size', 'color', 'background',
  'bold', 'italic', 'underline', 'strike', 'blockquote','code-block',
  'list', 'bullet', 'indent', 'align', 'direction',
  'link', 'image', 'video'
]
