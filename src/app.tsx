import React from "react";
import Emoji from "./components/emoji";
import Footer from "./components/footer";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        maxHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Emoji />
      <Footer />
    </div>
  );
}
