import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
<link rel="icon" href="/favicon.ico"></link>
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Your Todo",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-7xl mx-auto">
          <Header></Header>
          <div>
          {children}
          </div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
