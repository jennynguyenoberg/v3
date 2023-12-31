"use client";
import "../styles/globals.css";
import Head from "next/head";
import Navigation from "./components/navigation/page";
import Footer from "./components/footer/page";
import Contact from "./sections/contact/page";
import React, { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [highlightColor, setHighlightColor] = useState("#8b80e5");

  useEffect(() => {
    const colors = ["#8b80e5", "#b7e0e6"];
    const handleMouseDown = () => {
      const color = colors.shift();
      setHighlightColor(color);
      colors.push(color);
    };

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <div style={{ "--highlight-color": highlightColor }}>
          <Navigation />
          {children}
          <Contact />
          <Footer />
        </div>
      </body>
    </html>
  );
}
