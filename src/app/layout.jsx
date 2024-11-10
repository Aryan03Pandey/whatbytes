import Sidebar from "@/components/sidebar";
import "./globals.css";
import Navbar from "@/components/navbar";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="w-full max-w-[1600px] mx-auto">
        <Navbar />
        <div className="flex gap-4 min-h-[calc(100vh_-60px)]">
            <Sidebar />
          <div className="w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
