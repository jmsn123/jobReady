import React, { Component, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { useSelector, useDispatch } from "react-redux";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import ContentList from "./ContentList";
import { addNote } from "../redux/features/NoteTaker/NoteSlice";
import Hero from "./hero";
import styled from "styled-components";
export const TextEditor = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [content, setcontent] = useState("");
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const value = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const rawValue = convertToRaw(editorState.getCurrentContent()).blocks[0].text;
  const newNote = (value, event) => {
    event.preventDefault();
    setcontent(value);
    dispatch(addNote(rawValue));
    console.log("object");
  };
  const handleContent = () => {};
  return (
    <FormContainer>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
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
      <button onClick={(e) => newNote(value, e)}>Submit</button>
      {/* selectors and a function */}
      <ContentList Content={ContentList} handleContent={handleContent} />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background-color: orange;
`;
