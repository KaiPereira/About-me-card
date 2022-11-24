import React from "react";
import app from "./App.css"
import Footer from "./footer"
import Main from "./main"
import Image from "./image"

export default function App() {
  return (
      <div className="main">
        <Image />
        <Main />
        <Footer />
      </div>
  )
}

