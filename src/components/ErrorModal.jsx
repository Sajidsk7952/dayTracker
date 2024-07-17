// ErrorModal.js
import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorModal = ({ isOpen, onClose, errorMessage }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[50]">
      <div className="bg-white p-6 rounded shadow-lg z-10">
        <h2 className="text-2xl font-semibold mb-4">Error</h2>
        <p>{errorMessage}</p>
        <button
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
          onClick={() => {
            navigate("/");
            onClose();
          }}
        >
          Go To Home
        </button>
      </div>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default ErrorModal;
