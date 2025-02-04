import React from "react";

function CodePreview() {
  return (
    <div className="mockup-code">
      <pre>
        <code>@echo off set "base_directory=%cd%" mkdir</code>
      </pre>
      <pre>
        <code>"%base_directory%\Folder1\Subfolder1.1" mkdir</code>
      </pre>
      <pre>
        <code>"%base_directory%\Folder1\Subfolder1.2" mkdir</code>
      </pre>
      <pre>
        <code>"%base_directory%\Folder2\Subfolder2.1" mkdir</code>
      </pre>
      <pre>
        <code>"%base_directory%\Folder2\Subfolder2.2" mkdir</code>
      </pre>
      <pre>
        <code>
          "%base_directory%\Folder3" echo Folders and subfolders created
        </code>
      </pre>
      <pre>
        <code>successfully!</code>
      </pre>
    </div>
  );
}

export default CodePreview;
