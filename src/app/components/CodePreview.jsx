"use client";
import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";

function CodePreview() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `
  <div className="flex justify-center items-center bg-blue-500 text-white p-4">
    <h1 className="text-2xl">Hello, World!</h1>
    <a>Hello Reactjs</a>
  </div>
  `;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative max-w-2xl mx-auto mt-24">
      <div className="bg-gray-900 text-white p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </span>
          <button
            onClick={copyToClipboard}
            className="btn btn-neutral btn-sm btn-square"
          >
            {copied ? "Copied!" : <FiCopy />}
          </button>
        </div>
        <div className="overflow-x-auto">
          <pre className="text-gray-300 bg-gray-800 p-4 rounded-md whitespace-pre overflow-x-auto">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default CodePreview;
