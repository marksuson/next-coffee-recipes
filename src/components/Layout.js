/* eslint-disable @next/next/no-img-element */
import Sidebar from "./Sidebar";
import watermark from "../../public/white-coffee-cup.png";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="h-screen w-full ml-56 bg-brown-500 relative">
        <section className="absolute top-0 left-0 z-10 h-full w-full grid place-content-center opacity-20">
          <img src={watermark.src} alt="Background watermark" />
        </section>
        <section id="mainLayout" className="relative z-20">
          {children}
        </section>
      </main>
    </div>
  );
}
