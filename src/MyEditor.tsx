import React, { useState } from "react";
import { convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";


const MyEditor: React.FC = () => {
    const [editorState, setEditorState] = useState<EditorState>(
        EditorState.createEmpty()
    );

    const onEditorStateChange = (newEditorState: EditorState) => {
        setEditorState(newEditorState);
    };

    return (
        <div className="App">
            <header className="App-header">Rich Text Editor Example</header>
            <div style={{ height: '100%' }}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                    wrapperClassName="wrapper-class"
                    editorClassName="editor-class"
                    toolbarClassName="toolbar-class"
                    editorStyle={{ border: "1px solid black", height: "30em" }} />
            </div>
            <div className="code-view">
                <p>HTML View </p>
                <textarea
                    className="text-area"
                    disabled
                    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                />
            </div>
        </div>
    );
};

export default MyEditor;
