import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../styles/globals.scss";
import "../styles/custom.scss";
import SSRProvider from "react-bootstrap/SSRProvider";

export const metadata = {
  title: "Liefermax",
  description: "Liefermax übungsapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <body>
          <Navbar></Navbar>
          <main>{children}</main>
          <Footer></Footer>
        </body>
      </head>
    </html>
  );
}
