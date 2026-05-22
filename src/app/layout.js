import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";

const spaceGrotest = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "Study-Nook | Home",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${spaceGrotest.className} h-full antialiased`}
    >
      <body>
        <ThemeProvider attribute="data-theme">
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
          <Toaster
            style={{
              border: "1px solid #D97757",
              padding: "16px",
              color: "#D97757",
            }}
          ></Toaster>
        </ThemeProvider>
      </body>
    </html>
  );
}
