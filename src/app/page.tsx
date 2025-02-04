import Image from "next/image";
import Navigation from "./components/Navigation";
import CodePreview from "./components/CodePreview";
export default function Home() {
  return (
    <>
      <header className="container mx-auto">
        <Navigation />
      </header>
      <main className="container mx-auto">
        <div className="w-1/2 mx-auto">
          <CodePreview />
        </div>
      </main>
    </>
  );
}
