import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import MenuBar from "./MenuBar";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Highlight,
      Underline,
      Link,
      Subscript,
      Superscript,
    ],
    content: "<p>Start editing...</p>",
    editorProps: {
      attributes: {
        style: "text-align: left;",
      },
    },
  });

  return (
    <div className="editor-container">
      <div className="editor-menu-bar">
        <MenuBar editor={editor} />
      </div>
      <div className="editor-content">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
