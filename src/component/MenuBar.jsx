import React from "react";

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter the URL", previousUrl);

    if (url === null) {
      return;
    }

    if (url === "") {
      editor.chain().focus().unsetLink().run();
      return;
    }

    editor.chain().focus().setLink({ href: url }).run();
  };

  const insertCodeBlock = () => {
    editor.chain().focus().toggleCodeBlock().run();
  };

  return (
    <div className="menu-bar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
        title="Bold"
      >
        <i className="fa fa-bold" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
        title="Italic"
      >
        <i className="fa fa-italic" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "is-active" : ""}
        title="Underline"
      >
        <i className="fa fa-underline" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
        title="Strike"
      >
        <i className="fa fa-strikethrough" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive("highlight") ? "is-active" : ""}
        title="Highlight"
      >
        <i className="fa fa-highlighter" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        title="Align Left"
      >
        <i className="fa fa-align-left" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
        title="Align Center"
      >
        <i className="fa fa-align-center" />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        title="Align Right"
      >
        <i className="fa fa-align-right" />
      </button>
      <button
        onClick={setLink}
        className={editor.isActive("link") ? "is-active" : ""}
        title="Insert Link"
      >
        <i className="fa fa-link" />
      </button>
      <button
        onClick={() => editor.chain().focus().unsetLink().run()}
        title="Remove Link"
      >
        <i className="fa fa-unlink" />
      </button>
      
      <button
        onClick={() => editor.commands.selectAll()}
        className="select-all-button"
        title="Select All"
      >
        <i className="fa fa-i-cursor" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleSubscript().run()}
        className={editor.isActive("subscript") ? "is-active" : ""}
        title="Subscript"
      >
        <i className="fa fa-subscript" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleSuperscript().run()}
        className={editor.isActive("superscript") ? "is-active" : ""}
        title="Superscript"
      >
        <i className="fa fa-superscript" />
      </button>
      <button
        onClick={() => editor.commands.undo()}
        title="Undo"
      >
        <i className="fa fa-undo" />
      </button>
      <button
        onClick={() => editor.commands.redo()}
        title="Redo"
      >
        <i className="fa fa-redo" />
      </button>
      {/* Add Code Block Button */}
      <button
        onClick={insertCodeBlock}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
        title="Insert Code Block"
      >
        <i className="fa fa-code" />
      </button>
      <button
        onClick={() => editor.commands.clearContent()}
        className="clear-all-button"
        title="Clear All"
      >
        <i className="fa fa-trash" />
      </button>

      
    </div>
  );
};

export default MenuBar;
