import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({onclick}) => {
  const quillRef = useRef("");
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "blockquote",
    "color",
    "list",
    "bullet",
    "indent",
    "link",
    "clean",
  ];
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, false] }],
        ["bold", "italic", "underline", "blockquote"],
        [{ color: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["clean"],
      ],
    },
    // handlers: {
    //   // handlers object will be merged with default handlers object
    //   link: function (value) {
    //     if (value) {
    //       const href = prompt("Enter the URL");
    //       this.quill.format("link", href);
    //     } else {
    //       this.quill.format("link", false);
    //     }
    //   },
    // },
    // Clipboard : {
    //   matchVisual : true,
    // }
  };
  return (
    <div className="flex flex-col gap-4 justify-start items-start border">
      <ReactQuill
        theme="snow"
        formats={formats}
        modules={modules}
        className="md:w-[90%] text-left align-middle items-center h-[250px] mt-4 mx-8 mb-16"
        ref={quillRef}
        placeholder="Hey! CHAMP save your highlights for later !!"
      />
      <button
        className="border cursor-pointer px-8 py-4 bg-orange-500 text-white rounded-md mx-8 my-4 text-[18px]"
        onClick={()=> onclick(quillRef.current.value)}
      >
        save
      </button>
    </div>
  );
};

export default TextEditor;
