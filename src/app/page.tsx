import Image from "next/image";
import Navigation from "./components/Navigation";
import FolderGenerator from "./components/FolderGenerator";
import FolderStructurViewer from "./components/FolderStructurViewer";
export default function Home() {
  return (
    <>
      <header className="container mx-auto">
        <Navigation />
      </header>
      <main className="container mx-auto">
        <div className="w-2/3 mx-auto">
          <div className="p-4 h-28 flex items-center bg-slate-500 rounded-xl mb-5">
            <FolderGenerator />
          </div>
          <div className="bg-base-200 collapse collapse-arrow">
            <input type="checkbox" className="peer" />
            <div className="collapse-title">Folder Structure Preview</div>
            <div className="collapse-content">
              <FolderStructurViewer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
