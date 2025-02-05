"use client";
import React, { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { programmerStructure } from "@/utils/folderStructure";
import { MdFileDownload } from "react-icons/md";

const FolderGenerator = () => {
  const [folderStructure, setFolderStructure] = useState(programmerStructure);

  const generateZip = () => {
    const zip = new JSZip();

    // Fungsi rekursif untuk membuat folder dan subfolder
    const addFoldersToZip = (zipInstance, structure) => {
      Object.keys(structure).forEach((folderName) => {
        const subFolder = zipInstance.folder(folderName);
        addFoldersToZip(subFolder, structure[folderName]);
      });
    };

    // Mulai membuat struktur folder
    addFoldersToZip(zip, folderStructure);

    // Generate file ZIP
    zip
      .generateAsync({ type: "blob" })
      .then((content) => {
        // Download file ZIP
        saveAs(content, "folders.zip");
      })
      .catch((error) => {
        console.error("Error generating ZIP:", error);
      });
  };

  return (
    <button onClick={generateZip} className="btn btn-primary">
      <MdFileDownload /> Generate and Download ZIP
    </button>
  );
};

export default FolderGenerator;
