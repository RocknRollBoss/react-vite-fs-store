import { Outlet } from "react-router-dom";
import { Header, Footer } from ".";
import { Toaster } from "react-hot-toast";
export const Layout: React.FC = () => {
  return (
    <>
      <Toaster position="top-right" />
      <div className=" min-h-screen flex flex-col text-white">
        <Header />
        <main className="grow text-black">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
