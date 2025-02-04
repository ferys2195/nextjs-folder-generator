import React from "react";
import { FiCopy } from "react-icons/fi";

function CodePreview() {
  return (
    <>
      <div class="relative max-w-2xl mx-auto mt-24">
        <div class="bg-gray-900 text-white p-4 rounded-md">
          <div class="flex justify-between items-center mb-2">
            <span class="text-gray-400">Code:</span>
            <button
              class="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md"
              data-clipboard-target="#code"
            >
              Copy
            </button>
          </div>
          <div class="overflow-x-auto">
            <pre id="code" class="text-gray-300">
              <code>
                &lt;div class="flex justify-center items-center bg-blue-500
                text-white p-4"&gt; &lt;h1 class="text-2xl"&gt;Hello, Tailwind
                CSS!&lt;/h1&gt; &lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>

    //<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>
    //<script>new ClipboardJS('.code');</script>
  );
}

export default CodePreview;
