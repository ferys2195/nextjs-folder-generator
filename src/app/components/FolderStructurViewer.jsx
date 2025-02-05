import { programmerStructure } from "@/utils/folderStructure";
import React from "react";
import { FaFolderOpen } from "react-icons/fa";

function FolderStructurViewer() {
  const renderMenu = (items, iconsColor) => {
    return items.map((item) => (
      <li key={item.title}>
        <span>
          <FaFolderOpen className={iconsColor ?? "text-base-content"} />
          {item.title}
        </span>
        {item.child.length > 0 && (
          <ul>{renderMenu(item.child, "text-gray-500")}</ul>
        )}
      </li>
    ));
  };
  return (
    <ul className="menu bg-base-200 rounded-box w-full h-96 overflow-y-auto">
      {renderMenu(programmerStructure)}
    </ul>
  );
}

export default FolderStructurViewer;
