import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    const value = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    return (
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "textAlign",
              "history",
              "colorPicker",
            ],
            inline: {
              options: ["italic", "bold"],
              bold: { className: "demo-option-custom" },
              italic: { className: "demo-option-custom" },
              underline: { className: "demo-option-custom" },
              strikethrough: { className: "demo-option-custom" },
              monospace: { className: "demo-option-custom" },
              superscript: { className: "demo-option-custom" },
              subscript: { className: "demo-option-custom" },
            },
            blockType: {
              className: "demo-option-custom-wide",
              dropdownClassName: "demo-dropdown-custom",
            },
            fontSize: { className: "demo-option-custom-medium" },
          }}
        />
        {/* <textarea
          disabled
          value={value}
        ></textarea> */}
      </div>
    );
  }
}
