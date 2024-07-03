import React, { useEffect, useRef, useState } from "react";
// import { BiCross } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";

const TextEditor = ({ onclick, data }) => {
  const quillRef = useRef(null);
  const state = useSelector(state => state.todo);
  console.log(state);
  useEffect(() => {
    if (quillRef.current && data) {
      // console.log(data);
      const editor = quillRef.current.getEditor();
      editor.clipboard.dangerouslyPasteHTML(data);
    }
  }, [data]);

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
  };

  return (
    <div className="flex flex-col gap-4 justify-start items-start border border-transparent">
      <ReactQuill
        theme="snow"
        formats={formats}
        modules={modules}
        className="md:w-[90%] text-left align-middle items-center h-[250px] mt-4 mx-8 mb-16"
        ref={quillRef}
        placeholder="Hey! CHAMP save your highlights for later !!"
      />
      <div className="flex justify-center items-center">
      <button
        className="border cursor-pointer px-8 py-4 bg-orange-500 text-white rounded-md mx-8 my-4 text-[18px] border-b-4 border-r-4 border-orange-700 transition-transform duration-200 ease-in-out hover:translate-x-1 hover:translate-y-1 hover:border-orange-500"
        onClick={() => onclick(quillRef.current.getEditor().root.innerHTML)}
      >
        save
      </button>
      {state.loading&&state.error===null ? <p className="p-4 rounded-[50%] border-[5px] border-gray-200 border-t-[5px] border-t-orange-500 spin"></p>:<p></p>}
      {!state.loading&&state.error===null ? <p className="text-orange-400 text-[35px]"><TiTick /></p> : <p></p>}
      {!state.loading&&state.error!==null ? <p className="text-red-700 text-[35px]"><RxCross1 /></p> : <p></p>}
      </div>
    </div>
  );
};

export default TextEditor;
