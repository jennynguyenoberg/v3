import "../styles/globals.css";
import Head from "next/head";
import Navigation from "./components/navigation/page";
// import Footer from "./components/footer/page";

export const metadata = {
  title: "Jenny Nguyen Öberg — Designer & Developer",
  description: "Portfolio of Jenny Nguyen Öberg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <Navigation />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
